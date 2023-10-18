function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function opencart() {
    document.getElementById("sidebar").style.width = "350px";
    document.getElementById("main").style.marginleft = "350px";
  }
  
  function closecart() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginleft = "0";
  }


  document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.addbutton');
    const cartContent = document.getElementById('cartcontent');
    const cartQuantity = document.querySelector('.quantity');

    const cartItems = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            addToCart(this);
            alert("Item added to cart successfully");
        });
    });

    function addToCart(button) {
        const card = button.parentElement.parentElement;

        const product = {
            image: card.querySelector('img').src,
            name: card.querySelector('h5').textContent,
            description: card.querySelector('.card-content p').textContent,
        };

        cartItems.push(product);

        cartQuantity.textContent = cartItems.length;

        displayCart();
    }

    function removeItem(index) {
        cartItems.splice(index, 1);
        displayCart();
    }

    function displayCart() {
        cartContent.innerHTML = '';

        cartItems.forEach((product, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div style="display: flex; align-items: center;">
                    <img src="${product.image}" alt="${product.name}" style="max-width: 50px; border: 1px solid #ccc; margin-right: 10px;">
                    <div>
                        <h5 style="font-size: 20px; color: #333; padding:20px">${product.name}</h5>
                    </div>
                    <button class="remove-item" style="background-color: black;
                    color: white;
                    border: none;
                    padding: 5px 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                    margin: 0 5px;" data-index="${index}">Remove Item</button>
                </div>
            `;
            cartContent.appendChild(cartItem);
        });

        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(removeButton => {
            removeButton.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                removeItem(index);
              cartQuantity.innerHTML=cartItems.length;
            });
        });
    }
});

