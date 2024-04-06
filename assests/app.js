const search = document.querySelector("#search-btn");
const userInput = document.querySelector("#userInput");
const result = document.querySelector("#result");
const apiKey = "KwHyeO+SFI1CKNO5gSe5iQ==DLYmsCkQyhtrHaAc";
let options = {
    method: 'GET',
    headers: {
        'x-api-key': apiKey
    }
};



search.addEventListener('click', fetchData);

function fetchData() {
    let dogName = userInput.value;
    if (dogName.length === 0) {
        result.innerHTML = `<h4 class="notice">Enter Dog Breeds Name</h4>`
    } else {
        const apiUrl = `https://api.api-ninjas.com/v1/dogs?name=${dogName}`;
        fetch(apiUrl, options).then(res => res.json()).then(data => {
            userInput.value = "";
            console.log(data);

            result.innerHTML = `
            <img src="${data[0].image_link}">
            <h2>${data[0].name}</h2>
            <h3>Attributes</h3>
            <div class="attribute-lists">
                    <div class="list-item">
                        <p class="attribute-text">Barking</p>
                        <img src="./image/${data[0].barking}.png"  style="width:80px; height:20px">
                    </div>
                    <div class="list-item">
                        <p class="attribute-text">Good with children</p>
                        <img src="./image/${data[0].good_with_children}.png" style="width:80px; height:20px">
                    </div>
                    <div class="list-item">
                        <p class="attribute-text">Good With Other Dogs</p>
                        <img src="./image/${data[0].good_with_other_dogs}.png" style="width:80px; height:20px">
                    </div>
                    <div class="list-item">
                        <p class="attribute-text">Good with strangers</p>
                        <img src="./image/${data[0].good_with_strangers}.png" style="width:80px; height:20px">
                    </div>
                    <div class="list-item">
                        <p class="attribute-text">Protectiveness</p>
                        <img src="./image/${data[0].protectiveness}.png" style="width:80px; height:20px">
                    </div>
                    <div class="list-item">
                        <p  class="attribute-text">Playfulness</p>
                        <img src="./image/${data[0].playfulness}.png"style="width:80px; height:20px">
                    </div>
                </div>
                <h3>Knowledge</h3>
                <div class="knowledge-container">
                    <div class="male">
                        <h4>Male</h4>
                        <p>Max Weight : ${data[0].max_weight_male} Pounds</p>
                        <p>Min Weight : ${data[0].min_weight_male} Pounds</p>
                        <p>Max Height : ${data[0].max_height_male} Inch</p>
                        <p>Min Height : ${data[0].min_height_male} Inch</p>
                        <p>Max Life Expectancy : ${data[0].max_life_expectancy} years</p>
                    </div>
                    <div class="female">
                        <h4>Female</h4>
                        <p>Max Weight : ${data[0].max_weight_female} Pounds</p>
                        <p>Min Weight : ${data[0].min_weight_female} Pounds</p>
                        <p>Max Height : ${data[0].max_height_female} Inch</p>
                        <p>Min Height : ${data[0].min_height_female} Inch</p>
                        <p>Min Life Expectancy : ${data[0].min_life_expectancy} years</p>
                    </div>
                </div>
            `
        }).catch(() => {
            result.innerHTML = `<h4 class="notice">Enter a valid dog breeds name</h4>`
        })
    }

}
search.addEventListener('click', fetchData)
document.body.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        fetchData()
    }
})