# wk1-code-challenge
*****
### Author : malcom owilla
****
## Grade Generator
### Description
This is a student grade generator that accepts the marks of the student and prints out the grade.
A function called gradeGenerator is created where marks is used as the parameter and the marks passed as an argument.Once the function is called the grade is logged. 
The grading system is as follows
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

****
## Speed Detector
### Description
The program takes as input the speed of the car .The input is passed as an argument in the speed detector function.If the speed is less than 70 Ok is logged. Otherwise for every 5km/s above the speed limit (70) it gives the driver 1 demerit point and prints the total number of demerit points.If the driver gets more than 12 points the function prints License suspended.
****
## Net Salary Calculator
### Description
The program calculates an individual's net salary by getting the inputs of basic salary and benefits. 
The benefits and deductions include PAYE, NHIF and NSSF. There is a function for paye and nhif.For nssf there are 2 functions i.e. nssfTier1 and nssfTier2. All the functions return the deductions based on the individual's salary. 
To compute the net salary the deductions are added and subtracted from the grossPay which is the basic salary.
 [KRA, NHIF, and NSSF values] https://www.aren.co.ke/payroll/taxrates.htm Links to an external site

## SetUp Instruction
### Requirements
* Text editor eg [Visual Studio Code](https://code.visualstudio.com/download)
### Getting Files
* To use this repo on your machine:
```sh
 
    git clone git@github.com:malcomowilla/week-1-code-challenge.git
```
*  Change directory to the repo folder:
    
    cd wk1-code-challenge

Open it in ``Visual Studio Code``

    code .

## How To Run the projects
From your terminal within the cloned repo:
* To run the Grade Generator

   $ node gradeGenerator.js

* To run the Net Salary Calculator

   $ node netSalaryCalculator.js

* To run the speed Detector

   $ node speedDetector.js

*****
## Technologies Used
1. HTML
2. JavaScript
