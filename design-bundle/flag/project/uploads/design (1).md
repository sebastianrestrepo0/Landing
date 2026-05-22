# design.md — Landing corporativa Flag Soluciones

> Documento guía para diseñar e implementar una landing premium, moderna y confiable para **Flag Soluciones S.A.S.**, empresa consultora especializada en soluciones SAP.
>
> Objetivo: crear una landing hermosa, sobria y de alto nivel, digna de una firma con trayectoria, experiencia empresarial y capacidades técnicas consolidadas.

---

## 1. Norte creativo

### Idea central

**Flag Soluciones debe sentirse como una empresa de consultoría SAP madura, confiable, técnica y cercana.**

La landing no debe parecer una página genérica de tecnología. Debe transmitir experiencia real, rigor consultivo, continuidad operativa, acompañamiento humano y capacidad de resolver procesos empresariales complejos.

### Mensaje rector

**La confianza que da la experiencia.**

Este mensaje debe funcionar como hilo conductor visual y narrativo. No es solo un tagline: debe convertirse en la promesa principal de la landing.

### Percepción deseada

Al entrar al sitio, el visitante debe pensar:

- “Esta empresa tiene años de experiencia real con SAP.”
- “Entienden procesos empresariales complejos.”
- “Tienen un equipo sólido, no son una consultora improvisada.”
- “Pueden acompañar implementación, operación y soporte.”
- “Son confiables para empresas grandes y medianas.”

---

## 2. Personalidad visual

### Atributos de marca

| Atributo | Traducción visual |
|---|---|
| Experiencia | Composición amplia, segura, con jerarquías fuertes y espacios generosos. |
| Confianza | Azul profundo, fondos limpios, contraste alto, mensajes directos. |
| Cercanía | Bordes redondeados, lenguaje humano, fotografías de equipo/consultoría. |
| Precisión técnica | Grillas, líneas, módulos, tarjetas de datos, visuales tipo arquitectura SAP. |
| Innovación | Gradientes corporativos, microinteracciones, capas luminosas y movimiento sutil. |
| Servicio | Secciones orientadas a acompañamiento, soporte y continuidad. |

### Estilo general

La landing debe combinar:

1. **Consultoría enterprise**: sobriedad, claridad, estructura.
2. **Tecnología moderna**: gradientes, tarjetas flotantes, visuales de datos.
3. **Calidez humana**: equipo, acompañamiento, servicio, confianza.

Evitar una estética demasiado “startup neon” o demasiado “plantilla corporativa vieja”. El balance correcto es: **corporativo premium + tecnología limpia + trayectoria comprobada**.

---

## 3. Identidad base de Flag Soluciones

### Historia que debe sostener el diseño

Flag Soluciones nace en 1995/1996 y acumula más de 25 años de experiencia en Colombia, con proyectos también en Centro América. Su foco está en soluciones SAP, incluyendo implementación, operación, post implementación, consultoría ABAP, BI, funcional y mesa de ayuda.

### Claim recomendado para la landing

**Soluciones SAP con la confianza que da la experiencia.**

### Subclaim recomendado

**Más de 25 años acompañando a organizaciones en la implementación, operación y evolución de sus procesos SAP.**

### Posicionamiento

Flag Soluciones no vende “software” de forma genérica. Vende **conocimiento acumulado en procesos empresariales, configuración SAP, desarrollo a la medida y soporte operativo**.

---

## 4. Sistema cromático

La marca trabaja con un sistema principal azul/celeste y un sistema secundario naranja/amarillo. La landing debe priorizar el sistema principal para construir confianza, y reservar el sistema secundario para llamados de acción, acentos y momentos de energía.

### Colores principales

| Token | Color | Uso recomendado |
|---|---:|---|
| `--flag-blue` | `#1E22AA` | Color principal de marca, titulares destacados, botones primarios, overlays. |
| `--flag-cyan` | `#74D1EA` | Gradientes, acentos suaves, fondos luminosos, íconos secundarios. |
| `--flag-blue-dark` | `#0B104F` | Fondos premium, hero oscuro, footer, contraste. |
| `--flag-navy` | `#08112F` | Texto sobre fondos claros, secciones oscuras, profundidad. |
| `--flag-sky-soft` | `#EAF9FC` | Fondos claros, bloques suaves, cards de apoyo. |

### Colores secundarios

