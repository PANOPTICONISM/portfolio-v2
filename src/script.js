setTimeout(function () {
  // projects button
  const Projectsbtns = document.querySelectorAll(".projects_button");
  Projectsbtns.forEach((btn) =>
    btn.addEventListener("click", scrollToProjects)
  );

  // go to form
  const hireMeBtn = document.querySelectorAll(".request");
  hireMeBtn.forEach((btn) => btn.addEventListener("click", scrollToForm));
}, 3000);

function scrollToProjects() {
  let projects = document.getElementById("projects");
  projects.scrollIntoView({ behavior: "smooth" });
}

function scrollToForm() {
  let form = document.getElementById("hire_me");
  form.scrollIntoView({ behavior: "smooth" });
}
