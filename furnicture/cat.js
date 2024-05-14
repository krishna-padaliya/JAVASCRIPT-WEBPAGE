
    var womendata = [{
        id	: 1,
        title :	"Microsuede 56' Armless Loveseat",
        price :	367,
        image :	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ChDb-uxu5NR2-QmbdQKRcy1Op4-z_aFKAZ6-zrNtnVZQjQ2f14qglnautaDE5pQU9Dc&usqp=CAU"
    },{
        id	: 2,
        title :	"Microsuede 56' Armless Loveseat",
        price :	67,
        image :	"https://rivieramaison.com/media/catalog/product/cache/5cc1e4ccbf3fad5385b1fd3420d06322/4/0/4063003.jpg"
    },
    {
        id	: 3,
        title :	"Microsuede 56' Armless Loveseat",
        price :	257,
        image :	"https://img.freepik.com/premium-photo/chair-white-background_731930-144887.jpg"
    },
    {
        id	: 4,
        title :	"Microsuede 56' Armless Loveseat",
        price :	150,
        image :	"https://img.freepik.com/premium-photo/modern-chair-with-shadow-isolate-background_812426-9280.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699660800&semt=ais"
    },
    {
        id	: 5,
        title :	"Microsuede 56' Armless Loveseat",
        price :	850,
        image :	"https://www.shutterstock.com/image-photo/chair-made-wood-white-plastic-600nw-1912782721.jpg"
    },
    {
        id	: 6,
        title :	"Microsuede 56' Armless Loveseat",
        price :	205,
        image :	"https://st3.depositphotos.com/1009948/12964/i/450/depositphotos_129647560-stock-photo-armchair-isolated-on-white-background.jpg"
    },
    {
        id	: 1,
        title :	"Microsuede 56' Armless Loveseat",
        price :	367,
        image :	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ChDb-uxu5NR2-QmbdQKRcy1Op4-z_aFKAZ6-zrNtnVZQjQ2f14qglnautaDE5pQU9Dc&usqp=CAU"
    },{
        id	: 2,
        title :	"Microsuede 56' Armless Loveseat",
        price :	67,
        image :	"https://rivieramaison.com/media/catalog/product/cache/5cc1e4ccbf3fad5385b1fd3420d06322/4/0/4063003.jpg"
    },
    {
        id	: 3,
        title :	"Microsuede 56' Armless Loveseat",
        price :	257,
        image :	"https://img.freepik.com/premium-photo/chair-white-background_731930-144887.jpg"
    },
    {
        id	: 4,
        title :	"Microsuede 56' Armless Loveseat",
        price :	150,
        image :	"https://img.freepik.com/premium-photo/modern-chair-with-shadow-isolate-background_812426-9280.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699660800&semt=ais"
    },
    {
        id	: 5,
        title :	"Microsuede 56' Armless Loveseat",
        price :	850,
        image :	"https://www.shutterstock.com/image-photo/chair-made-wood-white-plastic-600nw-1912782721.jpg"
    },
    {
        id	: 6,
        title :	"Microsuede 56' Armless Loveseat",
        price :	205,
        image :	"https://st3.depositphotos.com/1009948/12964/i/450/depositphotos_129647560-stock-photo-armchair-isolated-on-white-background.jpg"
    }   
    ]

        var cartbtn=document.createElement("button")
        cartbtn.innerText="CART";
        // document.querySelector("#cart").append(cartbtn)
        // cartbtn.classList.add("cart-btn")
        cartbtn.addEventListener("click",function(){
          window.open("cart.html")
         })

    function displayData(data){
        document.querySelector("#main").innerHTML = ""
        data.map((el,i)=>{
            var div = document.createElement("div")

            var image = document.createElement("img")
            image.setAttribute("src",el.image)

            var name = document.createElement("p")
            name.innerHTML = el.title

            var price = document.createElement("h4")
            price.innerHTML = "$"+el.price

            var button=document.createElement("button");
            button.innerHTML="Add to Cart"
            button.addEventListener("click",function(){
                  addtocart(i)
            })

            div.append(image,name,price,button);
            document.querySelector("#main").appendChild(div)
        })
    }
    displayData(womendata);

    let sortselect  = document.querySelector("#sortselect");
    sortselect.addEventListener("change",()=>{
        let selectvalue = sortselect.value;
        let sortedData = [];
        if(selectvalue == "Low"){
            sortedData = womendata.slice().sort((a,b)=>a.price - b.price)
        }else if(selectvalue == "Hight"){
            sortedData =  womendata.slice().sort((a,b)=>b.price - a.price)
        }
        else if(selectvalue == "az"){
            sortedData =womendata.slice().sort((a,b)=>a.title.localeCompare(b.title))
        }
        else if(selectvalue == "za"){
            sortedData = womendata.slice().sort((a,b)=>b.title.localeCompare(a.title))
        }
        displayData(sortedData);
    })

    function addtocart(index){
      var product=womendata.filter(function(el,i){
           return i==index;
      })
      var products=JSON.parse(localStorage.getItem("cart")) || []
      products.push(product[0])
      alert("Added to Cart!!")
      localStorage.setItem("cart",JSON.stringify(products))
    }
