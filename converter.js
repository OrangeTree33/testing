 function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show2");
  }
  
  window.onclick = function(event1) {    //isjungia dropdown kai paspaudi kitur
    if (!event1.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show2')) {
          openDropdown.classList.remove('show2');
        }
      }
    }
  }
  
  function svoris(){
  
  Element.id = "svoris1"
  document.getElementById("ilgis1").innerHTML = Element.id
  }
  function turis(){
    Element.id = "turis1"
    document.getElementById("svoris1").innerHTML = Element.id
  }
  
  //use onkeyup for calculation start