function fetchRandomImage(){
$.get("https://dog.ceo/api/breeds/image/random", function(data){
    var imageUrl = data.message;
    $('#dog-image').attr('src', imageUrl);
});
}

$('#fetch').click(fetchRandomImage);
