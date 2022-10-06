import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  pageTitle = 'Vehiculos';
  busqueda:string = '';
  loading: HTMLIonLoadingElement;

  listaPersonajes : any = [
    {
      id: 1,
      name: 'FZN150',
      homeworld: 'Yamaha',
      wiki: 'http://starwars.wikia.com/wiki/Luke_Skywalker',
      image: 'https://www.yamahamotos.cl/wp-content/uploads/2016/09/fzn150-yamaha.jpg',
    },
    {
      id: 2,
      name: 'C-3PO',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/C-3PO',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png',
    },
    {
      id: 3,
      name: 'R2-D2',
      homeworld: 'naboo',
      wiki: 'http://starwars.wikia.com/wiki/R2-D2',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png',
    },
    {
      id: 4,
      name: 'Darth Vader',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/Anakin_Skywalker',
      image: 'https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg',
    },
    {
      id: 5,
      name: 'Leia Organa',
      homeworld: 'alderaan',
      wiki: 'http://starwars.wikia.com/wiki/Leia_Organa',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png',
    },
   {
      id: 6,
      name: 'Owen Lars',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/Owen_Lars',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png',
    },
    {
      id: 7,
      name: 'Beru Whitesun lars',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/Beru_Whitesun_Lars',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png',
    },
    {
      id: 8,
      name: 'R5-D4',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/R5-D4',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png',
    },
    {
      id: 9,
      name: 'Biggs Darklighter',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/Biggs_Darklighter',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png',
    },
    {
      id: 10,
      name: 'Obi-Wan Kenobi',
      homeworld: 'stewjon',
      wiki: 'http://starwars.wikia.com/wiki/Obi-Wan_Kenobi',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg',
    },
    {
      id: 11,
      name: 'Anakin Skywalker',
      homeworld: 'tatooine',
      wiki: 'http://starwars.wikia.com/wiki/Anakin_Skywalker',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png',
    },
    {
      id: 12,
      name: 'Wilhuff Tarkin',
      homeworld: 'eriadu',
      wiki: 'http://starwars.wikia.com/wiki/Wilhuff_Tarkin',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg',
    }

  ];

  constructor(private navCtrl: NavController, private loadingCtrl:LoadingController) { }

  ngOnInit() {
    this.cargarLoading('Loading...');
    console.log('ngOnInit');
  }

  goToDetail(personaje:any) :void {
    const navigationExtras: NavigationExtras = {
      queryParams : {
        personaje: JSON.stringify(personaje)
      }
    };
    this.navCtrl.navigateForward(['detalle-personaje/'],navigationExtras);
  }

  buscar(event):void{
    this.busqueda = event.detail.value;
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
