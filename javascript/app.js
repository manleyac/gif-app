var topics = ["dogs","cats","birds"];

function createButtons(topics) {
  $("#gifButtons").empty();
  for(let topic of topics) {
   var button = $("<button>");
   button.text(topic);
   button.addClass("gifSearch");
   button.attr("data-topic",topic);
   $("#gifButtons").append(button);
  }
}

function controlButton(event) {
  switch ($(this).attr("data-cmd")) {
    case "Add Button" :
      topics.push($("#newGif").val().trim());
      createButtons(topics);
      break;
    
    case "Reset" :
      let NUM_Topics = 3; //Number of Default topics
      for(let i = 0; i < (topics.length - NUM_Topics); i++) {
        topics.pop();
      }
      $("#gifs").empty();
      createButtons(topics);
      break;

    case "Pause All" :
      break;
  }
}

function getGifs(event) {
  var API_KEY = "&api_key=esVM1on81mgFJNOTDbCiTRHD44n6r4Za";
  var URL = "http://api.giphy.com/v1/gifs/search?q=";
  var queryUrl = URL + $(this).attr("data-topic") + API_KEY;
  console.log(queryUrl);
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
}

function main() {
   createButtons(topics);
   $(".controlBtn").on("click", controlButton);
   $(".gifSearch").on("click", getGifs);
}

window.onload = function() {
   main();
}
