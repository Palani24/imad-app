console.log('Loaded!');
//var counter = 0;
var button = document.getElementById("counter");
button.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(request.readystate == XMLHttpRequest.DONE){
          if(request.status == 200){
            var counter =  request.responseText;
            var span = document.getElementById("count");
            span.innerHTML = counter.toString();
          }
      }  
    };
    request.open("GET","http://palani92er.imad.hasura-app.io/counter",true);
    request.send(null);
    console.log('Loaded!'+ counter.toString());
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