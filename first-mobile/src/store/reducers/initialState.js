export default { 
    auth:{
        token: {},
        credentials: {
            email: '',
            password: ''

        },
    },

    cadastro: {
        name: '',
        sobrenome: '',
        username: '',
        email: '',
        password: '',
        confirmarpassword: '',
        error:{},
        sucess: false,
    },
    loading: {
        open: false,
        msg: '' 
    },
    notify: {
        open: false,
        class: 'sucess',
        vertical: 'top',
        horizontal: 'center',
        time: 3000,
        msg: ''
    }
}