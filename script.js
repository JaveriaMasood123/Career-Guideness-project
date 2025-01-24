// Select the form and result container
const careerForm = document.getElementById("careerForm");
const resultContainer = document.getElementById("result");

// Handle form submission
careerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const subject = document.getElementById("subject").value;

    // Provide career advice based on the selected subject
    let advice = "";
    switch (subject) {
        case "Mathematics":
            advice = "You can pursue careers in Data Science, Actuarial Science, Engineering, or Teaching.";
            break;
        case "Science":
            advice = "Consider careers in Medicine, Research, Biotechnology, or Environmental Science.";
            break;
        case "History":
            advice = "You could explore careers in Archaeology, History Teaching, Museum Curator, or Writing.";
            break;
        case "Physics":
            advice = "Look into careers in Theoretical Physicist,Research Scientist  .";
            break;
        case "Chemistry":
            advice = "Careers in Research Chemist, Pharmaceutical Scientist.";
            break;
        case "Biology":
                advice = "Look into careers in Doctor,Neuroscientist,Biomedical engineer.";
                break;    
        case "Commerce":
                advice = "Careers in Charted Accountant,Financial Analyst,Banker,Marketing Manager.";
                break;

        case "Art":
            advice = "Careers in Graphic Design, Animation, Fine Arts, or Fashion Design could be ideal for you.";
            break;
        case "Technology":
            advice = "Look into careers in Software Development, Cybersecurity, AI/ML, or IT Management.";
            break;
        default:
            advice = "Please select a valid subject.";
    }

    // Display the result
    resultContainer.innerHTML = `
        <p>Hi <strong>${name}</strong>, based on your interest in <strong>${subject}</strong>, here's our advice:</p>
        <p>${advice}</p>
    `;
});
