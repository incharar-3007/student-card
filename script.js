const container = document.getElementById("container");
const form = document.getElementById("form");
const studentName = document.getElementById("studentName");
const studentId = document.getElementById("studentId");
const branch = document.getElementById("branch");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const studentNameInput = studentName.value.trim();
    const studentIdInput = studentId.value.trim().toUpperCase();
    const branchInput = branch.value.trim().toUpperCase();
    
    const namePattern = /^[A-Za-z\s]+$/;

if (!namePattern.test(studentNameInput)) {
    alert("Student name should contain only alphabets and spaces.");
    return;
}

    const usnPattern = /^[0-9]{1}[A-Z]{2}[0-9]{2}(CS|IS)[0-9]{3}$/;

    if (!usnPattern.test(studentIdInput)) {
        alert("Invalid USN!\nExample: 4MR23CS001 or 4MR23IS001");
        return;
    }

    
    if (branchInput !== "CSE" && branchInput !== "ISE") {
        alert("Branch should be either CSE or ISE.");
        return;
    }

  
    const oldCard = document.querySelector(".generatedCard");

    
    const jsCard = document.createElement("div");
    jsCard.className = "generatedCard";


    const jsStuName = document.createElement("p");
    const jsStuId = document.createElement("p");
    const jsBranch = document.createElement("p");

    jsStuName.textContent = `Student Name: ${studentNameInput}`;
    jsStuId.textContent = `Student ID: ${studentIdInput}`;
    jsBranch.textContent = `Student Branch: ${branchInput}`;

    
    jsCard.append(jsStuName, jsStuId, jsBranch);

    
    if (oldCard) {
        oldCard.replaceWith(jsCard);
    } else {
        container.appendChild(jsCard);
    }

    form.reset();
});