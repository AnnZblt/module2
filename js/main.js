'use strict';

const ads = document.querySelector('.ads');
const courseItems = document.querySelectorAll('.item');
const propsList = document.querySelectorAll('.props__list');
const scopeItemsList = document.querySelector('.item_two .props__list');
const asyncThisList = document.querySelector('.item_three .props__list');
const thisAsyncList = document.querySelector('.item_five .props__list');
const esItemsList = document.querySelector('.item_six .props__list');
const scopeTypeItem = document.querySelector('.item_two .props__item_four');
const asyncContainer = document.querySelector('.item_five .content');
const typeItems = document.querySelectorAll('.item_four .props__item');
const esItems = document.querySelectorAll('.item_six .props__item_two');
const wrongThisTitle = document.querySelector('.item_three .item__title');
const scopeTitle = document.querySelector('.item_five .item__title');
const asyncTitle = document.querySelector('.item_six .item__title');
const esSixTitle = document.querySelector('.item_two .item__title');

ads.remove();
courseItems[3].after(courseItems[0]);
scopeItemsList.append(esItems[0], esItems[1]);
typeItems[2].after(scopeTypeItem);
propsList[3].after(thisAsyncList);
asyncContainer.append(asyncTitle);
asyncContainer.append(asyncThisList);
wrongThisTitle.textContent = 'This и прототипы объектов';
scopeItemsList.before(scopeTitle);
esItemsList.before(esSixTitle);
