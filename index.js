class ImAnElement extends HTMLElement {
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
    const idx = Math.floor(ImAnElement.emoji.length * Math.random())
    this.innerHTML = this.innerHTML !== ImAnElement.emoji[idx] ? ImAnElement.emoji[idx] : ImAnElement.emoji[(idx + 1) % ImAnElement.emoji.length]
  }
}

window.customElements.define('ccjmn-e', ImAnElement)
