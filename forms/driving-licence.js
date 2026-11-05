// Checked against these official documents (all read on 2026-11-05):
// 1. "FORM 2 [Refer Rules 10, 14, 17 and 18]" of the Central Motor Vehicles Rules, 1989, "Form of application
//    for learner's licence or driving licence ..." (PDF dated 11-07-2022, parivahan.gov.in "Downloadable Forms",
//    https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-2.pdf). The page images are from this PDF.
// 2. Form 5 "Driving certificate issued by driving school or establishments" and Form 5B "Driving certificate
//    issued by accredited driving training center" (both PDFs dated 11-07-2022, same parivahan.gov.in folder).
// 3. parivahan.gov.in "Permanent License" page (https://parivahan.gov.in/en/content/permanent-license).
// 4. parivahan.gov.in "Downloadable Forms" list (https://parivahan.gov.in/en/forms-all): it lists Form 2 for
//    learner's licence AND driving licence, and has no Form 4 (only Form 4A, for an International Driving Permit).
// 5. PIB release "Clarification regarding Accredited Driver Training Centre (ADTC) & Driving Schools",
//    Ministry of Road Transport & Highways, 01 June 2024 (https://pib.gov.in/PressReleseDetailm.aspx?PRID=2022428).
// Every statement below comes from these documents. If something is not stated in them, the guide says
// "ask at your RTO / check sarathi.parivahan.gov.in" instead of guessing. No fees are given, because the
// official fee page read does not show a date and fees can differ by state.

