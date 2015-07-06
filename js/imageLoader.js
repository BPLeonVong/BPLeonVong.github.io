var images = {};

loadImageJPG("e01");
loadImagePNG("testBG");

function loadImageJPG(name) {

    images[name] = new Image();
    images[name].onload = function () {
    }
    images[name].src = "images/" + name + ".jpg";
}

function loadImagePNG(name) {

    images[name] = new Image();
    images[name].onload = function () {
    }
    images[name].src = "images/" + name + ".png";
}