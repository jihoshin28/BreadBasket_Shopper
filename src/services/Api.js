const API_ROOT = 'https://localhost:3000'

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    "Authorization": token
}

const shopperSignUp = async () => {

}

const getShopper = async () => {

}

const driverSignUp = async () => {

}

const getDriver = async () => {

}

const getStores = async () => {

}

const getStore = async () => {

}

const getOpenOrders = async () => {

}

const getActiveOrders = async () => {

}

const getStoreOrders = async () => {

}

const getShopperOrders = async () => {

}

const getItems = async () => {
    let response = await fetch(API_ROOT + '/items', {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const getItemsCategory = async () => {

}

const getCartItemsCategory = async () => {

}

const getCartItemsOrder = async () => {

}

const getCartItemsActive = async () => {

}

const getCartItemsDone = async () => {

}

const getDriverOrder = async () => {

}

export default {
    shopperSignUp,
    getShopper,
    driverSignUp,
    getDriver,
    getStores,
    getStore,
    getOpenOrders,
    getActiveOrders,
    getStoreOrders,
    getShopperOrders,
    getItems,
    getItemsCategory,
    getCartItemsOrder,
    getCartItemsActive,
    getCartItemsDone,
    getDriverOrder

}