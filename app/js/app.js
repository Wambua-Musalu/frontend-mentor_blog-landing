const btnHambuger = document.querySelector('#btn--hambuger');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade')
const body = document.querySelector('body');

console.log('shit');
console.log(btnHambuger)

btnHambuger.addEventListener('click', ()=>{

    console.log('open menu')
    if(header.classList.contains('open')){
        header.classList.remove('open');
        body.classList.remove('no-scroll')
        fadeElems.forEach(element =>{
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });        
        }   else{
       header.classList.add('open');
       body.classList.add('no-scroll')
       fadeElems.forEach(element => {
            element.classList.add('fade-in');
           element.classList.remove('fade-out')
        });
    }
}); 









