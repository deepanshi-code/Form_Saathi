// Page images: UIDAI "FORM 1: Aadhaar Enrolment and Update" (English, PDF dated 29-09-2026), pages 1, 2 of the official PDF (https://backend.uidai.gov.in/get/files/media/document/2026-09/Form_1_Eng.pdf).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["aadhaar-update"] = {
  pages: ["forms/img/aadhaar-update-1.jpg", "forms/img/aadhaar-update-2.jpg"],
  spots: [
    [{ page: 0, x: 7.6, y: 7.64, w: 85.78, h: 2.02 }],   // 1. Purpose: Enrolment OR Update *
    [{ page: 0, x: 7.6, y: 9.66, w: 85.78, h: 1.77 }],   // 2. Resident status *
    [{ page: 0, x: 10.13, y: 13.07, w: 83.25, h: 3.16 }],   // 3(a). Name *
    [{ page: 0, x: 10.13, y: 16.22, w: 22.14, h: 4.99 }],   // 3(b). Gender *
    [{ page: 0, x: 32.27, y: 16.22, w: 61.11, h: 4.99 }],   // 3(c). Date of Birth or Age *: Verified / Declared / Approximate
    [{ page: 0, x: 10.13, y: 21.21, w: 83.25, h: 1.77 }],   // 3(d) Email and 3(e) Mobile number
    [{ page: 0, x: 7.6, y: 22.98, w: 85.78, h: 1.77 }],   // 4. Basis: Document verification OR Confirmation by Head of Family (HoF) *
    [{ page: 0, x: 10.13, y: 27.9, w: 83.25, h: 8.59 }],   // 5(a). Address (PIN code and Post Office mandatory)
    [{ page: 0, x: 10.13, y: 36.49, w: 83.25, h: 5.3 }],   // 5(b). Type of documents presented: POI / POA / PDB
    [{ page: 0, x: 7.6, y: 41.79, w: 85.78, h: 17.11 }],   // 6. Head of Family (HoF) details and signature
    [{ page: 0, x: 10.13, y: 60.61, w: 83.25, h: 1.77 }],   // 7(a). Aadhaar number of applicant (for update) *
    [{ page: 0, x: 10.13, y: 62.37, w: 83.25, h: 3.41 }],   // 7(b). Information to be updated *
    [{ page: 0, x: 7.6, y: 65.78, w: 85.78, h: 21.21 }, { page: 0, x: 47.22, y: 86.99, w: 46.16, h: 2.9 }],   // Declaration and signature / thumb impression *
    [{ page: 1, x: 7.84, y: 72.6, w: 84.8, h: 20.45 }]   // Fees (printed on the form)
  ]
};
