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
                const actualizarListaDeNombres = nombres => this.listaDeNombres = nombres;

                fetch(URL) // fetch devuelve una promesa
                    .then(convertirEnJSON) // convierte la respuesta en un objeto json
                    .then(extraerNombres) // extrae el array de nombres
                    .then(actualizarListaDeNombres) // asigna el array de nombres a la propiedad listaDeNombres

            }
        }
    }
)