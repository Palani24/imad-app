console.log('Loaded!');


var img=document.getElementById("img");

function moveRight(){
    var marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveRight,100);
};