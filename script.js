//Form Validation
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


//Shortcut
var toEvents = document.getElementById('events');
toEvents.addEventListener('click', function(){
  window.scrollTo(0, 448.79998779296875)
})

var toTimeline = document.getElementById('timeline');
toTimeline.addEventListener('click', function(){
  window.scrollTo(0, 1903.199951171875)
})

var toRegistration = document.getElementById('registration');
toRegistration.addEventListener('click', function(){
  window.scrollTo(0, 2720)
})

var toContactUs = document.getElementById('contact');
toContactUs.addEventListener('click', function(){
  window.scrollTo(0, 3030)
})

var toEvent1 = document.getElementById('event1');
toEvent1.addEventListener('click', function(){
  window.scrollTo(0, 2770)
  document.getElementById("event").value = "Lorem ipsum dolor sit amet consectetur. (3 Oktober 2022)";
})

var toEvent2 = document.getElementById('event2');
toEvent2.addEventListener('click', function(){
  window.scrollTo(0, 2770)
  document.getElementById("event").value = "Lorem ipsum dolor sit amet consectetur. (4 Oktober 2022)";
})

var toEvent3 = document.getElementById('event3');
toEvent3.addEventListener('click', function(){
  window.scrollTo(0, 2770)
  document.getElementById("event").value = "Lorem ipsum dolor sit amet consectetur. (5 Oktober 2022)";
})


// Animation
function reveal() {
  var reveals = document.querySelectorAll(".event-card");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } 
  }
}

window.addEventListener("scroll", reveal);

function reveal1() {
  var reveals = document.querySelectorAll(".timeline");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } 
  }
}

window.addEventListener("scroll", reveal1);


//Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCxebHnOUfF8iuS9O__SrklHE3VqaD-IL8",
  authDomain: "puddingfest-23a77.firebaseapp.com",
  databaseURL: "https://puddingfest-23a77-default-rtdb.firebaseio.com",
  projectId: "puddingfest-23a77",
  storageBucket: "puddingfest-23a77.appspot.com",
  messagingSenderId: "187092782252",
  appId: "1:187092782252:web:cd1bc4578aaa7a9722a309",
  measurementId: "G-VGFY03C3ZP"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database().ref('Registration')

const formRegistration = document.querySelector('section form');

formRegistration.addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const nama = document.querySelector('#nama').value;
  const telepon = document.querySelector('#telepon').value;
  const event = document.querySelector('#event').value;
  
  let newRegistration = database.push();
  newRegistration.set({
    email: email,
    nama: nama,
    nomorTelepon: telepon,
    event: event,
  });
});