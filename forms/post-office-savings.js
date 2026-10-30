// Checked against these official documents (all read in full):
// 1. India Post form "SB-AOF: Post Office Savings Bank - Application for Opening of Account/Purchase of
//    Certificate", listed on indiapost.gov.in (Documents > Forms) as "Application Form For Opening of
//    Post Office Savings Bank Account", dated 16-08-2025 on that page (the PDF itself prints no date).
// 2. India Post "SB-KYC: New/Change KYC (Know Your Customer) Form" (listed as "KYC Form Annexure II", 16-08-2025).
// 3. India Post "List of Documents required as ID and Address proof" (Annex VII, 16-08-2025).
// 4. Post Office Savings Account Scheme, 2019 (G.S.R. 921(E) dated 12.12.2019, amended by G.S.R. 257(E)
//    dated 09.04.2021), as published by the National Savings Institute (nsiindia.gov.in).
// 5. India Post e-book on savings schemes, version 2.0, dated 07.10.2024.
// Anything these documents do not answer is marked "ask at the post office".

window.FORMS.push({
  id: "post-office-savings",
  verified: true,
  source: {
    title: "India Post SB-AOF: Application for Opening of Account/Purchase of Certificate (listed on indiapost.gov.in Forms page, dated 16-08-2025)",
    url: "https://www.indiapost.gov.in/api/documents/file/100a9s52rrrl01hcp05npx04p3a01eko0s5lh3hhl73a0qr09vcx3ifwm05mh2"
  },
  lastChecked: "2026-10-30",
  caution: {
    en: "The form PDF prints no version date; India Post's forms page lists it as 16-08-2025. The form does not mention Form 60 or Form 97 for people without PAN, so ask at the post office.",
    hi: "फॉर्म की PDF पर कोई तारीख़ नहीं छपी है; इंडिया पोस्ट के फॉर्म पेज पर इसकी तारीख़ 16-08-2025 है। पैन न होने पर फॉर्म 60 या फॉर्म 97 की बात फॉर्म में नहीं है, इसलिए डाकघर में पूछें।"
  },

  category: { en: "Bank", hi: "बैंक" },
  name: { en: "Post Office Savings Account Opening Form", hi: "डाकघर बचत खाता खोलने का फॉर्म" },
  about: {
    en: "One common form (SB-AOF) is used to open a Post Office Savings Account and other post office schemes such as RD, TD, MIS, PPF and NSC. Tick (✓) the right boxes, use CAPITAL LETTERS only, and attach self-attested copies of your documents. The post office may also give you a separate KYC form (SB-KYC) that asks for the same name, address, mobile, Aadhaar, PAN and ID details.",
    hi: "एक ही फॉर्म (SB-AOF) से डाकघर बचत खाता और डाकघर की दूसरी योजनाएँ, जैसे RD, TD, MIS, PPF और NSC खोली जाती हैं। सही खाने में टिक (✓) करें, सिर्फ़ बड़े (कैपिटल) अक्षरों में भरें, और दस्तावेज़ों की स्व-सत्यापित (ख़ुद हस्ताक्षर की हुई) कॉपी लगाएँ। डाकघर आपको एक अलग KYC फॉर्म (SB-KYC) भी दे सकता है, जिसमें यही नाम, पता, मोबाइल, आधार, पैन और पहचान पत्र की जानकारी माँगी जाती है।"
  },

  fields: [
    {
      label: { en: "Scheme name and account type", hi: "योजना का नाम और खाते का प्रकार" },
      meaning: {
        en: "At the top you write the post office name (\"To The Postmaster\") and which scheme you want. Then you tick the Account Holder Type (Self, Minor through Guardian, Person of unsound mind through guardian) and the Account Type (Single, Joint A, Joint B).",
        hi: "सबसे ऊपर डाकघर का नाम (\"सेवा में, पोस्टमास्टर\") और योजना का नाम लिखें। फिर खाताधारक का प्रकार (ख़ुद, अभिभावक के ज़रिए नाबालिग, अभिभावक के ज़रिए मानसिक रूप से अस्वस्थ व्यक्ति) और खाते का प्रकार (सिंगल, जॉइंट A, जॉइंट B) टिक करें।"
      },
      write: {
        en: "For your own savings account, write \"Savings\" as the scheme, tick \"Self\" and \"Single\". Joint A means \"All or Survivor(s)\"; Joint B means \"Either or Survivor\". The scheme rules allow only ONE single savings account per person. A child aged 10 or more can open an account in their own name, but not if a guardian already opened one for them.",
        hi: "अपने बचत खाते के लिए योजना में \"Savings\" लिखें, \"Self\" और \"Single\" पर टिक करें। जॉइंट A = \"सभी या जीवित बचे लोग\"; जॉइंट B = \"कोई भी एक या जीवित बचा व्यक्ति\"। योजना के नियमों के अनुसार एक व्यक्ति का सिर्फ़ एक ही सिंगल बचत खाता हो सकता है। 10 साल या उससे बड़ा बच्चा अपने नाम से खाता खोल सकता है, पर तब नहीं जब अभिभावक पहले से उसके नाम पर खाता खोल चुके हों।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Forgetting to write the scheme name", "Trying to open a second single savings account (only one is allowed)"],
        hi: ["योजना का नाम लिखना भूल जाना", "दूसरा सिंगल बचत खाता खोलने की कोशिश करना (सिर्फ़ एक की अनुमति है)"]
      }
    },
    {
      label: { en: "Initial deposit", hi: "शुरुआती जमा राशि" },
      meaning: {
        en: "The money you pay to open the account. The form asks for the amount in figures and in words, and whether you pay by cash, DD or cheque (with cheque number and date).",
        hi: "खाता खोलते समय जमा की जाने वाली रकम। फॉर्म में रकम अंकों में और शब्दों में, और भुगतान का तरीक़ा (नकद, डीडी या चेक, चेक नंबर और तारीख़ के साथ) माँगा गया है।"
      },
      write: {
        en: "The Post Office Savings Account Scheme, 2019 (notified 12.12.2019) says the minimum opening deposit is Rs. 500, and no withdrawal may bring the balance below Rs. 500. No interest is given for a month if the balance falls below Rs. 500 between the 10th and the last day. The form also says: if your total balance/investment in all accounts is Rs. 10 lakh or more, you must give a document showing the source of the money.",
        hi: "डाकघर बचत खाता योजना, 2019 (12.12.2019 को अधिसूचित) के अनुसार खाता कम से कम ₹500 से खुलता है, और कोई भी निकासी बैलेंस को ₹500 से नीचे नहीं ला सकती। अगर किसी महीने की 10 तारीख़ से आख़िरी दिन के बीच बैलेंस ₹500 से कम हो जाए, तो उस महीने का ब्याज नहीं मिलता। फॉर्म के अनुसार, अगर सभी खातों में कुल जमा ₹10 लाख या उससे ज़्यादा है, तो पैसे का स्रोत बताने वाला दस्तावेज़ देना होगा।"
      },
      documents: { en: ["Cash, DD or cheque for at least Rs. 500"], hi: ["कम से कम ₹500 नकद, डीडी या चेक"] },
      mistakes: {
        en: ["Depositing less than Rs. 500", "Writing the amount only in figures and not in words"],
        hi: ["₹500 से कम जमा करना", "रकम सिर्फ़ अंकों में लिखना, शब्दों में नहीं"]
      }
    },
    {
      label: { en: "Name of the Applicant / Guardian", hi: "आवेदक / अभिभावक का नाम" },
      meaning: {
        en: "Your full name. The table has columns for up to 3 applicants; for a single account fill only \"1st Applicant\".",
        hi: "आपका पूरा नाम। तालिका में 3 आवेदकों के कॉलम हैं; सिंगल खाते के लिए सिर्फ़ \"1st Applicant\" वाला कॉलम भरें।"
      },
      write: {
        en: "Write in CAPITAL LETTERS. If a guardian is opening the account for a minor, the guardian's name goes here and the minor's details go in section 1 at the top.",
        hi: "बड़े (कैपिटल) अक्षरों में लिखें। अगर अभिभावक किसी नाबालिग के लिए खाता खोल रहे हैं, तो यहाँ अभिभावक का नाम लिखें और नाबालिग की जानकारी ऊपर खंड 1 में भरें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing in small letters", "Filling the 2nd or 3rd applicant column for a single account"],
        hi: ["छोटे अक्षरों में लिखना", "सिंगल खाते में दूसरे या तीसरे आवेदक का कॉलम भर देना"]
      }
    },
    {
      label: { en: "Name of Husband / Father / Mother", hi: "पति / पिता / माता का नाम" },
      meaning: {
        en: "The full name of your husband, father or mother.",
        hi: "आपके पति, पिता या माता का पूरा नाम।"
      },
      write: {
        en: "Write one full name in CAPITAL LETTERS. The form does not say which one to prefer; if unsure, ask at the post office.",
        hi: "एक पूरा नाम बड़े अक्षरों में लिखें। फॉर्म में यह नहीं बताया गया कि किसका नाम लिखना बेहतर है; पक्का न हो तो डाकघर में पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: { en: ["Leaving it blank"], hi: ["खाली छोड़ देना"] }
    },
    {
      label: { en: "Gender (M/F/O)", hi: "लिंग (M/F/O)" },
      meaning: { en: "M = Male, F = Female, O = Other.", hi: "M = पुरुष, F = महिला, O = अन्य।" },
      write: { en: "Write M, F or O.", hi: "M, F या O लिखें।" },
      documents: { en: [], hi: [] },
      mistakes: { en: [], hi: [] }
    },
    {
      label: { en: "Date of Birth (DD/MM/YYYY) and in words", hi: "जन्म तिथि (DD/MM/YYYY) और शब्दों में" },
      meaning: {
        en: "The day you were born, written twice: once in figures and once in words.",
        hi: "आपकी जन्म की तारीख़, दो बार: एक बार अंकों में और एक बार शब्दों में।"
      },
      write: {
        en: "Use the order DD/MM/YYYY (day, month, full year). The form says the date in words is \"mandatory\".",
        hi: "DD/MM/YYYY क्रम में लिखें (दिन, महीना, पूरा साल)। फॉर्म पर लिखा है कि शब्दों में तारीख़ \"ज़रूरी\" है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the date only in figures (words are mandatory)", "Writing the month before the day"],
        hi: ["तारीख़ सिर्फ़ अंकों में लिखना (शब्दों में लिखना ज़रूरी है)", "दिन से पहले महीना लिखना"]
      }
    },
    {
      label: { en: "Aadhaar Number", hi: "आधार नंबर" },
      meaning: {
        en: "Your 12-digit Aadhaar number. The form also has an \"Aadhaar Seeding\" box under Additional Facilities, for linking Aadhaar to the account.",
        hi: "आपका 12 अंकों का आधार नंबर। फॉर्म में \"अतिरिक्त सुविधाएँ\" के अंदर \"Aadhaar Seeding\" का खाना भी है, खाते से आधार जोड़ने के लिए।"
      },
      write: {
        en: "Write your Aadhaar number. If you do not give Aadhaar, the form lists other documents for ID and address proof (see \"ID Proof and Address Proof\").",
        hi: "अपना आधार नंबर लिखें। अगर आप आधार नहीं देते, तो फॉर्म में पहचान और पते के प्रमाण के लिए दूसरे दस्तावेज़ दिए गए हैं (\"पहचान और पते का प्रमाण\" देखें)।"
      },
      documents: { en: ["Self-attested copy of Aadhaar card"], hi: ["आधार कार्ड की स्व-सत्यापित कॉपी"] },
      mistakes: { en: ["Missing or wrong digits"], hi: ["अंक छूट जाना या ग़लत लिखना"] }
    },
    {
      label: { en: "PAN Number *", hi: "पैन नंबर *" },
      meaning: {
        en: "PAN is your Permanent Account Number from the Income Tax Department. The form marks this field with *, but does not explain the *.",
        hi: "पैन आयकर विभाग का स्थायी खाता संख्या है। फॉर्म में इस खाने पर * लगा है, पर * का मतलब नहीं बताया गया।"
      },
      write: {
        en: "Write your PAN. India Post's e-book (October 2024) lists a \"Copy of PAN card\" for the savings account. The form does not say what to do if you have no PAN. The same e-book says Form 60 for other schemes like RD and TD, but some banks' 2026 forms now say \"Form 97\" instead of Form 60. So ask at the post office which form they accept.",
        hi: "अपना पैन लिखें। इंडिया पोस्ट की ई-बुक (अक्टूबर 2024) में बचत खाते के लिए \"पैन कार्ड की कॉपी\" माँगी गई है। पैन न होने पर क्या करें, यह फॉर्म में नहीं बताया गया। उसी ई-बुक में RD और TD जैसी दूसरी योजनाओं के लिए फॉर्म 60 लिखा है, पर कुछ बैंकों के 2026 के फॉर्म में अब फॉर्म 60 की जगह \"फॉर्म 97\" लिखा है। इसलिए डाकघर में पूछें कि वे कौन-सा फॉर्म लेते हैं।"
      },
      documents: { en: ["Self-attested copy of PAN card"], hi: ["पैन कार्ड की स्व-सत्यापित कॉपी"] },
      mistakes: {
        en: ["Leaving it blank without asking what to submit instead", "Assuming Form 60 is still correct without checking"],
        hi: ["बिना पूछे खाली छोड़ देना कि इसकी जगह क्या जमा करें", "बिना पुष्टि किए मान लेना कि फॉर्म 60 ही सही है"]
      }
    },
    {
      label: { en: "Present Address and Permanent Address", hi: "वर्तमान पता और स्थायी पता" },
      meaning: {
        en: "Present address is where you live now. Permanent address is your home address. Each asks for House/Locality/Village & Post Office/City/District/State/Pin Code.",
        hi: "वर्तमान पता = जहाँ आप अभी रहते हैं। स्थायी पता = आपके घर का पता। दोनों में मकान/मोहल्ला/गाँव और डाकघर/शहर/ज़िला/राज्य/पिन कोड माँगा गया है।"
      },
      write: {
        en: "Fill both rows. The form has no \"same as above\" box. Include the Pin Code.",
        hi: "दोनों पंक्तियाँ भरें। फॉर्म में \"ऊपर जैसा ही\" का कोई खाना नहीं है। पिन कोड ज़रूर लिखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Missing the Pin Code", "Leaving the permanent address blank"],
        hi: ["पिन कोड न लिखना", "स्थायी पता खाली छोड़ना"]
      }
    },
    {
      label: { en: "Telephone / Mobile No. * and E-mail ID", hi: "टेलीफ़ोन / मोबाइल नंबर * और ईमेल" },
      meaning: {
        en: "Your phone number (marked * on the form) and email address.",
        hi: "आपका फ़ोन नंबर (फॉर्म पर * लगा है) और ईमेल पता।"
      },
      write: {
        en: "Write a mobile number you will keep. Email is not marked *. If you have no mobile number, ask at the post office.",
        hi: "ऐसा मोबाइल नंबर लिखें जो आप आगे भी रखेंगे। ईमेल पर * नहीं है। अगर आपके पास मोबाइल नंबर नहीं है, तो डाकघर में पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: { en: ["Leaving the mobile number blank"], hi: ["मोबाइल नंबर खाली छोड़ना"] }
    },
    {
      label: { en: "ID Proof and Address Proof", hi: "पहचान और पते का प्रमाण" },
      meaning: {
        en: "For each proof, write the Document No., Date of Issue and Issuing Authority, and attach a self-attested copy.",
        hi: "हर प्रमाण के लिए दस्तावेज़ नंबर, जारी होने की तारीख़ और जारी करने वाला विभाग लिखें, और उसकी स्व-सत्यापित कॉपी लगाएँ।"
      },
      write: {
        en: "The form says: if Aadhaar Card/proof of enrolment of Aadhaar is not provided, any one of the documents below can be used for both ID and address. India Post's forms page also has a longer list (Annex VII) that includes, for students only, a photo ID or address certificate from a Govt. recognised educational institution. Ask at the post office whether they accept it.",
        hi: "फॉर्म के अनुसार, अगर आधार कार्ड/आधार नामांकन का प्रमाण नहीं दिया गया है, तो नीचे दिए दस्तावेज़ों में से कोई एक पहचान और पते, दोनों के लिए चल सकता है। इंडिया पोस्ट के फॉर्म पेज पर एक लंबी सूची (Annex VII) भी है, जिसमें सिर्फ़ छात्रों के लिए सरकारी मान्यता प्राप्त शिक्षण संस्थान का फ़ोटो पहचान पत्र या पते का प्रमाणपत्र भी शामिल है। डाकघर में पूछें कि वे इसे मानते हैं या नहीं।"
      },
      documents: {
        en: ["Aadhaar Card / proof of Aadhaar enrolment, or any one of: Passport", "Driving licence", "Voter's ID card", "MNREGA job card signed by a State Government officer", "Letter from the National Population Register with name and address"],
        hi: ["आधार कार्ड / आधार नामांकन का प्रमाण, या इनमें से कोई एक: पासपोर्ट", "ड्राइविंग लाइसेंस", "वोटर आईडी कार्ड", "राज्य सरकार के अधिकारी के हस्ताक्षर वाला मनरेगा जॉब कार्ड", "राष्ट्रीय जनसंख्या रजिस्टर का पत्र, जिसमें नाम और पता हो"]
      },
      mistakes: {
        en: ["Not writing the date of issue and issuing authority", "Giving copies without signing them (self-attesting)"],
        hi: ["जारी होने की तारीख़ और जारी करने वाला विभाग न लिखना", "कॉपियों पर ख़ुद हस्ताक्षर (स्व-सत्यापन) किए बिना देना"]
      }
    },
    {
      label: { en: "Photograph and Specimen Signatures", hi: "फ़ोटो और नमूना हस्ताक्षर" },
      meaning: {
        en: "Each applicant pastes a photo in the box and signs three times as a specimen. The post office matches your later signatures with these.",
        hi: "हर आवेदक बॉक्स में फ़ोटो चिपकाता है और नमूने के तौर पर तीन बार हस्ताक्षर करता है। डाकघर आगे आपके हस्ताक्षर इन्हीं से मिलाता है।"
      },
      write: {
        en: "Paste your photo (the form says \"Paste photograph\"). Sign the same way all three times and write your name below. India Post's e-book asks for 2 passport-size photos.",
        hi: "अपनी फ़ोटो चिपकाएँ (फॉर्म पर \"Paste photograph\" लिखा है)। तीनों बार एक जैसे हस्ताक्षर करें और नीचे अपना नाम लिखें। इंडिया पोस्ट की ई-बुक में 2 पासपोर्ट साइज़ फ़ोटो माँगी गई हैं।"
      },
      documents: { en: ["2 passport-size photos"], hi: ["2 पासपोर्ट साइज़ फ़ोटो"] },
      mistakes: {
        en: ["Signing differently in the three boxes", "Not pasting the photo"],
        hi: ["तीनों खानों में अलग-अलग हस्ताक्षर करना", "फ़ोटो न चिपकाना"]
      }
    },
    {
      label: { en: "Additional Facilities", hi: "अतिरिक्त सुविधाएँ" },
      meaning: {
        en: "Extra services for a Post Office Savings Account: Cheque Book, IPPB account, Aadhaar Seeding, ATM Card, Internet Banking, Mobile Banking, and insurance/pension schemes PMSBY, PMJJBY and APY.",
        hi: "डाकघर बचत खाते के साथ मिलने वाली अतिरिक्त सेवाएँ: चेक बुक, IPPB खाता, आधार सीडिंग, एटीएम कार्ड, इंटरनेट बैंकिंग, मोबाइल बैंकिंग, और बीमा/पेंशन योजनाएँ PMSBY, PMJJBY और APY।"
      },
      write: {
        en: "Tick only what you want. For ATM, internet/mobile banking and the insurance/pension schemes, the form says \"Prescribed form to be enclosed\", so ask for those forms too. The scheme rules give one 10-leaf cheque book free in a year.",
        hi: "सिर्फ़ वही टिक करें जो आपको चाहिए। एटीएम, इंटरनेट/मोबाइल बैंकिंग और बीमा/पेंशन योजनाओं के लिए फॉर्म पर लिखा है \"निर्धारित फॉर्म साथ लगाएँ\", इसलिए वे फॉर्म भी माँग लें। योजना के नियमों के अनुसार साल में 10 पन्नों की एक चेक बुक मुफ़्त मिलती है।"
      },
      documents: { en: ["Separate prescribed forms for ATM / net banking / PMSBY / PMJJBY / APY, if ticked"], hi: ["एटीएम / नेट बैंकिंग / PMSBY / PMJJBY / APY के अलग फॉर्म, अगर टिक किया है"] },
      mistakes: {
        en: ["Ticking ATM or net banking but not attaching the separate form"],
        hi: ["एटीएम या नेट बैंकिंग टिक करना पर उसका अलग फॉर्म न लगाना"]
      }
    },
    {
      label: { en: "Nomination (section 4) and signature", hi: "नामांकन / नॉमिनी (खंड 4) और हस्ताक्षर" },
      meaning: {
        en: "A nominee is the person who gets the money in the account if you die. The table has rows for up to 4 nominees: name and relationship, full address, nominee's Aadhaar (optional), date of birth if the nominee is a minor, and share of entitlement.",
        hi: "नॉमिनी वह व्यक्ति है जिसे आपकी मृत्यु होने पर खाते का पैसा मिलेगा। तालिका में 4 नॉमिनी तक की पंक्तियाँ हैं: नाम और रिश्ता, पूरा पता, नॉमिनी का आधार (वैकल्पिक), नाबालिग नॉमिनी की जन्म तिथि, और हिस्सा।"
      },
      write: {
        en: "Write the scheme name in the nomination sentence. If a nominee is a minor, write the name and address of the person who will receive the money for them. If the applicant cannot sign (illiterate), two witnesses must sign with name and address. Sign (or give a thumb impression) under the Declarations and under the Nomination, with place and date. How to split shares is not explained on the form; ask at the post office.",
        hi: "नामांकन वाले वाक्य में योजना का नाम लिखें। अगर नॉमिनी नाबालिग है, तो उस व्यक्ति का नाम और पता लिखें जो उसकी ओर से पैसा लेगा। अगर आवेदक हस्ताक्षर नहीं कर सकते (अनपढ़ हैं), तो दो गवाहों के नाम, पते और हस्ताक्षर ज़रूरी हैं। घोषणाओं के नीचे और नामांकन के नीचे, जगह और तारीख़ के साथ हस्ताक्षर (या अंगूठे का निशान) करें। हिस्से कैसे बाँटें, यह फॉर्म में नहीं बताया गया; डाकघर में पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Not naming a person to receive the money for a minor nominee", "No witnesses when giving a thumb impression", "Forgetting to sign under the Declarations"],
        hi: ["नाबालिग नॉमिनी के लिए पैसा लेने वाले व्यक्ति का नाम न लिखना", "अंगूठा लगाने पर गवाह न होना", "घोषणाओं के नीचे हस्ताक्षर करना भूल जाना"]
      }
    }
  ]
});
