const TENANT_ID = "tenant_951";
const STORE_KEY = "hotel_os_mvp_v1";
const SESSION_KEY = "hotel_os_session_v1";

const navItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "hotels", label: "Hotel CRM" },
  { id: "leads", label: "Leads" },
  { id: "tasks", label: "Tasks" },
  { id: "team", label: "Team" },
];

const seedData = {
  tenants: [
    {
      id: TENANT_ID,
      name: "951 Pro Solutions",
      plan: "Internal MVP",
    },
  ],
  users: [
    {
      id: "user_ceo_1",
      tenantId: TENANT_ID,
      name: "CEO",
      email: "ceo@951prosolutions.com",
      role: "CEO",
      department: "Executive",
      status: "Active",
    },
    {
      id: "user_ota_1",
      tenantId: TENANT_ID,
      name: "OTA Manager",
      email: "ota@951prosolutions.com",
      role: "OTA Manager",
      department: "OTA Management",
      status: "Active",
    },
    {
      id: "user_design_1",
      tenantId: TENANT_ID,
      name: "Graphic Designer",
      email: "design@951prosolutions.com",
      role: "Graphic Designer",
      department: "Creative",
      status: "Active",
    },
  ],
  hotels: [
    {
      id: "hotel_vana",
      tenantId: TENANT_ID,
      name: "Vana Homestay",
      contacts: "Khun Vana, +66 81 555 0101, vana@example.com",
      package: "Growth Package",
      contract: "Active until 2026-12-31",
      services: ["OTA Management", "Facebook Marketing", "Photo Shooting"],
      status: "Active",
    },
    {
      id: "hotel_village",
      tenantId: TENANT_ID,
      name: "The Village",
      contacts: "Khun May, +66 82 555 0102, village@example.com",
      package: "OTA Essentials",
      contract: "Active until 2026-09-30",
      services: ["OTA Management", "Revenue Management"],
      status: "Active",
    },
    {
      id: "hotel_19",
      tenantId: TENANT_ID,
      name: "19 Degrees Resort",
      contacts: "Khun Ton, +66 83 555 0103, 19degrees@example.com",
      package: "Full Service",
      contract: "Renewal due 2026-07-15",
      services: ["OTA Management", "Google Ads", "Website Development"],
      status: "Active",
    },
    {
      id: "hotel_poom",
      tenantId: TENANT_ID,
      name: "The Poom Cafe",
      contacts: "Khun Poom, +66 84 555 0104, poom@example.com",
      package: "Marketing Starter",
      contract: "Month to month",
      services: ["Facebook Marketing", "Photo Shooting"],
      status: "Active",
    },
    {
      id: "hotel_tongta",
      tenantId: TENANT_ID,
      name: "Tongta Phaview",
      contacts: "Khun Nan, +66 85 555 0105, tongta@example.com",
      package: "OTA Essentials",
      contract: "Active until 2026-10-31",
      services: ["OTA Management", "Video Production"],
      status: "Active",
    },
  ],
  leads: [
    {
      id: "lead_001",
      tenantId: TENANT_ID,
      name: "Riverfront Boutique Hotel",
      source: "Facebook Inbox",
      status: "Follow Up",
      notes: "Interested in OTA and photo package. Asked for price.",
      followUpDate: "2026-06-10",
    },
    {
      id: "lead_002",
      tenantId: TENANT_ID,
      name: "Old City Stay",
      source: "Referral",
      status: "Qualified",
      notes: "Owner wants better Booking.com performance.",
      followUpDate: "2026-06-12",
    },
    {
      id: "lead_003",
      tenantId: TENANT_ID,
      name: "Mountain View Resort",
      source: "Google Ads",
      status: "New",
      notes: "Submitted website form for marketing package.",
      followUpDate: "2026-06-09",
    },
  ],
  tasks: [
    {
      id: "task_001",
      tenantId: TENANT_ID,
      title: "Update Agoda promotions",
      hotelId: "hotel_vana",
      assignedTo: "user_ota_1",
      dueDate: "2026-06-08",
      priority: "High",
      status: "In Progress",
    },
    {
      id: "task_002",
      tenantId: TENANT_ID,
      title: "Design June Facebook campaign",
      hotelId: "hotel_poom",
      assignedTo: "user_design_1",
      dueDate: "2026-06-11",
      priority: "Medium",
      status: "To Do",
    },
    {
      id: "task_003",
      tenantId: TENANT_ID,
      title: "Prepare OTA performance notes",
      hotelId: "hotel_village",
      assignedTo: "user_ota_1",
      dueDate: "2026-06-14",
      priority: "Medium",
      status: "To Do",
    },
    {
      id: "task_004",
      tenantId: TENANT_ID,
      title: "Review contract renewal",
      hotelId: "hotel_19",
      assignedTo: "user_ceo_1",
      dueDate: "2026-06-07",
      priority: "High",
      status: "Review",
    },
  ],
};

