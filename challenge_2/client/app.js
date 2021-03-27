$('document').ready(() => {

  const $response = $('#response');
  const $download = $('#downloadDiv');
  const $downloadButton = $('#downloadButton');

  $download.hide();

  $('#form').submit((event) => {
    event.preventDefault();
    let formData = new FormData(document.getElementById("form"));

    $.ajax({
      url: "http://localhost:3000/",
      type: "POST",
      data: formData,
      processData: false,  // tell jQuery not to process the data
      contentType: false   // tell jQuery not to set contentType
    }).done((data) => {
        $response.empty();
        $response.append(data);
        $download.show();
    });
  });

  $downloadButton.click((event) => {
    window.location.assign('http://localhost:3000/file');
  });

});