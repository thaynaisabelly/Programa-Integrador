/* Funçao do menu que faz aparecer  submenu */
$(".drop")//corrigir
  .mouseover(function() {
  $(".dropdown").show(300);
});
$(".drop")
  .mouseleave(function() {
  $(".dropdown").hide(300);     
});

