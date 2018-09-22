/************** Document load ************/

$(".toggle-warnings-btn").click(function(){
  var btn = $(this);
  $(".alert-warning").toggle("slow",function(){
    // if there are alert warnings ... add a new alert off screen
    var alerts= $('.alert-warning:visible').length
    if(alerts>0){
        if($('.sr-alert-count').length===0){
          $("<div role='alert' class='sr-only sr-alert-count'>There are "+alerts+" accessibility errors.</div>").insertAfter(btn)
        }
    }
    else{
      $('.sr-alert-count').remove();
    }
  })
  $(".alert-info").toggle("slow");
})
  ;


/*************** MODAL *******************/
var modalInitObject;
$('.modal').on('show.bs.modal',function(e){
	//modalInitObject=$(e.relatedTarget);
	modalInitObject=e.relatedTarget;
});
$('.modal').on('shown.bs.modal',function(e){
	$('.modal-header .close').focus();
})
$('.modal').on('hidden.bs.modal', function (e) {
	if(modalInitObject!==''){
		$(modalInitObject).focus();
		modalInitObject='';
	}
})


function openModal(options){
  var settings = {
        'body':'' 
        ,'title':'' 
        ,'footer':'' 
        ,'size':'medium' 
        ,'setForShow':function(){} 

        /* Not normally passed - set here for easy access or if multiple modals are needed */
        ,'modalBodyObj':$('.modal-body')
        ,'modalTitleObj':$('.modal-title')
        ,'modalFooterObj':$('.modal-footer')
        ,'modalObj':$('.modal')
    };

    for (var key in options) {if(options[key]!=undefined)settings[key]=options[key]} 
  
    /* resize modal if needed */
    var modalDoc=settings.modalObj.find('.modal-dialog');
    $(modalDoc).removeClass('modal-lg').removeClass('modal-sm');
    if(settings.size=='small'){$(modalDoc).addClass('modal-sm');}
    if(settings.size=='large'){$(modalDoc).addClass('modal-lg');}

    /* set content */
    $(settings.modalTitleObj).html(settings.title);
   	$(settings.modalBodyObj).html(settings.body);
   	$(settings.modalFooterObj).html(settings.footer);

   	/* hide/show title and footer as needed */
   	if(settings.title=='')$(settings.modalTitleObj).hide();
   	else $(settings.modalTitleObj).show();
   	if(settings.footer=='')$(settings.modalFooterObj).hide();
   	else $(settings.modalFooterObj).show();
    
     settings.modalObj.modal('show');
}
