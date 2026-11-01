// Page images: Form 2 (CMVR, 1989) "Form of application for learner's licence or driving licence ..." (parivahan.gov.in, PDF dated 11-07-2022), pages 1, 2, 3, 4, 5 of the official PDF (https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-2.pdf).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["learner-licence"] = {
  pages: ["forms/img/learner-licence-1.jpg", "forms/img/learner-licence-2.jpg", "forms/img/learner-licence-3.jpg", "forms/img/learner-licence-4.jpg", "forms/img/learner-licence-5.jpg"],
  spots: [
    [{ page: 0, x: 20.26, y: 24.62, w: 18.3, h: 7.7 }],   // To, The Licencing Authority
    [{ page: 0, x: 20.42, y: 33.59, w: 59.15, h: 18.94 }],   // Services applying for
    [{ page: 0, x: 20.42, y: 53.16, w: 59.15, h: 26.14 }],   // 1. Class of Vehicles (COV)
    [{ page: 1, x: 20.42, y: 33.59, w: 59.15, h: 7.7 }],   // Aadhaar number (or Aadhaar application number)
    [{ page: 1, x: 20.42, y: 41.29, w: 59.15, h: 3.98 }, { page: 1, x: 20.42, y: 59.22, w: 59.15, h: 4.04 }],   // 2. Name and "Son/wife/daughter of"
    [{ page: 1, x: 20.42, y: 45.27, w: 59.15, h: 1.33 }, { page: 1, x: 20.42, y: 47.85, w: 59.15, h: 3.41 }],   // Date of birth and gender
    [{ page: 1, x: 20.42, y: 46.59, w: 59.15, h: 1.26 }],   // Identification mark
    [{ page: 1, x: 20.42, y: 51.26, w: 59.15, h: 7.58 }],   // Blood group, education, mobile and email
    [{ page: 1, x: 20.42, y: 63.76, w: 59.15, h: 22.1 }, { page: 2, x: 20.42, y: 15.91, w: 59.15, h: 2.27 }],   // 4. Address
    [{ page: 2, x: 20.42, y: 19.07, w: 59.15, h: 38.38 }],   // 5 & 6. Driving school and existing licence
    [{ page: 4, x: 19.93, y: 36.36, w: 60.13, h: 28.41 }, { page: 2, x: 19.93, y: 58.21, w: 60.13, h: 2.02 }],   // 7. Proof of address and age (Annexure)
    [{ page: 3, x: 19.93, y: 15.91, w: 60.13, h: 36.11 }],   // Self-Declaration as to Physical Fitness (and medical certificate)
    [{ page: 3, x: 19.93, y: 56.44, w: 60.13, h: 15.78 }],   // Parent/guardian declaration (if the applicant is a minor)
    [{ page: 0, x: 67.48, y: 24.12, w: 12.09, h: 8.84 }, { page: 2, x: 19.93, y: 61.24, w: 60.13, h: 9.97 }]   // Photograph, declaration and signature
  ]
};
