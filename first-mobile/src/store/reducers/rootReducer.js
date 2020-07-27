import {combineReducers} from "redux";

import usuariosReducer from './usuarios.reducer';
import cadastroReducer from './cadastro.reducer';


const rootReducer  = combineReducers({
    usuariosReducer,
    cadastroReducer
});


export default rootReducer;