import { HtmlService } from "./html.service";
import optimusTechLogo from "../../assets/optimus_tech_logo.svg";
import { StringHelper } from "../helper/string.helper";

export class HeaderService {
  public static buildHeader(): HTMLDivElement {
    const header = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["header"],
    });
    const divLogo = HeaderService.buildLogo();
    const menuNav = HeaderService.buildMenuNav();
    const interactiveMenu = HeaderService.buildInteractiveMenu();

    header.appendChild(divLogo);
    header.appendChild(menuNav);
    header.appendChild(interactiveMenu);
    return header;
  }

  private static buildLogo(): HTMLDivElement {
    const divLogo = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["header__menu__logo"],
    });

    const imgLogo = HtmlService.buildHtmlElement<HTMLImageElement>({
      elementType: "img",
      classList: ["header__menu__logo__img"],
    });

    const textLogo = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["header__menu__logo__text"],
      textContent: "OptimusTech",
    });

    imgLogo.src = optimusTechLogo;
    divLogo.appendChild(imgLogo);
    divLogo.appendChild(textLogo);
    return divLogo;
  }

  private static buildMenuNav(): HTMLElement {
    const menuNav = HtmlService.buildHtmlElement<HTMLElement>({
      elementType: "nav",
      classList: ["header__menu__nav"],
    });

    menuNav.role = "navigation";

    const menuElements = ["home", "products", "resources", "about-us"];

    for (const element of menuElements) {
      const newMenuElement = HtmlService.buildHtmlElement<HTMLAnchorElement>({
        elementType: "a",
        classList: [`header__menu__nav__${element}`],
        id: element,
        textContent: StringHelper.toCapitalLetter(element.replace("-", " ")),
      });
      newMenuElement.href = "#";
      menuNav.appendChild(newMenuElement);
    }

    return menuNav;
  }

  private static buildInteractiveMenu(): HTMLDivElement {
    const interactiveMenu = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["header__interactive-menu"],
    });

    const enterLink = HtmlService.buildHtmlElement<HTMLAnchorElement>({
      elementType: "a",
      classList: ["header__interactive-menu__enter"],
      textContent: 'Enter'
    });

    const registerButton = HtmlService.buildHtmlElement<HTMLAnchorElement>({
      elementType: "button",
      classList: ["header__interactive-menu__register"],
      id: 'registerButton',
      textContent: 'Register'
    });

    registerButton.onclick = () => {
      console.log('Register button clicked.');
    }

    interactiveMenu.appendChild(enterLink);
    interactiveMenu.appendChild(registerButton);

    return interactiveMenu;
  }
}
