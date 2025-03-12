// document.addEventListener("DOMContentLoaded", () => {
//   const slides = document.querySelectorAll(".section");
//   let currentSlide = 0;

//   function showNextSlide() {
//     slides[currentSlide].classList.remove("active");
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].classList.add("active");
//   }

//   setInterval(showNextSlide, 5000); // Change every 5 seconds
// });

// const indicator = document.querySelector(".pagination-indicator");

// function updateCarousel() {
//   carousel.style.transform = `translateX(-${currentIndex * 100}vw)`;
//   indicator.style.transform = `translateX(${currentIndex * 100}%)`;
// }

const ICONS = {
  facebook: "./Asset/icons/face.png",
  twitter: "./Asset/icons/x.jpg",
  instagram: "./Asset/icons/2227.jpg",
  website: "./Asset/icons/web.jpg",
};
const LINKS = {
  facebook: "https://web.facebook.com/hgbcinfluencers",
  twitter: "https://x.com/hgbcinfluencers",
  youtube: "https://youtube.com/@hgbcinfluencers",
  instagram: "https://www.instagram.com/businessandinfluenc",
  website: "https://hgbcinfluencers.org/",
};
const share = "./Asset/icons/share.png";
const speakers = [
  {
    name: "Ajalenkoko Taiwo",
    image: "./Asset/images/hgnc.jpg",
    tag: "Lead Pastor HUBC",
    topic:
      "Tapping into the supernatural: Why the eagles fly and the lion roar",
    links: LINKS,
    icon: ICONS,
  },
  {
    name: "Ajalenkoko Taiwo",
    image: "./Asset/images/fadeyi.png",
    tag: "Lead Pastor HUBC",
    topic:
      "Tapping into the supernatural: Why the eagles fly and the lion roar",
    links: LINKS,
    icon: ICONS,
  },
  {
    name: "Ajalenkoko Taiwo",
    image: "./Asset/images/esther.png",
    tag: "Lead Pastor HUBC",
    topic:
      "Tapping into the supernatural: Why the eagles fly and the lion roar",
    links: LINKS,
    icon: ICONS,
  },
  {
    name: "Ajalenkoko Taiwo",
    image: "./Asset/images/gilf.jpg",
    tag: "Lead Pastor HUBC",
    topic:
      "Tapping into the supernatural: Why the eagles fly and the lion roar",
    links: LINKS,
    icon: ICONS,
  },
];
const events = [
  {
    Day: "15",
    Month: "February",
    Year: "2025",
    name: "Photizo, Embracing Change",
    location: "City of Refuge, Under G, Ogbomosho",
    time: "5pm-8pm",
  },
];

const speakerContainer = document.querySelector(".speaker-container");
speakers.forEach((speaker) => {
  const speakerDetail = document.createElement("div");
  speakerDetail.className = "speaker-card";

  speakerDetail.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}"
      <div>
      <h2>${speaker.name}</h2>
      <p>${speaker.tag}</p>
      <p>${speaker.topic}</p>
      <div class="links-img">
          ${
            speaker.links.facebook
              ? `<a href="${speaker.links.facebook}" target="_blank"><img src="${speaker.icon.facebook}" alt="Facebook"></a>`
              : ""
          }
          ${
            speaker.links.twitter
              ? `<a href="${speaker.links.twitter}" target="_blank"><img src="${speaker.icon.twitter}" alt="Twitter"></a>`
              : ""
          }
          ${
            speaker.links.instagram
              ? `<a href="${speaker.links.instagram}" target="_blank"><img src="${speaker.icon.instagram}" alt="Instagram"></a>`
              : ""
          }
          ${
            speaker.links.website
              ? `<a href="${speaker.links.website}" target="_blank"><img src="${speaker.icon.website}" alt="Website"></a>`
              : ""
          }
      </div>
      </div>
      `;
  speakerContainer.appendChild(speakerDetail);
});

const teams = [
  {
    title: "Pastor Ayanfe",
    image: "./Asset/images/ayanf.png",
    position: "Pastor, Digital Marketter, Bybit",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
  {
    title: "Pastor Amusan",
    image: "./Asset/images/mich.png",
    position: "Pastor, HGBC",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
  {
    title: "Mr Fadeyi",
    image: "./Asset/images/fadeyi.png",
    position: "Realtor, Ace",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
  {
    title: "Miss Esther",
    image: "./Asset/images/esther.png",
    position: "HR Manager",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
  {
    title: "Thrive link",
    image: "./Asset/images/thrive.png",
    position: "Software Engineer, The Thrive",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
  {
    title: "Miss Tumilara",
    image: "./Asset/images/tumilara.png",
    position: "Public Speaker, Spotify",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
  {
    title: "Miss Deborah",
    image: "./Asset/images/team-5.png",
    position: "Content Curator",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
  {
    title: "Josh Loye",
    image: "./Asset/images/Josh.png",
    position: "CEO, Loye's franchise",
    share: share,
    links: {
      facebook: "https://youtube.com/@hgbcinfluencers",
      instagram: "https://youtube.com/@hgbcinfluencers",
      twitter: "https://youtube.com/@hgbcinfluencers",
    },
    icon: ICONS,
  },
];

const teamContainer = document.querySelector(".team-container");
teams.forEach((team) => {
  const teamDetails = document.createElement("div");
  teamDetails.className = "team-card";

  teamDetails.innerHTML = `
       <img src="${team.image}" alt="${team.title}"
      <div>
      
          <div class="team-content">
               <div class="team-person">
                  <h2>${team.title}</h2>
                  <p>${team.position}</p>
              </div>
              <div class="social-links">
              <img src="${team.share}">
              <div class="links-icon">
              ${
                team.links.facebook
                  ? `<a href="${team.links.facebook}" target="_blank"><img src="${team.icon.facebook}" alt="facebook"></a>`
                  : ""
              }
              ${
                team.links.twitter
                  ? `<a href="${team.links.twitter}" target="_blank"><img src="${team.icon.twitter}" alt"twitter"></a>`
                  : ""
              }
              ${
                team.links.instagram
                  ? `<a href="${team.links.instagram}" target="_blank"><img src="${team.icon.instagram}" alt="instagram"></a>`
                  : ""
              }
              </div>
              </div>
          </div>
          <div>
      </div>
      </div>
      `;
  teamContainer.appendChild(teamDetails);
});

let currentIndex = 0;
const totalSlides = 3;
const carousel = document.querySelector(".carousel");
const progressIndicator = document.querySelector(".pagination-indicator");

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}vw)`;
  let progressPercentage = ((currentIndex + 1) / totalSlides) * 100;
  progressIndicator.style.width = `${progressPercentage}%`;

  setTimeout(() => {
    progressIndicator.style.width = "100%";
  }, 50);
}

// Function to move to the next slide automatically
function autoScroll() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

// Auto-scroll every 5 seconds
let autoScrollInterval = setInterval(autoScroll, 5000);

updateCarousel();

// Pause auto-scroll when user interacts (optional)
document
  .querySelector(".carousel-container")
  .addEventListener("mouseenter", () => {
    clearInterval(autoScrollInterval);
  });
document
  .querySelector(".carousel-container")
  .addEventListener("mouseleave", () => {
    autoScrollInterval = setInterval(autoScroll, 5000);
  });
