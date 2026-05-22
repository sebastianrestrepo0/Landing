# Flag Soluciones — Design System Reference
> **Trusted SAP Flow**; una landing corporativa premium donde la experiencia SAP, la analítica, la seguridad y los aceleradores digitales se presentan con claridad ejecutiva, profundidad técnica y confianza institucional.

**Theme:** light corporate / enterprise consulting  
**Uso principal:** mockups de landing para presentación a directivas, diseño UI, Stitch / Figma / desarrollo frontend.  
**Inspiración base:** sistema visual tipo SaaS corporativo con aire amplio, cards limpias, visualizaciones de datos y botones tipo pill; adaptado estrictamente a la identidad de Flag Soluciones.

---

## 1. Principio creativo

La nueva landing de **Flag Soluciones S.A.S.** debe comunicar tres ideas de manera inmediata:

1. **Experiencia comprobada:** más de dos décadas acompañando ecosistemas SAP.
2. **Confianza empresarial:** una consultora seria, madura y cercana a sus clientes.
3. **Capacidad técnica:** consultoría SAP, analítica, seguridad, soporte, automatización y aceleradores propios.

La estética debe sentirse moderna, pero no experimental. Debe verse como una firma consultora SAP que una junta directiva puede aprobar: limpia, sobria, premium, ordenada y orientada a resultados.

---

## 2. Personalidad visual

| Atributo | Dirección |
|---|---|
| Confianza | Azul profundo, estructura clara, textos directos, secciones bien jerarquizadas. |
| Experiencia | Métricas, timeline, reconocimientos, casos y clientes. |
| Tecnología | Diagramas de procesos, dashboards abstractos, flujos de datos, interfaces empresariales. |
| Cercanía | Bordes suaves, buen espaciado, lenguaje humano, cards claras. |
| Consultoría premium | Composición editorial, fondos limpios, tipografía sobria, alto contraste y CTAs precisos. |

**Frase guía de diseño:**  
> “La confianza que da la experiencia, convertida en claridad visual para el ecosistema SAP.”

---

## 3. Tokens — Colores

La referencia visual se adapta a los colores reales del manual de marca de Flag Soluciones. No se deben usar los azules originales del sistema de referencia; deben reemplazarse por los colores corporativos de Flag.

| Name | Value | Token | Role |
|---|---:|---|---|
| Flag Corporate Blue | `#1E22AA` | `--color-flag-blue` | Color principal de marca, CTAs primarios, navegación activa, links principales, títulos destacados. |
| Flag Cyan | `#74D1EA` | `--color-flag-cyan` | Acentos tecnológicos, gradientes, fondos suaves, visualizaciones de datos, badges secundarios. |
| Flag Deep Navy | `#071B4D` | `--color-flag-navy` | Footer, bloques oscuros, hero alternativo, títulos de alta jerarquía, contraste institucional. |
| Flag Orange | `#FA6238` | `--color-flag-orange` | Acento secundario para llamadas puntuales, detalles de productos, alertas de seguridad, énfasis controlado. |
| Flag Yellow | `#F7B242` | `--color-flag-yellow` | Acento cálido para highlights, cifras, reconocimientos o microdetalles. Usar con moderación. |
| Soft Off-White | `#F8FAFC` | `--color-soft-off-white` | Fondo principal de página, áreas de descanso visual. |
| Pure White | `#FFFFFF` | `--color-pure-white` | Cards, navegación, áreas focales, texto sobre fondos oscuros. |
| Enterprise Ink | `#101828` | `--color-enterprise-ink` | Texto principal, títulos sobre fondos claros. |
| Slate Gray | `#475467` | `--color-slate-gray` | Texto secundario, descripciones, navegación no activa. |
| Cool Border | `#D9E4EC` | `--color-cool-border` | Bordes de cards, inputs, separadores, líneas de proceso. |
| Light Cyan Surface | `#EAF8FC` | `--color-light-cyan-surface` | Badges, fondos de módulos SAP, chips de servicio. |
| Light Blue Surface | `#EEF2FF` | `--color-light-blue-surface` | Fondos secundarios, tarjetas de datos, bloques informativos. |

