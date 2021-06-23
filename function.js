module.exports = {
    returnTwo: function(){
        return 2;
    },
    greeting: function(name){
        return "Hello, " + name + ".";
    },
    add: function(num1, num2){
        return num1 + num2;
    },
    multiply: function(num1, num2){
        return num1 * num2;
    },
    divide: function(num1, num2){
        return num1 / num2;
    },
    subtract: function(num1, num2){
        return num1 - num2;
    },
    isFortnite: function(player){
        const isPlayer = ["Ninja", "xQc"];
        for(let i=0; i<isPlayer.length; i++)
        {
            if(isPlayer[i] === player)
            {
                return true;
            }
            else{
                return false;
            }
        }
    }
}