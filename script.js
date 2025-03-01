function generateMission() {
    const planets = ["Mars", "Jupiter", "Venus", "Saturn", "Neptune", "Exo-Planet X", "Kepler-22b"];
    const spacecrafts = ["Orion", "Voyager X", "Lunar Falcon", "Nebula Runner", "Starlight Explorer"];
    
    let planet = planets[Math.floor(Math.random() * planets.length)];
    let spacecraft = spacecrafts[Math.floor(Math.random() * spacecrafts.length)];
    let missionDays = Math.ceil(Math.random() * 100);
    let missionHours = Math.ceil(Math.random() * 24);
    
    let missionDetails = `Your mission is to explore <strong>${planet}</strong>!<br>
                          You will travel aboard the <strong>${spacecraft}</strong>.<br>
                          Estimated mission duration: <strong>${missionDays} days and ${missionHours} hours</strong>.`;
    
    document.getElementById("mission").innerHTML = missionDetails;
}
