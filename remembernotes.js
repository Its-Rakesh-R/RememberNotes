
var bag = document.querySelector(".bag");
var form = document.querySelector(".form");
var pluss = document.getElementById("pluss");
pluss.addEventListener("click",function(){
    bag.style.display="block";
    form.style.display="block";
})
var cancel = document.getElementById("cancel");

cancel.addEventListener("click",function(event){
    event.preventDefault()
    bag.style.display="none";
    form.style.display="none";
})
// selecting vales
var title = document.getElementById("title");
var chapter = document.getElementById("chapter");
var disc = document.getElementById("discription");

var catch1 =document.querySelector(".catch")

var add2 = document.getElementById("add");
add2.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div");
    div.setAttribute("class","sample");
    div.innerHTML=`<h4>${title.value}</h4>
    <p class = "bo">${chapter.value}</p>
    <p>${discription.value}</p>
    <button class="btn" onclick="remele(event)">delete</button>`
   
    catch1.append(div)
    bag.style.display="none";
    form.style.display="none";
})

function remele(event){
    event.target.parentElement.remove()
}

