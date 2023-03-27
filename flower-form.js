const submitFlower = (event) => {
  event.preventDefault();
  const FD = new FormData(form);
  const data = {
    text: FD.get("text", ""),
    author: FD.get("author", ""),
    timestamp: firebase.firestore.Timestamp.now(),
  };

  db.collection("flowers")
    .add(data)
    .then((docRef) => {
      log.textContent = `Form Submitted! Thank you!`;
      addFlower(data, docRef.id);
      highlightFlower(docRef.id);
      hideForm();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      log.textContent =
        "sorry the bed is unavailable at this time, please try again later";
    });
};

const highlightFlower = (id) => {
  const selectedFlower = document.getElementById(id);
  selectedFlower.classList.add("flower__content--new");
};

const hideForm = () => {
  form.classList.add("hide");
};

const form = document.getElementById("flower-form");
const log = document.getElementById("log");
form.addEventListener("submit", submitFlower);
