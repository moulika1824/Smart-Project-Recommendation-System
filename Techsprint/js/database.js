const API_URL = "Phttps://script.google.com/macros/s/AKfycbwBUDYWlQ-MC4205FsROcJDTeZturzEoVfCio_yPwvPPlkgZbzejOhuaytCx0zVwaGZDA/exec";

function saveToDatabase(interest, projects) {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      email: localStorage.getItem("userEmail"),
      interest: interest,
      projects: projects.join(", ")
    })
  })
  .then(res => res.json())
  .then(data => console.log("Saved successfully:", data))
  .catch(err => console.error("Error saving:", err));
}
