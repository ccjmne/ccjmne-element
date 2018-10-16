class MuAn extends HTMLElement {
  constructor() {
    super()
    this.addEventListener('click', this.setEmoji)
  }

  static get emoji() {
    return ['🙂', '🤯', '🐶', '🍣', '🍡', '🎻', '🇳🇿']
  }

  connectedCallback() {
    this.setEmoji()
  }

  setEmoji() {
    const idx = Math.floor(MuAn.emoji.length * Math.random())
    this.innerHTML = this.innerHTML !== MuAn.emoji[idx] ? MuAn.emoji[idx] : MuAn.emoji[(idx + 1) % MuAn.emoji.length]
  }
}

window.customElements.define('mu-an', MuAn)
