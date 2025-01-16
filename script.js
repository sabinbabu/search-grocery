// product list
const products = [
  {
    name: "Basmati Rice",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/large/694550.jpg",
    description: "Long-grain aromatic rice perfect for biryanis and pilafs.",
    price: 20.0,
    category: "Grains",
  },
  {
    name: "Red Lentils",
    image:
      "https://www.mckenziesfoods.com.au/wp-content/uploads/2023/07/McK-RedSplitLentils-375g-FOP.webp",
    description: "Split lentils commonly used in Nepalese dal soup.",
    price: 5.0,
    category: "Pulses",
  },
  {
    name: "Mustard Oil",
    image:
      "https://shop.coles.com.au/wcsstore/Coles-CAS/images/7/9/7/7979746-zm.jpg",
    description: "Pure mustard oil, a staple for Nepalese cooking.",
    price: 12.0,
    category: "Cooking Oils",
  },
  {
    name: "Black Cardamom",
    image:
      "https://mahalmart.com.au/cdn/shop/products/katoomba-premium-black-cardamom-mahal-mart.jpg?v=1724460500",
    description: "Large aromatic pods used in Nepalese curries.",
    price: 8.0,
    category: "Spices",
  },
  {
    name: "Himalayan Pink Salt",
    image:
      "https://pickleandspice.com.au/cdn/shop/files/CHSGL.full.jpg?v=1729760190",
    description: "Natural rock salt from the Himalayas.",
    price: 6.0,
    category: "Condiments",
  },
  {
    name: "Turmeric Powder",
    image: "https://productimages.coles.com.au/productimages/5/5268565.jpg",
    description: "Bright yellow spice used in curries and health remedies.",
    price: 3.5,
    category: "Spices",
  },
  {
    name: "Beaten Rice (Chiura)",
    image:
      "https://mahalmart.com.au/cdn/shop/files/sagoon_group_taichin_white_chuira_mahalmart.jpg?v=1691234761",
    description: "Flattened rice flakes, ideal for snacks and meals.",
    price: 4.0,
    category: "Snacks",
  },
  {
    name: "Gundruk",
    image:
      "https://www.nepalipasal.com.au/cdn/shop/files/ToriGundrukPNG.png?v=1696830061&width=1445",
    description:
      "Fermented and dried leafy greens, a traditional Nepalese dish.",
    price: 7.5,
    category: "Pickles",
  },
  {
    name: "Timur (Sichuan Pepper)",
    image:
      "https://www.nepalipasal.com.au/cdn/shop/files/Timurwhole2PNG.png?v=1684310478&width=1946",
    description: "Citrusy spice used in Nepalese chutneys and curries.",
    price: 9.0,
    category: "Spices",
  },
  {
    name: "Dry Bamboo Shoots",
    image:
      "https://www.portersonlinegrocery.com/wp-content/uploads/2020/03/4295CFE3-6C7F-45C9-83F1-99E6D8C39F3A-scaled.jpeg",
    description: "Dried bamboo shoots used in traditional Nepalese recipes.",
    price: 10.0,
    category: "Vegetables",
  },
  {
    name: "Black Lentils",
    image:
      "https://velspices.com.au/cdn/shop/files/Black_Lentils-removebg-preview.png?v=1699330088",
    description: "Whole black lentils commonly used in dal bhat.",
    price: 6.0,
    category: "Pulses",
  },
  {
    name: "Nepalese Tea",
    image:
      "https://m.media-amazon.com/images/I/71NQoRhshwL._AC_UF894,1000_QL80_.jpg",
    description: "Premium black tea leaves from Nepal.",
    price: 15.0,
    category: "Beverages",
  },
  {
    name: "Nepalese Honey",
    image:
      "https://d3nqxxqpehs4i2.cloudfront.net/catalog/product/2/0/20191217_135957-01_1.jpeg",
    description: "Natural wild honey harvested in Nepal.",
    price: 18.0,
    category: "Condiments",
  },
  {
    name: "Soy Chunks (Nutrela)",
    image:
      "https://cdn0.woolworths.media/content/wowproductimages/large/057425.jpg",
    description: "Protein-rich soy chunks for vegetarian dishes.",
    price: 3.0,
    category: "Snacks",
  },
  {
    name: "Dry Red Chilies",
    image:
      "https://5.imimg.com/data5/RS/GB/MY-9564666/red-chilly-long-500x500.jpg",
    description: "Hot and spicy dry red chilies for seasoning.",
    price: 5.0,
    category: "Spices",
  },
  {
    name: "Nepalese Pickle (Achar)",
    image:
      "https://ktmgroceries.com.au/cdn/shop/collections/IMG-1417.jpg?v=1716195285",
    description: "Spicy and tangy mixed vegetable pickle.",
    price: 4.5,
    category: "Pickles",
  },
  {
    name: "Buckwheat Flour",
    image:
      "https://www.mckenziesfoods.com.au/wp-content/uploads/2023/07/McK-BuckwheatFlour-FOP.jpeg",
    description: "Gluten-free flour used for making roti and pancakes.",
    price: 6.0,
    category: "Flours",
  },
  {
    name: "Dry Fish (Sukuti)",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6aL-v1WRvYYrW9FLAMYMWgHv3f2EechcxQ&s",
    description: "Sun-dried fish for traditional Nepalese dishes.",
    price: 10.0,
    category: "Seafood",
  },
  {
    name: "Makai (Corn Flour)",
    image:
      "https://www.harrisfarm.com.au/cdn/shop/products/92284_HFARM_739907000010-1.jpeg?v=1441111299",
    description: "Fine ground corn flour used in traditional Nepalese recipes.",
    price: 4.0,
    category: "Flours",
  },
  {
    name: "Jimbu",
    image:
      "https://mallko.store/cdn/shop/files/29a.jpg?v=1718308874&width=1445",
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
