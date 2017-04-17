<script type='text/javascript'>
//<![CDATA[
$(function() {
  if ($('#PopularPosts1').length) {
    var el = $('#PopularPosts1');
    var stickyTop = $('#PopularPosts1').offset().top;
    var stickyHeight = $('#PopularPosts1').height();
    $(window).scroll(function() {
      var limit = $('#footer-wrapper').offset().top - stickyHeight - 20;
      var windowTop = $(window).scrollTop();
      if (stickyTop < windowTop) {
        el.css({
          position: 'fixed',
          top: 20
        });
      } else {
        el.css('position', 'static');
      }
      if (limit < windowTop) {
        var diff = limit - windowTop;
        el.css({
          top: diff
        });
      }
    });
  }
});
//]]>
</script>
