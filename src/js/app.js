
document.querySelectorAll(".input-login").forEach((element) => {
    element.addEventListener("blur", (event) => {
        if(event.target.value != ""){
            event.target.nextElementSibling.classList.add("filled");
            console.log("hola");
        }else{
            event.target.nextElementSibling.classList.remove("filled");
            console.log("holaaaaaa");
        }
    });
});

document.addEventListener('DOMContentLoaded', function(){
    startApp();
});

function startApp(){
    ShowModal();
}

function ShowModal(){
    const btn =  document.querySelector(".btn-log");

    btn.addEventListener("click", function(e){
        const modal = document.createElement("form");
        modal.innerHTML = ` 
        <h3>Create Acoount</h3>
        <form action="">
            <label>Enter your data</label>
            <div class="container_input">
                <input class="input-login" id="newemail"  type="text" name="" placeholder=" " autocomplete="off" required/>
                <label class="label-login" for="newemail">Email</label>
                <span>*Campo obligatorio</span> 
            </div> 
            <div class="container_input">
                <input class="input-login" id="newuser"  type="text" name="" placeholder=" " autocomplete="off" required/>
                <label class="label-login" for="newuser">Username</label>
                <span>*Campo obligatorio</span> 
            </div> 
            <div class="container_input">
                <input class="input-login" id="newpass"  type="password" name="" placeholder=" " autocomplete="off" required/>
                <label class="label-login" for="newpass">Password</label>
                <span>*Campo obligatorio</span> 
            </div>
            <div class="container_input">
                <button type="submit">
                    Create
                </button>
            </div>
            <div class="decorate-span">
                <span>or</span>
                <hr/>
            </div>
            
            <div class="container-social">
               <div class="contain-google">
                    <picture class="pic-google">
                        <source srcset="../build/img/google.avif" type="image/avif">
                        <source srcset="../build/img/google.webp" type="image/webp">
                        <img loading="Lazy" src="build/img/google.jpg" alt="imagen instagram">
                    </picture>
                    <span>
                        Google
                    <span>
               </div> 
               <div class="contain-instagram">
                    <picture class="pic-instagram">
                        <source srcset="../build/img/instagram.avif" type="image/avif">
                        <source srcset="../build/img/instagram.webp" type="image/webp">
                        <img loading="Lazy" src="build/img/instagram.jpg" alt="imagen instagram">
                    </picture>
                    <span>
                        Instagram
                    <span>
               </div>
            </div>
        </form>
        `;

        const body = document.querySelector("body");

        const overlay = document.createElement("div");

        overlay.appendChild(modal);
        modal.classList.add("container");
        overlay.classList.add("overlay");
        
        


        body.appendChild(overlay);
        body.classList.add("fijar-body");
    });
}




