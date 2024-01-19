function calBmi(weight,height)
{
    var bmi=weight/(Math.pow(height,2));
    return bmi;
}
var my_BMI=calBmi(95,0.67);
alert("Your bmi is "+my_BMI);