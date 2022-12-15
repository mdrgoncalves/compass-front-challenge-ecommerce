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
                bag: state.bag.filter((item: any) => item._id !== action.payload)
            }
        case 'CLEAR_BAG':
            return {
                ...state,
                bag: []
            }
        default:
            return state;
    }
}