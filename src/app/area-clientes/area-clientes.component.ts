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

  // pedidoActivo = {
  //   codigoPedido:null,
  //   total:null,
  //   codigo_cliente:null,
  //   codigoProducto:null,
  //   nomProducto:null,
  //   cantidad:null
  // }

  pedidoActivo;

  art={
    codigo:null,
    nombre:null,
    imagen:null,
    precio:null,
    descuento:null
  }

  pedidos;


  constructor(
    private productosServicio: ProductosService,
    private router: Router) {}



  ngOnInit() {

    this.codigoCliente();
    this.recuperarTodos();
    this.recuperarPedidos();
    this.recuperarPedidoActivo();
    this.sesion();
    this.aparecer();
    this.esconder();
    this.totalPedido();
  }

  totalPedido(){

    var numFilas = this.pedidoActivo;
    var opacity = document.getElementById('opacity');
    var pixeles=240;
    opacity.style.height = '240px';

    for (let index = 0; index < numFilas.length; index++) {

      pixeles+=20;
      opacity.style.height = pixeles+'px';
    }

    this.productosServicio.totalPedido().subscribe(result => this.total = result);
  }

  actualizarTotal(){

    this.recuperarPedidoActivo();

    this.pedidoActivo.forEach(element => {
      this.total+=parseInt(element.cantidad);
    });
  }

  recuperarPrendas(categoria) {
    this.productosServicio.recuperarPrendas(categoria).subscribe(result => this.articulos = result);
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

    this.codigoCliente();
    this.recuperarPedidos();
    this.recuperarPedidoActivo();
    this.total++;
    this.anadir(codigo,precio);
  }

  anadir(codigoArticulo,precio){

    var flag=false;

    this.pedidos.forEach(element => {
      if (element.codigo_cliente==this.codigoCli[this.codigoCli.length-1].codigo) {
        var codigoPedido = element.codigo;
        this.insertarPedidoExistente(codigoPedido,codigoArticulo);
        this.recuperarPedidoActivo();
        flag=true;
      }
    });

    if (!flag) {
      this.nuevoPedido(this.codigoCli[this.codigoCli.length-1].codigo,precio,codigoArticulo);
      this.recuperarPedidoActivo();
    }
  }

  nuevoPedido(codigoCli,precio,codigoArticulo){
    this.productosServicio.nuevoPedido(codigoCli,precio,codigoArticulo).subscribe(datos => {

        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/areaCliente']);
        })
    });

    this.recuperarPedidos();
    this.recuperarPedidoActivo();
  }


  insertarPedidoExistente(codigoPedido,codigoArticulo){
    this.productosServicio.pedidoEspecifico(codigoPedido,codigoArticulo).subscribe(datos => {

        // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        //   this.router.navigate(['/areaCliente']);
        // });
      }
    );

    this.recuperarTodos();
    this.recuperarPedidoActivo();
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
