document.addEventListener("DOMContentLoaded", function () {
    var divs = document.querySelectorAll(".div");

    divs.forEach(div => {

        let p = div.querySelector("p");
        let span = div.querySelector("span");
        let img = div.querySelector("img");
        
        let spans = document.querySelectorAll("span")
        let imgs = document.querySelectorAll("div img")
            span.style.display = "none"; 

            img.addEventListener("click", function () { 
                p.click(); // Clicking the image also toggles the accordion
            });

            p.addEventListener("click", function () {
              
                spans.forEach(sp => {
                    if (sp !== span) sp.style.display = "none";

                });
                imgs.forEach(im=>{
                    if(im!==img) im.src = "./icon-plus.svg"
                })

                let isVisible = span.style.display === "block";
                span.style.display = isVisible ? "none" : "block";
    
                // Change the icon accordingly
                img.src = isVisible ? "./icon-plus.svg" : "./icon-minus.svg";
            });

          
        
    });
});
