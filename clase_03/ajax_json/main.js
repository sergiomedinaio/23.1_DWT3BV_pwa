window.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('#btn');
    const div = document.querySelector('#div');
    btn.addEventListener('click', function() {
       console.log("prueba de click");
       console.log(div)
    });
});