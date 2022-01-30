import EventBus from './event-bus';

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  };

  private meta: {
    tagName: string,
    props: object
  };

  private eventBus: EventBus;
  public props: Record<string, unknown>;
  private _element: HTMLElement;

  constructor(tagName = 'div', props = {}) {
    this.eventBus = new EventBus();
    this.meta  = {
      tagName,
      props
    };

    this.props = this._makePropsProxy(props);

    this._registerEvents();
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents() {
    this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  _createResources() {
    const {tagName} = this.meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount() {
    return true;
  }

  _componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (!response) {
      return;
    }

    this._render();
  }

  componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>) {
    return oldProps !== newProps;
  }

  setProps = (nextProps: Record<string, unknown>) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();

    this._element.innerHTML = block;
  }

  render() {
    return '';
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy<T>(props: Record<string, T>) {
    return new Proxy(props, {
      get(target, prop: string) {

        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop: string, value) => {

        target[prop] = value;
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, {...target}, target);
        return true;
      },
      deleteProperty(target, prop: string) {

        delete target[prop];
        return true;
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}