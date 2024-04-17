// cria classe clientes
class Client {
  private static nextId: number = 1;
  private id: number;
  private name: string;
  private cpf: string; 
  private email: string; 
  private phone: number

  constructor(name: string, cpf: string, email: string, phone: number) {
    this.id = Client.nextId++;
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.phone = phone;  
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
  return this.name;
  }

  setName(name: string): void {
  this.name = name;
  }

  getCPF(): string {
    return this.cpf;
  }

  setCPF(cpf: string): void {
    this.cpf = cpf;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getPhone(): number {
    return this.phone;
  }

  setPhone(phone: number): void {
    this.phone = phone;
  }

}
export default Client;