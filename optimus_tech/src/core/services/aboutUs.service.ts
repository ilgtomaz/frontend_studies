import { HtmlService } from "./html.service";

export class AboutUsService {
  public static buildAboutUsSection(): HTMLDivElement {
    const divAboutUs = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["about-us"],
    });

    const title = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["about-us__title"],
      textContent: "About us"
    });

    const subtitle = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["about-us__subtitle"],
      textContent: "Why are we different?"
    });

    const textContent = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["about-us__text-content"],
      textContent: "We are focused on the details of our work. We have all the tools to help our clients from all over the world to develop and be focused in their business."
    });

    divAboutUs.appendChild(title);
    divAboutUs.appendChild(subtitle);
    divAboutUs.appendChild(textContent);
    return divAboutUs;
  }
}
