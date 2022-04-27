images=["https://images.unsplash.com/photo-1643779374792-ef7c60c75b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
         "https://images.unsplash.com/photo-1643779375079-0a2453c81cce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
         "https://images.unsplash.com/photo-1643716116926-3d6e90257b52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"]
         var slidshow_img=document.getElementById("sildeshow_img")
         let i=0;
         var x=setInterval(function(){
           if(i==images.length)
           {
             i=0;
           }
           slidshow_img.src=images[i];
           i=i+1;

         },2000)
movies=[{
        img_src:"https://static.digit.in/OTT/v2/images/tr:n-ott_home_crousel/what-women-want-221224.jpg",
        name:"What Women Want",
        type:"Horror",
        rating:"7.3"
        },
        {
          img_src:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
          name:"The Godfather",
          type:"Crime",
          rating:"9.2"
        },
        {
          img_src:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
          name:"The Dark Knight",
          type:"Thriller",
          rating:"9.0"
        },
        {
          img_src:"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
          name:"Fight Club ",
          type:"Action",
          rating:"8.8"
        },
        {
          img_src:"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY67_CR0,0,45,67_AL_.jpg",
          name:"The Lord of the Rings",
          type:"Mystery",
          rating:"8.8"
        },
        {
          img_src:"https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_UY67_CR0,0,45,67_AL_.jpg",
          name:"	Spider-Man",
          type:"Action",
          rating:"8.7"
        },
        {
          img_src:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
          name:"	The Matrix",
          type:"Action",
          rating:"8.7"
        },
        {
          img_src:"https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_UY67_CR0,0,45,67_AL_.jpg",
          name:"	Scream ",
          type:"Mystery",
          rating:"7.3"
        },
        {
          img_src:"https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
          name:"	Free Guy ",
          type:"Comedy",
          rating:"6.1"
        }]
        localStorage.setItem("movies",JSON.stringify(movies))
        var moviesdata = JSON.parse(localStorage.getItem("movies"));
  var cartArr=JSON.parse(localStorage.getItem("cartItem"))||[];
  displayData(moviesdata);


  function sortbyrating(){
    var selected=document.querySelector("#ratingsort").value;
    if(selected=="high"){
      moviesdata.sort(function(a,b){
        return Number(b.rating)-Number(a.rating);
      })
    };
    if(selected=="low"){
      moviesdata.sort(function(a,b){
        return Number(a.rating)-Number(b.rating);
      })
    };
    displayData(moviesdata);
  }
  function displayData(moviesdata){
  document.querySelector("#movies").innerHTML="";
  moviesdata.map(function (data) {
    var div = document.createElement("div");
    div.setAttribute("id","dis")

    var div1 = document.createElement("div");
    div1.setAttribute("id","dis1")
  
    var image = document.createElement("img");
    image.setAttribute("src", data.img_src);
    image.setAttribute("id", "imgtag");
    
    div1.append(image)
    var name = document.createElement("p");
    name.textContent = data.name;

    var div2 = document.createElement("div");
    div2.setAttribute("id", "info");

    var p1 = document.createElement("p");
    p1.textContent = data.type;

    var p2 = document.createElement("p");
    p2.textContent = data.rating;

    div2.append(name,p1, p2);
   
    div.append(div1,div2);
    document.querySelector("#movies").append(div);
  });
}