// Proverbs Quiz - Quiz Logic & Data
// /js/quiz.js

const questions = [
    {
        title: "The Weight",
        text: "Imagine you're carrying something heavy up a mountain. Who are you most aware of as you climb?",
        answers: [
            { text: "Those walking behind me, watching how I handle it", category: "leader" },
            { text: "The person climbing beside me, sharing the weight", category: "spouse" },
            { text: "The young ones at base camp, waiting to see what I bring back", category: "parent" },
            { text: "Myself—whether I have what it takes to make it", category: "emerging" }
        ]
    },
    {
        title: "The Voice You Miss",
        text: "When you face a hard decision, whose voice do you most wish you could hear?",
        answers: [
            { text: "A mentor who's led through storms and survived", category: "leader" },
            { text: "A partner who knows you completely and still believes in you", category: "spouse" },
            { text: "A parent—the one you had, or the one you wish you'd had", category: "parent" },
            { text: "Your future self, looking back with clarity you don't have yet", category: "emerging" }
        ]
    },
    {
        title: "The Failure That Haunts",
        text: "Which failure would stay with you longest?",
        answers: [
            { text: "Making a decision that harms those who trusted me", category: "leader" },
            { text: "Losing the person who matters most through slow neglect", category: "spouse" },
            { text: "Raising someone who repeats my worst patterns", category: "parent" },
            { text: "Becoming someone I don't respect", category: "emerging" }
        ]
    },
    {
        title: "The Legacy",
        text: "If you could leave only one thing behind, what would it be?",
        answers: [
            { text: "A mission or institution that outlives you", category: "leader" },
            { text: "A marriage that showed people what love actually looks like", category: "spouse" },
            { text: "Children who carry your values into places you'll never go", category: "parent" },
            { text: "A reputation for integrity—even when no one was watching", category: "emerging" }
        ]
    },
    {
        title: "The Battle",
        text: "Which internal tension is most alive in you right now?",
        answers: [
            { text: "The pull between ambition and wisdom—knowing when to push and when to wait", category: "leader" },
            { text: "The gap between the partner you are and the partner you want to be", category: "spouse" },
            { text: "The fear that you're supposed to teach things you're still figuring out", category: "parent" },
            { text: "The uncertainty of becoming—not knowing yet who you'll be when you arrive", category: "emerging" }
        ]
    },
    {
        title: "The Hunger",
        text: "What would ancient wisdom need to speak to for it to actually matter to you?",
        answers: [
            { text: "How to carry authority without being crushed or corrupted by it", category: "leader" },
            { text: "How to love one person well across decades, not just moments", category: "spouse" },
            { text: "How to form someone else's character when you're still working on your own", category: "parent" },
            { text: "How to build a foundation before the storms come", category: "emerging" }
        ]
    }
];

