import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  person : string;
  text :string;

  ionViewWillEnter(){
      this.person = this.navParams.get('person');
      this.text = this.navParams.get('text');

  }

    closeMe(remove = false){
      this.viewCtrl.dismiss(remove);

    }
}
