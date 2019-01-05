var part1_ch = $('.content').height();
var win_height = $(window).height();
var win_width = $(window).width();
console.log((win_height ));

$(document).ready(function(){
    $('.part').height(win_height);
    $('.one>.content').css('padding-top',(win_height - part1_ch)/2);
    $('.two>.content').css({'width': win_width - 32,'height': win_height - 32})
      .css('background','#fff');

});
$('.part').on("scrollstart", function() {
   if ($('.part').attr('id')=== 'one') {
       $("html,body").animate({scrollTop:$("#" + 'two').offset().top}, 800);
   }

});

