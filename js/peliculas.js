// Home
const url = 'https://api.themoviedb.org/3' // la direccion de la api. despues agregamos los recursos de cada api. 
const api_key = "05c046159c1ed93371b2e717b946f722"
const language = "&language=en-US"

// Peliculas populares

// BUSQUEDA de peliculas -- Asignando el valor
fetch ( url + '/movie/popular?api_key='+ api_key + language)
.then(function(response){
    return response.json();
})
.then(function(data){
    //Capturo el Dom
    console.log(data);
    for(i = 0; i < 5; i++){
    let lista = document.querySelector('lista')
    let elementolista = '';


        document.getElementById("peliculas").innerHTML +=
        `
        <div class = "flexHijo" ><a href="detallepeliculas1.html"><h3>${data.results[i].title}
        </h3><img src="https://image.tmdb.org/t/p/original/${data.results[i].poster_path}" 
        alt="Accion"/>
        </a>
        </div>
        `
        ;
    }
})
.catch(function(error){
    console.log('El error fue: ' + error)
})
