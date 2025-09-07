 function showSearchBar() {
      document.getElementById('searchBar').style.display = 'flex';
    }

    function hideSearchBar() {
      document.getElementById('searchBar').style.display = 'none';
    }
     function showSlide(index) {
      const wrapper = document.getElementById('sliderWrapper');
      wrapper.style.transform = `translateX(-${index * 100}%)`;

      const dots = document.querySelectorAll('.dot');
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }
    // 2nd slider -----
    function showSlide2(index) {
      const wrapper2 = document.getElementById('sliderWrapper2');
      wrapper2.style.transform = `translateX(-${index * 100}%)`;

      const dots2 = document.querySelectorAll('.dot2');
      dots2.forEach(dot2 => dot2.classList.remove('active2'));
      dots2[index].classList.add('active2');
    }
    // popup start
    function openPopup() {
      document.getElementById("popupForm").style.display = "flex";
    }

    // Close popup
    function closePopup() {
      document.getElementById("popupForm").style.display = "none";
    }

    // Validation function
    var btn = document.getElementById("carticon");
    var image = document.getElementById("cart1");
    var buye = document.getElementById("buy");
    image.onclick = function stp(){
      buye.style.display = "block";
      btn.style.display = "inline-block";
    }
  var btn1 = document.getElementById("carticon2");
    var image1 = document.getElementById("cart2");
    var buye1 = document.getElementById("buy2");
    image1.onclick = function stp(){
      buye1.style.display = "block";
      btn1.style.display = "inline-block";
    }
     var btn2 = document.getElementById("carticon3");
    var image2 = document.getElementById("cart3");
     var buye2 = document.getElementById("buy3");
    image2.onclick = function stp(){
       buye2.style.display = "block";
      btn2.style.display = "inline-block";
    }
     var btn3 = document.getElementById("carticon4");
    var image3 = document.getElementById("cart4");
    var buye3 = document.getElementById("buy4");
    image3.onclick = function stp(){
      buye3.style.display = "block";
      btn3.style.display = "inline-block";
    }
     var btn4 = document.getElementById("carticon5");
    var image4 = document.getElementById("cart5");
    var buye4 = document.getElementById("buy5");
    image4.onclick = function stp(){
      buye4.style.display = "block";
      btn4.style.display = "inline-block";
    }

   var cartimge1 = document.getElementById("cartimg1");
   var cartimge2 = document.getElementById("cartimg2");
   var cartimge3 = document.getElementById("cartimg3");
   var cartimge4 = document.getElementById("cartimg4");
   var cartimge5 = document.getElementById("cartimg5");
   var val = document.getElementById("valll");

   val.addEventListener("click", () => {
    event.preventDefault();

    cartimge1.classList.toggle("hidden");
    cartimge2.classList.toggle("hidden");
    cartimge3.classList.toggle("hidden");
    cartimge4.classList.toggle("hidden");
    cartimge5.classList.toggle("hidden");
    if(cartimge1``.classList.contains("hidden"))
    {
      val.textContent = "VIEW ALL";
      return false;
    }
    else{
      val.textContent = "HIDE";
      return false;
    }
    
   }
  );

  // var btnn = document.getElementById("carticonimg");
  //   var imagee = document.getElementById("cartimg1");
  //   imagee.onclick = function stp(){
  //     btnn.style.display = "inline-block";
  //   }
  // var btnn1 = document.getElementById("carticonimg2");
  //   var imagee1 = document.getElementById("cartimg2");
  //   imagee1.onclick = function stp(){
  //     btnn1.style.display = "inline-block";
  //   }
  //    var btnn2 = document.getElementById("carticonimg3");
  //   var imagee2 = document.getElementById("cartimg3");
  //   imagee2.onclick = function stp(){
  //     btnn2.style.display = "inline-block";
  //   }
  //    var btnn3 = document.getElementById("carticonimg4");
  //   var imagee3 = document.getElementById("cartimg4");
  //   imagee3.onclick = function stp(){
  //     btnn3.style.display = "inline-block";
  //   }
  //    var btnn4 = document.getElementById("carticonimg5");
  //   var imagee4 = document.getElementById("cartimg5");
  //   imagee4.onclick = function stp(){
  //     btnn4.style.display = "inline-block";
  //   }
   
    // cart page
    let cart = [];

    function toggleCart() {
      document.getElementById("cartPopup").classList.toggle("active");
      document.getElementById("overlay").classList.toggle("active");
    }

    function addToCart(name, price, img) {
      cart.push({name, price, img});
      displayCart();
      toggleCart(); // show popup when item is added
    }

    function displayCart() {
      const cartItems = document.getElementById("cartItems");
      cartItems.innerHTML = "";

      if(cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty</p>";
        return;
      }

      cart.forEach((item, index) => {
        cartItems.innerHTML += `
          <div class="cart-item">
            <div class="thumb" style="background-image:url('${item.img}')"></div>
            <div>
              <h4>${item.name}</h4>
              <p>$${item.price}</p>
              <button onclick="removeItem(${index})" class="remove-btn">Remove</button>
            </div>
          </div>
        `;
      });
    }

    function removeItem(index) {
      cart.splice(index, 1);
      displayCart();
    }
  // registratuion
