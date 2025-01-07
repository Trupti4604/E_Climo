function changeBackgroundColor(temperature) {
  let backgroundColor;

  // Change to light and bright colors based on temperature
  if (temperature > 35) {
    backgroundColor = "#FFDAB9"; // Hot (Peach Puff)
  } else if (temperature > 30) {
    backgroundColor = "#FFE4B5"; // Warm (Moccasin)
  } else if (temperature > 20) {
    backgroundColor = "#FFFACD"; // Mild (Lemon Chiffon)
  } else if (temperature > 10) {
    backgroundColor = "#E0FFFF"; // Cool (Light Cyan)
  } else {
    backgroundColor = "#ADD8E6"; // Cold (Light Blue)
  }

  // Apply the new background color
  document.body.style.background = backgroundColor;
}

function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "8d50721f6ef4337f12b843e0fcf87729";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("City not found!");
        return;
      }

      const weatherCondition = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;

      document.getElementById("weather-condition").innerText = weatherCondition;
      document.getElementById("temperature").innerText = temperature;
      document.getElementById("humidity").innerText = humidity;

      // Show the weather result section without moving the input block
      const weatherResult = document.getElementById("weather-result");
      weatherResult.style.display = "block"; // Make it visible

      changeBackgroundColor(temperature);
      showRecommendations(temperature);
    })
    .catch((error) => console.error("Error fetching weather data:", error));
}

function showRecommendations(temp) {
  let clothing = [];
  let food = [];
  let exercise = [];
  let yogaPosture = "";
  let games = [];
  let skincare = [];

  // Recommendations based on temperature
  if (temp > 35) {
    clothing.push("Light clothing (Cotton t-shirts, shorts)");
    food.push("Cold salads, fruits, ice creams");
    exercise.push("Swimming, light jogging");
    yogaPosture =
      "Cooling yoga postures like Sitali Pranayama (Cooling Breath), Forward Bends";
    games.push("Swimming, Beach volleyball");
    skincare.push("Apply sunscreen, Stay hydrated");
  } else if (temp > 30) {
    clothing.push("Light clothing (T-shirts, light dresses)");
    food.push("Cold smoothies, fresh fruits");
    exercise.push("Jogging, cycling");
    yogaPosture =
      "Moderate yoga postures like Downward Dog (Adho Mukha Svanasana), Child’s Pose (Balasana)";
    games.push("Football, Badminton");
    skincare.push("Use sunscreen, Drink plenty of water");
  } else if (temp > 20) {
    clothing.push("Comfortable clothing (Jeans, T-shirts)");
    food.push("Salads, sandwiches, smoothies");
    exercise.push("Cycling, running");
    yogaPosture =
      "Dynamic postures like Warrior Pose (Virabhadrasana), Tree Pose (Vrksasana)";
    games.push("Tennis, Basketball");
    skincare.push("Moisturize skin, Stay hydrated");
  } else if (temp > 10) {
    clothing.push("Layered clothing (Sweaters, Jackets)");
    food.push("Soups, stews, hot drinks");
    exercise.push("Indoor exercises, Walking");
    yogaPosture =
      "Gentle postures like Cobra Pose (Bhujangasana), Seated Forward Bend (Paschimottanasana)";
    games.push("Indoor games like Chess, Table Tennis");
    skincare.push("Moisturize, Apply lip balm");
  } else {
    clothing.push("Heavy clothing (Coats, Gloves, Scarves)");
    food.push("Hot beverages, Heavy meals");
    exercise.push("Indoor exercises, Yoga");
    yogaPosture =
      "Warm yoga poses like Sun Salutations (Surya Namaskar), Bridge Pose (Setu Bandhasana)";
    games.push("Indoor games like Carom, Snakes and Ladders");
    skincare.push("Apply thicker moisturizer, Stay hydrated");
  }

  let recommendationHTML = `        
    <h4>Clothing:</h4><ul>${clothing
      .map((item) => `<li>${item}</li>`)
      .join("")}</ul>
    <h4>Food:</h4><ul>${food
      .map((item) => `<li>${item}</li>`)
      .join("")}</ul>
    <h4>Exercise/Yoga:</h4><ul>${exercise
      .map((item) => `<li>${item}</li>`)
      .join("")}</ul>
    <h4>Yoga Posture:</h4><p>${yogaPosture}</p>
    <h4>Games:</h4><ul>${games
      .map((item) => `<li>${item}</li>`)
      .join("")}</ul>
    <h4>Skincare:</h4><ul>${skincare
      .map((item) => `<li>${item}</li>`)
      .join("")}</ul>
  `;

  document.getElementById("recommendations").innerHTML = recommendationHTML;
}

function reloadPage() {
  window.location.reload();
}
