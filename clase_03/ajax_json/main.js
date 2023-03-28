window.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('#btn');
    const div = document.querySelector('#div');
    btn.addEventListener('click', function() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost/23.1_DWT3BV_pwa/clase_03/ajax_json/persona.json');
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const {name, lastName, age} = JSON.parse(xhr.responseText);
                div.innerHTML = `
                    <p>Nombre: ${name}</p>
                    <p>Apellido: ${lastName}</p>
                    <p>Edad: ${age}</p>
                `;
            }
        });
        xhr.send();
    });
});