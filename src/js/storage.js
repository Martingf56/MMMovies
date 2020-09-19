 
const fs = require('fs')

var DATAmovies;
var DATAseries;

function saveStorage(type){
    let file;
    switch (type) {
        case "series": file = "data/series.json";break;
        default: file = "data/movies.json";break;
    }

    let data = getCookie("dataObject")

    try { 
        if (fs.existsSync(file)){
            let rawdata = fs.readFileSync(file);
            data = rawdata.toString() + '--' + data.toString()
        }
        fs.writeFileSync(file,data.toString())
    }
    catch(e) { 
        alert('Failed to save the file !');
    }
}

function readStorage(type){
    let file;
    switch (type) {
        case "series": file = "data/series.json";break;
        default: file = "data/movies.json";break;
    }

    if (fs.existsSync(file)){
        let rawdata = fs.readFileSync(file)
        if(type == "series") DATAseries = rawdata.toString().split("--")
        else DATAmovies = rawdata.toString().split("--")
        return rawdata
    }
}

function modifyLocalData(data, type){
    if(type =="series") modifyLocalDataSerie(data)
    else modifyLocalDataMovie(data)
}

function modifyLocalDataSerie(data){
    DATAseries.forEach(element => {
        if(element.imdbID == data.imdbID){
            element = data
        }
    });
}

function modifyLocalDataMovie(data){
    DATAmovies.forEach(element => {
        if(element.imdbID == data.imdbID){
            element = data
        }
    });
}

function setStateofMovie(state, imdbID){
    DATAmovies.forEach((element,index) => {
        element = JSON.parse(element)
        if(element.imdbID == imdbID){
            element.state=state
            DATAmovies[0] = JSON.stringify(element)
        }
    });

}

function saveLocalInStorage(type){
    let file;
    switch (type) {
        case "series": file = "data/series.json";break;
        default: file = "data/movies.json";break;
    }

    try { 
        fs.writeFileSync(file,convertLocaltoString(type))
    }
    catch(e) { 
        alert('Failed to save the file !');
    }
}

function convertLocaltoString(type){
    let array

    if(type == "series") array = DATAseries
    else array = DATAmovies
    
    return array.join("--")
}

function getSateElement(ID, type){
    let array
    if(type == "series") array = DATAseries
    else array = DATAmovies

    array.forEach(element => {
        if(element.imdbID == ID)
            return element.state
    })
}

function getElement(ID, type){
    let array
    if(type == "series") array = DATAseries
    else array = DATAmovies

   return JSON.parse(array.find(element => JSON.parse(element).imdbID == ID))
}
