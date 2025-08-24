// Team page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initTeamAnimations();
    initMemberProfiles();
    initReflectionCards();
    initStatsAnimation();
});

// Team page specific animations
function initTeamAnimations() {
    // Animate team header on load
    const teamHeader = document.querySelector('.team-header');
    if (teamHeader) {
        teamHeader.style.opacity = '0';
        teamHeader.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            teamHeader.style.transition = 'all 1s ease';
            teamHeader.style.opacity = '1';
            teamHeader.style.transform = 'translateY(0)';
        }, 100);
    }

    // Animate member profiles sequentially
    animateMemberProfiles();
}

// Member profiles animation and interaction
function initMemberProfiles() {
    const memberProfiles = document.querySelectorAll('.member-profile');
    
    memberProfiles.forEach((profile, index) => {
        // Add hover effect
        profile.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            
            // Animate avatar
            const avatar = this.querySelector('.member-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        profile.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            
            // Reset avatar
            const avatar = this.querySelector('.member-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(1) rotate(0deg)';
            }
        });

        // Click to expand/collapse contribution details
        profile.addEventListener('click', function() {
            const contribution = this.querySelector('.member-contribution');
            if (contribution) {
                contribution.classList.toggle('expanded');
            }
        });
    });
}

// Animate member profiles on scroll
function animateMemberProfiles() {
    const memberProfiles = document.querySelectorAll('.member-profile');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('slide-in');
                }, index * 150);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    memberProfiles.forEach(profile => {
        profile.classList.add('slide-ready');
        observer.observe(profile);
    });
}

// Reflection cards interaction
function initReflectionCards() {
    const reflectionCards = document.querySelectorAll('.reflection-card');
    
    reflectionCards.forEach((card, index) => {
        // Add staggered animation
        card.style.animationDelay = `${index * 0.2}s`;
        
        // Enhanced hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
            
            // Highlight avatar
            const avatar = this.querySelector('.reflection-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(1.2)';
                avatar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            
            // Reset avatar
            const avatar = this.querySelector('.reflection-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(1)';
                avatar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });

        // Click to expand/collapse reflection
        card.addEventListener('click', function() {
            const content = this.querySelector('.reflection-content');
            if (content) {
                content.classList.toggle('expanded');
                
                // Update card height animation
                if (content.classList.contains('expanded')) {
                    this.style.maxHeight = 'none';
                } else {
                    this.style.maxHeight = '400px';
                }
            }
        });
    });
    
    // Animate reflection cards on scroll
    animateReflectionCards();
}

// Animate reflection cards on scroll
function animateReflectionCards() {
    const reflectionCards = document.querySelectorAll('.reflection-card');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    reflectionCards.forEach(card => {
        card.classList.add('fade-ready');
        observer.observe(card);
    });
}

// Stats animation
function initStatsAnimation() {
    const statCards = document.querySelectorAll('.stat-card');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStatNumber(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    statCards.forEach(card => {
        observer.observe(card);
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
}

// Animate stat numbers
function animateStatNumber(statCard) {
    const numberElement = statCard.querySelector('.stat-number');
    const targetNumber = parseInt(numberElement.textContent);
    let currentNumber = 0;
    
    const increment = Math.ceil(targetNumber / 20);
    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(timer);
        }
        numberElement.textContent = currentNumber;
    }, 50);
}

