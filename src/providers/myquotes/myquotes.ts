
import { Injectable } from '@angular/core';

@Injectable()
export class MyquotesProvider {

  constructor() {

  }

    private favoriteQuotes = [{
        id: '4',
        person: 'John Wooden',
        text: 'Ability may get you to the top, but it takes character to keep you there.'
    }];

    addQuoteToFavorite(selectedQuote){
        this.favoriteQuotes.push(selectedQuote);
        //console.log(this.favoriteQuotes);
    }

    removeQuotes(selectdQuote){
        const posision = this.favoriteQuotes.findIndex((crntQote)=>{
            return crntQote.id == selectdQuote.id;
        });

        this.favoriteQuotes.splice(posision,1);
    }


    getFacoriteQuotes(){
        return this.favoriteQuotes.slice();
    }

    isThisQuoteAlreadyFavorie(quote){

        this.favoriteQuotes.find((crntElement)=>{
            //console.log(crntElement.id == quote.id);
            return crntElement.id == quote.id;
        })
    }
}
