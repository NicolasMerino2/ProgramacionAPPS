import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loading: HTMLIonLoadingElement;

  pageTitle = 'home';
  monto:number= 123456789.45;
  mensaje:string ='TeLlevoApp es la aplicacion en la que podrás encontrar los viajes al mejor precio y con la mayor seguridad'

  constructor(private loadingCtrl:LoadingController) { }

  ngOnInit() {
    this.cargarLoading('Espere un momento');
    console.log('ngOnInit');
  }

  cargarLoading(message:string){
    this.presentLoading(message);

    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }

  async presentLoading(message:string){
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();
  }

}