### Gradientes permitidos

```css
--gradient-flag-primary: linear-gradient(135deg, #1E22AA 0%, #3766D8 45%, #74D1EA 100%);
--gradient-flag-soft: linear-gradient(135deg, rgba(30,34,170,0.10) 0%, rgba(116,209,234,0.22) 100%);
--gradient-flag-dark: radial-gradient(circle at 20% 20%, rgba(116,209,234,0.32), transparent 36%), linear-gradient(135deg, #071B4D 0%, #1E22AA 100%);
--gradient-flag-secondary: linear-gradient(135deg, #FA6238 0%, #F7B242 100%);
```

### Uso recomendado

- **Azul corporativo `#1E22AA`:** CTA primario, links activos, elementos clave.
- **Cyan `#74D1EA`:** apoyo tecnológico, líneas de flujo, fondos suaves.
- **Navy `#071B4D`:** profundidad ejecutiva, footer, bloques de cierre, hero oscuro.
- **Naranja y amarillo:** solo para acentos. No deben dominar la página.
- **Blanco y off-white:** deben ocupar gran parte de la landing para mantener una sensación premium.

---

## 4. Tokens — Tipografía

### Familia principal

**Neo Sans Std** es la tipografía corporativa recomendada para textos de Flag Soluciones. Cuando no esté disponible en web, usar una alternativa cercana y segura.

```css
--font-flag-primary: 'Neo Sans Std', 'Inter', 'Manrope', 'Aptos', system-ui, sans-serif;
--font-flag-display: 'Neo Sans Std', 'Manrope', 'Inter', system-ui, sans-serif;
```

### Importante sobre Baloo 2

**Baloo 2 Medium no debe usarse para textos corporativos ni titulares de la landing.** Su uso queda reservado al logo o a reproducciones oficiales de marca. La landing debe usar Neo Sans Std o fallback moderno.

### Escala tipográfica

| Role | Desktop | Mobile | Line Height | Weight | Tracking |
|---|---:|---:|---:|---:|---:|
| caption | 12px | 12px | 1.40 | 400 | 0 |
| body-sm | 14px | 14px | 1.45 | 400 | 0 |
| body | 16px | 16px | 1.60 | 400 | 0 |
| subheading | 20px | 18px | 1.40 | 400 | -0.01em |
| heading-sm | 24px | 22px | 1.15 | 500 | -0.02em |
| heading | 32px | 28px | 1.10 | 500 | -0.025em |
| heading-lg | 44px | 34px | 1.05 | 500 | -0.035em |
| display | 56px | 42px | 1.00 | 500 | -0.045em |
| display-lg | 68px | 46px | 0.98 | 500 | -0.055em |

### Estilo de titulares

Los titulares deben ser grandes, claros y directos. Se recomienda usar una palabra o frase resaltada con gradiente corporativo, pero sin recurrir a tipografías manuscritas o demasiado decorativas.

Ejemplo:

```text
La confianza que da la experiencia en soluciones SAP
```

Resaltar visualmente: “confianza”, “experiencia” o “soluciones SAP”.

---

## 5. Tokens — Espaciado y layout

**Base unit:** 8px  
**Densidad:** cómoda, premium y ejecutiva.

| Name | Value | Token |
|---|---:|---|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |

### Layout global

```css
--container-max: 1200px;
--container-wide: 1320px;
--section-padding-desktop: 112px;
--section-padding-tablet: 80px;
--section-padding-mobile: 56px;
--section-gap: 72px;
--content-gap: 32px;
```

### Retícula

- Desktop: 12 columnas, max-width 1200px / 1320px.
- Tablet: 8 columnas.
- Mobile: 4 columnas.
- Hero: split 52/48 o 50/50.
- Secciones de servicios: cards de 2 columnas en desktop, 1 columna en mobile.

