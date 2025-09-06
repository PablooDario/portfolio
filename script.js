// Three.js Background Animation
let scene, camera, renderer, particles;
let mouseX = 0, mouseY = 0;

function initThreeJS() {
    const canvas = document.getElementById('bg-canvas');
    
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Create particles
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 100;
        positions[i + 1] = (Math.random() - 0.5) * 100;
        positions[i + 2] = (Math.random() - 0.5) * 100;
        
        velocities[i] = (Math.random() - 0.5) * 0.1;
        velocities[i + 1] = (Math.random() - 0.5) * 0.1;
        velocities[i + 2] = (Math.random() - 0.5) * 0.1;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    
    const material = new THREE.PointsMaterial({
        color: 0xa855f7,
        size: 2,
        transparent: true,
        opacity: 0.6
    });
    
    particles = new THREE.Points(geometry, material);
    scene.add(particles);
    
    camera.position.z = 50;
    
    // Mouse move event
    document.addEventListener('mousemove', onMouseMove);
    
    animate();
}

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
    requestAnimationFrame(animate);
    
    if (particles) {
        const positions = particles.geometry.attributes.position.array;
        const velocities = particles.geometry.attributes.velocity.array;
        
        for (let i = 0; i < positions.length; i += 3) {
            // Update positions
            positions[i] += velocities[i];
            positions[i + 1] += velocities[i + 1];
            positions[i + 2] += velocities[i + 2];
            
            // Mouse interaction
            const dx = mouseX * 50 - positions[i];
            const dy = mouseY * 50 - positions[i + 1];
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 10) {
                velocities[i] += dx * 0.0001;
                velocities[i + 1] += dy * 0.0001;
            }
            
            // Boundary check
            if (positions[i] > 50 || positions[i] < -50) velocities[i] *= -1;
            if (positions[i + 1] > 50 || positions[i + 1] < -50) velocities[i + 1] *= -1;
            if (positions[i + 2] > 50 || positions[i + 2] < -50) velocities[i + 2] *= -1;
        }
        
        particles.geometry.attributes.position.needsUpdate = true;
        particles.rotation.y += 0.001;
    }
    
    renderer.render(scene, camera);
}

// Window resize handler
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

// Smooth scrolling for navigation links
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

