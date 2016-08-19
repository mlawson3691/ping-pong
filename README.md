# _Ping-Pong_

#### _A website using arrays and loops, August 19, 2016_

#### By _**Mark Lawson**_

## Description

_Ping-Pong is a website built with Javascript and jQuery and designed with Bootstrap. It has a form to receive a number from the user, and it will output a list of numbers up to and including the inputted number, with some minor adjustments based on whether the values are divisible by 3 and/or 5._

## Setup/Installation Requirements

* _Clone the repo_
* _Open index.html in a browser_

## Specifications

* _It can count up to the inputted number_
  * _Example input: 2_
  * _Example output: [1,2]_
* _Numbers divisible by 3 are replaced with "ping"_
  * _Example input: 3_
  * _Example output: [1,2,ping]_
* _Numbers divisible by 5 are replaced with "pong"_
  * _Example input: 5_
  * _Example output: [1,2,ping,4,pong]_
* _Numbers divisible by 15 are replaced with "ping"_
  * _Example input: 15_
  * _Example output: [1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong]_
* _Resubmitting the form should clear the previous results_
  * _Example Input 1: 5_
  * _Example Output 1: [1,2,ping,4,pong];_
  * _Example Input 2(resubmit same form): 2_
  * _Example Output 2: [1,2];_
* _Non-numerical inputs should not be accepted_
  * _Example Input: a_
  * _Example Output: "Please enter a number"_
* _Numbers less than 1 should not be accepted_
  * _Example Input: -1_
  * _Example Output: "Please enter a number greater than 0"_

## Known Bugs

_There are no known bugs at this time._

## Support and Contact Details

_For questions or comments, please contact mlawson3691@gmail.com._

## Technologies Used

* _Javascript_
* _jQuery_
* _Bootstrap_

### License

*This website is licensed under the MIT license.*  
Copyright (c) 2016 **_Mark Lawson_**
