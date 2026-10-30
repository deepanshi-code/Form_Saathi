// Checked against the official "FORM 2 [Refer Rules 10, 14, 17 and 18]" of the Central Motor
// Vehicles Rules, 1989 (PDF dated 11-07-2022 on parivahan.gov.in, "Downloadable Forms" > Driving
// License) and the official "FORM 1A" Medical Certificate PDF from the same page (dated 11-07-2022).
// Every statement below comes from those two documents. If something is not stated in them,
// the guide says "ask at your RTO / check parivahan.gov.in" instead of guessing.

window.FORMS.push({
  id: "learner-licence",
  verified: true,
  source: {
    title: "Form 2 (CMVR, 1989): Application for Learner's Licence or Driving Licence, parivahan.gov.in, file dated 11-07-2022",
    url: "https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-2.pdf"
  },
  lastChecked: "2026-10-30",

  category: { en: "Government", hi: "सरकारी" },
  name: { en: "Learner's Licence Application (Form 2)", hi: "लर्नर लाइसेंस का आवेदन (फॉर्म 2)" },
  about: {
    en: "Form 2 is one common form for a new learner's licence, a new driving licence, adding a vehicle class, renewal, duplicate, and change of address or name. For a learner's licence you tick \"Issue of New Learner's Licence\". Personal details go in capital letters. You can apply online at sarathi.parivahan.gov.in; fees and steps can differ by state, so check there or at your RTO.",
    hi: "फॉर्म 2 एक ही फॉर्म है जो नए लर्नर लाइसेंस, नए ड्राइविंग लाइसेंस, नई गाड़ी की श्रेणी जोड़ने, नवीनीकरण, डुप्लीकेट, और पता या नाम बदलने, सबके लिए है। लर्नर लाइसेंस के लिए \"Issue of New Learner's Licence\" पर टिक करें। निजी जानकारी कैपिटल अक्षरों में भरें। ऑनलाइन आवेदन sarathi.parivahan.gov.in पर होता है; फ़ीस और तरीका राज्य के हिसाब से अलग हो सकता है, इसलिए वहाँ या अपने आरटीओ से पता करें।"
  },

  fields: [
    {
      label: { en: "To, The Licencing Authority", hi: "सेवा में, लाइसेंसिंग अधिकारी" },
      meaning: {
        en: "The office that will issue your licence. The form leaves blank lines for its name and place.",
        hi: "वह दफ़्तर जो आपका लाइसेंस जारी करेगा। फॉर्म में उसका नाम और जगह लिखने के लिए ख़ाली लाइनें हैं।"
      },
      write: {
        en: "The form does not say which office you must choose. Ask at your RTO / check parivahan.gov.in which licensing authority covers your address.",
        hi: "कौन सा दफ़्तर चुनना है, यह फॉर्म में नहीं लिखा। अपने पते के लिए कौन सा लाइसेंसिंग दफ़्तर है, यह अपने आरटीओ से पूछें या parivahan.gov.in पर देखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: { en: ["Leaving it blank"], hi: ["ख़ाली छोड़ देना"] }
    },
    {
      label: { en: "Services applying for", hi: "किस सेवा के लिए आवेदन" },
      meaning: {
        en: "The form lists 7 services. You can tick one or more \"wherever applicable\".",
        hi: "फॉर्म में 7 सेवाएँ लिखी हैं। जो लागू हो, उन पर एक या ज़्यादा टिक कर सकते हैं।"
      },
      write: {
        en: "For a first licence, tick \"Issue of New Learner's Licence\".",
        hi: "पहली बार लाइसेंस बनवा रहे हैं तो \"Issue of New Learner's Licence\" पर टिक करें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking \"Issue of New Driving Licence\" when you don't yet have a learner's licence"],
        hi: ["लर्नर लाइसेंस न होते हुए \"Issue of New Driving Licence\" पर टिक कर देना"]
      }
    },
    {
      label: { en: "1. Class of Vehicles (COV)", hi: "1. गाड़ी की श्रेणी (COV)" },
      meaning: {
        en: "Which type of vehicle you want to learn. Options include Motor Cycle Without Gear (MCWOG, e.g. scooty-type), Motor Cycle With Gear (MCWG), Light Motor Vehicle (e.g. a car), Adapted Vehicle (for Divyang), Medium/Heavy transport vehicle, E-Rickshaw, E-Cart and Others (tractor, crane, fork lift, etc.).",
        hi: "आप कौन सी गाड़ी चलाना सीखना चाहते हैं। विकल्प हैं: बिना गियर की मोटरसाइकिल (MCWOG, जैसे स्कूटी), गियर वाली मोटरसाइकिल (MCWG), हल्का मोटर वाहन (जैसे कार), दिव्यांगों के लिए बनी गाड़ी (Adapted Vehicle), मीडियम/भारी ट्रांसपोर्ट गाड़ी, ई-रिक्शा, ई-कार्ट और अन्य (ट्रैक्टर, क्रेन, फ़ोर्क लिफ़्ट आदि)।"
      },
      write: {
        en: "Tick every class you want. The form's explanation says a Light Motor Vehicle (which includes a motor car) does not exceed 7,500 kg. Which classes you can get at your age is not stated on the form, so ask at your RTO / check parivahan.gov.in.",
        hi: "जितनी श्रेणियाँ चाहिए, सब पर टिक करें। फॉर्म की व्याख्या के अनुसार हल्का मोटर वाहन (जिसमें कार भी आती है) 7,500 किलो से ज़्यादा का नहीं होता। आपकी उम्र में कौन सी श्रेणी मिल सकती है, यह फॉर्म में नहीं लिखा, इसलिए आरटीओ से पूछें या parivahan.gov.in देखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking only \"without gear\" when you will ride a geared bike", "Forgetting to tick the car (LMV) box when you want both bike and car"],
        hi: ["गियर वाली बाइक चलानी है पर सिर्फ़ \"बिना गियर\" पर टिक करना", "बाइक और कार दोनों चाहिए पर कार (LMV) वाले खाने पर टिक भूल जाना"]
      }
    },
    {
      label: { en: "Aadhaar number (or Aadhaar application number)", hi: "आधार नंबर (या आधार आवेदन संख्या)" },
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
      label: { en: "2. Name and \"Son/wife/daughter of\"", hi: "2. नाम और \"पुत्र/पत्नी/पुत्री\"" },
      meaning: {
        en: "Your name in three boxes: First Name, Middle Name, Last Name. Section 2 says \"in Capital Letters\". Below it you write whose son, wife or daughter you are.",
        hi: "आपका नाम तीन खानों में: पहला नाम, बीच का नाम, आख़िरी नाम। खंड 2 में लिखा है \"कैपिटल अक्षरों में\"। उसके नीचे लिखना है कि आप किसके पुत्र, पत्नी या पुत्री हैं।"
      },
      write: {
        en: "Write your name in CAPITAL letters. Section 3 then asks you to tick Father, Mother, Husband or Guardian and write that person's full name.",
        hi: "अपना नाम कैपिटल अक्षरों में लिखें। फिर खंड 3 में पिता, माता, पति या अभिभावक में से एक पर टिक करके उनका पूरा नाम लिखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing in small letters", "Not ticking whose name you wrote in section 3"],
        hi: ["छोटे अक्षरों में लिखना", "खंड 3 में यह टिक न करना कि किसका नाम लिखा है"]
      }
    },
    {
      label: { en: "Date of birth and gender", hi: "जन्म तिथि और लिंग" },
      meaning: {
        en: "Date of birth is printed as dd/mm/yyyy. Gender options: Male, Female, Transgender.",
        hi: "जन्म तिथि dd/mm/yyyy के रूप में छपी है। लिंग के विकल्प: पुरुष, महिला, ट्रांसजेंडर।"
      },
      write: {
        en: "Day first, then month, then the full year. Tick one gender box.",
        hi: "पहले दिन, फिर महीना, फिर पूरा साल लिखें। लिंग के एक खाने पर टिक करें।"
      },
      documents: { en: ["Your age proof (see 'Proof of address and age')"], hi: ["उम्र का प्रमाण ('पते और उम्र का प्रमाण' देखें)"] },
      mistakes: {
        en: ["Writing the month before the day", "A date that doesn't match your age proof"],
        hi: ["दिन से पहले महीना लिखना", "उम्र के प्रमाण से अलग तारीख़ लिखना"]
      }
    },
    {
      label: { en: "Identification mark", hi: "पहचान चिह्न" },
      meaning: {
        en: "A mark on your body that helps identify you. The medical certificate (Form 1A) has space for two identification marks.",
        hi: "शरीर पर कोई ऐसा निशान जिससे आपकी पहचान हो सके। मेडिकल सर्टिफ़िकेट (फॉर्म 1A) में दो पहचान चिह्नों की जगह है।"
      },
      write: {
        en: "The form does not explain what counts as a mark. Ask at your RTO / check parivahan.gov.in if unsure.",
        hi: "कौन सा निशान लिखना ठीक है, यह फॉर्म में नहीं समझाया गया। पक्का न हो तो आरटीओ से पूछें या parivahan.gov.in देखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: { en: ["Leaving it blank"], hi: ["ख़ाली छोड़ देना"] }
    },
    {
      label: { en: "Blood group, education, mobile and email", hi: "ब्लड ग्रुप, शिक्षा, मोबाइल और ईमेल" },
      meaning: {
        en: "Section 2 also asks for Educational Qualification, Blood Group, Mobile number, Email and Landline. Only Email and Landline are marked \"(optional)\".",
        hi: "खंड 2 में शैक्षिक योग्यता, ब्लड ग्रुप, मोबाइल नंबर, ईमेल और लैंडलाइन भी माँगे गए हैं। सिर्फ़ ईमेल और लैंडलाइन पर \"(optional)\" यानी वैकल्पिक लिखा है।"
      },
      write: {
        en: "Write a mobile number you will keep. Form 1A (medical certificate) treats blood group as something noted on the licence only \"if the applicant so desires\". If you don't know your blood group, ask at your RTO / check parivahan.gov.in what to write.",
        hi: "ऐसा मोबाइल नंबर लिखें जो आगे भी आपके पास रहे। फॉर्म 1A (मेडिकल सर्टिफ़िकेट) में ब्लड ग्रुप लाइसेंस पर तभी लिखा जाता है \"अगर आवेदक चाहे\"। अगर आपको अपना ब्लड ग्रुप नहीं पता, तो क्या लिखें यह आरटीओ से पूछें या parivahan.gov.in देखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Guessing your blood group", "Giving a mobile number you don't use"],
        hi: ["अंदाज़े से ब्लड ग्रुप लिख देना", "ऐसा मोबाइल नंबर देना जो इस्तेमाल नहीं करते"]
      }
    },
    {
      label: { en: "4. Address", hi: "4. पता" },
      meaning: {
        en: "Two columns: Present Address, which the form says \"shall be printed on Licence\", and Permanent Address, \"Only if different from Present Address\". Each has House No., Street/Locality/Police Station, Landmark, Village/Town, Sub-Dist/Taluk, District, State and Pin code.",
        hi: "दो कॉलम हैं: वर्तमान पता, जो फॉर्म के अनुसार \"लाइसेंस पर छपेगा\", और स्थायी पता, \"सिर्फ़ अगर वर्तमान पते से अलग हो\"। दोनों में मकान नंबर, गली/मोहल्ला/थाना, लैंडमार्क, गाँव/शहर, तहसील, ज़िला, राज्य और पिन कोड के खाने हैं।"
      },
      write: {
        en: "Fill the present address fully. Fill the permanent address only if it is different. The form says address proof must be enclosed for a new learner's licence.",
        hi: "वर्तमान पता पूरा भरें। स्थायी पता तभी भरें जब वह अलग हो। फॉर्म के अनुसार नए लर्नर लाइसेंस के लिए पते का प्रमाण लगाना ज़रूरी है।"
      },
      documents: { en: ["Address proof (see 'Proof of address and age')"], hi: ["पते का प्रमाण ('पते और उम्र का प्रमाण' देखें)"] },
      mistakes: {
        en: ["Writing an address that doesn't match your address proof", "Missing the Pin code"],
        hi: ["पते के प्रमाण से अलग पता लिखना", "पिन कोड छोड़ देना"]
      }
    },
    {
      label: { en: "5 & 6. Driving school and existing licence", hi: "5 और 6. ड्राइविंग स्कूल और पहले का लाइसेंस" },
      meaning: {
        en: "Section 5 is \"In case of request for Addition of a Class of Vehicle in Transport Category\". Section 6 asks for \"Particulars of existing Licence (Learner's or Permanent)\".",
        hi: "खंड 5 सिर्फ़ \"ट्रांसपोर्ट श्रेणी की गाड़ी जोड़ने\" के आवेदन के लिए है। खंड 6 में \"पहले से मौजूद लाइसेंस (लर्नर या पक्का)\" की जानकारी माँगी गई है।"
      },
      write: {
        en: "These are for people who already hold a licence or are adding a transport class. The form does not say what a first-time applicant should write here, so ask at your RTO / check parivahan.gov.in.",
        hi: "ये उनके लिए हैं जिनके पास पहले से लाइसेंस है या जो ट्रांसपोर्ट श्रेणी जोड़ रहे हैं। पहली बार आवेदन करने वाले यहाँ क्या लिखें, यह फॉर्म में नहीं लिखा, इसलिए आरटीओ से पूछें या parivahan.gov.in देखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: { en: [], hi: [] }
    },
    {
      label: { en: "7. Proof of address and age (Annexure)", hi: "7. पते और उम्र का प्रमाण (अनुलग्नक)" },
      meaning: {
        en: "The Annexure lists the documents you can submit or upload. The form says: \"Select only one if the proof is common for Address and Age\".",
        hi: "अनुलग्नक में वे दस्तावेज़ लिखे हैं जो आप जमा या अपलोड कर सकते हैं। फॉर्म में लिखा है: अगर एक ही दस्तावेज़ पते और उम्र दोनों का प्रमाण है, तो सिर्फ़ वही एक चुनें।"
      },
      write: {
        en: "Tick the documents you attach in section 7. The Annexure also lists, \"if applicable\": the Self Declaration for Physical Fitness in Form-1, the Parent or Guardian Declaration for a minor, and a Photograph.",
        hi: "खंड 7 में उन दस्तावेज़ों पर टिक करें जो आप लगा रहे हैं। अनुलग्नक में \"अगर लागू हो\" के तहत ये भी लिखे हैं: फॉर्म-1 में शारीरिक फ़िटनेस की स्व-घोषणा, नाबालिग के लिए माता-पिता/अभिभावक की घोषणा, और फ़ोटो।"
      },
      documents: {
        en: ["Any of: Aadhaar Card", "Electoral Roll", "Life Insurance Policy", "Passport", "School Certificate", "Birth Certificate", "Pay slip from a State/Central Government office or local body", "Affidavit sworn before an Executive Magistrate, Notary Public or First Class Judicial Magistrate", "Age certificate from a Registered Medical Practitioner not below the rank of Civil Surgeon", "Any other document specified by the State Government"],
        hi: ["इनमें से कोई: आधार कार्ड", "मतदाता सूची (Electoral Roll)", "जीवन बीमा पॉलिसी", "पासपोर्ट", "स्कूल सर्टिफ़िकेट", "जन्म प्रमाण पत्र", "राज्य/केंद्र सरकार के दफ़्तर या स्थानीय निकाय की वेतन पर्ची", "कार्यकारी मजिस्ट्रेट, नोटरी पब्लिक या प्रथम श्रेणी न्यायिक मजिस्ट्रेट के सामने बना हलफ़नामा", "कम से कम सिविल सर्जन स्तर के पंजीकृत डॉक्टर का उम्र प्रमाण पत्र", "राज्य सरकार द्वारा तय कोई अन्य दस्तावेज़"]
      },
      mistakes: {
        en: ["Not ticking the documents you attached", "Assuming a document is accepted in your state without checking (the State Government can add others)"],
        hi: ["लगाए गए दस्तावेज़ों पर टिक न करना", "बिना जाँचे मान लेना कि आपके राज्य में कोई दस्तावेज़ चलेगा (राज्य सरकार और दस्तावेज़ जोड़ सकती है)"]
      }
    },
    {
      label: { en: "Self-Declaration as to Physical Fitness (and medical certificate)", hi: "शारीरिक फ़िटनेस की स्व-घोषणा (और मेडिकल सर्टिफ़िकेट)" },
      meaning: {
        en: "Six Yes/No questions about your health: (a) epilepsy or sudden fainting/giddiness, (b) can you read a car number plate from 25 metres in daylight (with glasses, if worn), (c) loss of a hand or foot or weak arm/leg muscles, (d) night blindness, (e) deafness to ordinary sound signals, (f) any other disease that could make your driving dangerous.",
        hi: "आपकी सेहत के बारे में हाँ/ना वाले छह सवाल: (a) मिर्गी या अचानक बेहोशी/चक्कर, (b) क्या दिन की रोशनी में 25 मीटर दूर से कार की नंबर प्लेट पढ़ सकते हैं (चश्मा लगाते हों तो उसके साथ), (c) हाथ या पैर न होना या बाँह/टाँग की मांसपेशियों में कमज़ोरी, (d) रतौंधी, (e) इतना कम सुनना कि सामान्य हॉर्न/आवाज़ न सुनें, (f) कोई और बीमारी जिससे आपका गाड़ी चलाना ख़तरनाक हो।"
      },
      write: {
        en: "Answer each question truthfully, then sign. The form's note says if you answer \"Yes\" to (a), (c), (e) or (f), or \"No\" to (b) or (d), you should give full details. The Annexure says a Medical Certificate in Form-1A is needed if you are applying for renewal and are above 40, or for a Transport Licence. It must be filled by a registered medical practitioner authorised by the State Government.",
        hi: "हर सवाल का सच्चा जवाब दें और हस्ताक्षर करें। फॉर्म के नोट के अनुसार अगर (a), (c), (e) या (f) का जवाब \"हाँ\" है, या (b) या (d) का जवाब \"ना\" है, तो पूरी जानकारी लिखें। अनुलग्नक के अनुसार फॉर्म-1A वाला मेडिकल सर्टिफ़िकेट तब चाहिए जब आप 40 साल से ज़्यादा उम्र में नवीनीकरण करा रहे हों, या ट्रांसपोर्ट लाइसेंस ले रहे हों। इसे राज्य सरकार द्वारा अधिकृत पंजीकृत डॉक्टर भरता है।"
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
      label: { en: "Parent/guardian declaration (if the applicant is a minor)", hi: "माता-पिता/अभिभावक की घोषणा (अगर आवेदक नाबालिग है)" },
      meaning: {
        en: "A declaration \"Under sub-section (2) of section 7 of the Motor Vehicles Act, 1988\". The parent or guardian says the minor is under their care, accepts responsibility for their driving, and gives consent for the learner's licence.",
        hi: "यह घोषणा \"मोटर वाहन अधिनियम, 1988 की धारा 7 की उपधारा (2)\" के तहत है। इसमें माता-पिता या अभिभावक कहते हैं कि नाबालिग उनकी देखरेख में है, वे उसकी ड्राइविंग की ज़िम्मेदारी लेते हैं, और लर्नर लाइसेंस के लिए सहमति देते हैं।"
      },
      write: {
        en: "Only if the applicant is a minor. The parent/guardian writes the applicant's name, their own name and relationship, and signs. If they later stop accepting responsibility, the form says they must inform the licensing authority in writing to cancel the licence. Which vehicle classes a minor can apply for is not stated on the form, so ask at your RTO / check parivahan.gov.in.",
        hi: "सिर्फ़ तब, जब आवेदक नाबालिग हो। माता-पिता/अभिभावक आवेदक का नाम, अपना नाम और रिश्ता लिखकर हस्ताक्षर करते हैं। फॉर्म के अनुसार अगर बाद में वे ज़िम्मेदारी नहीं लेना चाहें, तो लाइसेंस रद्द कराने के लिए लाइसेंसिंग अधिकारी को लिखकर बताना होगा। नाबालिग किस श्रेणी की गाड़ी के लिए आवेदन कर सकता है, यह फॉर्म में नहीं लिखा, इसलिए आरटीओ से पूछें या parivahan.gov.in देखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["A minor applying without this declaration", "Filling it when the applicant is not a minor"],
        hi: ["नाबालिग का यह घोषणा के बिना आवेदन करना", "आवेदक नाबालिग न हो फिर भी इसे भरना"]
      }
    },
    {
      label: { en: "Photograph, declaration and signature", hi: "फ़ोटो, घोषणा और हस्ताक्षर" },
      meaning: {
        en: "The form has space for a passport-size photo. The main declaration asks if you are willing to donate your organ/tissue in case of death (YES/NO), and says the facts and documents are true and that you \"have/have not been disqualified\" from holding a Driving Licence.",
        hi: "फॉर्म में पासपोर्ट साइज़ फ़ोटो की जगह है। मुख्य घोषणा में पूछा गया है कि क्या आप मृत्यु के बाद अंग/ऊतक दान करना चाहते हैं (हाँ/ना), और आप लिखते हैं कि दी गई जानकारी और दस्तावेज़ सच्चे हैं, और आपको ड्राइविंग लाइसेंस रखने से \"अयोग्य ठहराया गया है/नहीं ठहराया गया है\"।"
      },
      write: {
        en: "For an online application, the form says to upload a photo of \"not more than 50 KB\". Choose YES or NO for organ donation. Strike out \"have\" or \"have not\" so the true one remains. Write the date and sign. The fitness declaration allows a signature or thumb impression.",
        hi: "ऑनलाइन आवेदन में फॉर्म के अनुसार फ़ोटो \"50 KB से ज़्यादा नहीं\" होनी चाहिए। अंग दान के लिए हाँ या ना चुनें। \"have\" या \"have not\" में से जो सच न हो उसे काट दें। तारीख़ लिखें और हस्ताक्षर करें। फ़िटनेस वाली घोषणा पर हस्ताक्षर या अंगूठे का निशान दोनों चलते हैं।"
      },
      documents: { en: ["Recent passport-size photo"], hi: ["हाल की पासपोर्ट साइज़ फ़ोटो"] },
      mistakes: {
        en: ["Uploading a photo larger than 50 KB", "Leaving both \"have\" and \"have not\" uncut", "Skipping the organ donation YES/NO"],
        hi: ["50 KB से बड़ी फ़ोटो अपलोड करना", "\"have\" और \"have not\" दोनों को बिना काटे छोड़ देना", "अंग दान वाला हाँ/ना छोड़ देना"]
      }
    }
  ]
});
