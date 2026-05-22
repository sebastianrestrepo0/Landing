// Datos demo para el mockup de Funciones por Cargo

const CARGOS_DATA = [
  {
    id: 'c-1',
    nombre: 'Consultor ABAP',
    area: 'Tecnología',
    icono: 'fa-code',
    funciones: [
      { id: 'f-1', texto: 'Desarrollar y mantener programas ABAP de acuerdo con las especificaciones funcionales del cliente.', activa: true },
      { id: 'f-2', texto: 'Realizar pruebas unitarias y de integración antes de cada entrega.', activa: true },
      { id: 'f-3', texto: 'Documentar técnicamente los desarrollos y mantener actualizada la base de conocimiento.', activa: true },
      { id: 'f-4', texto: 'Apoyar al equipo funcional en la resolución de incidencias críticas.', activa: false },
    ],
  },
  {
    id: 'c-2',
    nombre: 'Consultor SAP MM',
    area: 'Tecnología',
    icono: 'fa-boxes-stacked',
    funciones: [
      { id: 'f-10', texto: 'Levantar y documentar requerimientos funcionales del módulo MM.', activa: true },
      { id: 'f-11', texto: 'Configurar maestros de materiales, proveedores y centros logísticos.', activa: true },
      { id: 'f-12', texto: 'Ejecutar pruebas funcionales y capacitar al usuario final.', activa: true },
    ],
  },
  {
    id: 'c-3',
    nombre: 'Project Manager',
    area: 'Gestión',
    icono: 'fa-diagram-project',
    funciones: [
      { id: 'f-20', texto: 'Planificar y monitorear cronogramas, alcance y presupuesto del proyecto.', activa: true },
      { id: 'f-21', texto: 'Gestionar la comunicación con stakeholders y elaborar reportes ejecutivos semanales.', activa: true },
      { id: 'f-22', texto: 'Identificar, evaluar y mitigar riesgos del proyecto.', activa: true },
      { id: 'f-23', texto: 'Coordinar al equipo multidisciplinario y resolver bloqueos operativos.', activa: true },
      { id: 'f-24', texto: 'Asegurar el cumplimiento de los entregables según los criterios de aceptación.', activa: true },
    ],
  },
  {
    id: 'c-4',
    nombre: 'Analista de Calidad',
    area: 'Calidad',
    icono: 'fa-clipboard-check',
    funciones: [
      { id: 'f-30', texto: 'Diseñar y ejecutar planes de prueba funcionales y de regresión.', activa: true },
      { id: 'f-31', texto: 'Reportar defectos en herramientas de seguimiento y validar correcciones.', activa: true },
    ],
  },
  {
    id: 'c-5',
    nombre: 'Diseñador UX/UI',
    area: 'Producto',
    icono: 'fa-palette',
    funciones: [],
  },
  {
    id: 'c-6',
    nombre: 'Contador General',
    area: 'Administración',
    icono: 'fa-calculator',
    funciones: [
      { id: 'f-40', texto: 'Registrar y conciliar las operaciones contables mensuales de la empresa.', activa: true },
      { id: 'f-41', texto: 'Preparar estados financieros y reportes para la gerencia.', activa: true },
      { id: 'f-42', texto: 'Atender requerimientos de auditoría externa e interna.', activa: false },
    ],
  },
  {
    id: 'c-7',
    nombre: 'Asistente Administrativo',
    area: 'Administración',
    icono: 'fa-folder-open',
    funciones: [
      { id: 'f-50', texto: 'Gestionar agenda, correspondencia y documentación de la gerencia.', activa: true },
    ],
  },
];

window.CARGOS_DATA = CARGOS_DATA;
