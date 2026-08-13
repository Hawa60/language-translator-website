const translations = {

en:{
title:"Solar System",
heading:"About the Solar System",
paragraph:"The Solar System consists of the Sun and eight planets that revolve around it. It also contains moons, asteroids, comets, and other celestial objects. Earth is the only known planet that supports life."
},

es:{
title:"Sistema Solar",
heading:"Acerca del Sistema Solar",
paragraph:"El Sistema Solar está formado por el Sol y ocho planetas que giran a su alrededor. También contiene lunas, asteroides, cometas y otros cuerpos celestes. La Tierra es el único planeta conocido que alberga vida."
}

};

function changeLanguage(){

const lang=document.getElementById("language").value;

document.getElementById("title").innerText=translations[lang].title;
document.getElementById("heading").innerText=translations[lang].heading;
document.getElementById("paragraph").innerText=translations[lang].paragraph;

}