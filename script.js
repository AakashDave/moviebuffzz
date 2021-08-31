
$(document).ready(function(){
    var apikey="49793fed";
    $("#movieForm").submit(function(event) {
    
    event.preventDefault();
    
    var movie=$("#movie").val();
    var result='';
    var url="http://www.omdbapi.com/?apikey="+apikey;
    
            $.ajax({
                method:'GET',
                url:url+"&t="+movie,
                success:function (data) {
                    console.log(data);
                    result=`
                    <div class="pic-img">
                    <img class="img-thumnail" width="200" heigth="200" src="${data.Poster}"/></div>
                    <div class="content">
                    <h2>Title:${data.Title}</h2>
                    <h2>Type:${data.Type}</h2>
                    <h2>Release Date:${data.Released}</h2>
                    <h2>Runtime:${data.Runtime}</h2>
                    <h2>Genre:${data.Genre}</h2>
                    <h2>Director:${data.Director}</h2>
                    <h2>Actor:${data.Actors}</h2>
                    <h2>imdbRating:${data.imdbRating}</h2>
                    </div>
                    `
                    $("#result").html(result)
                }
            })
        })
    })    
    