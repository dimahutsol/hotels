export interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
  datesOfTravel: string[];
  boardBasis: string;
  rooms: Room[];
}

export interface Room {
  roomType: string;
  amount: number;
}
