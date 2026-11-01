// Page images: Office of the Registrar General, India, Form No. 1 Birth Report (legal and statistical parts) and its instructions, from the Model Registration of Births and Deaths (Amendment) Rules, 2024 (PDF dated 16-02-2024), pages 7 and 8 of the official PDF (https://crsorgi.gov.in/assets/download/rbd_act_2024.pdf).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["birth-registration"] = {
  pages: ["forms/img/birth-registration-1.jpg", "forms/img/birth-registration-2.jpg"],
  spots: [
    [{ page: 0, x: 3.69, y: 10.81, w: 54.92, h: 1.66 }, { page: 1, x: 8.9, y: 7.84, w: 84.81, h: 5.7 }],   // Date of birth (item 1)
    [{ page: 0, x: 3.69, y: 12.48, w: 54.92, h: 1.66 }, { page: 1, x: 8.9, y: 13.43, w: 84.81, h: 1.66 }],   // Sex (item 2)
    [{ page: 0, x: 3.69, y: 14.14, w: 54.92, h: 2.38 }, { page: 1, x: 8.9, y: 16.04, w: 84.81, h: 8.55 }],   // Child's name (item 3a)
    [{ page: 0, x: 3.69, y: 16.51, w: 54.92, h: 1.66 }],   // Child's Aadhaar number (item 3b)
    [{ page: 0, x: 3.69, y: 18.3, w: 54.92, h: 6.65 }, { page: 1, x: 8.9, y: 16.04, w: 84.81, h: 4.4 }],   // Father's details (item 4)
    [{ page: 0, x: 3.69, y: 24.95, w: 54.92, h: 6.65 }, { page: 1, x: 8.9, y: 16.04, w: 84.81, h: 4.4 }],   // Mother's details (item 5)
    [{ page: 0, x: 3.69, y: 31.6, w: 54.92, h: 4.75 }, { page: 1, x: 8.9, y: 24.36, w: 84.81, h: 4.28 }],   // Address of parents at the time of birth (item 6)
    [{ page: 0, x: 3.69, y: 36.36, w: 54.92, h: 4.87 }, { page: 1, x: 8.9, y: 24.36, w: 84.81, h: 4.28 }],   // Permanent address of parents (item 7)
    [{ page: 0, x: 3.69, y: 41.23, w: 54.92, h: 9.27 }, { page: 1, x: 8.9, y: 28.51, w: 84.81, h: 8.79 }],   // Place of birth (item 8)
    [{ page: 0, x: 3.69, y: 50.97, w: 54.92, h: 11.05 }, { page: 1, x: 8.9, y: 16.04, w: 84.81, h: 4.4 }, { page: 1, x: 8.9, y: 24.36, w: 84.81, h: 4.28 }],   // Informant's details (item 9)
    [{ page: 0, x: 62.98, y: 9.39, w: 34.6, h: 61.9 }, { page: 1, x: 8.9, y: 37.19, w: 84.81, h: 41.23 }],   // Statistical information (items 10 to 22)
    [{ page: 0, x: 3.69, y: 62.02, w: 54.92, h: 11.76 }],   // Declaration, date and signature / thumb mark
    [{ page: 0, x: 3.69, y: 74.61, w: 54.92, h: 19.25 }, { page: 0, x: 62.98, y: 74.61, w: 34.6, h: 19.25 }]    // To be filled by the Registrar
  ]
};
