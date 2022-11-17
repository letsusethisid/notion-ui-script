const afterBegin = 'afterbegin';

const setUI = () => {
   const isMobileView = window.innerWidth <= 768;
   console.log('isMobileView -> ', isMobileView);
   !isMobileView && loadTableOfContentMenu();
}

const loadTableOfContentMenu = () => {
  const tableOfContent = document.querySelector('.notion-table_of_contents-block');
  const tableOfContentHTML = tableOfContent.outerHTML;
  console.log('tableOfContent -> ', tableOfContent);
  const notionFrameDiv = document.querySelector('.notion-frame');
  console.log('notionFrameDiv -> ', notionFrameDiv);
  console.log('tableOfContentHTML -> ', tableOfContentHTML);
  notionFrameDiv.insertAdjacentHTML(afterBegin, tableOfContentHTML);
  tableOfContent.remove();
  removeChildren(tableOfContent);
}

const removeChildren = (element) => {
  [...element.children].map((child) => child.remove());
}


const removeChildrenExceptOne = (element, childClassName) => {
  [...element.children].map((child) => {
    if (!child.classList.contains(childClassName)) {
      child.remove();
    }
  });
}
