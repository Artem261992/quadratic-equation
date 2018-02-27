module.exports = function solveEquation(equation) {
    var res=[];
    data_list = equation.split(' ');

    if (data_list[0][0] == '-'){
        var a = ( - Number(data_list[0].slice(1)))
    }
    else{
        var a = Number(data_list[0]);
    }

    if (data_list[3] == '+'){
        var b = Number(data_list[4]);
    }
    else{
        var b = ( - Number(data_list[4]));
    }

    if (data_list[7] == '+'){
        var c = Number(data_list[8]);
    }
    else{
        var c =(0 - Number(data_list[8]))
    }
    D = (Math.pow(b, 2) - 4*a*c);
    x1 = ( - b  - Math.sqrt(D))/(2*a);
    x2 = ( - b + Math.sqrt(D))/(2*a);
    res.push(x1.toFixed(), x2.toFixed());

    return res.sort( function(a,b) { return a - b; } );
}
