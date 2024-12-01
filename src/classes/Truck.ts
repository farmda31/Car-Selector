// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// DF NOTE: Updated The Truck class to extend the Vehicle class and implemented the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  // DF NOTE: Declared properties of the Truck class
  // Properties include vin, color, make, model, year, weight,   // top speed, wheels, and towing capacity
  
  //DF NOTE: The types are vin (string), color (string), make (string), model (string), year (number), 
  // weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  constructor(
    vin: string, // combination of letters & numbers
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number,
  ) {
  // DF NOTE: Created a constructor that accepts the properties of the Truck class
  // The constructor calls the constructor of the parent class, Vehicle
  // The constructor initializes the properties of the Truck class
  // The constructor checks if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
  let initializedWheels: Wheel[];

  if (wheels.length !== 4) {
    initializedWheels = [
      new Wheel(16, "Default Tire"),
      new Wheel(16, "Default Tire"),
      new Wheel(16, "Default Tire"),
      new Wheel(16, "Default Tire"),
    ];
  } else {
    initializedWheels = wheels;
  }
    
    super();
    // vin, color, make, model, year, weight, topSpeed, wheels
    this.towingCapacity = towingCapacity;
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;    
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;  
    }

    // DF NOTE: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // DF NOTE: Get the make an model of the vehicle if it exists
    const vehicleMake = vehicle.make;
    const vehicleModel = vehicle.model;

    // DF NOTE: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
    // TODO: If it is, log that the vehicle is being towed
      console.log(`${vehicleMake} ${vehicleModel} is being towed by the ${this.make} ${this.model}.`);
    } else {
    // TODO: If it is not, log that the vehicle is too heavy to be towed
      console.log(`${vehicleMake} ${vehicleModel} is too heavy to be towed by the ${this.make} ${this.model}.`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
 // TODO: The method should call the printDetails method of the parent class
    super.printDetails();
  // TODO: The method should log the details of the Truck
  // TODO: The details should include the VIN, make, model, year, weight, top speed, 
  // color, towing capacity, and wheels
    console.log(`Vin: ${this.vin}`);
    console.log(`Make:${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed:${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.length}`); 
  }
}

// Export the Truck class as the default export
export default Truck;
