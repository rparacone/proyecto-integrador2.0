// Home // 
// Peliculas populares //

let url = ("https://api.themoviedb.org/3/movie/76341?api_key=a14cb1fc6fe760d5cbd8a057690f449d")

fetch (url)
.then(function(response){
    return response.jason();
})
.then(function(data) {
    for (let i= 0; i<4; i++){
        console.log('' + i)

    }
    console.log(data);
})
.catch(function(error){
    console.log('El error fue: ' + error)
})

// Series populares //

let url2 = ("") 

fetch (url2)
.then(function(response){
    return response.jason();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log('El error fue: ' + error)
})

// Peliculas mas valoradas //

let url3 = ("")

fetch (url3)
.then(function(response){
    return response.jason();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log('El error fue: ' + error)
})

