document.querySelectorAll(".input-login").forEach((element) => {
    element.addEventListener("blur", (event) => {
        if(event.target.value != ""){
            event.target.nextElementSibling.classList.add("filled");
        }else{
            event.target.nextElementSibling.classList.remove("filled");
        }
    });
});