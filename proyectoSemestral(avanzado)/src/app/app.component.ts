import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Personajes', url: '/personajes', icon: 'people' },
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Cerrar sesión', url: '/login', icon:'trash'},
    { title: 'Login', url: '/login', icon:'people'},
    { title: 'Vehiculos', url: '/vehiculos', icon:'car'},
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
