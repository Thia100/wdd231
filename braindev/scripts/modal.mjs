export function displayModal() {
    // It's okay to add tags as ling as you're not using innerHTML or text conent or a json
  const descriptions = {
    "Code Foundation": `
    <p><strong>Level: </strong>Beginner</p>
    <p><strong>Overview: </strong>Learn the basics of programming, logic, and problem-solving.</p> 
    <p><strong>What you can build: </strong>Simple calculators, to-do apps, and basic games.</p> 
    <p><strong>Career Paths: </strong>Junior Developer, QA Tester, or Student Research Assistant.</p> 
    <p><strong>Why it matters: </strong>Builds the mindset you need for every programming language.</p> 
  `,

    Python: `
    <p><strong>Level: </strong>Beginner - Intermediate</p>
    <p><strong>Overview: </strong>Learn one of the most beginner-friendly and powerful programming languages.</p>
    <p><strong>What you can build: </strong>Data analysis scripts, web apps, chatbots, and automation tools.</p>
    <p><strong>Career Paths: </strong>Data Analyst, Backend Developer, Machine Learning Engineer.</p>
    <p><strong>Extra: </strong>Python has vast libraries that make it great for almost any tech field.</p>
  `,

    "HTML & CSS": `
    <p><strong>Level: </strong>Beginner</p>
    <p><strong>Overview: </strong>The core building blocks of the web — structure (HTML) and style (CSS).</p>
    <p><strong>What you can build: </strong>Portfolio websites, landing pages, personal blogs.</p>
    <p><strong>Career Paths: </strong>Frontend Developer, Web Designer, UI/UX Assistant.</p>
    <p><strong>Tip: </strong>Combine this with JavaScript to become a full web developer.</p>
  `,

    JavaScript: `
    <p><strong>Level: </strong>Beginner - Advanced</p>
    <p><strong>Overview: </strong>The language that powers interactivity on the web.</p>
    <p><strong>What you can build: </strong>Dynamic websites, single-page apps, and interactive dashboards.</p>
    <p><strong>Career Paths: </strong>Frontend Developer, Fullstack Developer, Web App Engineer.</p>
    <p><strong>Extra: </strong>With frameworks like React or Vue, you can build professional-grade applications.</p>
  `,

    Java: `
    <p><strong>Level: </strong>Intermediate - Advanced</p>
    <p><strong>Overview: </strong>A robust language used in enterprise systems, Android apps, and backend services.</p>
    <p><strong>What you can build: </strong>Android apps, banking systems, and enterprise tools.</p>
    <p><strong>Career Paths: </strong>Software Engineer, Android Developer, Backend Developer.</p>
    <p><strong>Note: </strong>It's a top language used in large organizations worldwide.</p>
  `,

    "Data Science": `
    <p><strong>Level: </strong>Intermediate</p>
    <p><strong>Overview: </strong>Learn how to collect, process, and analyze data to find meaningful insights.</p>
    <p><strong>What you can build: </strong>Predictive models, data dashboards, and analytics reports.</p>
    <p><strong>Career Paths: </strong>Data Scientist, Machine Learning Engineer, Research Analyst.</p>
    <p><strong>Extra: </strong>Python, Pandas, and visualization tools are essential here.</p>
  `,

    "Professional Skills": `
    <p><strong>Level: </strong>All Levels</p>
    <p><strong>Overview: </strong>Improve your communication, teamwork, and problem-solving abilities.</p>
    <p><strong>What you can build: </strong>Stronger work habits, leadership potential, and better project outcomes.</p>
    <p><strong>Career Paths: </strong>Any career — especially tech roles that require collaboration and presentation.</p>
    <p><strong>Why it matters: </strong>Technical skills open doors, but professional skills keep them open.</p>
  `,

    "Data Analytics": `
    <p><strong>Level: </strong>Intermediate</p>
    <p><strong>Overview: </strong>Learn to interpret data, create visualizations, and make data-driven decisions.</p>
    <p><strong>What you can build: </strong>Dashboards, data summaries, and business insights reports.</p>
    <p><strong>Career Paths: </strong>Data Analyst, Business Analyst, Operations Specialist.</p>
    <p><strong>Note: </strong>A great entry point into tech for analytical thinkers.</p>
  `,

    "Interview Prep": `
    <p><strong>Level: </strong>Intermediate - Advanced</p>
    <p><strong>Overview: </strong>Prepare for coding interviews by mastering algorithms, data structures, and behavioral questions.</p>
    <p><strong>What you can build: </strong>Confidence in solving algorithmic problems and clear communication strategies.</p>
    <p><strong>Career Paths: </strong>Software Developer, Frontend Engineer, Backend Engineer, Data Engineer.</p>
    <p><strong>Why it matters: </strong>Helps you perform effectively in interviews and land your dream tech job.</p>
  `,

    "Web Development": `
    <p><strong>Level: </strong>Beginner - Advanced</p>
    <p><strong>Overview: </strong>Learn to build modern, responsive, and interactive websites.</p>
    <p><strong>What you can build: </strong>Portfolios, e-commerce sites, social platforms.</p>
    <p><strong>Career Paths: </strong>Frontend Developer, Fullstack Developer, Web Engineer.</p>
    <p><strong>Bonus: </strong>A combination of HTML, CSS, JavaScript, and frameworks will make you job-ready.</p>
  `,

    "Web Design": `
    <p><strong>Level: </strong>Beginner</p>
    <p><strong>Overview: </strong>Learn the art of creating visually appealing and user-friendly interfaces.</p>
    <p><strong>What you can build: </strong>Landing pages, prototypes, app interfaces.</p>
    <p><strong>Career Paths: </strong>UI Designer, UX Designer, Web Designer.</p>
    <p><strong>Tip: </strong>Tools like Figma and design principles help bring your ideas to life.</p>
  `,

    "Machine Learning": `
    <p><strong>Level: </strong>Advanced</p>
    <p><strong>Overview: </strong>Teach computers to learn patterns and make predictions from data.</p>
    <p><strong>What you can build: </strong>Recommendation systems, chatbots, AI assistants.</p>
    <p><strong>Career Paths: </strong>Machine Learning Engineer, Data Scientist, AI Researcher.</p>
    <p><strong>Note: </strong>A math and Python foundation is helpful here.</p>
  `,

    "Computer Science": `
    <p><strong>Level: </strong>All levels</p>
    <p><strong>Overview: </strong>Understand how computers work and how to write efficient algorithms.</p>
    <p><strong>What you can build: </strong>Problem-solving programs, optimized systems.</p>
    <p><strong>Career Paths: </strong>Software Engineer, Researcher, Algorithm Specialist.</p>
    <p><strong>Extra: </strong>Core foundation for all areas of programming.</p>
  `,

    "C++": `
    <p><strong>Level: </strong>Intermediate - Advanced</p>
    <p><strong>Overview: </strong>A high-performance language for system programming and games.</p>
    <p><strong>What you can build: </strong>Game engines, desktop software, and operating systems.</p>
    <p><strong>Career Paths: </strong>Game Developer, Systems Engineer, Embedded Programmer.</p>
    <p><strong>Note: </strong>It teaches low-level memory control and performance optimization.</p>
  `,

    "Mobile Development": `
    <p><strong>Level: </strong>Intermediate</p>
    <p><strong>Overview: </strong>Learn how to build mobile apps for Android and iOS.</p>
    <p><strong>What you can build: </strong>Productivity apps, games, and social platforms.</p>
    <p><strong>Career Paths: </strong>Mobile App Developer, Flutter Developer, Software Engineer.</p>
    <p><strong>Extra: </strong>Frameworks like Flutter or React Native make this easier.</p>
  `,

    AI: `
    <p><strong>Level: </strong>Advanced</p>
    <p><strong>Overview: </strong>Explore the science of creating intelligent systems that think and act like humans.</p>
    <p><strong>What you can build: </strong>Chatbots, voice recognition apps, recommendation systems.</p>
    <p><strong>Career Paths: </strong>AI Engineer, Research Scientist, Automation Specialist.</p>
    <p><strong>Bonus: </strong>A solid understanding of Python and machine learning helps here.</p>
  `,

    IT: `
    <p><strong>Level: </strong>Beginner - Intermediate</p>
    <p><strong>Overview: </strong>Learn about networking, databases, and computer systems.</p>
    <p><strong>What you can build: </strong>Network systems, tech support solutions.</p>
    <p><strong>Career Paths: </strong>IT Support, Systems Analyst, Network Administrator.</p>
    <p><strong>Tip: </strong>Great for understanding how technology infrastructure works.</p>
  `,

    "C#": `
    <p><strong>Level: </strong>Intermediate</p>
    <p><strong>Overview: </strong>Microsoft's powerful language for apps, games, and enterprise software.</p>
    <p><strong>What you can build: </strong>Desktop applications, Unity games, enterprise tools.</p>
    <p><strong>Career Paths: </strong>Game Developer, Software Engineer, .NET Developer.</p>
    <p><strong>Note: </strong>Commonly used with Visual Studio and the .NET framework.</p>
  `,

    "Game Development": `
    <p><strong>Level: </strong>Intermediate</p>
    <p><strong>Overview: </strong>Learn how to design, program, and publish games.</p>
    <p><strong>What you can build: </strong>2D and 3D games, interactive simulations.</p>
    <p><strong>Career Paths: </strong>Game Developer, Graphics Programmer, Level Designer.</p>
    <p><strong>Extra: </strong>Commonly uses Unity (C#) or Unreal Engine (C++).</p>
  `,

    Cybersecurity: `
    <p><strong>Level: </strong>Intermediate - Advanced</p>
    <p><strong>Overview: </strong>Learn how to protect systems and data from digital attacks.</p>
    <p><strong>What you can build: </strong>Security systems, encryption programs, secure networks.</p>
    <p><strong>Career Paths: </strong>Security Analyst, Penetration Tester, Cybersecurity Engineer.</p>
    <p><strong>Note: </strong>Great for those who love solving puzzles and defending systems.</p>
  `,

    Go: `
    <p><strong>Level: </strong>Intermediate</p>
    <p><strong>Overview: </strong>A fast, efficient language by Google for scalable systems.</p>
    <p><strong>What you can build: </strong>Cloud services, APIs, and backend systems.</p>
    <p><strong>Career Paths: </strong>Backend Developer, Cloud Engineer, DevOps Developer.</p>
    <p><strong>Tip: </strong>Known for its simplicity and high performance.</p>
  `,

    DevOps: `
    <p><strong>Level: </strong>Advanced</p>
    <p><strong>Overview: </strong>Learn how to automate and streamline the software delivery process.</p>
    <p><strong>What you can build: </strong>CI/CD pipelines, automated deployments.</p>
    <p><strong>Career Paths: </strong>DevOps Engineer, Cloud Architect, System Integrator.</p>
    <p><strong>Extra: </strong>A must-have for scalable and efficient development teams.</p>
  `,

    "Resume & Cover Letter": `
    <p><strong>Level: </strong>All levels</p>
    <p><strong>Overview: </strong>Learn to craft professional resumes and cover letters.</p>
    <p><strong>What you can build: </strong>A strong personal brand and job-ready documents.</p>
    <p><strong>Career Paths: </strong>Any! This prepares you for interviews and job success.</p>
    <p><strong>Bonus: </strong>Pair this with your tech skills for career readiness.</p>
  `,

    "Certificate Prep": `
    <p><strong>Level: </strong>All levels</p>
    <p><strong>Overview: </strong>Prepare for globally recognized tech certifications.</p>
    <p><strong>What you can build: </strong>Confidence, credibility, and proof of expertise.</p>
    <p><strong>Career Paths: </strong>Depends on the certificate — could be in Cloud, Data, or Security.</p>
    <p><strong>Tip: </strong>Perfect for leveling up your professional profile.</p>
  `,
  };

  const modalTitle = document.querySelector("#modalTitle");
  const modal = document.querySelector("#courseModal");
  const closeModal = document.querySelector("#modalClose");
  const modalDescription = document.querySelector("#modalDescription");
  const openModal = document.querySelectorAll(".courseModalButton button");

//   to open modal, loop through everyy button  in courseModalButton
        // remove extra spaces to ensure keys match
        // clear the container
        // create container for all description contents
        // add the description using innerhtml (to parse like actual html)
        // include alt text if content fails to load
  openModal.forEach((button) => {
    button.addEventListener("click", () => {
      const course = button.textContent.trim();
      modalTitle.textContent = course;
      modalDescription.innerHTML = "";
      const content = document.createElement("div");
      content.classList.add("modalContent");
      content.innerHTML =
        descriptions[course] || `<em>Description not available.</em>`;
      modalDescription.appendChild(content);
      modal.showModal();
    });
  });

  modal.addEventListener("click", (event) => {
    const dialogDimensions = modal.getBoundingClientRect();

    // if click is outside the modal content area
    if (
      event.clientX < dialogDimensions.left ||
      event.clientX > dialogDimensions.right ||
      event.clientY < dialogDimensions.top ||
      event.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });

  closeModal.addEventListener("click", () => {
    modal.close();
  });
}
