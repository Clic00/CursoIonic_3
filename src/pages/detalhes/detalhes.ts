import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
  providers: [
    MoovieProvider
  ]
  
})
export class DetalhesPage {

  public filme;
  public id: number;
  public loader;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public moovieProvider: MoovieProvider) {
  }

  ionViewDidLoad() {
    this.presentLoading();    
  }

  ionViewDidEnter() {
    this.id = this.navParams.get("id");
    this.loadDetails(this.id);
  }

  loadDetails(id: number) {
    this.moovieProvider.getDetailsMovie(id)
      .subscribe(
        response => {
          console.log(response);
          this.filme = response;
          this.loader.dismiss();
        },
        error => {
          console.log('Erro: ' + error);
          this.loader.dismiss();          
        }
      );
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde por favor...",
    });
    this.loader.present();
  }  
}
