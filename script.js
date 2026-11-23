const weeks = [
  { name: "Python & Analysis", phase: "FOUNDATION", summary: "Start with a strong Python base, practical data analysis tools, and SQL fluency. The goal is to move from raw data to a clear, reproducible answer.", study: ["Python syntax & data structures", "NumPy arrays & vectorization", "pandas data cleaning", "SQL joins & aggregations"], practice: ["Solve 10 Python interview problems", "Analyze a CSV using pandas", "Write 8 SQL queries from scratch"], deliverable: "One cleaned dataset + 10 solved problems" },
  { name: "Statistics", phase: "FOUNDATION", summary: "Build an intuition for uncertainty, distributions, estimation, and experimental decisions. Use small datasets to see every concept in action.", study: ["Probability & distributions", "Sampling & central limit theorem", "Confidence intervals", "Hypothesis testing"], practice: ["Create a probability simulator", "Run A/B test experiments", "Explain a p-value in plain English"], deliverable: "A/B test analysis notebook" },
  { name: "SQL & Exploration", phase: "FOUNDATION", summary: "Practice answering business questions with SQL and visual storytelling. Prioritize query correctness, performance, and communication.", study: ["Window functions", "Subqueries & CTEs", "EDA and visualization", "Communicating insights"], practice: ["Build a 15-query SQL set", "Create an executive dashboard", "Present a 5-minute finding"], deliverable: "SQL analysis dashboard" },
  { name: "Algorithms", phase: "CORE METHODS", summary: "Sharpen problem-solving patterns and algorithmic thinking. Focus on recognizing the tradeoffs behind each solution.", study: ["Arrays & hash maps", "Two pointers & sliding windows", "Trees & graphs", "Complexity analysis"], practice: ["Solve 12 medium problems", "Explain Big-O verbally", "Time and compare solutions"], deliverable: "Algorithm problem journal" },
  { name: "ML Algorithms", phase: "CORE METHODS", summary: "Learn how core machine learning models make predictions and where each model is appropriate.", study: ["Linear & logistic regression", "Decision trees & ensembles", "Clustering methods", "Dimensionality reduction"], practice: ["Implement a model from scratch", "Compare 3 algorithms", "Tune one hyperparameter grid"], deliverable: "Baseline model comparison" },
  { name: "Model Evaluation", phase: "CORE METHODS", summary: "Evaluate models with reliable validation, appropriate metrics, and attention to leakage and real-world bias.", study: ["Train/validation/test splits", "Cross-validation", "Precision, recall & ROC", "Bias, leakage & calibration"], practice: ["Detect a leakage example", "Build an evaluation report", "Calibrate a classifier"], deliverable: "Model evaluation report" },
  { name: "Deep Learning", phase: "PRODUCTION", summary: "Understand neural networks, the training loop, and where deep learning improves a solution.", study: ["Layers & activations", "Loss functions", "Backpropagation", "Regularization & transfer learning"], practice: ["Train a small neural network", "Plot the learning curve", "Experiment with regularization"], deliverable: "Trained deep learning demo" },
  { name: "APIs & Databases", phase: "PRODUCTION", summary: "Make data products usable through clean APIs and efficient database design.", study: ["REST fundamentals", "Schema design", "Indexes & query plans", "Authentication basics"], practice: ["Create a REST endpoint", "Benchmark two queries", "Write API documentation"], deliverable: "Documented REST API" },
  { name: "Testing & Delivery", phase: "PRODUCTION", summary: "Turn notebooks and scripts into reliable, maintainable code that can be delivered repeatedly.", study: ["Unit & integration testing", "Git workflows", "Docker fundamentals", "CI/CD concepts"], practice: ["Write tests for a module", "Containerize an application", "Create a CI pipeline"], deliverable: "Tested, containerized service" },
  { name: "System Design", phase: "INTERVIEW", summary: "Practice designing reliable data systems under latency, scale, quality, and cost constraints.", study: ["Requirement clarification", "Batch vs streaming", "Caching & partitioning", "Monitoring & observability"], practice: ["Design a recommendation system", "Draw a data architecture", "Defend tradeoffs aloud"], deliverable: "One complete system design" },
  { name: "Mock Interviews", phase: "INTERVIEW", summary: "Convert knowledge into interview performance through timed, structured practice and feedback.", study: ["Python & SQL drills", "ML case discussions", "Behavioral stories", "System design framing"], practice: ["Complete 3 timed mocks", "Review weak explanations", "Practice whiteboard thinking"], deliverable: "Mock interview scorecard" },
  { name: "Portfolio & Polish", phase: "INTERVIEW", summary: "Package your strongest work and prepare to explain decisions, tradeoffs, impact, and future improvements.", study: ["Repository documentation", "Technical storytelling", "Resume project bullets", "Final weak-area review"], practice: ["Publish one portfolio project", "Record a 3-minute demo", "Run a final mock interview"], deliverable: "Interview-ready portfolio" }
];

