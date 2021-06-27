export default class ElementMutator {
  private _classNames: string[] = [];
  private _element: HTMLElement;
  private _oldStylePropertyValues: Record<string, string> = {};

  public constructor(element: HTMLElement) {
    this._element = element;
    this.addClassName = this.addClassName.bind(this);
    this.addStyleProperties = this.addStyleProperties.bind(this);
    this.addStyleProperty = this.addStyleProperty.bind(this);
    this.reset = this.reset.bind(this);
  }

  public addClassName(this: this, className: string): void {
    this._element.classList.add(className);
    this._classNames.push(className);
  }

  public addStyleProperties(
    this: this,
    properties: Record<string, string>,
  ): void {
    for (const [property, value] of Object.entries(properties)) {
      this.addStyleProperty(property, value);
    }
  }

  public addStyleProperty(this: this, property: string, value: string): void {
    this._oldStylePropertyValues[property] =
      this._element.style.getPropertyValue(property);
    this._element.style.setProperty(property, value);
  }

  public reset(this: this): void {
    for (const className of this._classNames) {
      this._element.classList.remove(className);
    }

    for (const [property, oldStylePropertyValue] of Object.entries(
      this._oldStylePropertyValues,
    )) {
      this._element.style.setProperty(property, oldStylePropertyValue);
    }
  }
}
