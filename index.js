function value(){
    let navbar = document.getElementById("navbar");
    navbar.style.backgroundColor="black";
}


function changeImage(){
    let displayImage = document.getElementById("img1")
    if(displayImage.src.match("./image1.png")){
        displayImage.src = '.././image2.png'
    } else{
        displayImage.src = "./image4.png"
    } 
    
}