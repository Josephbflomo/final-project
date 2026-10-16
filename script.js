
"use strict";

const invitationForm = document.getElementById("invitationForm");
const guestTitle = document.getElementById("guestTitle");
const guestFullName = document.getElementById("guestFullName");

const guestFormSection = document.getElementById("guestFormSection");
const invitationSection = document.getElementById("invitationSection");
const invitationActions = document.getElementById("invitationActions");

const displayGuestName = document.getElementById("displayGuestName");
const printButton = document.getElementById("printButton");
const editButton = document.getElementById("editButton");
const newInvitationButton = document.getElementById(
    "newInvitationButton"
);

// Generate a personalized invitation.
invitationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedTitle = guestTitle.value;
    const fullName = guestFullName.value.trim();

    if (!selectedTitle || !fullName) {
        alert("Please choose your title and enter your full name.");
        return;
    }

    // Display the selected title and guest's name safely.
    displayGuestName.textContent = `${selectedTitle} ${fullName}`;

    // Show the invitation and its action buttons.
    invitationSection.classList.remove("hidden");
    invitationActions.classList.remove("hidden");

    // Scroll to the generated invitation.
    invitationSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Print the invitation or save it as a PDF.
printButton.addEventListener("click", function () {
    window.print();
});

// Return to the form to change the guest's name.
editButton.addEventListener("click", function () {
    guestFormSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    guestFullName.focus();
});

// Start another invitation.
newInvitationButton.addEventListener("click", function () {
    invitationForm.reset();

    displayGuestName.textContent = "Guest Name";

    invitationSection.classList.add("hidden");
    invitationActions.classList.add("hidden");

    guestFormSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    guestTitle.focus();
});
