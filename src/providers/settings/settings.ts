
import { Injectable } from '@angular/core';

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingsProvider {

  /*constructor(public http: HttpClient) {
    console.log('Hello SettingsProvider Provider');
  }*/

  customeColor = false;

  changeColor(color: boolean){
      this.customeColor = color;
      //console.log(this.customeColor);
  }

  getColor(){
      return this.customeColor;
  }
}