const schemas = {
  hotels: [
    { name: "name", label: "Hotel Name", type: "text", required: true },
    { name: "contacts", label: "Contacts", type: "textarea" },
    { name: "package", label: "Package", type: "select", options: ["OTA Essentials", "Marketing Starter", "Growth Package", "Full Service", "Custom"] },
    { name: "contract", label: "Contract", type: "text" },
    { name: "services", label: "Services", type: "multiselect", options: ["OTA Management", "Revenue Management", "Facebook Marketing", "Google Ads", "Website Development", "Photo Shooting", "Video Production"] },
    { name: "status", label: "Status", type: "select", options: ["Active", "Paused", "Ended"] },
  ],
  leads: [
    { name: "name", label: "Lead Name", type: "text", required: true },
    { name: "source", label: "Lead Source", type: "select", options: ["Facebook Inbox", "Referral", "Google Ads", "Website", "Walk In", "Other"] },
    { name: "status", label: "Status", type: "select", options: ["New", "Qualified", "Follow Up", "Won", "Lost"] },
    { name: "followUpDate", label: "Follow-up Date", type: "date" },
    { name: "notes", label: "Notes", type: "textarea", full: true },
  ],
  tasks: [
    { name: "title", label: "Task", type: "text", required: true },
    { name: "hotelId", label: "Hotel", type: "hotel" },
    { name: "assignedTo", label: "Assigned To", type: "user" },
    { name: "dueDate", label: "Due Date", type: "date" },
    { name: "priority", label: "Priority", type: "select", options: ["Low", "Medium", "High"] },
    { name: "status", label: "Status", type: "select", options: ["To Do", "In Progress", "Review", "Done"] },
  ],
  users: [
    { name: "name", label: "Employee", type: "text", required: true },
    { name: "email", label: "Email", type: "email" },
    { name: "role", label: "Role", type: "select", options: ["CEO", "OTA Manager", "Graphic Designer", "Operations Manager"] },
    { name: "department", label: "Department", type: "select", options: ["Executive", "OTA Management", "Creative", "Marketing", "Operations"] },
    { name: "status", label: "Status", type: "select", options: ["Active", "Inactive"] },
  ],
};

let state = {
  route: "dashboard",
  modal: null,
  search: "",
  filter: "All",
  mobileOpen: false,
  toast: "",
  data: loadData(),
  session: loadSession(),
};

function loadData() {
  const saved = localStorage.getItem(STORE_KEY);
  if (!saved) {
    localStorage.setItem(STORE_KEY, JSON.stringify(seedData));
    return structuredClone(seedData);
  }
  return JSON.parse(saved);
}

function saveData() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state.data));
}

function loadSession() {
  const saved = localStorage.getItem(SESSION_KEY);
  return saved ? JSON.parse(saved) : null;
}

