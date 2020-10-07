export const addToCart = ( menu, shop, id) => {
    console.log("adding to basket");
    return {
        type: 'ADD_TO_CART',
        payload: menu,
        shop, 
        id
    }
};

export const removeItem = ( item ) => {
    console.log("Removing Item");
    return {
        type: 'REMOVE_ITEM',
        payload: item
    }
}