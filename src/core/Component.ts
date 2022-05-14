export class Component<T extends HTMLElement = HTMLElement, S = object> {
  protected readonly target: T;
  protected state: S;

  constructor(target: T, props?: S) {
    this.target = target;
    this.state = { ...props };
    this.setInitialState();
    this.renderHTML();
    this.componentDidMount();
  }

  protected setInitialState() {}

  private renderHTML() {
    this.target.innerHTML = this.render();
  }

  protected render() {
    return '';
  }

  protected componentDidMount() {}

  protected setEvent() {}
  protected addEvent(eventType: string, selector: string, callback: Function) {
    const element = document.querySelector(selector);

    if (!element) {
      throw new Error(
        'Cannot find element corresponding to the selector name.'
      );
    }

    const isIntendedTarget = (target: HTMLElement) => {
      return !!target.closest(selector);
    };

    element.addEventListener(eventType, event => {
      if (!isIntendedTarget(event.target as HTMLElement)) return;
      callback.bind(this)(event);
    });
  }

  protected setState(newState: S) {
    this.state = {
      ...this.state,
      ...newState,
    };

    this.render();
    this.setEvent();
  }
}