---

## 6. Border radius y formas

El diseño debe aprovechar bordes suaves, inspirados en el símbolo redondeado de Flag, pero sin volverse infantil.

| Element | Value |
|---|---:|
| Cards pequeñas | 16px |
| Cards principales | 24px |
| Bloques hero / visuales | 32px |
| Badges | 999px |
| Botones | 999px |
| Inputs | 12px |
| Secciones visuales grandes | 40px |

```css
--radius-card: 16px;
--radius-card-lg: 24px;
--radius-visual: 32px;
--radius-section: 40px;
--radius-pill: 999px;
--radius-input: 12px;
```

---

## 7. Componentes

### 7.1 Header corporativo

**Rol:** navegación principal.

- Fondo blanco con blur sutil al hacer scroll.
- Logo a la izquierda respetando área de seguridad.
- Navegación horizontal sobria.
- CTA principal: “Agendar conversación”.
- CTA secundario opcional: “Conocer servicios”.

```css
.header {
  background: rgba(255,255,255,0.86);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(217,228,236,0.75);
}
```

**No usar:** navegación muy colorida, sombras fuertes o animaciones excesivas.

---

### 7.2 Primary CTA Button

**Rol:** acción comercial principal.

- Background: `#1E22AA`
- Text: `#FFFFFF`
- Border-radius: `999px`
- Padding: `12px 28px`
- Font: Neo Sans Std / Inter, 500, 15–16px
- Hover: gradiente `#1E22AA → #74D1EA`

Ejemplos de texto:

- “Agendar conversación”
- “Solicitar diagnóstico”
- “Hablar con un consultor”

---

### 7.3 Secondary CTA Button

**Rol:** acción secundaria.

- Fondo transparente.
- Borde `1px solid #D9E4EC` o `#1E22AA`.
- Texto `#1E22AA`.
- Border-radius `999px`.

Ejemplos:

- “Conocer servicios”
- “Ver soluciones”
- “Explorar aceleradores”

---

### 7.4 Informative Badge

**Rol:** destacar categorías, módulos o beneficios.

```css
.badge {
  background: #EAF8FC;
  color: #1E22AA;
  border: 1px solid rgba(116,209,234,0.42);
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 14px;
}
```

Ejemplos:

- “Consultoría SAP”
- “Analítica empresarial”
- “Seguridad SAP”
- “Aceleradores digitales”
- “+25 años de experiencia”

---

### 7.5 Feature Card

**Rol:** tarjeta de servicio, beneficio o producto.

- Fondo blanco.
- Border `1px solid #D9E4EC`.
- Border-radius 24px.
- Padding 32px.
- Sombra muy suave, casi imperceptible.
- Icono lineal o abstracto en azul/cyan.

```css
.feature-card {
  background: #FFFFFF;
  border: 1px solid #D9E4EC;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 16px 40px rgba(7,27,77,0.06);
}
```

---

### 7.6 Metric Card

**Rol:** cifras de confianza.

Usar en hero o franja de confianza.

Ejemplos:

- `+25` años de experiencia
- `+90` especialistas
- `1996` inicio de trayectoria
- `SAP` foco especializado
- `Colombia + Centroamérica` cobertura

Visual:

- Número grande `40px–56px`.
- Texto corto.
- Línea o punto cyan como acento.

---

### 7.7 Product / Dashboard Visual

**Rol:** reemplazar fotografía genérica por visuales tecnológicos.

Debe representar:

- Flujos de datos SAP.
- Tableros de analítica.
- Arquitectura de soporte.
- Alertas de seguridad.
- Automatización RPA.
- Procesos empresariales end-to-end.

Estilo:

- Fondos claros.
- Cards flotantes.
- Líneas finas cyan.
- Nodos, badges y mini gráficos.
- Gradiente muy sutil azul/cyan.
- Bordes 24–32px.

---

