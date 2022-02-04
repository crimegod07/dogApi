
var select_tag = $('#breeds');
function breeds_in_dropdown(){
    $.get("https://dog.ceo/api/breeds/list/all", function(data){
      
    if(data.code != 404){
            for (let breed in data.message)
            {
                let breed_option = "<option value='" + breed + "'>" + breed + "</option>";
                
                select_tag.append(breed_option);
                
            }
        }else{
            window.alert('Please check your internet connection and refresh the page!');
        }

})
}

select_tag.show(breeds_in_dropdown);




function image(){
    var current_breed = select_tag.val();
$.get('https://dog.ceo/api/breed/' + current_breed + '/images/random', function(data){
    let fetched_image = data.message;
    $('img').attr('src', fetched_image);
})
}
    $('#get-img').click(image);


function nextButton(){
    var current_breed = select_tag.val();
    $.get('https://dog.ceo/api/breed/' + current_breed + '/images/random', function(data){
        let fetched_image = data.message;
        $('img').attr('src', fetched_image);
    })
}

  $('#next-button').click(nextButton);

