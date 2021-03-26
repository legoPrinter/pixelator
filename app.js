var canvas = document.getElementById('canvas'); 
var ctx = canvas.getContext('2d');
var stage = 1;
var sumbit = document.getElementById('submit');
var pixilate = document.getElementById('num');
var value = 5;
function getImage() {
    const img = new Image();
    img.setAttribute('crossorigin', 'anonymous');
    img.src = document.getElementById('url').value;
    img.onload = () => {
        canvas.width = 507;
        canvas.height = 507 / (img.width / img.height);
        var p = value;
        ctx.drawImage(img, 0, 0, canvas.width / p, canvas.height / p);       
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(canvas, 0, 0, canvas.width / p, canvas.height / p, 0, 0, 507, 507 / (img.width / img.height));
    };
};
function effect(num) {
    if (value + num > 2 && value + num < 21)  {
        value += num;
        pixilate.innerText = value;
    };
};
function open_image() {
    src = canvas.toDataURL();
    var newTab = window.open();
    newTab.document.body.innerHTML = '<img src="' + src + '" style="width: 100%;">';
};