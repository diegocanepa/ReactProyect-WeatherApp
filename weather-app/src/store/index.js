import { createStore } from 'redux';
import { city } from './../reducers/city';

//creamos un store, espera como parametro un reducer, una funcion pura
//SEGUNDA PARAMETTRO PARA VINCULAR CON GOOGLE

const initialState = {
    city: 'Buenos Aires, ar',
}; //estadoInicial



export const store = createStore(city, initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());