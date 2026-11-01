// Page images: SBI "Account Opening Form for Resident Individual" Part I & II (file dated 07-10-2026), pages 1, 2 and 4 of the official PDF (https://sbi.bank.in/documents/16012/38550822/07102026_Common+Deposit+Account+Opening+Form_+English.pdf/cde2f9e4-a54c-dc07-d7b3-1180d58f3cef?t=1791364855710).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["sbi-account-opening"] = {
  pages: ["forms/img/sbi-account-opening-1.jpg", "forms/img/sbi-account-opening-2.jpg", "forms/img/sbi-account-opening-3.jpg"],
  spots: [
    [{ page: 0, x: 3.53, y: 26.69, w: 92.58, h: 3.94 }],   // 1 Name
    [{ page: 0, x: 3.53, y: 30.88, w: 31.8, h: 1.69 }],   // 2 Date of birth
    [{ page: 0, x: 35.69, y: 30.88, w: 32.51, h: 1.69 }],   // 3 Gender
    [{ page: 0, x: 3.53, y: 34.69, w: 92.58, h: 4.5 }],   // 6 Name of Father / Mother / Spouse
    [{ page: 0, x: 3.53, y: 46.31, w: 92.76, h: 14.37 }],   // 10 Occupation type
    [{ page: 0, x: 3.53, y: 64.88, w: 48.85, h: 1.75 }],   // 12 Annual income
    [{ page: 0, x: 3.53, y: 89.25, w: 56.54, h: 1.69 }],   // 21 PAN (or Form 97)
    [{ page: 1, x: 3.53, y: 3.12, w: 92.76, h: 18.44 }],   // C. Proof of identity / address (OVD)
    [{ page: 1, x: 3.53, y: 22.0, w: 92.76, h: 25.81 }],   // D & E. Current and correspondence address
    [{ page: 0, x: 3.53, y: 91.38, w: 92.76, h: 5.5 }],   // B. Mobile number and email
    [{ page: 1, x: 3.89, y: 66.31, w: 14.05, h: 10.0 }],   // Photograph
    [{ page: 2, x: 3.53, y: 21.88, w: 92.76, h: 47.0 }],   // F. Nomination (Part II)
    [{ page: 1, x: 70.67, y: 66.31, w: 25.35, h: 10.0 }, { page: 2, x: 3.89, y: 52.75, w: 92.05, h: 4.38 }, { page: 2, x: 3.89, y: 65.12, w: 92.05, h: 3.69 }, { page: 2, x: 32.42, y: 78.12, w: 63.52, h: 3.5 }],    // Signature / thumb impression
  ]
};
