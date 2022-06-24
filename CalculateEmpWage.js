//uc1 if else condition
{
const Is_Present=1
let empCheck = Math.floor(Math.random()*10)%2;

if(empCheck==Is_Present)
{
    console.log("employee is  Present");

}else{
    console.log("employee is Absent");
}
}

//Uc2 switch case
const Is_Fulltime=2;
const Is_Parttime=1;
const Parttime_Hours=4;
const Fulltime_Hours=8;
const Wage_Per_Hours=20;
{
    let empHrs = 0;
    let empCheck = Math.floor(Math.random()*10)%2;
    switch(empCheck){
        case Is_Parttime:
            empHrs=Parttime_Hours;
            break;
        case Is_Fulltime:
           empHrs=Fulltime_Hours;
        default:
            empHrs=0;
    }
    let empWage = empHrs*Wage_Per_Hours;
    console.log("calculate empwage: "+empWage);
}

//Uc3 using function calculate emp wage
{
    function getWorkingHours(empCheck){
        switch(empCheck)
        {
            case Is_Parttime:
                return Parttime_Hours;
                
            case Is_Fulltime:
                return Fulltime_Hours;
            default:
                return 0;
        }
    }
       
        let empCheck = Math.floor(Math.random()*10)%2;
        let empHrs = getWorkingHours(empCheck);
        let empWage = empHrs*Wage_Per_Hours;
        console.log("Total Hrs: "+empHrs+"calculate empwage: "+empWage);
    }

    //Uc4 using for loop calculate empwage
let TotalEmpHrs=0;
var Number_Of_WorkingDay=20;
for(let day=0; day<Number_Of_WorkingDay; day++)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    TotalEmpHrs+=getWorkingHours(empCheck);
}
let empWage = TotalEmpHrs*Wage_Per_Hours;
console.log("Hour: "+TotalEmpHrs+" EmpWage: "+empWage);

//Uc5 using while loop calculate empwage
const Max_Hrs_In_Month=160;


let TotalWorkingDays=0;
while(TotalEmpHrs<=Max_Hrs_In_Month && TotalWorkingDays<Number_Of_WorkingDay)
{
    TotalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%2;
    let empHrs = getWorkingHours(empCheck);
}

let EmpWage = TotalEmpHrs*Wage_Per_Hours;
console.log("Total Days: "+TotalWorkingDays+" Total Hrs: "+TotalEmpHrs+" Total Wage: "+EmpWage);


//UC6 Store Dailywage along with the total wage

let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();



// const Is_Fulltime=2;
// const Is_Parttime=1;
// const Parttime_Hours=4;
// const Fulltime_Hours=8;
// const Wage_Per_Hours=20;
// const Max_Hrs_In_Month = 160;
// const Number_Of_WorkingDay = 20;


function getWorkingHours(empCheck){
    switch(empCheck)
    {
        case Is_Parttime:
            return Parttime_Hours;
            
        case Is_Fulltime:
            return Fulltime_Hours;
        default:
            return 0;
    }
}


function calculateDailWage(empHrs)
 {
   return empHrs*Wage_Per_Hours;
 }

//let TotalEmpHrs=0;
//let TotalWorkingDays=0;
let empDailyWageArr = new Array();
while(TotalEmpHrs<=Max_Hrs_In_Month && TotalWorkingDays< Number_Of_WorkingDay)
{
    TotalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    TotalEmpHrs+=empHrs;
    empDailyWageArr.push(calculateDailWage(empHrs));
    empDailyHrsMap.set(TotalWorkingDays, empHrs);
    empDailyHrsMap.set(TotalWorkingDays, calculateDailWage(empHrs));
}
let EmpWages = calculateDailWage(TotalEmpHrs);
console.log("Total Days: "+TotalWorkingDays+" Total hours: "+TotalEmpHrs+" Emp wage: "+EmpWage);


//UC7 use daily wage array perform following operation using helper function

//UC7A calculate total empwage using array ForEach or reduce method

let totalEmpWage=0;
function sum(dailyWage)
{
    totalEmpWage+=dailyWage;

}
empDailyWageArr.forEach(sum);
console.log("Total Days: "+ TotalWorkingDays+ " Total Hrs: "+TotalEmpHrs+" emp wage: "+totalEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage+dailyWage;

}
console.log("Empwage with reduce: "+empDailyWageArr.reduce(totalWages,0)); //return single value

//Uc 7B show the day along with daily wage using map helper function
let dailyCntr=0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr+ "="+dailyWage;
}
let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log("daily wage map: "+mapDayWithWageArr);

//UC7C using filter function calculate fulltime empwage
function FulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(FulltimeWage);
console.log("filter full time wage: "+fullDayWageArr);

//UC7D Using find function find first full time wage 
function findFullTimewage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("first time fulltime wage was earned on days: "+mapDayWithWageArr.find(findFullTimewage));

//UC7E check if every element of full time wage is truly holding full time wage
function isAllFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("check all elements have full time: "+fullDayWageArr.every(isAllFullTimeWage));

//UC7F check if there is any part time wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("check if any parttime wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G find the number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage)
{
    if(dailyWage>0)
    return numOfDays+1;
    return numOfDays;
}
console.log("number of days emp worked: "+empDailyWageArr.reduce(totalDaysWorked,0));

//UC8- Map function
console.log("EmpWage map total hours: "+Array.from(empDailyWageMap.values).reduce(totalWages,0));

//UC9 Arrow function

const findTotal = (totalVal,dailyVal) =>{
  return totalVal+dailyVal;
}

let totalHours=Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage>0).reduce(findTotal,0);
console.log("empwage with arrow "+ "Total Hours: "+totalHours+" total wages: "+ totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) =>{
    if(value==8) fullWorkingDays.push(key);
    else if(value==4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("full working days: "+fullWorkingDays);
console.log("Part working days: "+partWorkingDays);
console.log("Non working days: "+nonWorkingDays);

//UC10 Object Creation
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyHrsAndWageArr = new Array();
while(totalEmpHrs<= Max_Hrs_In_Month && totalWorkingDays< Number_Of_WorkingDay)

{
totalWorkingDays++;
let empCheck = Math.floor(Math.random()*10)%3;
let empHrs = getWorkingHours(empCheck);
totalEmpHrs+=empHrs;
empDailyHrsAndWageArr.push(
    {
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage:calculateDailWage(empHrs),
        toString(){
            return '\nDay'+this.dayNum+' working hour is '+this.dailyHours+' And Wage earned '+this.dailyWage
        },
    }
);
}
console.log("showing daily hours worked and wage earned: "+empDailyHrsAndWageArr);
