import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pageTitle='Login';
  isNotHome= true;
  loading: HTMLIonLoadingElement;

  //Modelo
  user : any = {
    email:'',
    password:''
  }

  admin : any ={
    email:'admin',
    password:'admin123'
  }

  field : string = '';

  constructor(private toastCtrl: ToastController, private router:Router, private loadingCtrl:LoadingController) { }

  ngOnInit() {
    this.cargarLoading('Espere un momento');
    console.log('ngOnInit');
  }

  loginAdmin(){
    if(this.validarModelo(this.admin)){
      this.presentToast('Bienvenido ' + this.user.admin);
      this.router.navigate(['/home']);
    }
    if(this.field)
    this.presentToast('Debes ingresar: ' + this.field)
  }

  login(){
    if(this.validarModelo(this.user)){
      this.presentToast('Bienvenido ' + this.user.email);
      this.router.navigate(['/home']);
    }
    if(this.field)
    this.presentToast('Debes ingresar: ' + this.field)
  }

  validarModelo(model:any){
    for(var[key,value] of Object.entries(model)){
      if(value == ''){
        this.field = key;
        return false;
      }
    }
    return true;
  }

  async presentToast(message:string, duration?:number) {
    const toast = await this.toastCtrl.create({
      message: message, 
      duration: duration?duration:2000,
      position: 'bottom'
    });
    await toast.present();
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
