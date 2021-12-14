

function addEventInEveryLink() {
  const linkElements = document.getElementsByClassName('menu_subMenu_list_link_menu');
  for (const element of Array.from(linkElements)) {
    element.addEventListener('click', changeActiveLink);
  }
}

function changeActiveLink(event) {
  const activeElement = document.getElementsByClassName('menu_subMenu_list_link_active')[0];
  activeElement.classList.remove('menu_subMenu_list_link_active');
  
  const gotEvent = event || window.event;
  const target = gotEvent.target || gotEvent.srcElement;
  target.classList.add('menu_subMenu_list_link_active');
}

addEventInEveryLink();

const contentElement = document.getElementsByClassName('content')[0];

for (const element of galleryElement) {
  const divContentRow = document.createElement('div');
  divContentRow.classList = ['content_row'];
  const divContentPhoto = createDivContentPhoto(element.image);
  const divContentDescription = createDiv('content_description');
  const divContentDescriptionContent = createDiv('content_description_content');
  const pHeadTitle = createPElementWithText('content_description_title_head', element.headTitle);
  const pTitle = createPElementTitle(element.title);
  const divContentDescriptionText = createDivContentDescriptionText(element.description);
  const pViewPortfolioLink = createdViewPortfolioLink();
  divContentDescriptionContent.appendChild(pHeadTitle);
  divContentDescriptionContent.appendChild(pTitle);
  divContentDescriptionContent.appendChild(divContentDescriptionText);
  divContentDescriptionContent.appendChild(pViewPortfolioLink);
  divContentDescription.appendChild(divContentDescriptionContent);
  divContentRow.appendChild(divContentPhoto);
  divContentRow.appendChild(divContentDescription);
  contentElement.appendChild(divContentRow);
}

const divContentLoad = createDivContentLoad();
contentElement.appendChild(divContentLoad);

function createDiv(className) {
  const div = document.createElement('div');
  div.classList = [className];
  return div;
}

function createPElementWithText(className, text) {
  const p = document.createElement('p');
  p.classList = [className];
  p.append(text);
  return p;
}

function createDivContentPhoto(image) {
  const div = createDiv('content_photo');
  div.style.backgroundImage = `url('img/${image}')`;
  return div;
}

function createPElementTitle(title) {
  const p = document.createElement('p');
  const a = document.createElement('a');
  p.classList = ['content_description_title'];
  a.href = '#';
  a.append(title);
  p.appendChild(a);
  return p;
}

function createDivContentDescriptionText(description) {
  const div = createDiv('content_description_text');
  const p = document.createElement('p');
  p.append(description);
  div.appendChild(p);
  return div;
}

function createDivContentLoad() {
  const div = document.createElement('div');
  const a = document.createElement('a');
  const span = document.createElement('span');
  div.classList = ['content_load_new'];
  a.append('Load more ');
  a.href = '#';
  span.append('🗘');
  a.appendChild(span);
  div.appendChild(a);
  return div;
}