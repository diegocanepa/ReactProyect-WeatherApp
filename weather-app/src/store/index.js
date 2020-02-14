import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

//creamos un store, espera como parametro un reducer, una funcion pura
//SEGUNDA PARAMETTRO PARA VINCULAR CON GOOGLE

const initialState = {
    city: 'Buenos Aires, ar',
}; //estadoInicial

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));