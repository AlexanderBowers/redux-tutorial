const inputReducer = (state = '', action) => {
    switch(action.type){
        case 'SUBMIT':
            state = action.input
            return state
        default:
            return state
    }
}
export default inputReducer