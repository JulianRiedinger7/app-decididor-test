let opcionBuena = document.getElementById("fop1");
let opcionMala = document.getElementById("fop2");
let boton = document.getElementById("btn");
let imagen = document.getElementById("image");
let txt = document.getElementById("txt");

let randomizar = (max,min)=>{
    return Math.round(Math.random()*(max-min)+min);
}


boton.addEventListener("click", ()=>{
    imagen.src = "./images/loading.gif";
    imagen.style.width = "300px"
    imagen.style.height = "300px"
    txt.innerHTML = "Decidiendo...";
    setTimeout(()=>{
        var numeroRandom = randomizar(1,0);
        if (numeroRandom == 1) {
            txt.innerHTML = "Te toco: "+opcionBuena.value;
            imagen.src = "./images/party.gif";
            
        }else{
            txt.innerHTML = "Te toco: "+opcionMala.value;
            imagen.src = "./images/sadness.gif";
            
        }
    },2000);
});