
function loadSeries(){
    $(".active").removeClass("active")
    $("#Series").addClass("active")

    objectLoadLists("series")
}

function loadMovies(){
    $(".active").removeClass("active")
    $("#Peliculas").addClass("active")

    objectLoadLists("movie")
}


