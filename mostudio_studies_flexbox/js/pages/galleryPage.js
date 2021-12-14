function createImagenGalleryItems(galleryElement) {
  const divContentGalleryImages = document.getElementsByClassName('content_gallery_images')[0];
  for (const element of galleryElement) {
    const createdElement = createImageElement(element);
    divContentGalleryImages.appendChild(createdElement);
  }
}

function createImageElement(element) {
  const div = document.createElement('div');
  const divDescription = createdImageDescriptions(element);
  div.style.backgroundImage = `url('img/${element.image}')`;
  div.classList = ['content_gallery_images_item'];
  div.appendChild(divDescription)
  return div;
}

function createdImageDescriptions(data) {
  const div = document.createElement('div');
  const pHeadTitle = createPHeadTitleElement(data);
  const pTitle = createPTitleElement(data);
  const pViewPortfolioLink = createdViewPortfolioLink();
  div.classList = ['content_gallery_images_item_description'];
  div.appendChild(pHeadTitle);
  div.appendChild(pTitle);
  div.appendChild(pViewPortfolioLink);
  return div;
}

function createPHeadTitleElement(data) {
  const p = document.createElement('p');
  p.classList = ['content_gallery_images_item_description_head_title']
  p.append(data.headTitle);
  return p;
}

function createPTitleElement(data) {
  const p = document.createElement('p');
  p.classList = ['content_gallery_images_item_description_title'];
  p.append(data.title);
  return p;
}

createImagenGalleryItems(galleryElement);