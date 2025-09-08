// ============ CONFIGURACIÓN DE CANVAS Y PARTÍCULAS ============
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Variables globales para el control de animación
let particles = [];
let connections = [];
let isRunning = true;
let globalOpacity = 1;
let targetOpacity = 1;

// Configuración del canvas
function initializeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Paleta de colores para las partículas
const colors = [
    "rgba(100, 149, 237, ALPHA)",
    "rgba(123, 104, 238, ALPHA)",
    "rgba(72, 209, 204, ALPHA)",
    "rgba(176, 196, 222, ALPHA)",
    "rgba(220, 80, 90, ALPHA)",
    "rgba(0, 0, 0, ALPHA)"
];

// ============ CLASES PARA PARTÍCULAS Y CONEXIONES ============
class Particle {
    constructor(x, y, radius) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.radius = radius || Math.random() * 5 + 2;
        this.life = Math.random() * 700 + 200;
        this.opacity = Math.random();
        this.fade = Math.random() * 0.01 + 0.002;
        this.color = this.randomColor();
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
    }

    randomColor() {
        const base = colors[Math.floor(Math.random() * colors.length)];
        return base.replace("ALPHA", this.opacity.toFixed(2));
    }

    update() {
        // Movimiento de la partícula
        this.x += this.vx;
        this.y += this.vy;

        // Cambio de opacidad
        this.opacity += this.fade;
        if (this.opacity <= 0 || this.opacity >= 1) {
            this.fade *= -1;
        }

        // Ciclo de vida
        this.life--;
        if (this.life <= 0) {
            const index = particles.indexOf(this);
            particles.splice(index, 1);
            particles.push(new Particle());
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color.replace("ALPHA", (this.opacity * globalOpacity).toFixed(2));
        ctx.fill();
        ctx.closePath();
    }
}

