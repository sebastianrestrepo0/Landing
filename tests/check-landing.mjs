import { readFileSync, existsSync } from "node:fs";
import assert from "node:assert/strict";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");

const index = read("index.html");
const styles = read("styles.css");
const careersPath = new URL("trabaja-con-nosotros.html", root);
const careers = existsSync(careersPath) ? read("trabaja-con-nosotros.html") : "";

function assertIncludes(source, expected, label = expected) {
  assert.ok(source.includes(expected), `Missing ${label}`);
}

function assertNotIncludes(source, unexpected, label = unexpected) {
  assert.ok(!source.includes(unexpected), `Unexpected ${label}`);
}

function assertOrder(source, items, label) {
  let previous = -1;
  for (const item of items) {
    const index = source.indexOf(item);
    assert.ok(index > previous, `${label}: ${item} is missing or out of order`);
    previous = index;
  }
}

// ——— HTML shell ———
assertIncludes(index, '<html lang="es">', "Spanish lang attribute");
assertIncludes(index, "FLAG Soluciones | Partner SAP para implementación, soporte y evolución", "SEO title");
assertIncludes(index, "GROW, RISE, BTP, SuccessFactors, Analítica y Seguridad SAP", "SEO meta description");

// ——— Component order ———
assertOrder(index, [
  "<Header",
  "<Hero",
  "<SilverPartner",
  "<Solutions",
  "<Services",
  "<Methodology",
  "<Accelerators",
  "<ClientsV2",
  "<Testimonials",
  "<Nosotros",
  "<CtaAndContact",
  "<Footer",
], "Main component order");

// ——— Solution order (strings appear in data) ———
assertOrder(index, [
  "GROW with SAP",
  "RISE with SAP",
  "SAP BTP",
  "SAP SuccessFactors",
  "Analítica SAP",
], "Solution order");

// ——— Solution data check (label: format, impl/supp arrays) ———
for (const solution of [
  "GROW with SAP",
  "RISE with SAP",
  "SAP BTP",
  "SAP SuccessFactors",
  "Analítica SAP",
]) {
  const start = index.indexOf(`label:"${solution}"`);
  assert.ok(start >= 0, `Missing solution ${solution}`);
  const excerpt = index.slice(start, start + 2000);
  assertIncludes(excerpt, "impl:", `${solution} implementation list`);
  assertIncludes(excerpt, "supp:", `${solution} support list`);
}

// ——— No invented claims ———
for (const claim of [
  "98.6%",
  "1.284",
  "98% retención",
  "+90",
  "Operación 24/7",
  "Consultores certificados SAP",
  "SLA garantizados",
]) {
  assertNotIncludes(index, claim, `unvalidated claim ${claim}`);
}
assertNotIncludes(index, "Aliados destacados", "featured client hierarchy");
assertNotIncludes(index, "Y muchos más", "secondary client hierarchy");

// ——— Clients section ———
assertIncludes(index, "Empresas que han confiado en FLAG", "clients section title");
assertIncludes(index, "clients-marquee", "client marquee wrapper");
assertIncludes(index, "clients-row", "client marquee rows");
assertIncludes(index, "cl2-card", "client cards");

// ——— GROW with IA ———
const growStart = index.indexOf('label:"GROW with SAP"');
assert.ok(growStart >= 0, "Missing GROW solution");
const growExcerpt = index.slice(growStart, growStart + 800);
assert.ok(
  growExcerpt.includes("inteligencia artificial") ||
  growExcerpt.includes("Inteligencia artificial") ||
  growExcerpt.includes("IA integrada"),
  "GROW must mention inteligencia artificial or IA"
);

// ——— Hero ———
assertIncludes(index, "hero-visual", "hero visual column");
assertIncludes(index, "Flag Risk Alerts", "accelerators - flag risk alerts");

// ——— Contact webhook / form ———
assertIncludes(index, 'const CONTACT_WEBHOOK_URL = "PEGAR_WEBHOOK_AQUI";', "contact webhook constant");
assertIncludes(index, "fetch(CONTACT_WEBHOOK_URL", "contact form POST");
assertIncludes(index, 'origen: "Landing Flag Soluciones"', "contact payload origin");
assertIncludes(index, "Gracias por contactarnos. Nuestro equipo revisará tu solicitud y se comunicará contigo próximamente.", "success message");

// ——— Contact form fields ———
for (const field of [
  "Nombre",
  "Empresa",
  "Cargo",
  "Correo corporativo",
  "Celular",
  "Solución de interés",
  "Necesidad o mensaje",
]) {
  assertIncludes(index, field, `contact field ${field}`);
}

// ——— Careers page ———
assert.ok(existsSync(careersPath), "Missing trabaja-con-nosotros.html");
assertIncludes(careers, "Trabaja con nosotros", "careers title");
assertIncludes(careers, "Perfil o cargo de interés", "careers profile field");
assertIncludes(careers, "LinkedIn", "careers LinkedIn field");
assertIncludes(careers, "Link de hoja de vida", "careers CV link field");
assertIncludes(index, 'href="trabaja-con-nosotros.html"', "footer careers link");

// ——— CSS tokens (new design) ———
for (const cssToken of [
  "--blue:#1E22AA",
  "--cyan:#74D1EA",
  ".sol-accordion",
  ".sol-acc-card",
  ".hv-main",
  ".hv-float",
  ".modal-overlay",
  ".modal-box",
  ".clients-marquee",
  ".clients-row",
  ".cl2-card",
  ".testi-card",
  ".cta-final",
  ".acc-card",
  ".hero-visual",
]) {
  assertIncludes(styles, cssToken, `CSS token ${cssToken}`);
}

console.log("Landing content checks passed");
