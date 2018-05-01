var a = $(window).width()
var b = $(window).height()
var f = a*b/2000

function star(obj, frequency, k, size) {
  for (var i=0;i<frequency;i++) {
    var x = Math.random()*a*k;
    var y = Math.random()*b*k;
    $('.'+obj).append('<div class="star" style="left:'+x+'px;top:'+y+'px;transform:scale('+size+')"></div>')
  }
}

var k1=1.2;
var k2=1.2*k1;
star('cosmo1',f,k1,1)
star('cosmo2',f*0.3,k2,2)

$(document).mousemove(function(e) {
  var posX = e.pageX;
  var posY = e.pageY;
  $('.cosmo1').css('left',(1-k1)*posX+'px')
  $('.cosmo1').css('top',(1-k1)*posY+'px')
  $('.cosmo2').css('left',(1-k2)*posX+'px')
  $('.cosmo2').css('top',(1-k2)*posY+'px')
})

var elem = document.querySelector('.datepicker');
  var instance = M.Datepicker.init(elem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.datepicker').datepicker();
  });
          