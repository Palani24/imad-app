console.log('Loaded!');
//var counter = 0;
var button = document.getElementById("counter");
button.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      
            var counter =  request.responseText;
            var span = document.getElementById("count");
            span.innerHTML = counter.toString();
          
    };
    request.open("GET","http://palani92er.imad.hasura-app.io/counter",true);
    request.send(null);
    
    //counter = counter+1;
    //var span = document.getElementById("count");
    //span.innerHTML = counter.toString();
};


var img=document.getElementById("img");
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveRight,100);
};