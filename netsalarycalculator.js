//Write a program whose major task is to calculate an individual’s 
//Net Salary by getting the inputs of basic salary and benefits.
// Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
//NB: Use KRA, NHIF, and NSSF values provided in the link below.

//https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.  

//https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

//PAYE DEDUCTION
function paye(grossPay){
    let payeTax;
if (grossPay>0 && grossPay<=24000){
   return payeTax =0.1*grossPay;
}
else if (grossPay>=24000 && grossPay<=32333)
{
    return payeTax = 0.25*grossPay;
}
else if(grossPay>32333){
    return payeTax = 0.3*grossPay;
}

}
//NHIF DEDUCTIONS
function nhif(grossPay){
    let nhifDeductions;
    if(grossPay<=5999){
        return nhifDeductions=150
    }
    else if(grossPay>=6000 && grossPay<=7999){
        return nhifDeductions=300
    }
    else if(grossPay>=8000 && grossPay<=11999){
        return nhifDeductions=400
    }
    else if(grossPay>=12000 && grossPay<=14999){
        return nhifDeductions=500
    }
    else if(grossPay>=15000 && grossPay<=19999){
        return nhifDeductions=600
    }
    else if(grossPay>=20000 && grossPay<=24999){
        return nhifDeductions=750
    }
    else if(grossPay>=25000 && grossPay<=29999){
        return nhifDeductions=850
    }
    else if(grossPay>=30000 && grossPay<=34999){
        return nhifDeductions=900
    }
    else if(grossPay>=35000 && grossPay<=39999){
        return nhifDeductions=300
    }
    else if(grossPay>=40000 && grossPay<=44999){
        return nhifDeductions=1000
    }
    else if(grossPay>=45000 && grossPay<=49999){
        return nhifDeductions=1100
    }
    else if(grossPay>=50000 && grossPay<=59999){
        return nhifDeductions=1200
    }
    else if(grossPay>=60000 && grossPay<=69999){
        return nhifDeductions=1300
    }
    else if(grossPay>=70000 && grossPay<=79999){
        return nhifDeductions=1400
    }
    else if(grossPay>=80000 && grossPay<=89999){
        return nhifDeductions=1500
    }
    else if(grossPay>=90000 && grossPay<=99999){
        return nhifDeductions=1600
    }
    else if(grossPay>=10000){
        return nhifDeductions=1700
    }
}
 //NSSF DEDUCTIONS
function nssfTier1(grossPay){
    let tier1;
    if(grossPay>=3000){
        tier1=grossPay*0.06
    }
    else{
        tier1=0

    }
    if(tier1>360)
    {
        tier1=360
    }
    return tier1
}

function nssfTier2(grossPay){
    let tier2;
    if(grossPay>=3000 && grossPay<=6000){
        tier2=0
    }
    else if(grossPay>6000){
        tier2=(grossPay-6000)*0.06
    }

    if(tier2>720){
        tier2=720
    }
    return tier2
}

let grossPay =30000; // set the value of Gross Salary

const calcPaye=paye(grossPay);
const calcnhif=nhif(grossPay);
const calcTier1=nssfTier1(grossPay);
const calcTier2=nssfTier2(grossPay);

//CALCULATION OF NET PAY
let netPay = grossPay - (calcPaye+calcnhif+calcTier1+calcTier2)

console.log(`netpay :${netPay} `)