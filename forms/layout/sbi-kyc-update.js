// Page images: (1-2) SBI "KYC Annexure 'B' - KYC Updation Form-Individual" (2 pages, PDF created 19-07-2025),
// https://sbi.bank.in/documents/16012/0/KYC+Annexure+B+(2).pdf/768facc2-cc61-245d-834b-b8cfdbc45757?t=1752933035205
// (3) SBI "KYC Annexure 'A' - Self Declaration Form for KYC Updation" (PDF created 19-07-2025),
// https://sbi.bank.in/documents/16012/0/KYC+Annexure+A+(2).pdf/2b1959f1-e839-66c5-beac-711fe6d8b553?t=1752933016548
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["sbi-kyc-update"] = {
  pages: ["forms/img/sbi-kyc-update-1.jpg", "forms/img/sbi-kyc-update-2.jpg", "forms/img/sbi-kyc-update-3.jpg"],
  spots: [
    [{ page: 0, x: 3.5, y: 6.95, w: 92.6, h: 13.2 }],   // Date, branch, customer ID, account no., application type, account type, CKYC no.
    [{ page: 0, x: 3.5, y: 22.2, w: 92.6, h: 6.1 }],   // 1. Name, 2. Maiden name
    [{ page: 0, x: 3.5, y: 28.66, w: 92.6, h: 3.85 }],   // 3-6. Date of birth, gender, marital status, dependents
    [{ page: 0, x: 3.5, y: 32.69, w: 94.4, h: 4.71 }],   // 7. Name of father / mother / spouse
    [{ page: 0, x: 3.5, y: 37.66, w: 92.6, h: 5.77 }],   // 8. Guardian (minor), 9. Nationality, 10. Citizenship
    [{ page: 0, x: 4.0, y: 43.8, w: 91.8, h: 14.76 }],   // 11. Occupation type
    [{ page: 0, x: 3.5, y: 58.93, w: 92.6, h: 8.56 }],   // 12-15. Organisation, income, net worth, source of funds
    [{ page: 0, x: 3.5, y: 67.8, w: 92.6, h: 12.35 }],   // 16-19. Religion, category, disability, education
    [{ page: 0, x: 3.5, y: 80.52, w: 93.0, h: 7.32 }],   // 20-22. PEP, tax residence, PAN
    [{ page: 0, x: 2.2, y: 88.34, w: 93.4, h: 5.83 }],   // B. Contact details
    [{ page: 1, x: 2.2, y: 5.46, w: 95.6, h: 17.37 }],   // C. Proof of identity/address (OVD)
    [{ page: 1, x: 2.2, y: 23.57, w: 95.6, h: 26.24 }],   // D. Address as per OVD, E. Correspondence address
    [{ page: 1, x: 2.2, y: 49.81, w: 97.0, h: 10.86 }],   // F. Deemed OVD when OVD lacks current address
    [{ page: 1, x: 2.2, y: 60.79, w: 95.6, h: 21.09 }],   // G. Declaration, photo, signature, place, date
    [{ page: 1, x: 2.2, y: 83.0, w: 95.6, h: 14.08 }],   // H. For office use, acknowledgement
    [{ page: 2, x: 4.8, y: 2.71, w: 91.2, h: 74.6 }]    // Annexure A: self-declaration when nothing has changed
  ]
};
