console.log('JS is working!')
var srch=document.getElementById("movie-btn");
var movieinp=document.getElementById("movie-inp");

srch.onclick= myScript1;
movieinp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        myScript1();
    }
});

function myScript1(){
    var movie=movieinp.value.replace(/ /g,"+");
    var url='https://www.omdbapi.com/?t='+movie+'&apikey=6fa903c';
    fetch(url)
    .then((res) => {
        if(res.ok == false){
            document.getElementById("error").style.display="block";
        }
        res.json().then((data) => {
            if(data.Response=="False"){
                document.getElementById("error").style.display="block";
                document.getElementById("info-div").style.display="none";
            }
            else{
                if(screen.width<=991){
                    document.getElementById("footer").style.position="relative";
                }
                document.getElementById("info-div").style.display="block";
                document.getElementById("error").style.display="none";
                document.getElementById("mov-pstr").src=data.Poster;
                document.getElementById("title").innerHTML=data.Title;
                document.getElementById("type").innerHTML=data.Type;
                document.getElementById("runt").innerHTML=data.Runtime;
                document.getElementById("rating").innerHTML=data.imdbRating;
                document.getElementById("real").innerHTML=data.Released;
                document.getElementById("year").innerHTML=data.Year;
                document.getElementById("genre").innerHTML=data.Genre;
                document.getElementById("direc").innerHTML=data.Director;
                document.getElementById("cast").innerHTML=data.Actors; 
                document.getElementById("plot").innerHTML=data.Plot;
            }  
        });
    })
    .catch(error => {
        console.log(error);
    });
}