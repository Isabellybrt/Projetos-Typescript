import readline from 'readline';
import MenuView from './views/MenuView';
import CarView from './views/CarView';
import ClientView from './views/ClientView';
import RentalView from './views/RentalView';
import CarController from './controllers/CarController';
import ClientController from './controllers/ClientController';
import RentalController from './controllers/RentalController';


const menuView = new MenuView();
const carView = new CarView();
const clientView = new ClientView();
const rentalView = new RentalView();

const carController = new CarController(menuView, carView);
const clientController = new ClientController(menuView, clientView);
const rentalController = new RentalController(menuView, rentalView, carController, clientController);

const main = () => {
  menuView.displayMainMenu().then(async (choice) => {
    switch (choice) {
      case 1:
        await carController.manageCars();
        menuView.closeMenu()
        break;
      case 2:
        await clientController.manageClients();
        menuView.closeMenu()
        break;
      case 3:
        await rentalController.manageRentals();
        menuView.closeMenu()
        break;
      case 0:
        console.log("Saindo...");
        menuView.closeMenu()
        break;
      default:
        console.log("Opção inválida. Tente novamente!");
        main();
        break;
    }
  });
};

main();
