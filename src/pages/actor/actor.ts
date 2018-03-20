import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-actor',
  templateUrl: 'actor.html',
})
export class ActorPage {

  //creo la variable para poder verla desde HTML y poder acceder a sus parametr
  personaje:any = {};

  constructor( private navParams:NavParams, private navCtrl:NavController ) {

  console.log(this.navParams);
  this.personaje = this.navParams.get("personaje");

  }

  volverPrincipa(){

    this.navCtrl.pop();

  }

}
