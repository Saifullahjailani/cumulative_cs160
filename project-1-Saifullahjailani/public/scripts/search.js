function searchClicked(){
   var search_bar = document.getElementById("search-bar");
   localStorage.setItem("search",search_bar.value);
   window.document.location = "./../search-screen.html";

}




