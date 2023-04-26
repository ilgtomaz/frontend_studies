import { AboutUsService } from "./aboutUs.service";
import { AchievesService } from "./achieves.service";
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

    container.appendChild(header);
    container.appendChild(aboutUsSection);
    container.appendChild(achieves);
    container.appendChild(searchForNewTalents);
    return container;
  }
}