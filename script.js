"use strict"


async function ReadPosts(){
    let postArea=document.querySelector(".posts");
    postArea.innerHTML='Carregando...';

    let response =await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if(json.length > 0){
        postArea.innerHTML="";

        for(let i in json){
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}</div>`
            postArea.innerHTML += postHtml;
        }

    }else postArea.innerHTML ="nenhum post encontrado";
}

ReadPosts()