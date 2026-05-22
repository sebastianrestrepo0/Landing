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

assertIncludes(index, '<html lang="es">', "Spanish lang attribute");
assertIncludes(index, "FLAG Soluciones | Partner SAP para implementación, soporte y evolución", "SEO title");
assertIncludes(index, "GROW, RISE, BTP, SuccessFactors, Analítica y Seguridad SAP", "SEO meta description");

assertOrder(index, [
  "<Header",
  "<Hero",
  "<PartnerBadge",
  "<ClientsGrid",
  "<WhyFlag",
  "<Solutions",
  "<Services",
  "<Accelerators",
  "<About",
  "<ContactForm",
  "<Footer",
], "Main component order");

assertOrder(index, [
  "GROW with SAP",
  "RISE with SAP",
  "SAP BTP",
  "SAP SuccessFactors",
  "Analítica SAP",
], "Solution order");

for (const solution of [
  "GROW with SAP",
  "RISE with SAP",
  "SAP BTP",
  "SAP SuccessFactors",
  "Analítica SAP",
]) {
  const start = index.indexOf(`name: "${solution}"`);
  assert.ok(start >= 0, `Missing solution ${solution}`);
  const excerpt = index.slice(start, start + 1600);
  assertIncludes(excerpt, "Implementación", `${solution} implementation service`);
  assertIncludes(excerpt, "Soporte", `${solution} support service`);
}

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
assertIncludes(index, "Empresas que han confiado en FLAG Soluciones", "uniform clients section title");
assertIncludes(index, "logo-placeholder", "clean logo placeholders for missing assets");
assertIncludes(index, "clients-showcase", "premium clients showcase");
assertIncludes(index, "clients-marquee", "client marquee wrapper");
assertIncludes(index, "clients-marquee-track", "client marquee track");
assertIncludes(index, "client-card-orbit", "premium client cards");
assertIncludes(index, "client-trust-strip", "client trust signals");

const growStart = index.indexOf('name: "GROW with SAP"');
assert.ok(growStart >= 0, "Missing GROW solution");
const growExcerpt = index.slice(growStart, growStart + 800);
assert.ok(
  growExcerpt.includes("inteligencia artificial") || growExcerpt.includes("Inteligencia artificial") || growExcerpt.includes("IA integrada"),
  "GROW must mention inteligencia artificial or IA"
);

assertIncludes(index, "hero-visual", "hero visual column");
assertIncludes(index, "hero-pillar-card", "hero service pillar cards");
assertIncludes(index, "hero-solutions-strip", "hero solutions strip");
assertIncludes(index, "whyflag-grid", "why flag section grid");
assertIncludes(index, "Flag Risk Alerts", "accelerators - flag risk alerts");

assertIncludes(index, 'const CONTACT_WEBHOOK_URL = "PEGAR_WEBHOOK_AQUI";', "contact webhook constant");
assertIncludes(index, "fetch(CONTACT_WEBHOOK_URL", "contact form POST");
assertIncludes(index, 'origen: "Landing Flag Soluciones"', "contact payload origin");
assertIncludes(index, "Gracias por contactarnos. Nuestro equipo revisará tu solicitud y se comunicará contigo próximamente.", "success message");
assertIncludes(index, "contact-shell", "premium contact shell");
assertIncludes(index, "contact-route", "contact route cards");
assertIncludes(index, "contact-form-head", "contact form header");

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

assert.ok(existsSync(careersPath), "Missing trabaja-con-nosotros.html");
assertIncludes(careers, "Trabaja con nosotros", "careers title");
assertIncludes(careers, "Perfil o cargo de interés", "careers profile field");
assertIncludes(careers, "LinkedIn", "careers LinkedIn field");
assertIncludes(careers, "Link de hoja de vida", "careers CV link field");
assertIncludes(index, 'href="trabaja-con-nosotros.html"', "footer careers link");

for (const cssToken of [
  "--brand-blue:#1e22aa",
  "--brand-cyan:#74d1ea",
  ".solution-tabs",
  ".solution-detail::before",
  ".accelerator-card::before",
  ".contact-form",
  ".contact-shell",
  ".contact-route-card",
  ".clients-showcase",
  ".clients-marquee",
  ".clients-marquee-track",
  ".client-card-orbit",
  ".hero-visual",
  ".hero-pillar-card",
  ".whyflag-grid",
]) {
  assertIncludes(styles, cssToken, `CSS token ${cssToken}`);
}

console.log("Landing content checks passed");