// Add team page specific styles
const teamStyles = document.createElement('style');
teamStyles.textContent = `
    .team-header {
        padding: 120px 0 80px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        text-align: center;
    }
    
    .team-intro h1 {
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }
    
    .team-description {
        font-size: 1.2rem;
        max-width: 800px;
        margin: 0 auto;
        opacity: 0.9;
        line-height: 1.6;
    }
    
    .team-members-section {
        padding: 100px 0;
        background: white;
    }
    
    .members-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
    }
    
    .member-profile {
        background: white;
        border-radius: 15px;
        padding: 2.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        border: 1px solid #f0f0f0;
        cursor: pointer;
        opacity: 0;
        transform: translateY(50px);
    }
    
    .member-profile.slide-ready {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease;
    }
    
    .member-profile.slide-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .member-avatar {
        width: 100px;
        height: 100px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 2rem;
        position: relative;
        transition: all 0.3s ease;
    }
    
    .member-avatar i {
        font-size: 2rem;
        color: white;
        position: absolute;
        top: 20px;
        opacity: 0.3;
    }
    
    .member-initial {
        font-size: 2rem;
        font-weight: bold;
        color: white;
    }
    
    .member-info h3 {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
        color: #333;
        text-align: center;
    }
    
    .member-role {
        text-align: center;
        color: #667eea;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    
    .member-email {
        text-align: center;
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 2rem;
    }
    
    .member-contribution h4 {
        color: #333;
        margin-bottom: 1rem;
        border-bottom: 2px solid #667eea;
        padding-bottom: 0.5rem;
    }
    
    .member-contribution ul {
        list-style: none;
        padding: 0;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }
    
    .member-contribution.expanded ul {
        max-height: 200px;
    }
    
    .member-contribution li {
        padding: 0.3rem 0;
        position: relative;
        padding-left: 1.5rem;
        color: #666;
    }
    
    .member-contribution li::before {
        content: '▸';
        position: absolute;
        left: 0;
        color: #4ecdc4;
    }
    
    .reflections-section {
        padding: 100px 0;
        background: #f8f9fa;
    }
    
    .reflections-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2rem;
    }
    
    .reflection-card {
        background: white;
        border-radius: 15px;
        padding: 2rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        cursor: pointer;
        opacity: 0;
        transform: translateY(30px);
    }
    
    .reflection-card.fade-ready {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .reflection-card.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .reflection-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
    
    .reflection-avatar {
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
        transition: all 0.3s ease;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .reflection-info h3 {
        margin: 0;
        color: #333;
        font-size: 1.3rem;
    }
    
    .reflection-info span {
        color: #667eea;
        font-size: 0.9rem;
        font-weight: 500;
    }
    
    .reflection-content {
        color: #666;
        line-height: 1.6;
        max-height: 150px;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }
    
    .reflection-content.expanded {
        max-height: none;
    }
    
    .reflection-content p {
        margin-bottom: 1rem;
    }
    
    .reflection-content p:last-child {
        margin-bottom: 0;
    }
    
    .team-stats-section {
        padding: 100px 0;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
    }
    
    .team-stats-section .section-title {
        color: white;
        margin-bottom: 3rem;
    }
    
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
    }
    
    .stat-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        padding: 2rem;
        text-align: center;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .stat-card:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .stat-icon {
        margin-bottom: 1rem;
    }
    
    .stat-icon i {
        font-size: 3rem;
        color: #4ecdc4;
    }
    
    .stat-number {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: white;
    }
    
    .stat-label {
        font-size: 1.1rem;
        opacity: 0.9;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
        .team-intro h1 {
            font-size: 2.2rem;
        }
        
        .members-grid {
            grid-template-columns: 1fr;
        }
        
        .member-profile {
            padding: 2rem;
        }
        
        .reflections-grid {
            grid-template-columns: 1fr;
        }
        
        .reflection-card {
            padding: 1.5rem;
        }
        
        .stats-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .stat-card {
            padding: 1.5rem;
        }
        
        .stat-number {
            font-size: 2.5rem;
        }
    }
    
    /* Additional animations */
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Staggered animations for grid items */
    .members-grid .member-profile:nth-child(odd) {
        animation-name: slideInLeft;
    }
    
    .members-grid .member-profile:nth-child(even) {
        animation-name: slideInRight;
    }
    
    .reflection-card:nth-child(1) { transition-delay: 0.1s; }
    .reflection-card:nth-child(2) { transition-delay: 0.2s; }
    .reflection-card:nth-child(3) { transition-delay: 0.3s; }
    .reflection-card:nth-child(4) { transition-delay: 0.4s; }
    .reflection-card:nth-child(5) { transition-delay: 0.5s; }
    .reflection-card:nth-child(6) { transition-delay: 0.6s; }
    
    .stats-grid .stat-card:nth-child(1) { transition-delay: 0.1s; }
    .stats-grid .stat-card:nth-child(2) { transition-delay: 0.2s; }
    .stats-grid .stat-card:nth-child(3) { transition-delay: 0.3s; }
    .stats-grid .stat-card:nth-child(4) { transition-delay: 0.4s; }
    
    /* Click effects */
    .member-profile:active {
        transform: scale(0.98);
    }
    
    .reflection-card:active {
        transform: scale(0.98);
    }
    
    .stat-card:active {
        transform: scale(0.95);
    }
`;
document.head.appendChild(teamStyles);