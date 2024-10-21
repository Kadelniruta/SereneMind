// Get references to the form and results section
const quizForm = document.getElementById("quiz-form");
const resultsSection = document.getElementById("results");
const feedbackDiv = document.getElementById("feedback");
const recommendationsDiv = document.getElementById("recommendations");
const ctx = document.getElementById("resultsChart").getContext("2d");
let resultsChart; // Variable to hold the chart instance

// Event listener for form submission
quizForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect quiz answers and calculate anxiety and depression scores
    const anxietyScore = parseInt(document.getElementById("q1").value) +
                         parseInt(document.getElementById("q3").value) +
                         parseInt(document.getElementById("q4").value);

    const depressionScore = parseInt(document.getElementById("q2").value) +
                            parseInt(document.getElementById("q5").value);

    // Display the results section
    resultsSection.style.display = "block";

    // If a chart already exists, destroy it before creating a new one
    if (resultsChart) {
        resultsChart.destroy();
    }

    // Create a new pie chart to display the results
    resultsChart = new Chart(ctx, {
        type: 'pie',  // Change from 'bar' to 'pie'
        data: {
            labels: ['Anxiety', 'Depression'],
            datasets: [{
                label: 'Score',
                data: [anxietyScore, depressionScore], // The slices of the pie
                backgroundColor: ['#36a2eb', '#ff6384'], // Colors for each slice
                borderColor: ['#ffffff', '#ffffff'], // White border for each slice
                borderWidth: 2 // Border thickness for clearer separation
            }]
        },
        options: {
            responsive: true, // Make sure the chart adjusts based on screen size
            plugins: {
                legend: {
                    display: true, // Display the legend to identify the categories
                    position: 'bottom' // Position the legend at the bottom
                }
            }
        }
    });

    // Provide feedback based on the scores
    if (anxietyScore <= 6 && depressionScore <= 4) {
        feedbackDiv.textContent = "Your results suggest mild anxiety and depression. Here's some self-care advice.";
        feedbackDiv.className = "feedback low";

        // Recommendations for mild anxiety and depression
        recommendationsDiv.innerHTML = `
            <h3>Self-Care Recommendations:</h3>
            <ul>
                <li><strong>Practice mindfulness:</strong> Engage in mindfulness or meditation for 10-15 minutes daily.</li>
                <li><strong>Physical exercise:</strong> Try moderate exercise like walking, yoga, or stretching to reduce anxiety.</li>
                <li><strong>Connect with loved ones:</strong> Spend time with friends or family members to combat feelings of isolation.</li>
                <li><strong>Establish a routine:</strong> Set small goals for daily activities to bring structure to your day.</li>
                <li><strong>Sleep hygiene:</strong> Maintain a regular sleep schedule and avoid screens before bed for restful sleep.</li>
                <li><strong>Limit caffeine and sugar:</strong> Reduce intake of stimulants that can heighten anxiety or irritability.</li>
                <li><strong>Creative expression:</strong> Engage in hobbies like drawing, writing, or playing an instrument to relieve stress.</li>
            </ul>
        `;
        recommendationsDiv.className = "recommendations";
    } else {
        feedbackDiv.innerHTML = `
            <p>Your results indicate high anxiety and/or depression. Please contact a mental health professional for further assistance.</p>
            <a href="contact.html" class="contact-btn">Contact a Counselor</a>
        `;
        feedbackDiv.className = "feedback high";

        // Clear recommendations for high scores
        recommendationsDiv.innerHTML = "";
    }
});


document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Display confirmation message after form submission
    document.getElementById('scheduleForm').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
});
