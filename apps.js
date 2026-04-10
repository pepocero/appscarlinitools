/**
 * Galería Carlinitools — datos de apps (URLs y textos reales).
 * Imágenes en `images/` (una por app).
 */
window.CARLINITOOLS_APPS = [
  {
    slug: "comics",
    title: "ComicRead",
    url: "https://comics.carlinitools.com",
    description:
      "Lector de cómics CBZ y CBR desde carpetas MEGA, biblioteca local en tu dispositivo y visor optimizado para leer cómodamente.",
    monogram: "CR",
    image: "images/comicread.png",
  },
  {
    slug: "gamescore",
    title: "GameScore",
    url: "https://gamescore.carlinitools.com",
    description:
      "Marcador en vivo: nuevos partidos, próximos encuentros, historial, estadísticas y configuración.",
    monogram: "GS",
    image: "images/gamescore.png",
  },
  {
    slug: "infoplex",
    title: "InfoPlex",
    url: "https://infoplex.carlinitools.com",
    description:
      "Estadísticas de tus bibliotecas Plex con datos almacenados de forma eficiente.",
    monogram: "IP",
    image: "images/infoplex.png",
  },
  {
    slug: "conversor",
    title: "Conversor Universal",
    url: "https://conversor.carlinitools.com",
    description:
      "Convierte documentos, imágenes y audio en el navegador: rápido, sin subir archivos a servidores externos.",
    monogram: "CV",
    image: "images/conversor.png",
  },
  {
    slug: "pdf",
    title: "Editor PDF",
    url: "https://pdf.carlinitools.com/",
    description:
      "Editor PDF en el navegador: añade imágenes y texto, resalta, dibuja y usa formas. Pensado sobre todo para ordenador; en móvil puede usarse, aunque la interfaz se ve mejor en pantalla grande.",
    monogram: "PDF",
    image: "images/pdf.png",
  },
  {
    slug: "elpot",
    title: "El Pot de la Sort",
    url: "https://elpotdelasort.carlinitools.com",
    description:
      "Herramientas para el aula: grupos al azar, selector, temporizador, dado y ruleta. Los datos se guardan en tu dispositivo.",
    monogram: "PS",
    image: "images/potsort.png",
  },
  {
    slug: "contador",
    title: "Contador",
    url: "https://contador.carlinitools.com",
    description:
      "Crea y gestiona contadores personalizables para seguir lo que necesites sin complicaciones.",
    monogram: "CT",
    image: "images/contador.png",
  },
  {
    slug: "gestiogar",
    title: "Gestiogar",
    url: "https://gestiogar.carlinitools.com/",
    description:
      "Plataforma multitenant para empresas de reparaciones: clientes, técnicos, trabajos, presupuestos e integración con aseguradoras.",
    monogram: "GG",
    image: "images/gestiogar.png",
  },
  {
    slug: "hourly",
    title: "Hourly",
    url: "https://hourly.carlinitools.com",
    description:
      "Control de tiempo para freelancers: registro de horas, proyectos, análisis y exportación para tus clientes.",
    monogram: "HR",
    image: "images/hourly.png",
  },
  {
    slug: "qr",
    title: "Generador QR",
    url: "https://qr.carlinitools.com",
    description:
      "Códigos QR para texto, URL, WiFi, vCard y más. Personaliza colores, añade logo y descarga en PNG o SVG.",
    monogram: "QR",
    image: "images/qr.png",
  },
  {
    slug: "whiteboard",
    title: "Whiteboard",
    url: "https://whiteboard.carlinitools.com",
    description:
      "Pizarra para dibujar y colaborar; tu trabajo se guarda localmente en el navegador.",
    monogram: "WB",
    image: "images/whiteboard.png",
  },
  {
    slug: "gestionetbb",
    title: "Gestionetbb",
    url: "https://gestionetbb.com/etbb",
    description:
      "Acceso al sistema de gestión de la escuela de teatro según tu perfil de usuario.",
    monogram: "ET",
    image: "images/gestionetbb.png",
  },
  {
    slug: "dontorrent",
    title: "Don Torrent",
    url: "https://dontorrent.carlinitools.com",
    description:
      "Extrae enlaces de descarga a partir de URLs de dominios permitidos, listos para copiar o abrir en tu cliente.",
    monogram: "DT",
    image: "images/dontorrent.png",
  },
];

function renderGallery() {
  const grid = document.getElementById("app-grid");
  if (!grid || !window.CARLINITOOLS_APPS) return;

  const fragment = document.createDocumentFragment();

  window.CARLINITOOLS_APPS.forEach((app) => {
    const article = document.createElement("article");
    article.className = "card";
    article.setAttribute("data-slug", app.slug);
    article.setAttribute("role", "listitem");

    const visual = document.createElement("div");
    visual.className = `card-visual card-visual--${app.slug}`;

    if (app.image) {
      const img = document.createElement("img");
      img.src = app.image;
      img.alt = `Vista de ${app.title}`;
      img.className = "card-img";
      img.loading = "lazy";
      img.decoding = "async";
      visual.appendChild(img);
    } else {
      visual.setAttribute("aria-hidden", "true");
      const mono = document.createElement("span");
      mono.className = "card-monogram";
      mono.textContent = app.monogram;
      visual.appendChild(mono);
    }

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = app.title;

    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = app.description;

    const host = document.createElement("span");
    host.className = "card-host";
    try {
      host.textContent = new URL(app.url).hostname.replace(/^www\./, "");
    } catch {
      host.textContent = "";
    }

    const footer = document.createElement("div");
    footer.className = "card-footer";

    const link = document.createElement("a");
    link.className = "card-cta";
    link.href = app.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Abrir aplicación";
    link.setAttribute("aria-label", `Abrir ${app.title} en una pestaña nueva`);

    footer.appendChild(link);
    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(host);
    body.appendChild(footer);

    article.appendChild(visual);
    article.appendChild(body);

    fragment.appendChild(article);
  });

  grid.appendChild(fragment);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderGallery);
} else {
  renderGallery();
}
