window.addEventListener('DOMContentLoaded',function(e){
    let orderButton = document.querySelectorAll("button[data-order]");

    orderButton.forEach(function(button){

        button.addEventListener('click',(e)=>{
            const button = e.currentTarget;
            const container = button.parentNode;
            console.log(container);
        
                  const order = {
                    id: (id = button.getAttribute("data-order")),
                    title: container.querySelector(".title").innerText,
                    price: container.querySelector(".price").innerText,
                    dscp: container.querySelector(".dscp").innerText
                  };

                  localStorage.setItem("order", JSON.stringify(order));

                  const url = window.location.href.replace("pies-Shop.html", "order.html");
                   window.location.href = url;
     
         
        });
    });

});

window.addEventListener("DOMContentLoaded",(e)=> {

    const order = localStorage.getItem("order");
    const pieOrder = JSON.parse(order);

    if (order) {
      const FoodCard = document.querySelector(".emptyCard");
      const title = FoodCard.querySelector(".title");
      const price =FoodCard.querySelector(".price");
      const dscp = FoodCard.querySelector(".dscp");
      // const orderInput = document.querySelector("#pie-order");

      title.innerText = pieOrder.title;
      price.innerText = pieOrder.price;
      dscp.innerText = pieOrder.dscp;

      // orderInput.value = order;

      const img = FoodCard.querySelector("img");
      img.setAttribute("src", `img/${pieOrder.id}.png`);
      img.setAttribute("alt", pieOrder.title);
    }
});

// orderButton.forEach(function(button) {
        
    //     button.addEventListener("click", function(e) {
    //       const button = e.currentTarget;
    //       const container = button.parentNode;

    //       const order = {
    //         id: (id = button.getAttribute("data-order")),
    //         title: container.querySelector(".title").innerText,
    //         price: container.querySelector(".price").innerText,
    //         desc: container.querySelector(".desc").innerText
    //       };

    //       localStorage.setItem("order", JSON.stringify(order));

    //       const url = window.location.href.replace("pies-Shop.html", "order.html");
    //       window.location.href = url;
    //     });