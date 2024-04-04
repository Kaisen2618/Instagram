document.addEventListener("DOMContentLoaded", function() {
    var imagesData = [
        {src: "assets/Scooby Doo.jpg", views: 700},
        {src: "assets/garfield.jpg", views: 700},
        {src: "assets/Bart.jpg", views: 700},
        {src: "assets/Cavaleiros do Zodiaco.jpg", views: 700},
        {src: "assets/Cartoon Network(Desenhos).jpg", views: 700},
        {src: "assets/Pink e Cerebro.png", views: 700},
        {src: "assets/Looney Tunes.png", views: 700},
        {src: "assets/Dragon Ball Z.png", views: 700}
       
    ];

    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("myModalImage");

    imagesData.forEach(function (data,index) {
        var listItem = document.createElement("li");
        listItem.className = "photo";

        var image = document.createElement("img");
        image.src = data.src;
        image.alt ="";
        image.dataset.index = index;

        var preview=document.createElement("span");
        preview.className = "preview";
        preview.textContent = data.views;

        listItem.appendChild(image);
        listItem.appendChild(preview);

        dynamicList.appendChild(listItem);

        preview.addEventListener("click", function(){
          openModal(index);
        })
    });
    modal.addEventListener("click", function(event){
        if(event.target.className === "modal" || event.target.className === "close"){
            closeModal()
            openH1()
        }
    });
    function openModal(index){
        modalImage.src = imagesData[index].src;
        modal.style.display = "block";
        openH1.views = views;
    }
    function openH1(){
        openH1.views = views;
        modal.style.display = "block";
    }
    function closeModal(){
        modal.style.display = "none";
    }

})