window.FORMS.push({
  id: "driving-licence",
  verified: true,
  source: {
    title: "Form 2 (CMVR, 1989): Application for Learner's Licence or Driving Licence, parivahan.gov.in, file dated 11-07-2022; with parivahan.gov.in 'Permanent License' page and PIB release of 01-06-2024",
    url: "https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-2.pdf"
  },
  caution: {
    en: "The old separate \"Form 4\" for a driving licence is not in parivahan.gov.in's list of downloadable forms. The official list shows Form 2 for both the learner's licence and the driving licence, and Form 2 itself says it is for rule 14 (driving licence) too. But parivahan.gov.in's \"Permanent License\" page still says \"Form 4\". So this guide follows Form 2 (file dated 2022). When you apply online at sarathi.parivahan.gov.in the form is filled on screen; ask your RTO if they want a paper form and which one.",
    hi: "ड्राइविंग लाइसेंस का पुराना अलग \"फॉर्म 4\" अब parivahan.gov.in की डाउनलोड वाली फॉर्म-सूची में नहीं है। सरकारी सूची में लर्नर और पक्के, दोनों लाइसेंस के लिए फॉर्म 2 दिया है, और फॉर्म 2 पर भी लिखा है कि यह नियम 14 (ड्राइविंग लाइसेंस) के लिए भी है। पर parivahan.gov.in के \"Permanent License\" पेज पर अब भी \"फॉर्म 4\" लिखा है। इसलिए यह गाइड फॉर्म 2 (2022 की फ़ाइल) के हिसाब से है। sarathi.parivahan.gov.in पर ऑनलाइन आवेदन में फॉर्म स्क्रीन पर ही भरता है; काग़ज़ वाला फॉर्म चाहिए या नहीं, और कौन सा, यह अपने आरटीओ से पूछ लें।"
  },
  lastChecked: "2026-11-05",

  category: { en: "Government", hi: "सरकारी" },
  name: { en: "Driving Licence Application (after Learner's Licence)", hi: "पक्का ड्राइविंग लाइसेंस आवेदन (लर्नर के बाद)" },
  about: {
    en: "After your learner's licence, you apply for the permanent driving licence and give a driving test. The official parivahan.gov.in page says: you can sit the test only after holding a valid learner's licence for at least 30 days; you apply along with the learner's licence for that class of vehicle; you book a test slot online (or at the RTO); you bring a vehicle of that type to the test; and if you pass, the licence is sent by speed post to the address you gave. The application is Form 2 with \"Issue of New Driving Licence\" ticked. Fees differ by state, so check at sarathi.parivahan.gov.in or your RTO.",
    hi: "लर्नर लाइसेंस के बाद पक्के ड्राइविंग लाइसेंस के लिए आवेदन करते हैं और ड्राइविंग टेस्ट देते हैं। parivahan.gov.in के सरकारी पेज के अनुसार: टेस्ट तभी दे सकते हैं जब आपके पास कम से कम 30 दिन से वैध लर्नर लाइसेंस हो; आवेदन उसी गाड़ी की श्रेणी वाले लर्नर लाइसेंस के साथ होता है; टेस्ट का स्लॉट ऑनलाइन (या आरटीओ में) बुक करते हैं; टेस्ट के लिए उसी तरह की गाड़ी ख़ुद लानी होती है; और पास होने पर लाइसेंस आपके दिए पते पर स्पीड पोस्ट से आता है। आवेदन फॉर्म 2 है, जिसमें \"Issue of New Driving Licence\" पर टिक करना है। फ़ीस राज्य के हिसाब से अलग होती है, इसलिए sarathi.parivahan.gov.in या अपने आरटीओ से पता करें।"
  },

  fields: [
    {
      label: { en: "To, The Licencing Authority", hi: "सेवा में, लाइसेंसिंग अधिकारी" },
      quick: { en: "Form doesn't say; ask your RTO which office covers your address", hi: "फॉर्म में नहीं लिखा; अपने पते का दफ़्तर आरटीओ से पूछें" },
      meaning: {
        en: "The office that will issue your driving licence. The form leaves blank lines for its name and place.",
        hi: "वह दफ़्तर जो आपका ड्राइविंग लाइसेंस जारी करेगा। फॉर्म में उसका नाम और जगह लिखने के लिए ख़ाली लाइनें हैं।"
      },
      write: {
        en: "The form does not say which office you must choose. Ask at your RTO / check sarathi.parivahan.gov.in which licensing authority covers your address.",
        hi: "कौन सा दफ़्तर चुनना है, यह फॉर्म में नहीं लिखा। अपने पते के लिए कौन सा लाइसेंसिंग दफ़्तर है, यह अपने आरटीओ से पूछें या sarathi.parivahan.gov.in पर देखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: { en: ["Leaving it blank"], hi: ["ख़ाली छोड़ देना"] }
    },
    {
      label: { en: "Services applying for", hi: "किस सेवा के लिए आवेदन" },
      quick: { en: "Tick \"Issue of New Driving Licence\"", hi: "\"Issue of New Driving Licence\" पर टिक करें" },
      meaning: {
        en: "Form 2 is one form for 7 services. You tick one or more \"wherever applicable\". The permanent licence after your learner's licence is \"Issue of New Driving Licence\".",
        hi: "फॉर्म 2 एक ही फॉर्म है जिसमें 7 सेवाएँ हैं। जो लागू हो, उन पर एक या ज़्यादा टिक करते हैं। लर्नर के बाद पक्का लाइसेंस \"Issue of New Driving Licence\" है।"
      },
      write: {
        en: "Tick \"Issue of New Driving Licence\". Do not tick \"Issue of New Learner's Licence\" again, since you already have one.",
        hi: "\"Issue of New Driving Licence\" पर टिक करें। \"Issue of New Learner's Licence\" पर दोबारा टिक न करें, क्योंकि लर्नर लाइसेंस आपके पास पहले से है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking \"Issue of New Learner's Licence\" by habit", "Ticking \"Addition of Class of Vehicle\" when this is your first driving licence"],
        hi: ["आदत में \"Issue of New Learner's Licence\" पर टिक कर देना", "पहला ड्राइविंग लाइसेंस होते हुए \"Addition of Class of Vehicle\" पर टिक करना"]
      }
    },
    {
      label: { en: "1. Class of Vehicles (COV)", hi: "1. गाड़ी की श्रेणी (COV)" },
      quick: { en: "Tick the classes shown on your learner's licence", hi: "वही श्रेणियाँ टिक करें जो आपके लर्नर लाइसेंस पर हैं" },
      meaning: {
        en: "Which type of vehicle the licence is for: Motor Cycle Without Gear (MCWOG), Motor Cycle With Gear (MCWG), Light Motor Vehicle (e.g. a car), Adapted Vehicle (for Divyang), Medium/Heavy transport vehicle, E-Rickshaw, E-Cart and Others (tractor, crane, fork lift, etc.).",
        hi: "लाइसेंस किस गाड़ी के लिए है: बिना गियर की मोटरसाइकिल (MCWOG), गियर वाली मोटरसाइकिल (MCWG), हल्का मोटर वाहन (जैसे कार), दिव्यांगों के लिए बनी गाड़ी (Adapted Vehicle), मीडियम/भारी ट्रांसपोर्ट गाड़ी, ई-रिक्शा, ई-कार्ट और अन्य (ट्रैक्टर, क्रेन, फ़ोर्क लिफ़्ट आदि)।"
      },
      write: {
        en: "The parivahan.gov.in page says the application is made along with the learner's licence obtained for that class of vehicle, and you bring a vehicle of that type to the test. So tick only classes that are on your learner's licence. The form's explanation says a Light Motor Vehicle (which includes a motor car) does not exceed 7,500 kg.",
        hi: "parivahan.gov.in के पेज के अनुसार आवेदन उसी श्रेणी के लर्नर लाइसेंस के साथ होता है, और टेस्ट में उसी तरह की गाड़ी लानी होती है। इसलिए सिर्फ़ वही श्रेणियाँ टिक करें जो आपके लर्नर लाइसेंस पर हैं। फॉर्म की व्याख्या के अनुसार हल्का मोटर वाहन (जिसमें कार भी आती है) 7,500 किलो से ज़्यादा का नहीं होता।"
      },
      documents: { en: ["Your learner's licence for the same class"], hi: ["उसी श्रेणी का आपका लर्नर लाइसेंस"] },
      mistakes: {
        en: ["Ticking a class that is not on your learner's licence", "Ticking \"without gear\" when your learner's licence and test vehicle are a geared bike"],
        hi: ["ऐसी श्रेणी टिक करना जो लर्नर लाइसेंस पर नहीं है", "लर्नर लाइसेंस और टेस्ट वाली गाड़ी गियर वाली बाइक हो, फिर भी \"बिना गियर\" टिक करना"]
      }
    },
    {
      label: { en: "Aadhaar number (or Aadhaar application number)", hi: "आधार नंबर (या आधार आवेदन संख्या)" },
      quick: { en: "12-digit Aadhaar number, or Aadhaar application number", hi: "12 अंकों का आधार नंबर, या आधार आवेदन संख्या लिखें" },
      meaning: {
        en: "The form asks for your Aadhaar card number \"if already available\". If you have applied but not got it yet, it asks for the Aadhaar application number.",
        hi: "फॉर्म आधार नंबर माँगता है, \"अगर पहले से है\"। अगर आधार के लिए आवेदन किया है पर अभी मिला नहीं, तो आधार आवेदन संख्या माँगी गई है।"
      },
      write: {
        en: "Write your 12-digit Aadhaar number, or your Aadhaar application number if you only applied.",
        hi: "अपना 12 अंकों का आधार नंबर लिखें, या सिर्फ़ आवेदन किया है तो आवेदन संख्या लिखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: { en: ["Wrong or missing digits"], hi: ["अंक ग़लत या छूट जाना"] }
    },
    {
      label: { en: "2 & 3. Your name and father/mother/husband/guardian", hi: "2 और 3. आपका नाम और पिता/माता/पति/अभिभावक" },
      quick: { en: "Name in CAPITALS, same as learner's licence; tick relation", hi: "नाम कैपिटल में, लर्नर लाइसेंस जैसा; रिश्ते पर टिक करें" },
      meaning: {
        en: "Section 2 is \"in Capital Letters\": First Name, Middle Name, Last Name, and \"Son/wife/daughter of\". Section 3 asks you to tick Father, Mother, Husband or Guardian and write that person's first, middle and last name.",
        hi: "खंड 2 \"कैपिटल अक्षरों में\" भरना है: पहला नाम, बीच का नाम, आख़िरी नाम, और \"किसके पुत्र/पत्नी/पुत्री\"। खंड 3 में पिता, माता, पति या अभिभावक में से एक पर टिक करके उनका पहला, बीच का और आख़िरी नाम लिखना है।"
      },
      write: {
        en: "Write your name in CAPITAL letters. Keep it the same as on your learner's licence and documents. In section 3 tick one relation and write that person's full name.",
        hi: "अपना नाम कैपिटल अक्षरों में लिखें, वैसा ही जैसा लर्नर लाइसेंस और दस्तावेज़ों पर है। खंड 3 में एक रिश्ते पर टिक करके उस व्यक्ति का पूरा नाम लिखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing in small letters", "Spelling the name differently from your learner's licence", "Not ticking whose name you wrote in section 3"],
        hi: ["छोटे अक्षरों में लिखना", "लर्नर लाइसेंस से अलग स्पेलिंग लिखना", "खंड 3 में यह टिक न करना कि किसका नाम लिखा है"]
      }
    },
    {
      label: { en: "Date of birth, identification mark and gender", hi: "जन्म तिथि, पहचान चिह्न और लिंग" },
      quick: { en: "Date as dd/mm/yyyy; a body mark; tick one gender", hi: "तारीख़ दिन/महीना/साल; शरीर का कोई निशान; एक लिंग टिक करें" },
      meaning: {
        en: "Date of birth is printed as dd/mm/yyyy. Identification mark is a mark on your body that helps identify you. Gender options: Male, Female, Transgender.",
        hi: "जन्म तिथि dd/mm/yyyy के रूप में छपी है। पहचान चिह्न यानी शरीर पर कोई ऐसा निशान जिससे आपकी पहचान हो सके। लिंग के विकल्प: पुरुष, महिला, ट्रांसजेंडर।"
      },
      write: {
        en: "Day first, then month, then the full year, same as on your age proof. The form does not explain what counts as an identification mark; ask at your RTO if unsure. Tick one gender box.",
        hi: "पहले दिन, फिर महीना, फिर पूरा साल लिखें, वैसा ही जैसा उम्र के प्रमाण पर है। कौन सा निशान पहचान चिह्न माना जाए, यह फॉर्म में नहीं समझाया; पक्का न हो तो आरटीओ से पूछें। लिंग के एक खाने पर टिक करें।"
      },
      documents: { en: ["Your age proof (see 'Documents attached')"], hi: ["उम्र का प्रमाण ('लगाए गए दस्तावेज़' देखें)"] },
      mistakes: {
        en: ["Writing the month before the day", "A date that doesn't match your learner's licence or age proof"],
        hi: ["दिन से पहले महीना लिखना", "लर्नर लाइसेंस या उम्र के प्रमाण से अलग तारीख़ लिखना"]
      }
    },
    {
      label: { en: "Education, blood group, mobile and email", hi: "शिक्षा, ब्लड ग्रुप, मोबाइल और ईमेल" },
      quick: { en: "Email and landline are optional; give a mobile you keep", hi: "ईमेल और लैंडलाइन वैकल्पिक हैं; ऐसा मोबाइल दें जो आपके पास रहे" },
      meaning: {
        en: "Section 2 also asks for Educational Qualification, Blood Group, Mobile number, Email and Landline. Only Email and Landline are marked \"(optional)\".",
        hi: "खंड 2 में शैक्षिक योग्यता, ब्लड ग्रुप, मोबाइल नंबर, ईमेल और लैंडलाइन भी माँगे गए हैं। सिर्फ़ ईमेल और लैंडलाइन पर \"(optional)\" यानी वैकल्पिक लिखा है।"
      },
      write: {
        en: "Write a mobile number you will keep. If you don't know your blood group, ask at your RTO / check sarathi.parivahan.gov.in what to write; do not guess.",
        hi: "ऐसा मोबाइल नंबर लिखें जो आगे भी आपके पास रहे। अगर ब्लड ग्रुप नहीं पता, तो क्या लिखें यह आरटीओ से पूछें या sarathi.parivahan.gov.in देखें; अंदाज़े से न लिखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Guessing your blood group", "Giving a mobile number you don't use"],
        hi: ["अंदाज़े से ब्लड ग्रुप लिख देना", "ऐसा मोबाइल नंबर देना जो इस्तेमाल नहीं करते"]
      }
    },
    {
      label: { en: "4. Address", hi: "4. पता" },
      quick: { en: "Full present address (licence is posted here); permanent if different", hi: "वर्तमान पता पूरा (लाइसेंस यहीं डाक से आएगा); स्थायी पता अलग हो तो" },
      meaning: {
        en: "Two columns: Present Address, which the form says \"shall be printed on Licence\", and Permanent Address, \"Only if different from Present Address\". Each has House No., Street/Locality/Police Station, Landmark, Village/Town, Sub-Dist/Taluk, District, State and Pin code.",
        hi: "दो कॉलम हैं: वर्तमान पता, जो फॉर्म के अनुसार \"लाइसेंस पर छपेगा\", और स्थायी पता, \"सिर्फ़ अगर वर्तमान पते से अलग हो\"। दोनों में मकान नंबर, गली/मोहल्ला/थाना, लैंडमार्क, गाँव/शहर, तहसील, ज़िला, राज्य और पिन कोड के खाने हैं।"
      },
      write: {
        en: "Fill the present address fully, with Pin code. The form says address proof must be enclosed for a new driving licence. The parivahan.gov.in page says the driving licence is sent by speed post to the address you give, so write one where you can receive post.",
        hi: "वर्तमान पता पिन कोड समेत पूरा भरें। फॉर्म के अनुसार नए ड्राइविंग लाइसेंस के लिए पते का प्रमाण लगाना ज़रूरी है। parivahan.gov.in के अनुसार लाइसेंस आपके दिए पते पर स्पीड पोस्ट से भेजा जाता है, इसलिए ऐसा पता लिखें जहाँ डाक मिल सके।"
      },
      documents: { en: ["Address proof (see 'Documents attached')"], hi: ["पते का प्रमाण ('लगाए गए दस्तावेज़' देखें)"] },
      mistakes: {
        en: ["Writing an address that doesn't match your address proof", "Missing the Pin code, so the posted licence may not reach you"],
        hi: ["पते के प्रमाण से अलग पता लिखना", "पिन कोड छोड़ देना, जिससे डाक से आया लाइसेंस न पहुँचे"]
      }
    },
    {
      label: { en: "5. Driving school details (transport category only)", hi: "5. ड्राइविंग स्कूल की जानकारी (सिर्फ़ ट्रांसपोर्ट श्रेणी)" },
      quick: { en: "Only for adding a transport class; others ask RTO", hi: "सिर्फ़ ट्रांसपोर्ट श्रेणी जोड़ने के लिए; बाकी आरटीओ से पूछें" },
      meaning: {
        en: "Section 5 is \"In case of request for Addition of a Class of Vehicle in Transport Category\". It asks for the driving school name, enrollment number and date, certificate number and date, and training period (from/to).",
        hi: "खंड 5 सिर्फ़ \"ट्रांसपोर्ट श्रेणी की गाड़ी जोड़ने\" के आवेदन के लिए है। इसमें ड्राइविंग स्कूल का नाम, दाख़िला नंबर और तारीख़, सर्टिफ़िकेट नंबर और तारीख़, और ट्रेनिंग की अवधि (कब से कब तक) माँगी गई है।"
      },
      write: {
        en: "For a first licence for a bike or car, the form does not say you must fill this. If you trained at a driving school and have its certificate (Form 5, or Form 5B from an accredited centre), ask at your RTO / check sarathi.parivahan.gov.in whether to enter its details here.",
        hi: "बाइक या कार के पहले लाइसेंस के लिए फॉर्म में यह भरना ज़रूरी नहीं लिखा। अगर आपने ड्राइविंग स्कूल से ट्रेनिंग ली है और उसका सर्टिफ़िकेट (फॉर्म 5, या मान्यता प्राप्त सेंटर का फॉर्म 5B) है, तो उसकी जानकारी यहाँ लिखें या नहीं, यह आरटीओ से पूछें या sarathi.parivahan.gov.in देखें।"
      },
      documents: { en: ["Driving school certificate (Form 5 or Form 5B), if you have one"], hi: ["ड्राइविंग स्कूल का सर्टिफ़िकेट (फॉर्म 5 या फॉर्म 5B), अगर है"] },
      mistakes: {
        en: ["Writing dates that don't match the school certificate"],
        hi: ["स्कूल के सर्टिफ़िकेट से अलग तारीख़ें लिखना"]
      }
    },
    {
      label: { en: "6. Your learner's licence details", hi: "6. आपके लर्नर लाइसेंस की जानकारी" },
      quick: { en: "Copy number, classes, issuing office and validity from learner's licence", hi: "लर्नर लाइसेंस से नंबर, श्रेणी, जारी करने वाला दफ़्तर और वैधता लिखें" },
      meaning: {
        en: "Section 6 is \"Particulars of existing Licence (Learner's or Permanent)\": Licence Number, Class of Vehicle(s), Name of the Licencing Authority which issued the Licence, and Validity Period (from date, to date).",
        hi: "खंड 6 \"पहले से मौजूद लाइसेंस (लर्नर या पक्का)\" की जानकारी है: लाइसेंस नंबर, गाड़ी की श्रेणी, लाइसेंस जारी करने वाले दफ़्तर का नाम, और वैधता (किस तारीख़ से किस तारीख़ तक)।"
      },
      write: {
        en: "Copy these exactly from your learner's licence. The parivahan.gov.in page says you can appear for the driving test only after holding a valid learner's licence for at least 30 days, so check the \"from\" date and make sure it has not expired.",
        hi: "ये सब अपने लर्नर लाइसेंस से हूबहू लिखें। parivahan.gov.in के अनुसार ड्राइविंग टेस्ट तभी दे सकते हैं जब लर्नर लाइसेंस कम से कम 30 दिन से वैध हो, इसलिए \"from\" वाली तारीख़ देख लें और यह भी कि लर्नर लाइसेंस की मियाद ख़त्म न हुई हो।"
      },
      documents: { en: ["Your valid learner's licence"], hi: ["आपका वैध लर्नर लाइसेंस"] },
      mistakes: {
        en: ["Leaving this blank on a driving licence application", "Booking the test before 30 days of the learner's licence", "Wrong licence number"],
        hi: ["ड्राइविंग लाइसेंस के आवेदन में यह ख़ाली छोड़ना", "लर्नर लाइसेंस के 30 दिन पूरे होने से पहले टेस्ट बुक करना", "ग़लत लाइसेंस नंबर लिखना"]
      }
    },
    {
      label: { en: "7. Documents attached (Annexure)", hi: "7. लगाए गए दस्तावेज़ (अनुलग्नक)" },
      quick: { en: "Tick the address/age proofs and other papers you attach", hi: "जो पते/उम्र के प्रमाण और बाकी काग़ज़ लगा रहे हैं, उन पर टिक करें" },
      meaning: {
        en: "The Annexure lists the documents you can submit or upload. The form says: \"Select only one if the proof is common for Address and Age\". It also lists \"other documents ... if applicable\", including the Driving Certificate from a driving school in Form 5 and a photograph.",
        hi: "अनुलग्नक में वे दस्तावेज़ लिखे हैं जो आप जमा या अपलोड कर सकते हैं। फॉर्म में लिखा है: अगर एक ही दस्तावेज़ पते और उम्र दोनों का प्रमाण है, तो सिर्फ़ वही एक चुनें। इसमें \"अगर लागू हो\" वाले दूसरे दस्तावेज़ भी हैं, जैसे ड्राइविंग स्कूल का फॉर्म 5 वाला सर्टिफ़िकेट और फ़ोटो।"
      },
      write: {
        en: "Tick what you attach. A PIB release of the Road Transport Ministry (1 June 2024) says a driving licence application under rule 14 is to be accompanied by Form 5 or Form 5B \"as applicable\"; ask at your RTO whether you need one. The Medical Certificate in Form-1A is listed for renewal above 40 years of age or for a Transport Licence.",
        hi: "जो लगा रहे हैं उन पर टिक करें। सड़क परिवहन मंत्रालय की PIB प्रेस रिलीज़ (1 जून 2024) के अनुसार नियम 14 के तहत ड्राइविंग लाइसेंस के आवेदन के साथ \"जहाँ लागू हो\" फॉर्म 5 या फॉर्म 5B लगता है; आपको चाहिए या नहीं, यह आरटीओ से पूछें। फॉर्म-1A वाला मेडिकल सर्टिफ़िकेट 40 साल से ऊपर नवीनीकरण या ट्रांसपोर्ट लाइसेंस के लिए लिखा है।"
      },
      documents: {
        en: ["Any of: Aadhaar Card", "Electoral Roll", "Life Insurance Policy", "Passport", "School Certificate", "Birth Certificate", "Pay slip from a State/Central Government office or local body", "Affidavit sworn before an Executive Magistrate, Notary Public or First Class Judicial Magistrate", "Age certificate from a Registered Medical Practitioner not below the rank of Civil Surgeon", "Any other document specified by the State Government", "If applicable: driving school certificate (Form 5) or accredited centre certificate (Form 5B)", "Photograph"],
        hi: ["इनमें से कोई: आधार कार्ड", "मतदाता सूची (Electoral Roll)", "जीवन बीमा पॉलिसी", "पासपोर्ट", "स्कूल सर्टिफ़िकेट", "जन्म प्रमाण पत्र", "राज्य/केंद्र सरकार के दफ़्तर या स्थानीय निकाय की वेतन पर्ची", "कार्यकारी मजिस्ट्रेट, नोटरी पब्लिक या प्रथम श्रेणी न्यायिक मजिस्ट्रेट के सामने बना हलफ़नामा", "कम से कम सिविल सर्जन स्तर के पंजीकृत डॉक्टर का उम्र प्रमाण पत्र", "राज्य सरकार द्वारा तय कोई अन्य दस्तावेज़", "अगर लागू हो: ड्राइविंग स्कूल का सर्टिफ़िकेट (फॉर्म 5) या मान्यता प्राप्त सेंटर का सर्टिफ़िकेट (फॉर्म 5B)", "फ़ोटो"]
      },
      mistakes: {
        en: ["Not ticking the documents you attached", "Giving a different address proof from the one used for the learner's licence without checking it matches the address you wrote"],
        hi: ["लगाए गए दस्तावेज़ों पर टिक न करना", "लर्नर वाले से अलग पते का प्रमाण देना और यह न देखना कि वह लिखे गए पते से मेल खाता है"]
      }
    },
    {
      label: { en: "Self-Declaration as to Physical Fitness (and parent consent for a minor)", hi: "शारीरिक फ़िटनेस की स्व-घोषणा (और नाबालिग के लिए माता-पिता की सहमति)" },
      quick: { en: "Answer all six Yes/No truthfully and sign; minors' parent signs too", hi: "छहों हाँ/ना के सच्चे जवाब देकर हस्ताक्षर करें; नाबालिग हो तो अभिभावक भी" },
      meaning: {
        en: "Six Yes/No health questions: (a) epilepsy or sudden fainting/giddiness, (b) can you read a car number plate from 25 metres in good daylight (with glasses, if worn), (c) loss of a hand or foot or weak arm/leg muscles, (d) night blindness, (e) deafness to the ordinary sound signal, (f) any other disease that could make your driving dangerous. Below it is a declaration under section 7(2) of the Motor Vehicles Act, 1988, for a parent or guardian of a minor.",
        hi: "सेहत के छह हाँ/ना सवाल: (a) मिर्गी या अचानक बेहोशी/चक्कर, (b) क्या अच्छी धूप में 25 मीटर दूर से कार की नंबर प्लेट पढ़ सकते हैं (चश्मा लगाते हों तो उसके साथ), (c) हाथ या पैर न होना या बाँह/टाँग की मांसपेशियों में कमज़ोरी, (d) रतौंधी, (e) इतना कम सुनना कि सामान्य हॉर्न/आवाज़ न सुनें, (f) कोई और बीमारी जिससे आपका गाड़ी चलाना ख़तरनाक हो। इसके नीचे नाबालिग के माता-पिता/अभिभावक के लिए मोटर वाहन अधिनियम, 1988 की धारा 7(2) वाली घोषणा है।"
      },
      write: {
        en: "Answer each question truthfully, then sign or give your thumb impression. The note says if you answer \"Yes\" to (a), (c), (e) or (f), or \"No\" to (b) or (d), give full details. The parent/guardian declaration is only if the applicant is a minor; its wording gives consent for the learner's licence, so ask at your RTO whether it is needed again for the driving licence.",
        hi: "हर सवाल का सच्चा जवाब दें, फिर हस्ताक्षर करें या अंगूठा लगाएँ। नोट के अनुसार अगर (a), (c), (e) या (f) का जवाब \"हाँ\" है, या (b) या (d) का जवाब \"ना\" है, तो पूरी जानकारी लिखें। माता-पिता/अभिभावक की घोषणा सिर्फ़ तब है जब आवेदक नाबालिग हो; इसमें लर्नर लाइसेंस की सहमति लिखी है, इसलिए ड्राइविंग लाइसेंस के लिए यह दोबारा चाहिए या नहीं, यह आरटीओ से पूछें।"
      },
      documents: {
        en: ["Form 1A medical certificate, only if you are applying for a Transport Licence (or renewal above 40)"],
        hi: ["फॉर्म 1A मेडिकल सर्टिफ़िकेट, सिर्फ़ ट्रांसपोर्ट लाइसेंस के लिए (या 40 से ज़्यादा उम्र में नवीनीकरण के लिए)"]
      },
      mistakes: {
        en: ["Ticking answers without reading each question", "Answering \"Yes\" to (a), (c), (e) or (f) without giving details"],
        hi: ["बिना पढ़े जवाब टिक कर देना", "(a), (c), (e) या (f) में \"हाँ\" लिखकर पूरी जानकारी न देना"]
      }
    },
    {
      label: { en: "Photograph, declaration and signature", hi: "फ़ोटो, घोषणा और हस्ताक्षर" },
      quick: { en: "Photo up to 50 KB; organ donation YES/NO; strike wrong option; sign", hi: "फ़ोटो 50 KB तक; अंग दान हाँ/ना; ग़लत विकल्प काटें; हस्ताक्षर करें" },
      meaning: {
        en: "The form has space for a passport-size photo. The declaration asks if you are willing to donate your organ/tissue in case of death (YES/NO), and says the facts and documents are true and that you \"have/have not been disqualified\" from holding a Driving Licence.",
        hi: "फॉर्म में पासपोर्ट साइज़ फ़ोटो की जगह है। घोषणा में पूछा गया है कि क्या आप मृत्यु के बाद अंग/ऊतक दान करना चाहते हैं (हाँ/ना), और आप लिखते हैं कि दी गई जानकारी और दस्तावेज़ सच्चे हैं, और आपको ड्राइविंग लाइसेंस रखने से \"अयोग्य ठहराया गया है/नहीं ठहराया गया है\"।"
      },
      write: {
        en: "For an online application, the form says to upload a photo of \"not more than 50 KB\". Choose YES or NO for organ donation. Strike out \"have\" or \"have not\" so the true one remains. Write the date and sign.",
        hi: "ऑनलाइन आवेदन में फॉर्म के अनुसार फ़ोटो \"50 KB से ज़्यादा नहीं\" होनी चाहिए। अंग दान के लिए हाँ या ना चुनें। \"have\" या \"have not\" में से जो सच न हो उसे काट दें। तारीख़ लिखें और हस्ताक्षर करें।"
      },
      documents: { en: ["Recent passport-size photo"], hi: ["हाल की पासपोर्ट साइज़ फ़ोटो"] },
      mistakes: {
        en: ["Uploading a photo larger than 50 KB", "Leaving both \"have\" and \"have not\" uncut", "Skipping the organ donation YES/NO"],
        hi: ["50 KB से बड़ी फ़ोटो अपलोड करना", "\"have\" और \"have not\" दोनों को बिना काटे छोड़ देना", "अंग दान वाला हाँ/ना छोड़ देना"]
      }
    },
    {
      label: { en: "Driving test (for office use)", hi: "ड्राइविंग टेस्ट (दफ़्तर भरेगा)" },
      quick: { en: "Leave blank; the office records your driving test result", hi: "ख़ाली छोड़ें; टेस्ट का नतीजा दफ़्तर लिखेगा" },
      meaning: {
        en: "Under \"For office use only\", the form has a row \"Driving Test (Rule 15 of the Central Motor Vehicles Rules, 1989)\" with date of test and result Pass/Fail, and \"The Learner's licence/Driving Licence is Issued / Refused\".",
        hi: "\"For office use only\" वाले हिस्से में \"ड्राइविंग टेस्ट (केंद्रीय मोटर वाहन नियम, 1989 का नियम 15)\" की लाइन है, जिसमें टेस्ट की तारीख़ और नतीजा पास/फ़ेल, और \"लाइसेंस जारी / मना\" लिखा जाता है।"
      },
      write: {
        en: "Do not write here. The parivahan.gov.in page says: book a test slot online or at the RTO, bring a vehicle of the type you applied for, and show the officer you can drive it and do the tasks in Rule 15(2). Per PIB (1 June 2024), a Form 5B certificate from an Accredited Driver Training Centre exempts you from this driving test, but a Form 5 from an ordinary driving school does not; the licensing authority still decides on issuing the licence.",
        hi: "यहाँ कुछ न लिखें। parivahan.gov.in के अनुसार: टेस्ट का स्लॉट ऑनलाइन या आरटीओ में बुक करें, जिस श्रेणी के लिए आवेदन किया है उसी तरह की गाड़ी लाएँ, और अफ़सर को दिखाएँ कि आप उसे चला सकते हैं और नियम 15(2) वाले काम कर सकते हैं। PIB (1 जून 2024) के अनुसार मान्यता प्राप्त ड्राइवर ट्रेनिंग सेंटर (ADTC) का फॉर्म 5B सर्टिफ़िकेट होने पर यह ड्राइविंग टेस्ट माफ़ है, पर साधारण ड्राइविंग स्कूल के फॉर्म 5 से माफ़ नहीं होता; लाइसेंस देने का फ़ैसला फिर भी लाइसेंसिंग अधिकारी का ही है।"
      },
      documents: { en: ["A vehicle of the class you applied for, on test day"], hi: ["टेस्ट के दिन उसी श्रेणी की गाड़ी"] },
      mistakes: {
        en: ["Writing in the office-use boxes", "Coming to the test without a vehicle of the right type", "Assuming any driving school certificate skips the test (only Form 5B from an accredited centre does)"],
        hi: ["दफ़्तर वाले खानों में लिख देना", "टेस्ट पर सही तरह की गाड़ी के बिना आना", "यह मान लेना कि किसी भी ड्राइविंग स्कूल के सर्टिफ़िकेट से टेस्ट माफ़ है (सिर्फ़ मान्यता प्राप्त सेंटर के फॉर्म 5B से होता है)"]
      },
      changed: {
        en: "Since 1 July 2021 (rules 31B to 31J, GSR 394(E)), a Form 5B certificate from an Accredited Driver Training Centre exempts you from the RTO driving test. The Ministry repeated this on 1 June 2024 and said no change was planned.",
        hi: "1 जुलाई 2021 से (नियम 31B से 31J, GSR 394(E)) मान्यता प्राप्त ड्राइवर ट्रेनिंग सेंटर के फॉर्म 5B सर्टिफ़िकेट से आरटीओ का ड्राइविंग टेस्ट माफ़ है। मंत्रालय ने 1 जून 2024 को यही दोहराया और कहा कि कोई बदलाव नहीं होने वाला।"
      }
    }
  ]
});
