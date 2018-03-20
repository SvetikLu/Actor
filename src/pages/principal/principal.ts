import { Component } from '@angular/core';
import { NavController} from "ionic-angular";
import { Personage } from "../../interfaces/personaje.interface";
import { PERSONAJES } from "../../data/personajes.data";
import { ActorPage} from "../index.paginas";


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  //creo la variable para poder verla desde HTML y poder acceder a sus parametr
  personajes:Personage[] = [];

  constructor(public navCtrl: NavController,) {

    //creamos nuevo objeto de personaje para no borrar nuestro archivo del personaje
    this.personajes = PERSONAJES.slice(0);

  }

  iraActorPage(personaje:any){

    console.log( personaje );
    this.navCtrl.push( ActorPage, { 'personaje': personaje });

  }

}
