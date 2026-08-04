export let cart = JSON.parse(localStorage.getItem('cart')); // Now this variable can be used outside cart.js


if (!cart) {
  cart = [{
    productId: 'dd82ca78-a18b-4e2a-9250-31e67412f98d',
    quantity: 2
  }, {
    productId: '77919bbe-0e56-475b-adde-4f24dfed3a04',
    quantity: 1
  }];
}




function saveToLStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
}

/*
export function addToCart (productId) {
    let machingItem;

    cart.forEach((item) => {
      if (productId === item.productId) {
        machingItem = item;
      }
    })

    if (machingItem) {
      machingItem.quantity += 1;
    } else {
      cart.push({
      productId: productId,
      quantity: 1
    });
    }

    saveToLStorage();
}
*/

export function addToCart(productId) {
  const matchingItem = cart.find((item) => item.productId === productId);

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }

  saveToLStorage();
}

export function removeItem(productId) {
  cart = cart.filter((item) => item.productId !== productId);
  saveToLStorage();
}

/*
export function removeItem(productId) {
  const new_cart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId != productId) {
      new_cart.push(cartItem);
    }
  })

  cart = new_cart;

  saveToLStorage();
}
*/