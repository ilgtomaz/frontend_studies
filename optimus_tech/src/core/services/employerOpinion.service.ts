import { HtmlService } from "./html.service";
import perfilPhotoImage from "../../assets/perfil_photo.svg";

export class EmployerOpinionService {
  public static buildEmployerOpinion(): HTMLDivElement {
    const employerOpinion = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["employer-opinion"]
    });

    const title = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["employer-opinion__title"],
      textContent: "See what our employers say about us"
    });

    const mainContent = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["employer-opinion__content"],
      textContent: "OptimusTech cares about the welfare of the employer and always tries to give all the support."
    });

    const perfil = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["employer-opinion__perfil"]
    });

    const perfilPhoto = HtmlService.buildHtmlElement<HTMLImageElement>({
      elementType: "img",
      classList: ["employer-opinion__perfil__img"]
    });

    perfilPhoto.src = perfilPhotoImage;

    const perfilName = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["employer-opinion__perfil__name"],
      textContent: "Júlia Castro"
    });

    const perfilJob = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["employer-opinion__perfil__job"],
      textContent: "Web Developer"
    });

    perfil.appendChild(perfilPhoto);
    perfil.appendChild(perfilName);
    perfil.appendChild(perfilJob);
    employerOpinion.appendChild(title);
    employerOpinion.appendChild(mainContent);
    employerOpinion.appendChild(perfil);

    return employerOpinion;
  }
}