


function getElementSearched(data){
    let divImg = '<div class="img"><img src="'+data.Poster+'"/></div>'
    let divInformation = '<div class="information"><h2>'+data.Title+'</h2>\
                <p><strong>Year: </strong>' + data.Year + '</p> \
                <p><strong>IMDB: </strong> ' + data.imdbRating + '</p> \
                <p><strong>Descripción: </strong>'+data.Plot+'</p>\
                <p><strong>Premios: </strong>'+data.Awards+'</p>\
                <p><strong>Género: </strong>' + data.Genre + '</p></div>'
    let type = data.Type == "series"? 'Seguir': 'Visto'
    let mode = data.Type == "series"? "'serie'": "'pelicula'"
    let divButtons = '<div class="buttons">\
                    <button type="button" class="btn btn-success btn-lg btn-block" onclick="saveStorage('+mode+')">' + type + '</button></div>'

    setCookie("dataObject", JSON.stringify(data), 0)
    return "<div class='object-search'><div class='search'>" + divImg + '\n <div>' + divInformation + divButtons + "</div></div></div>";
}


function searchFunction(){
    API_KEY = "1e0658f5"
    var x = document.getElementById("input-search").value;
    var request = new XMLHttpRequest()
    if(x[0] + x[1] == 'tt' )
        request.open("GET", "http://www.omdbapi.com/?i="+ x + "&apikey=" + API_KEY)
    else
        request.open("GET", "http://www.omdbapi.com/?t="+ x + "&apikey=" + API_KEY)

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            $("#container").html(getElementSearched(data))
        } 
    }
      
    request.send()
}