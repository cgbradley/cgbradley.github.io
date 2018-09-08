//find out what page the user is on
var page = window.location.pathname;
if(page.includes("games")){

}
else if(window.location.pathname == '/'){
document.write("<div class=\"maintitle\"><h1>cgbradley.com</h1></div><div class=\"navbar\"><a class=\"active\" >Home</a><a href=\"games\">Games</a><a href=\"images\">Images</a><a href=\"contact\">Contact</a><a href=\"about\">About</a></div>");
}
else if(page.includes("about")){
  
}
else if(page.includes("images")){
        
}
else{
  document.write("<div class=\"maintitle\"><h1>cgbradley.com</h1></div><div class=\"navbar\"><a href=\" >Home</a><a href=\"games\">Games</a><a href=\"images\">Images</a><a href=\"contact\">Contact</a><a href=\"about\">About</a></div>");
}
