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
        dish: "Pasta Bolognese",
        description: "A hearty pasta dish with a rich, slow-cooked meat sauce that typically includes ground beef, tomatoes, onions, and garlic.",
        category: "Category: Pasta",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/carbonara.jpeg",
        dish: "Pasta Carbonara",
        description: "A classic Italian dish featuring pasta served with a creamy sauce made from eggs, cheese, pancetta, and black pepper.",
        category: "Category: Pasta",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/pates_vege.jpeg",
        dish: "Vegetarian Pasta",
        description: "Vegetarian pasta dish with a medley of fresh vegetables, herbs, and possibly a flavorful tomato or cream sauce.",
        category: "Category: Pasta",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/filet_pur.jpeg",
        dish: "Filet Pur 250G",
        description: "A tender and juicy 250g beef tenderloin steak, often prepared to your preferred level of doneness.",
        category: "Category: Meat",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/Escal.jpg",
        dish: "Milanese Cutlet",
        description: "A Milanese-style dish featuring breaded and pan-fried veal or chicken cutlets, served with a wedge of lemon.",
        category: "Category: Meat",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/entrecote.jpeg",
        dish: "Ribeye Steak 350G",
        description: "A succulent 350g ribeye steak, known for its rich flavor and generous marbling.",
        category: "Category: Meat",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/Broch.jpg",
        dish: "Lamb Skewers",
        description: "Skewers of marinated and grilled lamb, offering a delightful combination of flavors and tenderness.",
        category: "Category: Meat",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/moules_mariniere.jpeg",
        dish: "Mussels Mariniere",
        description: "Fresh mussels cooked in a white wine, garlic, and herb broth, creating a savory and aromatic seafood dish.",
        category: "Category: Fish",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/sole_meuniere.webp",
        dish: "Sole Meuniere",
        description: "A classic French dish featuring sole fish dredged in flour and pan-fried in a buttery sauce with lemon and parsley.",
        category: "Category: Fish",
        picture2: "assets/logo-panier.jpeg",
    },
    {
        picture: "assets/dos_de_cabillaud.jpeg",
        dish: "Cod Fillet",
        description: "Grilled or baked cod fillet, known for its mild flavor and versatility, often served with complementary sauces or seasonings.",
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

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const circle = document.querySelector('.circle');

    circle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});
document.getElementById('tousbutton').addEventListener('click', resetFilter);

document.querySelector('#tousbutton').addEventListener('click', function () {
    resetFilter();
});

function filterProducts(category) {

    // Supprimer les éléments existants dans les sections
    section1.innerHTML = '';
    section2.innerHTML = '';

    // Filtrer les éléments de la collection en fonction de la catégorie
    const filteredItems = collection.filter(item => item.category.includes(category));

    // Afficher les éléments filtrés
    filteredItems.forEach((objet, index) => {
        let section = document.createElement('section');
        section.classList.add('card');

        createCard(section, 'img', 'card__img', null, objet.picture, 'dish picture');
        createCard(section, 'div', 'card__dish', objet.dish);
        createCard(section, 'div', 'card__description', objet.description);
        createCard(section, 'div', 'card__category', objet.category);
        createCard(section, 'img', 'card__cart-icon', null, objet.picture2, 'Cart Icon');

        if (index % 2 === 0) {
            section1.appendChild(section);
        } else {
            section2.appendChild(section);
        }
    });

}

function resetFilter() {
    section1.innerHTML = '';
    section2.innerHTML = '';

    collection.forEach((objet, index) => {
        let section = document.createElement('section');
        section.classList.add('card');

        createCard(section, 'img', 'card__img', null, objet.picture, 'dish picture');
        createCard(section, 'div', 'card__dish', objet.dish);
        createCard(section, 'div', 'card__description', objet.description);
        createCard(section, 'div', 'card__category', objet.category);
        createCard(section, 'img', 'card__cart-icon', null, objet.picture2, 'Cart Icon');

        if (index % 2 === 0) {
            section1.appendChild(section);
        } else {
            section2.appendChild(section);
        }
    });
}