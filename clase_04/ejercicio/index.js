const app = new Vue(
    {
        el: '#app',
        data: {
            titulo: 'Hola mundo',
            mensaje: 'Hola mundo desde Vue',
            listaDeNombres: []
        },
        methods: {
            saludar() {
                const URL = 'https://rickandmortyapi.com/api/character';
                const convertirEnJSON = (response) => response.json();
                const extraerNombres = (data) => data.results.map(personaje => personaje.name);
                const extraerGenero = (data) => data.results.map(personaje => personaje.gender);
                const actualizarListaDeNombres = nombres => this.listaDeNombres = nombres;

                const esperarDosSegundos = () => new Promise((resolve) => {
                    setTimeout(() => {
                        resolve("Se resolvio todo ok");
                    }, 200);
                });

                const query = Promise.all(
                    [
                            fetch(URL).then(convertirEnJSON).then(extraerNombres),
                            fetch(URL).then(convertirEnJSON).then(extraerGenero),
                            esperarDosSegundos()
                        ]
                )

                query.then((respuestas) => {
                    const nombres = respuestas[0];
                    const generos = respuestas[1];
                    const nombresConGenero = nombres.map((nombre, index) => {
                        return generos[index] + ' - ' + nombre;
                    });
                    actualizarListaDeNombres(nombresConGenero);

                });



            }
        }
    }
)