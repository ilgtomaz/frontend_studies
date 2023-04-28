import { HtmlService } from "./html.service";

export class FooterService {
  public static buildFooter(): HTMLDivElement {
    const footer = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["footer"]
    });

    const followOurOpportunities = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["footer__follow-our-opportunities"],
      textContent: "Follow our opportunities"
    });

    const beTheFirst = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["footer__be-the-first"],
      textContent: "Be the first to know when a job becomes available"
    });

    const registerEmail = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["footer__register-email"]
    });

    const inputEmail = HtmlService.buildHtmlElement<HTMLInputElement>({
      elementType: "input",
      classList: ["footer__register-email__input"]
    });

    inputEmail.type = "email";

    const buttonRegister = HtmlService.buildHtmlElement<HTMLButtonElement>({
      elementType: "button",
      classList: ["footer__register-email__button"],
      textContent: "Register"
    });

    const allReservedRights = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["footer__all-reserved-rights"],
      textContent: "© 2023 OptimusTech. All rights reserved."
    });

    registerEmail.appendChild(inputEmail);
    registerEmail.appendChild(buttonRegister);
    footer.appendChild(followOurOpportunities);
    footer.appendChild(beTheFirst);
    footer.appendChild(registerEmail);
    footer.appendChild(allReservedRights);
    return footer;
  }
}
