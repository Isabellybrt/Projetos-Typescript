import { Client } from "./Client";
import { Car } from "./Car";

export class Rental {
  private static nextId: number = 1;
  private id: number;
  private client: Client;
  private car: Car;
  private initialDate: Date;
  private endingDate: Date;

  constructor( client: Client, car: Car, initialDate: Date, endingDate: Date) {
    this.initialDate = initialDate;
    this.endingDate = endingDate;
    
  }

  // Calcular o custo do aluguel
  calculateCost(): number {
    const daysRented = Math.ceil((this.endingDate.getTime() - this.initialDate.getTime()) / (1000 * 60 * 60 * 24));
    return this.car.pricePerDay * daysRented;
  }
}
