

var el = document.querySelector('#nav-main');
var sr=document.getElementById("SR");
var vprix=document.getElementById("vrange");

document.getElementById("prix").innerHTML= 'Valeur: '+vprix.value+'$';


function creationCourses(image, titre, prix) {
    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');
    img.src = image;
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);
    span.appendChild(document.createTextNode(prix));
    div.setAttribute('class', 'card col-3 me-3 mb-3');
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    el.append(div);
}

courses.forEach((L) => {
    creationCourses(L.path, L.title, L.price);
});

vprix.addEventListener('input',function prixchanger(){

    document.getElementById("prix").innerHTML= 'Valeur: '+vprix.value+'$';

    var i=0;
    el.innerHTML='';

    for(i=0; i<courses.length;i++){
        if((courses[i].price < vprix.value) )
        creationCourses(courses[i].path, courses[i].title, courses[i].price);
        }
    });


function cherche(){
    var i;
    var essay =0;
    el.innerHTML='';

    for(i=0; i<courses.length;i++){
       if((courses[i].title.includes(sr.value.toUpperCase()) || courses[i].category.includes(sr.value.toUpperCase()))){
        creationCourses(courses[i].path, courses[i].title, courses[i].price);
        essay = 1;
       }
     
    }
    if(essay==0){

        courses.forEach((v) => {
            creationCourses(v.path, v.title, v.price);
        });
    }
}

sr.addEventListener('input',cherche());

 function show(){

    var i;
    el.innerHTML='';
    for(i=0;i<courses.length;i++){
        creationCourses(courses[i].path, courses[i].title, courses[i].price);

    }

}

 


function searchjava(){
    var i;el.innerHTML='';
        for(i=0;i<courses.length;i++){
            if(courses[i].category==="JS") {
            creationCourses(courses[i].path, courses[i].title, courses[i].price);
        }

     }
    };


    function searchphp(){
        var i;el.innerHTML='';
            for(i=0;i<courses.length;i++){
                if(courses[i].category==="PHP") {
                creationCourses(courses[i].path, courses[i].title, courses[i].price);
            }

         }
        };

        function searchcss(){
            var i;el.innerHTML='';
                for(i=0;i<courses.length;i++){
                    if(courses[i].category==="CSS") {
                    creationCourses(courses[i].path, courses[i].title, courses[i].price);
                }
    
             }
            };     
