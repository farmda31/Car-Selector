// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";
import { inspect } from "util";

// define the Cli class
class Cli {
  // TODO: update the vehicles property to accept Truck and Motorbike objects as well
  // TODO: You will need to use the Union operator to define additional types for the array
  // TODO: See the AbleToTow interface for an example of how to use the Union operator
  // DF NOTE: I added Truck & Motorbike to the vehicles property
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  getSelectedVehicle() {
    return this.vehicles.find(v => v.vin === this.selectedVehicleVin);
  }

  // TODO: Update the constructor to accept Truck and Motorbike objects as well
  // DF NOTE: I added Truck & Motorbike to the vehicles constructor
  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          // DF NOTE: Updated the choices for the array to have Truck and Motorbike
          choices: ['Car','Truck','Motorbike'],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          // create a car
          this.createCar();
          // DF NOTE: added statements to create a truck if the user selects the respective vehicle type
        } else if (answers.vehicleType === 'Truck') {
          this.createTruck();
          // DF NOTE: added statements to create motorbike if the user selects the respective vehicle type
        } else if (answers.vehicleType === 'Motorbike') {
          this.createMotorbike();
        }
      });
  }

  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
      ])
      .then((answers) => {
        const car = new Car(
          // TODO: The generateVin method is static and should be called using the class name
          // Cli, make sure to use Cli.generateVin() for creating a truck and motorbike 
          // as well!
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'wheels',
          message: 'Enter Number of Wheels',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])
      .then((answers) => {
        // TODO: Use the answers object to pass the required properties to the Truck constructor
        // TODO: set the selectedVehicleVin to the vin of the truck
        // TODO: perform actions on the truck
        // TODO: The generateVin method is static and should be called using the class name
        // Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
        const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [],
          parseInt(answers.towingCapacity)
        );
        // TODO: push the truck to the vehicles array push the truck to the vehicles array
        this.vehicles.push(truck);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = truck.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers) => {
        const motorbike = new Motorbike(
            // TODO: The generateVin method is static and should be called using the class name
            // Cli, make sure to use Cli.generateVin() for creating a motorbike as well!
            Cli.generateVin(),
            // TODO: Use the answers object to pass the required properties to the Motorbike constructor
            answers.color,
            answers.make,
            answers.model,
            parseInt(answers.year),
            parseInt(answers.weight),
            parseInt(answers.topSpeed),
            []
          );
          // TODO: push the motorbike to the vehicles array
          // push the motorbike to the vehicles array
          this.vehicles.push(motorbike);
          // set the selectedVehicleVin to the vin of the motorbike
          // TODO: set the selectedVehicleVin to the vin of the motorbike
          this.selectedVehicleVin = motorbike.vin;
          // TODO: perform actions on the motorbike
          // perform actions on the motorbike
          this.performActions();
      });
  }

  // method to find a vehicle to tow
  // TODO: add a parameter to accept a truck object
  findVehicleToTow(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers) => {
        // TODO: check if the selected vehicle is the truck
        const selectedVehicle = answers.vehicleToTow;
        if (selectedVehicle instanceof Truck) {
        // TODO: if it is, log that the truck cannot tow itself then perform actions on the truck to allow the user to select another action
          console.log('the truck cannot tow itself.  Please select another vehicle.');
        // TODO: if it is not, tow the selected vehicle then perform actions on the truck to allow the user to select another action
          this.performActions();
        } else {
          const towingTruck = this.vehicles.find(vehicle => vehicle instanceof Truck);
          if (towingTruck) {
            const result = towingTruck.tow(selectedVehicle); 
            console.log(`Towing Vehicle: ${selectedVehicle.vin} -- ${selectedVehicle.make} ${selectedVehicle.model}`);
            console.log(result);
      }
      this.performActions();
      }      
    })
    .catch((error) => {
      console.error('Error selecting vehicle to tow:', error);
    });
  }

  // method to perform actions on a vehicle
  async performActions(): Promise<void> {
    const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Tow',
            'Wheelie',
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ]);
      //.then((answers) => {
      const vehicle = this.getSelectedVehicle(); // Refactored to get the selected vehicle
      if (!vehicle) {
          console.log('Vehicle not found.');
          return this.performActions(); // Restart if vehicle not found
        }
  
        switch (answers.action) {
          case 'Print details':
            vehicle.printDetails();
            break;
          case 'Start vehicle':
            vehicle.start();
            break;
          case 'Accelerate 5 MPH':
            vehicle.accelerate(5);
            break;
          case 'Decelerate 5 MPH':
            vehicle.decelerate(5);
            break;
          case 'Stop vehicle':
            vehicle.stop();
            break;
          case 'Turn right':
            vehicle.turn('right');
            break;
          case 'Turn left':
            vehicle.turn('left');
            break;
          case 'Reverse':
            vehicle.reverse();
            break;
          case 'Tow':
            if (vehicle instanceof Truck) {
              //await this.findVehicleToTow(vehicle);
              await this.findVehicleToTow();
              return;
            } else {
              console.log('The selected vehicle is not a truck and cannot be towed.');
            }
            break;
          case 'Wheelie': //From the motorbike.ts file
            if (vehicle instanceof Motorbike) {
              vehicle.wheelie();
            } else {
              console.log('The selected vehicle is not a motorbike and cannot perform a wheelie.')
            }
            break;
          case 'Select or create another vehicle':
            this.startCli();
            return;
          case 'Exit':
            this.exit = true;
            break;
        }

        // find the selected vehicle and tow it
        // TODO: add statements to perform the tow action only if the selected vehicle is a truck. 
        // Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. 
        // After calling the findVehicleToTow method, you will need to return to avoid instantly calling the 
        // performActions method again since findVehicleToTow is asynchronous.
        // TODO: add statements to perform the tow action only if the selected vehicle is a truck. Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.
        // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike

  
        if (!this.exit) {
          await this.performActions();
        }
      };

      startCli(): void {
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'CreateOrSelect',
              message:
                'Would you like to create a new vehicle or perform an action on an existing vehicle?',
              choices: ['Create a new vehicle', 'Select an existing vehicle'],
            },
          ])
          .then((answers) => {
            // check if the user wants to create a new vehicle or select an existing vehicle
            if (answers.CreateOrSelect === 'Create a new vehicle') {
              this.createVehicle();
            } else {
              this.chooseVehicle();
            }
          });
      };
    }
  
 // getSelectedVehicle() {
 //   return this.vehicles.find(v => v.vin === this.selectedVehicleVin);
  //}

  // method to start the cli


// export the Cli class
export default Cli;
