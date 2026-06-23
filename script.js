// ===== Preloader =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 800);
});

// ===== Navbar Scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Mobile Nav =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// ===== Animated Counter =====
function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = Math.floor(current).toLocaleString();
        }, 16);
    });
}

// Trigger counters when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsBar = document.querySelector('.stats-bar');
if (statsBar) statsObserver.observe(statsBar);

// ===== Set min date =====
const dateInput = document.getElementById('date');
if (dateInput) {
    dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
}

// ===== Booking Form =====
const bookingForm = document.getElementById('bookingForm');
const paymentSection = document.getElementById('paymentSection');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const phone = document.getElementById('phone').value;
    if (phone.length !== 10) {
        showToast('Please enter a valid 10-digit phone number.', 'error');
        return;
    }

    const consultType = document.getElementById('consultType').value;
    const amount = consultType === 'online' ? '₹200' : '₹300';
    document.querySelector('.pay-amount').textContent = amount;

    bookingForm.style.display = 'none';
    paymentSection.style.display = 'block';

    // Update step indicators
    document.getElementById('step1Indicator').classList.remove('active');
    document.getElementById('step2Indicator').classList.add('active');

    paymentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function goBackToForm() {
    paymentSection.style.display = 'none';
    bookingForm.style.display = 'block';
    document.getElementById('step2Indicator').classList.remove('active');
    document.getElementById('step1Indicator').classList.add('active');
}

// ===== UPI Payment =====
const UPI_ID = 'srisaihospital@upi';
const MERCHANT_NAME = 'Sri Sai Hospital';

function getPaymentAmount() {
    const consultType = document.getElementById('consultType').value;
    return consultType === 'online' ? 200 : 300;
}

function payWithUPI(app) {
    const amount = getPaymentAmount();
    const patientName = document.getElementById('patientName').value;
    const note = `Consultation booking for ${patientName}`;
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
    window.location.href = upiLink;
    setTimeout(() => {
        showToast(`Pay ₹${amount} to UPI: ${UPI_ID}`, 'info');
    }, 2000);
}

function copyUPI() {
    navigator.clipboard.writeText(UPI_ID).then(() => {
        const btn = document.querySelector('.copy-btn');
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.style.background = 'var(--accent)';
        showToast('UPI ID copied!', 'success');
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-copy"></i>';
            btn.style.background = '';
        }, 2000);
    }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = UPI_ID;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast('UPI ID copied!', 'success');
    });
}

// ===== Confirm Booking =====
function confirmBooking() {
    const transactionId = document.getElementById('transactionId').value.trim();
    if (!transactionId) {
        showToast('Please enter your UPI Transaction ID.', 'error');
        return;
    }
    if (transactionId.length < 6) {
        showToast('Please enter a valid transaction ID.', 'error');
        return;
    }

    const patientName = document.getElementById('patientName').value;
    const phone = document.getElementById('phone').value;
    const doctor = document.getElementById('doctor');
    const doctorName = doctor.options[doctor.selectedIndex].text;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time');
    const timeSlot = time.options[time.selectedIndex].text;
    const consultType = document.getElementById('consultType').value;
    const amount = consultType === 'online' ? '₹200' : '₹300';

    const modal = document.getElementById('successModal');
    const details = document.getElementById('bookingDetails');
    details.innerHTML = `
        <p><strong>Patient:</strong> ${patientName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Doctor:</strong> ${doctorName}</p>
        <p><strong>Date:</strong> ${formatDate(date)}</p>
        <p><strong>Time:</strong> ${timeSlot}</p>
        <p><strong>Mode:</strong> ${consultType === 'online' ? 'Online Video' : 'Offline Visit'}</p>
        <p><strong>Paid:</strong> ${amount}</p>
        <p><strong>Txn ID:</strong> ${transactionId}</p>
    `;

    // Update steps
    document.getElementById('step2Indicator').classList.remove('active');
    document.getElementById('step3Indicator').classList.add('active');

    modal.classList.add('active');
    bookingForm.reset();
    paymentSection.style.display = 'none';
    bookingForm.style.display = 'block';

    // Reset steps
    setTimeout(() => {
        document.getElementById('step3Indicator').classList.remove('active');
        document.getElementById('step1Indicator').classList.add('active');
    }, 1000);
}

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-IN', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
}

function closeModal() {
    document.getElementById('successModal').classList.remove('active');
}

document.getElementById('successModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});

// ===== Toast Notifications =====
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i> ${message}`;
    
    // Style
    Object.assign(toast.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#00b894' : type === 'error' ? '#e74c3c' : '#3282b8',
        color: 'white',
        padding: '14px 24px',
        borderRadius: '12px',
        fontSize: '0.9rem',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        zIndex: '10000',
        boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
        animation: 'slideIn 0.3s ease',
        fontFamily: "'DM Sans', sans-serif"
    });

    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(20px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== Scroll Animations =====
const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.about-card, .doctor-card, .service-card, .consult-card, .testimonial-card, .contact-card, .stat-item').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s`;
    animObserver.observe(el);
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// Add slideIn keyframe
const style = document.createElement('style');
style.textContent = `@keyframes slideIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }`;
document.head.appendChild(style);
