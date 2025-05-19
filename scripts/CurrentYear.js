class CurrentYear {
  selectors = {
    root: '[data-js-current-year]'
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    if (this.rootElement) {
      this.setYear()
    }
  }

  setYear() {
    const currentYear = new Date().getFullYear()
    this.rootElement.textContent = currentYear
  }
}

export default CurrentYear