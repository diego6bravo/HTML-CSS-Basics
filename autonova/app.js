const demoUsers = [
  { email: "admin@autonova.com", password: "admin123", name: "Admin AutoNova", lastName: "", phone: "+57 300 000 0000", role: "comprador" },
  { email: "vendedor@autonova.com", password: "vendedor123", name: "Carlos", lastName: "Mendoza", phone: "+57 300 123 4567", role: "vendedor" },
  { email: "comprador@autonova.com", password: "comprador123", name: "María", lastName: "González", phone: "+57 300 987 6543", role: "comprador" },
];

let currentUser = null;
let currentRole = "comprador"; // comprador | vendedor

let vehicles = [
  {
    id: crypto.randomUUID(),
    modelo: "Toyota Corolla 2023",
    color: "Azul Metálico",
    estado: "Nuevo",
    precio: 85000000,
    placa: "ABC123",
    categoria: "Sedán",
    imagen: "corolla.png",
    vendedor: { name: "Carlos", lastName: "Mendoza", phone: "+57 300 123 4567" },
  },
  {
    id: crypto.randomUUID(),
    modelo: "Chevrolet Tahoe 2022",
    color: "Blanco Perla",
    estado: "Usado",
    precio: 120000000,
    placa: "DEF456",
    categoria: "SUV",
    imagen: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200&auto=format&fit=crop",
    vendedor: { name: "Carlos", lastName: "Mendoza", phone: "+57 300 123 4567" },
  },
  {
    id: crypto.randomUUID(),
    modelo: "Renault Sandero 2023",
    color: "Rojo",
    estado: "Nuevo",
    precio: 45000000,
    placa: "GHI789",
    categoria: "Hatchback",
    imagen: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop",
    vendedor: { name: "Carlos", lastName: "Mendoza", phone: "+57 300 123 4567" },
  },
];

// Utilidades
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const money = (n) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(n);

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2200);
}

function show(view) {
  ["loginView", "sellerView", "buyerView"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle("hidden", id !== view);
  });
}

function updateHeaderForAuth() {
  const roleSwitcher = $("#roleSwitcher");
  const logoutBtn = $("#logoutBtn");
  const isAuth = !!currentUser;
  roleSwitcher.classList.toggle("hidden", !isAuth);
  logoutBtn.classList.toggle("hidden", !isAuth);
  if (isAuth) {
    roleSwitcher.value = currentRole;
  }
}

// LOGIN
function setupLogin() {
  const form = $("#loginForm");
  const role = $("#role");
  const err = $("#loginError");
  const togglePw = $("#togglePassword");
  const pw = $("#password");

  togglePw.addEventListener("click", () => {
    pw.type = pw.type === "password" ? "text" : "password";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    err.classList.add("hidden");
    const email = form.email.value.trim();
    const password = form.password.value;
    const selectedRole = role.value;

    const user = demoUsers.find(u => u.email === email && u.password === password);
    if (!user) {
      err.textContent = "Credenciales inválidas";
      err.classList.remove("hidden");
      return;
    }

    currentUser = { ...user };
    currentRole = selectedRole || user.role;
    updateHeaderForAuth();

    if (currentRole === "vendedor") {
      prefillProfile();
      renderInventory();
      show("sellerView");
    } else {
      renderBuyerResults();
      show("buyerView");
    }

    toast(`Bienvenido, ${currentUser.name}`);
  });
}

// PERFIL VENDEDOR
function prefillProfile() {
  $("#sellerName").value = currentUser?.name || "";
  $("#sellerLastName").value = currentUser?.lastName || "";
  $("#sellerPhone").value = currentUser?.phone || "";
  $("#sellerEmail").value = currentUser?.email || "";
}

function setupProfile() {
  const form = $("#profileForm");
  const cancel = $("#cancelProfile");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    currentUser.name = $("#sellerName").value.trim();
    currentUser.lastName = $("#sellerLastName").value.trim();
    currentUser.phone = $("#sellerPhone").value.trim();
    toast("Perfil actualizado");
  });
  cancel.addEventListener("click", () => {
    prefillProfile();
    toast("Cambios descartados");
  });
}

// INVENTARIO
function renderInventory() {
  const grid = $("#inventoryGrid");
  const empty = $("#emptyState");
  const mine = vehicles.filter(v => true); // en demo, todos

  grid.innerHTML = mine.map(v => `
    <article class="card-vehicle">
      <img src="${v.imagen}" alt="${v.modelo} - ${v.color}" loading="lazy" />
      <div class="info">
        <strong>${v.modelo}</strong>
        <small class="muted">${v.categoria} • ${v.estado} • Placa ${v.placa}</small>
        <span class="price">${money(v.precio)}</span>
        <div class="row-gap">
          <button class="btn btn-outline" data-action="edit" data-id="${v.id}">Editar</button>
          <button class="btn btn-outline" data-action="delete" data-id="${v.id}">Eliminar</button>
        </div>
      </div>
    </article>
  `).join("");

  const count = mine.length;
  const total = mine.reduce((s, v) => s + Number(v.precio || 0), 0);
  $("#kpiVehicles").textContent = String(count);
  $("#kpiTotal").textContent = money(total);

  empty.classList.toggle("hidden", count !== 0);

  // acciones
  grid.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    const id = t.getAttribute("data-id");
    const action = t.getAttribute("data-action");
    if (!id || !action) return;
    if (action === "edit") {
      toast("Función próximamente: editar vehículo");
    }
    if (action === "delete") {
      toast("Función próximamente: eliminar vehículo");
    }
  }, { once: true });
}

