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
        default:
            return state;
    }
}