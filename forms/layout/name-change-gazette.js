// Page images: (1) Specimen for Change of Name for Major and (2) Declaration/Undertaking, pages 4 and 5 of the
// Department of Publication "Guidelines for change of Name - Adult / Major" (deptpub.gov.in, updated 30-10-2026);
// (3) Request Letter Format for Change of Name Services; (4) Format for CD Certification (deptpub.gov.in, 07-11-2023).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["name-change-gazette"] = {
  pages: ["forms/img/name-change-gazette-1.jpg", "forms/img/name-change-gazette-2.jpg", "forms/img/name-change-gazette-3.jpg", "forms/img/name-change-gazette-4.jpg"],
  spots: [
    [{ page: 0, x: 30.6, y: 15.5, w: 12.0, h: 2.6 }],   // Old name
    [{ page: 0, x: 42.7, y: 15.5, w: 46.6, h: 2.6 }],   // Son/daughter/Wife of (Father/Husband's name)
    [{ page: 0, x: 24.1, y: 17.9, w: 53.3, h: 2.5 }],   // employed as (Post) in the (Office/Company)
    [{ page: 0, x: 11.3, y: 20.3, w: 19.4, h: 2.4 }],   // residential address
    [{ page: 0, x: 82.7, y: 20.3, w: 6.2, h: 2.4 }, { page: 0, x: 11.3, y: 22.7, w: 7.6, h: 2.4 }],   // New name
    [{ page: 0, x: 57.6, y: 36.8, w: 31.8, h: 6.4 }],   // Old name typed + signature
    [{ page: 0, x: 11.2, y: 49.5, w: 73.8, h: 18.1 }],   // Witnesses 1 and 2
    [{ page: 1, x: 11.0, y: 16.9, w: 78.2, h: 7.9 }],   // Undertaking: I ... S/o ... R/o ... Marital status
    [{ page: 1, x: 10.5, y: 28.5, w: 78.8, h: 37.2 }, { page: 1, x: 9.6, y: 66.3, w: 32.0, h: 16.0 }],   // Undertaking points and signature block
    [{ page: 2, x: 11.3, y: 30.4, w: 77.2, h: 1.9 }, { page: 2, x: 11.3, y: 37.2, w: 74.4, h: 3.6 }],   // Request letter subject and old/new name
    [{ page: 2, x: 47.2, y: 55.8, w: 42.3, h: 20.7 }],   // Request letter applicant details
    [{ page: 3, x: 11.3, y: 21.4, w: 71.4, h: 5.5 }, { page: 3, x: 69.9, y: 38.3, w: 19.3, h: 2.2 }]    // CD certificate
  ]
};
