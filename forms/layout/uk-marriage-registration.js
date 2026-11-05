// Page images: Form 1 "Marriage Registration/Acknowledgment of a Registered Marriage" [Under Rule 9(10)],
// pages 143-158 of the official PDF "The Uniform Civil Code Rules, Uttarakhand, 2025" (English),
// https://ucc.uk.gov.in/server/file/uploads/shared-files/ucc-rules-2025-en.pdf (top and bottom blank margins cropped).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page image.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["uk-marriage-registration"] = {
  pages: ["forms/img/uk-marriage-registration-1.jpg", "forms/img/uk-marriage-registration-2.jpg", "forms/img/uk-marriage-registration-3.jpg", "forms/img/uk-marriage-registration-4.jpg", "forms/img/uk-marriage-registration-5.jpg", "forms/img/uk-marriage-registration-6.jpg", "forms/img/uk-marriage-registration-7.jpg", "forms/img/uk-marriage-registration-8.jpg", "forms/img/uk-marriage-registration-9.jpg", "forms/img/uk-marriage-registration-10.jpg", "forms/img/uk-marriage-registration-11.jpg", "forms/img/uk-marriage-registration-12.jpg", "forms/img/uk-marriage-registration-13.jpg", "forms/img/uk-marriage-registration-14.jpg", "forms/img/uk-marriage-registration-15.jpg", "forms/img/uk-marriage-registration-16.jpg"],
  spots: [
    [{ page: 0, x: 16.99, y: 19.93, w: 66.67, h: 77.12 }, { page: 1, x: 16.99, y: 1.31, w: 66.67, h: 45.1 }],   // Who is applying (1-3)
    [{ page: 1, x: 16.99, y: 47.55, w: 66.67, h: 3.1 }],   // Date of marriage (4)
    [{ page: 1, x: 16.99, y: 51.8, w: 66.67, h: 34.48 }, { page: 11, x: 16.99, y: 42.97, w: 66.67, h: 9.48 }],   // Already registered (5, Step 4)
    [{ page: 1, x: 16.99, y: 87.25, w: 66.67, h: 4.9 }, { page: 2, x: 16.99, y: 1.14, w: 69.12, h: 91.01 }, { page: 3, x: 16.99, y: 4.41, w: 66.67, h: 41.01 }],   // Residency (6)
    [{ page: 3, x: 16.99, y: 50.65, w: 66.67, h: 28.76 }, { page: 7, x: 16.99, y: 42.81, w: 66.67, h: 28.76 }],   // Wife/Husband basic (7-12, 23-28)
    [{ page: 3, x: 16.99, y: 80.56, w: 66.67, h: 16.18 }, { page: 4, x: 16.99, y: 4.41, w: 66.67, h: 50.33 }, { page: 7, x: 16.99, y: 72.71, w: 66.67, h: 24.35 }, { page: 8, x: 16.99, y: 4.41, w: 66.67, h: 41.83 }],   // Parents/guardian (13, 29)
    [{ page: 4, x: 16.99, y: 55.88, w: 66.67, h: 39.54 }, { page: 8, x: 16.99, y: 47.39, w: 66.67, h: 37.91 }],   // Nationality religion category (14-16, 30-32)
    [{ page: 5, x: 16.99, y: 4.41, w: 66.67, h: 92.65 }, { page: 6, x: 16.99, y: 4.41, w: 66.67, h: 15.85 }, { page: 8, x: 16.99, y: 86.76, w: 66.67, h: 11.27 }, { page: 9, x: 16.99, y: 4.41, w: 66.67, h: 92.65 }, { page: 10, x: 16.99, y: 4.41, w: 66.67, h: 9.8 }],   // Previous relationship (17, 33)
    [{ page: 6, x: 16.99, y: 21.08, w: 66.67, h: 76.96 }, { page: 7, x: 16.99, y: 4.41, w: 66.67, h: 33.17 }, { page: 10, x: 16.99, y: 15.36, w: 66.67, h: 80.72 }, { page: 11, x: 16.99, y: 4.41, w: 66.67, h: 33.17 }],   // Contact and addresses (18-22, 34-38)
    [{ page: 11, x: 16.99, y: 53.43, w: 66.67, h: 41.34 }, { page: 12, x: 16.99, y: 4.41, w: 66.67, h: 14.05 }],   // Ceremony and officiant (39)
    [{ page: 12, x: 16.99, y: 19.44, w: 66.67, h: 77.61 }, { page: 13, x: 16.99, y: 4.41, w: 66.67, h: 20.42 }],   // Place of marriage (40-41)
    [{ page: 13, x: 16.99, y: 25.98, w: 66.67, h: 42.97 }],   // Prohibited relationship (42-43)
    [{ page: 13, x: 16.99, y: 70.1, w: 66.67, h: 11.44 }, { page: 14, x: 16.99, y: 4.9, w: 66.67, h: 60.29 }],   // Children (44)
    [{ page: 14, x: 16.99, y: 65.52, w: 66.67, h: 33.17 }],   // Notice / delay (45)
    [{ page: 15, x: 16.99, y: 4.74, w: 66.67, h: 49.84 }],   // Witnesses (46-47)
    [{ page: 15, x: 16.99, y: 55.72, w: 66.67, h: 30.56 }]   // Declaration and documents (Step 9-10)
  ]
};
