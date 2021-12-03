import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'



@Injectable()
export class ChatService {

  constructor(private http: HttpClient) { }

  getChatByRoom(room , patientName) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:9100/users/chat/' + room +'/'+patientName )
        .subscribe(res => {
          console.log(res)
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
   getChatByRoomID(room ) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:9100/users/chatR/' + room  )
        .subscribe(res => {
          console.log(res)
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveChat(data) {
    return new Promise((resolve, reject) => {
        this.http.post('http://localhost:9100/users/chatp', data)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


}
