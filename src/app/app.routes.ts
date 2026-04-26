import { Routes } from '@angular/router';
import { Layout } from './compartido/componentes/layout/layout';

// Helper para cargar el componente placeholder
const placeholder = () => import('./paginas/en-construccion/en-construccion').then(c => c.EnConstruccion);

// 🗺️ Configuración de Rutas - IEM Santa Teresita
export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },

      // ===== INICIO =====
      { 
        path: 'inicio', 
        loadComponent: () => import('./paginas/inicio/inicio').then(c => c.Inicio)
      },

      // ===== INSTITUCIONAL =====
      { 
        path: 'institucional/resena-historica', 
        loadComponent: placeholder,
        data: { titulo: 'Reseña Histórica', seccion: 'Institucional', icono: 'fas fa-landmark', descripcion: 'Historia y trayectoria de nuestra institución educativa.' }
      },
      { 
        path: 'institucional/mision-vision', 
        loadComponent: placeholder,
        data: { titulo: 'Misión / Visión', seccion: 'Institucional', icono: 'fas fa-bullseye', descripcion: 'Nuestra razón de ser y hacia dónde nos dirigimos como institución.' }
      },
      { 
        path: 'institucional/simbolos', 
        loadComponent: placeholder,
        data: { titulo: 'Símbolos', seccion: 'Institucional', icono: 'fas fa-shield-alt', descripcion: 'Escudo, bandera, himno y emblemas institucionales.' }
      },
      { 
        path: 'institucional/patrona', 
        loadComponent: placeholder,
        data: { titulo: 'Santa Teresita (Patrona)', seccion: 'Institucional', icono: 'fas fa-church', descripcion: 'Vida y legado de Santa Teresita, patrona de nuestra institución.' }
      },
      { 
        path: 'institucional/uniforme', 
        loadComponent: placeholder,
        data: { titulo: 'Uniforme', seccion: 'Institucional', icono: 'fas fa-tshirt', descripcion: 'Guía oficial del uniforme institucional y de educación física.' }
      },
      { 
        path: 'institucional/pacto-convivencia', 
        loadComponent: placeholder,
        data: { titulo: 'Pacto de Convivencia', seccion: 'Institucional', icono: 'fas fa-handshake', descripcion: 'Manual de convivencia y normas institucionales.' }
      },
      { 
        path: 'institucional/estructura-organica', 
        loadComponent: placeholder,
        data: { titulo: 'Estructura Orgánica', seccion: 'Institucional', icono: 'fas fa-sitemap', descripcion: 'Organigrama y estructura administrativa de la institución.' }
      },
      { 
        path: 'institucional/sedes/sede-1', 
        loadComponent: placeholder,
        data: { titulo: 'Sede 1', seccion: 'Institucional › Sedes', icono: 'fas fa-school', descripcion: 'Información sobre la Sede 1 de la institución.' }
      },
      { 
        path: 'institucional/sedes/sede-2', 
        loadComponent: placeholder,
        data: { titulo: 'Sede 2', seccion: 'Institucional › Sedes', icono: 'fas fa-school', descripcion: 'Información sobre la Sede 2 de la institución.' }
      },
      { 
        path: 'institucional/sedes/sede-3', 
        loadComponent: placeholder,
        data: { titulo: 'Sede 3', seccion: 'Institucional › Sedes', icono: 'fas fa-school', descripcion: 'Información sobre la Sede 3 de la institución.' }
      },
      { 
        path: 'institucional/sedes/sede-4', 
        loadComponent: placeholder,
        data: { titulo: 'Sede 4', seccion: 'Institucional › Sedes', icono: 'fas fa-school', descripcion: 'Información sobre la Sede 4 de la institución.' }
      },

      // ===== ACADÉMICO =====
      { 
        path: 'academico/horarios/cursos', 
        loadComponent: placeholder,
        data: { titulo: 'Horarios de Cursos', seccion: 'Académico › Horarios', icono: 'fas fa-calendar-alt', descripcion: 'Horarios por curso y grado académico.' }
      },
      { 
        path: 'academico/horarios/docentes', 
        loadComponent: placeholder,
        data: { titulo: 'Horarios de Docentes', seccion: 'Académico › Horarios', icono: 'fas fa-chalkboard-teacher', descripcion: 'Distribución horaria del equipo docente.' }
      },
      { 
        path: 'academico/horarios/jornada', 
        loadComponent: placeholder,
        data: { titulo: 'Jornada Escolar', seccion: 'Académico › Horarios', icono: 'fas fa-clock', descripcion: 'Horarios de jornada escolar y actividades extracurriculares.' }
      },
      { 
        path: 'academico/proyectos', 
        loadComponent: placeholder,
        data: { titulo: 'Proyectos', seccion: 'Académico', icono: 'fas fa-project-diagram', descripcion: 'Proyectos pedagógicos y transversales de la institución.' }
      },
      { 
        path: 'academico/oferta-academica', 
        loadComponent: placeholder,
        data: { titulo: 'Oferta Académica', seccion: 'Académico', icono: 'fas fa-book-open', descripcion: 'Niveles educativos, modalidades y programas ofrecidos.' }
      },

      // ===== RECURSOS EDUCATIVOS =====
      { 
        path: 'recursos/software-educativo', 
        loadComponent: placeholder,
        data: { titulo: 'Software Educativo', seccion: 'Recursos Educativos', icono: 'fas fa-laptop-code', descripcion: 'Herramientas digitales y software para el aprendizaje.' }
      },
      { 
        path: 'recursos/portales-educativos', 
        loadComponent: placeholder,
        data: { titulo: 'Portales Educativos', seccion: 'Recursos Educativos', icono: 'fas fa-globe', descripcion: 'Enlaces a portales y plataformas educativas recomendadas.' }
      },

      // ===== TRANSPARENCIA =====
      { 
        path: 'transparencia/contratacion', 
        loadComponent: placeholder,
        data: { titulo: 'Contratación', seccion: 'Transparencia', icono: 'fas fa-file-contract', descripcion: 'Información de procesos contractuales institucionales.' }
      },
      { 
        path: 'transparencia/rendicion-cuentas', 
        loadComponent: placeholder,
        data: { titulo: 'Rendición de Cuentas', seccion: 'Transparencia', icono: 'fas fa-balance-scale', descripcion: 'Informes de gestión y rendición de cuentas ante la comunidad.' }
      },
      { 
        path: 'transparencia/plan-anual', 
        loadComponent: placeholder,
        data: { titulo: 'Plan Anual', seccion: 'Transparencia', icono: 'fas fa-tasks', descripcion: 'Plan operativo anual y metas institucionales.' }
      },

      // ===== ATENCIÓN Y SERVICIOS =====
      { 
        path: 'servicios/contactanos', 
        loadComponent: placeholder,
        data: { titulo: 'Contáctanos', seccion: 'Atención y Servicios', icono: 'fas fa-headset', descripcion: 'Canales de comunicación y atención al ciudadano.' }
      },
      { 
        path: 'servicios/orientacion-escolar', 
        loadComponent: placeholder,
        data: { titulo: 'Orientación Escolar', seccion: 'Atención y Servicios', icono: 'fas fa-hands-helping', descripcion: 'Servicio de acompañamiento psicosocial y orientación estudiantil.' }
      },
      { 
        path: 'servicios/restaurante-escolar', 
        loadComponent: placeholder,
        data: { titulo: 'Restaurante Escolar', seccion: 'Atención y Servicios', icono: 'fas fa-utensils', descripcion: 'Programa de alimentación escolar y menú institucional.' }
      },
      { 
        path: 'servicios/aulas-tecnologia', 
        loadComponent: placeholder,
        data: { titulo: 'Aulas de Tecnología', seccion: 'Atención y Servicios', icono: 'fas fa-desktop', descripcion: 'Espacios dotados de tecnología para el aprendizaje.' }
      },
      { 
        path: 'servicios/laboratorios', 
        loadComponent: placeholder,
        data: { titulo: 'Laboratorios', seccion: 'Atención y Servicios', icono: 'fas fa-flask', descripcion: 'Laboratorios de ciencias y espacios de experimentación.' }
      },
      { 
        path: 'servicios/biblioteca', 
        loadComponent: placeholder,
        data: { titulo: 'Biblioteca', seccion: 'Atención y Servicios', icono: 'fas fa-book', descripcion: 'Biblioteca institucional, catálogo y horarios de atención.' }
      },
      { 
        path: 'servicios/transporte-escolar', 
        loadComponent: placeholder,
        data: { titulo: 'Transporte Escolar', seccion: 'Atención y Servicios', icono: 'fas fa-bus-alt', descripcion: 'Rutas y horarios del servicio de transporte escolar.' }
      },
      { 
        path: 'servicios/tienda-escolar', 
        loadComponent: placeholder,
        data: { titulo: 'Tienda Escolar', seccion: 'Atención y Servicios', icono: 'fas fa-store', descripcion: 'Productos, uniformes y materiales disponibles en la tienda escolar.' }
      },

      // ===== PARTICIPA =====
      { 
        path: 'participa/pqrs', 
        loadComponent: () => import('./paginas/pqrs/pqrs').then(c => c.Pqrs)
      },
      { 
        path: 'participa/encuestas', 
        loadComponent: () => import('./paginas/encuestas/encuestas').then(c => c.Encuestas)
      },
      { 
        path: 'participa/redes-sociales', 
        loadComponent: () => import('./paginas/redes-sociales/redes-sociales').then(c => c.RedesSociales)
      },

      // Redirects de las rutas viejas
      { path: 'pqrs', redirectTo: 'participa/pqrs', pathMatch: 'full' },
      { path: 'encuestas', redirectTo: 'participa/encuestas', pathMatch: 'full' },
      { path: 'redes-sociales', redirectTo: 'participa/redes-sociales', pathMatch: 'full' },
    ]
  },
  { 
    path: '**', 
    loadComponent: () => import('./paginas/no-encontrado/no-encontrado').then(c => c.NoEncontrado) 
  }
];
