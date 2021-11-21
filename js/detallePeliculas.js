const url = 'https://api.themoviedb.org/3' // la direccion de la api. despues agregamos los recursos de cada api. 
const api_key = "05c046159c1ed93371b2e717b946f722"
const language = "&language=en-US"
let idPelicula; 
fetch(url + "/movie/"+ idPelicula+ "?api_key=" + api_key + language)