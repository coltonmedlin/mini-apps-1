$('document').ready(() => {

  $('#form').submit((event) => {
    event.preventDefault();
    let formData = new FormData(document.getElementById("form"));

    $.ajax({
      url: "http://localhost:3000/",
      type: "POST",
      data: formData,
      processData: false,  // tell jQuery not to process the data
      contentType: false   // tell jQuery not to set contentType
    }).done(function( data ) {
        $('#response').append(data);
    });
  });

});