const initState = {
    authError: null
}

const logRegReducer = (state= initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return{
                ...state,
                authError: null
            }
        case 'LOGOUT_SUCCESS':
            console.log('LOGOUT success');
            return { ...state }
        case 'REGISTER_SUCCESS':
            console.log('REGISTERp succes');
            return{
                ...state,
                authError:null
            }
         case 'REGISTER_ERROR' :
                console.log('REGISTER error');
                return{
                    ...state,
                    authError: action.err.message
                }
        case 'LIKE_NEW':
              console.log('like success');
             return {
                 ...state
             }
        case 'LIKE_NEW_ERROR':
            console.log('like error')
            return {
                ...state
            }
            
        default :
        return state;
    }
    
}

export default logRegReducer