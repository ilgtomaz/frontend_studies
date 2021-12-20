const orders = [
  {
    name: 'Order 1',
    date: '20/12/2021',
    type: 'Priority 1',
    description: 'Order 1',
    id: 'order1'
  },
  {
    name: 'Order 2',
    date: '21/12/2021',
    type: 'Priority 3',
    description: 'Order 2',
    id: 'order2'
  },
  {
    name: 'Order 3',
    date: '22/12/2021',
    type: 'Priority 2',
    description: 'Order 3',
    id: 'order3'
  },
  {
    name: 'Order 4',
    date: '23/12/2021',
    type: 'Priority 1',
    description: 'Order 4',
    id: 'order4'
  },
  {
    name: 'Order 5',
    date: '23/12/2021',
    type: 'Priority 4',
    description: 'Order 5',
    id: 'order5'
  }
];

const ordersContentElement = document.getElementsByClassName('ordersContent__content')[0];
const selectTypeElement = document.getElementsByClassName('ordersContent__filters__selectType')[0];
const elementsToDrop = document.getElementsByClassName('weekContent__daysOfWeek__day');

addDragAttributesToElements();

selectTypeElement.addEventListener('change', function(event) {
  const target = event.target;
  const searchedValue = `Priority ${target.value}`;
  const arrayToSort =  getOnlyElementsToSort();
  cleanPreviousOrders(ordersContentElement);
  const elementsTarget = arrayToSort.filter(order => order.type === searchedValue);
  let restOfElementsTarget = arrayToSort.filter(order => order.type != searchedValue);
  restOfElementsTarget = restOfElementsTarget.sort(sortByType);
  fillTheOrders(ordersContentElement, elementsTarget.concat(restOfElementsTarget));
}.bind(this));

fillTheOrders(ordersContentElement, orders);

function addDragAttributesToElements() {
  ordersContentElement.setAttribute('ondrop', 'drop(event)');
  ordersContentElement.setAttribute('ondragover', 'allowDrop(event)');

  for (const element of elementsToDrop) {
    element.setAttribute('ondrop', 'drop(event)');
    element.setAttribute('ondragover', 'allowDrop(event)');
  }
}

function getOnlyElementsToSort() {
  const arrayToSort = [];
  const ordersContent = document.getElementsByClassName('ordersContent__content')[0];
  const childrenOrdersContent = Array.from(ordersContent.children);
  for (const child of childrenOrdersContent) {
    const childText = child.firstElementChild.innerText;
    arrayToSort.push(orders.find(order => order.name === childText));
  }
  return arrayToSort;
}

function cleanPreviousOrders(ordersContentElement) {
  ordersContentElement.innerHTML = '';
}

function fillTheOrders(ordersContentElement, orders) {
  for (const order of orders) {
    const mainDiv = createOrderContentDiv();
    const pTitle = createElementP('ordersContent__content__order__title', '', order.name);
    const pDate = createElementP('ordersContent__content__order__date', 'Date', order.date);
    const pType = createElementP('ordersContent__content__order__type', 'Type', order.type);
    const pDescription = createElementP('ordersContent__content__order__description', 'Description', order.description);
    mainDiv.id = order.id;
    mainDiv.appendChild(pTitle);
    mainDiv.appendChild(pDate);
    mainDiv.appendChild(pType);
    mainDiv.appendChild(pDescription);
    mainDiv.setAttribute('draggable', 'true');    
    mainDiv.setAttribute('ondragstart', 'drag(event)');
  
    ordersContentElement.appendChild(mainDiv);
  }
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const foundElement = document.getElementById(data);
  if (Array.from(event.target.classList).includes('ordersContent__content')) {
    foundElement.classList.remove('ordersContent__content__order--dragged')
    foundElement.classList.add('ordersContent__content__order--draggedBack');
  } else {
    foundElement.classList.remove('ordersContent__content__order--draggedBack');
    foundElement.classList.add('ordersContent__content__order--dragged');
  }
  
  event.target.appendChild(foundElement);
}

function createElementP(className, field, content) {
  const p = document.createElement('p');
  p.classList = [className];
  if (field) {
    p.append(`${field}: ${content}`);
  } else {
    p.append(content);
  }
  
  return p;
}

function createOrderContentDiv() {
  const div = document.createElement('div');
  div.classList = ['ordersContent__content__order'];
  return div;
}

function sortByType(element1, element2) {
  if (element1.type < element2.type) {
    return -1;
  }

  if (element1.type > element2.type) {
    return 1;
  }

  return 0;
}