## 8. Secciones recomendadas para la landing

### 8.1 Hero

**Objetivo:** explicar en 5 segundos quién es Flag y por qué confiar.

**Título:**  
“La confianza que da la experiencia en soluciones SAP”

**Subtítulo:**  
“Acompañamos la implementación, operación, optimización y evolución de ecosistemas SAP con consultoría especializada, analítica, seguridad y aceleradores digitales.”

**CTAs:**

- Primario: “Agendar conversación”
- Secundario: “Conocer servicios”

**Visual:** dashboard abstracto de ecosistema SAP con cards flotantes:

- Mesa de ayuda SAP
- Analítica
- Seguridad
- Automatización
- Aceleradores

**Notas de diseño:**

- Usar split layout.
- Fondo off-white o navy con gradiente suave.
- No saturar con texto.
- Incluir métricas de confianza en cards flotantes.

---

### 8.2 Franja de confianza

**Título corto:**  
“Experiencia al servicio de organizaciones de alto nivel”

**Contenido:**

- Logos de clientes en monocromo/gris.
- Métricas.
- Sectores atendidos: manufactura, energía, transporte, alimentos, salud.

**Diseño:**

- Fondo blanco.
- Logos en grilla sobria.
- No usar logos a color si rompen la armonía.

---

### 8.3 ¿Por qué Flag Soluciones?

**Título:**  
“Un socio SAP con método, respaldo y cercanía”

Cards:

1. Nuestra gente
2. Relaciones de largo plazo
3. Cumplimiento de la promesa
4. Método de trabajo
5. Soluciones ágiles y efectivas
6. Respaldo y continuidad

**Diseño:** grilla 3x2 desktop / 1 columna mobile.

---

### 8.4 Servicios especializados

**Título:**  
“Servicios especializados para el ecosistema SAP”

Bloques principales:

#### Consultoría SAP
Mesa de ayuda, soporte funcional, proyectos, fábrica de soluciones y formación.

#### Analítica SAP
SAP Analytics Cloud, SAP BusinessObjects, Power BI, SAP BW / S4HANA y modelos de datos.

#### Seguridad SAP
Diagnóstico, gobierno, riesgos, controles, hallazgos y seguridad corporativa.

#### Aceleradores digitales
Flag Master Materials®, RPA, bots conversacionales y automatización de procesos SAP.

**Diseño:** cards grandes, 2x2, con iconografía técnica y CTA “Ver detalle”.

---

### 8.5 Modelo de trabajo

**Título:**  
“Un modelo de acompañamiento de extremo a extremo”

Pasos:

1. Diagnóstico
2. Diseño de solución
3. Implementación
4. Operación y soporte
5. Optimización continua

**Diseño:** línea de proceso horizontal en desktop, vertical en mobile. Usar nodos conectados con línea cyan.

---

### 8.6 Aceleradores y soluciones propias

**Título:**  
“Aceleradores que convierten experiencia en eficiencia”

Cards:

- Flag Master Materials®
- Flag Risk Alerts®
- Flag Security Assistant®
- RPA sobre procesos SAP
- Bots conversacionales

**Objetivo:** mostrar que Flag no solo presta servicios, sino que capitaliza conocimiento en herramientas y métodos propios.

---

### 8.7 Trayectoria

**Título:**  
“Desde 1996, acompañando la evolución de procesos empresariales”

Usar timeline:

- 1996: inicio de operaciones.
- 2015: reconocimientos de aliados y proveedores.
- 2018: reconocimiento en Clúster TI 4.0 / modelo EOLO.
- Hoy: consultoría SAP, analítica, seguridad y aceleradores digitales.

**Diseño:** editorial, con fondo azul suave o blanco. No hacerlo demasiado largo.

---

### 8.8 Reconocimientos

**Título:**  
“Reconocimientos que respaldan nuestra trayectoria”

Cards sobrias:

