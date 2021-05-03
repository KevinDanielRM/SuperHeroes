import { Component } from '@angular/core';
@Component({
selector: 'app-villano',
templateUrl: './villano.component.html',
styleUrls: ['./villano.component.css']
})
export class VillanoComponent{
malos: string [] = ['Thanos', 'Doom', 'Loki', 'Dr Octopus'];
power : number [] = [1000,735,255,360]; 

numero = 1000;
  base = 5;
  constructor() { }
  
  ngOnInit(): void {
  }
  acumular(valor: number){
    this.numero += valor;
  }
/*
  sumar(){
    this.numero +=1;
  }
  restar(){
    this.numero -=1;
  }

  */
}