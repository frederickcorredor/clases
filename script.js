var cohete= document.getElementById('cohete'),
    promo= document.getElementById('clasegratuita'),
    botoncohete= document.getElementById('botoncohete');

    function despegue(){
        cohete.classList.add("despegue")
        botoncohete.style.display="none"
        promo.style.display="flex"
    }

    botoncohete.addEventListener("click",despegue,true);

var card1a=document.getElementById('card1A'),
    card2a=document.getElementById('card2A'),
    card3a=document.getElementById('card3A'),
    card4a=document.getElementById('card4A'),
    card1b=document.getElementById('card1B'),
    card2b=document.getElementById('card2B'),
    card3b=document.getElementById('card3B'),
    card4b=document.getElementById('card4B'),
    boton1a=document.getElementById('show1B'),
    boton2a=document.getElementById('show2B'),
    boton3a=document.getElementById('show3B'),
    boton4a=document.getElementById('show4B'),
    boton1b=document.getElementById('show1A'),
    boton2b=document.getElementById('show2A'),
    boton3b=document.getElementById('show3A'),
    boton4b=document.getElementById('show4A');

function mostrar1b(){
    card1a.style.display="none",
    card1b.style.display="flex";
}

function mostrar2b(){
    card2a.style.display="none",
    card2b.style.display="flex";
}

function mostrar3b(){
    card3a.style.display="none",
    card3b.style.display="flex";
}

function mostrar4b(){
    card4a.style.display="none",
    card4b.style.display="flex";
}


function mostrar1a(){
    card1b.style.display="none",
    card1a.style.display="block";
}

function mostrar2a(){
    card2b.style.display="none",
    card2a.style.display="block";
}

function mostrar3a(){
    card3b.style.display="none",
    card3a.style.display="block";
}

function mostrar4a(){
    card4b.style.display="none",
    card4a.style.display="block";
}


boton1a.addEventListener("click",mostrar1b,true )
boton2a.addEventListener("click",mostrar2b,true )
boton3a.addEventListener("click",mostrar3b,true )
boton4a.addEventListener("click",mostrar4b,true )
boton1b.addEventListener("click",mostrar1a,true )
boton2b.addEventListener("click",mostrar2a,true )
boton3b.addEventListener("click",mostrar3a,true )
boton4b.addEventListener("click",mostrar4a,true );