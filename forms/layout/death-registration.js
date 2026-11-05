// Page images: Office of the Registrar General, India, Form No. 2 Death Report (legal and statistical parts) and its instructions, from the Model Registration of Births and Deaths (Amendment) Rules, 2024 (PDF dated 16-02-2024), pages 11 and 12 of the official PDF (https://crsorgi.gov.in/assets/download/rbd_act_2024.pdf).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["death-registration"] = {
  pages: ["forms/img/death-registration-1.jpg", "forms/img/death-registration-2.jpg"],
  spots: [
    [{ page: 0, x: 3.86, y: 7.07, w: 54.21, h: 1.36 }, { page: 1, x: 8.60, y: 7.38, w: 84.91, h: 6.95 }],   // Date of death (item 1)
    [{ page: 0, x: 3.86, y: 8.62, w: 54.21, h: 3.66 }, { page: 1, x: 8.60, y: 14.33, w: 84.91, h: 4.16 }],   // Deceased's name and Aadhaar (item 2a, 2b)
    [{ page: 0, x: 3.86, y: 12.34, w: 54.21, h: 2.11 }, { page: 1, x: 8.60, y: 21.28, w: 84.91, h: 5.58 }],   // Deceased's date of birth and age (item 2c, 2d)
    [{ page: 0, x: 3.86, y: 14.70, w: 54.21, h: 1.30 }, { page: 1, x: 8.60, y: 18.49, w: 84.91, h: 2.79 }],   // Sex (item 3)
    [{ page: 0, x: 3.86, y: 16.25, w: 54.21, h: 5.96 }, { page: 1, x: 8.60, y: 14.33, w: 84.91, h: 4.16 }],   // Mother's details (item 4)
    [{ page: 0, x: 3.86, y: 22.46, w: 54.21, h: 6.02 }, { page: 1, x: 8.60, y: 14.33, w: 84.91, h: 4.16 }],   // Father's details (item 5)
    [{ page: 0, x: 3.86, y: 28.78, w: 54.21, h: 8.06 }, { page: 1, x: 8.60, y: 14.33, w: 84.91, h: 4.16 }],   // Spouse's details (item 6)
    [{ page: 0, x: 3.86, y: 37.16, w: 54.21, h: 4.34 }, { page: 1, x: 8.60, y: 26.86, w: 84.91, h: 4.16 }],   // Address at the time of death (item 7)
    [{ page: 0, x: 3.86, y: 41.94, w: 54.21, h: 4.47 }, { page: 1, x: 8.60, y: 26.86, w: 84.91, h: 4.16 }],   // Permanent address (item 8)
    [{ page: 0, x: 3.86, y: 46.59, w: 54.21, h: 8.62 }, { page: 1, x: 8.60, y: 31.02, w: 84.91, h: 8.68 }, { page: 1, x: 8.60, y: 26.86, w: 84.91, h: 4.16 }],   // Place of death (item 9)
    [{ page: 0, x: 3.86, y: 55.46, w: 54.21, h: 10.17 }, { page: 1, x: 8.60, y: 14.33, w: 84.91, h: 4.16 }, { page: 1, x: 8.60, y: 26.86, w: 84.91, h: 4.16 }],   // Informant's details (item 10)
    [{ page: 0, x: 62.81, y: 5.96, w: 35.96, h: 68.80 }, { page: 1, x: 8.60, y: 39.70, w: 84.91, h: 19.11 }],   // Statistical information (items 11 to 21)
    [{ page: 0, x: 3.86, y: 65.69, w: 54.21, h: 10.24 }],   // Declaration, date and signature
    [{ page: 0, x: 3.86, y: 77.67, w: 95.09, h: 17.87 }]   // To be filled by the Registrar
  ]
};