| Token | Color | Uso recomendado |
|---|---:|---|
| `--flag-orange` | `#FA6238` | CTA secundario, highlights, indicadores de logro, detalles cálidos. |
| `--flag-amber` | `#F7B242` | Acentos de reconocimiento, badges, cifras destacadas. |

### Neutros recomendados

| Token | Color | Uso |
|---|---:|---|
| `--flag-white` | `#FFFFFF` | Fondos, tarjetas, navegación. |
| `--flag-gray-50` | `#F7FAFC` | Fondos alternos. |
| `--flag-gray-100` | `#EEF2F7` | Bordes suaves, separadores. |
| `--flag-gray-500` | `#64748B` | Texto secundario. |
| `--flag-gray-800` | `#1F2937` | Texto principal sobre fondo claro. |
| `--flag-black` | `#050816` | Fondos dramáticos controlados. |

### Gradientes de marca

Usar gradientes como elemento distintivo, no como decoración excesiva.

```css
:root {
  --flag-blue: #1E22AA;
  --flag-cyan: #74D1EA;
  --flag-orange: #FA6238;
  --flag-amber: #F7B242;
  --flag-blue-dark: #0B104F;
  --flag-navy: #08112F;
  --flag-sky-soft: #EAF9FC;
  --flag-white: #FFFFFF;
  --flag-gray-50: #F7FAFC;
  --flag-gray-100: #EEF2F7;
  --flag-gray-500: #64748B;
  --flag-gray-800: #1F2937;

  --flag-gradient-primary: linear-gradient(135deg, #1E22AA 0%, #2E6DCE 55%, #74D1EA 100%);
  --flag-gradient-primary-soft: linear-gradient(135deg, rgba(30,34,170,.10) 0%, rgba(116,209,234,.18) 100%);
  --flag-gradient-warm: linear-gradient(135deg, #FA6238 0%, #F7B242 100%);
  --flag-gradient-dark: radial-gradient(circle at 20% 20%, rgba(116,209,234,.28), transparent 34%), linear-gradient(135deg, #08112F 0%, #0B104F 48%, #1E22AA 100%);
}
```

### Reglas de uso del color

- El **azul profundo** debe dominar la percepción de marca.
- El **celeste** debe dar luz, aire y modernidad.
- El **naranja/ámbar** debe usarse con intención: CTAs, badges, premios y microdetalles.
- No usar todos los colores al mismo tiempo en un mismo bloque.
- No convertir la landing en una página multicolor. Máximo un acento cálido por sección.
- En fondos oscuros, usar texto blanco y acentos celestes.
- En fondos claros, usar texto navy/gray y botones azules.

---

## 5. Tipografía

### Tipografía corporativa ideal

La familia corporativa es **Neo Sans Std**.

Para implementación web, si la fuente está disponible/licenciada, cargarla como fuente principal. Si no, usar una pila visualmente compatible.

```css
:root {
  --font-brand: "Neo Sans Std", "Inter", "Aptos", "Segoe UI", system-ui, sans-serif;
  --font-display: "Neo Sans Std", "Inter", "Aptos Display", "Segoe UI", system-ui, sans-serif;
}
```

### Uso de Baloo 2

**Baloo 2 Medium solo debe asociarse al universo del logo.** No usarla para textos corporativos, titulares, párrafos ni botones. La landing debe respetar una apariencia profesional y homogénea.

### Escala tipográfica recomendada

```css
:root {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.75rem;
  --text-5xl: 4rem;
  --text-hero: clamp(2.8rem, 7vw, 6.25rem);
}
```

### Jerarquía

- H1: grande, sólido, elegante. No todo en mayúsculas.
- H2: claro, consultivo, con una frase fuerte.
- H3: directo, orientado a beneficio.
- Párrafos: máximo 70 caracteres de ancho visual.
- Evitar bloques largos de texto sin respiración.

---

## 6. Logo y marca

### Uso del logo

- El logo debe tener aire suficiente alrededor.
- No redibujar ni reconstruir el logo.
- Usar archivos oficiales en SVG/PNG de alta calidad.
- Mantener proporciones originales.
- Usar versión principal sobre fondos blancos o claros.
- Usar versión en negativo sobre fondos oscuros.
- Usar el símbolo de la bandera como recurso gráfico secundario, no como patrón invasivo.

### Tamaños mínimos digitales

