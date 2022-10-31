class card {

    constructor ({name, desc, img, level, levelCost, percentIncrease}) {
        this.name = name;
        this.desc = desc;
        this.img = img;
        this.level = level;
        this.levelCost = levelCost
        this.PercentIncrease = percentIncrease; 
    }

    levelIncrement({money}){
        money -= this.levelCost;
        this.level ++;
        this.levelCost = this.levelCost * this.percentIncrease;

    }

}

class level extends card {

    constructor ({name, desc, img, level,levelCost, percentIncrease, multiplier}) {

        super(name, desc, img, level, levelCost, percentIncrease);

        this.multiplier = multiplier;
    }



}

class city extends card {

    constructor ({name, desc, img, level, levelCost, percentIncrease, egress, cost, amountOfProperties, taxIncrement}) {
        
        super(name, desc, img, level, levelCost, percentIncrease);

        this.egress = egress;
        this.cost = cost;
        this.amountOfProperties = amountOfProperties;
        this.taxIncrement = taxIncrement;

    }


}

class business extends card {
    
    constructor({name, desc, img, level, levelCost, percentIncrease, amountOfCitizens, citizenspercentIncrease, amountOfBusiness, amountOfBusinessCost, businessMultiplier, businessQuantityIncreasePercentage}){

        super(name, desc, img, level, levelCost, percentIncrease);

        this.amountOfBusiness = amountOfBusiness;
        this.amountOfBusinessCost = amountOfBusinessCost
        this.amountOfCitizens = amountOfCitizens;
        this.citizenspercentIncrease = citizenspercentIncrease;
        this.businessMultiplier = businessMultiplier;
        this.businessQuantityIncreasePercentage = businessQuantityIncreasePercentage;
    }

    IncreaseAmount (money) {
        money -= this.amountOfBusinessCost;
        this.amountOfBusiness++;
        this.amountOfBusinessCost *= this.businessQuantityIncreasePercentage;
        
        this.amountOfCitizens *= this.citizenspercentIncrease
    }
}

class player{

    constructor ({name, money, Income, egress, img, citizens, passiveIncome, passiveIncomeLevel, passiveIncomeCost, activeIncome, activeIncomeLevel, activeIncomeCost, multiplier}){
        this.name = name;
        this.money = money;
        this.income = Income;
        this.egress = egress;
        this.img = img;
        this.citizens = citizens;
        this.passiveIncome = passiveIncome;
        this.passiveIncomeLevel = passiveIncomeLevel;
        this.passiveIncomeCost = passiveIncomeCost;
        this.activeIncome = activeIncome;
        this.activeIncomeLevel = activeIncomeLevel;
        this.activeIncomeCost = activeIncomeCost;
        this.multiplier = multiplier;
    }

    activeIncome(){
        this.money += (this.income * this.multiplier);
    }

    
    levelPassiveIncome(){
        this.money -= this.passiveIncomeCost;
        this.passiveIncomeLevel++;
        this.passiveIncomeCost += (this.passiveIncomeCost * 0.04);
        this.passiveIncome = this.passiveIncomeLevel;
    }

    levelActiveIncome() {
        this.money -= this.activeIncomeCost;
        this.activeIncomeLevel++;
        this.activeIncomeCost += (this.activeIncomeCost * 0.04);
        this.activeIncome = this.activeIncomeLevel;
    }
}

class citizen{
    constructor({amount, paidMoney}){
        this.amount = amount;
        this.paidMoney = paidMoney;
    }

}