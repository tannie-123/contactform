import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  try {
    await addDoc(collection(window.db, "messages"), {
      name,
      surname,
      email,
      subject,
      message,
      timestamp: serverTimestamp(),
    });

    alert("Message sent successfully!");
    contactForm.reset();
  } catch (error) {
    console.error("Error sending message: ", error);
    alert("Failed to send message.");
  }
});
