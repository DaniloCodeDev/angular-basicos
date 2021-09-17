import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor() { 
    //console.log('constructor');
    //se ejecuta antes de la reendirizacion
  }

  ngOnInit(): void {
    //console.log('ngOnInit');
    //srive para inicializar  cosas
  }

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(){
      console.log('Borrando...');
      //this.heroes.splice(0, 1);

      //const Borrado = this.heroes.shift();
      //console.log(heroeBorrado);
      this.heroeBorrado = this.heroes.shift() || '';
      
      
  }
}
