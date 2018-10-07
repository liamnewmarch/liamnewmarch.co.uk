class AbstractMethodBinderClass {
  constructor() {
    const { boundMethods } = this.constructor;
    if (boundMethods) {
      for (const method of boundMethods) {
        this[method] = this[method].bind(this);
      }
    }
  }
}

class WaveCanvas extends AbstractMethodBinderClass {
  static get boundMethods() {
    return ['_frame', '_getY', '_paint']
  }

  constructor({ canvas }) {
    super();
    this._canvas = canvas;
    this._context = this._canvas.getContext('2d');
    this._offset = 0;
    this._frame();
  }

  _frame() {
    requestAnimationFrame(this._frame);
    this._height = this._canvas.height = innerHeight * devicePixelRatio;
    this._width = this._canvas.width = innerWidth * devicePixelRatio;
    this._paint();
  }

  _getY(x) {
    return (
      30 * Math.sin(this._offset + x / 60) +
      20 * Math.sin(this._offset + x / 40) +
      10 * Math.sin(this._offset + x / 20) +
      this._height / 2 // Centre vertically
    );
  }

  _paint() {
    this._context.lineWidth = 1;
    this._context.strokeStyle = '#fff';
    this._context.beginPath();
    for (let x = 0; x < this._width; x++) {
      const y = this._getY(x);
      this._context.lineTo(x, y);
    }
    this._context.stroke();
    this._offset = this._offset + .05 % 1;
  }
}

class HueRotator extends AbstractMethodBinderClass {
  static get boundMethods() {
    return ['_frame'];
  }

  constructor({ element }) {
    super();
    this._element = element;
    this._h = 240;
    this._s = 20;
    this._l = 17;
    this._frame();
  }

  _frame() {
    requestAnimationFrame(this._frame);
    const color = `hsl(${this._h}, ${this._s}%, ${this._l}%)`;
    this._element.attributeStyleMap.set('background-color', color);
    this._h = this._h + .1 % 360;
  }
}

(window.requestIdleCallback || window.setTimeout)(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/service-worker.js').then(registation => {
      registation.update();
    });
  }
  new WaveCanvas({
    canvas: document.querySelector('canvas'),
  });
  new HueRotator({
    element: document.documentElement,
  })
}, { timeout: 500 });
