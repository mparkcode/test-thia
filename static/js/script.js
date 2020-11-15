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

    $('#plus-inventory').click(function(){
        $('#mobilepanel-plus-inventory').toggle();
    })

    $('.contentrow, .tabrow, nav, #search-inventory, #caret-inventory').click(function(){
        $('#mobilepanel-plus-inventory').css("display", "none");
    })

  });