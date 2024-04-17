import * as readline from 'readline';

class MenuView {
  private readLine: readline.Interface;

  constructor() {
      this.readLine = readline.createInterface({
          input: process.stdin,
          output: process.stdout
      });
    }

    displayMainMenu(): Promise<number> {
        return new Promise((resolve) => {
            console.clear(); // Limpa a tela
            console.log("===== Menu Principal =====");
            console.log("1. Gerenciar Carros");
            console.log("2. Gerenciar Clientes");
            console.log("3. Gerenciar Aluguéis");
            console.log("0. Sair");

            this.readLine.question("Selecione uma opção: ", (choice) => {
                resolve(parseInt(choice));
            });
        });
    }


    closeMenu(): void {
        this.readLine.close();
    }



    displayManageCarsMenu(): Promise<number> {
        return new Promise((resolve) => {
            console.clear(); // Limpa a tela
            console.log("===== Menu de Gerenciamento de Carros =====");
            console.log("1. Adicionar Carro");
            console.log("2. Listar Carros");
            console.log("3. Excluir Carros");
            console.log("4. Voltar para o Menu Principal");

            this.readLine.question("Selecione uma opção: ", (choice) => {
                resolve(parseInt(choice));
            });
        });
    }


  displayManageClientsMenu(): Promise<number> {
      return new Promise((resolve) => {
          console.clear(); // Limpa a tela
          console.log("===== Menu de Gerenciamento de Clientes =====");
          console.log("1. Adicionar Cliente");
          console.log("2. Listar Clientes");
          console.log("3. Excluir Clientes");
          console.log("4. Voltar para o Menu Principal");

          this.readLine.question("Selecione uma opção: ", (choice) => {
              resolve(parseInt(choice));
          });
      });
  }

  displayManageRentalsMenu(): Promise<number> {
    return new Promise((resolve) => {
      console.clear(); // Limpa a tela
      console.log("===== Menu de Gerenciamento de Aluguéis =====");
      console.log("1. Adicionar Aluguel");
      console.log("2. Listar Aluguéis");
      console.log("3. Voltar para o Menu Principal");

      this.readLine.question("Selecione uma opção: ", (choice) => {
        resolve(parseInt(choice));
      });
    });
  }

  askForNumber(prompt: string): Promise<number> {
      return new Promise((resolve) => {
          this.readLine.question(prompt, (choice) => {
              const number = parseInt(choice);

              if (!isNaN(number)) {
                  resolve(number);
              } else {
                  console.log("Por favor, insira um número válido.");
                  this.askForNumber(prompt).then(resolve);
              }
          });
      });
  }

    // Adicione métodos semelhantes para gerenciar clientes e aluguéis conforme necessário
}

export default MenuView;