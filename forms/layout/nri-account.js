// Page images: SBI "Account Opening Application For Non-Resident Individuals" (NRE / NRO / FCNR (B) / RFC),
// pages 1, 2, 3 and 6 of the official PDF (https://sbi.bank.in/documents/21077/23246/SBI_NRI_Account_Opening_Application.pdf).
// Pages 4 and 5 (second applicant) repeat pages 2 and 3 and are not shown.
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["nri-account"] = {
  pages: ["forms/img/nri-account-1.jpg", "forms/img/nri-account-2.jpg", "forms/img/nri-account-3.jpg", "forms/img/nri-account-4.jpg"],
  spots: [
    [{ page: 1, x: 7.1, y: 3.8, w: 85.7, h: 6.2 }, { page: 2, x: 7.1, y: 92.7, w: 85.7, h: 3.9 }],   // 1 What you are asking for
    [{ page: 3, x: 7.1, y: 3.6, w: 85.7, h: 10.3 }, { page: 3, x: 7.1, y: 27.2, w: 85.7, h: 8.9 }],   // 2 Please Open + Mode of Operation
    [{ page: 1, x: 7.1, y: 12.3, w: 85.7, h: 3.4 }],   // 3 Status
    [{ page: 1, x: 7.1, y: 16.6, w: 85.7, h: 12.6 }],   // 4 Name, parents, guardian
    [{ page: 1, x: 7.1, y: 30.0, w: 85.7, h: 8.0 }],   // 5 Birth, gender, nationality, marital status
    [{ page: 1, x: 7.1, y: 38.6, w: 85.7, h: 5.6 }],   // 6 PAN / Form 60, Aadhaar, OCI
    [{ page: 1, x: 7.1, y: 45.2, w: 85.7, h: 34.8 }],   // 7 Addresses and contact
    [{ page: 1, x: 7.1, y: 80.5, w: 85.7, h: 15.0 }],   // 8 Passport and visa
    [{ page: 0, x: 5.9, y: 57.4, w: 88.1, h: 38.1 }, { page: 2, x: 7.1, y: 3.5, w: 85.7, h: 13.4 }, { page: 2, x: 7.1, y: 87.0, w: 85.7, h: 5.3 }],   // 9 Identification documents and attestation
    [{ page: 2, x: 7.1, y: 17.2, w: 85.7, h: 8.3 }],   // 10 Taxation details
    [{ page: 2, x: 7.1, y: 26.0, w: 85.7, h: 11.9 }],   // 11 Related person
    [{ page: 2, x: 7.1, y: 59.1, w: 85.7, h: 10.1 }],   // 12 Additional details
    [{ page: 3, x: 7.1, y: 14.4, w: 85.7, h: 9.0 }],   // 13 Services required
    [{ page: 3, x: 7.1, y: 23.9, w: 85.7, h: 3.0 }, { page: 0, x: 6.0, y: 51.6, w: 88.0, h: 5.6 }],   // 14 Initial remittance
    [{ page: 3, x: 7.1, y: 66.9, w: 85.7, h: 28.6 }],   // 15 Nomination (Form DA-1)
    [{ page: 2, x: 7.1, y: 38.4, w: 85.7, h: 20.2 }, { page: 2, x: 7.1, y: 69.5, w: 85.7, h: 17.0 }, { page: 3, x: 7.1, y: 36.4, w: 85.7, h: 30.0 }]    // 16 Photo, signatures and declarations
  ]
};
