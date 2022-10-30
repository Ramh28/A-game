class card {

    constructor ({name, desc, img, level}) {
        this.name = name;
        this.desc = desc;
        this.img = img;
        this.level = level;
    }

}

class level extends card {

    constructor ({name, desc, img, level, cost, multiplier}) {

        super(name, desc, img, level);

        this.cost = cost;
        this.multiplier = multiplier;
    }

}

class city extends card {

    constructor ({name, desc, img, level, egress, cost, amountOfProperties, tax}) {
        
        super(name, desc, img, level);

        this.egress = egress;
        this.cost = cost;
        this. amountOfProperties = amountOfProperties;
        this.tax = tax;

    }
}

class business extends card {
    
    constructor({name, desc, img, level, amountOfCitizens, amountOfBusiness, BusinessMultiplier}){

        super(name, desc, img, level);

        this.amountOfBusiness = amountOfBusiness;
        this.amountOfCitizens = amountOfCitizens;
        this.amountOfProperties = amountOfProperties;
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