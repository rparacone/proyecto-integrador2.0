// Home
const url = 'https://api.themoviedb.org/3' // la direccion de la api. despues agregamos los recursos de cada api. 
const api_key = "05c046159c1ed93371b2e717b946f722"
const language = "&language=en-US"

// Peliculas populares

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
        <div class = "flexHijo" >
        <a href="./html/detallepeliculas.html?id=${data.results[i].id}"><h3>${data.results[i].title}
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

// Series populares
fetch ( url + "/tv/popular?api_key=" + api_key + language)
.then(function(response){
    return response.json();
})
.then(function(data){
    //Trae un elemento de HTML del documento al que pertenece el archivo segun su id
    console.log(data);
    for(i = 0; i < 5; i++){
        document.getElementById("series").innerHTML +=
        `
        <div class = "flexHijo" >
        <a href="./html/detalleserie.html?id=${data.results[i].id}">
        <h3>${data.results[i].name}</h3> 
        <img src="https://image.tmdb.org/t/p/original/${data.results[i].poster_path}"
        alt="Accion"/>
        </a>
        </div>
        `
        ;
    }
})
.catch(function(error){
    console.log('El error fue: series' + error)
})

//Generos Populares de peliculas

fetch ( url + "/genre/movie/list?api_key=" + api_key + language)
.then(function(response){
    return response.json();
})
.then(function(data){
    //Trae un elemento de HTML del documento al que pertenece el archivo segun su id
    console.log(data);
    
    // Capturar elementos del DOM
{

        document.getElementById("generos").innerHTML +=
        `
        <div class ="flexHijo">
        <a href="">
        <h3>${data.results[i].name}</h3>
        <img src="https://image.tmdb.org/t/p/original/${data.results[i].poster_path}"
        alt="Accion"/></a></div>
        `
        ;

    }  
})
.catch(function(error){
    console.log('El error fue: generos' + error)
})