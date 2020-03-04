//$(".navbar-nav a").attr('tabindex',"-1")
//$(".navbar-nav a").eq(0).attr("tabindex","0")

$('.navbar-nav').each(function(){
    $(this).find('a').attr('tabindex',"-1");
    $(this).find('a').eq(0).attr("tabindex","0")
})

$(".navbar-nav a").keydown(function(event) {
    console.log("*****************************")
    var item = $(event.target);
    var parent = item.parents('.navbar-nav:first');

    var index = parent.find('a').index(item)
    console.log("Current index:",index)

    //var index = $(event.target).index()
    //console.log(parent.text())
    event.stopImmediatePropagation();
    
   
    // right/down arrow
    if(event.keyCode==39 || event.keyCode==40){
        var next =  parent.find('a').eq(index+1)
        if(index+1>=parent.find('a').length) next = parent.find('a').eq(0)
        
        next.attr('tabindex',0)
        item.attr('tabindex',-1)
        next.focus()
    }
     // left/up arrow
     if(event.keyCode==37 || event.keyCode==38){
        var next =  parent.find('a').eq(index-1)
        next.attr('tabindex',0)
        item.attr('tabindex',-1)
       
        next.focus()
    }
    //home
    if(event.keyCode==36){
        var next =  parent.find('a').eq(0)
        next.attr('tabindex',0)
        item.attr('tabindex',-1)
       
        next.focus()
    }
    //end
    if(event.keyCode==35){
        var last = parent.find('a').length - 1
        var next =  parent.find('a').eq(last)
        next.attr('tabindex',0)
        item.attr('tabindex',-1)
        next.focus()
    }

});