document.getElementById("addProjectBtn").addEventListener("click", () => {
  const projectSection = document.getElementById("projectSection");
  const allProjects = projectSection.querySelectorAll(".projectGroup");

  if (allProjects.length >= 4) {
    alert("You can only add up to 4 projects.");
    return;
  }

  const lastProject = allProjects[allProjects.length - 1];
  const newProject = lastProject.cloneNode(true);
  const newIndex = allProjects.length + 1;

  newProject.querySelectorAll("input, textarea").forEach((field) => {
    const newId = field.id.replace(/\d+$/, "") + newIndex;
    field.id = newId;
    field.value = "";
  });

  projectSection.insertBefore(
    newProject,
    document.getElementById("addProjectBtn")
  );
});

const addSkillBtn = document.getElementById("addSkillBtn");
const skillInput = document.getElementById("skillInput");
const skillsList = document.getElementById("skillsList");

const skills = [];
const maxSkill = 10;

addSkillBtn.addEventListener("click", () => {
  const skill = skillInput.value.trim();
  if (!skill) return;

  if (skills.length >= maxSkill) {
    alert(`You can only add up to ${maxSkill} skills`);
    skillInput.value = "";
    return;
  }

  const exists = skills.some((s) => s.toLowerCase() === skill.toLowerCase());
  if (exists) {
    alert("You've already added this skill!");
    skillInput.value = "";
    return;
  }

  skills.push(skill);

  const skillTag = document.createElement("span");
  skillTag.classList.add("skillTag");
  skillTag.textContent = skill;

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("removeSkillBtn");
  removeBtn.textContent = "X";
  removeBtn.setAttribute("aria-label", "Remove skill");

  removeBtn.addEventListener("click", () => {
    skillsList.removeChild(skillTag);
    const index = skills.indexOf(skill);
    if (index > -1) skills.splice(index, 1);
  });

  skillTag.appendChild(removeBtn);
  skillsList.appendChild(skillTag);
  skillInput.value = "";
});


const templateButtons = document.querySelectorAll(".templateBtn");
templateButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    templateButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});


const previewBtn = document.querySelector("#previewBtn");

previewBtn.addEventListener("click", () => {
  const fullName = document.querySelector("#fullName").value;
  const professionalTitle = document.querySelector("#professionalTitle").value;
  const email = document.querySelector("#email").value;
  const phoneNumber = document.querySelector("#phoneNumber").value;
  const aboutMe = document.querySelector("#aboutMe").value;

  const skillItems = Array.from(
    document.querySelectorAll("#skillsList .skillTag")
  ).map((tag) => tag.childNodes[0].nodeValue.trim());

  const projects = [];
  const projectGroups = document.querySelectorAll(".projectGroup");
  projectGroups.forEach((group) => {
    const title = group.querySelector("input[id^='projectTitle']").value;
    const description = group.querySelector(
      "textarea[id^='projectDescription']"
    ).value;
    const link = group.querySelector("input[id^='projectLink']").value;
    projects.push({ title, description, link });
  });

  const selectedTemplate =
    document.querySelector(".templateBtn.active")?.id || "modernTemplate";

  const userData = {
    fullName,
    professionalTitle,
    email,
    phoneNumber,
    aboutMe,
    skills: skillItems,
    projects,
  };

  localStorage.setItem("portfolioData", JSON.stringify(userData));

  let templateFile = "";
  switch (selectedTemplate) {
    case "modernTemplate":
      templateFile = "templates/modern.html";
      break;
    case "bugmodeTemplate":
      templateFile = "templates/bugmode.html";
      break;
    case "classicButton":
      templateFile = "templates/classic.html";
      break;
    case "minimalButton":
      templateFile = "templates/minimal.html";
      break;
  }

  window.open(templateFile, "_blank");
});
