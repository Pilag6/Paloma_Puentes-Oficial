//Menu Open-Close

const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".closeMenu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click",show);
closeMenu.addEventListener("click",close);
menu.addEventListener("click",close);

function show(){
    menu.style.display = "flex";
    menu.style.top = "0";
    
}

function close(){
    menu.style.top = "-100%";
}

//Fin Menu Open-Close



//WhatsApp

function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '5492346682655';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let email = document.querySelector('#email').value
        let msn = document.querySelector('#msn').value
        let mensaje = 'send?phone=' + telefono + '&text=*_Formulario de Contacto Paloma Puentes_*%0A*Tu nombre*%0A' + nombre + '%0A*Tu correo electrónico*%0A' + email + '%0A*Tu mensaje*%0A' + msn + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});
