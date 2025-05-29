import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit {

  @Input() Rooms : RoomList[] | null = [];
  @Input() roomDetails : Room = {};

  @Output() SelectedRoom = new EventEmitter<RoomList>();

  constructor() { }

  ngOnInit(): void {
  }

  selectRoom(room: RoomList) {
    this.SelectedRoom.emit(room);
  }

}
