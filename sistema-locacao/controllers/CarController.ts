import MenuView from '../views/MenuView';
import CarView from '../views/CarView';
import Car from '../models/Car';

class CarController {
    private cars: Car[] = [];
    private carView: CarView;
    private menuView: MenuView;

    constructor(menuView: MenuView, carView: CarView) {
        this.menuView = menuView;
        this.carView = carView;
    }

    async manageCars(): Promise<void> {
    let choice: number;

    do {
        choice = await this.menuView.displayManageCarsMenu();

        switch (choice) {
            case 1:
                // Adicionar Carro
                await this.addCar();
                break;
            case 2:
                // Listar Carros
                await this.listCars();
                break;
            case 3:
                // Deletar Carro
                await this.deleteCar();
                break;
            case 4:
                console.log("Voltando para o Menu Principal...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (choice !== 4);
    }

    private async addCar(): Promise<void> {
      const newCar = await this.carView.askForCarDetails();
      this.cars.push(newCar);

      console.log(`Carro adicionado: ID ${newCar.getId()}, Marca ${newCar.getBrand()}, Modelo ${newCar.getModel()}, Placa ${newCar.getPlate()}`);

      await this.carView.askToContinue("Pressione Enter para continuar...");
    }



    private async listCars(): Promise<void> {
      if (this.cars.length === 0) {
          console.log("Não existem carros cadastrados.");
      } else {
          console.log("Lista de Carros:");
          this.cars.forEach((car) => {
              this.carView.displayCarDetails(car);
          });
      }

      await this.carView.askToContinue("Pressione Enter para retornar ao menu de carros...");
    }

    async selectAvailableCar(): Promise<Car> {
        const availableCars = this.cars.filter((car) => car.isAvailable());

        if (availableCars.length === 0) {
            console.log("Não existem carros disponíveis para alugar.");
            return null; // Retorna null ou lança uma exceção, dependendo da lógica da sua aplicação
        }

        console.log("Selecione um carro disponível para alugar:");

        for (let i = 0; i < availableCars.length; i++) {
            console.log(`${i + 1}. Modelo: ${availableCars[i].getModel()}, Placa: ${availableCars[i].getPlate()}`);
        }

        const selectedCarIndex = await this.menuView.askForNumber("Selecione o número do carro: ");
        if (selectedCarIndex >= 1 && selectedCarIndex <= availableCars.length) {
            return availableCars[selectedCarIndex - 1];
        } else {
            console.log("Número de carro inválido.");
            return null; // Retorna null ou lança uma exceção, dependendo da lógica da sua aplicação
        }
    }

  async selectCarById(): Promise<Car | null> {
      const carId = await this.menuView.askForNumber("Informe o ID do carro que deseja excluir: ");
      const car = this.cars.find((car) => car.getId() === carId);

      if (car) {
          return car;
      } else {
          console.log("Carro com o ID fornecido não foi encontrado.");
          return null;
      }
  }

  private async deleteCar(): Promise<void> {
      const carToDelete = await this.selectCarById();
      if (carToDelete) {
          const carIndex = this.cars.indexOf(carToDelete);
          this.cars.splice(carIndex, 1);
          console.log(`Carro com o ID ${carToDelete.getId()} foi excluído com sucesso.`);
      }
  }


}

export default CarController;
