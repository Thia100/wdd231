const toggle = document.querySelector("#nav-toggle");
const menu = document.querySelector("#nav-menu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
});

document.getElementById("timestamp").value = new Date().toLocaleString();
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.querySelector("#currentyear").textContent = `© ${currentYear}`;
document.querySelector(
  "#last-modified"
).textContent = `Last Modified ${lastModified}`;

const membershipLevels = [
  {
    name: "NP Membership",
    price: "Free (Non-Profit Organizations Only)",
    description:
      "Designed for non-profit organizations seeking to collaborate and network within the Osun business community without financial obligations.",
    benefits: [
      "Free membership access",
      "Invitations to select community events",
      "Networking opportunities with local businesses",
      "Access to newsletters and updates",
    ],
  },
  {
    name: "Bronze Membership",
    price: "₦25,000 / year",
    description:
      "A great starting point for small businesses or startups looking to gain exposure and connect with others in the region.",
    benefits: [
      "Business listing in the chamber directory",
      "Access to member-only events and webinars",
      "Networking opportunities with local professionals",
      "Eligibility for basic advertising features",
    ],
  },
  {
    name: "Silver Membership",
    price: "₦50,000 / year",
    description:
      "Ideal for growing organizations seeking additional visibility, training opportunities, and exclusive event participation.",
    benefits: [
      "All Bronze benefits",
      "Discounted event tickets and sponsorships",
      "Featured spot in chamber newsletters",
      "Access to business development and leadership training",
      "Increased exposure through chamber's online platforms",
    ],
  },
  {
    name: "Gold Membership",
    price: "₦100,000 / year",
    description:
      "Perfect for established companies wanting premium exposure, top-tier benefits, and leadership opportunities within the chamber.",
    benefits: [
      "All Silver benefits",
      "Priority spotlight positions on the home page",
      "Premium advertising and promotional features",
      "Free participation in select high-profile events",
      "Exclusive access to business roundtables and strategy sessions",
    ],
  },
];

const openButtons = document.querySelectorAll(".openModal");
const modals = document.querySelectorAll(".myModal");

openButtons.forEach((button, index) => {
  const modal = modals[index];
  const level = membershipLevels[index];

  button.addEventListener("click", () => {
    modal.innerHTML = "";

    const heading = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = level.name;

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";

    heading.appendChild(title);
    heading.appendChild(closeButton);

    const price = document.createElement("p");
    price.textContent = `Price: ${level.price}`;

    const description = document.createElement("p");
    description.textContent = level.description;

    const benefits = document.createElement("ul");
    level.benefits.forEach((benefit) => {
      const li = document.createElement("li");
      li.textContent = benefit;
      benefits.appendChild(li);
    });

    closeButton.addEventListener("click", () => modal.close());

    modal.append(heading, price, description, benefits);
    modal.showModal();
  });
});
