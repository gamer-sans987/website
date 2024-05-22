var bd = window.document.getElementById("bd");
var bt = window.document.getElementById("bt");
var cb = window.document.getElementById("cb");
var ct = window.document.getElementById("ct");
var ctx = window.document.getElementById("ctx");
var cx = window.document.getElementById("cx");
var cx1 =  window.document.getElementById("cx1");
var dv = window.document.getElementById("dv");
var fd1 = window.document.getElementById("fd1");
var fdl = window.document.getElementById("fdl");
var fds = window.document.getElementById("fds");
var lt = window.document.getElementById("lt")
var msg = window.document.getElementById("msg");
var smsg = window.document.getElementById("smsg");
var tx = window.document.getElementById("tx");

lt.addEventListener('click', lot)
fd1.addEventListener('click', friend);
fds.addEventListener('click', friends)
window.addEventListener('resize', uw);
window.addEventListener('resize', uh)

const un = "ADMIN";
const pw = "12345";

var data = new Date();
var hora = data.getHours();
var minutos = data.getMinutes();

let num = 2;
let i = 1; 

function lot(){
    window.location.href = "../.."
}

function friend(){
    window.location.href = "../@13954"
}

function friends(){
    window.location.href = "../@me"
}

function loginkey(un, pw){
    if (event.keyCode === 13){
        return login(un, pw);
    }
}
function login(un, pw){
    if (un === "ADMIN" && pw === "12345"){
        window.location.href = "./channels/@me"
    } else {
        return dv.innerText = "Username or password are incorrect"
    }
}
function clearchat(){
    var h1 = msg.getElementsByTagName("h1")
    var p = msg.getElementsByTagName("p")
    while (p.length > 0){
        p[0].parentNode.removeChild(p[0]);
        if (h1.length > 0){
            h1[0].parentNode.removeChild(h1[0]);
        }
    }
    return console.log("Chat Limpo!")
}
function sendkey(str){
    if (event.keyCode === 13){
        return send(str);
    }
}
function send(str){
    if (str.length > 0) {
        var nk = document.createElement("h1")
        nk.classList.add("nick")
        nk.textContent = `ADMIN`
        msg.appendChild(nk).then
        var nm = document.createElement("p");
        var date = document.createElement("p")
        nm.classList.add("message");
        date.classList.add("date");
        date.textContent = `Sent at: ${hora}:${minutos}`;
        msg.appendChild(date).then
        nm.textContent = str;
        msg.appendChild(nm);
        cb.value = "";
        nm.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
}
