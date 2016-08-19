SPECS:
- It can count up to the inputted number
  - Example Input: 2
  - Example Output: [1,2];
- Numbers divisible by 3 are replaced with "ping"
  - Example Input: 3
  - Example Output: [1,2,ping];
- Numbers divisible by 5 are replaced with "pong"
  - Example Input: 5
  - Example Output: [1,2,ping,4,pong];
- Numbers divisible by 15 are replaced with "pingpong"
  - Example Input: 15
  - Example Output: [1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong];
- Resubmitting the form should clear the previous results
  - Example Input 1: 5
  - Example Output 1: [1,2,ping,4,pong];
  - Example Input 2(resubmit same form): 2
  - Example Output 2: [1,2];
- Non-numerical inputs should not be accepted
  - Example Input: a
  - Example Output: "Please enter a number"
- Numbers less than 1 should not be accepted
  - Example Input: -1
  - Example Output: "Please enter a number greater than 0"