import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Toggle} from 'ionic-angular';
import {SettingsProvider} from "../../providers/settings/settings";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private setingsService: SettingsProvider) {
  }


  checkColor(){
      return this.setingsService.getColor();
  }

  onChangeColor(toggle: Toggle){
      this.setingsService.changeColor(toggle.checked);
      //return toggle.checked;
  }

}
