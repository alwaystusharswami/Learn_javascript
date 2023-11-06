const form = document.querySelector("form");
// console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const weight = document.querySelector("#weight").value;
  const height = document.querySelector("#height").value;
  const result = document.querySelector("#result");

  // console.log(weight);
  // console.log(height);
  if (height === "" || height < 0) {
    result.innerHTML = "please give height";
  } else if (weight === "" || weight < 0) {
    result.innerHTML = "please give weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let mess = "";
    // switch(bmi){

    //     case (bmi<18.6):
    //         mess='Under Weight';
    //         break;
    //     case (bmi<24.9):
    //         mess='Normal Range';
    //         break;
    //     default:
    //         mess='over Weight';

    // }
    if (bmi < 18.6) {
      mess = "Under Weight";
    } else if (bmi > 18.6 && bmi < 24.9) {
      mess = "Normal Range";
    } else if (bmi > 24.9) {
      mess = "Over Weight";
    }
    result.innerHTML = `<h1>${bmi} ${mess} </h1>`;
  }
});
