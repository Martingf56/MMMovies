

function objectCard(object){
    let param = "'" + object.imdbID +"','"+object.Type+"'"
    let html = '<div class="card text-center border-0 bg-transparent text-primary" onclick="objectDetail('+param+')" style="width: 10rem;">\
                    <img src="'+ object.Poster+ '}" class="card-img-top" alt="...">\
                    <div class="card-body">\
                        <p class="card-text">'+object.Title+'</p>\
                    </div>\
                </div>' 
    return html
}

function objectLoadLists(type){
    let object = readStorage(type)
    object = object.toString().split("--")
    let insertHTML = objectHeaderList() + "\n<div class='object-grid pdd-top'>"
    object.forEach(element => {
        insertHTML += objectCard(JSON.parse(element)) + '\n'
    });
    insertHTML += "</div>\
                    </div>"
    $("#container").html(insertHTML)
}

function objectHeaderList(){
    let html = "<div class='flex'>\
                    <div class='Title'>Siguiendo</div>\
                    <div class='btn-group'>\
                        <button type='button' class='btn btn-primary' onclick=''>\
                            <svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-eye' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>\
                                <path fill-rule='evenodd' d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z'/>\
                                <path fill-rule='evenodd' d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z'/>\
                        </svg></button>\
                        <button type='button' class='btn btn-primary'>\
                            <svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-heart-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>\
                                <path fill-rule='evenodd' d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'/>\
                        </svg></button>\
                        <button type='button' class='btn btn-primary'>\
                            <svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-check-all' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>\
                                <path fill-rule='evenodd' d='M8.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z'/>\
                        </svg></button>\
                    </div>\
                </div>"
    return html
}

function objectDetail(ID,type){
    let data = getElement(ID,type)
    let divImg = '<div class="img"><img src="'+data.Poster+'"/></div>'
    let divInformation = '<div class="information"><h2>'+data.Title+'</h2>\
                <p><strong>Year: </strong>' + data.Year + '</p> \
                <p><strong>IMDB: </strong>' + data.imdbRating + '</p> \
                <p><strong>Descripción: </strong>'+data.Plot+'</p>\
                <p><strong>Premios: </strong>'+data.Awards+'</p>\
                <p><strong>Género: </strong>' + data.Genre + '</p></div>'
    let msg = data.Type == "series"? 'Seguir': 'Visto'
    let mode = data.Type == "series"? "'serie'": "'movie'"
    let divButtons = '<div class="buttons">\
                        <button type="button" class="btn btn-outline-success btn-lg margin-right2" onclick="saveStorage('+mode+')">' + msg + '</button>\
                        <button type="button" class="btn btn-outline-info btn-lg margin-right2" onclick="deletObject()">Pendiente</button>\
                        <button type="button" class="btn btn-outline-danger btn-lg" onclick="deletObject()">Eliminar</button>\
                    </div>'
    let element = "<div class='object-search'><div class='search'>" + divImg + '\n <div>' + divInformation + divButtons + "</div></div></div>";

    $("#container").html(element)
 }