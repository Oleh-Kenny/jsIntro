var input = document.querySelector('input');
var text = input.value
var button = document.querySelector('button');
button.addEventListener('click',myFilm);

function myFilm(){
    text = input.value
    var link = `http://www.omdbapi.com/?apikey=c87c3a96&t=${text}`;
    var newRec = new Request(link);
    fetch(newRec)
    .then((response) =>{
        return response.json();
    }) 
    .then((posty) => {
        console.log(link)
        
        document.querySelector('h1').innerHTML = posty.Title;
        var post = document.querySelector('.poster')
        post.innerHTML = `<img src='${posty.Poster}' alt="">`
       
    })
}