
jQuery(".nav-toggle").on("click", function() {
    var $this = jQuery(this);
    var target = $this.attr("data-target");
    jQuery(target).toggle();
});
