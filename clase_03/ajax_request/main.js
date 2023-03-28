window.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('button');
    const container = document.getElementById('container');

    element.addEventListener('click', function() {
        const request = new XMLHttpRequest();
        request.open('GET', 'https://rickandmortyapi.com/api/character');
        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status === 200) {
                const {results} = JSON.parse(request.responseText);
                let html = '<ul>';
                results.forEach(function(item) {
                    html += `<li>${item.name}</li>`;
                });
                html += '</ul>';
                container.innerHTML = html;
            }
        });
        request.send();
    });
});