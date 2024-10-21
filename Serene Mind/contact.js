document.addEventListener("DOMContentLoaded", function() {
    const scheduleForm = document.getElementById("scheduleForm");
    const confirmationMessage = document.getElementById("confirmation");
    const professionalDetails = document.getElementById("professional-details");
    const counselorNameElement = document.getElementById("counselorName");
    const counselorInfoElement = document.getElementById("counselorInfo");

    // List of professionals
    const professionals = [
        {
            name: "Melinda Smith, M.A",
            role: "Founder & Mental Health Advocate",
            contact: "Email: melinda@serenemind.com | Phone: +1 234 567 891"
        },
        {
            name: "Jane Smith",
            role: "Licensed Professional Counselor",
            contact: "Email: jane.smith@serenemind.com | Phone: +1 234 567 892"
        },
        {
            name: "Chris Lee",
            role: "Mindfulness Coach",
            contact: "Email: chris.lee@serenemind.com | Phone: +1 234 567 893"
        }
    ];

    // Function to get a random professional
    function getRandomProfessional() {
        const randomIndex = Math.floor(Math.random() * professionals.length);
        return professionals[randomIndex];
    }

    // Event listener for form submission
    scheduleForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Randomly select a professional counselor
        const assignedCounselor = getRandomProfessional();

        // Display the professional's name in the confirmation message
        counselorNameElement.textContent = assignedCounselor.name;

        // Display professional's details
        counselorInfoElement.innerHTML = `
            <p><strong>Name:</strong> ${assignedCounselor.name}</p>
            <p><strong>Role:</strong> ${assignedCounselor.role}</p>
            <p><strong>Contact Information:</strong> ${assignedCounselor.contact}</p>
        `;

        // Show the confirmation message and professional details
        confirmationMessage.style.display = "block";
        professionalDetails.style.display = "block";
    });
});
