import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {MyquotesProvider} from "../../providers/myquotes/myquotes";
import {QuotePage} from "../quote/quote";
import {SettingsProvider} from "../../providers/settings/settings";

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html',
})
export class FavoritesPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private myQuotesService: MyquotesProvider,
                private modalCtrl: ModalController,
                private setingsService: SettingsProvider) {
    }

    myQuotes = [];

    ionViewWillEnter() {
        //console.log("ionViewWillEnter");
       this.myQuotes = this.myQuotesService.getFacoriteQuotes();
    }


    onViewQuote(quote : object){
        let modal =  this.modalCtrl.create(QuotePage,quote);
        modal.present();
        modal.onWillDismiss((isRemove : boolean)=>{
            if (isRemove){
               return this.onDelete(quote)
            }
        });
    }


    onDelete(quote: object){
        this.myQuotesService.removeQuotes(quote);
        /** reloading changes */
        this.myQuotes = this.myQuotesService.getFacoriteQuotes();
    }

    isAltCheked(){
        return this.setingsService.getColor() ? 'favoriteBg':'altFavoriteBg';
    }
}
