//find out what page the user is on
var page = window.location.href;
if(page.includes("games")){
document.write("<div class=\"maintitle\"><h1>cgbradley.com</h1></div><div class=\"navbar\"><a class=\"active\" >Home</a><a class=\"active\" href=\"games\">Games</a><a href=\"images\">Images</a><a href=\"contact\">Contact</a><a href=\"about\">About</a></div>");
alert("games");
}
else if(window.location.pathname == '/'){
document.write("<div class=\"maintitle\"><h1>cgbradley.com</h1></div><div class=\"navbar\"><a class=\"active\" >Home</a><a href=\"games\">Games</a><a href=\"images\">Images</a><a href=\"contact\">Contact</a><a href=\"about\">About</a></div>");
alert("home");
}
else if(page.includes("about")){
document.write("<div class=\"maintitle\"><h1>cgbradley.com</h1></div><div class=\"navbar\"><a href=\" >Home</a><a href=\"games\">Games</a><a href=\"images\">Images</a><a href=\"contact\">Contact</a><a href=\"about\">About</a></div>");
alert("about");
}
else if(page.includes("images")){
alert("images");        
}
else{
  document.write("<div class=\"maintitle\"><h1>cgbradley.com</h1></div><div class=\"navbar\"><a href=\" >Home</a><a href=\"games\">Games</a><a href=\"images\">Images</a><a href=\"contact\">Contact</a><a href=\"about\">About</a></div>");
alert("unknown pg");
}
