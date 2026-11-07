// Page images: IMM 5257 (09-2023) E, "Application for Visitor Visa (Temporary Resident Visa)", official IRCC PDF
// https://www.canada.ca/content/dam/ircc/documents/pdf/english/kits/forms/imm5257/01-11-2026/imm5257e.pdf
// The PDF is a dynamic (XFA) form that shows only a "Please wait..." page outside Adobe Reader, so the five pages were
// drawn from the form's own XFA layout with pdf.js and printed to PDF; drop-down arrows and some highlighting from
// Adobe Reader are not shown. The "JavaScript has been disabled" notice was hidden.
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["canada-visitor-visa"] = {
  pages: ["forms/img/canada-visitor-visa-1.jpg", "forms/img/canada-visitor-visa-2.jpg", "forms/img/canada-visitor-visa-3.jpg", "forms/img/canada-visitor-visa-4.jpg", "forms/img/canada-visitor-visa-5.jpg"],
  spots: [
    [{ page: 0, x: 3.48, y: 21.68, w: 84.87, h: 3.23 }],   // UCI, service language, visa requested
    [{ page: 0, x: 3.48, y: 27.68, w: 92.99, h: 5.82 }, { page: 1, x: 3.48, y: 3.58, w: 92.99, h: 3.31 }, { page: 2, x: 3.48, y: 3.58, w: 92.99, h: 3.31 }, { page: 3, x: 3.48, y: 3.58, w: 92.99, h: 3.31 }, { page: 4, x: 3.48, y: 3.58, w: 92.99, h: 3.31 }],   // Full name (and Applicant Name / Date of Birth header on pages 2-5)
    [{ page: 0, x: 3.48, y: 33.6, w: 92.99, h: 7.79 }],   // Other names used (2)
    [{ page: 0, x: 3.48, y: 41.48, w: 34.78, h: 4.66 }],   // Sex and date of birth (3, 4)
    [{ page: 0, x: 38.26, y: 41.48, w: 58.2, h: 4.66 }, { page: 0, x: 3.48, y: 46.14, w: 34.78, h: 3.58 }],   // Place of birth and citizenship (5, 6)
    [{ page: 0, x: 3.48, y: 49.72, w: 92.99, h: 26.25 }],   // Residence: current, past five years, where applying (7-9)
    [{ page: 0, x: 3.48, y: 76.06, w: 92.99, h: 9.68 }, { page: 1, x: 3.48, y: 8.69, w: 92.99, h: 11.92 }],   // Marital status and previous relationship (10, 11)
    [{ page: 1, x: 3.48, y: 21.95, w: 92.99, h: 7.08 }],   // Languages
    [{ page: 1, x: 3.48, y: 30.55, w: 92.99, h: 8.24 }],   // Passport
    [{ page: 1, x: 3.48, y: 40.58, w: 92.99, h: 14.42 }],   // National identity document and US PR card
    [{ page: 1, x: 3.48, y: 56.26, w: 92.99, h: 38.97 }],   // Contact information
    [{ page: 2, x: 3.48, y: 8.33, w: 92.99, h: 26.79 }],   // Details of visit to Canada
    [{ page: 2, x: 3.48, y: 37.9, w: 92.99, h: 12.27 }],   // Education
    [{ page: 2, x: 3.48, y: 52.86, w: 92.99, h: 28.04 }],   // Employment
    [{ page: 3, x: 3.48, y: 10.57, w: 92.99, h: 84.13 }],   // Background information
    [{ page: 4, x: 3.48, y: 8.33, w: 92.99, h: 26.61 }]   // Signature and consent
  ]
};
