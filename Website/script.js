const hostels = [
  {
    name: "Green Valley Hostel",
    location: "Delhi",
    price: "₹5000/month",
    warden: "9876543210",
    desc: "Comfortable hostel with peaceful surroundings and modern facilities.",
    availability: ["24/7 Water", "Electricity", "Wi-Fi", "Laundry", "Mess"],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    ]
  },
  {
    name: "City Lights Hostel",
    location: "Mumbai",
    price: "₹7000/month",
    warden: "9123456780",
    desc: "Modern hostel located in the heart of the city with easy transport.",
    availability: ["Water", "Power Backup", "Wi-Fi", "Security", "CCTV"],
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
    ]
  }
];

const hostelList = document.getElementById("hostelList");
const detail = document.getElementById("detail");
const home = document.getElementById("home");

/* Show Home */
function showHome() {
  detail.style.display = "none";
  home.style.display = "block";
}

/* Show Detail */
function showDetail(index) {
  const h = hostels[index];

  home.style.display = "none";
  detail.style.display = "block";

  detail.innerHTML = `
    <button class="back-btn" onclick="showHome()">← Back</button>

    <div class="gallery">
      ${h.images.map(img => `<img src="${img}">`).join("")}
    </div>

    <div class="info">
      <h2>${h.name}</h2>
      <p><strong>Location:</strong> ${h.location}</p>
      <p><strong>Price:</strong> ${h.price}</p>

      <div class="section">
        <h4>Description</h4>
        <p>${h.desc}</p>
      </div>

      <div class="section">
        <h4>Availability</h4>
        <div class="availability">
          ${h.availability.map(a => `<span class="tag">${a}</span>`).join("")}
        </div>
      </div>

      <div class="highlight">
        <strong>Warden Contact:</strong> ${h.warden}
      </div>
    </div>
  `;
}

/* Load Cards */
function loadHostels() {
  hostelList.innerHTML = hostels.map((h, i) => `
    <div class="card" onclick="showDetail(${i})">
      <img src="${h.images[0]}">
      <div class="card-content">
        <h3>${h.name}</h3>
        <p>${h.location}</p>
        <p>${h.price}</p>
      </div>
    </div>
  `).join("");
}

/* Scroll */
const scrollBtn = document.getElementById("scrollTop");

window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

loadHostels();