document.querySelector('#box').innerHTML = 1;
const xhttp = new XMLHttpRequest();

function loadDoc() {
    document.querySelector('#demo').innerHTML = val.test.c[0];
}

// get using ajax
xhttp.open('GET','data.JSON',true);
xhttp.send();

// set using ajax
xhttp.open('POST','data.JSON',true);
xhttp.setRequestHeader('Content-Type','application/json');
xhttp.send(JSON.stringify({a:'test1'}));

xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        val = JSON.parse(this.response);
        console.log(val);
    }
}