//   function validateForm() {
//   let rname = document.getElementById("regname").value.trim();
//   let rcontact = document.getElementById("regcontact").value.trim();
//   let remail = document.getElementById("regemail").value.trim();
//   let rpassword = document.getElementById("regpassword").value.trim();
//   let rerrorMsg = document.getElementById("regerrorMsg");

//   errorMsg.innerText = "";

//   // 1. Name: 3 to 20 characters
//   if (rname.length < 3 || rname.length > 20) {
//     rerrorMsg.innerText = "Name must be between 3 and 20 characters.";
//     return false;
//   }

//   // 2. Contact Number: Must be numeric and 10 digits
//   if (rcontact.length !== 10) {
//     rerrorMsg.innerText = "Contact number must be exactly 10 digits.";
//     return false;
//   }

//   for (let i = 0; i < rcontact.length; i++) {
//     if (rcontact[i] < '0' || rcontact[i] > '9') {
//       rerrorMsg.innerText = "Contact number must contain only digits.";
//       return false;
//     }
//   }

//   // 3. Email: must be in gmail.com format
//   let atIndex = remail.indexOf("@");
//   let dotIndex = remail.lastIndexOf(".");
//   if (atIndex < 1) {
//     rerrorMsg.innerText = "Email must contain '@' and some text before it.";
//     return false;
//   }

//   let domain = remail.substring(atIndex);
//   if (domain !== "@gmail.com") {
//     rerrorMsg.innerText = "Email must end with '@gmail.com'.";
//     return false;
//   }

//   // 4. Password validation: at least one letter, one digit, and one symbol from defined set
//   if (rpassword.length < 6) {
//     rerrorMsg.innerText = "Password must be at least 6 characters long.";
//     return false;
//   }

//   let hasLetter = false;
//   let hasDigit = false;
//   let hasSymbol = false;

//   const allowedSymbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

//   for (let i = 0; i < rpassword.length; i++) {
//     let ch = rpassword[i];

//     // Letter check
//     if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
//       hasLetter = true;
//     }

//     // Digit check
//     if (ch >= '0' && ch <= '9') {
//       hasDigit = true;
//     }

//     // Symbol check manually
//     for (let j = 0; j < allowedSymbols.length; j++) {
//       if (ch === allowedSymbols[j]) {
//         hasSymbol = true;
//         break;
//       }
//     }
//   }

//   if (!hasLetter || !hasDigit || !hasSymbol) {
//     rerrorMsg.innerText = "Password must include a letter, a digit, and a symbol (!@#$%^&*).";
//     return false;
//   }

//   alert("Form submitted successfully!");
//   return true;
// }

// // login 
//  function validateForm() {
//       const name = document.getElementById("name").value.trim();
//       const email = document.getElementById("email").value.trim();
//       const password = document.getElementById("password").value;
//       const errorMsg = document.getElementById("errorMsg");

//       errorMsg.innerHTML = "";

//       if (name === "") {
//         errorMsg.innerHTML = "Name is required.";
//         return false;
//       }

//       if (email === "" || !email.includes("@gmail") || !email.includes(".com")) {
//         errorMsg.innerHTML = "Enter a valid email.";
//         return false;
//       }

//       if (password.length < 6) {
//         errorMsg.innerHTML = "Password must be at least 6 characters.";
//         return false;
//       }

//       alert("Registration successful!");
//       closePopup();
//       return false; 
//     }
//     function showRegister() {
//       document.getElementById("loginForm").classList.add("hidden");
//       document.getElementById("form-container").classList.remove("hidden");
//     }

//     function showLogin() {
//       document.getElementById("form-container").classList.add("hidden");
//       document.getElementById("loginForm").classList.remove("hidden");
//     }

function openPopup() {
      document.getElementById("popup").style.display = "flex";
    }

    // Close popup
    function closePopup() {
      document.getElementById("popup").style.display = "none";
    }

    // Switch forms
    function showRegister() {
      document.getElementById("loginForm").classList.add("hidden1");
      document.getElementById("registerForm").classList.remove("hidden1");
    }

    function showLogin() {
      document.getElementById("registerForm").classList.add("hidden1");
      document.getElementById("loginForm").classList.remove("hidden1");
    }

    // Demo Login
    function login() {
      let user = document.getElementById("loginUser").value;
      let pass = document.getElementById("loginPass").value;
      if(user === "" || pass === "") {
        alert("Please fill all fields!");
      } else {
        alert("Login Successful (Demo)");
        closePopup();
      }
    }

    // Demo Register
    function register() {
      let user = document.getElementById("regUser").value;
      let email = document.getElementById("regEmail").value;
      let pass = document.getElementById("regPass").value;
      if(user === "" || email === "" || pass === "") {
        alert("Please fill all fields!");
      } else {
        alert("Registration Successful (Demo)");
        showLogin();
      }
    }