- Grupo Nutresa — Proveedor Ejemplar.
- ISAGEN — compromiso con desarrollo de proveedores.
- Clúster TI 4.0 / Intersoftware — modelo EOLO e I+D+i.

**Diseño:** institucional, con pequeños sellos o badges. Evitar apariencia de premio exagerado.

---

### 8.9 CTA final

**Título:**  
“Conversemos sobre la evolución de su ecosistema SAP”

**Texto:**  
“Identifiquemos oportunidades de mejora, automatización, analítica y seguridad para generar valor real en su organización.”

**Fondo:** gradiente dark `#071B4D → #1E22AA` con acentos cyan.

**Botones:**

- “Agendar conversación”
- “Solicitar diagnóstico”

---

### 8.10 Footer

**Fondo:** `#071B4D`  
**Texto:** blanco / cyan suave.

Debe incluir:

- Logo Flag Soluciones.
- Tagline: “La Confianza que da la experiencia”.
- Servicios.
- Nosotros.
- Clientes.
- Certificaciones.
- PQRSF.
- Contacto.
- Redes sociales.
- Aviso de privacidad / Protección de datos.

---

## 9. Imagery / Dirección visual

### Usar

- Dashboards abstractos.
- Visuales de flujos empresariales.
- Diagramas de datos.
- Nodos conectados.
- Cards flotantes.
- Screens tipo producto SaaS.
- Fotografía corporativa muy limpia, si existe material propio.
- Fondos claros con gradientes sutiles.

### Evitar

- Stock photos genéricas de gente sonriendo sin contexto.
- Imágenes oscuras demasiado tecnológicas tipo hacker.
- Exceso de 3D.
- Ilustraciones infantiles.
- Íconos multicolor sin coherencia.
- Usar logos de SAP como elemento dominante.

---

## 10. Do’s and Don’ts

### Do

- Usar `#1E22AA` como color principal de interacción.
- Usar `#74D1EA` para acentos tecnológicos y gradientes.
- Mantener mucho espacio en blanco.
- Usar cards con bordes suaves y sombras sutiles.
- Priorizar mensajes claros de negocio.
- Mostrar servicios SAP como capacidades estratégicas.
- Usar métricas, trayectoria y reconocimientos como prueba de confianza.
- Respetar el logo y su área de seguridad.
- Usar Neo Sans Std o fallback profesional.

### Don’t

- No usar Baloo 2 para titulares o textos de landing.
- No cambiar los colores del logo.
- No usar naranja/amarillo como colores dominantes.
- No saturar el hero con demasiados textos.
- No usar claims vacíos como “innovamos el futuro”.
- No inventar certificaciones o alianzas.
- No hacer una estética demasiado startup o juvenil.
- No usar sombras duras.
- No mezclar muchas familias tipográficas.

---

## 11. Prompt adaptado para Google Stitch