const resources = [
  { category: "Calculus", title: "Khan Academy Calculus", text: "Limits, derivatives, integrals, and applications for machine learning.", link: "https://www.khanacademy.org/math/calculus-1" },
  { category: "Calculus", title: "3Blue1Brown: Calculus", text: "Visual explanations of derivatives and integrals through intuition.", link: "https://www.3blue1brown.com/topics/calculus" },
  { category: "Calculus", title: "Calculus for ML", text: "Practice multivariable calculus, gradients, and optimization concepts.", link: "https://www.khanacademy.org/math/multivariable-calculus" },
  { category: "AI", title: "Transformers & Attention", text: "Understand modern language models, embeddings, and inference.", link: "https://huggingface.co/learn/nlp-course" },
  { category: "AI", title: "RAG Systems", text: "Retrieve grounded context and evaluate generative answers.", link: "https://docs.llamaindex.ai/" },
  { category: "AI", title: "AI Evals", text: "Build datasets and score quality, safety, and reliability.", link: "https://docs.ragas.io/" },
  { category: "Automation", title: "Workflow Orchestration", text: "Schedule, retry, monitor, and backfill production workflows.", link: "https://docs.prefect.io/" },
  { category: "Automation", title: "Browser Automation", text: "Automate end-to-end web testing and repeatable tasks.", link: "https://playwright.dev/docs/intro" },
  { category: "Automation", title: "Infrastructure as Code", text: "Provision cloud infrastructure using reusable configurations.", link: "https://developer.hashicorp.com/terraform" },
  { category: "Coding", title: "Python Practice", text: "Data structures, algorithms, and timed problem solving.", link: "https://leetcode.com/" },
  { category: "Coding", title: "Java Engineering", text: "Spring, JVM internals, concurrency, and enterprise patterns.", link: "https://spring.io/guides" },
  { category: "Coding", title: "Python Engineering", text: "FastAPI, typing, testing, packaging, and async services.", link: "https://fastapi.tiangolo.com/" },
  { category: "Data", title: "SQL Mastery", text: "Join, aggregate, and query realistic datasets.", link: "https://mode.com/sql-tutorial/" },
  { category: "Data", title: "ML Foundations", text: "Courses and notebooks for core model concepts.", link: "https://www.kaggle.com/learn" },
  { category: "Systems", title: "System Design", text: "Patterns for scalable, reliable data applications.", link: "https://github.com/donnemartin/system-design-primer" },
  { category: "Systems", title: "Brainstorm a Program or Platform", text: "Turn an idea into clear requirements, architecture, milestones, and a testable prototype.", link: "https://cloud.google.com/architecture/framework" },
  { category: "Systems", title: "Distributed Systems", text: "Event buses, resilience, observability, and service boundaries.", link: "https://kafka.apache.org/documentation/" },
  { category: "Coding", title: "Git & Version Control", text: "Branching, collaboration, and review workflows.", link: "https://learngitbranching.js.org/" },
  { category: "Systems", title: "Docker Handbook", text: "Package applications and environments consistently.", link: "https://docs.docker.com/get-started/" },
  { category: "Data", title: "Statistics", text: "Interactive references for inference and experiments.", link: "https://www.statsmodels.org/" },
  { category: "Coding", title: "Clean Code in Python", text: "Readability, testing, and maintainable functions.", link: "https://docs.python.org/3/tutorial/" }
];

