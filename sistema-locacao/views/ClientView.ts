import * as readline from 'readline';
import Client from '../models/Client';

class ClientView {
  private readLine: readline.Interface;
  private carIdCounter: number = 1;

  constructor() {
    this.readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  private askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.readLine.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

  async askForClientDetails(): Promise<Client> {
      const name = await this.askQuestion("Nome do Cliente: ");
      const cpf = await this.askQuestion("CPF do Cliente: ");
      const email = await this.askQuestion("Email do Cliente: ");
      const phone = await this.askQuestion("Telefone do Cliente: ");

      const client = new Client(name, cpf, email, phone);
      return client;
  }

  displayClientDetails(client: Client): void {
    console.log(`name: ${client.getName()}, cpf: ${client.getCPF()}, email: ${client.getEmail()}, phone: ${client.getPhone()}`);
  }


  async askToContinue(message: string): Promise<void> {
    await this.askQuestion(message);
  }
}

export default ClientView;