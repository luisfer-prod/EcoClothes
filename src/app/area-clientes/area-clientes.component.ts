import { Component, OnInit,Input, HostListener } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-area-clientes',
  templateUrl: './area-clientes.component.html',
  styleUrls: ['./area-clientes.component.css']
})
export class AreaClientesComponent implements OnInit {

  // @Input() login: LoginComponent;

  articulos=null;
  prueba=null;
  total = null;
  autoSaveInterval;
  contador : number = 0;
  pedidoUnico=null;
  codigoCli;
  prendas = null
  pedidoActivo;
  pedidos;
  totalCarrito;
  switch;
  categoria;

  art={
    codigo:null,
    nombre:null,
    imagen:null,
    precio:null,
    descuento:null
  }

  borrar = {
    codigoPedido:null,
    total:null,
    codigoProducto:null,
    cantidad:null
  }

  nombrePanel;
  imagenPanel;

  descripcionPanel = null

  constructor(
    private productosServicio: ProductosService,
    private router: Router) {}


  ngOnInit() {

    this.codigoCliente();
    this.sesion();
    this.aparecer();
    this.esconder();

    if (this.switch) {
      this.recuperarPrendas(this.categoria);
    } else {
      this.recuperarTodos();
    }

    this.recuperarPedidos();
    this.recuperarPedidoActivo();
    this.totalPedido();
    this.redimensionar();
  }


  productoPanel(codigo,nombre, imagen){

    var panel = document.getElementById("panelAmpli");

    this.productosServicio.descripcion(parseInt(codigo)).subscribe(result => this.descripcionPanel = result);

    // console.log(this.descripcionPanel);

    panel.style.display = "inline";
    panel.style.visibility = "visible";

    this.nombrePanel = nombre;
    this.imagenPanel = imagen;

  }

  esconderPanel(){

    var panel = document.getElementById("panelAmpli");

    panel.style.display = "none";
    panel.style.visibility = "hidden";
  }

  totalPedido(){

    this.productosServicio.totalPedido().subscribe(result => this.total = result);

    // this.totalCarrito = this.total[0];
  }

  redimensionar(){

    var numFilas = this.pedidoActivo;
    var opacity = document.getElementById('opacity');
    var pixeles=240;
    opacity.style.height = '240px';

    for (let index = 0; index < numFilas.length; index++) {

      pixeles+=20;
      opacity.style.height = pixeles+'px';
    }
  }

  actualizarTotal(){

    this.recuperarPedidoActivo();

    this.pedidoActivo.forEach(element => {
      this.total+=parseInt(element.cantidad);
    });
  }

  recuperarPrendas(categoria) {
    this.productosServicio.recuperarPrendas(categoria).subscribe(result => this.articulos = result);

    this.recuperarPedidos();
    this.recuperarPedidoActivo();
    this.totalPedido();
    this.switch = true;
    this.categoria =categoria;
  }

  recuperarPrendaSinBucle(categoria){
    this.productosServicio.recuperarPrendaSinBucle(categoria).subscribe(result => this.articulos = result);
  }

  sumaContador(){
    this.contador++;
  }

  recuperarPedidos(){
    this.productosServicio.recuperar().subscribe(result => this.pedidos = result);
   }

   recuperarPedidoActivo(){
    this.productosServicio.recuperarPedidoActivo().subscribe(result => this.pedidoActivo = result);

   }


  carrito(codigo,precio){


    this.anadir(codigo,precio);
    this.codigoCliente();
    this.recuperarPedidos();
    this.recuperarPedidoActivo();
    this.totalPedido();
  }

  // PARA SUMAR Y RESTAR UNIDADES AL CARRITO

  anadir(codigoArticulo,precio){

    var flag=false;

    this.pedidos.forEach(element => {
      if (element.codigo_cliente==this.codigoCli[this.codigoCli.length-1].codigo) {
        var codigoPedido = element.codigo;
        this.insertarPedidoExistente(codigoPedido,codigoArticulo);
        this.recuperarPedidoActivo();
        this.totalPedido();
        flag=true;
      }
    });

    if (!flag) {
      this.nuevoPedido(this.codigoCli[this.codigoCli.length-1].codigo,precio,codigoArticulo);
      this.recuperarPedidos();
      this.recuperarPedidoActivo();
      this.totalPedido();
    }
  }

