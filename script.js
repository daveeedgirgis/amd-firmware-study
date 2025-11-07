// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!event.target.closest('.nav-container')) {
                navMenu.classList.remove('active');
            }
        }
    });

    // Q&A Toggle functionality
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.toggle-icon');

            answer.classList.toggle('show');
            if (icon) {
                icon.classList.toggle('open');
            }
        });
    });

    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Progress tracking
    updateProgress();
});

// Progress tracking system
function updateProgress() {
    const progress = getProgress();
    const progressBars = document.querySelectorAll('.progress-fill');

    if (progressBars.length > 0) {
        progressBars[0].style.width = progress.firmware + '%';
        progressBars[1].style.width = progress.qa + '%';
        progressBars[2].style.width = progress.programming + '%';
        progressBars[3].style.width = progress.debugging + '%';
    }
}

function getProgress() {
    const saved = localStorage.getItem('amd-study-progress');
    if (saved) {
        return JSON.parse(saved);
    }
    return {
        firmware: 0,
        qa: 0,
        programming: 0,
        debugging: 0
    };
}

function updateTopicProgress(topic, percentage) {
    const progress = getProgress();
    progress[topic] = Math.min(100, Math.max(0, percentage));
    localStorage.setItem('amd-study-progress', JSON.stringify(progress));
    updateProgress();
}

// Mark topic as viewed (adds 20% progress)
function markTopicViewed(topic) {
    const progress = getProgress();
    if (progress[topic] < 100) {
        progress[topic] = Math.min(100, progress[topic] + 20);
        localStorage.setItem('amd-study-progress', JSON.stringify(progress));
    }
}

// Quiz functionality
let currentQuestion = 0;
let score = 0;
let quizData = [];

function initQuiz(data) {
    quizData = data;
    currentQuestion = 0;
    score = 0;
    displayQuestion();
}

function displayQuestion() {
    const container = document.getElementById('quiz-container');
    if (!container || currentQuestion >= quizData.length) {
        if (container) showResults();
        return;
    }

    const q = quizData[currentQuestion];
    let html = `
        <div class="quiz-question fade-in">
            <h3>Question ${currentQuestion + 1} of ${quizData.length}</h3>
            <p style="font-size: 1.1rem; margin-bottom: 1rem;">${q.question}</p>
            <ul class="quiz-options">
    `;

    q.options.forEach((option, index) => {
        html += `
            <li class="quiz-option" onclick="selectAnswer(${index})">
                ${option}
            </li>
        `;
    });

    html += `
            </ul>
            <div class="quiz-explanation" id="explanation"></div>
            <button class="btn" onclick="nextQuestion()" id="next-btn" style="display:none; margin-top: 1rem;">
                ${currentQuestion < quizData.length - 1 ? 'Next Question' : 'See Results'}
            </button>
        </div>
    `;

    container.innerHTML = html;
}

function selectAnswer(selectedIndex) {
    const q = quizData[currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    const explanation = document.getElementById('explanation');
    const nextBtn = document.getElementById('next-btn');

    // Disable all options
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });

    // Mark correct and incorrect
    options.forEach((option, index) => {
        if (index === q.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex) {
            option.classList.add('incorrect');
        }
    });

    // Update score
    if (selectedIndex === q.correct) {
        score++;
    }

    // Show explanation
    if (q.explanation) {
        explanation.innerHTML = `<strong>Explanation:</strong> ${q.explanation}`;
        explanation.classList.add('show');
    }

    // Show next button
    nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    displayQuestion();
}

function showResults() {
    const container = document.getElementById('quiz-container');
    const percentage = Math.round((score / quizData.length) * 100);

    let message = '';
    if (percentage >= 90) {
        message = 'Excellent! You\'re ready for the interview!';
    } else if (percentage >= 70) {
        message = 'Good job! Review the topics you missed.';
    } else if (percentage >= 50) {
        message = 'Keep studying! You\'re making progress.';
    } else {
        message = 'Review the study materials and try again.';
    }

    container.innerHTML = `
        <div class="quiz-score fade-in">
            <h2>Quiz Complete!</h2>
            <div class="score-number">${score}/${quizData.length}</div>
            <p style="font-size: 1.2rem; margin: 1rem 0;">${percentage}% Correct</p>
            <p>${message}</p>
            <button class="btn" onclick="location.reload()" style="margin-top: 1rem;">Retake Quiz</button>
            <a href="index.html" class="btn btn-secondary" style="margin-left: 1rem;">Back to Home</a>
        </div>
    `;
}

// Filter functionality for topics
function filterTopics(category) {
    const topics = document.querySelectorAll('.topic-section');
    topics.forEach(topic => {
        if (category === 'all' || topic.dataset.category === category) {
            topic.style.display = 'block';
        } else {
            topic.style.display = 'none';
        }
    });

    // Update active filter button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });
}

// Search functionality
function searchContent(query) {
    const sections = document.querySelectorAll('.topic-section, .qa-item');
    query = query.toLowerCase();

    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(query) || query === '') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}
