import { HtmlService } from "./html.service";
import teamImagePng from "../../assets/team.png";
import { OPPORTUNITIES } from "../constants/opportunities";
import { StringHelper } from "../helper/string.helper";

type OpportunityInfos = {
  type: string;
  title: string;
  period: string;
  salary: string;
};

export class SearchForTalentService {
  private static carouselElementId: string;

  public static buildSearchForTalent(): HTMLDivElement {
    const searchForTalent = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["search-for-talent"],
    });

    const opportunitiesContainer =
      HtmlService.buildHtmlElement<HTMLParagraphElement>({
        elementType: "div",
        classList: ["search-for-talent__open"],
      });

    const opportunities = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["search-for-talent__open__content"],
      textContent: "We have opportunities!",
    });

    const title = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["search-for-talent__title"],
      textContent: "We are looking for new talent",
    });

    const subtitle = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["search-for-talent__subtitle"],
      textContent:
        "We are a complete remote team with people from all over Brazil",
    });

    const teamImage = HtmlService.buildHtmlElement<HTMLImageElement>({
      elementType: "img",
      classList: ["search-for-talent__team-image"],
    });

    const carouselOpportunities = SearchForTalentService.buildJobsCarousel();

    teamImage.src = teamImagePng;

    opportunitiesContainer.appendChild(opportunities);
    searchForTalent.appendChild(opportunitiesContainer);
    searchForTalent.appendChild(title);
    searchForTalent.appendChild(subtitle);
    searchForTalent.appendChild(teamImage);
    searchForTalent.appendChild(carouselOpportunities);

    return searchForTalent;
  }

  private static buildJobsCarousel() {
    const carouselOpportunities = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["search-for-talent__carousel"],
    });

    const jobAreas = [
      ...new Set(OPPORTUNITIES.map((opportunity) => opportunity.type)),
    ];

    const carouselSlider = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["search-for-talent__carousel__slider"],
    });

   const divCarouselSliderButtons = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["search-for-talent__carousel__slider_buttons"],
    });

    for (const jobArea of jobAreas) {
      this.carouselElementId = `carousel-element-id-${jobArea}`;
      const carouselButtonElement = HtmlService.buildHtmlElement<HTMLAnchorElement>({
        elementType: "a",
        classList: ["search-for-talent__carousel__slider__buttons__element"],
        textContent: StringHelper.toCapitalLetter(jobArea)
      });

      carouselButtonElement.href = `#${this.carouselElementId}`;

      divCarouselSliderButtons.appendChild(carouselButtonElement);

      SearchForTalentService.insertJobIntoJobCarousel(jobArea, carouselSlider);
    }

    carouselOpportunities.appendChild(divCarouselSliderButtons);
    carouselOpportunities.appendChild(carouselSlider);

    return carouselOpportunities;
  }

  private static insertJobIntoJobCarousel(
    jobArea: string,
    carouselOpportunities: HTMLDivElement
  ) {
    const jobs = OPPORTUNITIES.filter(
      (opportunity) => opportunity.type == jobArea
    );

    const divJobArea = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["search-for-talent__carousel__slider__job-area"],
    });

    divJobArea.id = this.carouselElementId;

    for (const job of jobs) {
      SearchForTalentService.buildJobElement(job, divJobArea);
    }

    carouselOpportunities.appendChild(divJobArea);
  }

  private static buildJobElement(
    job: OpportunityInfos,
    divJobArea: HTMLDivElement
  ) {
    const divJob = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: ["search-for-talent__carousel__slider__job-area__element"],
    });

    const jobTitle = HtmlService.buildHtmlElement<HTMLParagraphElement>({
      elementType: "p",
      classList: ["search-for-talent__carousel__slider__job-area__element__title"],
      textContent: job.title,
    });

    const jobDescription = HtmlService.buildHtmlElement<HTMLDivElement>({
      elementType: "div",
      classList: [
        "search-for-talent__carousel__slider__job-area__element__job-description",
      ],
    });

    const jobDescriptionPeriod =
      HtmlService.buildHtmlElement<HTMLParagraphElement>({
        elementType: "p",
        classList: [
          "search-for-talent__carousel__slider__job-area__element__job-description__period",
        ],
        textContent: job.period,
      });

    const jobDescriptionSalary =
      HtmlService.buildHtmlElement<HTMLParagraphElement>({
        elementType: "p",
        classList: [
          "search-for-talent__carousel__slider__element__job-description__salary",
        ],
        textContent: `Salary: ${job.salary}`,
      });

    jobDescription.appendChild(jobDescriptionPeriod);
    jobDescription.appendChild(jobDescriptionSalary);

    divJob.appendChild(jobTitle);
    divJob.appendChild(jobDescription);
    divJobArea.appendChild(divJob);
  }
}
