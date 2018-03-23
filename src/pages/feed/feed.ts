import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

  public loader;

  public objeto_feed = {
    titulo: "Jose Levy",
    data: "Março 19, 2018",
    descricao: "Criando um App do zero com udemy.",
    qtdLikes: 120,
    qtdComments: 4,
    timeComments: "07 ago"
  }

  public listaDeFilmes: Array<any>[];
  public nomeUsuario: string = 'José Levy feeds';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mooviePrivider: MoovieProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.presentLoading();
    this.mooviePrivider.getLatestMovies()
      .subscribe(
        response => {
          console.log(response);
          this.listaDeFilmes = response['results'];
          this.loader.dismiss();
        },
        error => {
          console.log(error);
          this.loader.dismiss();          
        }
      );

  }

  public somaDoisNumeros(num1: number, num2: number): void {
    console.log(num1 + num2);
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde por favor...",
    });
    this.loader.present();
  }
}
