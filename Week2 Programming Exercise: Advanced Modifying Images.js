// Programming Exercise: Advanced Modifying Images
// Part 1 - green screen algorithm
var fgimg = new SimpleImage ("drewRobert.png");
var bgimg = new SimpleImage ("dinos.png");
var output = new SimpleImage (fgimg.getWidth(), fgimg.getHeight());
// if the color is green, we use background image
for (var pixel of fgimg.values()) {
    if (pixel.getGreen() > 230) {
        var x = pixel.getX();
        var y = pixel.getY();
        bgpixel = bgimg.getPixel(x,y);
        output.setPixel(x,y,bgpixel)
    }
    else {
        output.setPixel(pixel.getX(),pixel.getY(),pixel)
    }
}
//print(output)

// Part 2 - help change the code
var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  else {
    px.setGreen(255);
  }
}
print (img);
// after change
var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  if (x >= img.getWidth()/2&&y<=img.getHeight()/2){
    px.setGreen(255);
  }
}
print (img);

// Part 3 - one parameter pixel setBlack
var panda = new SimpleImage ("smallpanda.png")
print(panda)

function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}
function addBorder(size,image) {
    var image = new SimpleImage(image)
    for (var pixel of image.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (x <= size || x >= image.getWidth()-size) {
            pixel = setBlack(pixel);
        }
        if (y <= size || y >= image.getHeight()-size) {
            pixel = setBlack(pixel);
        }
    }
    return image
}
print(addBorder(10, panda));
print(addBorder(50, panda));
