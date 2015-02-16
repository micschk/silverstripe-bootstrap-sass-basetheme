<!-- Grab Google CDN's jQuery, fall back to local if offline -->
<!--<%-- for some reason SS strips/interpretes the single escape '\', so we need to double-escape: '\\\' --%>-->
<script>
	var oldieCheck = Boolean(document.getElementsByTagName('html')[0].className.match(/\\\slt-ie9\\\s/g));
	if (!oldieCheck) {
		document.write('<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"><\\\/script>');
	} else {
		document.write('<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"><\\\/script>');
	}
</script>
<!--<%-- we need to use /script here for the window.jQuery check in the next part to work --%>-->
<script>
	if (!window.jQuery) {
		if (!oldieCheck) {
			document.write('<script src="$ThemeDir/bower_components/jquery/dist/jquery.min.js"><\\\/script>');
		} else {
			document.write('<script src="$ThemeDir/bower_components/jquery-legacy/dist/jquery.min.js"><\\\/script>');
		}
	}
</script>


<% if 1 %>

	<!--<script src="{$ThemeDir}/bower_components/bootstrap-sass/assets/javascripts/bootstrap.js"></script>-->
	<script src="$ThemeDir/bower_components/bootstrap-sass/assets/javascripts/bootstrap/affix.js"></script>
	<script src="$ThemeDir/bower_components/bootstrap-sass/assets/javascripts/bootstrap/alert.js"></script>
	<script src="$ThemeDir/bower_components/bootstrap-sass/assets/javascripts/bootstrap/button.js"></script>
	<script src="$ThemeDir/bower_components/bootstrap-sass/assets/javascripts/bootstrap/carousel.js"></script>
	<script src="$ThemeDir/bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js"></script>
	<script src="$ThemeDir/bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js"></script>
	<script src="$ThemeDir/bower_components/bootstrap-sass/assets/javascripts/bootstrap/tab.js"></script>
	<script src="$ThemeDir/bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js"></script>
	<script src="$ThemeDir/bower_components/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js"></script>
	<script src="$ThemeDir/bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal.js"></script>
	<script src="$ThemeDir/bower_components/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js"></script>
	<script src="$ThemeDir/bower_components/bootstrap-sass/assets/javascripts/bootstrap/popover.js"></script>
	
	<script src="$ThemeDir/dist/javascript/plugins.js"></script>
	<script src="$ThemeDir/dist/javascript/main.js"></script>

<% else %>

	<script src="$ThemeDir/dist/javascript/script.min.js"></script>

<% end_if %>

<% if SiteConfig.GACode %>
<script>
	window._gaq = [['_setAccount','$SiteConfig.GACode'],['_trackPageview'],['_trackPageLoadTime']];
	Modernizr.load({
	  load: ('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js'
	});
</script>
<% end_if %>


