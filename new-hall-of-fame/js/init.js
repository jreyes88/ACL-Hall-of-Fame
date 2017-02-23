(function($){
  $(function(){

    $(".button-collapse").sideNav();

    $(".parentInducteesEvents").click(function() {
      window.location = $(this).find("a").attr("href");
      return false;
    });

    $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space