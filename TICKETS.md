# QA has submitted the following tickets


## Customer Orders Table
### QA Notes
When viewing the Customer Orders table, the times don't always display correctly. They're in 24-hour format when they should be in 12-hour format with AM/PM displayed.

Additionally, time should display in (H)H:MM format, but currently 12:07 displays as 12:7.

### Dev Notes / Response
- I Added a time of day indicator variable to get am or pm values, depending on if the getHours value is greater than 12
- Checked if getHours value is larger than 12 then use the difference between it and 12 if so, else just use the getHours value itself
- I added padding to the minutes value with a 0 at the start when it's only sinle digits

---


## Customer Order Details
### QA Notes
There seems to be an issue with total price sometimes. On some order details, the total price is displaying values after the penny.

### Dev Notes / Response
- When displaying the total in the tables, it's now being rounded off to 2 decimal places

---


## Delete a Customer Order
### QA Notes
I'm currently unable to delete a customer order. Every time I click the "Delete" button from the Customer Orders table, I get a white screen.

### Dev Notes / Response


---


## Other