const { hash } = window.location;

const message = atob(hash.replace('#', ''));

//Imamo message - true, dodaj u prvoj hide, drugoj ukloni hide 
if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', (event) => {
    //calback function
    event.preventDefault();

    //kada se klikne submit sve se ovo desava ispod

    //ovo ovdje je da nestane fforma dje je message, i da se pojavi ova sa linkom
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');

    const encypted = btoa(input.value); //slanje enkriptovanoo btoa saljemoo a sa atob mi da citamo da ga prevodi

    const linkValue = document.querySelector('#link-input');
    linkValue.value = `${window.location}#${encypted}`;
    linkValue.select();
});

//.select() - selectuje value i smjesti svee unutar tog elementa , sve skladisti u njega