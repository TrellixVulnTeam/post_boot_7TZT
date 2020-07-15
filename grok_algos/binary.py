##low = 0
##high = len(list)-1

## each time you check a middle element 

##mid= (low+high)/2
##guess = list[mid]

##if guess < item:
#     low = mid +1

def binary_search(list, item):
    low = 0
    high = len(list-1)
    while low<=high:
        mid = (low + high)
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid -1
        else:
            low = mid +1
    return None

    my_list = [1,3,5,7,9]

    print binary_search(my_list, 3)
    # output: 1
    print binary_search(my_list, -1)
    ## output None

#Excercise 1.1
    ### Suppose you have a sorted list of 128 names, and you’re searching through it using binary search. What’s the maximum number of steps it would take?
    ### log2 * 6 = 128  so 6  steps
#Excercise 1.2
    ###  Suppose you double the size of the list. What’s the maximum number of steps now?
    ### 12 steps
