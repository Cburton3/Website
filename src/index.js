const button = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar-nav");

button.addEventListener("click",()=> {
    navbar.classList.toggle("open")
});

const closeButton = document.querySelector(".btn-close");
if(closeButton !== null) {
closeButton.addEventListener("click",()=> {
    console.log('hello')
    dropdown.classList.remove("open");
    
});
}
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.lightBox')
images.forEach(image => {
    image.addEventListener('click', e=> {
       console.log('hello');
        lightbox.classList.add('active') 
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})
