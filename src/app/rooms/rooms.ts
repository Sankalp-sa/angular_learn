export interface Room {
    totalRooms?: number;
    availableRooms?: number;
    bookedRooms?: number;
}

export interface RoomList {
    roomNumber?: string;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkInDate: Date;
    checkOutDate: Date;
    rating: number;
}