function saveSession(session) {
  state.session = session;
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function uid(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;
}

function tenantRows(key) {
  return state.data[key].filter((row) => row.tenantId === TENANT_ID);
}

function hotelName(id) {
  return tenantRows("hotels").find((hotel) => hotel.id === id)?.name || "Unassigned";
}

function userName(id) {
  return tenantRows("users").find((user) => user.id === id)?.name || "Unassigned";
}

function isOverdue(task) {
  if (task.status === "Done" || !task.dueDate) return false;
  const today = new Date("2026-06-08T00:00:00");
  return new Date(`${task.dueDate}T00:00:00`) < today;
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = state.session ? renderShell() : renderLogin();
  bindEvents();
}

function renderLogin() {
  return `
    <main class="login-screen">
      <section class="login-copy">
        <h1>951 Hotel OS</h1>
        <p>One dashboard for hotel clients, leads, tasks, contracts, packages, and team ownership. Built for fast daily operations at 951 Pro Solutions.</p>
      </section>
      <section class="login-panel">
        <div class="login-box">
          <div class="brand-row"><span class="brand-mark">951</span><span>Hotel OS</span></div>
          <h2>Sign in to workspace</h2>
          <p class="muted">MVP Version 1 uses a Google sign-in simulation. It is ready to connect to Google OAuth when the backend is added.</p>
          <button class="google-btn" data-action="login">G Sign in with Google</button>
          <p class="muted">Workspace: 951 Pro Solutions</p>
        </div>
      </section>
    </main>
  `;
}

function renderShell() {
  const active = navItems.find((item) => item.id === state.route) || navItems[0];
  return `
    <div class="mobile-overlay ${state.mobileOpen ? "open" : ""}" data-action="close-mobile"></div>
    <div class="app-shell">
      <aside class="sidebar ${state.mobileOpen ? "open" : ""}">
        <div class="brand-row"><span class="brand-mark">951</span><span>Hotel OS</span></div>
        <div class="tenant-card">
          <strong>951 Pro Solutions</strong>
          <small>Multi-tenant workspace: ${TENANT_ID}</small>
        </div>
        <nav class="nav">
          ${navItems.map((item) => `<button class="${item.id === state.route ? "active" : ""}" data-route="${item.id}">${item.label}</button>`).join("")}
        </nav>
        <div class="sidebar-footer">
          <div class="user-pill"><strong>${state.session.name}</strong><br /><small>${state.session.email}</small></div>
          <button class="secondary-btn" data-action="logout">Log out</button>
        </div>
      </aside>
      <main class="main">
        <section class="topbar">
          <div>
            <button class="secondary-btn mobile-menu" data-action="toggle-mobile">Menu</button>
            <h1>${active.label}</h1>
            <p class="muted">${pageSubtitle(state.route)}</p>
          </div>
          ${renderTopActions(state.route)}
        </section>
        ${renderPage()}
      </main>
    </div>
    ${state.modal ? renderModal() : ""}
    ${state.toast ? `<div class="toast">${state.toast}</div>` : ""}
  `;
}

function pageSubtitle(route) {
  return {
    dashboard: "Today’s operating view for clients, leads, tasks, and team workload.",
    hotels: "Manage hotel accounts, contacts, packages, contracts, and services.",
    leads: "Track Facebook Inbox, referrals, ads, and follow-up commitments.",
    tasks: "Replace manual task tracking with owner, due date, priority, and status.",
    team: "Keep roles and departments clear for daily execution.",
  }[route];
}

function renderTopActions(route) {
  if (route === "dashboard") {
    return `<div class="toolbar"><button class="secondary-btn" data-action="reset-data">Reset sample data</button><button class="primary-btn" data-route="tasks">Open tasks</button></div>`;
  }
  const map = { hotels: "hotel", leads: "lead", tasks: "task", team: "employee" };
  return `<div class="toolbar"><button class="primary-btn" data-open="${route}">Add ${map[route]}</button></div>`;
}

function renderPage() {
  if (state.route === "dashboard") return renderDashboard();
  if (state.route === "hotels") return renderCrudPage("hotels");
  if (state.route === "leads") return renderCrudPage("leads");
  if (state.route === "tasks") return renderCrudPage("tasks");
  return renderCrudPage("users");
}

function renderDashboard() {
  const hotels = tenantRows("hotels");
  const leads = tenantRows("leads");
  const tasks = tenantRows("tasks");
  const users = tenantRows("users");
  const overdue = tasks.filter(isOverdue);
  const openTasks = tasks.filter((task) => task.status !== "Done");
  const followUps = leads
    .filter((lead) => lead.status !== "Lost" && lead.status !== "Won")
    .sort((a, b) => (a.followUpDate || "").localeCompare(b.followUpDate || ""))
    .slice(0, 5);

  return `
    <section class="grid metrics">
      ${metric("Active Hotels", hotels.filter((hotel) => hotel.status === "Active").length)}
      ${metric("Open Leads", leads.filter((lead) => !["Won", "Lost"].includes(lead.status)).length)}
      ${metric("Open Tasks", openTasks.length)}
      ${metric("Team Members", users.length)}
    </section>
    <section class="grid dashboard-layout">
      <div class="panel">
        <h2>Priority Work</h2>
        <div class="list">
          ${openTasks
            .sort((a, b) => (isOverdue(b) - isOverdue(a)) || priorityRank(b.priority) - priorityRank(a.priority))
            .slice(0, 6)
            .map(renderTaskItem)
            .join("") || `<div class="empty">No open tasks.</div>`}
        </div>
      </div>
      <div class="panel">
        <h2>Lead Follow-ups</h2>
        <div class="list">
          ${followUps
            .map((lead) => `
              <div class="list-item">
                <div class="list-item-top"><strong>${escapeHtml(lead.name)}</strong><span class="status ${lead.status.toLowerCase().replaceAll(" ", "-")}">${lead.status}</span></div>
                <span class="muted">${lead.source} · ${lead.followUpDate || "No date"}</span>
                <span>${escapeHtml(lead.notes || "")}</span>
              </div>
            `)
            .join("") || `<div class="empty">No follow-ups.</div>`}
        </div>
      </div>
      <div class="panel">
        <h2>Client Service Mix</h2>
        <div class="list">
          ${hotels
            .map((hotel) => `
              <div class="list-item">
                <div class="list-item-top"><strong>${escapeHtml(hotel.name)}</strong><span class="tag">${hotel.package}</span></div>
                <span class="muted">${hotel.services.join(", ")}</span>
              </div>
            `)
            .join("")}
        </div>
      </div>
      <div class="panel">
        <h2>7-Day MVP Readiness</h2>
        <div class="list">
          <div class="list-item"><strong>Day 1-2</strong><span class="muted">Add all hotels, contacts, packages, contracts, and service ownership.</span></div>
          <div class="list-item"><strong>Day 3-4</strong><span class="muted">Move Facebook Inbox leads and spreadsheet tasks into the OS.</span></div>
          <div class="list-item"><strong>Day 5-7</strong><span class="muted">Run daily standups from Dashboard and close all work inside Tasks.</span></div>
        </div>
      </div>
    </section>
  `;
}

function metric(label, value) {
  return `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`;
}

function priorityRank(priority) {
  return { High: 3, Medium: 2, Low: 1 }[priority] || 0;
}

function renderTaskItem(task) {
  return `
    <div class="list-item">
      <div class="list-item-top">
        <strong>${escapeHtml(task.title)}</strong>
        <span class="priority ${task.priority.toLowerCase()}">${task.priority}</span>
      </div>
      <span class="muted">${hotelName(task.hotelId)} · ${userName(task.assignedTo)}</span>
      <span><span class="status ${isOverdue(task) ? "overdue" : task.status.toLowerCase().replaceAll(" ", "-")}">${isOverdue(task) ? "Overdue" : task.status}</span> Due ${task.dueDate || "No date"}</span>
    </div>
  `;
}

function renderCrudPage(key) {
  const labels = {
    hotels: ["Hotels", "Search hotels", "Status"],
    leads: ["Leads", "Search leads", "Status"],
    tasks: ["Tasks", "Search tasks", "Status"],
    users: ["Team", "Search employees", "Department"],
  }[key];
  const rows = filterRows(key);
  return `
    <section class="table-wrap">
      <div class="table-title">
        <h2>${labels[0]}</h2>
        <div class="filters">
          <input class="search" data-action="search" placeholder="${labels[1]}" value="${escapeAttr(state.search)}" />
          ${renderFilter(key)}
        </div>
      </div>
      ${renderTable(key, rows)}
    </section>
  `;
}

function renderFilter(key) {
  const options = {
    hotels: ["All", "Active", "Paused", "Ended"],
    leads: ["All", "New", "Qualified", "Follow Up", "Won", "Lost"],
    tasks: ["All", "To Do", "In Progress", "Review", "Done", "Overdue"],
    users: ["All", "Executive", "OTA Management", "Creative", "Marketing", "Operations"],
  }[key];
  return `<select data-action="filter">${options.map((option) => `<option ${state.filter === option ? "selected" : ""}>${option}</option>`).join("")}</select>`;
}

function filterRows(key) {
  const sourceKey = key === "team" ? "users" : key;
  let rows = tenantRows(sourceKey);
  const q = state.search.trim().toLowerCase();
  if (q) {
    rows = rows.filter((row) => JSON.stringify(row).toLowerCase().includes(q));
  }
  if (state.filter !== "All") {
    rows = rows.filter((row) => {
      if (sourceKey === "tasks" && state.filter === "Overdue") return isOverdue(row);
      if (sourceKey === "users") return row.department === state.filter;
      return row.status === state.filter;
    });
  }
  return rows;
}

function renderTable(key, rows) {
  if (!rows.length) return `<div class="empty">No records found.</div>`;
  if (key === "hotels") {
    return table(["Hotel", "Package", "Services", "Contract", "Status", ""], rows.map((hotel) => [
      `<strong>${escapeHtml(hotel.name)}</strong><br><span class="muted">${escapeHtml(hotel.contacts)}</span>`,
      hotel.package,
      hotel.services.map((service) => `<span class="tag">${service}</span>`).join(" "),
      escapeHtml(hotel.contract),
      `<span class="status ${hotel.status.toLowerCase()}">${hotel.status}</span>`,
      actions("hotels", hotel.id),
    ]));
  }
  if (key === "leads") {
    return table(["Lead", "Source", "Status", "Follow-up", "Notes", ""], rows.map((lead) => [
      `<strong>${escapeHtml(lead.name)}</strong>`,
      lead.source,
      `<span class="status ${lead.status.toLowerCase().replaceAll(" ", "-")}">${lead.status}</span>`,
      lead.followUpDate || "",
      escapeHtml(lead.notes || ""),
      actions("leads", lead.id),
    ]));
  }
  if (key === "tasks") {
    return table(["Task", "Hotel", "Assigned To", "Due", "Priority", "Status", ""], rows.map((task) => [
      `<strong>${escapeHtml(task.title)}</strong>`,
      hotelName(task.hotelId),
      userName(task.assignedTo),
      task.dueDate || "",
      `<span class="priority ${task.priority.toLowerCase()}">${task.priority}</span>`,
      `<span class="status ${isOverdue(task) ? "overdue" : task.status.toLowerCase().replaceAll(" ", "-")}">${isOverdue(task) ? "Overdue" : task.status}</span>`,
      actions("tasks", task.id),
    ]));
  }
  return table(["Employee", "Role", "Department", "Status", ""], rows.map((user) => [
    `<strong>${escapeHtml(user.name)}</strong><br><span class="muted">${escapeHtml(user.email)}</span>`,
    user.role,
    user.department,
    `<span class="status ${user.status.toLowerCase()}">${user.status}</span>`,
    actions("users", user.id),
  ]));
}

function table(headers, rows) {
  return `
    <table>
      <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
      <tbody>
        ${rows
          .map((cells) => `<tr>${cells.map((cell, index) => `<td data-label="${escapeAttr(headers[index])}">${cell}</td>`).join("")}</tr>`)
          .join("")}
      </tbody>
    </table>
  `;
}

function actions(key, id) {
  return `<div class="row-actions"><button class="icon-btn" data-edit="${key}:${id}">Edit</button><button class="danger-btn" data-delete="${key}:${id}">Delete</button></div>`;
}

function renderModal() {
  const { key, id } = state.modal;
  const row = id ? tenantRows(key).find((item) => item.id === id) : {};
  const singular = { hotels: "hotel", leads: "lead", tasks: "task", users: "employee" }[key];
  return `
    <div class="modal-backdrop">
      <form class="modal" data-form="${key}">
        <header>
          <h2>${id ? "Edit" : "Add"} ${singular}</h2>
          <button type="button" class="secondary-btn" data-action="close-modal">Close</button>
        </header>
        <div class="form-grid">
          ${schemas[key].map((field) => renderField(field, row)).join("")}
        </div>
        <footer>
          <button type="button" class="danger-btn" data-action="close-modal">Cancel</button>
          <button class="primary-btn" type="submit">Save ${singular}</button>
        </footer>
      </form>
    </div>
  `;
}

function renderField(field, row) {
  const value = row[field.name] ?? "";
  const cls = field.full || field.type === "textarea" || field.type === "multiselect" ? "field full" : "field";
  let input = "";
  if (field.type === "textarea") {
    input = `<textarea name="${field.name}" ${field.required ? "required" : ""}>${escapeHtml(value)}</textarea>`;
  } else if (field.type === "select") {
    input = `<select name="${field.name}">${field.options.map((option) => `<option ${value === option ? "selected" : ""}>${option}</option>`).join("")}</select>`;
  } else if (field.type === "multiselect") {
    const selected = Array.isArray(value) ? value : [];
    input = `<select name="${field.name}" multiple size="5">${field.options.map((option) => `<option ${selected.includes(option) ? "selected" : ""}>${option}</option>`).join("")}</select>`;
  } else if (field.type === "hotel") {
    input = `<select name="${field.name}">${tenantRows("hotels").map((hotel) => `<option value="${hotel.id}" ${value === hotel.id ? "selected" : ""}>${escapeHtml(hotel.name)}</option>`).join("")}</select>`;
  } else if (field.type === "user") {
    input = `<select name="${field.name}">${tenantRows("users").map((user) => `<option value="${user.id}" ${value === user.id ? "selected" : ""}>${escapeHtml(user.name)}</option>`).join("")}</select>`;
  } else {
    input = `<input name="${field.name}" type="${field.type}" value="${escapeAttr(value)}" ${field.required ? "required" : ""} />`;
  }
  return `<label class="${cls}"><span>${field.label}</span>${input}</label>`;
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => {
      state.route = button.dataset.route;
      state.search = "";
      state.filter = "All";
      state.mobileOpen = false;
      render();
    });
  });

  document.querySelectorAll("[data-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.open === "team" ? "users" : button.dataset.open;
      state.modal = { key, id: null };
      render();
    });
  });

  document.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const [key, id] = button.dataset.edit.split(":");
      state.modal = { key, id };
      render();
    });
  });

  document.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const [key, id] = button.dataset.delete.split(":");
      deleteRow(key, id);
    });
  });

  document.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", (event) => handleAction(event, element.dataset.action));
    if (element.dataset.action === "search") {
      element.addEventListener("input", (event) => {
        state.search = event.target.value;
        render();
      });
    }
    if (element.dataset.action === "filter") {
      element.addEventListener("change", (event) => {
        state.filter = event.target.value;
        render();
      });
    }
  });

  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      saveForm(form);
    });
  });
}