- Logo completo: mínimo visual recomendado de `180px` de ancho en desktop.
- En navbar: entre `140px` y `180px` de ancho.
- En mobile: entre `120px` y `150px` de ancho.
- Símbolo aislado: mínimo `32px`, ideal `40px` en UI.

### Reglas de protección

- No poner texto, botones ni líneas pegadas al logo.
- Mantener un área de reserva equivalente al alto interno de la letra “a” del logo o, en digital, mínimo `24px` alrededor.
- No aplicar sombras exageradas al logo.
- No cambiar los colores del logo fuera de las versiones permitidas.

---

## 7. Recursos visuales de alto impacto

### Motivos gráficos recomendados

La identidad tiene formas redondeadas y una bandera dentro de un símbolo circular. La landing debe usar esta inspiración de forma sofisticada:

- Arcos suaves en esquinas de secciones.
- Tarjetas con bordes amplios.
- Círculos/órbitas sutiles detrás de cifras clave.
- Líneas curvas que conectan servicios SAP.
- Máscaras circulares o rounded para fotografías.
- Ondas discretas que recuerden una bandera, sin parecer literal.

### Fondos

Usar tres tipos de fondo:

1. **Fondo hero oscuro premium**
   - Gradiente azul profundo.
   - Brillos celestes controlados.
   - Grid técnico muy sutil.
   - Elementos flotantes tipo “SAP modules / ABAP / BI / Mesa de Ayuda”.

2. **Fondos claros de confianza**
   - Blanco, gris muy claro o celeste suave.
   - Cards con sombras limpias.
   - Mucho espacio en blanco.

3. **Bloques de contraste**
   - Azul oscuro para CTA, casos y cierre.
   - Texto blanco.
   - Acentos naranja/ámbar para energía.

### Imágenes

Priorizar:

- Personas reales del equipo.
- Consultores en sesiones de trabajo.
- Reuniones con clientes.
- Ambientes empresariales sobrios.
- Visuales abstractos de procesos, datos y arquitectura.

Evitar:

- Fotos de stock demasiado actuadas.
- Personas sonriendo mirando a cámara sin contexto.
- Íconos genéricos de tecnología sin relación con SAP.
- Mockups futuristas desconectados de consultoría empresarial.

---

## 8. Voz y copywriting

### Tono

- Claro.
- Experto.
- Seguro.
- Humano.
- Consultivo.
- Sin exageraciones vacías.

### Palabras clave

Usar de forma natural:

- SAP
- implementación
- operación
- post implementación
- soporte
- procesos empresariales
- desarrollo a la medida
- consultoría funcional
- ABAP
- BI
- mesa de ayuda
- continuidad
- experiencia
- respaldo
- valor
- calidad
- confianza

### Frases guía

- “Acompañamos la evolución de su ecosistema SAP.”
- “Conocimiento acumulado en cientos de procesos empresariales.”
- “Consultoría, operación y soporte con un equipo especializado.”
- “Experiencia técnica al servicio de resultados empresariales.”
- “Más que implementación: continuidad, respaldo y mejora permanente.”

### Evitar

- “Somos los mejores” sin evidencia.
- “Transformación digital” repetido sin contexto.
- “Soluciones innovadoras” como frase genérica.
- Claims imposibles de comprobar.
- Demasiado texto institucional al inicio.

---

## 9. Arquitectura recomendada de la landing

La landing debe contar una historia progresiva:

1. **Confianza inmediata**: quiénes son y por qué importan.
2. **Prueba de trayectoria**: años, equipo, proyectos, sectores.
3. **Oferta clara**: qué servicios SAP prestan.
4. **Diferenciación**: experiencia, equipo, metodología, soporte.
5. **Credibilidad**: reconocimientos y clientes/sectores.
6. **Conversión**: agenda, contacto o diagnóstico.

---

## 10. Estructura sección por sección

## 10.1 Header / navegación

### Objetivo

Dar confianza desde el primer segundo y permitir navegación simple.

### Diseño

- Header sticky con fondo semitransparente al inicio.
- Al hacer scroll: fondo blanco/azul oscuro sólido con sombra ligera.
- Logo a la izquierda.
- Menú centrado o a la derecha.
- CTA destacado: “Agendar diagnóstico” o “Hablemos de SAP”.

### Menú sugerido

- Inicio
- Servicios SAP
- Experiencia
- Reconocimientos
- Nosotros
- Contacto

### CTA principal

**Agendar diagnóstico**

