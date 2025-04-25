// const form = document.getElementById('contactForm');
// const thankYou = document.getElementById('thankYouMessage');
// console.log(form)

// form.addEventListener('submit',function(e){
//   e.preventDefault();

//   if (form.checkValidity()) {
//     form.style.display = 'none';
//     thankYou.style.display = 'block';
//   }
// });

// function goBackToForm() {
//   form.reset();
//   thankYou.style.display = 'none';
//   form.style.display = 'block';
// }

// function goToHome() {
//   window.location.href = 'index.html';
// }

const form = document.getElementById("contactForm");
const thankYou = document.getElementById("thankYouMessage");
console.log(form);

// form.addEventListener('submit',function(e){
//   e.preventDefault();

//   const firstName=document.getElementById('firstName');
//   const lastName=document.getElementById('lastName');
//   const Email=document.getElementById('email');
//   const description=document.getElementById('message')

//   const res=fetch('mongodb://localhost:27017/myDatabase/api/users',{
//     method:'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ firstName,lastName, Email,description })
//   })

//   const data =  res.json();
//   console.log('User added:', data);

//   if (form.checkValidity()) {
//     form.style.display = 'none';
//     thankYou.style.display = 'block';
//   }
// });

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const Email = document.getElementById("email").value;
  const description = document.getElementById("message").value;

  try {
    const res = await fetch("https://tecnolusion-analytics-website.onrender.com/api/users", {
      // <-- must be an HTTP endpoint, not MongoDB URIgit
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, Email, description }),
    });

    const data = await res.json();
    console.log("User added:", data);

    if (form.checkValidity()) {
      form.style.display = "none";
      thankYou.style.display = "block";
    }
  } catch (error) {
    console.error("Error adding user:", error);
  }
});

function goBackToForm() {
  form.reset();
  thankYou.style.display = "none";
  form.style.display = "block";
}

function goToHome() {
  window.location.href = "index.html";
}
