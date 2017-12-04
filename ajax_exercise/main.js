$("#getWord").keyup(function(event) {
  if (event.keyCode === 13) {
    $("#enter").click();
  }
})
$("#enter").on("click",function(){

  var apiKey = "";
  var key = "object?";
  var keyword="keyword=";
  var word = $("#getWord").val();
  // url breakdown
  $.get("https://api.harvardartmuseums.org/" + key + keyword + word + "&" + apiKey,  function(t){
    // putting together the url
    console.log(t);
    console.log(t.records[0])
    if(word==null||word==""){
      alert("please enter a word in the field")
    }
    else if(t.records[0]==null || t.records[0]==""){
      alert("Sorry there is nothing that matches your search. Please try again")
      }
    else{
    $("img").attr( "src", t.records[0].primaryimageurl)
    // pulling the image from the first
    $("h2").text(t.records[0].named)
    // pulling the name
    $("h3").text(t.records[0].dated)
    $("h4").text(t.records[0].url)
}
})
})
