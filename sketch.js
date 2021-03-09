var input;
var chooser ;
var rgb = [];

function setup() {

rgb = ["RGB","RBG","GBR","GRB","BGR","BRG","RGR","BGR","GRG","BRB","GBG","RBR","RRR","GGG","BBB"];
chooser = Math.round(random(0,rgb.length-1));

input = rgb[chooser]

}
function draw(){

    if(input.charAt(0) === input.charAt(input.length-1)) {
        console.log(input.charAt(0));
    } 
    if(input.charAt(0) === "R" && input.charAt(input.length-1) === "B") {
        console.log("G");
    }
    if(input.charAt(0) === "R" && input.charAt(input.length-1) === "G") {
        console.log("B");
    }
    if(input.charAt(0) === "G" && input.charAt(input.length-1) === "R") {
        console.log("B");
    }
    if(input.charAt(0) === "G" && input.charAt(input.length-1) === "B") {
        console.log("R");
    }
    if(input.charAt(0) === "B" && input.charAt(input.length-1) === "R") {
        console.log("G");
    }
    if(input.charAt(0) === "B" && input.charAt(input.length-1) === "G") {
        console.log("R");
    }
}