function handleAction(event, action) {
  if (["search", "filter"].includes(action)) return;
  if (action) event.preventDefault();
  if (action === "login") {
    saveSession({ id: "user_ceo_1", name: "CEO", email: "ceo@951prosolutions.com", tenantId: TENANT_ID });
    toast("Signed in to 951 Pro Solutions");
  }
  if (action === "logout") {
    localStorage.removeItem(SESSION_KEY);
    state.session = null;
    render();
  }
  if (action === "close-modal") {
    state.modal = null;
    render();
  }
  if (action === "toggle-mobile") {
    state.mobileOpen = !state.mobileOpen;
    render();
  }
  if (action === "close-mobile") {
    state.mobileOpen = false;
    render();
  }
  if (action === "reset-data") {
    state.data = structuredClone(seedData);
    saveData();
    toast("Sample data restored");
  }
}

function saveForm(form) {
  const key = form.dataset.form;
  const formData = new FormData(form);
  const payload = {};
  schemas[key].forEach((field) => {
    if (field.type === "multiselect") {
      payload[field.name] = formData.getAll(field.name);
    } else {
      payload[field.name] = formData.get(field.name) || "";
    }
  });

  if (state.modal.id) {
    state.data[key] = state.data[key].map((row) => (row.id === state.modal.id ? { ...row, ...payload } : row));
  } else {
    const prefix = { hotels: "hotel", leads: "lead", tasks: "task", users: "user" }[key];
    state.data[key].push({ id: uid(prefix), tenantId: TENANT_ID, ...payload });
  }

  saveData();
  state.modal = null;
  toast("Saved");
}

function deleteRow(key, id) {
  const labels = { hotels: "hotel", leads: "lead", tasks: "task", users: "employee" };
  const ok = confirm(`Delete this ${labels[key]}?`);
  if (!ok) return;
  state.data[key] = state.data[key].filter((row) => row.id !== id);
  if (key === "hotels") {
    state.data.tasks = state.data.tasks.map((task) => (task.hotelId === id ? { ...task, hotelId: "" } : task));
  }
  if (key === "users") {
    state.data.tasks = state.data.tasks.map((task) => (task.assignedTo === id ? { ...task, assignedTo: "" } : task));
  }
  saveData();
  toast("Deleted");
}

function toast(message) {
  state.toast = message;
  render();
  setTimeout(() => {
    state.toast = "";
    render();
  }, 1800);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

render();
