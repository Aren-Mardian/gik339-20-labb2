const responseurl = fetch("http://localhost:3000/users");
responseurl
  .then((response) => response.json())
  .then((data) => {
    console.log("User array:", data);

    createAndAppendUserList(data);
  });

function createAndAppendUserList(data) {
  // Skapa en ul element
  const userList = document.createElement("ul");

  data.forEach((user) => {
    // Skapa ett li-element
    const listItem = document.createElement("li");

    // Användaren färg för styling
    listItem.style.backgroundColor = user.color;

    // en div för varje användare
    const userDiv = document.createElement("div");

    const nameParagraph = document.createElement("h4");
    nameParagraph.textContent = `Namn: ${user.firstName} ${user.lastName}`;
    userDiv.appendChild(nameParagraph);

    const usernameHeading = document.createElement("p");
    usernameHeading.textContent = `Användarnamn: ${user.username}`;
    userDiv.appendChild(usernameHeading);

    listItem.appendChild(userDiv);

    userList.appendChild(listItem);
  });

  document.body.appendChild(userList);
}
