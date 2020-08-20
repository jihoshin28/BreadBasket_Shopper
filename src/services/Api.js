const API_ROOT = 'http://localhost:3000'

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json'
}

const shopperSignUp = async () => {

}

const getShopper = async () => {
    const response = await fetch(API_ROOT + `/shoppers/${id}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const driverSignUp = async () => {

}

const getDriver = async (id) => {
    const response = await fetch(API_ROOT + `/drivers/${id}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const getStores = async () => {
    const response = await fetch(API_ROOT + '/stores', {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const getStore = async (id) => {
    const response = await fetch(API_ROOT + `/stores/${id}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const getOpenOrders = async (id) => {
    const response = await fetch(API_ROOT + `/orders/${id}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const getActiveOrders = async () => {

}

const getStoreOrders = async () => {

}

const getShopperOrders = async () => {

}

const getItems = async () => {
    const response = await fetch(API_ROOT + '/items', {
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