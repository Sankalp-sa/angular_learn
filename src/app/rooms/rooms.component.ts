import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';
import { Observable, Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName: string = 'Hotel California';

  numberOfRooms: number = 100;

  isVisible: boolean = true;

  rooms: Room = {
    totalRooms: 100,
    availableRooms: 50,
    bookedRooms: 50
  }

  selectedRoom!: RoomList;

  roomList : RoomList[] = [];

  rooms$ = this.roomService.getRooms$;

  roomCount$ = this.roomService.getRooms$.pipe(
    map(rooms => rooms.length)
  );

  strem = new Observable(observer => {
    observer.next('sankalp1');
    observer.next('sankalp2');
    observer.next('sankalp3');
    observer.complete();
  })

  subscription !: Subscription;

  constructor(private roomService: RoomsService) { }

  ngOnInit(): void {

    this.roomService.getPhotos().subscribe((event) => {
      if (event.type === HttpEventType.Response) {
        console.log('Photos fetched successfully:', event.body);
      } else if (event.type === HttpEventType.DownloadProgress) {
        console.log('Download progress:', event.loaded, 'bytes loaded');
      }
    });

    // this.subscription = this.roomService.getRooms().subscribe(rooms => this.roomList = rooms);
    this.strem.subscribe({
      next: (value) => console.log('Next value:', value),
      error: (error) => console.error('Error:', error),
      complete: () => console.log('Stream completed')
    });
  } 

  toggle() {
    this.isVisible = !this.isVisible;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {

    const newRoom: RoomList = {
      roomType: 'Suite Room',
      amenities: 'Free Wi-Fi, Air Conditioning, TV, Mini Bar',
      price: 200,
      photos: 'https://example.com/suite-room.jpg',
      checkInDate: new Date('2023-10-01'),
      checkOutDate: new Date('2023-10-05'),
      rating: 4.5
    };

    console.log('Adding new room:', newRoom);


    this.roomService.addRoom(newRoom).subscribe({
      next: (rooms) => {
        console.log('Room added successfully:', rooms);
        this.roomList = rooms; // Update the room list with the new data
      },
      error: (error) => {
        console.error('Error adding room:', error);
      }
    });

    // this.roomList = [...this.roomList, newRoom];


  }

  editRoom() {

    const room: RoomList = {
      roomType: 'Deluxe Room',
      amenities: 'Free Wi-Fi, Air Conditioning, TV, Mini Bar',
      price: 150,
      photos: 'https://example.com/deluxe-room.jpg',
      checkInDate: new Date('2023-10-01'),
      checkOutDate: new Date('2023-10-05'),
      rating: 4.0
    };

    this.roomService.editRoom(room).subscribe({
      next: (rooms) => {
        console.log('Room edited successfully:', rooms);
        this.roomList = rooms; // Update the room list with the new data
      },
      error: (error) => {
        console.error('Error editing room:', error);
      }
    });
  
  }

  // ngOnDestroy() {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }

}
