function counter(){
// achievments
const achievments = document.querySelectorAll('.achieve');

const achievContainer = document.querySelector('.achievments__container')
function counterAnimation(){
    achievments.forEach(achieve=>{
        const target = Number(achieve.dataset.target);
        const boxText = achieve.querySelector('.achieve__number span');
        let boxValue = Number(boxText.textContent);
   
        const gap = Math.trunc(target/10)
        setInterval(function(){
            if(boxValue<target){
                boxValue += gap;
                boxText.textContent = boxValue
            }
        },50)
    })
    }


const observer = new IntersectionObserver(entries=>{
    entries.map(entry=>{
        if(entry.isIntersecting){
        
         counterAnimation()
        }else{
        
       return
    }
    })
  },{
    
    rootMargin:'0px',
    threshold:0.5
  });


  observer.observe(achievContainer)
}

export default counter;