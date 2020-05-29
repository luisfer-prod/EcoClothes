import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {


    url='http://localhost/eco_clothes/'; // disponer url de su servidor que tiene las páginas PHP

    constructor(private http: HttpClient) { }

    recuperarTodos() {
      return this.http.get(`${this.url}recuperartodos.php`);
    }

    descripcion(codigo:number) {
      return this.http.get(`${this.url}descripcion.php?codigo=${codigo}`);
    }

    recuperarClientes() {
      return this.http.get(`${this.url}recuperarClientes.php`);
    }

    alta(articulo) {
      return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));
    }

    baja(codigo:number) {
      return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
    }

    seleccionar(codigo:number) {
      return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
    }

    modificacion(articulo) {
      return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));
    }

    registro(cliente) {
      return this.http.post(`${this.url}registro.php`, JSON.stringify(cliente));
    }

    sesion() {
      return this.http.get(`${this.url}sesion.php`);
    }

    cerrarSesion(){
      return this.http.get(`${this.url}cerrarSesion.php`);
    }

    registrarCodigo(codigo:number){
      return this.http.get(`${this.url}registrarCodigo.php?codigo='${codigo}'`);
    }

    borrarUltimo(){
      return this.http.get(`${this.url}borrarUltimo.php`);
    }

    extraerNombre(){
      return this.http.get(`${this.url}extraerNombre.php`);
    }

    recuperar(){
      return this.http.get(`${this.url}recuperar.php`);
    }

    codigoCliente(){
      return this.http.get(`${this.url}codigoCliente.php`);
    }

    pedidoEspecifico(codigoPedido,codigoArticulo){
      return this.http.get(`${this.url}pedidoEspecifico.php?codigo=${codigoPedido}&articulo=${codigoArticulo}`);
    }

    nuevoPedido(codigoCli,precio,codigoArticulo){
      return this.http.get(`${this.url}nuevoPedido.php?codigoCli=${codigoCli}&precio=${precio}&articulo=${codigoArticulo}`);
    }

    recuperarPedidoActivo(){
      return this.http.get(`${this.url}recuperarPedidoActivo.php`);
    }

    usuarioCookie(identidad,password){
      return this.http.get(`${this.url}usuarioCookie.php?identidad=${identidad}&password=${password}`);
    }

    recuperarCookie(){
      return this.http.get(`${this.url}recuperarCookie.php`);
    }

    recuperarPrendas(categoria){
      return this.http.get(`${this.url}recuperarPrendas.php?categoria=${categoria}`);
    }

    recuperarPrendaSinBucle(categoria){
      return this.http.get(`${this.url}recuperarPrendas.php?categoria=${categoria}`);
    }

    registrarReclamacion(nivel,texto){
      return this.http.get(`${this.url}registrarReclamacion.php?nivel=${nivel}&texto=${texto}`);
    }

    borrarPedido(){
      return this.http.get(`${this.url}borrarPedido.php`);
    }

    totalPedido(){
      return this.http.get(`${this.url}totalPedido.php`);
    }

    enviarCorreo(){
      return this.http.get(`${this.url}enviarCorreo.php`);
    }

    descargaPdf(){
      return this.http.get(`${this.url}descargaPdf.php`);
    }
}

