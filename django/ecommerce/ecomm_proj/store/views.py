from django.shortcuts import render
from .models import *

# Create your views here.
def store(request):
    products = Product.objects.all()
    context = {'products': products}
    return render(request, 'store/store.html', context)

def cart(request):
    if request.user.is_authenticated: #two condtions one authenticated
        customer = request.user.customer #one to one relation that way
        order, created = Order.objects.get_or_create(customer=customer, complete=False) ##looks for an existing user if the user does not exist then it creates them
        items = order.orderitem_set.all() #query child ojects with the parent value to the childvalye and set them to smaller case
    else:
        items = []
        order = {'get_cart_total': 0, 'get_cart_items': 0 } ##needs to be added to create an unathenticated user

    context = {'items': items, 'order': order}
    return render(request, 'store/cart.html', context)

def checkout(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        items = order.orderitem_set.all()
    else:
        ## create an empty cart
        order= {'get_cart_total': 0, 'get_cart_items':0}
        items = []
    context = {'items':items, 'order': order}
    return render(request, 'store/checkout.html', context)