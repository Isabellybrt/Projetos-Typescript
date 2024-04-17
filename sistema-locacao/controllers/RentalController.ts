import MenuView from '../views/MenuView';
import CarController from './CarController';
import ClientController from './ClientController';
import RentalView from '../views/RentalView';
import { Rental } from '../models/Rental';

class RentalController {
  private rentals: Rental[] = [];
  private rentalView: RentalView;
  private menuView: MenuView;
  private carController: CarController;
  private clientController: ClientController;

  constructor(menuView: MenuView, rentalView: RentalView, carController: CarController, clientController: ClientController) {
    this.menuView = menuView;
    this.rentalView = rentalView;
    this.carController = carController;
    this.clientController = clientController;
  }

  async manageRentals(): Promise<void> {
    let choice: number;

    do {
      choice = await this.menuView.displayManageRentalsMenu();

      switch (choice) {
        case 1:
          await this.createRental();
          break;
        case 2:
          await this.listRentals();
          break;
        case 3:
          console.log("Voltando para o Menu Principal...");
          break;
        default:
          console.log("Opção inválida. Tente novamente.");
      }
    } while (choice !== 3);
  }

  private async createRental(): Promise<void> {
    const selectedClient = await this.clientController.selectClient();
    const selectedCar = await this.carController.selectAvailableCar();
    const initialDate = await this.rentalView.askForInitialDate();
    const endingDate = await this.rentalView.askForEndingDate();

    const rental = new Rental(selectedClient, selectedCar, initialDate, endingDate);
    this.rentals.push(rental);

    console.log("Aluguel registrado com sucesso.");
    await this.rentalView.askToContinue("Pressione Enter para continuar...");
  }

  private async listRentals(): Promise<void> {
    if (this.rentals.length === 0) {
      console.log("Não existem aluguéis registrados.");
    } else {
      console.log("Lista de Aluguéis:");
      this.rentals.forEach((rental) => {
        this.rentalView.displayRentalDetails(rental);
      });
    }

    await this.rentalView.askToContinue("Pressione Enter para retornar ao menu de aluguéis...");
  }
}

export default RentalController;
