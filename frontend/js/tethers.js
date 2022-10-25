$('.form').on('input', function()
    {var start = document.getElementById('firstDate').value;
    document.getElementById('secondDate').min = start;}
    );