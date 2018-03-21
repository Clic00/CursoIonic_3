import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private mooviePrivider: MoovieProvider) {
  }

  ionViewDidLoad() {
    this.mooviePrivider.getLatestMovies()
      .subscribe( 
        data => {
          console.log(data)
        },
        error => {
          console.log(error)
        }
      );
  }

  public somaDoisNumeros(num1: number, num2: number): void{
    console.log(num1 + num2);
  }

}
