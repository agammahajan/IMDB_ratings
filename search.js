
var titles = document.getElementsByClassName("showRowText");

for(i=0; i<titles.length; i++)
{	//console.log("hello\n");
	
	var title_name=titles[i].innerHTML;
	console.log(title_name+"\n");
	var http=new XMLHttpRequest();
	http.open("GET","https://omdbapi.com/?t=" + title_name,false);
	http.send(null);
	var response=http.responseText;
	var json=JSON.parse(response);
	var rating=json["imdbRating"];
	//console.log(rating+"\n");
	var element=document.createElement("h7");
	var display_rating=document.createTextNode("\nIMDB "+rating);
	
	element.appendChild(display_rating);
	titles[i].appendChild(element);
	
}
