export function getReason() {
  const reasons = [
    {
      importance: "High-Demand Career",
      description:
        "The tech industry is booming with countless job opportunities. Programmers are needed in every sector from healthcare to finance, entertainment to education. With coding skills, you'll have access to well-paying jobs and the ability to work remotely from anywhere in the world.",
    },
    {
      importance: "Problem-Solving Skills",
      description:
        "Programming teaches you to think logically and break down complex problems into manageable steps. These critical thinking skills transfer to every aspect of life, helping you approach challenges systematically and find creative solutions that others might miss.",
    },
    {
      importance: "Build Your Ideas",
      description:
        "Turn your imagination into reality by creating websites, apps, and tools that solve real-world problems. Whether it's a business idea, a helpful tool for your community, or a creative project, programming gives you the power to build anything you can envision.",
    },
  ];

  reasons.forEach((reason) => {
    const container = document.querySelector("#whyCard");
    console.log(reason.description);

    const card = document.createElement("div");
    card.classList.add("card");

    const h3 = document.createElement("h3");
    h3.innerHTML = `${reason.importance}`;

    const p = document.createElement("p");
    p.innerHTML = `${reason.description}`;
    
   
    card.appendChild(h3);
    card.appendChild(p);
   
    container.appendChild(card);
  });
}
