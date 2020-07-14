export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: {
            item: item
        }
    }
}

export const deleteItem = () => {
    return {
        type: 'DELETE_ITEM',
        payload: {
            item: item
        }
    }
}