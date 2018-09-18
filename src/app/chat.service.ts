import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators'

@Injectable()
export class ChatService {

    constructor(
        private socket: Socket        
    ) {}

    sendMessage(msg: string){
        this.socket.emit('chat message', msg);
    }

    getMessage() {
        return this.socket
            .fromEvent("chat message")
            .pipe(
            map((data: any) => data));
    }

    
}