class Connection {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 1;
    }

    update() {
        this.opacity -= 0.005;
        if (this.opacity <= 0) {
            const index = connections.indexOf(this);
            connections.splice(index, 1);
        }
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.strokeStyle = `rgba(200,200,200,${(this.opacity * globalOpacity).toFixed(2)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.closePath();
    }
}

// ============ FUNCIONES DE ANIMACIÓN ============
function initParticles() {
    particles = [];
    for (let i = 0; i < 250; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Animación de desvanecimiento suave
    globalOpacity += (targetOpacity - globalOpacity) * 0.05;

    // Actualizar y dibujar partículas
    particles.forEach((particle) => {
        if (isRunning) particle.update();
        particle.draw();
    });

    // Crear nuevas conexiones aleatoriamente
    if (isRunning && Math.random() < 0.01) {
        const p1 = particles[Math.floor(Math.random() * particles.length)];
        const p2 = particles[Math.floor(Math.random() * particles.length)];
        if (p1 !== p2) {
            connections.push(new Connection(p1, p2));
        }
    }

    // Actualizar y dibujar conexiones
    connections.forEach((connection) => {
        if (isRunning) connection.update();
        connection.draw();
    });

    requestAnimationFrame(animate);
}
    

// ============ EVENT LISTENERS Y FUNCIONES DE INTERACCIÓN ============

/**
 * Inicialización del DOM y eventos
 */
function initializeEventListeners() {
    // Control de animación de partículas
    const toggleBtn = document.getElementById("toggleBtn");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", toggleAnimation);
    }

    // Navegación suave
    initSmoothNavigation();

    // Modales de proyectos
    initProjectModals();

    // Efectos de hover en skills
    initSkillHoverEffects();

    // Efectos de scroll en navbar
    initNavbarScrollEffect();

    // Observer para animaciones
    initScrollAnimations();

    // Atajos de teclado
    initKeyboardShortcuts();
}

/**
 * Control de la animación de partículas
 */
function toggleAnimation() {
    const toggleBtn = document.getElementById("toggleBtn");
    isRunning = !isRunning;
    
    if (isRunning) {
        targetOpacity = 1;
        toggleBtn.textContent = "Stop Animation";
    } else {
        targetOpacity = 0;
        toggleBtn.textContent = "Play Animation";
    }
}

/**
 * Navegación suave entre secciones
 */
function initSmoothNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Modales de proyectos
 */
function initProjectModals() {
    // Abrir modal al hacer clic en proyecto
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    // Cerrar modal
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }

    // Cerrar modal al hacer clic fuera
    const modal = document.getElementById('project-detail');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeProjectModal();
            }
        });
    }
}

/**
 * Abrir modal de proyecto
 */
function openProjectModal(projectId) {
    const projectData = projectDetails[projectId];
    
    if (projectData) {
        const modal = document.getElementById('project-detail');
        const modalBody = document.getElementById('project-detail-body');
        
        modalBody.innerHTML = projectData.content;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Cerrar modal de proyecto
 */
function closeProjectModal() {
    const modal = document.getElementById('project-detail');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

/**
 * Efectos de hover en las skills con tooltip dinámico
 */
function initSkillHoverEffects() {
    const tooltip = document.getElementById('skill-tooltip');
    let currentSkill = null;
    
    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('mouseenter', function(e) {
            currentSkill = this;
            
            // Efecto visual en la skill
            this.style.transform = 'translateY(-8px) scale(1.05)';
            
            // Mostrar tooltip
            const skillName = this.getAttribute('data-skill');
            if (skillName && tooltip) {
                tooltip.textContent = skillName;
                
                // Posicionar tooltip
                const rect = this.getBoundingClientRect();
                const tooltipX = rect.left + (rect.width / 2);
                const tooltipY = rect.bottom + 15;
                
                tooltip.style.left = tooltipX + 'px';
                tooltip.style.top = tooltipY + 'px';
                tooltip.style.transform = 'translateX(-50%)';
                
                // Mostrar inmediatamente
                tooltip.classList.add('show');
            }
        });
        
        key.addEventListener('mouseleave', function(e) {
            currentSkill = null;
            
            // Restaurar efecto visual
            this.style.transform = 'translateY(0) scale(1)';
            
            // Ocultar tooltip inmediatamente
            if (tooltip) {
                tooltip.classList.remove('show');
            }
        });
    });

    // Ocultar tooltip si el mouse sale del área de skills
    document.addEventListener('mousemove', function(e) {
        if (!currentSkill && tooltip) {
            tooltip.classList.remove('show');
        }
    });

    // Ocultar tooltip al hacer scroll
    window.addEventListener('scroll', function() {
        if (tooltip) {
            tooltip.classList.remove('show');
        }
    });
}

/**
 * Efecto de scroll en la navbar
 */
function initNavbarScrollEffect() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            }
        }
    });
}

/**
 * Animaciones al hacer scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    const elementsToAnimate = [
        '.experience-card', 
        '.project-card', 
        '.course-card',
        '.about-card',
        '.education-card'
    ];

    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    });

    // Observer para secciones principales
    const revealElements = document.querySelectorAll('.section');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Agregar estilos CSS para las animaciones de reveal
    if (!document.querySelector('#reveal-styles')) {
        const style = document.createElement('style');
        style.id = 'reveal-styles';
        style.textContent = `
            .section {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.8s ease, transform 0.8s ease;
            }
            
            .section.revealed {
                opacity: 1;
                transform: translateY(0);
            }
            
            .section:first-child {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Atajos de teclado para navegación
 */
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        if (e.altKey) {
            const sections = {
                '1': '#home',
                '2': '#experience',
                '3': '#projects',
                '4': '#courses'
            };

            const targetSection = sections[e.key];
            if (targetSection) {
                document.querySelector(targetSection).scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        }
    });
}

/**
 * Redimensionamiento del canvas
 */
function handleResize() {
    initializeCanvas();
    initParticles();
}

// ============ INICIALIZACIÓN ============

/**
 * Función principal de inicialización
 */
function init() {
    // Configurar canvas
    initializeCanvas();
    
    // Inicializar partículas
    initParticles();
    
    // Comenzar animación
    animate();
    
    // Event listeners
    initializeEventListeners();
    
    // Listener para redimensionamiento
    window.addEventListener('resize', handleResize);
}

// ============ EJECUCIÓN AL CARGAR LA PÁGINA ============

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);

// Inicializar inmediatamente si el DOM ya está cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}