### Detalles visuales

- Altura desktop: `76px`.
- Altura mobile: `64px`.
- Padding horizontal: `clamp(20px, 5vw, 72px)`.
- Botón con azul corporativo y hover con gradiente.

---

## 10.2 Hero principal

### Objetivo

Transmitir inmediatamente experiencia, especialización SAP y confianza.

### Layout

Desktop: dos columnas.

- Izquierda: texto, CTAs, métricas rápidas.
- Derecha: composición visual premium con tarjetas flotantes y/o imagen consultiva.

Mobile: una columna, texto primero, visual después.

### Copy recomendado

**Eyebrow:**
Consultoría SAP · Colombia & Centro América

**H1:**
Soluciones SAP con la confianza que da la experiencia

**Subtítulo:**
Más de 25 años acompañando a organizaciones en la implementación, operación y evolución de SAP Business Suite, con un equipo especializado en consultoría funcional, ABAP, BI y mesa de ayuda.

**CTA primario:**
Agendar una consultoría

**CTA secundario:**
Conocer servicios

### Métricas hero

- `+25 años` en el mercado
- `90 personas` en equipo consultivo y soporte
- `SAP` implementación, operación y post implementación
- `Colombia + Centro América` experiencia regional

### Visual hero

Crear una composición con:

- Fondo azul oscuro con gradiente corporativo.
- Tarjetas flotantes tipo dashboard:
  - “Implementación SAP”
  - “Soporte funcional”
  - “ABAP / BI”
  - “Mesa de ayuda”
- Una línea curva o flujo que conecte las tarjetas.
- Un símbolo sutil de bandera/círculo en gran escala con baja opacidad.

### Animación

- Entrada suave del H1: `opacity + translateY`.
- Tarjetas flotantes con movimiento lento `float`.
- Brillo radial muy sutil detrás del visual.

---

## 10.3 Barra de confianza / sectores

### Objetivo

Mostrar que Flag trabaja con organizaciones de múltiples sectores.

### Copy

**Experiencia en procesos empresariales de múltiples sectores**

Sectores:

- Manufactura
- Energía
- Transporte
- Alimentos
- Salud
- Servicios

### Diseño

- Barra clara inmediatamente después del hero.
- Chips o badges con íconos lineales.
- Diseño sobrio, no infantil.

---

## 10.4 Sección “Nuestra compañía”

### Objetivo

Contar historia sin volver la landing pesada.

### Layout

Dos columnas:

- Izquierda: texto institucional curado.
- Derecha: línea de tiempo o bloque visual de trayectoria.

### Copy base

Desde nuestra creación en 1996, en Flag Soluciones hemos perfeccionado el acompañamiento a organizaciones que implementan, operan y evolucionan sus sistemas SAP. Nuestra experiencia en procesos empresariales, configuración y desarrollos a la medida nos permite entregar soluciones con criterio técnico, continuidad y respaldo.

### Timeline sugerida

- **1995/1996** — Inicio de Flag Soluciones.
- **+25 años** — Experiencia acumulada en soluciones SAP.
- **+90 especialistas** — Equipo en ABAP, BI, funcional y mesa de ayuda.
- **Colombia y Centro América** — Proyectos y acompañamiento regional.

### Diseño

- Fondo blanco.
- Tarjeta grande con borde redondeado y sombra suave.
- Timeline vertical con puntos en gradiente azul-celeste.
- Incluir una frase destacada: “Conocimiento acumulado en cientos de procesos empresariales.”

---

## 10.5 Sección de servicios SAP

### Objetivo

Explicar claramente qué ofrece Flag.

### Título

**Servicios para todo el ciclo de vida SAP**

### Subtítulo

Acompañamos a su organización desde la implementación hasta la operación, soporte y mejora continua del ecosistema SAP.

### Cards de servicios

#### 1. Implementación SAP

**Texto:**
Acompañamiento en procesos de implementación, configuración y estabilización de soluciones SAP alineadas con las necesidades del negocio.

#### 2. Operación y soporte

**Texto:**
Soporte especializado para asegurar continuidad operativa, atención funcional y resolución de incidencias.

#### 3. Post implementación

**Texto:**
Evolución, ajuste y optimización de procesos después de la salida en vivo, con foco en adopción y mejora continua.

#### 4. Desarrollo ABAP

**Texto:**
Desarrollos a la medida, integraciones y ajustes técnicos para extender las capacidades del ecosistema SAP.

