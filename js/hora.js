function hora(){
    var tiempo = 1000;
    let url = "http://worldtimeapi.org/api/timezone/America/Asuncion"
fetch(url)
    .then(response => response.json())
    .then(data => {
        var hora1 = JSON.stringify(data.datetime);
        var hora2 = hora1.substring(12,20);
        let element = document.getElementById('elem')
        element.innerHTML = "<b>Hora: </b>"+hora2;
        console.log(data)

    })
    .catch(err=>console.log(err))

    setTimeout("hora()", tiempo);
}