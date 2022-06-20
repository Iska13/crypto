// accordion start
let acc=document.querySelectorAll(".accordion")
let acc1=document.querySelectorAll(".accordion1")
let act=document.querySelectorAll(".active")
let icon=document.querySelector("i")


for(let i=0; i<acc.length; i++){
    
    acc[i].onclick=function(){
        for(let d=0; d<acc.length; d++){
            
            if(i==d){
                acc[i].style.backgroundColor="rgb(43, 160, 231)" 
                acc[i].style.borderRadius="50px"
                acc1[i].style.color="white"
                
            }else{
                act[d].classList.remove("open")
                acc[d].style.backgroundColor=""
                acc1[d].style.color=""
                
            
            }
        }
        act[i].classList.toggle("open")
        
     

      
    }
} 



 





   




// $(function() {
    
//     let acc = $(".aside-menu > active ").hide();
//     console.log(acc)
      
//     $(".aside-menu > accordion").click(function() {
        
//        acc.slideUp();
//       $(this).parent().next().slideDown();
//       return false;
//     });
//     console.log("salom")
// }) 
  

// $(document).ready(function(){
//   $(".accordion1").click(function(){
//     $(".active").slideToggle("slow");
//     console.log("salom")
//   });
// });