#### 5. BI y analítica

**Texto:**
Soluciones de información, reportes y tableros para convertir datos empresariales en decisiones.

#### 6. Mesa de ayuda SAP

**Texto:**
Equipo de atención y soporte estructurado para usuarios, incidencias, requerimientos y continuidad del servicio.

### Diseño de cards

- Grid 3x2 en desktop.
- 1 columna en mobile.
- Ícono lineal en contenedor circular con gradiente suave.
- Hover: elevación ligera, borde azul/celeste, pequeño movimiento vertical.
- No saturar con textos largos.

---

## 10.6 Sección “Por qué Flag”

### Objetivo

Diferenciar la empresa sin sonar genérica.

### Título

**Experiencia técnica, respaldo humano y conocimiento empresarial**

### Bloques

#### Conocimiento acumulado

Capitalizamos aprendizajes de cientos de procesos, configuraciones y desarrollos a la medida.

#### Equipo especializado

Contamos con un equipo cuidadosamente seleccionado y entrenado en consultoría ABAP, BI, funcional y mesa de ayuda.

#### Continuidad operativa

Acompañamos la operación y post implementación para que SAP siga generando valor después del proyecto.

#### Calidad y respaldo

Trabajamos con enfoque en integridad, servicio y cumplimiento.

### Diseño

- Fondo azul oscuro.
- Cards translúcidas tipo glassmorphism moderado.
- Acentos celestes.
- Una línea cálida naranja solo para resaltar el título o un indicador.

---

## 10.7 Sección metodología

### Objetivo

Mostrar orden, madurez y proceso.

### Título

**Acompañamiento estructurado para cada etapa**

### Pasos

1. **Entendimiento del negocio**
   - Levantamiento de necesidades, procesos y prioridades.
2. **Diseño de solución**
   - Definición funcional/técnica, alcance y ruta de implementación.
3. **Configuración y desarrollo**
   - Ajustes SAP, desarrollos ABAP, BI e integraciones necesarias.
4. **Estabilización**
   - Pruebas, soporte, capacitación y salida controlada.
5. **Operación y mejora continua**
   - Mesa de ayuda, soporte funcional y evolución del sistema.

### Diseño

- Timeline horizontal desktop.
- Accordion vertical en mobile.
- Conectores en gradiente azul-celeste.
- Cada paso debe tener número grande y título breve.

---

## 10.8 Sección reconocimientos

### Objetivo

Aportar prueba social y credibilidad empresarial.

### Título

**Reconocimientos que respaldan nuestra trayectoria**

### Reconocimientos a mostrar

- Premio Proveedor Ejemplar de Grupo Nutresa, categoría Servicios, tipo PYME.
- Nominación por segundo año consecutivo como proveedor ejemplar por Grupo Nutresa.
- Reconocimiento de ISAGEN por desempeño en Desarrollo de Proveedores, categoría “Compromiso con su desarrollo”.
- Reconocimiento en el proyecto Clúster TI 4.0 por Intersoftware, Colciencias y MinTIC como empresa pionera en adaptación del modelo EOLO e implementación de procesos I+D+i.

### Diseño

- Fondo claro con tarjetas tipo “award”.
- Usar `--flag-amber` como acento para premios.
- Incluir año grande en la esquina de cada tarjeta.
- No usar exceso de logos si no hay permisos o buena calidad gráfica.

### Card example

```html
<article class="flag-award-card">
  <span class="flag-award-card__year">2015</span>
  <h3>Proveedor Ejemplar — Grupo Nutresa</h3>
  <p>Reconocimiento en la categoría Servicios, tipo PYME.</p>
</article>
```

---

## 10.9 Sección valores

### Objetivo

Humanizar la marca y mostrar cultura de servicio.

### Título

**Valores que guían nuestro acompañamiento**

### Valores

#### Respeto

Aceptamos que cada ser humano observa desde una perspectiva diferente, lo que nos permite construir verdades colectivas e interacciones efectivas.

#### Compromiso

Trabajamos orientados al cumplimiento de metas y resultados alineados con la estrategia.

#### Vocación de servicio

Disfrutamos lo que hacemos y acompañamos a nuestros clientes con disposición y responsabilidad.

#### Empoderamiento y aprendizaje

Promovemos nuevas ideas, cambio de paradigmas y creación de valor superior.

