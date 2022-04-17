console.log('working');

let formLabels = document.querySelectorAll('form .grid-row>label');
let maxElementWidth;
if (formLabels !== undefined) {
  try {
    let widths = [];
    formLabels.forEach((el) => {
      let innerSpan = el.querySelector('span');
      widths.push(innerSpan.clientWidth);
      maxElementWidth = widths.sort((a, b) => a - b)[widths.length - 1];
    });
    formLabels.forEach((el) => {
      el.querySelector(
        'input'
      ).style.width = `calc(100% - calc(${maxElementWidth}px + 1rem))`;
    });
  } catch (err) {
    console.log(err);
  }
}
