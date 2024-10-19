function validateForm() {
    // Clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    let isValid = true;

    // Get values from input fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Please enter your name.";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").innerText = "Please enter your email.";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        document.getElementById("messageError").innerText = "Please enter your message.";
        isValid = false;
    }

    // Prevent form submission if validation fails
    return isValid;
}

let popup=document.getElementById("popup-container");

function showPopup(){
    popup.style.display = "block";
    popup.style.top = "80%";

    popup.classList.add("open-popup");

}

function closePopup(){

    popup.classList.remove("open-popup");
    popup.style.display = "none";

}

let pop=document.getElementById("pop-container");

function howPopup(){
    pop.style.display = "block";
    pop.style.top = "80%";

    pop.classList.add("open-popup");

}

function losePopup(){

    pop.classList.remove("open-popup");
    pop.style.display = "none";

}
let popBox=document.getElementById("up-container");

function openPopup(){
    popBox.style.display = "block";
    popBox.style.top = "80%";

    popBox.classList.add("open-popup");

}

function hidePopup(){

    popBox.classList.remove("open-popup");
    popBox.style.display = "none";

}


// api//

async function fetchProducts() {
    try {

      const response = await fetch('https://fakestoreapi.com/products');
  
      if (!response.ok) {
        throw new Error('Unable to fetch products. Please try again later.');
      }
  
      const products = await response.json();
  
      if (products.length === 0) {
        displayMessage('No products found.');
      } else {
        displayProducts(products);
      }
    } catch (error) {
      displayMessage(`Error: ${error.message}`);
    }
  }
  
  function displayMessage(msg) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = msg;
    messageDiv.style.display = 'block'; 
  }
  
  function displayProducts(products) {
    const productList = document.getElementById('products');
    productList.innerHTML = ''; 
  
    products.forEach((product) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${product.title}</span>
        <strong>₹${product.price}</strong>
      `;
      productList.appendChild(li);
    });
  }
  
  
  fetchProducts();
  