// Project modal functionality
const projectDetails = {
    novaspace: {
        title: "NovaSpace - Deep Learning Platform",
        content: `
            <h2>NovaSpace - Deep Learning Platform</h2>
            <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=400&fit=crop" alt="NovaSpace" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px; margin: 20px 0;">
            
            <h3>Project Overview</h3>
            <p>NovaSpace is a comprehensive deep learning platform designed for space exploration data analysis. The system processes satellite imagery, sensor data, and astronomical observations using state-of-the-art computer vision and machine learning techniques.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Real-time Satellite Image Processing:</strong> Automated analysis of satellite imagery for terrain mapping, weather pattern detection, and anomaly identification.</li>
                <li><strong>Multi-spectral Data Analysis:</strong> Processing of various electromagnetic spectrum data to identify celestial objects and phenomena.</li>
                <li><strong>Predictive Modeling:</strong> Machine learning models for predicting space weather, orbital mechanics, and mission success probability.</li>
                <li><strong>Interactive Dashboard:</strong> Web-based interface for mission control teams to visualize data and insights in real-time.</li>
            </ul>
            
            <h3>Technical Stack</h3>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0;">
                <div>
                    <h4>Backend Technologies</h4>
                    <ul>
                        <li>Python with FastAPI framework</li>
                        <li>PyTorch for deep learning models</li>
                        <li>OpenCV for image processing</li>
                        <li>PostgreSQL with PostGIS extension</li>
                        <li>Redis for caching and real-time data</li>
                    </ul>
                </div>
                <div>
                    <h4>Infrastructure & Deployment</h4>
                    <ul>
                        <li>Docker containerization</li>
                        <li>Kubernetes orchestration</li>
                        <li>AWS S3 for data storage</li>
                        <li>Apache Airflow for data pipelines</li>
                        <li>Grafana and Prometheus monitoring</li>
                    </ul>
                </div>
            </div>
            
            <h3>Results & Impact</h3>
            <p>The platform has successfully processed over 50,000 satellite images and contributed to 12 successful space missions. It has reduced manual analysis time by 85% and improved anomaly detection accuracy to 94.7%.</p>
            
            <div style="background: rgba(168, 85, 247, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h4>Key Metrics</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin: 10px 0;"><strong>Processing Speed:</strong> 1,000+ images per hour</li>
                    <li style="margin: 10px 0;"><strong>Accuracy:</strong> 94.7% anomaly detection rate</li>
                    <li style="margin: 10px 0;"><strong>Data Volume:</strong> 50TB+ processed monthly</li>
                    <li style="margin: 10px 0;"><strong>Uptime:</strong> 99.9% system availability</li>
                </ul>
            </div>
        `
    },
    aitrader: {
        title: "AI Trading Bot",
        content: `
            <h2>AI Trading Bot - Reinforcement Learning System</h2>
            <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop" alt="AI Trading Bot" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px; margin: 20px 0;">
            
            <h3>Project Overview</h3>
            <p>An advanced automated trading system that uses reinforcement learning and real-time market data analysis for cryptocurrency trading. The bot makes intelligent trading decisions based on market patterns, news sentiment, and technical indicators.</p>
            
            <h3>Core Features</h3>
            <ul>
                <li><strong>Reinforcement Learning Engine:</strong> Deep Q-Network (DQN) and Proximal Policy Optimization (PPO) algorithms for decision making.</li>
                <li><strong>Multi-source Data Integration:</strong> Real-time price feeds, social media sentiment, and news analysis.</li>
                <li><strong>Risk Management:</strong> Advanced position sizing and stop-loss mechanisms to protect capital.</li>
                <li><strong>Backtesting Framework:</strong> Historical simulation capabilities for strategy validation.</li>
            </ul>
            
            <h3>Performance Metrics</h3>
            <div style="background: rgba(168, 85, 247, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h4>Trading Performance (Last 12 Months)</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin: 10px 0;"><strong>Total Return:</strong> +127.3%</li>
                    <li style="margin: 10px 0;"><strong>Sharpe Ratio:</strong> 2.41</li>
                    <li style="margin: 10px 0;"><strong>Max Drawdown:</strong> -8.7%</li>
                    <li style="margin: 10px 0;"><strong>Win Rate:</strong> 68.2%</li>
                    <li style="margin: 10px 0;"><strong>Total Trades:</strong> 1,247</li>
                </ul>
            </div>
        `
    },
    healthai: {
        title: "HealthAI - Medical Diagnosis Assistant",
        content: `
            <h2>HealthAI - Medical Diagnosis Assistant</h2>
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop" alt="HealthAI" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px; margin: 20px 0;">
            
            <h3>Project Overview</h3>
            <p>HealthAI is an intelligent medical diagnosis assistant that uses transformer models to analyze patient symptoms and suggest potential treatment options. The system is designed to assist healthcare professionals in making more accurate and timely diagnoses.</p>
            
            <h3>Technology Implementation</h3>
            <p>Built using state-of-the-art transformer architecture (BERT-based models) trained on medical literature and anonymized patient data. The system incorporates natural language processing to understand symptom descriptions and medical history.</p>
            
            <h3>Clinical Impact</h3>
            <div style="background: rgba(168, 85, 247, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h4>Validation Results</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin: 10px 0;"><strong>Diagnostic Accuracy:</strong> 89.3% (validated against specialist diagnoses)</li>
                    <li style="margin: 10px 0;"><strong>Time Reduction:</strong> 42% decrease in initial assessment time</li>
                    <li style="margin: 10px 0;"><strong>Patient Cases:</strong> 15,000+ successfully analyzed</li>
                    <li style="margin: 10px 0;"><strong>Specialties Covered:</strong> 12 medical specialties</li>
                </ul>
            </div>
        `
    },
    smartcity: {
        title: "Smart City Analytics",
        content: `
            <h2>Smart City Analytics - IoT Data Processing</h2>
            <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=400&fit=crop" alt="Smart City Analytics" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px; margin: 20px 0;">
            
            <h3>Project Overview</h3>
            <p>A comprehensive IoT data processing pipeline designed for urban traffic optimization using machine learning and real-time analytics. The system processes data from thousands of sensors across the city to optimize traffic flow and reduce congestion.</p>
            
            <h3>System Architecture</h3>
            <p>The platform uses Apache Kafka for real-time data streaming, Apache Spark for distributed processing, and machine learning models for predictive analytics. Data visualization is provided through custom dashboards built with React and D3.js.</p>
            
            <h3>Impact Metrics</h3>
            <div style="background: rgba(168, 85, 247, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h4>Traffic Optimization Results</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin: 10px 0;"><strong>Traffic Reduction:</strong> 23% decrease in average commute time</li>
                    <li style="margin: 10px 0;"><strong>Fuel Savings:</strong> $2.3M annually in reduced fuel consumption</li>
                    <li style="margin: 10px 0;"><strong>Sensors Deployed:</strong> 3,500+ IoT devices</li>
                    <li style="margin: 10px 0;"><strong>Data Processing:</strong> 1.2TB daily data volume</li>
                </ul>
            </div>
        `
    }
};

// Project card click handlers
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const projectData = projectDetails[projectId];
        
        if (projectData) {
            const modal = document.getElementById('project-detail');
            const modalBody = document.getElementById('project-detail-body');
            
            modalBody.innerHTML = projectData.content;
            modal.classList.remove('hidden');
            
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal functionality
document.querySelector('.close-btn').addEventListener('click', function() {
    const modal = document.getElementById('project-detail');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
document.getElementById('project-detail').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// Skill key hover effects
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) rotateX(15deg)';
    });
    
    key.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0)';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Intersection Observer for animations
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

// Observe elements for scroll animations
document.querySelectorAll('.experience-card, .project-card, .course-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Initialize Three.js when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initThreeJS();
    
    // Add typing effect to subtitle
    const subtitle = document.querySelector('.subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after title animation
    setTimeout(typeWriter, 1000);
});

// Keyboard shortcut for quick navigation
document.addEventListener('keydown', function(e) {
    if (e.altKey) {
        switch(e.key) {
            case '1':
                document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                break;
            case '2':
                document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
                break;
            case '3':
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                break;
            case '4':
                document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }
});

// Add particle trail effect on mouse move
let trail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', function(e) {
    trail.push({ x: e.clientX, y: e.clientY, life: maxTrailLength });
    
    if (trail.length > maxTrailLength) {
        trail.shift();
    }
    
    // Update existing trail particles
    trail.forEach((particle, index) => {
        particle.life--;
        if (particle.life <= 0) {
            trail.splice(index, 1);
        }
    });
});

// Smooth reveal animation for sections
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

// Add CSS class for revealed elements
const style = document.createElement('style');
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