  insertarPedidoExistente(codigoPedido,codigoArticulo){
    this.productosServicio.pedidoEspecifico(codigoPedido,codigoArticulo).subscribe(datos => {
      if (datos['resultado']=='OK') {
      }

        // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        //   this.router.navigate(['/areaCliente']);
        // });
      }
    );

    // this.recuperarTodos();

    if (this.switch) {
      this.recuperarPrendas(this.categoria);
    } else {
      this.recuperarTodos();
    }

    this.recuperarPedidos();
    this.recuperarPedidoActivo();
    this.totalPedido();
  }

  nuevoPedido(codigoCli,precio,codigoArticulo){
    this.productosServicio.nuevoPedido(codigoCli,precio,codigoArticulo).subscribe(datos => {
      if (datos['resultado']=='OK') {
      }

        // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        //   this.router.navigate(['/areaCliente']);
        // })
    });

    // this.recuperarTodos();

    if (this.switch) {
      this.recuperarPrendas(this.categoria);
    } else {
      this.recuperarTodos();
    }

    this.recuperarPedidos();
    this.recuperarPedidoActivo();
    this.totalPedido();
  }


  restar(codigoPedido,total,codigoProducto,cantidad){

    this.recuperarPedidos();
    this.recuperarPedidoActivo();
    this.totalPedido();

      this.borrar.codigoPedido = codigoPedido;
      this.borrar.total = total;
      this.borrar.codigoProducto = codigoProducto;
      this.borrar.cantidad = cantidad;

      this.productosServicio.restar(this.borrar).subscribe(datos => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          // this.recuperarPedidos();
          // this.recuperarPedidoActivo();
          // this.totalPedido();
        }
      });

      this.recuperarPedidos();
    this.recuperarPedidoActivo();
    this.totalPedido();

      if (this.borrar.total=="1" || this.borrar.total=="0") {
        this.pedidoActivo = null;
        this.total[0].total = "0";
        this.borrar.total = "0";
        this.total = null;
      }

    if (this.pedidoActivo==null) {

      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/areaCliente']);
        });
    }

    //  if (parseInt(this.total[0].total)==0) {
    //   this.router.navigate(['/area-clientes']);
    //     }
    // } else {
    //   this.router.navigate(['/area-clientes']);
    // }
  }




  codigoCliente(){
    this.productosServicio.codigoCliente().subscribe(result => this.codigoCli = result);
  }



  aparecer(){
   var hola = document.getElementById('hola');
   var usuario = document.getElementById('usuario');
   var boton = document.getElementById('botonCliente');

   hola.style.display='inline';
   hola.style.visibility='visible';

   usuario.style.display='inline';
   usuario.style.visibility='visible';

   boton.style.display='inline';
   boton.style.visibility='visible';
  }

  esconder(){

    var iniciar = document.getElementById('iniciar');
    var registrar = document.getElementById('registrar');
    var cerrar = document.getElementById('cerrar');


    iniciar.style.display='none';
    iniciar.style.visibility='hidden';

    registrar.style.display='none';
    registrar.style.visibility='hidden';

    cerrar.style.display='inline';
    cerrar.style.visibility='visible';
  }

  sesion(){

    this.productosServicio.sesion();

    this.autoSaveInterval = setInterval( ()=>{
      this.contador++;
      console.log(this.contador);
      if (this.contador>3600) {
        this.router.navigate(['']);
        alert('Llevas demasiado tiempo inactivo.Cerrando sesion');
        this.productosServicio.cerrarSesion();
        clearInterval(this.autoSaveInterval);
      };
    },1000);
  }


  recuperarTodos() {
    this.productosServicio.recuperarTodos().subscribe(result => this.articulos = result);

    this.switch = false;
  }

  alta() {
    this.productosServicio.alta(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(codigo) {
    this.productosServicio.baja(codigo).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.productosServicio.modificacion(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  seleccionar(codigo) {
    this.productosServicio.seleccionar(codigo).subscribe(result => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  }

}
