var select_tag = $("#breeds");

function fetchRandomImage(){
    $.get("https://dog.ceo/api/breeds/list/all", function(data){
        for (let breed in data.message)
            {
                let breed_option = "<option value='" + breed + "'>" + breed + "</option>";
                select_tag.append(breed_option);
            }
            let fetchImage = data.message;
            $('img').attr('src', fetchImage);
    });
    }
    
    $('#get-img').click(fetchRandomImage);





function nextImage(){
    $.get("https://dog.ceo/api/breeds/list/all", function(data){
    
    
  
});
}

$('#next-button').click(nextImage);