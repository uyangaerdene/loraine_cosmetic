         container = document.getElementById("more");
const products = [
    {
        id: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        title: ["JEJU CHERRY BLOSSOM CREAM","LANEIGE WHITE DEW","PROPOLIS SYNERGY TONER","FOREST RELIEF","ROSEWATER MOISTURE CREAM","HYDRO-AID MOISTURIZING CREAM",
        "LANEIGE INTENSIVE CREAM","LAGOM FOAM CLEANSER","TEATREEMENT CLEANSING FOAM","HERB CLEANSING OIL","HERB ESSNTLS CREAM","LANEIGE ESSENCE",
        "INTENSIVE HYDRATING CREAM","JEJU BLOSSOM SKIN","JEJU BLOSSOM MIST","INNISFREE SETTING SPRAY","SOOTHING CLEANSING GEL","BLUEBERRY GENTLE CLEANSER",
        "DREAM-BODY CREAM","ENZYME CLEANSING FOAM","TIGER RE.PAIR SERUM","LANEIGE SLEEPING MASK","RICE TONER"],
        description: ["Чийгшүүлэх тос","Чийгшүүлэх тос","Чийгшүүлэх тoнер","Серум", "Чийгшүүлэх тос","Чийгшүүлэх тос","Чийгшүүлэх тос","Цэвэрлэгч хөөс","Цэвэрлэгч хөөс",
    "Тосон цэвэрлэгч","Эссенз","Чийгшүүлэх тос","Чийгшүүлэх тос","Чийгшүүлэх мист","Чийгшүүлэх мист","Цэвэрлэгч гел","Цэвэрлэгч","Чийгшүүлэх тос","Цэвэрлэгч хөөс",
"Серум","Унтлагын маск","Чийгшүүлэх тонер"],
        price: [54000,36000,45000,105000,45000,75000,42000,97000,25000,63000,48000,96000,35000,50800,29000,12000,45000,45000,55000,75000,45000,45000],
        img: ["./img/pro19.jpg","./img/pro16.jpg","./img/pro6.jpg","./img/pro4.jpg","./img/pro8.jpg","./img/pro9.jpg","./img/pro10.jpg","./img/pro11.jpg",
        "./img/pro12.jpg","./img/pro14.jpg","./img/pro15.jpg","./img/pro16.jpg","./img/pro17.jpg","./img/pro18.jpg","./img/pro20.jpg","./img/pro21.jpg",
        "./img/pro22.jpg","./img/skincare2.png","./img/skincare3.png","./img/skincare4.png","./img/pro1.jpg","./img/pro2.jpg","./img/pro3.jpg","./img/pro5.jpg"],
    },]
    
            products[0].id.forEach((id, index) => {
                const productDiv = document.createElement("div");
    
                const titleH2 = document.createElement("h3");
                titleH2.innerText = products[0].title[index];

                const description = document.createElement("p");
                description.innerText = products[0].description[index];
    
                const priceP = document.createElement("h4");
                priceP.innerText = "Үнэ:" + products[0].price[index]+"₮";
    
                const img = document.createElement("img");
                img.src = products[0].img[index];
                img.alt = products[0].title[index];
    
                productDiv.appendChild(titleH2);
                productDiv.appendChild(description);
                productDiv.appendChild(priceP);
                productDiv.appendChild(img);
    
                container.appendChild(productDiv);
            });