const resultsData = {
    leader: {
        segment: "leader",
        profileName: "The Leader",
        title: "The Weight-Bearer",
        opening: "You've noticed something others try not to see: decisions ripple. A choice you make on a Tuesday reshapes lives you'll never meet. Some people run from this. You walked toward it—or it walked toward you. Either way, you carry it now.\n\nLeadership found you—perhaps before you were ready. And now you live with a question most people never face: how do you wield influence without being deformed by it?",
        sections: [
            { title: "Your strength", content: "You accept the weight. You don't pretend it isn't there. While others debate whether leadership matters, you're already in the room making calls that matter." },
            { title: "Your shadow", content: "You may confuse carrying responsibility with carrying it alone. The leader who never leans eventually breaks. Strength that can't receive looks like strength—until it collapses." },
            { title: "The tension you live in", content: "The people who need you to be certain are the same people who suffer when you're wrong. Confidence is required. Humility is required. And no one teaches you how to hold both." }
        ],
        proverb: {
            quote: "Where there is no counsel, plans fail—but with many advisors, they succeed.",
            interpretation: "Not because you lack wisdom. Because even wisdom needs witnesses. The voice that goes unchallenged eventually goes unexamined. The leader who stops listening has already started falling—they just haven't hit the ground yet."
        },
        whatYouNeed: "Not more strategies. Not more productivity systems. You need ancient patterns for carrying authority without being crushed or corrupted by it. You need permission to be strong and dependent. You need wisdom that's been tested across centuries, not just business cycles.",
        bookPitch: "The Leader's Proverbs was written for those who've discovered what few admit: authority is a heavier gift than it appears. And the only way to carry it well is to know you were never meant to carry it alone."
    },
    father: {
        segment: "father",
        profileName: "The Father",
        title: "The Former",
        opening: "You carry an awareness that most people avoid: small moments shape decades. What you say at the dinner table echoes in boardrooms you'll never enter. The offhand comment becomes the internal voice. The way you handle failure becomes their template for failure. You know this—and the weight of it is both your burden and your gift.\n\nYou're not just raising children. You're forming adults. You're shaping the internal architecture of people who will make decisions long after you're gone.",
        sections: [
            { title: "Your strength", content: "You take the shaping seriously. You're not asleep to what's at stake. While the world tells men that presence is optional, you've refused that lie." },
            { title: "Your shadow", content: "The weight can steal the joy. You may be so focused on forming them well that you forget to simply be with them. The father who's always teaching eventually stops being the father they just want to be around." },
            { title: "The tension you live in", content: "You're supposed to be an example—but you're still becoming. You're supposed to be steady—but you have storms. You're supposed to know the way—but some days you're guessing." }
        ],
        proverb: {
            quote: "Train up a child in the way he should go, and when he is old, he will not depart from it.",
            interpretation: "But notice the precision: the way he should go. Not the way you went. Not the way you wish you'd gone. Not the path that makes sense to you. The path that fits the child in front of you—the one God actually gave you, not the one you imagined."
        },
        whatYouNeed: "Not guilt. Not another list of things you're getting wrong. You need a vision of fatherhood that's ancient enough to be trusted and practical enough to be lived. You need wisdom from men who stood where you stand and didn't flinch.",
        bookPitch: "The Father's Proverbs was written for men who understand that fatherhood isn't a role you perform. It's a weight you carry. And carried well, it becomes the gift your children give their children."
    },
    mother: {
        segment: "mother",
        profileName: "The Mother",
        title: "The Former",
        opening: "You see what others miss: the small cracks that become fault lines, the quiet wounds that never quite heal, the moments that look ordinary but aren't. You carry a vigilance that never fully rests—because you know that formation happens in the margins, not just the milestones.\n\nThe world measures mothers by visible output. You know the real work is invisible: the atmosphere you create, the responses you model, the thousand micro-decisions that shape a soul.",
        sections: [
            { title: "Your strength", content: "You understand that presence is formation. That how you handle your own frustration teaches more than any lecture. That children are always learning, even when—especially when—no one's officially teaching." },
            { title: "Your shadow", content: "The vigilance can become anxiety. The awareness of what's at stake can steal your peace. You may carry responsibility for outcomes that were never yours to control." },
            { title: "The tension you live in", content: "You're shaping them, but you can't control them. You're responsible, but you're not omnipotent. You're supposed to prepare them to leave, while every instinct says protect." }
        ],
        proverb: {
            quote: "She opens her mouth with wisdom, and the teaching of kindness is on her tongue.",
            interpretation: "Notice what's paired: wisdom and kindness. Not wisdom that wounds. Not kindness that avoids truth. The combination that makes words land softly and stay forever—truth delivered in a way that can be received."
        },
        whatYouNeed: "Not more advice from people who've never felt the weight. You need wisdom from women who built households that lasted, who formed children who became adults worth becoming. You need permission to be fierce and tender, strong and surrendered.",
        bookPitch: "The Mother's Proverbs was written for women who know that the hand that shapes the home shapes the future—and who refuse to pretend that's a small thing."
    },
    husband: {
        segment: "husband",
        profileName: "The Husband",
        title: "The Partner",
        opening: "Marriage revealed something you didn't expect: you can share a bed with someone and still be strangers. Proximity isn't intimacy. Ceremony isn't covenant. The wedding was one day. The marriage is ten thousand.\n\nYou've discovered that loving one person across decades is harder than loving the idea of love. It requires a kind of death—to selfishness, to fantasy, to the version of life where you're always the protagonist.",
        sections: [
            { title: "Your strength", content: "You're still here. You haven't bailed on the difficulty. In a culture of easy exits, you've chosen to stay and figure it out." },
            { title: "Your shadow", content: "You may confuse presence with engagement. Staying in the room isn't the same as being in the marriage. Duty can masquerade as love until resentment breaks through." },
            { title: "The tension you live in", content: "You're supposed to lead, but not dominate. Protect, but not control. Be strong, but not unavailable. And no one gave you a map for any of it." }
        ],
        proverb: {
            quote: "He who finds a wife finds a good thing and obtains favor from the Lord.",
            interpretation: "But \"finds\" isn't a one-time event. You don't find a wife at the altar and then stop looking. You find her again every year—changed, grown, weathered. The man who stops discovering his wife has stopped finding her."
        },
        whatYouNeed: "Not tips and tricks. Not \"5 ways to improve your marriage.\" You need a vision of what a marriage can become when it's built on wisdom instead of sentiment. You need ancient patterns for loving one woman well across a lifetime.",
        bookPitch: "The Husband's Proverbs was written for men who've realized that marriage isn't the destination—it's the terrain. And walking it well requires wisdom most men were never given."
    },
    wife: {
        segment: "wife",
        profileName: "The Wife",
        title: "The Partner",
        opening: "You know something the world doesn't want to admit: partnership isn't 50/50. It's 100/100. Two people, fully in, carrying different weights at different times, trading burdens as seasons shift. You've felt the loneliness of carrying more than your share. You've felt the grace of being carried.\n\nMarriage asked more of you than you expected. Not just your time or your body, but your pride. Your assumptions. Your vision of how life was supposed to go.",
        sections: [
            { title: "Your strength", content: "You know that love is a verb before it's a feeling. You've chosen him on days when choosing was hard. That's not weakness—that's the hardest kind of strength." },
            { title: "Your shadow", content: "You may carry resentment for what you've sacrificed without acknowledgment. The unseen labor. The emotional weight. The things you gave up that he never knew you gave up." },
            { title: "The tension you live in", content: "You want to be known fully—but vulnerability is dangerous. You want partnership—but you've been disappointed. You want to trust—but trust has cost you." }
        ],
        proverb: {
            quote: "An excellent wife, who can find? She is far more precious than jewels.",
            interpretation: "But don't hear this as a standard to exhaust yourself reaching. Hear it as a recognition—that what you carry, what you build, what you hold together has incalculable worth. Even when it's invisible. Especially when it's invisible."
        },
        whatYouNeed: "Not advice from women who make it look easy. You need wisdom from women who found ways to be strong without becoming hard, to love without losing themselves, to honor without disappearing.",
        bookPitch: "The Wife's Proverbs was written for women who've discovered that marriage is both the refining fire and the shelter from the storm—and who refuse to pretend it's simple."
    },
    son: {
        segment: "son",
        profileName: "The Son",
        title: "The Becoming",
        opening: "You're in the season of formation—not yet who you'll be, but no longer who you were. This is the most dangerous and most promising time. The choices made here set trajectories that last decades. You sense this, even if no one's told you directly.\n\nThe world offers you a thousand voices. Everyone has an opinion about who you should become. But the noise is so loud you can barely hear yourself think—let alone discern which voices are worth following.",
        sections: [
            { title: "Your strength", content: "You're still open. The concrete hasn't set. You can still be shaped by wisdom rather than just by accident. This is a superpower most older men would trade everything to get back." },
            { title: "Your shadow", content: "The openness that makes you teachable also makes you vulnerable. Not every confident speaker deserves your ear. Not every path that looks exciting leads somewhere good. Discernment is the skill you need most and have least." },
            { title: "The tension you live in", content: "You want guidance but resent control. You want freedom but know you're not ready for all of it. You want to become a man, but no one's clearly shown you what that means." }
        ],
        proverb: {
            quote: "The fear of the Lord is the beginning of knowledge—but fools despise wisdom and instruction.",
            interpretation: "Note what's really being said: the difference between wisdom and foolishness isn't intelligence. It's posture. The fool isn't stupid—he's unteachable. He thinks he already knows. Stay teachable. The moment you stop being a student, you start becoming a cautionary tale."
        },
        whatYouNeed: "Not more hot takes from influencers who peaked at 25. You need wisdom that's survived centuries. You need words from men who built lives worth living, who avoided the traps, who became someone worth becoming.",
        bookPitch: "The Son's Proverbs was written for young men in exactly this window—the narrow season when the right words can alter everything, and the wrong ones can set a course toward regret."
    },
    daughter: {
        segment: "daughter",
        profileName: "The Daughter",
        title: "The Becoming",
        opening: "You're being formed—by everything. By the voices you let in, the images you absorb, the stories you believe about who you're supposed to be. The world has strong opinions about your worth, your body, your future. Most of them are wrong.\n\nThis is the season where the foundations get laid. What you believe about yourself now becomes the floor you stand on—or the ceiling that holds you down—for decades to come.",
        sections: [
            { title: "Your strength", content: "You're still becoming. Nothing is final yet. The lies you've believed can still be unlearned. The patterns that don't serve you can still be broken. You have time—but not unlimited time." },
            { title: "Your shadow", content: "You may measure yourself by metrics that don't matter. Comparison is a thief, and it's robbing you daily. The curated lives you see aren't real—but they still leave marks." },
            { title: "The tension you live in", content: "You want to be seen, but you're afraid of being truly known. You want to be strong, but the world punishes strong women in subtle ways. You want guidance, but so much of what's offered feels hollow or controlling." }
        ],
        proverb: {
            quote: "Charm is deceptive, and beauty is fleeting, but a woman who fears the Lord is to be praised.",
            interpretation: "This isn't about rejecting beauty. It's about refusing to build your identity on a foundation that's guaranteed to shift. Charm fades. Beauty changes. But character, wisdom, depth—these compound with time. The women who understood this early built lives that still inspire."
        },
        whatYouNeed: "Not another influencer telling you to \"be yourself\" without helping you understand who that self should be. You need wisdom from women who walked through fire and came out refined. You need ancient words that cut through modern noise.",
        bookPitch: "The Daughter's Proverbs was written for young women who sense that something deeper is available—and who are brave enough to pursue it before the world tells them it's too late."
    }
};

