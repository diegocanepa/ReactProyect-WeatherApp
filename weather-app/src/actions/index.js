//Definimos variable para evitar errores de tipeo
export const SET_CITY = 'SET_CITY';

//esta forma de crear las acciones se las demonima actionCreator
//La ponemos en otro lado para independizar el componente
//el Type es el identificador de la accion, a partir de este se reacciona porquue asi identificamos la accion

export const setCity = payload => ({ type: SET_CITY, payload });