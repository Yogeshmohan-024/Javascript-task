// markSheet using Switch case
function mark_statement() {
    let Tamil = 100;
    let English = 97;
    let Maths = 96;
    let Science = 99;
    let Social_sciences = 100;
    let Total = Tamil + English + Maths + Science + Social_sciences;
    switch (true) {
        case (Total > 500):
        case (Total < 0):
            console.log(`${Total} Invaild Mark`);
            break;
        case (Total >= 491 && Total <= 500):
            console.log(`${Total} 'o+' Grade Congratulations`);
            break;
        case (Total >= 481 && Total <= 490):
            console.log(`${Total}'o-' Grade  Congratulations`);
            break;
        case (Total >= 471 && Total <= 480):
            console.log(`${Total} 'o' Grade Congratulations`);
            break;
        case (Total >= 461 && Total <= 470):
            console.log(`${Total} 'A+' Grade Congratulations`);
            break;
        case (Total >= 451 && Total <= 460):
            console.log(`${Total} 'A-' Grade Congratulations`);
            break;
        case (Total >= 441 && Total <= 450):
            console.log(`${Total} 'A' Grade Congratulations`);
            break;
        default:
            console.log(`Fail Study Well Do Hard Work`);
            break;
    }
}
mark_statement()

//  1.ODD OR EVEN  WITH RANGE CHECKER

function Odd_Even() {
    let first_number = 29;
    let second_number = 10;
    let Total = first_number % second_number;
    console.log(Total);
    if (first_number % second_number == 9) {
        console.log(`${Total} It Is Odd Number`);
    } else if (Total == 0) {
        console.log(`${Total} It Is Even Number`);
    }
    else {
        console.log(`${Total} It Is Not A Odd Number(or) Even Number`);
    }
}
Odd_Even()

// 2.Simple Calculator

function calculator(){
    let Tamil=56;
    let English=77;
    let symbol= "*";
    if(symbol ==="+"){
        console.log(`${Tamil+English}  Addition`); 
    }
    else if(symbol === "-"){
        console.log(`${Tamil - English} Subtraction`); 
    }
    else if(symbol == "*"){
        console.log(`${Tamil * English} Multiplication`);  
    }
    else if(symbol === "/"){
        console.log(`${Tamil / English} Division`);
        
    }
    else{
        console.log(`Invalid Symbol`);   
    }

}
calculator()

// 3.Number Category

function Number_category() {
    let Glass_power = -79;

    if (Glass_power > 100) {
        console.log(`It Is GreaterThan 70 and It is Positive `);
    }
    else if (Glass_power <= 70 && Glass_power >= 1) {
        console.log(`It IS 70 and It is Positive `);
    }
    else if (Glass_power == 0) {
        console.log(`It Is Zero`);
    }
    else if (Glass_power < 0) {
        console.log(`It is Negative `);
    }
    else {
        console.log(`Invalid Input`);
    }
}
Number_category()

//4. Number Comparison

function Comparison(){
    let sam = 490;
    let sri = 489;
    if (sam > sri) {
        console.log(` ${sam} sam Is GreaterThan Sri${sri} So sam Is The Class Topper`);
    }
    else if (sam != sri) {
        console.log(`${sri} And ${sam} Are Not Equal`);
    }
    else {
        console.log(`${sri}No Sri Is The Class Topper`);
    }
}
Comparison()

// 5. Traffic Light Simulator

function Traffic_light() {
    let Light_color = "green";
    if (Light_color == "red") {
        console.log(`STOP...`);
    }
    else if (Light_color == "green") {
        console.log(`THANKS NOW YOU CAN GO HAVE SAFE RIDE.....`);
    }
    else if (Light_color == "yellow") {
        console.log(`Ready`);
    }
    else {
        console.log("INVAILD INPUT");
    }
}
Traffic_light()

// 6.SHAPE IDENTIFIER

function Shapes() {
    let sides = 5;
    if (sides == 3) {
        console.log(`It Is Triangle It Has  ${sides} Sides`);
    }
    else if (sides == 4) {
        console.log(`It Is Quadrilateral It Has  ${sides} Sides`);
    }
    else if (sides == 5) {
        console.log(`It Is Pentagon It Has  ${sides} Sides`);
    }
    else {
        console.log(`Unknown Shape`);

    }
}
Shapes()

//7. Discount Calculator

function Discount() {
    let Amount = 0;
    if (Amount > 5000) {
        console.log(`Congratulations You Has  20% Discount`);
    }
    else if (Amount >= 2000 && Amount <= 5000) {
        console.log(`Congratulations You Has  10% Discount`);
    }
    else if (Amount < 2000 && Amount >= 1000) {
        console.log(`Sorry Sir You Has No Discount`);
    }
    else {
        console.log(`Invalid Input`);
    }
}
Discount()

// 8. Leap Year
function Leap_year(){
    let Year =2020;
    if(Year % 400 == 0){
        console.log(`${Year} It Is A Leap Year(divisible 400)`);  
    }
    else if (Year % 100 == 0){
        console.log(`${Year} It Is Not A Leap Year (divisible 100)`);   
    }
    else if (Year % 4 == 0){
        console.log(`${Year} It Is A Leap Year(divisible 4)`);  
    }
    else {
        console.log(`${Year} It Is Not A Leap Year`);
        
    }
}
Leap_year()

// 9.Divisibility Checker

function Divisibility() {
    let num = 25;
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`This ${num} Divisible By Both 3 And 5`);
    } else if (num % 3 === 0) {
        console.log(`This ${num} Divisible By 3`);
    } else if (num % 5 === 0) {
        console.log(`This ${num} Divisible By 5`);
    }
    else {
        console.log(`This ${num} Not Divisible By Both 3 And 5`);
    }
}
Divisibility()

// 10.To Calculate The Simple Interest
function loan() {
    let salary_amount = 36000;
    let time = 10;
    if (salary_amount >= 50000) {
        let Rate_of_interest = 3;
        let Interest_amount = (salary_amount * time * Rate_of_interest) / 100;
        console.log(`Value ${Interest_amount} Total_amount ${Interest_amount + salary_amount}`);
    }
    else if (salary_amount > 10000 && salary_amount < 30000) {
        let Rate_of_interest = 7
        let Interest_amount = (salary_amount * time * Rate_of_interest) / 100;
        console.log(`Value ${Interest_amount} Total_amount ${Interest_amount + salary_amount}`);
    }
    else if (salary_amount >= 30000 && salary_amount < 50000) {
        let Rate_of_interest = 5
        let Interest_amount = (salary_amount * time * Rate_of_interest) / 100;
        console.log(`Value ${Interest_amount} Total_amount ${Interest_amount + salary_amount}`);
    }
    else if (salary_amount <= 10000) {
        let Rate_of_interest = 7;
        let Interest_amount = (salary_amount * time * Rate_of_interest);
        console.log(`Value ${Interest_amount} Total_Amount ${Interest_amount + salary_amount}`);

    }
    else {
        console.log(`Invalid Amount`);
    }
}
loan()