// Beehiiv configuration
const BEEHIIV_PUBLICATION_ID = 'a109a626-e547-45cb-aced-623e8bd821fc';
const BEEHIIV_API_KEY = 'pwno59BtJMBIlPrLyG3NPwq10eOJXd8TuAanmm3YWX0R5nED1uo3DWB7af9jkw0f';

// State
let currentQuestion = 0;
let answers = [];
let gender = null;
let finalSegment = null;

// DOM Elements
const progressContainer = document.getElementById('progressContainer');
const progressBar = document.getElementById('progressBar');

// Functions
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function updateProgress(step) {
    const progress = (step / 8) * 100;
    progressBar.style.width = progress + '%';
}

function startQuiz() {
    progressContainer.style.display = 'block';
    showQuestion(0);
}

function showQuestion(index) {
    currentQuestion = index;
    const question = questions[index];
    
    document.getElementById('question-number').textContent = `Question ${index + 1} of 6`;
    document.getElementById('question-title').textContent = question.title;
    document.getElementById('question-text').textContent = question.text;
    
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.text;
        btn.onclick = () => selectAnswer(answer.category);
        answersContainer.appendChild(btn);
    });
    
    showScreen('question-screen');
    updateProgress(index + 1);
}

function selectAnswer(category) {
    answers.push(category);
    
    if (currentQuestion < questions.length - 1) {
        setTimeout(() => showQuestion(currentQuestion + 1), 150);
    } else {
        setTimeout(() => {
            showScreen('gender-screen');
            updateProgress(7);
        }, 150);
    }
}

