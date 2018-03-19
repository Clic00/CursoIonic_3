import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nomeUsuario: string = 'José Levy feeds';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.somaDoisNumeros(6, 5);
  }

  public somaDoisNumeros(num1: number, num2: number): void{
    alert(num1 + num2);
  }

}
