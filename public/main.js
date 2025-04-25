









function goToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

 


  

  
    


   
  

  
  //  const navLinks = document.getElementsByClassName("links");
  

  


  let div1=document.querySelector('.tab');
  



  function addClass(){
   const navLinks = document.querySelector(".links");
   if (navLinks.style.display === "flex") {
     navLinks.style.display = "none";
     div1.classList.remove('tab')
    
   } else {
     
     navLinks.style.display = "flex";
     navLinks.classList.add('tab')
     
   }
 }



















    window.addEventListener('scroll', function() {
      const nav = document.querySelector('nav');
      
      if (window.scrollY > 50) {
        nav.style.background = "rgba(255, 255, 255, 0.95)";
      } else {
        nav.style.background = "rgba(255, 255, 255, 0.7)";
      }
    });




    // form data 


//     const form = document.getElementById('contactForm');
// const thankYou = document.getElementById('thankYouMessage');
// console.log(form)

//     form.addEventListener('submit',function(e){
//       e.preventDefault();
    
//       if (form.checkValidity()) {
//         form.style.display = 'none';
//         thankYou.style.display = 'block';
//       }
//     });
    
//     function goBackToForm() {
//       form.reset();
//       thankYou.style.display = 'none';
//       form.style.display = 'block';
//     }
    
//     function goToHome() {
//       window.location.href = 'index.html';
//     }

  


















//     const form = document.getElementById('contactForm');
//     const thankYou = document.getElementById('thankYouMessage');
// console.log(form)
    

//     form.addEventListener('submit',function(e){
//       e.preventDefault();

//       if (form.checkValidity()) {
//         form.style.display = 'none';
//         thankYou.style.display = 'block';
//       }
//     });

//     function goBackToForm() {
//       form.reset();
//       thankYou.style.display = 'none';
//       form.style.display = 'block';
//     }

//     function goToHome() {
//       window.location.href = 'index.html';
//     }




    // form firebase data  
