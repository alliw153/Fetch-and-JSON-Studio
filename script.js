window.addEventListener("load", function() {

    const container = document.getElementById("container");
    
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(response => response.json())
    .then(data => {
    

    let astronauts = "";
    for (const astronaut in data) {
     console.log(data[astronaut].firstName);
     astronauts += `
     <div class="astronaut">
   <div class="bio">
      <h3>${data[astronaut].firstName} ${data[astronaut].lastName}</h3>
      <ul>
         <li>${data[astronaut].hoursInSpace}</li>
         <li>${data[astronaut].active}</li>
         <li>Skills: ${data[astronaut].skills}</li>
      </ul>
   </div>
   <img class="avatar" src=${data[astronaut].picture}>
</div> 
     `
    }
    container.innerHTML += astronauts;
    });
});