### Diseño

- Cards con íconos abstractos.
- Fondo `--flag-sky-soft`.
- Bordes redondeados amplios.
- Microcopy humano.

---

## 10.10 Sección equipo

### Objetivo

Mostrar que detrás del servicio hay personas, metodología y entrenamiento.

### Título

**Un equipo preparado para sostener su operación SAP**

### Copy

Nuestro equipo humano está cuidadosamente seleccionado y entrenado para brindar consultoría funcional, ABAP, BI y mesa de ayuda, combinando experiencia técnica con vocación de servicio.

### Diseño

- Imagen real del equipo o collage editorial.
- Métrica destacada: “alrededor de 90 personas”.
- Tags: “ABAP”, “BI”, “Funcional”, “Mesa de ayuda”, “Soporte”, “Operación”.

---

## 10.11 Sección visión / futuro

### Nota importante

La visión original menciona “En el 2022 ser un referente...”. Como la fecha ya pasó, no debe usarse literalmente como visión vigente en una landing actual. Se recomienda tratarla como base estratégica y actualizar el mensaje.

### Versión recomendada

**Seguimos consolidándonos como un referente nacional y regional en servicios y soluciones del ecosistema SAP.**

### Diseño

- Bloque corto, inspiracional, no demasiado largo.
- Fondo con gradiente corporativo.
- CTA secundario hacia contacto.

---

## 10.12 CTA final

### Objetivo

Convertir sin presión excesiva.

### Título

**Hablemos de cómo fortalecer su operación SAP**

### Subtítulo

Cuéntenos en qué etapa se encuentra su organización y nuestro equipo le ayudará a identificar la mejor ruta de acompañamiento.

### Botones

- Primario: **Agendar diagnóstico**
- Secundario: **Escribir a Flag Soluciones**

### Diseño

- Fondo azul oscuro con gradiente.
- Tarjeta central grande.
- Brillo celeste suave.
- Acento cálido en botón o línea superior.

---

## 10.13 Footer

### Elementos

- Logo en versión clara.
- Tagline: “La confianza que da la experiencia”.
- Links principales.
- Datos de contacto.
- Redes sociales.
- Nota legal.

### Diseño

- Fondo `--flag-navy`.
- Texto blanco y gris claro.
- Acentos celestes.
- No saturar.

---

## 11. Componentes UI

## 11.1 Botones

### Botón primario

```css
.flag-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  min-height: 48px;
  padding: 0 1.35rem;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.18);
  background: var(--flag-gradient-primary);
  color: #fff;
  font-weight: 700;
  letter-spacing: -0.01em;
  box-shadow: 0 18px 40px rgba(30, 34, 170, .24);
  transition: transform .22s ease, box-shadow .22s ease, filter .22s ease;
}

.flag-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 54px rgba(30, 34, 170, .34);
  filter: saturate(1.08);
}
```

### Botón secundario

```css
.flag-btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 1.25rem;
  border-radius: 999px;
  border: 1px solid rgba(30, 34, 170, .18);
  background: rgba(255,255,255,.84);
  color: var(--flag-blue);
  font-weight: 700;
  transition: background .22s ease, transform .22s ease, border-color .22s ease;
}

.flag-btn-secondary:hover {
  background: #fff;
  border-color: rgba(30, 34, 170, .34);
  transform: translateY(-2px);
}
```

---

## 11.2 Cards

```css
.flag-card {
  border: 1px solid rgba(8, 17, 47, .08);
  border-radius: 28px;
  background: rgba(255,255,255,.92);
  box-shadow: 0 22px 70px rgba(8, 17, 47, .08);
  padding: clamp(1.25rem, 2vw, 2rem);
  transition: transform .24s ease, box-shadow .24s ease, border-color .24s ease;
}

.flag-card:hover {
  transform: translateY(-4px);
  border-color: rgba(116, 209, 234, .55);
  box-shadow: 0 28px 90px rgba(8, 17, 47, .13);
}
```

---

## 11.3 Badges

```css
.flag-badge {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: .45rem .75rem;
  border-radius: 999px;
  background: rgba(116, 209, 234, .14);
  color: var(--flag-blue);
  border: 1px solid rgba(116, 209, 234, .35);
  font-size: .875rem;
  font-weight: 700;
}
```

---

## 11.4 Cifras destacadas

