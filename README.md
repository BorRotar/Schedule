# Schedule
A custom schedule maker
This application takes an Array of employees and an Array of days in a month. It then distributes the employees throughout the month by assigning them shifts during the day or during the night. 
Each employee Object has a "nightshift" and "leader" property as a Boolean. Each time an employee is assigned a shift in a day their weekly and monthly hours are raised for the duration of the shift (10.5, 10 or 12 hours).
There is a limit to how many hours per week (56) and per month (176) an employee can work. 
There are also limits to how many days in a row an employee can be assigned to shifts (3 for 10-12 hour shifts and 4 for 8 hour shifts).
All the employees are listed on the sidebar with the roles that they can perform (nightshift, leader).
The footer contains the remaining hours that selected employees can still work in the selected week before they reach 56 hours. The employees are displayed by hovering over a day number at the top of the table. The selected employees background in the table is changed to red for 3 seconds.
