$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
    $('select').formSelect();
    $('.dropdown-trigger').dropdown();
    $('.tabs').tabs();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    
    
    $('.navpanellayer').mouseenter(function(){
        $(this).css("width","0");
        $('.navpanel').css("width","200px","visibility","visible");
    })

    $('.navpanel').mouseleave(function(){
        $(this).css("width","0","visibility","hidden");
        $('.navpanellayer').css("width","10px");
    })

    $('#plus-inventory').click(function(){
        $('#mobilepanel-plus-inventory').toggle('slow');
        $('#mobilepanel-caret').hide();
        $('#mobilepanel-search-inventory').hide();
    })

    $('#search-inventory').click(function(){
        $('#mobilepanel-search-inventory').toggle('slow');
        $('#mobilepanel-caret').hide();
        $('#mobilepanel-plus-inventory').hide();
    })

    $('.caret-up').click(function(){
        $('#mobilepanel-caret').toggle('slow');
        $('#mobilepanel-plus-inventory').hide();
        $('#mobilepanel-search-inventory').hide();
    })

    $('.contentrow, .tabrow, nav, #search-inventory, .caret-up ,#mobilepanel-plus-inventory').click(function(){
        $('#mobilepanel-plus-inventory').css("display", "none");
    })

    $('.contentrow, .tabrow, nav, #plus-inventory, .caret-up,#mobilepanel-plus-inventory').click(function(){
        $('#mobilepanel-search-inventory').css("display", "none");
    })

    $('.contentrow, .tabrow, nav, #plus-inventory, #mobilepanel-search-inventory ,#mobilepanel-plus-inventory').click(function(){
        $('#mobilepanel-caret').css("display", "none");
    })

    var new_items = [[],[],[],[]]

    $('#add_purchase_item').click(function(){
        new_items[0] = $(this).parent().find("#puo_item_name").val();
        new_items[1] = $(this).parent().find("#puo_item_qty").val();
        $('#new_purchase_items').append(`<li>${new_items[0]}    ${new_items[1]}</li>`);
    })

  });