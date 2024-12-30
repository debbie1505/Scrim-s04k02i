const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[",
    "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
  ];
  
  let option1El = document.getElementById("option-1");
  let option2El = document.getElementById("option-2");
  
  function generatePassword() {
    let passwordLength = Math.floor(Number(prompt("How long do you want your password?")));
    option1El.textContent = ""; // Clear previous passwords
    option2El.textContent = "";
    
    for (let i = 0; i < passwordLength; i++) {
      let randomIndexOne = Math.floor(Math.random() * characters.length);
      let randomIndexTwo = Math.floor(Math.random() * characters.length);
      option1El.textContent += characters[randomIndexOne];
      option2El.textContent += characters[randomIndexTwo];
    }
  }
  
  // Add event listeners to copy the password fields on click
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("password-field")) {
      const textToCopy = event.target.textContent;
  
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          document.getElementById("status-message").textContent = `Copied: "${textToCopy}"`;
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          document.getElementById("status-message").textContent = "Failed to copy text.";
        });
    }
  });
  