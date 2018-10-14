/************** Document load ************/
function openModal(o){var l={body:"",title:"",footer:"",size:"medium",setForShow:function(){}
/* Not normally passed - set here for easy access or if multiple modals are needed */,modalBodyObj:$(".modal-body"),modalTitleObj:$(".modal-title"),modalFooterObj:$(".modal-footer"),modalObj:$(".modal")};for(var e in o)null!=o[e]&&(l[e]=o[e]);
/* resize modal if needed */var a=l.modalObj.find(".modal-dialog");$(a).removeClass("modal-lg").removeClass("modal-sm"),"small"==l.size&&$(a).addClass("modal-sm"),"large"==l.size&&$(a).addClass("modal-lg")
/* set content */,$(l.modalTitleObj).html(l.title),$(l.modalBodyObj).html(l.body),$(l.modalFooterObj).html(l.footer),
/* hide/show title and footer as needed */
""==l.title?$(l.modalTitleObj).hide():$(l.modalTitleObj).show(),""==l.footer?$(l.modalFooterObj).hide():$(l.modalFooterObj).show(),l.modalObj.modal("show")}
/*************** MODAL *******************/
var modalInitObject;setTimeout(function(){$('.breadcrumb svg[role="img"], .presentationRole').attr("role","none")},100),$(".toggle-warnings-btn").click(function(){var l=$(this);$(".alert-warning").toggle("slow",function(){
// if there are alert warnings ... add a new alert off screen
var o=$(".alert-warning:visible").length;0<o?0===$(".sr-alert-count").length&&$("<div role='alert' class='sr-only sr-alert-count'>There are "+o+" accessibility errors.</div>").insertAfter(l):$(".sr-alert-count").remove()}),$(".alert-info").toggle("slow")}),$(".modal").on("show.bs.modal",function(o){
//modalInitObject=$(e.relatedTarget);
modalInitObject=o.relatedTarget}),$(".modal").on("shown.bs.modal",function(o){$(".modal-header .close").focus()}),$(".modal").on("hidden.bs.modal",function(o){""!==modalInitObject&&($(modalInitObject).focus(),modalInitObject="")});