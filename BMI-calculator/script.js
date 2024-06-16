const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector('#results')

    if(height === ''|| height < 0|| isNaN(height)) {
        results.innerHTML = "Please give a valid height: "//fills the empty div tag with id result
    } 
    else if(weight === ''|| weight < 0|| isNaN(weight)) {
        results.innerHTML = "Please give a valid weight: "//fills the empty div tag with id result
    }
    else {
        const bmi = (weight /((height*height)/10000)).toFixed(2);
        results.innerHTML = `BMI : ${bmi}`
    }
})