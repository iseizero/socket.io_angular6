import { ChatService } from './chat.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mensajes:any [] = [];
  texto:any;
  

  constructor(
    private chat: ChatService
  ){}
  
  ngOnInit() {
    this.getMensages();
  }

  enviarMensage(mensaje){
    this.chat.sendMessage(mensaje);
  }

  getMensages(){
    this.chat.getMessage().subscribe((response: any) => {
      this.mensajes.push(response);      
    }, (e) => {
      console.log('no es posible obtener la info del socket');
    })
  }
}
