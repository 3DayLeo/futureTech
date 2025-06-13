import BaseComponent from './BaseComponent.js'

const rootSelector = '[data-js-slider]'

class Slider extends BaseComponent {
  selectors = {
    root: rootSelector,
    track: '[data-js-slider-track]',
    slide: '[data-js-slider-slide]',
    prev: '[data-js-slider-prev]',
    next: '[data-js-slider-next]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  constructor(rootElement) {
    super()
    this.rootElement = rootElement
    this.trackElement = this.rootElement.querySelector(this.selectors.track)
    this.slideElements = this.rootElement.querySelectorAll(this.selectors.slide)
    this.prevButtonElement = this.rootElement.querySelector(this.selectors.prev)
    this.nextButtonElement = this.rootElement.querySelector(this.selectors.next)
    this.state = this.getProxyState({
      activeSlideIndex: 0,
    })
    this.limitSlidesIndex = this.slideElements.length - 1
    this.bindEvents()
  }

  updateUI() {
    const { activeSlideIndex } = this.state

    this.slideElements.forEach((slideElement, index) => {
      const isActive = index === activeSlideIndex

      slideElement.classList.toggle(this.stateClasses.isActive, isActive)
    })
  }

  previousSlide = () => {
    const newSlideIndex = this.state.activeSlideIndex === 0
      ? this.limitSlidesIndex
      : this.state.activeSlideIndex - 1

    this.state.activeSlideIndex = newSlideIndex
  }

  nextSlide = () => {
    const newSlideIndex = this.state.activeSlideIndex === this.limitSlidesIndex
      ? 0
      : this.state.activeSlideIndex + 1

    this.state.activeSlideIndex = newSlideIndex
  }

  bindEvents() {
    this.prevButtonElement?.addEventListener('click', this.previousSlide)
    this.nextButtonElement?.addEventListener('click', this.nextSlide)
  }
}

class SliderCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element)
    })
  }
}

export default SliderCollection
