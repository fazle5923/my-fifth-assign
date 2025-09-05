// love count in navbar

const loveCount = document.getElementById('love-count')
const loveBtn = document.querySelectorAll('.love-btn')

let count = 0;
loveBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      count++; 
      loveCount.textContent = count; 
    });
  });

  // call button and coin count

  const coinCount = document.getElementById('coin-count')
  const callBtn = document.querySelectorAll('.call-btn')

let coins = 100;


document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest(".cart"); 
    const service = card.querySelector(".service").textContent;
    const number = card.querySelector(".number").textContent; 

    if (coins < 20) {
      alert("Not enough coins!");
      return;
    }

    alert(`Calling ${service} at ${number}...`);
    coins -= 20;
    coinCount.textContent = coins;

    const historyCard = document.createElement("div");
      historyCard.className = "bg-lightgrey rounded p-4 ";

      historyCard.innerHTML = `
        <h3 class="font-bold text-lg">${service}</h3>
        <p class="text-gray-600">Number: ${number}</p>
      `;
      callHistory.appendChild(historyCard);
  });
})

const callHistory = document.getElementById("call-history");

    // Function to add call entry
    function addToHistory(service, Number) {
      const entry = document.createElement("div");
      entry.classList.add("flex", "justify-between", "items-center", "py-1", "text-sm");

      const info = document.createElement("span");
      info.textContent = `${service} - ${Number}`;

      const time = document.createElement("span");
      time.classList.add("text-gray-500", "text-xs");
      time.textContent = new Date().toLocaleTimeString();

      entry.appendChild(info);
      entry.appendChild(time);

      callHistory.appendChild(entry);
    }

    // Attach event to all call buttons
    document.querySelectorAll(".call-btn").forEach(button => {
      button.addEventListener("click", function() {
        const serviceName = this.dataset.service;
        const serviceNumber = this.dataset.number;
        addToHistory(serviceName, serviceNumber);
      });
    });

    // Clear history
    document.getElementById("clear").addEventListener("click", function() {
      callHistory.innerHTML = "";
    });
