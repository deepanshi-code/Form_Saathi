// Page images: PNB "Account Opening Form for Resident Individual", PNB-1249A6 (Updated upto 19.02.2026), English pages 4, 6, 8 and 12 of the official PDF (https://pnb.bank.in/downloadprocess.aspx?fid=zNXDTKvAIueRqCEkrtlCXw==).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["pnb-account-opening"] = {
  pages: ["forms/img/pnb-account-opening-1.jpg", "forms/img/pnb-account-opening-2.jpg", "forms/img/pnb-account-opening-3.jpg", "forms/img/pnb-account-opening-4.jpg"],
  spots: [
    [{ page: 2, x: 4.3, y: 14.62, w: 62.94, h: 2.26 }],   // Part II: Type of Account
    [{ page: 0, x: 2.58, y: 19.0, w: 94.15, h: 3.99 }],   // 1.1 Name
    [{ page: 0, x: 2.58, y: 29.24, w: 94.15, h: 4.45 }],   // 1.5 Name of Father / Mother / Spouse
    [{ page: 0, x: 2.58, y: 36.54, w: 92.86, h: 2.52 }],   // 1.7-1.8 Mobile No. and Email ID
    [{ page: 0, x: 2.41, y: 47.18, w: 95.27, h: 18.27 }],   // 2. Proof of Identity / Address
    [{ page: 0, x: 2.41, y: 66.11, w: 95.27, h: 30.37 }],   // 3 & 4. Address details
    [{ page: 1, x: 2.41, y: 22.99, w: 95.27, h: 7.31 }],   // 6. Tax Proof: PAN
    [{ page: 1, x: 2.41, y: 30.43, w: 95.27, h: 14.15 }, { page: 2, x: 4.3, y: 17.01, w: 45.57, h: 1.99 }],   // 7.1-7.3 Occupation, annual income; Part II expected annual credit
    [{ page: 1, x: 2.58, y: 49.04, w: 94.15, h: 4.12 }],   // 7.6 Politically exposed person
    [{ page: 1, x: 2.41, y: 73.22, w: 95.27, h: 9.17 }],   // 9. Aadhaar consent
    [{ page: 2, x: 2.41, y: 19.6, w: 95.27, h: 22.92 }],   // Part II 1. Facilities required
    [{ page: 2, x: 2.41, y: 42.99, w: 95.27, h: 41.53 }],   // Part II 2. Nomination
    [{ page: 3, x: 3.27, y: 31.76, w: 85.81, h: 5.65 }],   // Part II Mode of Operation
    [{ page: 1, x: 3.27, y: 81.93, w: 13.24, h: 9.5 }, { page: 1, x: 69.13, y: 82.59, w: 27.0, h: 8.5 }, { page: 3, x: 3.27, y: 37.61, w: 93.21, h: 34.29 }],   // Photo and signature
  ]
};