function setupVehicleForm() {
  const toggle = $("#toggleCreateVehicle");
  const form = $("#vehicleForm");
  const cancel = $("#cancelVehicle");
  const cta = $("#ctaPrimerVehiculo");
  const error = $("#vehicleError");

  function openForm() { form.classList.remove("hidden"); }
  function closeForm() { form.reset(); form.classList.add("hidden"); error.classList.add("hidden"); }

  toggle.addEventListener("click", openForm);
  cancel.addEventListener("click", closeForm);
  cta.addEventListener("click", openForm);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    error.classList.add("hidden");

    const record = {
      id: crypto.randomUUID(),
      modelo: $("#modelo").value.trim(),
      color: $("#color").value.trim(),
      estado: $("#estado").value,
      precio: Number($("#precio").value),
      placa: $("#placa").value.trim().toUpperCase(),
      categoria: $("#categoria").value,
      imagen: "", vendedor: { name: currentUser.name, lastName: currentUser.lastName, phone: currentUser.phone }
    };

    if (!record.modelo || !record.color || !record.precio || !record.placa) {
      error.textContent = "Completa todos los campos obligatorios";
      error.classList.remove("hidden");
      return;
    }

    // validación de placa única
    if (vehicles.some(v => v.placa === record.placa)) {
      error.textContent = "La placa ya está registrada";
      error.classList.remove("hidden");
      return;
    }

    // imagen opcional
    const file = document.getElementById("imagen").files?.[0];
    if (file) {
      record.imagen = await fileToDataURL(file);
    } else {
      // imagen por defecto según categoría
      record.imagen = categoryFallback(record.categoria);
    }

    vehicles.unshift(record);
    toast("Vehículo registrado");
    renderInventory();
    closeForm();
  });
}

function categoryFallback(cat) {
  const map = {
    "Sedán": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    "SUV": "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200&auto=format&fit=crop",
    "Hatchback": "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
    "Camioneta": "https://images.unsplash.com/photo-1605559424843-9e4c816b62bb?q=80&w=1200&auto=format&fit=crop",
    "Campero": "https://images.unsplash.com/photo-1549921296-3c9b0fd3cace?q=80&w=1200&auto=format&fit=crop"
  };
  return map[cat] || map["Sedán"];
}

function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// COMPRADOR
function renderBuyerResults() {
  const tbody = $("#buyerResults");
  const cat = $("#buyerCategoria").value;
  const list = vehicles.filter(v => cat === "Todos" || v.categoria === cat);
  tbody.innerHTML = list.map(v => `
    <tr>
      <td>${v.modelo}</td>
      <td>${v.color}</td>
      <td>${money(v.precio)}</td>
      <td><button class="btn btn-outline" data-action="showSeller" data-id="${v.id}">Ver vendedor</button></td>
    </tr>
  `).join("");

  tbody.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    const id = t.getAttribute("data-id");
    const action = t.getAttribute("data-action");
    if (action === "showSeller" && id) {
      const v = vehicles.find(x => x.id === id);
      if (!v) return;
      openSellerDetail(v);
    }
  }, { once: true });
}

function openSellerDetail(v) {
  const aside = $("#sellerDetail");
  const body = $("#sellerDetailBody");
  body.innerHTML = `
    <div><strong>Vendedor:</strong> ${v.vendedor.name} ${v.vendedor.lastName}</div>
    <div><strong>Teléfono:</strong> ${v.vendedor.phone}</div>
    <div class="card-muted" style="margin-top:.5rem">${v.modelo} • ${v.categoria} • ${v.estado}</div>
  `;
  aside.classList.remove("hidden");
}

function closeSellerDetail() {
  $("#sellerDetail").classList.add("hidden");
}

// Role switching + logout
function setupHeaderActions() {
  $("#roleSwitcher").addEventListener("change", (e) => {
    currentRole = e.target.value;
    if (!currentUser) return;
    if (currentRole === "vendedor") {
      prefillProfile();
      renderInventory();
      show("sellerView");
    } else {
      renderBuyerResults();
      show("buyerView");
    }
  });

  $("#logoutBtn").addEventListener("click", () => {
    currentUser = null;
    show("loginView");
    updateHeaderForAuth();
  });

  $("#closeSellerDetail").addEventListener("click", closeSellerDetail);
}

function setupBuyerControls() {
  $("#btnBuscar").addEventListener("click", renderBuyerResults);
}

// Inicio
window.addEventListener("DOMContentLoaded", () => {
  setupLogin();
  setupProfile();
  setupVehicleForm();
  setupHeaderActions();
  setupBuyerControls();
  show("loginView");
});
