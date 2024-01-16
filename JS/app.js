let parsonal = document.getElementById('parsonal');
let social = document.getElementById('social');
let account = document.getElementById('account');

let next1 = document.getElementById('next1');
let next2 = document.getElementById('next2');


let back1 = document.getElementById('back1');
let back2 = document.getElementById('back2');

let progress = document.getElementById('progress');

next1.onclick = function(){
    parsonal.style.left = "-450px";
    social.style.left = "40px";
    progress.style.width ="240px";
}

back1.onclick = function(){
    parsonal.style.left = "40px"; 
    social.style.left = "450px"; 
    progress.style.width ="120px";
}

next2.onclick = function(){
    social.style.left = "-450px"; 
    account.style.left = "40px"; 
    progress.style.width ="360px";
}

back2.onclick = function(){
    social.style.left = "40px"; 
    account.style.left = "450px";
    progress.style.width ="240px"; 
}