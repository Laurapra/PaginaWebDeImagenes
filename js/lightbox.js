const imagenes = document.querySelector('.img-galeria');
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
const menu12 = document.querySelector('.menu');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAtribute('src'))
    })
});

contenedorLight.addEventListener('click' ,(e)=>{
    if (e.target != imagenesLight) {
        contenedorLight.classList.toggle('.show');
        imagenesLight.classList.toggle('.showImage');
        menu12.style.opacity='1'
    }
})

const aparecerImagen =(imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('.show');
    imagenesLight.classList.toggle('.showImage');
    menu12.style.opacity='0'
}