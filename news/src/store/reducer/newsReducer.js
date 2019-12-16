const initState = {}

const newsReducer = (state= initState, action) => {
    switch(action.type) {
        case 'CREATE_NEW':
            console.log('created new',action.new);
            return state;
        case 'CREATE_NEW_ERROR':
            console.log('created new error',action.err);
            return state;
        default:
            return state;       
    }
}

export default newsReducer