const courseCard = document.querySelector("#course-cards");

async function loadCourses() {
  try {
    const response = await fetch("../assets/courses.json");
    if (!response.ok) throw new Error("File not Found");
    const data = await response.json();
    console.log(data)
    courses = data;
    displayCourses(courses);
  } catch (error) {
    console.log("Error loading from json", error)
  }
}

const displayCourses = (courses) => {
  document.querySelector("#course-cards").innerHTML = "";

  courses.forEach((course) => {

  let coursecard = document.createElement("div");
  let coursename = document.createElement("p");
  let coursenumber = document.createElement("p");

  coursename.textContent = course.subject;
  coursenumber.textContent = course.number;

  coursecard.appendChild(coursename);
  coursecard.appendChild(coursenumber);
  
 
  if (course.completed){
    coursecard.style.backgroundColor = "#b0cdc2"; 
    
  }
   courseCard.appendChild(coursecard);
  

  });
};

document.getElementById('all').addEventListener('click', () => {
    displayCourses(courses); 
});

document.getElementById('cse').addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses); 
});

document.getElementById('wdd').addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses); 
});
loadCourses();