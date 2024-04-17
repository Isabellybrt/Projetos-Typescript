import { Car, Client, Rental } from '../models'; // Importe as classes apropriadas do seu aplicativo

class SystemLocationController {
  private cars: Car[] = [];
  private clients: Client[] = [];
  private rentals: Rental[] = [];

  registerCar(car: Car): void {
    this.cars.push(car);
  }

  registerClient(client: Client): void {
    this.clients.push(client);
  }

  makeRental(clientId: number, carId: number, initialDate: Date, endingDate: Date): void {
    client = this.clients.find(client => client.getId() === clientId);
    car = this.cars.find(car => car.getId() === carId);
    rental = new Rental(client, car, initialDate, endingDate);
  }

  clientHasRentals(clientId: number): boolean {
    client = this.clients.find(client => client.getId() === clientId);
    return client.hasRentals();
    // Lógica para verificar se um cliente tem aluguéis
  }

  removeClient(clientId: number ): void {
    client = this.clients.find(client => client.getId() === clientId);
    this.clients.splice(this.clients.indexOf(client), 1);
    // Lógica para remover um cliente, considerando aluguéis associados
  }

  removeCar(carId: number): void {
    car = this.cars.find(car => car.getId() === carId);
    this.cars.splice(this.cars.indexOf(car), 1);
    // Lógica para remover um carro, considerando aluguéis associados
  }

  // Outros métodos de listagem e funcionalidades

  listAvailableCars(): Car[] {
    return this.cars.filter((car) => car.isAvailable());
  }

  listRentedCars(): Car[] {
    return this.cars.filter((car) => !car.isAvailable());
  }

  listClients(): Client[] {
    return this.clients;
  }

  listOngoingRentals(): Rental[] {
    return this.rentals;
  }
}

export default SystemLocationController;
