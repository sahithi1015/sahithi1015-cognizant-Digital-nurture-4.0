// 1. Basics & Setup
console.log("Welcome to the Community Portal");

window.onload = () => {
  alert("Page is fully loaded!");
};

// 2. Syntax, Data Types, Operators
const eventName = "Music Festival";
const eventDate = "2025-07-20";
let availableSeats = 50;
console.log(`Event: ${eventName} on ${eventDate}. Available Seats: ${availableSeats}`);
availableSeats--;

// 3. Conditionals, Loops, and Error Handling
const events = [
  { name: "Yoga Class", date: "2025-06-15", seats: 0, category: "health" },
  { name: "Music Festival", date: "2025-07-20", seats: 10, category: "music" },
  { name: "Art Workshop", date: "2025-05-01", seats: 5, category: "art" },
];

const today = new Date("2025-05-27");

events.forEach(event => {
  const eventDate = new Date(event.date);
  if (eventDate > today && event.seats > 0) {
    console.log(`Upcoming Event: ${event.name} on ${event.date}`);
  }
});

function register(event) {
  try {
    if (event.seats <= 0) throw new Error("No seats available!");
    event.seats--;
    console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
  } catch (err) {
    console.error(err.message);
  }
}

// 4. Functions, Scope, Closures, Higher-Order Functions
function addEvent(name, date, category, seats) {
  return { name, date, category, seats };
}

function registerUser(event) {
  if (event.seats > 0) {
    event.seats--;
    return `Registered for ${event.name}`;
  }
  return "Registration failed";
}

function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}

function createCategoryCounter() {
  const counter = {};
  return function(category) {
    counter[category] = (counter[category] || 0) + 1;
    return counter[category];
  };
}

const countRegistration = createCategoryCounter();

// 5. Objects and Prototypes
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const event1 = new Event("Coding Bootcamp", "2025-07-01", 25);
console.log(event1.checkAvailability());
console.log(Object.entries(event1));

// 6. Arrays and Methods
let eventsArray = [];
eventsArray.push({ name: "Baking Workshop", category: "food" });
eventsArray.push({ name: "Jazz Night", category: "music" });
const musicEvents = eventsArray.filter(e => e.category === "music");
const displayCards = eventsArray.map(e => `Event: ${e.name}`);

// 7. DOM Manipulation
const container = document.querySelector("#event-container");
eventsArray.forEach(event => {
  const card = document.createElement("div");
  card.classList.add("event-card");
  card.textContent = `${event.name} (${event.category})`;
  container.appendChild(card);
});

// Show all event cards initially
$(".event-card").fadeIn();

// 8. Event Handling
document.querySelector("#registerBtn").onclick = () => {
  alert("You clicked register!");
};

document.querySelector("#categoryFilter").onchange = (e) => {
  const selectedCategory = e.target.value;
  let filtered;
  if (!selectedCategory) {
    filtered = eventsArray;
  } else {
    filtered = eventsArray.filter(ev => ev.category === selectedCategory);
  }
  container.innerHTML = "";
  filtered.forEach(event => {
    const card = document.createElement("div");
    card.classList.add("event-card");
    card.textContent = `${event.name} (${event.category})`;
    container.appendChild(card);
  });
  $(".event-card").fadeIn();
};

document.addEventListener("keydown", (e) => {
  console.log(`You pressed: ${e.key}`);
});

// 9. Async JS, Promises, Async/Await
// NOTE: URLs replaced with example JSON placeholder for demo
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log("Fetched with .then:", data))
  .catch(err => console.error("Error fetching events:", err));

async function fetchEvents() {
  try {
    console.log("Loading...");
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log("Fetched with async/await:", data);
  } catch (err) {
    console.error(err);
  }
}
fetchEvents();

// 10. Modern JavaScript Features
const displayEvent = ({ name, date }) => {
  console.log(`Event: ${name} on ${date}`);
};

const originalList = [{ name: "A" }];
const copiedList = [...originalList];

// 11. Working with Forms
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const { name, email, event } = e.target.elements;
  if (!name.value || !email.value) {
    alert("Please fill all fields");
    return;
  }
  console.log("Submitted", name.value, email.value, event.value);
  alert(`Thanks for registering, ${name.value}, for ${event.value}!`);
});

// 12. AJAX & Fetch API
function submitData(data) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(result => {
    setTimeout(() => {
      alert("Registered successfully!");
    }, 1000);
  })
  .catch(() => alert("Failed to register."));
}

// 13. Debugging and Testing
console.log("Form submitting...");
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({ name: "John" }),
})
.then(res => res.json())
.then(data => console.log("Response:", data))
.catch(err => console.error("Fetch error:", err));

// 14. jQuery and JS Frameworks
$("#registerBtn").click(function () {
  alert("jQuery Click");
});

$(".event-card").fadeIn();
$(".event-card").fadeOut();

console.log("React provides component reusability and virtual DOM for efficient rendering.");
