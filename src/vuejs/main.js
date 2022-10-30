const { createApp } = Vue;

const app = Vue.createApp({
  data() {
    return {
      money: 0,
      profitMultiplier: 1,

      income: 1,
      incomeCost: 1,
      incomeLevel: 1,
      passiveIncome: 0,
      passiveIncomeCost: 1,
      passiveIncomeLevel: 0,

      multiplier: 1,

      expenses: 0,
      citycetns: 0
    }
  },
  methods: {
    makeMoney(){
      this.money += (this.income * this.profitMultiplier);
    },
    incomeIncrement(){
      this.money -= this.incomeCost;
      this.incomeLevel ++;
      this.incomeCost += (this.incomeCost*0.07);
      this.income = this.incomeLevel;
    },
    passiveIncomeIncrement(){
      this.money -= this.passiveIncomeCost;
      this.passiveIncomeLevel ++;
      this.passiveIncomeCost += (this.passiveIncomeCost*0.07);
      this.passiveIncome = this.passiveIncomeLevel;
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.money += this.profitMultiplier * this.passiveIncome; 
    }, 1000);

    const list = document.querySelectorAll('.card');
    function activateLink(){
      this.classList.toggle('active');
    }
    list.forEach((item) =>
      item.addEventListener('click', activateLink));
  }
})
app.mount("#app")