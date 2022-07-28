let nombreusuario = localStorage.getItem('nombreusuario')
let apellidousuario = localStorage.getItem('apellidousuario')
document.getElementById('nombreusuario').value = nombreusuario;
document.getElementById('apellidousuario').value = apellidousuario;

function ValidarFormulario(){
    let nombreusuario = document.getElementById('nombreusuario').value;
    let apellidousuario = document.getElementById('apellidousuario').value;
    localStorage.setItem('nombreusuario', nombreusuario);
    localStorage.setItem('apellidousuario', apellidousuario);
}

class Producto{
    constructor(id, nombre,precio, autor, editorial, genero){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
    }

    //Con este metodo muestro los Libros
    mostrarProducto() {
        return (
        "id: " +
        this.id +
        " "+
        "autor: " +
        this.autor +
        " Nombre: " +
        this.nombre +
        " Precio: " +
        this.precio + 
        " " +
        "Editorial: " +
        this.editorial +
        " " +
        "Genero: " +
        this.genero +
        "\n"
        );
    }

}

//Genero el array de libros(productos)
let productos = [
    new Producto(1,"Papel Pintado",1000, "Diego Giacomini", "Galerna", "Política y Economía"),
    new Producto(2,"La Revolucion De La Libertad",1000, "Diego Giacomini","Galerna", "Política Y Economía"),
    new Producto(3,"Libertad-Libertad-Libertad",1000,"Milei Giacomini","Galerna", "Política"),
    new Producto(4,"Hacia una nueva Libertad",1000,"Rothbard","Unión Editorial","Filosofía, Política, Liberalismo, Economía"),
    new Producto(5,"Que le hizo el gobierno a nuestro dinero",1000,"Rothbard","Unión Editorial","Ciencias económicas"),
    new Producto(6,"La anatomia del estado",1000,"Rothbard","Unión Editorial","Economía, Ciencias sociales"),
    new Producto(7,"Competencia y empresarialidad",1000 ,"Israel M. Kirzner","Unión Editorial","Ciencias económicas"),
    new Producto(8,"Liberalismo - La tradición clásica",1000 ,"Ludwig von Mises","Unión Editorial","Ciencias económicas, Ciencias Sociales, Política"),
    new Producto(9,"Política económica",1000 ,"Ludwig von Mises","Unión Editorial","Ciencias económicas, Economía, Política"),
    new Producto(10,"Crítica del intervencionismo",1000 ,"Ludwig von Mises","Unión Editorial","Política, Economía"),
    new Producto(11,"Autobiografía de un liberal",1000 ,"Ludwig von Mises","Unión Editorial","Ciencias sociales y humanísticas"),
    new Producto(12,"La mentalidad anticapitalista",1000 ,"Ludwig von Mises","Unión Editorial","Ciencias sociales y humanísticas, Economía"),
]


//Genero un array de autores
let autores = ["Diego Giacomini", "Milei Giacomini","Rothbard", "Ludwig von Mises", "Israel M. Kirzner"];

// Genero el arrays, metiendo los objetos adentro
const productosEnCarro=[];


//Uso esta variable para si el usuario no quiere continuar la compra
let autor = ""

//Este ciclo se va a repetir hasta que el usuario, escriba finalizar o enter directamente
while(autor != "Finalizar" && autor != null) {
    let string = autores.join ("\n");//Genero el string de autores uno abajo de otro
    autor = prompt(
        'Ingrese un autor para continuar comprando o ingrese "Finalizar" para terminar sus compra/s: \n(' + string + ")"
    );

    //
    if (autor != "Finalizar" && autor != null) {
        let productosFiltradoPorAutor = productos.filter(
        (item) => item.autor == autor
        );

        //Genero una lista con todos los libros de ese autor
        let cartel = "";
        for (let i = 0; i < productosFiltradoPorAutor.length; i++) {
            cartel += productosFiltradoPorAutor[i].mostrarProducto();
        }

        //Genero una lista de los libros del autor seleccionado anteriormente
        let idSeleccionado = parseInt(
            prompt("Seleccione el id del producto que quiere comprar: \n\n" + cartel)
        );


        let productoParaCarro = productosFiltradoPorAutor.find(
            (item) => item.id == idSeleccionado
            );


        if (productoParaCarro) {
                productosEnCarro.push(productoParaCarro);                
            }            
    }    
}

if (productosEnCarro.length > 0) {
    alert('Te invitamos a Iniciar sesion o Registrarte para terminar tu compra');
    let nombre = prompt('ingrese su nombre');
    let apellido = prompt('ingrese su apellido')
    let mail = prompt('ingrese su email');


    //Creo una funcion para finalizar la compra
    function comprar(nombre, apellido, email, productosEnCarro) {
        let cant = productosEnCarro.reduce((acc, item) => item.precio + acc, 0);/*
        Uso el metodo reduce para pasar el precio final de la compra/s */
        alert("Gracias" +" " + nombre + " " + apellido + " por tu compra. \n Total: $" + cant + "\n En breve te llegara a tu email: " + email + " " +  "Cuanto tiempo tardara el envio" );
        /*Llamo un alert para que muestre la confirmacion de compra */
    }

for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                <p>  Libro: ${producto.nombre}</p>
                <p>Autor: ${producto.autor}</p>
                <p>Editorial: ${producto.editorial}</p>
                <p>Genero: ${producto.genero}</p>
                <b>Precio: $ ${producto.precio}</b>`;
                document.body.appendChild(contenedor);
    }

    
//Llamo a la funcion
comprar(nombre, apellido, mail, productosEnCarro);}

let miFormulario = document.getElementById ("formulario");
miFormulario. addEventListener ("submit", validarFormulario );
function validarFormulario (e){
    //Cancelamos el comportamiento del evento
    e.preventDefault ();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target
    //Obtengo el valor del primer hijo <imput type ="text">
    console.log(formulario.children[0].value)
    //Obtengo el valor del segundo hijo <input type="text">
    console.log(formulario.children[1].value);
    //Obtengo el valor del tercer hijo hijo <input type="number">
    console.log(formulario.children[2].value);
}