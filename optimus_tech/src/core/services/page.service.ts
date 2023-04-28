import { AboutUsService } from "./aboutUs.service";
import { AchievesService } from "./achieves.service";
import { EmployerOpinionService } from "./employerOpinion.service";
import { FooterService } from "./footer.service";
import { HeaderService } from "./header.service";
import { HtmlService } from "./html.service";
import { SearchForTalentService } from "./searchForTalent.service";

export class PageService {
  public static buildPage(): HTMLDivElement {
    const container = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: 'div',
      classList: ['container']
    });

    const header = HeaderService.buildHeader();
    const aboutUsSection = AboutUsService.buildAboutUsSection();
    const achieves = AchievesService.buildAchieves();
    const searchForNewTalents = SearchForTalentService.buildSearchForTalent();
    const employerOpinion = EmployerOpinionService.buildEmployerOpinion();
    const footer = FooterService.buildFooter();

    container.appendChild(header);
    container.appendChild(aboutUsSection);
    container.appendChild(achieves);
    container.appendChild(searchForNewTalents);
    container.appendChild(employerOpinion);
    container.appendChild(footer);
    return container;
  }
}