class Car {
    constructor(marka, tezlik) {
      this.marka = marka; 
      this.tezlik = tezlik; 
    }
    tezlashtir() {
      this.tezlik += 10;
      console.log(${this.marka} hozirgi tezligi: ${this.tezlik} km/h);
    }
    tormoz() {
      this.tezlik -= 5;
      console.log(${this.marka} tormozdan keyingi tezlik: ${this.tezlik} km/h);
    }
    get speedUS() {
      return this.tezlik / 1.6;
    }
    set speedUS(mi) {
      this.tezlik = mi * 1.6;
    }
  }
  const ford = new Car('Jiguli', 120);
  ford.tezlashtir(); 
  ford.tormoz();     

  ford.speedUS = 50; 
  console.log(Yangi tezlik: ${ford.tezlik} km/h);