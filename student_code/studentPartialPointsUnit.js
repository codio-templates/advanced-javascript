class Laptop {
  constructor(manufacturer, size, processor, ram) {
    this.manufacturer = manufacturer
    this.size = size
    this.processor = processor
    this.ram = ram
  }
  
  printLaptop() {
    return(`This is a ${this.size}-inch ${this.manufacturer} laptop. It has a ${this.processor} GHz CPU and ${this.ram} GB of RAM.`)
  }
}

module.exports = Laptop
