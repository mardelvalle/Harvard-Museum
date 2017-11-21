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
    $("img").attr( "src", t.records[0].primaryimageurl)
    // pulling the image from the first
    $("h2").text(t.records[0].named)
    // pulling the name
    $("h3").text(t.records[0].dated)
    $("h4").text(t.records[0].url)
})
})

    // placing the temperature and doing the appropriate math

// $.get(apiURL,function(r){
//   console.log(apiURL);
// })
// $.ajax({
//   url: apiURL,
//   success: function(result){
//     $("div").append( "<img src=" + result.url +">")
//
// })
// ajax takes an object as their part ($)
//   $.ajax({
//     url: apiURL,
//     success: function(result){
//       $("div").append( "<img src=" + result.url +">")
//       //data is retrieved successfully
//       // you can change the line to be more like $("img").attr("src".result.hurl)
//       // date picker could also allow to have multiple fields for the imput
//     },
//     error:function(r){
//       $("div").append("please enter a valid date")
//     }
//   });
// })
