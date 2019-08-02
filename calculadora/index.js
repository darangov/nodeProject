module.exports = {
    sumar: function(num1, num2){
    return num1 + num2;
    },
    restar: function(num1,num2){
        return num1 - num2;
    },
    dividir: function(num1, num2){
        if(num2===0){
            return 0;
        }

        return num1 / num2;
    },

    multipicacion: function(num1, num2){

        return num1 * num2;
    }
}
    


