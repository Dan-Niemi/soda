document.addEventListener('alpine:init', () => {
  Alpine.data('pricer', () => ({

    base: .03473,
    priced(price) {
      return `$${price.toFixed(2)}`
    },
    packages: [
      { name: "12 Pack", name2: "12 oz", floz: 144, img: "/img/p12.jpeg" },
      { name: "24 Pack", name2: "12 oz", floz: 288, img: "/img/p24.jpeg" },
      { name: "2 Liter", name2: "", floz: 67.6, img: "/img/p2L.jpeg" },
      { name: "6 Pack", name2: "16.9 oz", floz: 101.4, img: "/img/p169-6.jpeg" },
    ],
    setBase(value, floz) {
      let tempValue = value.replace( /[^0-9|/.]/g, '' );
      console.log(tempValue)
      this.base = tempValue / floz
    }

  }))
})