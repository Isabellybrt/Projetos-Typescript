import * as readline from 'readline';
import {Rental} from '../models/Rental';

class RentalView {
  private readLine: readline.Interface;

  constructor() {
    this.readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async askForInitialDate(): Promise<Date> {
    return new Promise((resolve) => {
      this.readLine.question("Data inicial do aluguel (AAAA-MM-DD): ", (dateString) => {
        const date = new Date(dateString);

        if (!isNaN(date.getTime())) {
          resolve(date);
        } else {
          console.log("Data inválida. Por favor, insira a data no formato AAAA-MM-DD.");
          this.askForInitialDate().then(resolve);
        }
      });
    });
  }

  async askForEndingDate(): Promise<Date> {
      return new Promise((resolve) => {
          this.readLine.question("Data final do aluguel (AAAA-MM-DD): ", (dateString) => {
              const date = new Date(dateString);

              if (!isNaN(date.getTime())) {
                  resolve(date);
              } else {
                  console.log("Data inválida. Por favor, insira a data no formato AAAA-MM-DD.");
                  this.askForEndingDate().then(resolve);
              }
          });
      });
  }

  displayRentalDetails(rental: Rental): void {
      console.log('Detalhes do Aluguel:');
      console.log(`Cliente: ${rental.client.getName()}, Carro: ${rental.car.getBrand()} ${rental.car.getModel()}`);
      console.log(`Data de Início: ${rental.initialDate.toISOString().slice(0, 10)}`);
      console.log(`Data de Término: ${rental.endingDate.toISOString().slice(0, 10)}`);
      console.log(`Custo: ${rental.calculateCost()}`);
  }

  askToContinue(message: string = "Pressione Enter para continuar..."): Promise<void> {
    return new Promise((resolve) => {
      this.readLine.question(message, () => {
        resolve();
      });
    });
  }

  // Outros métodos
}

export default RentalView;
