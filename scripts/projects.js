// Project page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initProjectAnimations();
    initAlgorithmCards();
    initArchitectureDiagram();
    initAchievementCards();
    initScrollAnimations();
    createParticleBackground();
});

// Initialize project animations
function initProjectAnimations() {
    // Animate project header on load
    const projectHeader = document.querySelector('.project-header');
    if (projectHeader) {
        projectHeader.style.opacity = '0';
        projectHeader.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            projectHeader.style.transition = 'all 1s ease';
            projectHeader.style.opacity = '1';
            projectHeader.style.transform = 'translateY(0)';
        }, 200);
    }

    // Animate process flow steps
    animateProcessFlow();
}

// Algorithm cards enhanced interaction
function initAlgorithmCards() {
    const algorithmCards = document.querySelectorAll('.algorithm-card');
    
    algorithmCards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        // Animate in with delay
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
            this.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';
            
            // Animate icon
            const icon = this.querySelector('.algorithm-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.background = 'linear-gradient(45deg, #667eea, #764ba2, #4ecdc4)';
            }
            
            // Show details
            const details = this.querySelector('.algorithm-details');
            if (details) {
                details.style.maxHeight = '250px';
                details.style.opacity = '1';
                details.style.marginTop = '1.5rem';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            this.style.background = 'white';
            
            // Reset icon
            const icon = this.querySelector('.algorithm-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
            }
            
            // Hide details
            const details = this.querySelector('.algorithm-details');
            if (details) {
                details.style.maxHeight = '0';
                details.style.opacity = '0';
                details.style.marginTop = '0';
            }
        });
    });
}

// Process flow animation
function animateProcessFlow() {
    const flowSteps = document.querySelectorAll('.flow-step');
    const flowArrows = document.querySelectorAll('.flow-arrow');
    
    // Animate steps sequentially
    flowSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(50px)';
        
        setTimeout(() => {
            step.style.transition = 'all 0.8s ease';
            step.style.opacity = '1';
            step.style.transform = 'translateX(0)';
            step.classList.add('animated');
        }, index * 600);
    });
    
    // Animate arrows after steps
    flowArrows.forEach((arrow, index) => {
        arrow.style.opacity = '0';
        arrow.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
            arrow.style.transition = 'all 0.4s ease';
            arrow.style.opacity = '1';
            arrow.style.transform = 'scale(1)';
        }, (index + 1) * 600 + 300);
    });
}

// Architecture diagram interaction
function initArchitectureDiagram() {
    const components = document.querySelectorAll('.component');
    
    components.forEach((component, index) => {
        // Initial animation
        component.style.opacity = '0';
        component.style.transform = 'translateY(30px) scale(0.9)';
        
        setTimeout(() => {
            component.style.transition = 'all 0.6s ease';
            component.style.opacity = '1';
            component.style.transform = 'translateY(0) scale(1)';
        }, index * 200);
        
        // Hover effects
        component.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
            this.style.color = 'white';
            this.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4)';
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.color = 'white';
                icon.style.transform = 'scale(1.2)';
            }
        });
        
        component.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.background = '#f8f9fa';
            this.style.color = '#333';
            this.style.boxShadow = 'none';
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.color = '#667eea';
                icon.style.transform = 'scale(1)';
            }
        });
    });
}

// Achievement cards animation
function initAchievementCards() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.8s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    entry.target.classList.add('visible');
                }, index * 200);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    achievementCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.9)';
        observer.observe(card);
        
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.background = 'rgba(255, 255, 255, 0.3)';
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.3) rotate(10deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.background = 'rgba(255, 255, 255, 0.1)';
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

// Scroll-based animations
function initScrollAnimations() {
    const sections = document.querySelectorAll('.project-overview, .algorithms-section, .architecture-section');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Create floating particle background
function createParticleBackground() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-background';
    document.body.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        particleContainer.appendChild(particle);
    }
}

