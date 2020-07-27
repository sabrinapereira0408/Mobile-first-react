

export const actionTypes = {
    CHANGE: 'CHANGE',
    SUCESS: 'SUCESS',
    ERROR: 'ERROR'
}

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const cadastroError = (payload) => ({
    type: actionTypes.ERROR,
    payload
})

export const sucess = (payload) => ({
    type: actionTypes.SUCESS,
    payload
})

export const cadastroUser = (data) =>{
    return dispatch => {

    }
}