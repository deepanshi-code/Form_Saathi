// PLACEHOLDER CONTENT — written only to show the data format.
// It is NOT checked against any bank's official form or RBI KYC rules.
// Replace with verified content, then set verified: true and fill source + lastChecked.

window.FORMS.push({
  id: "bank-account-opening",
  verified: false,
  source: null,        // e.g. link to the bank's official form / instructions
  lastChecked: null,   // e.g. "2026-11-15" — the date YOU checked it

  category: { en: "Bank", hi: "बैंक" },
  name: { en: "Savings Bank Account Opening Form", hi: "बचत खाता खोलने का फॉर्म" },
  about: {
    en: "Used to open a new savings account. Layout differs between banks, but most ask for the same details.",
    hi: "नया बचत खाता खोलने के लिए। हर बैंक का फॉर्म थोड़ा अलग होता है, पर ज़्यादातर यही जानकारी माँगते हैं।"
  },

  fields: [
    {
      label: { en: "Name of applicant", hi: "आवेदक का नाम" },
      meaning: {
        en: "Your full name — the person who will own the account.",
        hi: "आपका पूरा नाम — जिसके नाम पर खाता खुलेगा।"
      },
      write: {
        en: "Write it exactly as it appears on your ID proof (Aadhaar / PAN), same spelling and order.",
        hi: "बिल्कुल वैसा ही लिखें जैसा आपके पहचान पत्र (आधार / पैन) पर है — वही स्पेलिंग, वही क्रम।"
      },
      documents: {
        en: ["The ID proof you will submit"],
        hi: ["जो पहचान पत्र आप जमा करेंगे"]
      },
      mistakes: {
        en: ["Using a short name or nickname", "Spelling different from the ID proof"],
        hi: ["छोटा नाम या उपनाम लिखना", "पहचान पत्र से अलग स्पेलिंग"]
      }
    },
    {
      label: { en: "Father's / Spouse's name", hi: "पिता / पति या पत्नी का नाम" },
      meaning: {
        en: "Name of your father, or your husband/wife. Banks use it to identify you.",
        hi: "आपके पिता, या पति/पत्नी का नाम। बैंक इससे आपकी पहचान पक्की करता है।"
      },
      write: {
        en: "Usually only one is needed — tick or strike out the one you are not filling.",
        hi: "आमतौर पर एक ही भरना होता है — जो नहीं भर रहे, उसे काट दें या सही वाले पर टिक करें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Filling both boxes when the form asks for one"],
        hi: ["एक माँगा गया हो तब भी दोनों खाने भर देना"]
      }
    },
    {
      label: { en: "Date of birth", hi: "जन्म तिथि" },
      meaning: { en: "The day you were born.", hi: "आपके जन्म की तारीख।" },
      write: {
        en: "Check the format printed in the boxes (often DD/MM/YYYY). Must match your ID proof.",
        hi: "खानों में दिया फ़ॉर्मेट देखें (अक्सर दिन/महीना/साल)। पहचान पत्र से मिलना चाहिए।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing month before day", "Date not matching the ID proof"],
        hi: ["दिन से पहले महीना लिख देना", "पहचान पत्र से अलग तारीख"]
      }
    },
    {
      label: { en: "Permanent vs. correspondence address", hi: "स्थायी पता और पत्राचार का पता" },
      meaning: {
        en: "Permanent = your home address on your documents. Correspondence = where you live now and want letters sent.",
        hi: "स्थायी = दस्तावेज़ों पर लिखा घर का पता। पत्राचार = जहाँ आप अभी रहते हैं और चिट्ठी मँगाना चाहते हैं।"
      },
      write: {
        en: "If both are the same, many forms have a 'same as above' box to tick.",
        hi: "अगर दोनों एक ही हैं, तो कई फॉर्म में 'ऊपर जैसा ही' वाला खाना होता है — उस पर टिक करें।"
      },
      documents: {
        en: ["Address proof for the address you write"],
        hi: ["जो पता लिखा है, उसका प्रमाण"]
      },
      mistakes: {
        en: ["Writing a hostel/PG address as permanent without proof for it"],
        hi: ["हॉस्टल/पीजी का पता स्थायी पते में लिखना, जिसका प्रमाण नहीं है"]
      }
    },
    {
      label: { en: "PAN or Form 60", hi: "पैन या फॉर्म 60" },
      meaning: {
        en: "PAN is your income-tax number. If you don't have a PAN, banks usually ask for a separate declaration called Form 60.",
        hi: "पैन आपका आयकर नंबर है। अगर पैन नहीं है, तो बैंक आमतौर पर 'फॉर्म 60' नाम का अलग घोषणा पत्र माँगते हैं।"
      },
      write: {
        en: "Write the 10-character PAN exactly. If you have none, ask the bank for Form 60 instead of leaving it blank.",
        hi: "10 अक्षरों का पैन ठीक-ठीक लिखें। पैन नहीं है तो खाली न छोड़ें — बैंक से फॉर्म 60 माँगें।"
      },
      documents: { en: ["PAN card (or Form 60)"], hi: ["पैन कार्ड (या फॉर्म 60)"] },
      mistakes: {
        en: ["Leaving it blank", "Confusing letter O with zero 0"],
        hi: ["खाली छोड़ देना", "अंग्रेज़ी अक्षर O और शून्य 0 में गड़बड़"]
      }
    },
    {
      label: { en: "Nominee", hi: "नामांकित व्यक्ति (नॉमिनी)" },
      meaning: {
        en: "The person who receives the money in the account if something happens to you.",
        hi: "वह व्यक्ति जिसे आपके साथ कुछ होने पर खाते का पैसा मिलेगा।"
      },
      write: {
        en: "Their full name, relation to you, and sometimes their age/address. If the nominee is a minor, a guardian's name may be needed.",
        hi: "उनका पूरा नाम, आपसे रिश्ता, और कभी-कभी उम्र/पता। नॉमिनी नाबालिग हो तो अभिभावक का नाम भी लग सकता है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Skipping it because it looks optional"],
        hi: ["वैकल्पिक समझकर छोड़ देना"]
      }
    },
    {
      label: { en: "Signature", hi: "हस्ताक्षर" },
      meaning: {
        en: "The bank compares this signature on cheques and withdrawal slips later.",
        hi: "बैंक आगे चलकर चेक और निकासी पर्ची पर इसी हस्ताक्षर से मिलान करता है।"
      },
      write: {
        en: "Sign the way you will always sign. Stay inside the box; some forms need it in more than one place.",
        hi: "वैसे ही साइन करें जैसे हमेशा करेंगे। खाने के अंदर ही रहें; कुछ फॉर्म में एक से ज़्यादा जगह साइन लगता है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Signing differently each time", "Signature crossing the box border"],
        hi: ["हर बार अलग तरह से साइन करना", "हस्ताक्षर का खाने से बाहर जाना"]
      }
    }
  ]
});
