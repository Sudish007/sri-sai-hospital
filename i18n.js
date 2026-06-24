// ===== Hindi-English Translation System =====
const translations = {
    hi: {
        // Navbar
        "Home": "होम",
        "About": "हमारे बारे में",
        "Doctors": "डॉक्टर्स",
        "Services": "सेवाएँ",
        "Consultation": "परामर्श",
        "Contact": "संपर्क",
        "Book Now": "अभी बुक करें",

        // Hero
        "Government of Bihar Recognized": "बिहार सरकार द्वारा मान्यता प्राप्त",
        "Caring for Life,": "जीवन की देखभाल,",
        "Healing with Heart": "दिल से उपचार",
        "Expert Ayurvedic & Modern Healthcare — Gynaecology, Child Care & General Medicine under one trusted roof.": "विशेषज्ञ आयुर्वेदिक एवं आधुनिक स्वास्थ्य सेवा — स्त्री रोग, शिशु देखभाल एवं सामान्य चिकित्सा एक भरोसेमंद छत के नीचे।",
        "Book Appointment": "अपॉइंटमेंट बुक करें",
        "Online Consultation": "ऑनलाइन परामर्श",
        "Happy Patients Trust Us": "खुश मरीज़ हम पर भरोसा करते हैं",
        "AYUSH Certified": "आयुष प्रमाणित",
        "24/7 Emergency": "24/7 आपातकालीन",
        "4.9 Rating": "4.9 रेटिंग",

        // Stats
        "Expert Doctors": "विशेषज्ञ डॉक्टर",
        "Patients Treated": "मरीज़ों का इलाज",
        "Years Experience": "वर्षों का अनुभव",
        "% Satisfaction": "% संतुष्टि",

        // About
        "About Us": "हमारे बारे में",
        "A Legacy of": "एक विरासत",
        "Healing & Care": "उपचार और देखभाल",
        "Sri Sai Hospital combines ancient Ayurvedic wisdom with modern medical practices for comprehensive family healthcare.": "श्री साईं अस्पताल प्राचीन आयुर्वेदिक ज्ञान को आधुनिक चिकित्सा पद्धतियों के साथ जोड़कर संपूर्ण पारिवारिक स्वास्थ्य सेवा प्रदान करता है।",
        "Ayurvedic Excellence": "आयुर्वेदिक उत्कृष्टता",
        "Government-recognized AYUSH practices rooted in ancient healing traditions.": "सरकार द्वारा मान्यता प्राप्त आयुष पद्धतियाँ, प्राचीन उपचार परंपराओं पर आधारित।",
        "Modern Diagnostics": "आधुनिक निदान",
        "State-of-the-art equipment and treatment protocols for best outcomes.": "सर्वोत्तम परिणामों के लिए अत्याधुनिक उपकरण और उपचार प्रोटोकॉल।",
        "Compassionate Care": "सहानुभूतिपूर्ण देखभाल",
        "Patient-first approach with personalized treatment and follow-up care.": "व्यक्तिगत उपचार और फॉलो-अप देखभाल के साथ मरीज़-प्रथम दृष्टिकोण।",
        "Govt. Recognized": "सरकार मान्यता प्राप्त",
        "Fully licensed by the Government of Bihar for quality healthcare delivery.": "गुणवत्तापूर्ण स्वास्थ्य सेवा के लिए बिहार सरकार द्वारा पूर्ण रूप से लाइसेंस प्राप्त।",

        // Doctors
        "Our Experts": "हमारे विशेषज्ञ",
        "Meet Our": "मिलिए हमारे",
        "Specialists": "विशेषज्ञों से",
        "Government of Bihar Recognized Doctors": "बिहार सरकार द्वारा मान्यता प्राप्त डॉक्टर",
        "Gynaecologist | Medical Officer AYUSH, Govt. of Bihar": "स्त्री रोग विशेषज्ञ | चिकित्सा अधिकारी आयुष, बिहार सरकार",
        "Medical Officer AYUSH, Govt. of Bihar": "चिकित्सा अधिकारी आयुष, बिहार सरकार",
        "Expert in Ayurvedic medicine & treatment and Gynaecology. Specializing in women's health with deep expertise in prenatal care, fertility treatments, and holistic women's wellness programs.": "आयुर्वेदिक चिकित्सा और स्त्री रोग में विशेषज्ञ। प्रसव पूर्व देखभाल, प्रजनन उपचार, और समग्र महिला स्वास्थ्य कार्यक्रमों में गहरी विशेषज्ञता।",
        "Expert in child healthcare, immunization programs, growth monitoring, nutrition guidance, and comprehensive general medicine for all age groups.": "बाल स्वास्थ्य, टीकाकरण, विकास निगरानी, पोषण मार्गदर्शन, और सभी आयु वर्गों के लिए सामान्य चिकित्सा में विशेषज्ञ।",
        "Ayurvedic Medicine & Treatment": "आयुर्वेदिक चिकित्सा और उपचार",
        "Prenatal & Postnatal Care": "प्रसव पूर्व और प्रसवोत्तर देखभाल",
        "Fertility Consultation": "प्रजनन परामर्श",
        "Gynaecology": "स्त्री रोग",
        "Child Immunization": "बाल टीकाकरण",
        "Growth Monitoring": "विकास निगरानी",
        "General Medicine": "सामान्य चिकित्सा",
        "Book Visit": "विज़िट बुक करें",
        "Online": "ऑनलाइन",

        // Services
        "What We": "हम क्या",
        "Offer": "प्रदान करते हैं",
        "Comprehensive medical care from consultation to recovery.": "परामर्श से लेकर रिकवरी तक व्यापक चिकित्सा देखभाल।",
        "Complete women's health including prenatal, postnatal, and reproductive care.": "प्रसव पूर्व, प्रसवोत्तर और प्रजनन देखभाल सहित संपूर्ण महिला स्वास्थ्य।",
        "Child Care": "शिशु देखभाल",
        "Paediatric care, vaccinations, growth monitoring, and nutrition guidance.": "बाल चिकित्सा, टीकाकरण, विकास निगरानी और पोषण मार्गदर्शन।",
        "Ayurvedic Treatment": "आयुर्वेदिक उपचार",
        "Traditional AYUSH therapies for chronic conditions, immunity, and wellness.": "पुरानी बीमारियों, प्रतिरक्षा और स्वास्थ्य के लिए पारंपरिक आयुष चिकित्सा।",
        "Comprehensive diagnosis and treatment for common and complex conditions.": "सामान्य और जटिल बीमारियों के लिए व्यापक निदान और उपचार।",
        "Virtual consultations from the comfort of your home via video call.": "वीडियो कॉल के माध्यम से घर बैठे आरामदायक ऑनलाइन परामर्श।",
        "Emergency Services": "आपातकालीन सेवाएँ",
        "Round-the-clock emergency care and ambulance services available 24/7.": "24/7 उपलब्ध आपातकालीन देखभाल और एम्बुलेंस सेवाएँ।",
        "Book Now": "अभी बुक करें",
        "Learn More": "और जानें",

        // Consultation
        "Choose Your": "अपना चुनें",
        "Mode": "माध्यम",
        "Flexible options — visit us in person or consult from home.": "लचीले विकल्प — व्यक्तिगत रूप से मिलें या घर से परामर्श करें।",
        "In-Person": "व्यक्तिगत",
        "Most Popular": "सबसे लोकप्रिय",
        "Offline Consultation": "ऑफ़लाइन परामर्श",
        "Visit Sri Sai Hospital for face-to-face consultation.": "आमने-सामने परामर्श के लिए श्री साईं अस्पताल आएँ।",
        "Physical examination": "शारीरिक जाँच",
        "Immediate treatment": "तत्काल उपचार",
        "Lab tests on-site": "स्थल पर लैब परीक्षण",
        "Prescription & medicines": "नुस्खा और दवाइयाँ",
        "Consultation Fee": "परामर्श शुल्क",
        "Book Offline Visit": "ऑफ़लाइन विज़िट बुक करें",
        "Online Consultation": "ऑनलाइन परामर्श",
        "Connect with doctors via video call from anywhere.": "कहीं से भी वीडियो कॉल के माध्यम से डॉक्टरों से जुड़ें।",
        "HD Video consultation": "HD वीडियो परामर्श",
        "Digital prescription": "डिजिटल नुस्खा",
        "Follow-up support": "फॉलो-अप सहायता",
        "No travel needed": "यात्रा की आवश्यकता नहीं",
        "Booking Fee": "बुकिंग शुल्क",
        "Book Online Consult": "ऑनलाइन परामर्श बुक करें",

        // Booking
        "Appointment": "अपॉइंटमेंट",
        "Book Your": "अपना बुक करें",
        "Fill in details and pay via UPI to confirm your booking.": "बुकिंग पुष्टि के लिए विवरण भरें और UPI से भुगतान करें।",
        "Details": "विवरण",
        "Payment": "भुगतान",
        "Confirmed": "पुष्टि",
        "Patient Name *": "मरीज़ का नाम *",
        "Phone Number *": "फ़ोन नंबर *",
        "Email (Optional)": "ईमेल (वैकल्पिक)",
        "Age *": "उम्र *",
        "Select Doctor *": "डॉक्टर चुनें *",
        "Consultation Type *": "परामर्श प्रकार *",
        "Preferred Date *": "पसंदीदा तिथि *",
        "Preferred Time *": "पसंदीदा समय *",
        "Symptoms / Reason": "लक्षण / कारण",
        "Proceed to Payment": "भुगतान की ओर बढ़ें",
        "Secure UPI Payment": "सुरक्षित UPI भुगतान",
        "Amount to Pay": "भुगतान राशि",
        "Pay via UPI ID": "UPI ID से भुगतान करें",
        "Quick Pay with Apps": "ऐप्स से तुरंत भुगतान",
        "After payment, enter the UPI Transaction ID below to confirm.": "भुगतान के बाद, पुष्टि के लिए नीचे UPI ट्रांजैक्शन ID दर्ज करें।",
        "Transaction ID *": "ट्रांजैक्शन ID *",
        "Confirm Booking": "बुकिंग पुष्टि करें",
        "Back to Form": "फॉर्म पर वापस",

        // Testimonials
        "Testimonials": "प्रशंसापत्र",
        "Patient": "मरीज़ों की",
        "Stories": "कहानियाँ",
        "\"Dr. Sarita Singh provided exceptional care during my pregnancy. Her blend of Ayurvedic wisdom and modern medicine gave me complete confidence.\"": "\"डॉ. सरिता सिंह ने मेरी गर्भावस्था के दौरान असाधारण देखभाल प्रदान की। आयुर्वेदिक ज्ञान और आधुनिक चिकित्सा के उनके मिश्रण ने मुझे पूर्ण विश्वास दिया।\"",
        "Maternity Care": "मातृत्व देखभाल",
        "\"Dr. Angad is wonderful with children. My son felt completely comfortable. The care and attention to detail is remarkable!\"": "\"डॉ. अंगद बच्चों के साथ बहुत अच्छे हैं। मेरा बेटा पूरी तरह सहज महसूस करता था। देखभाल और विस्तार पर ध्यान उल्लेखनीय है!\"",
        "\"Online consultation was incredibly convenient. Got proper diagnosis and digital prescription without traveling. Highly recommended!\"": "\"ऑनलाइन परामर्श अविश्वसनीय रूप से सुविधाजनक था। बिना यात्रा के उचित निदान और डिजिटल नुस्खा मिला। अत्यधिक अनुशंसित!\"",

        // Contact
        "Get in": "संपर्क",
        "Touch": "करें",
        "Visit Us": "हमसे मिलें",
        "Call Us": "कॉल करें",
        "Working Hours": "कार्य समय",
        "Mon - Sat: 9:00 AM - 6:00 PM": "सोम - शनि: सुबह 9:00 - शाम 6:00",
        "Sunday: Emergency Only": "रविवार: केवल आपातकाल",
        "Email Us": "ईमेल करें",

        // Footer
        "Providing quality healthcare with a blend of Ayurvedic wisdom and modern medicine. Your health is our priority.": "आयुर्वेदिक ज्ञान और आधुनिक चिकित्सा के मिश्रण से गुणवत्तापूर्ण स्वास्थ्य सेवा। आपका स्वास्थ्य हमारी प्राथमिकता है।",
        "Quick Links": "त्वरित लिंक",
        "About Us": "हमारे बारे में",
        "Our Doctors": "हमारे डॉक्टर",
        "Book Appointment": "अपॉइंटमेंट बुक करें",
        "Emergency": "आपातकाल",
        "Available 24/7 for emergencies": "आपातकाल के लिए 24/7 उपलब्ध",

        // Modal
        "Booking Confirmed! 🎉": "बुकिंग पुष्टि! 🎉",
        "Your appointment has been booked successfully. A confirmation will be sent to your phone.": "आपकी अपॉइंटमेंट सफलतापूर्वक बुक हो गई है। पुष्टि आपके फ़ोन पर भेजी जाएगी।",
        "Done": "हो गया",

        // WhatsApp
        "Chat with us": "हमसे बात करें"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    applyTranslations();
    const btn = document.getElementById('langToggle');
    btn.querySelector('span').textContent = currentLang === 'en' ? 'हिंदी' : 'English';
    localStorage.setItem('srisai-lang', currentLang);
}

function applyTranslations() {
    if (currentLang === 'en') {
        // Restore original text
        document.querySelectorAll('[data-original]').forEach(el => {
            el.textContent = el.dataset.original;
        });
        return;
    }

    const dict = translations.hi;
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    while (walker.nextNode()) {
        const node = walker.currentNode;
        const text = node.textContent.trim();
        if (text && dict[text]) {
            const parent = node.parentElement;
            if (!parent.dataset.original) {
                parent.dataset.original = parent.textContent.trim();
            }
            node.textContent = node.textContent.replace(text, dict[text]);
        }
    }
}

// Load saved preference
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('srisai-lang');
    if (saved === 'hi') {
        currentLang = 'hi';
        const btn = document.getElementById('langToggle');
        if (btn) btn.querySelector('span').textContent = 'English';
        setTimeout(applyTranslations, 100);
    }
});
