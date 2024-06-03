// Seleccionamos el elemento con la clase 'toggle' y lo almacenamos en la constante 'menutoggle'.
const menutoggle = document.querySelector('.toggle');
// Seleccionamos el elemento con la clase 'navigation' y lo almacenamos en la constante 'navigation'.
const navigation = document.querySelector('.navigation');

// Añadimos un manejador de eventos al elemento 'menutoggle' para que se ejecute una función cuando se haga clic en él.
menutoggle.onclick = function(){
    // Alternamos la clase 'active' en el elemento 'menutoggle'. 
    // Si la clase está presente, se elimina; si no está, se añade.
    menutoggle.classList.toggle('active');
    // Alternamos la clase 'active' en el elemento 'navigation'. 
    // Si la clase está presente, se elimina; si no está, se añade.
    navigation.classList.toggle('active');
};
