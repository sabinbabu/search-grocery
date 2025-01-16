// product list
const products = [
  {
    name: "Basmati Rice",
    description: "Long-grain aromatic rice perfect for biryanis and pilafs.",
    price: 20.0,
    category: "Grains",
  },
  {
    name: "Red Lentils",
    description: "Split lentils commonly used in Nepalese dal soup.",
    price: 5.0,
    category: "Pulses",
  },
  {
    name: "Mustard Oil",
    description: "Pure mustard oil, a staple for Nepalese cooking.",
    price: 12.0,
    category: "Cooking Oils",
  },
  {
    name: "Black Cardamom",
    description: "Large aromatic pods used in Nepalese curries.",
    price: 8.0,
    category: "Spices",
  },
  {
    name: "Himalayan Pink Salt",
    description: "Natural rock salt from the Himalayas.",
    price: 6.0,
    category: "Condiments",
  },
  {
    name: "Turmeric Powder",
    description: "Bright yellow spice used in curries and health remedies.",
    price: 3.5,
    category: "Spices",
  },
  {
    name: "Beaten Rice (Chiura)",
    description: "Flattened rice flakes, ideal for snacks and meals.",
    price: 4.0,
    category: "Snacks",
  },
  {
    name: "Gundruk",
    description:
      "Fermented and dried leafy greens, a traditional Nepalese dish.",
    price: 7.5,
    category: "Pickles",
  },
  {
    name: "Timur (Sichuan Pepper)",
    description: "Citrusy spice used in Nepalese chutneys and curries.",
    price: 9.0,
    category: "Spices",
  },
  {
    name: "Dry Bamboo Shoots",
    description: "Dried bamboo shoots used in traditional Nepalese recipes.",
    price: 10.0,
    category: "Vegetables",
  },
  {
    name: "Black Lentils",
    description: "Whole black lentils commonly used in dal bhat.",
    price: 6.0,
    category: "Pulses",
  },
  {
    name: "Nepalese Tea",
    description: "Premium black tea leaves from Nepal.",
    price: 15.0,
    category: "Beverages",
  },
  {
    name: "Nepalese Honey",
    description: "Natural wild honey harvested in Nepal.",
    price: 18.0,
    category: "Condiments",
  },
  {
    name: "Soy Chunks (Nutrela)",
    description: "Protein-rich soy chunks for vegetarian dishes.",
    price: 3.0,
    category: "Snacks",
  },
  {
    name: "Dry Red Chilies",
    description: "Hot and spicy dry red chilies for seasoning.",
    price: 5.0,
    category: "Spices",
  },
  {
    name: "Nepalese Pickle (Achar)",
    description: "Spicy and tangy mixed vegetable pickle.",
    price: 4.5,
    category: "Pickles",
  },
  {
    name: "Buckwheat Flour",
    description: "Gluten-free flour used for making roti and pancakes.",
    price: 6.0,
    category: "Flours",
  },
  {
    name: "Dry Fish (Sukuti)",
    description: "Sun-dried fish for traditional Nepalese dishes.",
    price: 10.0,
    category: "Seafood",
  },
  {
    name: "Makai (Corn Flour)",
    description: "Fine ground corn flour used in traditional Nepalese recipes.",
    price: 4.0,
    category: "Flours",
  },
  {
    name: "Jimbu",
    description: "Dried herb used to flavor Nepalese lentils and soups.",
    price: 8.0,
    category: "Herbs",
  },
];

const productContainer = document.querySelector(".products-container");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search");
const goHomeBtn = document.querySelector("#go-home-btn");

// function to display products
const displayProducts = (item) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.innerHTML = ` 
            <div class="image-container flex">
              <img
                src=${item.image}
                alt=${item.name}
              />
            </div>
            <h3>${item.name}</h3>
            <span>${item.category}</span>
            <p>
          ${item.description}
            </p>
            <p><b>AUD ${item.price}</b></p>
            `;
  productContainer.appendChild(productCard);
};

// load products for displaying
const loadProducts = (products) => {
  productContainer.innerHTML = "";
  if (products != "") {
    goHomeBtn.innerHTML = `<a href="#body">Go to Top</a>`;
    products.forEach((item) => {
      displayProducts(item);
    });
  } else {
    productContainer.innerHTML =
      "Sorry no products found. We are working hard to restock items.";
    goHomeBtn.innerText = "See Other Products";
  }
};

loadProducts(products);

// search functionality
searchBtn.onclick = () => {
  if (searchBox.value.trim() != "") {
    const query = searchBox.value.trim().toLowerCase();
    const filteredArray = products.filter((item) => {
      return (
        item.name.toLowerCase().includes(query) ||
        item.price.toString().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    });

    loadProducts(filteredArray);
  }
};

// goHome button
goHomeBtn.onclick = () => {
  loadProducts(products);
};
