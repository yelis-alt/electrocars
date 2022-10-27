function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
}

document.getElementById("defaultOpen").click();

var tabs = document.getElementsByClassName('tablink');

Array.prototype.forEach.call(tabs, function(tab) {
  tab.addEventListener('click', setActiveClass);
});

function setActiveClass(evt) {
  Array.prototype.forEach.call(tabs, function(tab) {
    tab.classList.remove('active');
  });
  
  evt.currentTarget.classList.add('active');
}