
//Verdadeiro ou falso 
//boolean : true ou false


// para estruturar dados como objetos abre e fechar chaves , exemplo
//{
    //cor:'vermelho
    //correr : function (){ é assim que se usa uma função

    //}
//}

//funtion liquidificador (frutas){
    //alert (frutas)
//}
//liquidificador (''maça banana);
// VARIAVEIS

//VAR name nome = 'rafa';
//nome =''Priscila';

//constantes

//const nome = 'rafaella';
//não modifica em nada por que ela vai permanecer constante


//Voltando ao site
//DOM = Document Object Model

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle')


for( const element of toggle){
element.addEventListener('click', function(){
    nav.classList.toggle('show')
})
}
//no click do menu , fecha ele todo 

const links =document.querySelectorAll('nav ul li a')
for(const link of links){
    link.addEventListener('click', function(){
    nav.classList.remove('show')

    })
}
//Coloca sombra quando der scroll

const header =document.querySelector("#header")
const navHeight =header.offsetHeight
window.addEventListener('scroll',function(){
    if(window.scrollY>=navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
})
//Testimonials carrousel

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination:{
    el: '.swiper-pagination'
    },
    mousewheel: true,
    keybord: true, 
    breakpoints:{
        767:{
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  });


const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration:700, 
    reset : true

})
scrollReveal.reveal(`
#home .image, 
#home .text,
#about .image,
#about .text,
#services header,
#services .card,
#testimonials header,
#testimonials .testimonials,
#contact .text,
#contact .links,
footer .brand ,
footer .social
`
, {interval:100} )


//botão de rolar para cima
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function(){

if(window.scrollY>=600){
    backToTopButton.classList.add('show')
}else {
    backToTopButton.classList.remove('show')
}

})

//link Ativo no menu , de acordo com a sessão da pagina
const sections = document.querySelectorAll('main section[id]')


function activateMenuCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) *4

    for(const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')


        const checkpointStart =checkpoint >= sectionTop
        const checkpointEnd =checkpoint <= sectionTop + sectionHeight

        if( checkpointStart && checkpointEnd){
                document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
            }else{
                document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')

        }
    }

}
window.addEventListener('scroll', function(){
    activateMenuCurrentSection()
})