function selectGender(selectedGender) {
    gender = selectedGender;
    showScreen('email-screen');
    updateProgress(8);
}

function calculateResult() {
    const counts = { leader: 0, spouse: 0, parent: 0, emerging: 0 };
    answers.forEach(answer => counts[answer]++);
    
    let maxCategory = 'leader';
    let maxCount = counts.leader;
    
    for (const [category, count] of Object.entries(counts)) {
        if (count > maxCount) {
            maxCount = count;
            maxCategory = category;
        }
    }
    
    // Handle ties using Q3 (index 2) as tiebreaker
    const tiedCategories = Object.entries(counts)
        .filter(([_, count]) => count === maxCount)
        .map(([category]) => category);
    
    if (tiedCategories.length > 1) {
        maxCategory = answers[2];
    }
    
    // Map to final segment based on gender
    const segmentMap = {
        leader: 'leader',
        spouse: gender === 'male' ? 'husband' : 'wife',
        parent: gender === 'male' ? 'father' : 'mother',
        emerging: gender === 'male' ? 'son' : 'daughter'
    };
    
    return segmentMap[maxCategory];
}

async function submitToBeehiiv(email, firstName, segment, quizResult) {
    try {
        // Build custom fields array - only include fields that have values
        const customFields = [
            { name: 'segment', value: segment },
            { name: 'quiz_profile', value: quizResult }
        ];
        
        // Only add first_name if provided (uses Beehiiv's preset field)
        if (firstName) {
            customFields.push({ name: 'first_name', value: firstName });
        }
        
        const response = await fetch(`https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${BEEHIIV_API_KEY}`
            },
            body: JSON.stringify({
                email: email,
                reactivate_existing: true,
                send_welcome_email: true,
                utm_source: 'proverbs-quiz',
                utm_medium: 'quiz',
                utm_campaign: 'proverbs-library-launch',
                referring_site: 'https://untitledpublishers.com/proverbs-quiz/',
                custom_fields: customFields
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Beehiiv API error:', response.status, errorData);
        }
        
        return response.ok;
    } catch (error) {
        console.error('Beehiiv submission error:', error);
        return false;
    }
}

async function submitEmail(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const submitBtn = document.getElementById('submit-btn');
    const loading = document.getElementById('loading');
    const emailError = document.getElementById('email-error');
    const submitError = document.getElementById('submit-error');
    
    emailError.classList.remove('show');
    submitError.classList.remove('show');
    
    const email = emailInput.value.trim();
    if (!email || !email.includes('@')) {
        emailError.classList.add('show');
        return;
    }
    
    finalSegment = calculateResult();
    const result = resultsData[finalSegment];
    const name = nameInput.value.trim() || null;
    
    submitBtn.style.display = 'none';
    loading.classList.add('show');
    
    try {
        // Submit to BOTH services in parallel
        const [emailBotResponse, beehiivSuccess] = await Promise.all([
            // 1. Email Bot Server (backup/internal tracking)
            fetch('https://email-bot-server.micaiah-tasks.workers.dev/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    source: 'proverbs-library',
                    funnel: 'proverbs-quiz',
                    segment: finalSegment,
                    quiz_result: {
                        answers: answers,
                        profile: result.title
                    },
                    tags: ['quiz-taker', finalSegment]
                })
            }),
            
            // 2. Beehiiv (email platform)
            submitToBeehiiv(email, name, finalSegment, result.title)
        ]);
        
        // Show results if at least one succeeded
        if (emailBotResponse.ok || beehiivSuccess) {
            showResults(result);
        } else {
            throw new Error('Both services failed');
        }
        
    } catch (error) {
        console.error('Submit error:', error);
        submitBtn.style.display = 'block';
        loading.classList.remove('show');
        submitError.classList.add('show');
    }
}

function showResults(result) {
    document.getElementById('results-profile-name').textContent = result.profileName;
    document.getElementById('results-title').textContent = result.title;
    
    const contentHtml = `
        <div class="results-opening">${result.opening.replace(/\n\n/g, '</p><p style="margin-top:1rem">').replace(/^/, '<p>').replace(/$/, '</p>')}</div>
        ${result.sections.map(section => `
            <div class="results-section">
                <h3 class="results-section-title">${section.title}</h3>
                <p>${section.content}</p>
            </div>
        `).join('')}
        <div class="results-section">
            <h3 class="results-section-title">Your first proverb</h3>
            <div class="results-proverb">
                <blockquote>"${result.proverb.quote}"</blockquote>
                <p>${result.proverb.interpretation}</p>
            </div>
        </div>
        <div class="results-section">
            <h3 class="results-section-title">What you need</h3>
            <p>${result.whatYouNeed}</p>
        </div>
        <div class="results-section">
            <p><strong>${result.bookPitch}</strong></p>
        </div>
    `;
    
    document.getElementById('results-content').innerHTML = contentHtml;
    
    progressContainer.style.display = 'none';
    showScreen('results-screen');
    window.scrollTo(0, 0);
}
