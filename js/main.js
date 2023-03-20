'use strict';

const ads = document.querySelector('.ads');
const courseItems = document.querySelectorAll('.item');
const scopeTypeItem = document.querySelector('.item_two .props__item_four');
const scopeItemsList = document.querySelector('.item_two .props__list');
const asyncItemsList = document.querySelector('.item_three .props__list');
const typeItems = document.querySelectorAll('.item_four .props__item'); // 1
const thisItemsList = document.querySelector('.item_five .props__list'); // 5
const esItems = document.querySelectorAll('.item_six .props__item_two');
const wrongThisTitle = document.querySelector('.item_three .item__title');
const scopeTitle = document.querySelector('.item_five .item__title');
const asyncTitle = document.querySelector('.item_six .item__title');
const esSixTitle = document.querySelector('.item_two .item__title');
const clonedThisItems = thisItemsList.cloneNode(true);
const clonedAsyncItems = asyncItemsList.cloneNode(true);
const clonedAsyncTitle = asyncTitle.cloneNode(true);

ads.remove();

courseItems[3].after(courseItems[0]);
asyncItemsList.replaceWith(clonedThisItems);
thisItemsList.replaceWith(clonedAsyncItems);
scopeItemsList.append(esItems[0], esItems[1]);
typeItems[2].after(scopeTypeItem);
scopeTitle.replaceWith(clonedAsyncTitle);
esSixTitle.replaceWith(scopeTitle);
asyncTitle.replaceWith(esSixTitle);

const h2 = document.createElement('h2');
const rightThisTitle = document.createTextNode('This и прототипы объектов');
h2.append(rightThisTitle);
wrongThisTitle.replaceWith(h2);
const mgB = '20px';
h2.style.marginBottom = mgB;
