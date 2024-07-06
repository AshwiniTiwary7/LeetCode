
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for(i=0;i<accounts.length;i++){
        let newWealth = 0;
        for(j=0;j<accounts[i].length;j++){
            newWealth += accounts[i][j];
        }
        if(newWealth > maxWealth) maxWealth = newWealth;
    }
    return maxWealth;
};


console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));