```css
.flag-metric {
  display: grid;
  gap: .3rem;
}

.flag-metric__value {
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: .95;
  font-weight: 900;
  letter-spacing: -0.06em;
  color: var(--flag-blue);
}

.flag-metric__label {
  color: var(--flag-gray-500);
  font-weight: 600;
}
```

---

## 12. Dirección de layout

### Contenedor

```css
.flag-container {
  width: min(100% - 32px, 1180px);
  margin-inline: auto;
}
```

### Espaciado de secciones

```css
.flag-section {
  padding-block: clamp(72px, 10vw, 132px);
}

.flag-section--compact {
  padding-block: clamp(48px, 7vw, 88px);
}
```

### Grilla principal

```css
.flag-grid-2 {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr);
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
}

@media (max-width: 900px) {
  .flag-grid-2 {
    grid-template-columns: 1fr;
  }
}
```

---

## 13. Microinteracciones

Las animaciones deben ser elegantes y discretas.

### Permitidas

- Fade up al entrar en viewport.
- Hover suave en cards.
- Movimiento flotante lento en visuales del hero.
- Brillos radiales de baja opacidad.
- Líneas que se dibujan en timeline.

### Evitar

- Animaciones constantes que distraigan.
- Rebotes exagerados.
- Parallax agresivo.
- Demasiados elementos moviéndose al mismo tiempo.

### CSS base

```css
@keyframes flagFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.flag-float {
  animation: flagFloat 6s ease-in-out infinite;
}
```

Respetar `prefers-reduced-motion`.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 14. SEO y contenido

### Title SEO sugerido

**Flag Soluciones | Consultoría SAP en Colombia**

### Meta description sugerida

**Más de 25 años desarrollando, operando y manteniendo soluciones SAP para empresas en Colombia y Centro América. Consultoría funcional, ABAP, BI y mesa de ayuda.**

### H1 único

**Soluciones SAP con la confianza que da la experiencia**

### Keywords naturales

- consultoría SAP Colombia
- soporte SAP
- implementación SAP
- ABAP Colombia
- BI SAP
- mesa de ayuda SAP
- SAP Business Suite
- operación SAP

---

## 15. Accesibilidad

### Reglas

- Contraste AA mínimo en textos.
- Botones con foco visible.
- No depender solo del color para comunicar estados.
- Imágenes con `alt` descriptivo.
- Formularios con labels reales.
- Navegación por teclado.
- Tamaño mínimo de texto: `16px` en párrafos.

### Focus state

```css
:focus-visible {
  outline: 3px solid rgba(116, 209, 234, .85);
  outline-offset: 4px;
}
```

---

## 16. Responsive

### Desktop

- Hero de alto impacto.
- Grillas 2 y 3 columnas.
- Visuales flotantes.
- Espaciado generoso.

### Tablet

- Reducir visuales flotantes.
- Mantener cards 2 columnas cuando sea posible.
- Header limpio.

### Mobile

- Priorizar claridad.
- Menú hamburguesa simple.
- Hero en una columna.
- CTAs full-width o semi-full-width.
- Cards una columna.
- Timeline vertical.
- No abusar de animaciones.

---

## 17. Formulario de contacto

### Campos recomendados

- Nombre
- Empresa
- Cargo
- Correo corporativo
- Teléfono
- Servicio de interés
- Mensaje

### Opciones de servicio

- Implementación SAP
- Soporte / mesa de ayuda SAP
- Consultoría funcional
- Desarrollo ABAP
- BI / analítica
- Post implementación
- Otro

### Diseño

- Formulario dentro de una tarjeta blanca o glass sobre fondo azul.
- Labels visibles.
- CTA: “Enviar solicitud”.
- Mensaje de confianza: “Nuestro equipo revisará su solicitud y le contactará para entender el contexto de su operación SAP.”

---

## 18. Do / Don’t

### Do

- Usar mucho espacio en blanco.
- Construir confianza desde las cifras y reconocimientos.
- Hacer que SAP sea el foco claro.
- Mantener el tono técnico pero entendible.
- Diseñar con estética enterprise moderna.
- Usar gradientes corporativos de forma controlada.
- Respetar logo, color y tipografía.

### Don’t

- No usar colores por fuera del sistema sin justificación.
- No redibujar el logo.
- No usar Baloo 2 para textos generales.
- No llenar la landing de párrafos institucionales largos.
- No convertir los reconocimientos en una sección aburrida.
- No usar íconos infantiles o genéricos.
- No usar visión “2022” como si fuera actual sin validarla.

