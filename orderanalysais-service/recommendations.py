from utils import *
import os

if not os.path.exists("ptable.npy"):
    GenPTable(DataGenerator(10000))

GenRecommendations("red_t-shirt",5)
