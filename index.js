document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.querySelector(".no");

    noBtn.addEventListener("mouseover", () => moveNo(noBtn));
    noBtn.addEventListener("click", () => moveNo(noBtn));
    noBtn.addEventListener("touchstart", () => moveNo(noBtn));
});

/* -----------------------------
   DIFFERENT PROS & CONS CONTENT
-------------------------------- */
const persuasionData = [
    {
        pros: ["Unlimited hugs 🤗", "Free kisses 💋", "Happy wife 💖"],
        cons: ["No cuddles 😢", "Sad nights 🌙", "Big regret 😜"]
    },
    {
        pros: ["Best friend forever 🥰", "Daily smiles 😊", "Pure love ❤️"],
        cons: ["No food 😔", "Missed magic ✨", "Why though? 🤨"]
    },
    {
        pros: ["Movie nights 🍿", "Travel partner ✈️", "Forever Valentine 💘"],
        cons: ["Solo Netflix 😞", "sleepless nights 🥶", "Think again 😅"]
    },
    {
        pros: ["Lifetime romance 💍", "Warm cuddles 🤍", "Sweet surprises 🎁"],
        cons: ["Sad puppy eyes 🥺", "Guilty heart 💔", " No peaceful sleep 😜"]
    },
    {
        pros: ["Happiest YES ever 😍", "Lucky husband 🍀", "True love 💞"],
        cons: ["Always fighting 😱", "Once-in-a-lifetime gone 😜", "Think again 😏"]
    }
];

let attempt = 0;

/* -----------------------------
   MOVE NO BUTTON
-------------------------------- */
function moveNo(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";

    showPersuasion();
}

/* -----------------------------
   SHOW PROS & CONS FOR 1 MIN
-------------------------------- */
function showPersuasion() {
    let box = document.getElementById("persuasionBox");

    if (!box) {
        box = document.createElement("div");
        box.id = "persuasionBox";
        box.className = "persuasion";
        document.body.appendChild(box);
    }

    const data = persuasionData[attempt % persuasionData.length];
    attempt++;

    box.innerHTML = `
        <h3>Think again 😏</h3>
        <div class="lists">
            <ul>
                <strong>Pros of YES 💚</strong>
                ${data.pros.map(p => `<li>${p}</li>`).join("")}
            </ul>
            <ul>
                <strong>Cons of NO 💔</strong>
                ${data.cons.map(c => `<li>${c}</li>`).join("")}
            </ul>
        </div>
    `;

    box.style.display = "block";

    // stays for 1 minute (60 seconds)
    setTimeout(() => {
        box.style.display = "none";
    }, 60000);

    // After several tries, No becomes Yes 😄
    if (attempt >= 6) {
        const noBtn = document.querySelector(".no");
        noBtn.innerText = "Okay YES 😍";
        noBtn.onclick = yesClicked;
    }
}

/* -----------------------------
   YES CLICKED → KISSING IMAGE
-------------------------------- */
function yesClicked() {
    document.body.innerHTML = `
        <div class="final">
            <img 
                src= "https://media1.tenor.com/m/bLWaJ6oEcDAAAAAC/kiss-love.gif"
                alt="Cute Kiss"
                class="kissImg"
            />
            <h1>Yayyy! 💖</h1>
            <p id="loveText"></p>
        </div>
    `;

    const text = "You’re officially my Valentine 🌹 come give me some kisses ❤️";
    let i = 0;

    const interval = setInterval(() => {
        document.getElementById("loveText").textContent += text[i];
        i++;
        if (i === text.length) clearInterval(interval);
    }, 70);
}
