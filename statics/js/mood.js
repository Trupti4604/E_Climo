function getMoodRecommendations() {
    const mood = document.getElementById("mood").value;
    let activities = [];
    let skincare = [];
    let yogaPosture = "";
  
    if (mood === "tired") {
      activities.push("Relaxing bath, Listening to calm music, Aromatherapy");
      skincare.push("Under-eye masks, Hydrating facial mist");
      yogaPosture = "Shavasana (Corpse Pose), Reclining Butterfly Pose";
    } else if (mood === "stressed") {
      activities.push("Journaling, Meditation, Deep breathing exercises");
      skincare.push("Essential oils, Stress-relief face masks");
      yogaPosture = "Child’s Pose, Seated Forward Bend";
    } else if (mood === "active") {
      activities.push("Outdoor sports, Dance, Adventure activities");
      skincare.push("Hydrating mist, Lightweight sunscreen");
      yogaPosture = "Power Yoga, Warrior Flow";
    }
  
    let moodHTML = `
      <h4>Activities:</h4><ul>${activities.map((item) => `<li>${item}</li>`).join("")}</ul>
      <h4>Yoga Posture:</h4><p>${yogaPosture}</p>
      <h4>Skincare:</h4><ul>${skincare.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
  
    document.getElementById("mood-recommendations").innerHTML = moodHTML;
    document.getElementById("mood-result").style.display = "block";
  }
  