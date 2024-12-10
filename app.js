const menu = [
    { id: 1, title: "Bruschetta", category: "starters", price: "$7", description: "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and mozzarella",img: "./assets/bruschetta.jpg" },
    { id: 2, title: "Soup of the day", category: "starters", price: "$5", description: "Freshly made soup with seasonal ingredients",img: "./assets/soup.jpg" },
    { id: 3, title: "Chicken Parmesan", category: "mains", price: "$12", description: "Crispy chicken topped with tomato sauce and mozzarella, served with spaghetti",img: "./assets/chicken.jpg" },
    { id: 4, title: "Steak Frites", category: "mains", price: "$18", description: "Grilled steak served with french fries and salad" , img: "./assets/grilled.jpg"},
    { id: 5, title: "Chocolate Lava Cake", category: "desserts", price: "$8", description: "Warm chocolate cake with a gooey molten chocolate center, served with vanilla ice cream" , img: "./assets/lava cake.jpg"},
    { id: 6, title: "Apple Pie", category: "desserts", price: "$6", description: "Classic apple pie with a flaky crust, served with whipped cream", img: "./assets/pie.jpg"},
    { id: 7, title: "Vegan Burger", category: "mains", price: "$10", description: "Plant-based burger served with fries", img: "./assets/burger.jpg" },
    { id: 8, title: "Caesar Salad", category: "starters", price: "$6", description: "Fresh romaine lettuce with Caesar dressing, parmesan, and croutons", img: "./assets/salad.jpg" },
    { id: 9, title: "Spaghetti Carbonara", category: "mains", price: "$14", description: "Classic carbonara with pancetta, egg, hard cheese, and pepper", img: "./assets/spagatti.jpg" },
    { id: 10, title: "Tiramisu", category: "desserts", price: "$7", description: "Italian dessert made of savoiardi dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese", img: "./assets/tiramisu.jpg" },
    { id: 11, title: "Iced Coffee", category: "beverages", price: "$4", description: "Chilled coffee served with ice and cream", img: "./assets/iced coffee.jpg" },
    { id: 12, title: "Mango Lassi", category: "beverages", price: "$5", description: "Refreshing Indian drink made with mango and yogurt", img: "./assets/mango.jpg" },
    { id: 13, title: "Green Tea", category: "beverages", price: "$3", description: "Traditional green tea with antioxidants", img: "./assets/green tea.jpg" },
    { id: 14, title: "Caprese Salad", category: "starters", price: "$9", description: "Fresh tomatoes, mozzarella, basil, and balsamic glaze", img: "./assets/caprese salad.jpg" },
    { id: 15, title: "Margherita Pizza", category: "mains", price: "$16", description: "Classic pizza with tomato sauce, mozzarella, and fresh basil", img: "./assets/pizza.jpg" },
    { id: 16, title: "Tofu Stir-Fry", category: "mains", price: "$13", description: "Tofu with mixed vegetables stir-fried in a savory sauce", img: "./assets/tofu.jpg" },
    { id: 17, title: "Cheesecake", category: "desserts", price: "$9", description: "Creamy cheesecake with a graham cracker crust, topped with berries", img: "./assets/cheezecake.jpg" },
    { id: 18, title: "Mint Lemonade", category: "beverages", price: "$4", description: "Refreshing lemonade with a hint of mint", img: "./assets/mint.jpeg" },
    { id: 19, title: "Mushroom Risotto", category: "mains", price: "$15", description: "Creamy risotto with mushrooms, garlic, and parmesan cheese", img: "./assets/mushroom.jpg" },
    { id: 20, title: "Fruit Platter", category: "desserts", price: "$10", description: "Assorted fresh fruits served with honey yogurt dip", img: "./assets/fruit platter.jpg" },
    { id: 21, title: "Espresso", category: "beverages", price: "$3", description: "Strong, black coffee made by forcing steam through finely-ground coffee beans", img: "./assets/espresso1.jpg" }
  ];
  

for(i of menu){
    let card=document.createElement("div");
    card.classList.add("card","hide",i.category);

    let img=document.createElement("img");
    img.classList.add("card-img-top");
    img.setAttribute("src",i.img);
    card.appendChild(img);

    let body=document.createElement("div");
    body.classList.add("card-body");

    let h5=document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerText=i.title.toUpperCase();
    body.appendChild(h5);

    let h6=document.createElement("h6");
    h6.classList.add("card-subtitle","mb-2","text-muted");
    h6.innerText=i.price;
    body.appendChild(h6);

    let p=document.createElement("p");
    p.classList.add("card-text");
    p.innerText=i.description;
    body.appendChild(p);

    let p1=document.createElement("p");
    p1.classList.add("card-text");

    let small=document.createElement("small");
    small.classList.add("text-muted");
    small.innerText="Category: " + i.category;
    p1.appendChild(small);
    body.appendChild(p1);

    card.appendChild(body);
    document.querySelector(".menu").appendChild(card);

}
window.onload = () => {
  filterProduct("all");
};

  function filterProduct(value){
    let buttons=document.querySelectorAll(".nav-link");
    buttons.forEach((button) => {
      if(value.toUpperCase() == button.innerText.toUpperCase()){
        button.classList.add("active");
      }
      else{
        button.classList.remove("active");
      }
    });

    let cards = document.querySelectorAll(".card");
    //loop through all cards
    cards.forEach((card) => {
      //display all cards on 'all' button click
      if (value == "all") {
        card.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (card.classList.contains(value)) {
          //display element based on category
          card.classList.remove("hide");
        } else {
          //hide other elements
          card.classList.add("hide");
        }
      }
    });
  }

  document.getElementById("search").addEventListener("click", (e) => {
    //initializations
    e.preventDefault();
    let searchInput = document.getElementById("search-input").value;
    let titles = document.querySelectorAll(".card-title");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    titles.forEach((title, index) => {
      //check if text includes the search value
      if (title.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
    let buttons=document.querySelectorAll(".nav-link");
    buttons.forEach((button) => {
      
        button.classList.remove("active");
      
    });
    
    document.querySelector("#search-input").value="";    
  });
  
  
  
  
  
  