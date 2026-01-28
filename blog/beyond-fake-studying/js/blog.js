/* ========================================
   BEYOND FAKE STUDYING - BLOG JS
   Subscribe, comments, share, mobile nav
   ======================================== */

(function() {
    'use strict';

    // Config
    const COURIER_ENDPOINT = 'https://email-bot-server.micaiah-tasks.workers.dev/api/subscribe';
    const LIST_SLUG = 'beyond-fake-studying';

    // ========================================
    // Mobile Navigation
    // ========================================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // ========================================
    // Subscribe Forms
    // ========================================
    const subscribeForms = document.querySelectorAll('.subscribe-form');

    subscribeForms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[name="email"]');
            const btn = form.querySelector('button');
            const email = emailInput.value.trim();
            
            if (!email) return;
            
            // Disable form
            btn.disabled = true;
            btn.textContent = 'Subscribing...';
            
            try {
                const res = await fetch(COURIER_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: email,
                        list: LIST_SLUG,
                        source: 'bfs-blog',
                        tags: ['bfs-subscriber']
                    })
                });
                
                const data = await res.json();
                
                if (data.success) {
                    form.innerHTML = '<p class="subscribe-success">✓ Thanks for subscribing! Check your inbox.</p>';
                } else {
                    throw new Error(data.error || 'Something went wrong');
                }
            } catch (err) {
                btn.disabled = false;
                btn.textContent = 'Subscribe';
                alert(err.message || 'Something went wrong. Please try again.');
            }
        });
    });

    // ========================================
    // Share Buttons
    // ========================================
    const shareButtons = document.querySelectorAll('.share-btn');

    shareButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const platform = btn.dataset.platform;
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            
            let shareUrl;
            
            switch (platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'reddit':
                    shareUrl = `https://reddit.com/submit?url=${url}&title=${title}`;
                    break;
                case 'email':
                    shareUrl = `mailto:?subject=${title}&body=${url}`;
                    window.location.href = shareUrl;
                    return;
                case 'copy':
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        const originalText = btn.innerHTML;
                        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
                        setTimeout(() => {
                            btn.innerHTML = originalText;
                        }, 2000);
                    });
                    return;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });

    // ========================================
    // Comments (Simple localStorage for now)
    // ========================================
    const commentForm = document.querySelector('.comment-form');
    const commentsList = document.querySelector('.comments-list');

    if (commentForm && commentsList) {
        const postSlug = window.location.pathname.split('/').filter(Boolean).pop().replace('.html', '');
        const storageKey = `bfs-comments-${postSlug}`;
        
        // Load existing comments
        function loadComments() {
            const comments = JSON.parse(localStorage.getItem(storageKey) || '[]');
            
            if (comments.length === 0) {
                commentsList.innerHTML = '<p class="no-comments">No comments yet. Be the first to share your thoughts!</p>';
                return;
            }
            
            commentsList.innerHTML = comments.map(comment => `
                <div class="comment">
                    <div class="comment-header">
                        <div class="comment-avatar">${comment.name.charAt(0).toUpperCase()}</div>
                        <div>
                            <div class="comment-author">${escapeHtml(comment.name)}</div>
                            <div class="comment-date">${formatDate(comment.date)}</div>
                        </div>
                    </div>
                    <div class="comment-body">
                        <p>${escapeHtml(comment.text)}</p>
                    </div>
                </div>
            `).join('');
            
            // Update count
            const countEl = document.querySelector('.comments-count');
            if (countEl) {
                countEl.textContent = `${comments.length} comment${comments.length !== 1 ? 's' : ''}`;
            }
        }
        
        // Handle form submit
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = commentForm.querySelector('input[name="name"]');
            const emailInput = commentForm.querySelector('input[name="email"]');
            const textInput = commentForm.querySelector('textarea[name="comment"]');
            
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const text = textInput.value.trim();
            
            if (!name || !text) {
                alert('Please enter your name and comment.');
                return;
            }
            
            // Save comment
            const comments = JSON.parse(localStorage.getItem(storageKey) || '[]');
            comments.unshift({
                name,
                email,
                text,
                date: new Date().toISOString()
            });
            localStorage.setItem(storageKey, JSON.stringify(comments));
            
            // Clear form
            nameInput.value = '';
            emailInput.value = '';
            textInput.value = '';
            
            // Reload comments
            loadComments();
        });
        
        // Initial load
        loadComments();
    }

    // ========================================
    // Helpers
    // ========================================
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function formatDate(isoString) {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

})();