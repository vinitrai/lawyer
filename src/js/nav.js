export default function navFunctionality(){
const menu =document.querySelector('.menu')
menu.addEventListener('click',function(){
    const nav = document.querySelector('.main__nav')
    nav.classList.toggle('show__nav')
})
}