const mainDiv = document.getElementById('products')
const cartCount = document.getElementById('count')
const cartPrice = document.getElementById('price')
let cart = [];
async function fetchData ()
{
    try
    {
        const res = await fetch("https://dummyjson.com/products");
        console.log(res)
        if (res.ok)
        {
            const data = await res.json()
            console.log(data)
            displayData(data.products)
        }
        else
        {
            console.error("Please check the fetch data")
        }
    }
    catch (err)
    {
        console.error(err)
    }
}
fetchData()
function displayData(data)
{
    data.forEach((pros)=>
    {
        const product = document.createElement('div')
        product.classList.add('product')
        const title = document.createElement('h2')
        title.textContent = pros.title
        const image = document.createElement('img')
        image.src = pros.thumbnail;
        image.alt = pros.title
        
        const brand = document.createElement('p')
        brand.textContent = pros.brand
        const price_cart = document.createElement('div')
        price_cart.classList.add("price_cart")
        const price = document.createElement('h2')
        price.textContent = "$"+" " +pros.price
        const cart_button = document.createElement('button')
        cart_button.textContent = "Add to Cart"
        cart_button.classList.add('cart-button')
        cart_button.addEventListener('click', addCart) 
        price_cart.append(price,cart_button)
        const productLink = document.createElement('a')
        productLink.href = `./product.html?pro=${encodeURIComponent(JSON.stringify(pros))} `;
        productLink.target="_blank"
        productLink.appendChild(title)
        product.append(title,image,brand,price_cart)
        mainDiv.appendChild(product)
    })
}
function addCart(event) {
    const newpro = JSON.parse(event.target.getAttribute('data-product'));
    console.log(newpro);

    // Add the selected product to the cart array
    cart.push(newpro);

    // Update the cart count
    cartCount.textContent = cart.length;

    // Calculate the total price using reduce
    const totalPrice = products.reduce((accumulator, product) => accumulator + pros.price, 0);
    const totalPriceElement = document.getElementById('totalPrice');
    // Update the cart price
    totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
}
