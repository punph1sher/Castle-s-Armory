export const cart = [];
// Now this variable can be used outside cart.js

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

}