// Add enhanced styles for project page
const projectStyles = document.createElement('style');
projectStyles.textContent = `
    /* Particle Background */
    .particle-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    }
    
    .particle {
        position: absolute;
        width: 3px;
        height: 3px;
        background: rgba(102, 126, 234, 0.4);
        border-radius: 50%;
        animation: float 10s infinite linear;
    }
    
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-20vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    /* Enhanced Project Header */
    .project-header {
        padding: 120px 0 80px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        text-align: center;
        position: relative;
        overflow: hidden;
    }
    
    .project-header::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
        pointer-events: none;
    }
    
    .project-intro {
        position: relative;
        z-index: 2;
    }
    
    .project-intro h1 {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        font-weight: 700;
    }
    
    .project-description {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .project-meta {
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
    }
    
    .meta-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        padding: 0.5rem 1rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 25px;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
    }
    
    .meta-item:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
    }
    
    /* Process Flow */
    .process-flow {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        margin-top: 2rem;
    }
    
    .flow-step {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 2.5rem;
        background: white;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 450px;
        transition: all 0.3s ease;
    }
    
    .flow-step.animated {
        border-left: 4px solid #667eea;
    }
    
    .flow-step:hover {
        transform: translateX(10px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }
    
    .step-number {
        width: 60px;
        height: 60px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        flex-shrink: 0;
        transition: all 0.3s ease;
    }
    
    .flow-step:hover .step-number {
        transform: scale(1.1);
        background: linear-gradient(45deg, #4ecdc4, #667eea);
    }
    
    .step-content h4 {
        margin-bottom: 0.5rem;
        color: #333;
        font-size: 1.2rem;
    }
    
    .step-content p {
        color: #666;
        margin: 0;
        line-height: 1.5;
    }
    
    .flow-arrow i {
        font-size: 2rem;
        color: #667eea;
        transition: all 0.3s ease;
    }
    
    /* Enhanced Algorithm Cards */
    .algorithms-section {
        padding: 100px 0;
        background: #f8f9fa;
    }
    
    .algorithms-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
    }
    
    .algorithm-card {
        background: white;
        padding: 2.5rem;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border: 1px solid #f0f0f0;
        position: relative;
        overflow: hidden;
    }
    
    .algorithm-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
        transition: left 0.6s ease;
    }
    
    .algorithm-card:hover::before {
        left: 100%;
    }
    
    .algorithm-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        transition: all 0.4s ease;
        position: relative;
        z-index: 2;
    }
    
    .algorithm-icon i {
        font-size: 2rem;
        color: white;
        transition: all 0.3s ease;
    }
    
    .algorithm-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #333;
    }
    
    .algorithm-card > p {
        color: #666;
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    
    .algorithm-details {
        border-top: 1px solid #eee;
        padding-top: 0;
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transition: all 0.4s ease;
        margin-top: 0;
    }
    
    .algorithm-details h4 {
        color: #667eea;
        margin-bottom: 1rem;
        font-size: 1.1rem;
    }
    
    .algorithm-details ul {
        list-style: none;
        padding: 0;
    }
    
    .algorithm-details li {
        padding: 0.3rem 0;
        color: #666;
        position: relative;
        padding-left: 1.5rem;
    }
    
    .algorithm-details li::before {
        content: '▸';
        position: absolute;
        left: 0;
        color: #4ecdc4;
    }
    
    /* Architecture Section */
    .architecture-section {
        padding: 100px 0;
        background: white;
    }
    
    .architecture-diagram {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 2rem;
        margin-bottom: 4rem;
    }
    
    .component {
        text-align: center;
        padding: 2.5rem;
        background: #f8f9fa;
        border-radius: 15px;
        transition: all 0.4s ease;
        cursor: pointer;
        border: 2px solid transparent;
    }
    
    .component i {
        font-size: 3rem;
        color: #667eea;
        margin-bottom: 1rem;
        transition: all 0.3s ease;
    }
    
    .component h4 {
        margin-bottom: 0.5rem;
        color: #333;
        transition: all 0.3s ease;
    }
    
    .component p {
        color: #666;
        font-size: 0.9rem;
        transition: all 0.3s ease;
    }
    
    /* Results Section */
    .results-section {
        padding: 100px 0;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
    }
    
    .results-section .section-title {
        color: white;
        margin-bottom: 3rem;
    }
    
    .achievement-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
    }
    
    .achievement-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        padding: 2.5rem;
        text-align: center;
        transition: all 0.4s ease;
    }
    
    .achievement-card i {
        font-size: 3rem;
        margin-bottom: 1.5rem;
        color: #4ecdc4;
        transition: all 0.3s ease;
    }
    
    .achievement-card h3 {
        margin-bottom: 1rem;
        font-size: 1.3rem;
    }
    
    .achievement-card p {
        opacity: 0.9;
        line-height: 1.6;
    }
    
    /* Section visibility animations */
    .project-overview,
    .algorithms-section,
    .architecture-section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .project-overview.visible,
    .algorithms-section.visible,
    .architecture-section.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
        .project-intro h1 {
            font-size: 2.5rem;
        }
        
        .project-meta {
            flex-direction: column;
            align-items: center;
        }
        
        .algorithms-grid {
            grid-template-columns: 1fr;
        }
        
        .architecture-diagram {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .flow-step {
            padding: 2rem;
            gap: 1.5rem;
        }
        
        .step-number {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
        }
        
        .component {
            padding: 2rem;
        }
        
        .component i {
            font-size: 2.5rem;
        }
    }
    
    @media (max-width: 480px) {
        .architecture-diagram {
            grid-template-columns: 1fr;
        }
        
        .project-intro h1 {
            font-size: 2rem;
        }
        
        .flow-step {
            flex-direction: column;
            text-align: center;
        }
    }
`;

document.head.appendChild(projectStyles);