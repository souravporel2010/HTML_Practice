var url='https://reqres.in/api/products/4';
var btn= document.getElementById('clicl');

btn.addEventListener('click',FetchData());

function FetchData() {
    var req= new XMLHttpRequest();
    req.open('GET',url);
    req.onload = function() {
        if(req.status===4 && req.readyState===200) 
        {
            GenerateHTML(req.responseText);
        }
    }
}

function GenerateHTML(response) {
    console.log(response);
}

