function value(){
    let navbar = document.getElementById("navbar");
    navbar.style.backgroundColor="black";
}

<<<<<<< HEAD

function changeImage(){
    let displayImage = document.getElementById("img1")
    if(displayImage.src.match("./image1.png")){
        displayImage.src = '.././image2.png'
    } else{
        displayImage.src = "./image4.png"
    } 
    
}
=======
// ++++++++++++liked jss
let state = true;
        function imageChange(){
            var heartElement = document.getElementById("img-heart-1");
            if(state){
                heartElement.src = "./img/home-img/heart (1).png";
             }
             else{
                heartElement.src = "./img/home-img/heart.png"
             }
             state =!state;
            }

            function image2Change(){
            var  heartElement = document.getElementById("img-heart-2");
             if(state){
                 heartElement.src = "./img/home-img/heart (1).png";
              }
              else{
                 heartElement.src = "./img/home-img/heart.png"
              }
              state =!state;
            }

            function image3Change(){
             var heartElement = document.getElementById("img-heart-3");
              if(state){
                  heartElement.src = "./img/home-img/heart (1).png";
               }
               else{
                  heartElement.src = "./img/home-img/heart.png"
               }
               state =!state;

            }

            function image4Change(){
            var  heartElement = document.getElementById("img-heart-4");
               if(state){
                   heartElement.src = "./img/home-img/heart (1).png";
                }
                else{
                   heartElement.src = "./img/home-img/heart.png"
                }
                state =!state;
        
        }

        // +++++++++++++++++++Qunatity card js

        function increaseQuantity(){
        var quantityElement = document.getElementById("quantity-text")
        var quantity = parseInt(quantityElement.innerText);
        if(quantity<5){
            quantity++;
            quantityElement.innerText = quantity;
        }
       else{
            alert("You can't buy more than 5 items");
        }
        }

        function decreaseQuantity(){
            var quantityElement = document.getElementById("quantity-text")
            var quantity = parseInt(quantityElement.innerText);
            if( quantity>1){
                quantity--;
                quantityElement.innerText = quantity;   
            }
            else{
                alert("You can't buy less than one item");
            }
            

        }


        function increaseQuantity2(){
            var quantityElement = document.getElementById("quantity-text-2")
            var quantity = parseInt(quantityElement.innerText);
            if(quantity<5){
                quantity++;
                quantityElement.innerText = quantity;
            }
           else{
                alert("You can't buy more than 5 items");
            }
            }
    
            function decreaseQuantity2(){
                const quantityElement = document.getElementById("quantity-text-2")
                let quantity = parseInt(quantityElement.innerText);
                if( quantity>1){
                    quantity--;
                    quantityElement.innerText = quantity;   
                }
                else{
                    alert("You can't buy less than one item");
                }
                
            }


            function increaseQuantity3(){
                var quantityElement = document.getElementById("quantity-text-3")
                var quantity = parseInt(quantityElement.innerText);
                if(quantity<5){
                    quantity++;
                    quantityElement.innerText = quantity;
                }
               else{
                    alert("You can't buy more than 5 items");
                }
                }
        
                function decreaseQuantity3(){
                    const quantityElement = document.getElementById("quantity-text-3")
                    let quantity = parseInt(quantityElement.innerText);
                    if( quantity>1){
                        quantity--;
                        quantityElement.innerText = quantity;   
                    }
                    else{
                        alert("You can't buy less than one item");
                    }
                    
                }

                function increaseQuantity4(){
                    var quantityElement = document.getElementById("quantity-text-4")
                    var quantity = parseInt(quantityElement.innerText);
                    if(quantity<5){
                        quantity++;
                        quantityElement.innerText = quantity;
                    }
                   else{
                        alert("You can't buy more than 5 items");
                    }
                    }
            
                    function decreaseQuantity4(){
                        const quantityElement = document.getElementById("quantity-text-4")
                        let quantity = parseInt(quantityElement.innerText);
                        if( quantity>1){
                            quantity--;
                            quantityElement.innerText = quantity;   
                        }
                        else{
                            alert("You can't buy less than one item");
                        }
                        
                    }
                
    // +++++++++++++++++++++++++++fotter js+++++++++++++++
    let subscribeBtn =document.getElementById("Subscribe=-btn");
    function clickBtn(){
        alert("You have succesfully subscribe");
    }        
        
>>>>>>> 1ea69fbbe719a1edb113016670ba956f7cf2e12e
