import { PageService } from "./core/services/page.service";
import "./css/base/reset.css";
import "./css/page.css";
import "./css/header.css";
import "./css/about-us.css";
import "./css/achieves.css";
import "./css/search-for-new-talent.css";
import "./css/employer-opinion.css";
import "./css/footer.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = ``;

(async () => {
  const container = PageService.buildPage();
  document.querySelector<HTMLDivElement>("#app")?.appendChild(container);
})();
