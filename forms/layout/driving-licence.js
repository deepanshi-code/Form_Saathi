// Page images: Form 2 (CMVR, 1989) "Form of application for learner's licence or driving licence ..." (parivahan.gov.in, PDF dated 11-07-2022), pages 1, 2, 3, 4, 5 of the official PDF (https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-2.pdf).
// This is the form used today for a new (permanent) driving licence; the old separate Form 4 is not in parivahan.gov.in's list of downloadable forms.
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["driving-licence"] = {
  pages: ["forms/img/driving-licence-1.jpg", "forms/img/driving-licence-2.jpg", "forms/img/driving-licence-3.jpg", "forms/img/driving-licence-4.jpg", "forms/img/driving-licence-5.jpg"],
  spots: [
    [{ page: 0, x: 20.26, y: 24.62, w: 18.3, h: 7.7 }],   // To, The Licencing Authority
    [{ page: 0, x: 20.42, y: 33.8, w: 59.15, h: 18.75 }],   // Services applying for
    [{ page: 0, x: 20.42, y: 53.4, w: 59.15, h: 25.95 }],   // 1. Class of Vehicles (COV)
    [{ page: 1, x: 20.42, y: 33.75, w: 59.15, h: 7.75 }],   // Aadhaar
    [{ page: 1, x: 20.42, y: 41.6, w: 59.15, h: 3.6 }, { page: 1, x: 20.42, y: 59.4, w: 59.15, h: 4.0 }],   // 2 & 3. Name and parent/husband/guardian
    [{ page: 1, x: 20.42, y: 45.2, w: 59.15, h: 2.65 }, { page: 1, x: 20.42, y: 47.9, w: 59.15, h: 3.4 }],   // Date of birth, identification mark, gender
    [{ page: 1, x: 20.42, y: 51.4, w: 59.15, h: 7.6 }],   // Education, blood group, mobile, email
    [{ page: 1, x: 20.42, y: 63.8, w: 59.15, h: 22.1 }, { page: 2, x: 20.42, y: 15.95, w: 59.15, h: 2.3 }],   // 4. Address
    [{ page: 2, x: 20.42, y: 19.1, w: 59.15, h: 24.3 }],   // 5. Driving school (transport category)
    [{ page: 2, x: 20.42, y: 43.6, w: 59.15, h: 14.1 }],   // 6. Your learner's licence details
    [{ page: 2, x: 20.42, y: 58.2, w: 59.15, h: 2.0 }, { page: 4, x: 20.42, y: 36.4, w: 59.15, h: 51.3 }],   // 7. Documents attached (Annexure)
    [{ page: 3, x: 20.42, y: 15.9, w: 59.15, h: 40.6 }, { page: 3, x: 20.42, y: 56.6, w: 59.15, h: 15.6 }],   // Self-declaration of fitness (and parent consent for a minor)
    [{ page: 0, x: 67.48, y: 24.12, w: 12.09, h: 8.84 }, { page: 2, x: 20.42, y: 61.3, w: 59.15, h: 9.9 }],   // Photo, declaration and signature
    [{ page: 4, x: 20.42, y: 27.3, w: 59.15, h: 6.0 }]   // Driving test (office use)
  ]
};
