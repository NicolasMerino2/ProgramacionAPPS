import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle = 'home';

  monto:number= 123456789.45;

  loading: HTMLIonLoadingElement;

  mensaje:string= "Hola!";

  constructor(private loadingCtrl:LoadingController) { }

  ngOnInit() {
    this.cargarLoading('Loading...');
      console.log('ngOnInit');
  }

  cargarLoading(message:string){
    this.presentLoading(message);

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(message:string){
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();
  }
}
