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

$("#defaultOpen").click(function(){
    $("#defaultOpen").css({
        'border-bottom-color': '#005999',
        'border-bottom-width': '3.5px',
        'border-bottom-style': 'solid',
    });
    $("#secondOpen").css({
        'border-bottom-color': '#ffffff',
    });
});

$("#secondOpen").click(function(){
    $("#secondOpen").css({
        'border-bottom-color': '#005999',
        'border-bottom-width': '3.5px',
        'border-bottom-style': 'solid',
    });
    $("#defaultOpen").css({
        'border-bottom-color': '#ffffff',
    });
});

$(function(){
    let requiredCheckboxes = $('.type_electricity');
    requiredCheckboxes.change(function(){
        if(requiredCheckboxes.is(':checked')) {
        } else {
            $('#ac').prop('checked', true);
            $('#dc').prop('checked', true);
        }
    });
});