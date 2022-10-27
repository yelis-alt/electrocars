function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#000000', controlSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}
    
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#000000', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
    }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#000000', toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#000000', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#C6C6C6', '#000000', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

function controlfromInput1(fromSlider1, fromInput1, toInput1, controlSlider) {
    const [from, to] = getParsed(fromInput1, toInput1);
    fillSlider(fromInput1, toInput1, '#C6C6C6', '#000000', controlSlider);
    if (from > to) {
        fromSlider1.value = to;
        fromInput1.value = to;
    } else {
        fromSlider1.value = from;
    }
}
    
function controltoInput1(toSlider1, fromInput1, toInput1, controlSlider) {
    const [from, to] = getParsed(fromInput1, toInput1);
    fillSlider(fromInput1, toInput1, '#C6C6C6', '#000000', controlSlider);
    setToggleAccessible(toInput1);
    if (from <= to) {
        toSlider1.value = to;
        toInput1.value = to;
    } else {
        toInput1.value = from;
    }
}

function controlfromSlider1(fromSlider1, toSlider1, fromInput1) {
  const [from, to] = getParsed(fromSlider1, toSlider1);
  fillSlider(fromSlider1, toSlider1, '#C6C6C6', '#000000', toSlider1);
  if (from > to) {
    fromSlider1.value = to;
    fromInput1.value = to;
  } else {
    fromInput1.value = from;
  }
}

function controltoSlider1(fromSlider1, toSlider1, toInput1) {
  const [from, to] = getParsed(fromSlider1, toSlider1);
  fillSlider(fromSlider1, toSlider1, '#C6C6C6', '#000000', toSlider1);
  setToggleAccessible(toSlider1);
  if (from <= to) {
    toSlider1.value = to;
    toInput1.value = to;
  } else {
    toInput1.value = from;
    toSlider1.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider1 = document.querySelector('#toSlider1');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider1.style.zIndex = 2;
  } else {
    toSlider1.style.zIndex = 0;
  }
}

const fromSlider1 = document.querySelector('#fromSlider1');
const toSlider1 = document.querySelector('#toSlider1');
const fromInput1 = document.querySelector('#fromInput1');
const toInput1 = document.querySelector('#toInput1');
fillSlider(fromSlider1, toSlider1, '#C6C6C6', '#000000', toSlider1);
setToggleAccessible(toSlider1);

fromSlider1.oninput = () => controlfromSlider1(fromSlider1, toSlider1, fromInput1);
toSlider1.oninput = () => controltoSlider1(fromSlider1, toSlider1, toInput1);
fromInput1.oninput = () => controlfromInput1(fromSlider1, fromInput1, toInput1, toSlider1);
toInput1.oninput = () => controltoInput1(toSlider1, fromInput1, toInput1, toSlider1);