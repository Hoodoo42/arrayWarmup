let studentName = "Florence";
let studentGpa = 3.8;
let honorRole = true;


if(honorRole){
    console.log("Well done! You have made the honor role!");
}else{
    console.log("Good job making it through!");
}

if(studentGpa <1.9){
    console.log("F");
}else if(studentGpa >1.9 || studentGpa <2.5){
    console.log("D");
}else if(studentGpa >2.4 || studentGpa <2.8){
    console.log("C");
}else if(studentGpa >2.8 || studentGpa <3.5){
    console.log("B"); 
}else if(studentGpa >3.4 || studentGpa < 4.1){
    console.log("A");    
}

let studentNames = [`Buttercup`, `Bubbles`, `Blossom`];
let studentGPAs = [3.3, 3.1, 4.0];
let honorRoles = [true, true, true];

studentNames.push(`MojoJoJo`);
studentGPAs.push(2.1);
honorRoles.push(false);

if(honorRoles === true, true, true){
    console.log(`Congradulations everyone!`);
}else if(honorRoles === true, true, false || true, false, true || false, true, true){
    console.log(`Well done`);
}else{
    console.log(`Failure means you are trying, and that's an accomplishment.`);
}



