class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  //   getCarAge method
  getCarAge(): number {
    const currentYear: number = new Date().getFullYear();

    const carAge = currentYear - this.year;
    console.log("Car  carAge:", carAge);

    return carAge;
  }
}

// const car = new Car("Honda", "Civic", 2019);
// console.log(car.getCarAge());
