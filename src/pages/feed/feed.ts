import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Jose Levy",
    data: "Março 19, 2018",
    descricao: "Criando um App do zero com udemy.",
    qtdLikes: 120,
    qtdComments: 4,
    timeComments: "07 ago"
  }

  public nomeUsuario: string = 'José Levy feeds';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.somaDoisNumeros(6, 5);
  }

  public somaDoisNumeros(num1: number, num2: number): void{
    console.log(num1 + num2);
  }

}
