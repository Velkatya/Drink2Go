const connectRangeSlider = () => {

  const slider = document.querySelector('.range-slider');

  if (slider) {
    noUiSlider.create(slider, {
      start: [0, 123],
      connect: true,
      step: 1,
      range: {
          'min': [0],
          'max': [123]
      }
    });

    const input0 = document.querySelector('.input-min');
    const input1 = document.querySelector('.input-max');
    const inputs = [input0, input1]

    slider.noUiSlider.on("update", function(values, handle){
      inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {

      let arr = [null, null];
      arr[i] = value;
      slider.noUiSlider.set(arr);
    }

    inputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
        setRangeSlider(index, e.currentTarget.value)
      });
    });
  }
};

export { connectRangeSlider };


