# Car-Selector

## Description
The Car-Selector application is a Command Line Interface (CLI) that can be used to select existing vehicles, perform certain operations, or create new vehicles.
These vehicles include Cars, Trucks, and Motorbikes.  For each of the vehicle types, users can start the vehicles, accelerate, decelerate, turn left or right, stop the vehicle, and go in reverse.
Some vehicles also have special functions like how the Trucks can be used to tow other vehicles and the Motorbikes can do wheelies.

Table of Contents

-[Licensing](##licensing)
-[Installation](##installation)
-[How to use it](##how-to-use-it)
-[To Create a New Vehicle](####to-create-a-new-vehicle)
-[To Select an Existing Option](####to-select-an-existing-option)
-[FAQ](##FAQ)

## Licensing
There are no licenses required to use this application.  

## Installation
Users will need to install the "Inquirer" package via NPM.  To install the "Inquirer" package via NPM, follow these steps:
- Open Visual Studio on your local computer.
- Navigate to the "Car-Selector" repository.
- Right click on the "src" subfolder, from the "Car-Selector" repository, and select "Open In Integrated Terminal".
- Type "npm i" and click the "Enter" key.

## How to Use It
To start using the application, follow these steps:
- Open Visual Studio on your local computer.
- Navigate to the "Car-Selector" repository.
- Right click on the "src" subfolder, from the "Car-Selector" repository, and select "Open In Integrated Terminal".
- Type "npm i" and click the "Enter" key.
- Type "npm start" and click the "Enter" key.
- Use the "Up" or "Down" keys to select either the "Create a new vehicle" option or the "Select an existing vehicle" option.  After highlighting the option, click the "Enter" key.

**NOTE:** The selected option will be highlighted in light blue

#### To Create a New Vehicle
- After highlighting the "Create a new vehicle" option and clicking the enter key, you will be provided with a new set of options.
- You will see a list with options for "Car", "Truck", and "Motorbike".
- Use the "Up" or "Down" keys to select the car type that you would like to use.
- You will then be presented with the following information to provide.  Type the information in the terminal and click the "Enter" key.
  - Enter Color
  - Enter Make
  - Enter Model
  - Enter Year
  - Enter Weight
  - Enter Top Speed
 - All information has now been saved for the new vehicle.  You are now at step 3 of "To Select an Existing Option".  Please use the instructions below for viewing information for the selected car of performing actions with it.

#### To Select an Existing Option:
- After highlighting the "Select an existing vehicle" option and clicking the enter key, you will be provided with a new set of options.
- You will see a list of existing vehicles that will display the Vehicle Identification Number (VIN), the make, and the model.
- Use the "Up" or "Down" keys to select the existing vehicle that you would like to use.
- You will be presented with the following options:
  - Print details - Selecting this option will provide all available information for the currently selected vehicle.
  - Start vehicle - This will start the vehicle.  All options below are only available after the car has started.
  - Accelerate 5 MPH - This will accelerate the vehicle by 5 MPH.
  - Decelerate 10 MPH - This will decelerate the vehicle by 10 MPH.
  - Stop vehicle - This will stop the vehicle.
  - Turn right - This will make the vehicle turn right.
  - Turn left - This will make the vehicle turn left.
  - Reverse - This will make the vehicle go in reverse.
  - Tow - This will allow the user to select an existing vehicle to tow.  Only trucks are currently available to tow other vehicles.
  - Wheelie - This will allow the user to do a wheelie on a motorbike.  Currently only motorbikes can do a wheelie.
  - Select or create another vehicle - Allows the user to either select a different vehicle or create a new vehicle.
  - Exit - Exits the program entirely.

## FAQs
- Which vehicles can tow other vehicles? Only trucks are available to tow other vehicles.
- What happens if I select a vehicle that is not a truck and select the tow option? You will receive a message stating "The selected vehicle is not a truck and cannot be towed."
- Which vehicles can perform wheelies? Only motorbikes can perform a wheelie.
- What happens when I select a vehicle that is not a motorbike to perform a wheelie? You will receive a message stating "The selected vehicle is not a motorbike and cannot perform a wheelie."
- Can I edit an existing vehicle? No.  In this current version there is not an option to edit an existing vehicle.
