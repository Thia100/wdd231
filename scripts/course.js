const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

function displayCourses(filteredCourses) {
  const courseListContainer = document.querySelector("#courses-section");
  courseListContainer.innerHTML = "";

  const modal = document.querySelector("#courseModal");
  const courseTitle = document.querySelector("#courseTitle");
  const courseDescription = document.querySelector("#courseDescription");
  const courseCredits = document.querySelector("#courseCredits");
  const courseCertificate = document.querySelector("#courseCertificate");
  const courseTechnology = document.querySelector("#courseTechnology");

  const closeModal = document.querySelector("#closeModal");

  filteredCourses.forEach((course) => {
    const card = document.createElement("button");
    card.classList.add("course-card");

    if (course.completed) {
      card.classList.add("completed");
    }

    card.textContent = `${course.subject} ${course.number}`;

    card.addEventListener("click", () => {
      courseTitle.textContent = course.title;
      courseDescription.textContent = course.description;
      courseCredits.textContent = course.credits;
      courseCertificate.textContent = course.certificate;
      courseTechnology.textContent = course.technology.join(", ");

      modal.showModal();
    });
    closeModal.addEventListener("click", () => {
      modal.close();
    });

    courseListContainer.appendChild(card);
  });
}

function calculateTotalCredits(coursesToShow) {
  return coursesToShow.reduce((total, course) => total + course.credits, 0);
}

function updateCreditDisplay(credits) {
  const creditDisplay = document.getElementById("credit");
  creditDisplay.textContent = credits;
}

document.getElementById("all").addEventListener("click", () => {
  displayCourses(courses);
  const totalCredits = calculateTotalCredits(courses);
  updateCreditDisplay(totalCredits);
});

// Event listener for "CSE" button
document.getElementById("cse").addEventListener("click", () => {
  const cseCourses = courses.filter((course) => course.subject === "CSE");
  displayCourses(cseCourses);
  const totalCredits = calculateTotalCredits(cseCourses);
  updateCreditDisplay(totalCredits);
});

// Event listener for "WDD" button
document.getElementById("wdd").addEventListener("click", () => {
  const wddCourses = courses.filter((course) => course.subject === "WDD");
  displayCourses(wddCourses);
  const totalCredits = calculateTotalCredits(wddCourses);
  updateCreditDisplay(totalCredits);
});

// Initial display - show all courses and total credits
displayCourses(courses);
const initialCredits = calculateTotalCredits(courses);
updateCreditDisplay(initialCredits);
