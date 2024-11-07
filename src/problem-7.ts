class Car {
  constructor(public make: string, public model: string, public year: number) {}

  //   getCarAge method
  getCarAge(): number {
    const currentYear: number = new Date().getFullYear();

    const carAge = currentYear - this.year;

    return carAge;
  }
}
