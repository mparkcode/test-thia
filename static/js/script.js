$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
    $('select').formSelect();
    $('.dropdown-trigger').dropdown();
    $('.tabs').tabs();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    
    $('#purchase').click(function(){
        $('#purchases').css("visibility", "visible");
    })

    $('#plus-inventory, #mobilepanel-plus-inventory').click(function(){
        $('#mobilepanel-plus-inventory').css("visibility", "visible");
    })

    $('body').click(function(){
        $('#mobilepanel-plus-inventory').css("visibility", "hidden");
    })


  });