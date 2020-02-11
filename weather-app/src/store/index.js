import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { city } from './../reducers/city';

//creamos un store, espera como parametro un reducer, una funcion pura
//SEGUNDA PARAMETTRO PARA VINCULAR CON GOOGLE

const initialState = {
    city: 'Buenos Aires, ar',
}; //estadoInicial

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSER__ || compose; 

export const store = createStore(city, initialState, composeEnhancers(applyMiddleware(thunk)));