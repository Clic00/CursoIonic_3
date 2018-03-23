import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { DetalhesPage } from '../detalhes/detalhes';

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
  public refresher;
  public isRefreshing: boolean = false;

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
    private moovieProvider: MoovieProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.presentLoading();    
  }
  
  ionViewDidEnter() {
    this.loadMovies();
  }

  public loadMovies() {
    
    this.moovieProvider.getLatestMovies()
      .subscribe(
        response => {
          console.log(response);
          this.listaDeFilmes = response['results'];
          this.loader.dismiss();
          if(this.isRefreshing){
            this.refresher.complete();
            this.isRefreshing = false;
          }
        },
        error => {
          console.log(error);
          this.loader.dismiss();          
          if(this.isRefreshing){
            this.refresher.complete();
            this.isRefreshing = false;
          }          
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

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.loadMovies();
  }

  goDetails(filme) {
    this.navCtrl.push(DetalhesPage, { id : filme.id});
  }
}
