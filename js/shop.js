// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    let found = null

    for (let i = 0; i < products.length; i++) {

        let posicion = i + 1
            if (id == posicion) {
                found = products[i]
            }
    }
    
    let cartItem = cart.find(item => item.id == id)
    // 2. Add found product to the cart array
    if (cartItem) {
        cartItem.quantity += 1
    } else {
        cart.push({...found, quantity: 1})
    }
        
    document.getElementById('count_product').innerHTML = cart.length
    printCart()

}

// Exercise 2
function cleanCart() {
    cart = []
    document.getElementById('count_product').innerHTML = 0
    document.getElementById('cart_list').innerHTML = ''
    document.getElementById('total_price').innerHTML = 0
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let suma = 0
    for (let i = 0; i < cart.length; i++){
        if(cart[i].subtotalWithDiscount) {
            suma += cart[i].subtotalWithDiscount * cart[i].quantity
        } else {
            suma += cart[i].price * cart[i].quantity
        }
    }
    return suma
}


// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    cart.forEach(item => {
        if (item.offer) {
            if(item.quantity >= item.offer.number) {
                item.subtotalWithDiscount = item.price - (item.offer.percent * item.price / 100)
            }
        }
    })
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    applyPromotionsCart()

    let cartList = document.getElementById('cart_list')

    let result = ''
    let totalCantidad = 0

    for (let i = 0; i < cart.length; i++) {

        if (cart[i].subtotalWithDiscount) {
            totalCantidad = cart[i].subtotalWithDiscount * cart[i].quantity
        } else {
            totalCantidad = cart[i].price * cart[i].quantity
        }

        let precio = cart[i].price
        let cantidad = cart[i].quantity
        let nombre = cart[i].name

        result += 
        `<tr>
        <th scope="row">${nombre}</th>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>${totalCantidad.toFixed(2)}</td>
        </tr>`
    }

    cartList.innerHTML = result

    let total = document.getElementById('total_price')
    total.innerHTML = calculateTotal().toFixed(2)
}




// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}