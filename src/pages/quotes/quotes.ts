import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {MyquotesProvider} from "../../providers/myquotes/myquotes";


@IonicPage()
@Component({
    selector: 'page-quotes',
    templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
    quotesGroup = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private alertCtrl: AlertController,
                private myQuotes : MyquotesProvider
    ) {
    }


    ngOnInit(){
        this.quotesGroup = this.navParams.data;
    }


    onFavorieClick(selectedQuote){
        let alert = this.alertCtrl.create({
            title: 'Confirm Favorite',
            message: 'Do you want to favorite this quote?',
            buttons: [
                {
                    text: 'Yes, Go Ahead',
                    handler: () => {
                        this.myQuotes.addQuoteToFavorite(selectedQuote);
                    }
                },
                {
                    text: 'No, Dismiss',
                    role: 'cancel',
                    handler: () => {
                        console.log('cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    }




    isFavorite(quote){

        console.log(this.myQuotes.isThisQuoteAlreadyFavorie(quote));
        //return this.myQuotes.isThisQuoteAlreadyFavorie(quote);
    }

}
