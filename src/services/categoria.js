import {URL_BACKEND, URL_BACKEND_HEROKU} from "../environment/environment";

/**
 * Funcion que obtiene los platos de una categoria
 * dado el id de la categoria
 * @param {*} plato_id
 */
export const getPlatosByCategoriaId = async () => {
  const response = await fetch(
    `${URL_BACKEND_HEROKU}/platos`
  );
  const json = await response.json();
  return json;
};