import numpy as np
import random
import itertools
import json
from sklearn.preprocessing import LabelEncoder
from collections import Counter


def DataGenerator(n=1000):
    """
    Function which generates artificial data. Each inventory item has a distribution
    linked to it, which governs how likely each item is to be bought together with another item.
    The samples are generated in a json format.

    :param n: number of data samples to be generated

    :return: a JSON of the synthesised order data
    """

    order_list = {}
    inventory,_ = GenInventory()
    p = np.random.dirichlet(np.ones(len(inventory))/25,size=len(inventory)) # impose artificial trend
    probability_table= {item:prob for (item,prob) in zip(inventory,p)} # assign each item its own distribution
    for i in range(n):
        orderID = f"order{i+1}_ID"
        item1 = random.sample(inventory,1)[0]
        item2 = np.random.choice(inventory,p=probability_table[item1])
        order_list[orderID] = {"item":item1,"together_with":item2}
    return order_list

def jsonParser(order_list):
    """Parses a json into a python dictionary object.

        :param order_list: order list as a JSON file

        :return: a pythonb dictionary object of the parsed JSON data
    """
    parsed_json = json.loads(order_list)
    return parsed_json

def GenInventory():
    """
    Generates an inventory of all items sold and creates a corresponding label encoder.

        :return: inventory and a fitted label encoder
    """
    type_list = ["t-shirt", "trousers", "jeans", "jacket", "trainers", "boots", "sweater", "tracksuit", "shirt"]
    colour_list = ["red", "yellow", "orange", "green", "blue", "brown", "beige", "black", "white", "dark-gray",
                   "light-gray"]
    inventory = ["_".join(i[::-1]) for i in list(itertools.product(type_list, colour_list))]
    le = LabelEncoder()
    le.fit(inventory)
    return inventory, le

def GenPTable(parsed_orders):
    """
    Generate and save a probability table based on the counts found in the order lists

    :param parsed_orders: order list as a python dictionary
    """

    inventory,le = GenInventory()
    # Create a matrix of ones to represent the count of pairs of items
    # appearing together in the order list
    # We choose to use ones instead of zeros to avoid zero probabilities
    count_array = np.ones((len(inventory),len(inventory)),dtype=int)
    purchase_list = []

    for key in list(parsed_orders.keys()):
        item = parsed_orders[key]["item"]
        together = parsed_orders[key]["together_with"]
        enc_item = le.transform([item])
        enc_together = le.transform([together])
        purchase_list.append((enc_item[0],enc_together[0]))

    counts = Counter(purchase_list)

    for i in counts:
        # use the encodings as indexes for the items in the count matrix
        # and add the respective count value to that position in the matrix
        count_array[i[0],i[1]] += counts[i]

    # normalise the counts by dividing each element by the row sum
    count_array = count_array/count_array.sum(axis=1,keepdims=True)
    np.save("ptable",count_array)

def loadPtable():
    """Load the probability table """
    return np.load("ptable.npy")

def GenRecommendations(currently_viewed_item,n=5):
    """
    Generate 5 non-repeating recommendations for the currently viewed item

    :param currently_viewed_item: the item currently being viewed by the user
    :param n: the number of items to recommend

    :return: The list of recommendations
    """
    recommendations = []
    inventory,le = GenInventory()
    inventory = sorted(inventory)
    cvi_indx = le.transform([currently_viewed_item]) # transform the currently viewed item into an index
    ptable = loadPtable()
    probabilities = ptable[cvi_indx[0]] # access distribution for this particular item
    for _ in range(n):
        item = np.random.choice(inventory, p=probabilities)
        while (item == currently_viewed_item) or (item in recommendations):
            item = np.random.choice(inventory, p=probabilities)
        recommendations.append(item)
    return recommendations

if __name__ == "__main__":
    print(DataGenerator(10))