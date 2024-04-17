class Car {
  private static nextId: number = 1;
  private id: number;
  private brand: string;
  private model: string;
  private year: number;
  private plate: string;
  private pricePerDay: number;
  private available: boolean;

  constructor(brand: string, model: string, year: number, plate: string, pricePerDay: number, available: boolean) {
    this.id = Car.nextId++;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.plate = plate;
    this.pricePerDay = pricePerDay;
    this.available = available;
  }

  getId(): number {
    return this.id;
  }

  getBrand(): string {
    return this.brand;
  }

  setBrand(brand: string): void {
    this.brand = brand;
  }

  getModel(): string {
    return this.model;
  }

  setModel(model: string): void {
    this.model = model;
  }

  getYear(): number {
    return this.year;
  }

  setYear(year: number): void {
    this.year = year;
  }

  getPlate(): string {
    return this.plate;
  }

  setPlate(plate: string): void {
    this.plate = plate;
  }

  getPricePerDay(): number {
    return this.pricePerDay;
  }

  setPricePerDay(price: number): void {
    this.pricePerDay = price;
  }

  isAvailable(): boolean {
    return this.available;
  }

  setAvailable(available: boolean): void {
    this.available = available;
  }
}

export default Car;
