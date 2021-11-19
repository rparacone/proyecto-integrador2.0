fetch ( url + "/tv/popular?api_key=" + api_key + language)
.then(function(response){
    return response.json();
})
.then(function(data){
    //Trae un elemento de HTML del documento al que pertenece el archivo segun su id
    console.log(data);
    for(i = 0; i < 5; i++){

        document.getElementById("series").innerHTML +='<div class = "flexHijo" ><a href=""> <h3>'+ data.results[i].name + ' </h3> <img src="https://image.tmdb.org/t/p/original/' + data.results[i].poster_path +'" alt="Accion"/></a></div>';
    }
})
.catch(function(error){
    console.log('El error fue: ' + error)
})
