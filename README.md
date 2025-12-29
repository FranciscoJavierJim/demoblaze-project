# 🛒 Demoblaze Purchase Flow — Test Automation  

Automatización end-to-end del proceso de compra en **Demoblaze**:  
login → búsqueda de producto → añadir al carrito → finalizar compra con datos de cliente.

Este proyecto usa **Cypress**, **Cucumber (BDD)** y **Page Object Model (POM)** para crear pruebas legibles, reutilizables y fáciles de mantener.

---

## 🚀 Tecnologías
- 🧪 Cypress  
- 🧩 Cucumber / Gherkin  
- 📐 Page Object Model (POM)  
- 🔧 TypeScript / Node.js  

---

## 📁 Estructura del proyecto
```text
cypress/
 ├── e2e/          # Archivos .feature (Cucumber)
 ├── pages/        # Page Objects (POM)
 ├── steps/        # Step definitions
 └── support/      # Configuración de Cypress
cypress.config.ts  # Configuración principal
package.json       # Dependencias y scripts

📦 Instalación

1️⃣ Clonar el repositorio:

git clone https://github.com/FranciscoJavierJim/demoblaze-project.git
cd demoblaze-project

2️⃣ Instalar dependencias:

npm install

▶️ Ejecución de pruebas

🛠 Modo interactivo

npx cypress open

🚀 Modo headless

npx cypress run

🧪 Escenarios incluidos

Este proyecto contiene dos formas de describir el mismo flujo de compra:

✔️ Declarativo — describe qué debe ocurrir

✔️ Imperativo — describe cómo ocurre paso a paso

Ambos validan:

Inicio de sesión

Búsqueda de producto

Añadir al carrito

Finalizar compra con datos del cliente

🤝 Contribuciones

Las contribuciones son bienvenidas.
Abre un issue o pull request para sugerir mejoras o agregar nuevos escenarios.

👤 Autor

Francisco Javier Jiménez
GitHub: https://github.com/FranciscoJavierJim
