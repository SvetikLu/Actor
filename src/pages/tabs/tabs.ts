import { Component } from '@angular/core';
import {PrincipalPage, MensajePage,AudioPage} from "../index.paginas";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  tab2:any;
  tab3:any;

  constructor() {

    this.tab1 = PrincipalPage;
    this.tab2 = MensajePage;
    this.tab3 = AudioPage;

  }

}
