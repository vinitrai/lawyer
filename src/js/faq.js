function faqToggle(){
    const faqBox = document.querySelector('.faq__container')
faqBox.addEventListener('click',function(e){
    if(e.target.classList.contains('plus')){
   const answer = e.target.closest('.faq__box').children[1]
   answer.classList.toggle('show__faq')
     
  
    }
})
}

export default faqToggle;