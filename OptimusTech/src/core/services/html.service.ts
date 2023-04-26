type InputElementProperties = {
  elementType: string;
  classList?: string[];
  id?: string;
  textContent?: string;
};

export class HtmlService {
  public static buildHtmlElement<TReturn>(properties: InputElementProperties): TReturn {
    const element: any = document.createElement(properties.elementType);

    if (properties.classList && properties.classList.length > 0) {
      for (const className of properties.classList) {
        element.classList.add(className);
      }
    }

    if (properties.id) {
      element.id = properties.id;
    }

    if (properties.textContent) {
      element.textContent = properties.textContent;
    }

    return element;
  }
}