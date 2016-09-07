document.getElementById("getdata").addEventListener("click", function() {
    var request = new XMLHttpRequest();
    var url = "http://www.medalbot.com/api/v1/medals/";
    
    request.addEventListener("load", function() {
        var response;
        var htmlString = "";
        
        response = JSON.parse(request.responseText);
        
        htmlString += "<ul>";
        for (var i = 0; i < response.resultSet.vehicle.length; i++) {
            htmlString += "<li>" + response.resultSet.vehicle[i].signMessage + ": "+ -response.resultSet.vehicle[i].delay +" seconds late.</li>";
        };
        htmlString += "</ul>";
        
        document.getElementById("results").innerHTML = htmlString;
    });
    
    request.open("GET", url + document.getElementById("query").value);
    request.send();
});
