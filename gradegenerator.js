//Write that prompts the user to input student marks. 
//The input should be between 0 and 100. Then output the correct grade: 

//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


function gradeGenerator(marks){

    if (marks>=80 && marks<=100){
        console.log("A")
}
    else if (marks>=60 && marks<=79)
{
        console.log("B")
}
    else if (marks>=49 && marks<=59){
        console.log("C")
}
    else if (marks>=40 && marks<=49){
       console.log("D")
}
    else if (marks>=0 && marks<40)
{
       console.log("E")
}
    else if (marks ===" " || marks<0 || marks>100){
        console.log("Please enter the correct marks")
    }
}

gradeGenerator(70) 