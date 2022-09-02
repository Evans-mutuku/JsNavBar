const navToggler = document.querySelector(".nav-toggler")
navToggler.addEventListener('click', navToggle)

function navToggle(){
    navToggler.classList.toggle('active');
    const nav = document.querySelector(".nav")
    nav.classList.toggle('open');

    if(nav.classList.contains('open')){
        nav.style.maxHeight = nav.scrollHeight + 'px';
    }else{
        nav.removeAttribute("style")
    }

}



let data = [
    {
        name: "Robert",
        course: "Admin"
    },
    {
        name: "Saruni",
        course: "Python"
    },
    {
        name: "Joe",
        course: "Dart"
    },
    {
        name: "Evans",
        course: "Web Dev"
    },
]

const info = document.querySelector("#info")

for(let i = 0; i < info.length; i++){

}

let details = data.map(function(item){
    return "<div>" + item.name + " " + item.course + "Course " + "</div>";
})

info.innerHTML = details.join("\n");