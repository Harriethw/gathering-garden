const populateDb = () => {
    flowerData.forEach((flower) => {
        db.collection("flowers")
        .add({
            text: flower.text,
            author: flower.author,
            timestamp: firebase.firestore.Timestamp.now()
        })
        .then((docRef) => {
          console.log(docRef);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    })
}

populateDb();