// dropdown 
const burgerMenu = document.querySelector('#burger');
const dropdown = document.querySelector('#drop');

burgerMenu.addEventListener('click', function () {
    if (window.getComputedStyle(dropdown).display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

// object

const collection = [
    {
        picture: "assets/spaghettis-bolognaise.jpeg",
        dish: "Dish: Pasta Bolognese",
        description: "Description: A hearty pasta dish with a rich, slow-cooked meat sauce that typically includes ground beef, tomatoes, onions, and garlic.",
        category: "Category: Pasta",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/carbonara.jpeg",
        dish: "Dish: Pasta Carbonara",
        description: "Description: A classic Italian dish featuring pasta served with a creamy sauce made from eggs, cheese, pancetta, and black pepper.",
        category: "Category: Pasta",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/pates_vege.jpeg",
        dish: "Dish: Vegetarian Pasta",
        description: "Description: Vegetarian pasta dish with a medley of fresh vegetables, herbs, and possibly a flavorful tomato or cream sauce.",
        category: "Category: Pasta",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/filet_pur.jpeg",
        dish: "Dish: Filet Pur 250G",
        description: "Description: A tender and juicy 250g beef tenderloin steak, often prepared to your preferred level of doneness.",
        category: "Category: Meat",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/Escal.jpg",
        dish: "Dish: Milanese Cutlet",
        description: "Description: A Milanese-style dish featuring breaded and pan-fried veal or chicken cutlets, served with a wedge of lemon.",
        category: "Category: Meat",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/entrecote.jpeg",
        dish: "Dish: Ribeye Steak 350G",
        description: "Description: A succulent 350g ribeye steak, known for its rich flavor and generous marbling.",
        category: "Category: Meat",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/Broch.jpg",
        dish: "Dish: Lamb Skewers",
        description: "Description: Skewers of marinated and grilled lamb, offering a delightful combination of flavors and tenderness.",
        category: "Category: Meat",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/moules_mariniere.jpeg",
        dish: "Dish: Mussels Mariniere",
        description: "Description: Fresh mussels cooked in a white wine, garlic, and herb broth, creating a savory and aromatic seafood dish.",
        category: "Category: Fish",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/sole_meuniere.webp",
        dish: "Dish: Sole Meuniere",
        description: "Description: A classic French dish featuring sole fish dredged in flour and pan-fried in a buttery sauce with lemon and parsley.",
        category: "Category: Fish",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/dos_de_cabillaud.jpeg",
        dish: "Dish: Cod Fillet",
        description: "Description: Grilled or baked cod fillet, known for its mild flavor and versatility, often served with complementary sauces or seasonings.",
        category: "Category: Fish",
        picture2: "assets/logo-panier.jpeg",
    },


];

function addToCart(event) {
    const index = event.currentTarget.getAttribute('data-index');
    const selectedItem = collection[index];


    updateCartDisplay();
}

let section1 = document.querySelector('.section1');

let section2 = document.querySelector('.section2');

function createCard(parent, elementType, ClassName, textContent, src, alt, dataIndex) {

    let element = document.createElement(elementType);

    if (ClassName) {
        element.classList.add(ClassName);
    }
    if (textContent) {
        element.textContent = textContent;
    }
    if (src) {
        element.setAttribute('src', src);
    }
    if (alt) {
        element.setAttribute('alt', alt);
    }
    if (dataIndex !== undefined) {
        element.setAttribute('data-index', dataIndex);
        element.addEventListener('click', addToCart);
    }
    parent.appendChild(element);

}

collection.forEach(function (objet, index) {

    let section = document.createElement('section');

    section.classList.add('card');

    createCard(section, 'img', 'card__img', null, objet.picture, 'dish picture');

    createCard(section, 'div', 'card__dish', objet.dish);

    createCard(section, 'div', 'card__description', objet.description);

    createCard(section, 'div', 'card__category', objet.category);

    createCard(section, 'img', 'card__cart-icon', null, objet.picture2, 'Cart Icon');

    if (index % 2 === 0) {
        section1.appendChild(section);
    }
    else {
        section2.appendChild(section);
    }
});