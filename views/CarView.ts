import * as readline from 'readline';
import Car from '../models/Car';

class CarView {
  private readLine: readline.Interface;
  private counterIdCar: number = 1;

  constructor() {
    this.readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async askForCarDetails(): Promise<Car> {
    return new Promise((resolve) => {
      this.readLine.question("Digite a marca do carro: ", (brand) => {
        this.readLine.question("Digite o modelo do carro: ", (model) => {
          this.readLine.question("Digite o ano do carro: ", (year) => {
            this.readLine.question("Digite a placa do carro: ", (plate) => {
              this.readLine.question("Digite o preço por dia de aluguel: ", (pricePerDay) => {
                const car: Car = new Car(brand, model, parseInt(year), plate,         parseFloat(pricePerDay), true);
                resolve(car);
              });
            });
          });
        });
      });
    });
  }

  askDetailsCar(car: Car): void {
    console.log(`ID: ${car.getId()}, Marca: ${car.getBrand()}, Modelo: ${car.getModel()}`);
  }

  async askToContinue(mensagem: string): Promise<void> {
    return new Promise((resolve) => {
      this.readLine.question(mensagem, () => {
        resolve();
      });
    });
  }

  close(): void {
    this.readLine.close();
  }
}

export default CarView;
