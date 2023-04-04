const app = new Vue(
    {
        el: '#app',
        data: {
            titulo: 'Hola mundo',
            mensaje: 'Hola mundo desde Vue',
        },
        methods: {
            saludar() {
                alert('Hola mundo')
            }
        }
    }
)