```text
Crea un mockup web de alta fidelidad para la nueva landing corporativa de Flag Soluciones S.A.S., una empresa colombiana de consultoría especializada en soluciones SAP, con más de 25 años de experiencia y operación en Colombia y Centroamérica.

El estilo debe estar inspirado en una landing SaaS corporativa moderna: mucho espacio en blanco, composición amplia, cards limpias, dashboards abstractos, visualizaciones de datos y botones tipo pill. Sin embargo, debe adaptarse completamente a la identidad de Flag Soluciones: seria, consultiva, ejecutiva y orientada a servicios SAP.

Identidad visual obligatoria:
- Azul principal Flag: #1E22AA.
- Cyan corporativo: #74D1EA.
- Navy profundo para footer y bloques premium: #071B4D.
- Acentos secundarios muy controlados: #FA6238 y #F7B242.
- Fondo principal: #F8FAFC y blanco.
- Texto principal: #101828.
- Texto secundario: #475467.
- Usar gradientes suaves entre #1E22AA y #74D1EA.
- No usar los colores originales de Officevibe; reemplazarlos por la paleta de Flag.
- Tipografía estilo Neo Sans Std. Si no está disponible, usar Inter, Manrope o una sans serif moderna.
- No usar tipografías manuscritas ni decorativas.
- No modificar ni redibujar el logo. Usar placeholder “Logo Flag Soluciones” respetando área de seguridad.

Look & feel:
- Corporativo premium.
- Consultoría SAP de alto nivel.
- Sobrio, moderno, limpio y confiable.
- No debe parecer startup genérica ni landing experimental.
- Debe ser suficientemente elegante para presentarse a directivas.

Estructura desktop 1440px y mobile 390px:

1. Header sticky
Logo a la izquierda, menú: Inicio, Servicios, Nosotros, Clientes, Certificaciones, Trabaje con nosotros, Contacto. CTA principal: “Agendar conversación”.

2. Hero principal
Título: “La confianza que da la experiencia en soluciones SAP”.
Subtítulo: “Acompañamos la implementación, operación, optimización y evolución de ecosistemas SAP con consultoría especializada, analítica, seguridad y aceleradores digitales.”
Botones: “Agendar conversación” y “Conocer servicios”.
Visual derecho: dashboard abstracto con flujos SAP, tarjetas flotantes, métricas y nodos conectados.
Métricas visibles: +25 años, +90 especialistas, Colombia y Centroamérica, SAP end-to-end.

3. Franja de confianza
Texto: “Experiencia al servicio de organizaciones de alto nivel”.
Logos de clientes en monocromo o gris suave.
Sectores: manufactura, energía, transporte, alimentos y salud.

4. ¿Por qué Flag Soluciones?
Cards: Nuestra gente, Relaciones de largo plazo, Cumplimiento de la promesa, Método de trabajo, Soluciones ágiles y efectivas, Respaldo y continuidad.

5. Servicios especializados para el ecosistema SAP
Crear 4 cards grandes:
- Consultoría SAP: mesa de ayuda, soporte funcional, proyectos, fábrica de soluciones, formación.
- Analítica SAP: SAP Analytics Cloud, SAP BusinessObjects, Power BI, SAP BW / S4HANA.
- Seguridad SAP: diagnóstico, gobierno, riesgos, controles y hallazgos.
- Aceleradores digitales: Flag Master Materials®, RPA, bots conversacionales y automatización SAP.

6. Modelo de trabajo
Línea de proceso con 5 pasos: Diagnóstico, Diseño de solución, Implementación, Operación y soporte, Optimización continua.

7. Aceleradores propios
Cards para Flag Master Materials®, Flag Risk Alerts®, Flag Security Assistant®, RPA y bots conversacionales.

8. Trayectoria
Timeline desde 1996 hasta hoy, resaltando experiencia y reconocimientos.

9. Reconocimientos
Cards institucionales para Grupo Nutresa, ISAGEN y Clúster TI 4.0 / modelo EOLO.

10. CTA final
Fondo navy con gradiente azul/cyan.
Título: “Conversemos sobre la evolución de su ecosistema SAP”.
Botones: “Agendar conversación” y “Solicitar diagnóstico”.

11. Footer
Fondo #071B4D, logo, tagline “La Confianza que da la experiencia”, enlaces, contacto y redes.

Diseño de componentes:
- Botones pill 999px, padding 12px 28px.
- Cards 24px de radio, fondo blanco, borde #D9E4EC, sombras muy suaves.
- Badges pill con fondo #EAF8FC y texto #1E22AA.
- Visuales tipo dashboard con líneas cyan, nodos, gráficos y cards flotantes.
- No usar sombras duras.
- No saturar con texto.
- Mantener jerarquía clara y estética ejecutiva.
```

---

## 12. CSS Custom Properties

