const url = 'https://api.themoviedb.org/3' // la direccion de la api. despues agregamos los recursos de cada api. 
const api_key = "05c046159c1ed93371b2e717b946f722"
const language = "&language=en-US"


let idPelicula; 
let queerystring = location.search;
let queryStringObj = new URLSearchParams(queerystring) // instacia de  URL search Params 

idPelicula = queryStringObj.get("id")

fetch (url + "/movie/"+ idPelicula+ "?api_key=" + api_key + language)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log (data)

let generos = ""
        for (i=0; i<data.genres.length; i++){
            generos += data.genres [i].name + " - "
        }
        document.getElementById("detallepeliculas").innerHTML =
        `
        <div class="flexHijo">
                <h2>${data.title}</h2>
                <img class="float-left" src="https://image.tmdb.org/t/p/original/${data.poster_path}"> 
                <h4>Voto:</h4>
                <p>${data.vote_average}</p>
                <h4>Fecha de estreno:</h4>
                <p>${data.release_date}</p>
                <h4>Duracion:</h4>
                <p>${data.runtime}</p>
                <h4>Sinopsis:</h4>
                <p>${data.overview}</p>
                <h4>Genero:</h4>
                <p>${generos}</p>
                <h4>FAVORITOS?</h4>
                <input type="checkbox">
            </div> 
            `
    })

    .catch(function(error){
        console.log('El error fue: detallepeliculas' + error)
    })

    