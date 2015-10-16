$(document).ready(function(){
    $("#sendotchet").click(function(){
        $("#otchet").submit();
    });
    $("#otchet").submit(function() {
        var form = $(this);
        $('#report_url_page').val(document.location.href);
        var data  = form.serialize();
        $.ajax({
            type: "POST",
            url: "/wp-content/themes/medlife/feedb.php",

            data:data,
            success: function(msg){
                alert( msg );
                $('#otchet').trigger('reset');
            }
        });
        return false;
    });
$('#know_price_but').click(function(){
	var know = "Я хочу уточнить цену на: "+$(this).parent().parent().parent().find('h1').text();
	$('#ajax').find('textarea').val(know).parent().parent().show('slow');
	$(this).hide();
});

$('#ajax').submit(function(){
	var form = $(this);
	var data = form.serialize();
	$.ajax({
   type: "POST",
   url: $('#ajax').attr('action')+'/feedb.php',
   data: data,
   success: function(msg){
    alert( msg);
    $('#ajax').trigger( 'reset' );
    $('.form_deed').fadeOut('slow');
	$('.form_deed').removeClass('showed');

   }
 });
	return false;
});

$('.foto_slider>img').attr('src',$('#foto_0>img').attr('src'));
$('.foto_item>img').click(function(){
	$('.foto_slider>img').attr('src',$(this).attr('src'));
});

/*$("a[rel=group]").fancybox({
        'transitionIn' : 'none',
        'transitionOut' : 'none',
        'titlePosition' : 'over',
        'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? '   ' + title : '') + '</span>';
        }
    });*/


$('.single_item_foto>img').click(function(){
	
  var count =0;
  $(this).parent().parent().find('div').find('img').each(function(){
		$(this).attr('id',count);
    $('.controll').append('<span rel="'+count+'" class="dotes"></span>');
    count++;
  });
	$('#gal_back').show();
  $('.galery_modal>img').attr('src',$(this).attr('src')).attr('rel',$(this).attr('id'));

  $('.dotes[rel='+$(this).attr("id")+']').addClass('active_dotes');

  $('.galery_modal').show('slow');

});



$( ".controll" ).on( "click",'.dotes',function() {
$('.galery_modal>img').attr('src',$('#'+ $(this).attr("rel")+'').attr('src')).attr('rel',$('#'+ $(this).attr("rel")+'').attr('id'));
$('.controll>span').removeClass('active_dotes');
$(this).addClass('active_dotes');
});

$('#next').click(function(){
  var id = $(this).parent().prev().prev().attr('rel');
  var query = $('#'+id+'').parent().next().find('img');
  
  $('.galery_modal>img').attr('src',query.attr('src')).attr('rel',query.attr('id'));
   $('.active_dotes').removeClass('active_dotes');
  $('.dotes[rel='+query.attr("id")+']').addClass('active_dotes');
});


$('#prev').click(function(){
  var id = $(this).parent().prev().prev().attr('rel');
  var query = $('#'+id+'').parent().prev().find('img');
  
  $('.galery_modal>img').attr('src',query.attr('src')).attr('rel',query.attr('id'));
  $('.active_dotes').removeClass('active_dotes');
  $('.dotes[rel='+query.attr("id")+']').addClass('active_dotes');
});

$('.galery_modal>span').click(function(){

  $(this).parent().hide();
  $('#gal_back').hide();
  $('.dotes').remove();
});

});