```css
:root {
  /* Colors */
  --color-flag-blue: #1E22AA;
  --color-flag-cyan: #74D1EA;
  --color-flag-navy: #071B4D;
  --color-flag-orange: #FA6238;
  --color-flag-yellow: #F7B242;
  --color-soft-off-white: #F8FAFC;
  --color-pure-white: #FFFFFF;
  --color-enterprise-ink: #101828;
  --color-slate-gray: #475467;
  --color-cool-border: #D9E4EC;
  --color-light-cyan-surface: #EAF8FC;
  --color-light-blue-surface: #EEF2FF;

  /* Gradients */
  --gradient-flag-primary: linear-gradient(135deg, #1E22AA 0%, #3766D8 45%, #74D1EA 100%);
  --gradient-flag-soft: linear-gradient(135deg, rgba(30,34,170,0.10) 0%, rgba(116,209,234,0.22) 100%);
  --gradient-flag-dark: radial-gradient(circle at 20% 20%, rgba(116,209,234,0.32), transparent 36%), linear-gradient(135deg, #071B4D 0%, #1E22AA 100%);
  --gradient-flag-secondary: linear-gradient(135deg, #FA6238 0%, #F7B242 100%);

  /* Typography */
  --font-flag-primary: 'Neo Sans Std', 'Inter', 'Manrope', 'Aptos', system-ui, sans-serif;
  --font-flag-display: 'Neo Sans Std', 'Manrope', 'Inter', system-ui, sans-serif;

  /* Type Scale */
  --text-caption: 12px;
  --leading-caption: 1.4;
  --text-body-sm: 14px;
  --leading-body-sm: 1.45;
  --text-body: 16px;
  --leading-body: 1.6;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.15;
  --tracking-heading-sm: -0.02em;
  --text-heading: 32px;
  --leading-heading: 1.1;
  --tracking-heading: -0.025em;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.035em;
  --text-display: 56px;
  --leading-display: 1;
  --tracking-display: -0.045em;
  --text-display-lg: 68px;
  --leading-display-lg: 0.98;
  --tracking-display-lg: -0.055em;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;

  /* Layout */
  --container-max: 1200px;
  --container-wide: 1320px;
  --section-padding-desktop: 112px;
  --section-padding-tablet: 80px;
  --section-padding-mobile: 56px;
  --section-gap: 72px;
  --content-gap: 32px;

  /* Radius */
  --radius-card: 16px;
  --radius-card-lg: 24px;
  --radius-visual: 32px;
  --radius-section: 40px;
  --radius-pill: 999px;
  --radius-input: 12px;

  /* Shadows */
  --shadow-soft: 0 16px 40px rgba(7, 27, 77, 0.06);
  --shadow-card-hover: 0 24px 64px rgba(7, 27, 77, 0.10);
}
```

---

## 13. Tailwind v4 Theme

```css
@theme {
  --color-flag-blue: #1E22AA;
  --color-flag-cyan: #74D1EA;
  --color-flag-navy: #071B4D;
  --color-flag-orange: #FA6238;
  --color-flag-yellow: #F7B242;
  --color-soft-off-white: #F8FAFC;
  --color-pure-white: #FFFFFF;
  --color-enterprise-ink: #101828;
  --color-slate-gray: #475467;
  --color-cool-border: #D9E4EC;
  --color-light-cyan-surface: #EAF8FC;
  --color-light-blue-surface: #EEF2FF;

  --font-flag-primary: 'Neo Sans Std', 'Inter', 'Manrope', 'Aptos', system-ui, sans-serif;
  --font-flag-display: 'Neo Sans Std', 'Manrope', 'Inter', system-ui, sans-serif;

  --text-caption: 12px;
  --text-body-sm: 14px;
  --text-body: 16px;
  --text-subheading: 20px;
  --text-heading-sm: 24px;
  --text-heading: 32px;
  --text-heading-lg: 44px;
  --text-display: 56px;
  --text-display-lg: 68px;

  --radius-card: 16px;
  --radius-card-lg: 24px;
  --radius-visual: 32px;
  --radius-section: 40px;
  --radius-pill: 999px;
  --radius-input: 12px;

  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;
}
```
