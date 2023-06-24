 let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
} 
//Funcion que aplica las animaciones de las habilidades
 function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("angular");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("react");
        habilidades[6].classList.add("springboot");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajo");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("optimismo");
        habilidades[12].classList.add("problemas");
        habilidades[13].classList.add("autodidacta");
    }
} 


//detecto el scrolling para aplicar la animacion de la barra de habilidades
 window.onscroll = function(){
    efectoHabilidades();
}  

//Email js
const contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactNumber = document.getElementById('contact-number'),
        contactEmail = document.getElementById('contact-email'),
        contactProyect = document.getElementById('contact-proyect'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    //check los campos vacios
    if(contactName.value === '' || contactNumber.value === '' || contactEmail.value === '' || contactProyect.value === '' || contactMessage.value === ''){

        // Remover color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //show message
        contactMessage.textContent='Escribir todos los campos de entrada'
    } else{
        //serviceID - TemplateID - #form - publicKey
        emailjs.sendForm('service_2o8cd3g','template_tfdlnen','#contact-form','uyOSorHgxTva8tUga')
        .then(() =>{
            // Mostrar mensaje
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Mensaje Enviado'

            // Remover mensaje después de 5 segundos
            setTimeout(()=>{
                contactMessage.textContent = ''
            },5000)
        },  (error) => {
                alert('OOOPS! fallo el mensaje')
            })
    }
}
contactForm.addEventListener('submit', sendEmail)