function calculation(money)
{
    var result=money%2;
    return result;
};
function calculation2(money)
{
   money=money*5+25;
    return money/5;
};

var x=calculation(75);
var y=calculation2(15);
alert("x="+x+" y="+y);