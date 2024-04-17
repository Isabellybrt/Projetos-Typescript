import MenuView from '../views/MenuView';
import ClientView from '../views/ClientView';
import Client from '../models/Client';

class ClientController {
    private clients: Client[] = [];
    private clientView: ClientView;
    private menuView: MenuView;

    constructor(menuView: MenuView, clientView: ClientView) {
        this.menuView = menuView;
        this.clientView = clientView;
    }

    async manageClients(): Promise<void> {
        let choice: number;

        do {
            choice = await this.menuView.displayManageClientsMenu();

                switch (choice) {
                  case 1:
                      await this.addClient();
                      break;
                  case 2:
                      await this.listClients();
                      break;
                  case 3:
                      await this.deleteClient(); // Chama o método para excluir clientes
                      break;
                  case 4:
                      console.log("Voltando para o Menu Principal...");
                      break;
                  default:
                      console.log("Opção inválida. Tente novamente.");
            }
        } while (choice !== 3);
    }

    private async addClient(): Promise<void> {
      const newClient = await this.clientView.askForClientDetails();
      this.clients.push(newClient);

      console.log(`Cliente adicionado: Name ${newClient.getName()}, CPF ${newClient.getCPF()}, Email ${newClient.getEmail()}, Phone ${newClient.getPhone()}`);

      await this.clientView.askToContinue("Pressione Enter para continuar...");
    }



    private async listClients(): Promise<void> {
      if (this.clients.length === 0) {
          console.log("Não existem clientes cadastrados.");
      } else {
          console.log("Lista de Clientes:");
          this.clients.forEach((client) => {
              this.clientView.displayClientDetails(client);
          });
      }

      await this.clientView.askToContinue("Pressione Enter para retornar ao menu de clientes...");
    }

    async selectClient(): Promise<Client> {
        if (this.clients.length === 0) {
            console.log("Não existem clientes cadastrados.");
            return null; // Retorna null ou lança uma exceção, dependendo da lógica da sua aplicação
        }

        console.log("Selecione um cliente:");

        for (let i = 0; i < this.clients.length; i++) {
            console.log(`${i + 1}. ${this.clients[i].getName()}`);
        }

        const selectedClientIndex = await this.menuView.askForNumber("Selecione o número do cliente: ");
        if (selectedClientIndex >= 1 && selectedClientIndex <= this.clients.length) {
            return this.clients[selectedClientIndex - 1];
        } else {
            console.log("Número de cliente inválido.");
            return null; // Retorna null ou lança uma exceção, dependendo da lógica da sua aplicação
        }
    }

  async selectClientById(): Promise<Client | null> {
      const clientId = await this.menuView.askForNumber("Informe o ID do cliente que deseja excluir: ");
      const client = this.clients.find((client) => client.getId() === clientId);

      if (client) {
          return client;
      } else {
          console.log("Cliente com o ID fornecido não foi encontrado.");
          return null;
      }
  }

  private async deleteClient(): Promise<void> {
      const clientToDelete = await this.selectClientById();
      if (clientToDelete) {
          const clientIndex = this.clients.indexOf(clientToDelete);
          this.clients.splice(clientIndex, 1);
          console.log(`Cliente com o ID ${clientToDelete.getId()} foi excluído com sucesso.`);
      }

  }


}

export default ClientController;
