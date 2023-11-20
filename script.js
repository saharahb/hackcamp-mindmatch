document.addEventListener("DOMContentLoaded", function() {
  var topicButtons = document.getElementsByClassName("topic");
  var goButton = document.getElementById("goButton");

  // Define professionals with multiple topics
  var professionals = {
    "Dr. Smith": {
      topics: ["Anxiety and Depression", "Relationships"],
      email: "dr.smith@example.com",
      phoneNumber: "123-456-7890",
      address: "123 Main St, Cityville"
    },
    "Dr. Johnson": {
      topics: ["Eating Disorders", "Grief"],
      email: "dr.johnson@example.com",
      phoneNumber: "234-567-8901",
      address: "456 Oak St, Townsville"
    },
    "Dr. Brown": {
      topics: ["Relationships", "Grief", "BIPOC Support"],
      email: "dr.brown@example.com",
      phoneNumber: "345-678-9012",
      address: "789 Maple Ave, Villagetown"
    },
    "Dr. Miller": {
      topics: ["Grief", "Substance Abuse"],
      email: "dr.miller@example.com",
      phoneNumber: "456-789-0123",
      address: "101 Cedar Ln, Cityville"
    },
    "Dr. Davis": {
      topics: ["Domestic Abuse", "Relationships"],
      email: "dr.davis@example.com",
      phoneNumber: "567-890-1234",
      address: "202 Main St, Townsville"
    },
    "Dr. Taylor": {
      topics: ["LGBTQ+ Support", "Relationships"],
      email: "dr.taylor@example.com",
      phoneNumber: "678-901-2345",
      address: "303 Oak St, Cityville"
    },
    "Dr. Clark": {
      topics: ["BIPOC Support", "Substance Abuse"],
      email: "dr.clark@example.com",
      phoneNumber: "789-012-3456",
      address: "404 Maple Ave, Villagetown"
    }
  };

  for (var i = 0; i < topicButtons.length; i++) {
    topicButtons[i].addEventListener("click", function() {
      // Toggle the 'selected' class to highlight the selected topics
      this.classList.toggle("selected");
    });
  }

  goButton.addEventListener("click", function() {
    var selectedTopics = getSelectedTopics();

    if (selectedTopics.length > 0) {
      // Match the user with professionals for each selected topic
      displayMatchedProfessionals(selectedTopics);
    } else {
      alert("Please select at least one topic before finding help.");
    }
  });

  function getSelectedTopics() {
    var selectedTopics = [];
    for (var i = 0; i < topicButtons.length; i++) {
      if (topicButtons[i].classList.contains("selected")) {
        selectedTopics.push(topicButtons[i].getAttribute("data-topic"));
      }
    }
    return selectedTopics;
  }
  goButton.addEventListener('click', function() {
    scrollToBottom();
  });
  function scrollToBottom() {
    const bottomSection = document.getElementById('bottomSection');
    if (bottomSection) {
      bottomSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function displayMatchedProfessionals(selectedTopics) {
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "<h3>Matched Professionals:</h3>";

    for (var doctor in professionals) {
      if (professionals.hasOwnProperty(doctor)) {
        var doctorInfo = professionals[doctor];
        var doctorTopics = doctorInfo.topics;
        var intersection = selectedTopics.filter(topic => doctorTopics.includes(topic));

        if (intersection.length > 0) {
          resultsContainer.innerHTML += `<div class="doctor-info">
                      <p>${doctor}: Specializing in ${intersection.join(", ")}</p>
                      <ul>
                          <li>Email: ${doctorInfo.email}</li>
                          <li>Phone: ${doctorInfo.phoneNumber}</li>
                          <li>Address: ${doctorInfo.address}</li>
                      </ul>
                  </div>`;
        }
      }
    }
  }
});


