function performSearch() {
  var searchValue, searchTerm, cardDiv, h1;
  searchValue = document.getElementById('searchIt');
  searchTerm = searchValue.value.toUpperCase();
  cardDiv = document.querySelectorAll('#slack-card');

  for (let i = 0; i < cardDiv.length; i++) {
    h1 = cardDiv[i].getElementsByTagName("h1")[0];
    para = cardDiv[i].getElementsByTagName("p")[0];
    if (h1.innerHTML.toUpperCase().indexOf(searchTerm) > -1) {
        cardDiv[i].style.display = "";
    } else
    if(para.innerHTML.toUpperCase().indexOf(searchTerm) > -1) {
        cardDiv[i].style.display = "";
    } else{
        cardDiv[i].style.display = "none";
    }
  }
}

var filter = document.getElementsByClassName('categories-tab');
for (var i = 0; i < filter.length; i++) {
  filter[i].addEventListener('click', function (){
  var button = this.getAttribute('data-filter');
  document.getElementById('categoryName').innerHTML = button;
  var cardDiv = document.querySelectorAll('#slack-card');
    for (var i = 0; i < cardDiv.length; i++) {
      if (button == "all") {
        cardDiv[i].style.display = "";
      }else {
        var div = cardDiv[i].getElementsByTagName("div")[0];
        var hasClass = (" " + div.className + " ").indexOf(button) > -1;
          if (hasClass == false) {
            cardDiv[i].style.display = "none";
          } else {
            cardDiv[i].style.display = "";
          }
        }
    }
});
}