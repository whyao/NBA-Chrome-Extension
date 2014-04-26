function getBracket()
{
	return $("#playoffbracket").html();
}

var bracket = getBracket();
//console.log( bracket );
$("body").append(bracket);