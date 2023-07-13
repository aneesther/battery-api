// let chargingStatus = document.getElementById("charging-status");

// navigator.getBattery().then(function (battery) {
//     console.log ("battery",battery);
//     updateChargingStatus(battery);
//     battery.addEventListener("chargingchange",function () {
//         updateChargingStatus(battery);
//     });
// });

// function updateChargingStatus(battery) {
//     if (battery.level < 0.7) {
//         alert("Please Plug in your device before it runs out of battery");
//     }
//     if (battery.charging) {
//         chargingStatus.innerHTML = 
//         "Battery plugged in and charging:" +
//         battery.level * 100 +
//         "%" +
//         `<progress value=${parseInt(battery.level*100)} min='0' max='100'/>`;
//     }else {
//         chargingStatus.innerHTML = "Battery not charging"
//     }
// }




let productContainer = document.getElementById("product-container");

async function fetchProducts() {
    // call the remote server/url
    let response = await fetch("https://fakestoreapi.com/products");
    // parse the response to relevant format .json() for object and .blob() for files
    let parsedResponse = await response.json();

    // compose html component dynamically by mapping/looping through the parsed respons
    let productComponent = parsedResponse.map ((product) => {
        return `<div class="product-item">
        <img class="image" src="${product.image}"/>
        <div class="product-title">${product.title}</div>
        <div>Price: ${product.price}</div>
        <div id="btn"><a href="Add-cart" <button>Add to cart</button>></a></div>
        </div>`;
    });

    // join the mapped products together to eliminate comma
    productContainer.innerHTML = productComponent.join("");
}

fetchProducts();