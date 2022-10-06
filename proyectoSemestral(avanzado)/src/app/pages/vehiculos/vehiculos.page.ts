import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {

  pageTitle = 'Vehiculos';
  busqueda:string = '';

  listaVehiculos : any =[
    {
      id: 1,
      name: 'Jeep Wrangler',
      marca: 'Jeep',
      patente: '',
      color: 'Blanco',
      capacidad:'6',
      nombreConductor:'Jesús Javier González',	
      cobroPersona:'',
      imagen:'https://www.jeep.cl/wp-content/uploads/sites/3/2020/07/Blanco_Sport.png',	
    },
    {
      id: 2,
      name: 'Nissan Rogue',
      marca: 'Nissan',
      patente:'',
      color:'Rojo',
      capacidad:'4',
      nombreConductor:'Andrés Romo'   ,
      cobroPersona:'',
      imagen:'https://es.nissanusa.com/content/dam/Nissan/us/vehicles/rogue_sport/2022/gallery/ext-360/nbl/08.png',
    },
    {
      id: 3,
      name: 'Yamaha FZN150',
      marca: 'Yamaha',
      patente:'',
      color: 'Rojo',
      capacidad:'2',
      nombreConductor:'José Miguel Ibarra'  ,
      cobroPersona:'',
      imagen:'https://www.yamahamotos.cl/wp-content/uploads/2016/09/fzn150-yamaha.jpg',
    },
    {
      id: 4,
      name:'Suzuki Baleno 2022',
      marca: 'tatooine',
      patente: '',
      color:'Blanco Invierno',
      capacidad:'4',
      nombreConductor:'Ramón Echevarría',
      cobroPersona:'',
      imagen:'https://suzukilaguna.com/img/baleno/blanco-invierno-beleno.png',
    },
    {
      id: 5,
      name: 'Chevrolet Onyx',
      marca: 'tatooine',
      patente: '',
      color:'Azul',
      capacidad:'4',
      nombreConductor:'José Vicente Torres'    ,
      cobroPersona:'',
      imagen:'https://www.chevrolet.cl/content/dam/chevrolet/south-america/chile/espanol/index/cars/2021-onix-premier/colorizer/01-images/2022/colorizer-onix-my23-azul-seeker-3-4-frente.jpg?imwidth=960',
    },
    {
      id: 6,
      name: 'Kia Morning',
      marca: 'Kia',
      patente: '',
      color: 'Blanco',
      capacidad:'4',
      nombreConductor:'Andrea Velez',
      cobroPersona:'',
      imagen:'https://pbs.twimg.com/media/DxvtntXX0AA5ETJ.jpg',
    },
    {
      id: 7,
      name: 'Seat Ibiza',
      marca: 'Seat',
      patente:'',
      color:'Negro',
      capacidad:'4',
      nombreConductor:'Marisol Barrios',
      cobroPersona:'',
      imagen:'https://awscdn.seat.cl/media/Kwc_Basic_Image_Component.csTheme_Model_Colors_Slider_Child_Component>child_large/27434-261535-slider-169494-large/dh-766-8ef4d7/3d5c8977/1662990193/item4-resizedviewport-scale-vehicleexteriormodelimage.png',
    },
    {
      id: 8,
      name: 'Chevrolet sail',
      marca: 'Chevrolet',
      patente: '',
      color:'Plata Oscuro',
      capacidad:'4',
      nombreConductor:'Octavio Saldaña',
      cobroPersona:'',
      imagen:'https://www.chevrolet.cl/content/dam/chevrolet/south-america/chile/espanol/index/cars/2019-sail/2021/colorizer/01-images/chevrolet-chile-sail-colorizer-plata-oscuro.png?imwidth=960',
    },
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToDetail(vehiculo:any) :void {
    const navigationExtras: NavigationExtras = {
      queryParams : {
        vehiculo: JSON.stringify(vehiculo)
      }
    };
    this.navCtrl.navigateForward(['detalle-vehiculo/'],navigationExtras);
  }

  buscar(event):void{
    this.busqueda = event.detail.value;
  }

  
}
