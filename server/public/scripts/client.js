$(document).ready(function(){
  console.log('js loaded');
  getJokes()
  $('#button').on('click', buttonClick);
  var jokesObject = {}
  function getJokes(){
    $.ajax({
      type: 'GET',
      url: '/jokes',
      success: function(objectFromServer){
        $('#jokesContainer').empty();
        $('.input').val('')
        console.log("back from server");
        jokesObject = objectFromServer;
        for (var i = 0; i < objectFromServer.length; i++) {
        $('#jokesContainer').append('<div class="jokeDiv">Question: ' + objectFromServer[i].jokeQuestion + '</div>');
        $('#jokesContainer').append('<div class="jokeDiv">Punchline: ' + objectFromServer[i].punchLine + '</div>');
        $('#jokesContainer').append('<div class="jokeDiv">Author: ' + objectFromServer[i].whoseJoke + '</div>');
        }
        console.log(jokesObject);
      }
    })
  }
  function buttonClick(){
    var jokeEntered = $('#jokeEnter').val();
    var punchLineEntered = $('#punchLineEnter').val();
    var nameEntered = $('#nameEnter').val();
    var enteredObject = {
      jokeQuestion: jokeEntered,
      punchLine: punchLineEntered,
      whoseJoke: nameEntered
    }
    console.log(enteredObject);

      $.ajax({
        type: 'POST',
        url: '/jokes',
        data: enteredObject,
        success: function(returnedFromPost){
          console.log(returnedFromPost);
        }
      })
      getJokes();

  }

});
