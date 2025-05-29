import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
              private http: HttpClient) { 
    console.log('API Endpoint:', this.config.apiEndpoint);
  }

  roomList : RoomList[] = [
  ];

  getRooms$ = this.http.get<RoomList[]>(`${this.config.apiEndpoint}/api/rooms`);

  getRooms() {
    const headers = new HttpHeaders({
      'token' : '1234567890',
    });
    return this.http.get<RoomList[]>(`${this.config.apiEndpoint}/api/rooms`,
      { headers: headers, observe: 'response' }
    );
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>(`${this.config.apiEndpoint}/api/rooms`, room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`${this.config.apiEndpoint}/api/rooms/${room.roomNumber}`, room);
  }

  getPhotos(){
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true,
      responseType: 'json'
    }
    );
    return this.http.request(request);
  }

}
