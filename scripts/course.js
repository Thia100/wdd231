import { courses } from "./course-list.js";

let displayAll = document.querySelector("#all-btn");
let displayCse = document.querySelector("#cse-btn");
let displayWdd = document.querySelector("#wdd-btn");
let credits = document.querySelector("#credits");
let courseContainer = document.querySelector("#course-container");


function displayCourses(courseList) {
  courseContainer.innerHTML = "";
  let totalCredits = 0;
  courseList.forEach((course) => {
    const newPara = document.createElement("span");
    newPara.textContent = `${course.subject} ${course.number}`;

    totalCredits += course.credits;
    

    if (course.completed === false) {
      newPara.classList.add("inComplete");
    }
    
    credits.innerHTML = `The total credits for course listed above is ${totalCredits}`;
    courseContainer.append(newPara);
  });
}
displayCourses(courses);

displayAll.addEventListener("click", () => {
  displayCourses(courses);
});

displayCse.addEventListener("click", () => {
  const cseCourses = courses.filter((cse) => cse.subject === "CSE");
  displayCourses(cseCourses);
});

displayWdd.addEventListener("click", () => {
  const wddCourses = courses.filter((wdd) => wdd.subject === "WDD");
  displayCourses(wddCourses);
});
