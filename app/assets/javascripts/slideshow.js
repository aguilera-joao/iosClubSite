/**
 * Created by webdev on 11/19/14.
 */
var image_count = 1;
var total = 5;

function slide(x) {

    var image = document.getElementById('img');
    image_count += x;
    img.src = "images/img" + image_count + ".png";
}

window.setInterval(function slideA() {

    var image = document.getElementById('img');
    image_count += 1;
    img.src = "images/img" + image_count + ".png";
}, 3000);