---

## 19. Wireframe textual recomendado

```text
[Header]
Logo | Inicio | Servicios SAP | Experiencia | Reconocimientos | Nosotros | Contacto | CTA

[Hero]
Eyebrow: Consultoría SAP · Colombia & Centro América
H1: Soluciones SAP con la confianza que da la experiencia
Subcopy
CTA primario + CTA secundario
Métricas: +25 años | 90 especialistas | SAP end-to-end | Colombia + Centro América
Visual: tarjetas SAP flotantes + gradiente azul

[Trust bar]
Sectores atendidos: Manufactura | Energía | Transporte | Alimentos | Salud | Servicios

[Nuestra compañía]
Historia curada + timeline de trayectoria

[Servicios]
6 cards: Implementación | Operación | Post implementación | ABAP | BI | Mesa de ayuda

[Por qué Flag]
4 diferenciales: conocimiento | equipo | continuidad | respaldo

[Metodología]
5 pasos de acompañamiento

[Reconocimientos]
Cards con premios y nominaciones

[Equipo]
Bloque humano + capacidades técnicas

[Valores]
Respeto | Compromiso | Vocación de servicio | Empoderamiento y aprendizaje

[CTA final]
Hablemos de cómo fortalecer su operación SAP
Formulario o botón de agenda

[Footer]
Logo + tagline + contacto + redes + legal
```

---

## 20. Copy final listo para usar

### Hero

**Soluciones SAP con la confianza que da la experiencia**

Más de 25 años acompañando a organizaciones en la implementación, operación y evolución de SAP Business Suite, con un equipo especializado en consultoría funcional, ABAP, BI y mesa de ayuda.

**Agendar una consultoría**  
**Conocer servicios**

### Nuestra compañía

En Flag Soluciones hemos capitalizado el conocimiento de cientos de procesos empresariales, configuraciones y desarrollos a la medida para enriquecer la experiencia de servicio que ofrecemos. Desde nuestra creación, acompañamos a organizaciones en la implementación, operación y post implementación de soluciones SAP.

### Servicios

Acompañamos todo el ciclo de vida SAP: desde la definición funcional y técnica hasta la operación, soporte, analítica y mejora continua.

### Por qué Flag

Combinamos experiencia, equipo humano especializado y conocimiento profundo del ecosistema SAP para entregar soluciones que generan valor real a nuestros clientes.

### Reconocimientos

Nuestra trayectoria ha sido reconocida por organizaciones como Grupo Nutresa, ISAGEN, Intersoftware, Colciencias y MinTIC, destacando nuestro desempeño, compromiso y adaptación de procesos de innovación.

### CTA final

**Conversemos sobre los retos SAP de su organización**

Nuestro equipo puede ayudarle a identificar oportunidades de mejora, continuidad operativa y evolución tecnológica dentro de su ecosistema SAP.

---

## 21. Criterios de aceptación visual

La landing estará bien lograda si cumple lo siguiente:

- En los primeros 5 segundos se entiende que Flag es especialista en SAP.
- Se percibe una empresa madura, confiable y moderna.
- El hero se siente premium y memorable.
- Los servicios son claros sin leer demasiado.
- Los reconocimientos aportan credibilidad real.
- El uso del color respeta la marca y no satura.
- El diseño funciona bien en mobile.
- El CTA está visible y se repite estratégicamente.
- La página no parece una plantilla genérica.

---

## 22. Checklist de assets necesarios

- Logo principal en SVG.
- Logo blanco/negativo en SVG.
- Símbolo aislado en SVG.
- Fotografías reales del equipo o sesiones de consultoría.
- Logos de clientes o sectores, si se pueden publicar.
- Evidencia gráfica de reconocimientos, si se puede publicar.
- Íconos lineales para servicios.
- Información de contacto actualizada.
- Visión corporativa actualizada, si aplica.

---

## 23. Nota estratégica

La landing debe apoyarse en el manual de marca, pero no limitarse a replicarlo. El manual define la identidad; la landing debe traducirla a una experiencia digital actual: más aire, mejor narrativa, secciones de prueba, interacción, estructura comercial y una estética enterprise premium.

La clave es no vender solo “consultoría SAP”, sino **confianza acumulada, continuidad operativa y conocimiento empresarial aplicado al ecosistema SAP**.
