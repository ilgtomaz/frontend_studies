import { ACHIEVES_DATA } from "../constants/achieves";
import { HtmlService } from "./html.service";

export class AchievesService {
  public static buildAchieves(): HTMLDivElement {
    const achieves = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["achieves"]
    });

    for (const achieveData of ACHIEVES_DATA) {
      const achieveElement = AchievesService.buildAchieveElement(achieveData);
      achieves.appendChild(achieveElement);
    }

    return achieves;
  }

  private static buildAchieveElement(achieveData: { title: string; subtitle: string; text: string; }): HTMLDivElement {
    const achieveElement = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: 'div',
      classList: ['achieves__item']
    });

    const achieveElementTitle = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: 'p',
      classList: ['achieves__item__title'],
      textContent: achieveData.title
    });

    const achieveElementSubtitle = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: 'p',
      classList: ['achieves__item__subtitle'],
      textContent: achieveData.subtitle
    });

    const achieveElementText = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: 'p',
      classList: ['achieves__item__text'],
      textContent: achieveData.text
    });

    achieveElement.appendChild(achieveElementTitle);
    achieveElement.appendChild(achieveElementSubtitle);
    achieveElement.appendChild(achieveElementText);
    return achieveElement;
  }
}