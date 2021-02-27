// Programming Exercise: Modifying Images
// Part 1
// Modifies an image by putting three vertical stripes on it
var img = new SimpleImage("hilton.jpg");
print(img);
print(img.getWidth());
var third = img.getWidth()/3
for (var pixel of img.values()) {
    if (pixel.getX() <= third) {
        pixel.setRed(255);
    }
    else if (pixel.getX() > third*2) {
        pixel.setBlue(255);
    }
    else {
        pixel.setGreen(255);
    }
}
print(img);

// Part 2
// This is the original image
var image = new SimpleImage("usain.jpg");
print(image);
// Create a function to swap the red and green values of the pixel
function swapRedGreen(someImage) {
    var image = new SimpleImage(someImage);
    for (var pixel of image.values()) {
        var R = pixel.getRed();
        var G = pixel.getGreen();
        pixel.setRed(G);
        pixel.setGreen(R);
    }
    print(image)
}
// This is the image after we swap the colors
swapRedGreen(image)

// Part 3
// Change the Duke blue devil to be yellow
var imgDuke = new SimpleImage("duke_blue_devil.png");
print(imgDuke)
for (var pixel of imgDuke.values()) {
    if (pixel.getRed() + pixel.getGreen() + pixel.getBlue() < 765) {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}
print(imgDuke)
