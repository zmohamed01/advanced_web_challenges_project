# Order Analysis - Recommender engine

This is the recommender engine microservice which takes in order data to produce item co-occurrence probability tables `ptable.npy` for each item and then uses them to draw samples based on the item's respective distribution.

All functions are within `utils.py`.

## Data generation
Due to lack of available order data, the function `DataGenerator` was made to generate example data for training. It is in the format:

`{orderID: 
    item:str
    together_with: str
    }`


## Processing
The data is then processed and a probability table is created in `GenPtable()`

## Recommendations
`recommendations.py` creates a flask app to simulate an API response of recommendations.