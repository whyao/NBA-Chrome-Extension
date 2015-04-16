var url = "http://www.nbaplayoffsbracket.com/";

function getBracket(results)
{
	var top = results.split('<div id="playoffbracket" class="max">')[1];
	var bot = top.split('<footer>');
	return bot[0];
}

function changeImgTags()
{
	var baseURL = "http://www.nbaplayoffsbracket.com";
	$( "img" ).each(function() {
  		var newURL = $(this).attr("src").replace("..", baseURL);
  		$(this).attr( "src", newURL );

  		$(this).parent().css( "cursor", "default");
	});
}

function getPage()
{
	$.get( url, function(results){
		var bracket = getBracket( results );
		$("div.bracket").append( bracket );
		changeImgTags();
	});
}

$( document ).ready( function(){ 
	getPage();
})