const state = JSON.parse(localStorage.getItem("ds-path-state") || '{"week":0,"done":[],"tasks":{}}');
let activeWeek = state.week || 0;

function weekKey(index) { return `week-${index}`; }

function renderWeekList() {
  const list = document.getElementById("weekList");
  list.innerHTML = weeks.map((week, i) => `
    <button class="week-item ${i === activeWeek ? "active" : ""} ${state.done.includes(i) ? "done" : ""}" data-week="${i}" type="button">
      <span class="number">${String(i + 1).padStart(2, "0")}</span>
      <span class="name">${week.name}</span>
      <span class="state">${state.done.includes(i) ? "✓" : ""}</span>
    </button>`).join("");
  list.querySelectorAll(".week-item").forEach(button => {
    button.addEventListener("click", () => {
      activeWeek = Number(button.dataset.week);
      state.week = activeWeek;
      saveState();
      render();
    });
  });
}

function renderWeek() {
  const week = weeks[activeWeek];
  document.getElementById("weekKicker").textContent = `WEEK ${String(activeWeek + 1).padStart(2, "0")} · ${week.phase}`;
  document.getElementById("weekTitle").textContent = week.name;
  document.getElementById("weekCount").textContent = `${String(activeWeek + 1).padStart(2, "0")} / 12`;
  document.getElementById("weekSummary").textContent = week.summary;
  document.getElementById("deliverable").textContent = week.deliverable;

  document.getElementById("studyList").innerHTML = week.study.map((item, i) => {
    const id = `${weekKey(activeWeek)}-study-${i}`;
    const checked = state.tasks[id] ? "checked" : "";
    return `<li><input id="${id}" type="checkbox" ${checked}><label for="${id}">${item}</label></li>`;
  }).join("");
  document.getElementById("practiceList").innerHTML = week.practice.map(item => `<li>${item}</li>`).join("");

  document.querySelectorAll(".check-list input").forEach(input => {
    input.addEventListener("change", () => {
      state.tasks[input.id] = input.checked;
      saveState();
      updateProgress();
    });
  });

  const complete = document.getElementById("completeWeek");
  const isDone = state.done.includes(activeWeek);
  complete.classList.toggle("done", isDone);
  complete.innerHTML = isDone ? "Week completed <span>✓</span>" : "Mark week complete <span>→</span>";
}

function renderResources() {
  document.getElementById("resourceGrid").innerHTML = resources.map(resource => `
    <a class="resource-card" href="${resource.link}" target="_blank" rel="noopener" data-category="${resource.category}">
      <span class="tag">${resource.category}</span>
      <h3>${resource.title}</h3>
      <p>${resource.text}</p>
    </a>`).join("");
}

function updateProgress() {
  const percent = Math.round((state.done.length / weeks.length) * 100);
  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("progressRing").style.setProperty("--p", `${percent * 3.6}deg`);
}

function saveState() { localStorage.setItem("ds-path-state", JSON.stringify(state)); }

function render() {
  renderWeekList();
  renderWeek();
  updateProgress();
}

document.getElementById("completeWeek").addEventListener("click", () => {
  if (state.done.includes(activeWeek)) {
    state.done = state.done.filter(i => i !== activeWeek);
  } else {
    state.done.push(activeWeek);
  }
  saveState();
  render();
});

