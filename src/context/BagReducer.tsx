export const BagReducer = (state: any, action: any) => {

    switch (action.type) {
        case 'ADD_TO_BAG':
            return {
                ...state,
                bag: [...state.bag, action.payload]
            }
        case 'REMOVE_FROM_BAG':
            return {
                ...state,
                bag: state.bag.filter((item: any) => item.id !== action.payload)
            }
        case 'CHANGE_BAG_QUANTITY':
            return {
                ...state,
                bag: state.bag.map((item: any) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: action.payload.quantity
                        }
                    }
                    return item;
                })
            }
        default:
            return state;
    }
}