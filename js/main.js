/* UNTITLED PUBLISHERS - MAIN JAVASCRIPT */
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === targetTab) { panel.classList.add('active'); }
            });
        });
    });
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                faqItems.forEach(otherItem => { if (otherItem !== item) { otherItem.classList.remove('active'); } });
                item.classList.toggle('active');
            });
        }
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) { header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)'; }
        else { header.style.boxShadow = 'none'; }
    });
    const forms = document.querySelectorAll('form[data-validate]');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                field.classList.remove('form-error');
                if (!field.value.trim()) { isValid = false; field.classList.add('form-error'); }
                if (field.type === 'email' && field.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(field.value)) { isValid = false; field.classList.add('form-error'); }
                }
            });
            if (!isValid) {
                e.preventDefault();
                const firstError = form.querySelector('.form-error');
                if (firstError) { firstError.focus(); firstError.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
            }
        });
    });
    const textareas = document.querySelectorAll('textarea[data-max-length]');
    textareas.forEach(textarea => {
        const maxLength = parseInt(textarea.dataset.maxLength);
        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.style.cssText = 'font-size: 0.75rem; color: var(--color-text-dim); text-align: right; margin-top: 4px;';
        textarea.parentNode.appendChild(counter);
        function updateCounter() {
            const remaining = maxLength - textarea.value.length;
            counter.textContent = `${textarea.value.length} / ${maxLength}`;
            counter.style.color = remaining < 50 ? 'var(--color-warning)' : 'var(--color-text-dim)';
        }
        textarea.addEventListener('input', updateCounter);
        updateCounter();
    });
    console.log('%c\u2328 UNTITLED PUBLISHERS', 'font-size: 24px; font-weight: bold; color: #f97316;');
    console.log('%cThe Future of Publishing', 'font-size: 14px; color: #a1a1aa;');
});