document.getElementById("resetProgress").addEventListener("click", () => {
  state.done = [];
  state.tasks = {};
  state.week = 0;
  activeWeek = 0;
  saveState();
  render();
});

document.querySelectorAll(".filter").forEach(filter => {
  filter.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(button => button.classList.remove("active"));
    filter.classList.add("active");
    const category = filter.dataset.filter;
    document.querySelectorAll(".resource-card").forEach(card => {
      card.classList.toggle("hidden", category !== "All" && card.dataset.category !== category);
    });
  });
});

renderResources();
render();

document.querySelectorAll(".topbar nav a[data-tab]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const tab = link.dataset.tab;
    const target = tab === "roadmap"
      ? document.getElementById("roadmap")
      : document.getElementById(tab === "projects" ? "blueprints" : tab);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const sections = [
  document.getElementById("roadmap"),
  document.getElementById("engineering"),
  document.getElementById("expertise"),
  document.getElementById("certifications"),
  document.getElementById("resources"),
  document.getElementById("blueprints"),
  document.getElementById("salary"),
  document.getElementById("notes")
].filter(Boolean);

const noteForm = document.getElementById("noteForm");
const notesList = document.getElementById("notesList");
const noteCount = document.getElementById("noteCount");
let savedNotes = JSON.parse(localStorage.getItem("ds-path-notes") || "[]");

function renderNotes() {
  noteCount.textContent = `${savedNotes.length} ${savedNotes.length === 1 ? "note" : "notes"}`;
  if (savedNotes.length === 0) {
    notesList.innerHTML = '<div class="empty-notes">No notes yet. Capture your first takeaway.</div>';
    return;
  }

  notesList.innerHTML = "";
  savedNotes.forEach(note => {
    const card = document.createElement("article");
    card.className = "note-card";

    const category = document.createElement("span");
    category.className = "note-card-category";
    category.textContent = note.category;

    const title = document.createElement("h3");
    title.textContent = note.topic;

    const text = document.createElement("p");
    text.textContent = note.text;

    const date = document.createElement("time");
    date.textContent = note.date;

    const remove = document.createElement("button");
    remove.className = "delete-note";
    remove.type = "button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `Delete ${note.topic}`);
    remove.addEventListener("click", () => {
      savedNotes = savedNotes.filter(item => item.id !== note.id);
      localStorage.setItem("ds-path-notes", JSON.stringify(savedNotes));
      renderNotes();
    });

    card.append(category, title, text, date, remove);
    notesList.append(card);
  });
}

noteForm.addEventListener("submit", event => {
  event.preventDefault();
  const topic = document.getElementById("noteTopic");
  const category = document.getElementById("noteCategory");
  const text = document.getElementById("noteText");
  savedNotes.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    topic: topic.value.trim(),
    category: category.value,
    text: text.value.trim(),
    date: new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date())
  });
  localStorage.setItem("ds-path-notes", JSON.stringify(savedNotes));
  noteForm.reset();
  renderNotes();
});

document.getElementById("clearNotes").addEventListener("click", () => {
  if (!savedNotes.length) return;
  savedNotes = [];
  localStorage.setItem("ds-path-notes", JSON.stringify(savedNotes));
  renderNotes();
});

renderNotes();

const navLinks = document.querySelectorAll(".topbar nav a[data-tab]");
const observer = new IntersectionObserver(entries => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;

  let tab = visible.target.id;
  if (tab === "roadmap") tab = "roadmap";
  if (tab === "engineering") tab = "engineering";
  if (tab === "expertise") tab = "expertise";
  if (tab === "certifications") tab = "certifications";
  if (tab === "resources") tab = "resources";
  if (tab === "blueprints") tab = "projects";
  if (tab === "salary") tab = "salary";

  navLinks.forEach(link => link.classList.toggle("active", link.dataset.tab === tab));
}, { rootMargin: "-25% 0px -60% 0px", threshold: [0.01, 0.2, 0.5] });

sections.forEach(section => observer.observe(section));
