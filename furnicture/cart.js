
  var products=JSON.parse(localStorage.getItem("cart")) || []
  
  if(localStorage.getItem("cart") == null){
    var div = document.createElement("div");

    var text = document.getElement("h1");
    text.innerText = "Empty!"

    var image = document.createElement("img");
    image.setAttribute("src","https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png")

    div.append(text,image)
    document.querySelector("#cart").appendChild(div)
  }
  else{
    displaycart()
    displaytotal()
  }

  function displaycart(){
    document.querySelector("#cart").innerHTML=""
    products.map((el,index)=>{
      var div = document.createElement("div")

      var image = document.createElement("img")
      image.setAttribute("src",el.image)
      image.setAttribute("id","cart-img")

      var name = document.createElement("h5")
      name.innerHTML = el.title

      var price = document.createElement("p")
      price.innerHTML = (el.price * (el.quantity || 1));
      price.setAttribute("id","price-"+index);

      var quantity = document.createElement('h6');
            quantity.innerText = (el.quantity || 1)
            quantity.setAttribute("id","quantity-"+index)

            var mul = document.createElement('h3');
            mul.innerText = (el.price )* (el.quantity)
            mul.setAttribute("id","mul-"+index)     

      var inc = document.createElement("button");
      inc.classList.add("plus")
          inc.innerText = "+"
          inc.addEventListener("click",function(){
            el.quantity = (el.quantity || 1) + 1;
            document.getElementById("quantity-"+index).innerText = el.quantity ;
            document.getElementById("price-"+index).innerText =el.price * el.quantity;
            document.getElementById("mul-"+index).innerText =el.price * el.quantity;
            updateCart();
            displaytotal(); 
          })
          var ince = document.createElement("button");
          ince.classList.add("plus")
          ince.innerText = "-"
          ince.addEventListener("click",function(){
            el.quantity = (el.quantity || 1) - 1;
            document.getElementById("quantity-"+index).innerText = el.quantity ;
            document.getElementById("price-"+index).innerText = el.price * el.quantity;
            updateCart();
            displaytotal(); 
          })
      var deletebtn = document.createElement("button")
      deletebtn.innerText = "REMOVE"
      deletebtn.setAttribute("id","del")
      deletebtn.addEventListener("click",function(){
        products.splice(index,1)
        localStorage.setItem("cart",JSON.stringify(products))
        displaycart()
        displaytotal()
      })

      div.append(image,name,price,quantity,inc,ince,deletebtn,mul);
      document.querySelector("#cart").appendChild(div)
    })
  }

  function displaytotal(){
    var total = products.reduce(function(acc,el){
      return acc + el.price * (el.quantity || 1)
    },0)
    var existingtotal = document.getElementById("grandtotal");
    if(existingtotal){
      if(total===0){
        existingtotal.remove();
      }
      else{
        existingtotal.innerText = "Grand Total = "+"Rs."+total
      }
  
    }
    else{ 
       var amt = document.createElement("h4")
    amt.innerText = "Grand Total = "+"$"+total
    amt.setAttribute("id","grandtotal")
    document.querySelector("#cart").append(amt) 
  }
  }
  function updateCart(){
    localStorage.setItem("cart",JSON.stringify(products));
   }


