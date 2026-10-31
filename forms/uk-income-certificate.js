// Checked against the Government of Uttarakhand "e-Services / Apuni Sarkar" portal (eservices.uk.gov.in):
// the "Income Certificate" service details card under All Services (Revenue Department, English and Hindi
// views), the portal's FAQs page, and its Important GOs list (Uttarakhand Right to Service Act 2011 and the
// 2014 amendment; neither lists income-certificate details). Also checked the Udham Singh Nagar district page
// (usnagar.nic.in, last updated 04.07.2025), which only points to eservices.uk.gov.in and tehsil campuses.
// No official paper application form or field-by-field description of the online form was found, so this
// guide is marked unverified and only explains the steps and documents the portal itself lists.
// Anything the portal does not say is left as "ask at your Tehsil / CSC centre or check eservices.uk.gov.in".

window.FORMS.push({
  id: "uk-income-certificate",
  verified: false,
  source: null,
  lastChecked: "2026-10-30",

  category: { en: "Uttarakhand", hi: "उत्तराखंड" },
  name: { en: "Income Certificate (Uttarakhand)", hi: "आय प्रमाण पत्र (उत्तराखंड)" },
  about: {
    en: "The Income Certificate is a Revenue Department service in Uttarakhand. You apply on the state's Apuni Sarkar portal (eservices.uk.gov.in), where the service card shows a CSC/EDC fee of ₹40 and an estimated completion time of 15 days. We could not find an official paper form or an official field-by-field description, so this guide only covers the steps and documents the portal lists. For anything else, ask at your Tehsil / CSC centre or call the CM Helpline 1905.",
    hi: "आय प्रमाण पत्र उत्तराखंड के राजस्व विभाग की सेवा है। इसके लिए राज्य के अपणि सरकार पोर्टल (eservices.uk.gov.in) पर आवेदन होता है। पोर्टल पर इस सेवा का CSC/EDC शुल्क ₹40 और अनुमानित समय 15 दिन लिखा है। हमें इसका कोई आधिकारिक काग़ज़ी फॉर्म या हर खाने का आधिकारिक विवरण नहीं मिला, इसलिए यह गाइड सिर्फ़ पोर्टल पर लिखे चरण और दस्तावेज़ बताती है। बाक़ी बातों के लिए अपनी तहसील / CSC केंद्र पर पूछें या सीएम हेल्पलाइन 1905 पर कॉल करें।"
  },

  fields: [
    {
      label: { en: "Where to apply", hi: "कहाँ आवेदन करें" },
      quick: { en: "Apply on eservices.uk.gov.in, a CSC, or your tehsil counter", hi: "eservices.uk.gov.in पर, CSC केंद्र या तहसील के अपणि सरकार काउंटर पर आवेदन करें" },
      meaning: {
        en: "The service is listed on the Apuni Sarkar portal as \"Income Certificate\" (Revenue Department, Revenue Certificates). The Udham Singh Nagar district website also lists Apuni Sarkar counters at tehsil campuses.",
        hi: "अपणि सरकार पोर्टल पर यह सेवा \"आय प्रमाण पत्र\" नाम से है (राजस्व विभाग, राजस्व प्रमाण पत्र)। ऊधम सिंह नगर ज़िले की वेबसाइट पर तहसील परिसरों में अपणि सरकार काउंटर भी बताए गए हैं।"
      },
      write: {
        en: "Open eservices.uk.gov.in, go to \"Explore Services\" and search \"Income\". You can also go to a CSC centre or the Apuni Sarkar counter at your tehsil. Whether a paper form is accepted at the tehsil is not stated, so ask there.",
        hi: "eservices.uk.gov.in खोलें, \"Explore Services\" में जाकर \"Income\" खोजें। आप CSC केंद्र या अपनी तहसील के अपणि सरकार काउंटर पर भी जा सकते हैं। तहसील में काग़ज़ी फॉर्म लिया जाता है या नहीं, यह नहीं लिखा, इसलिए वहीं पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Applying on a private website that looks like the government portal"],
        hi: ["सरकारी पोर्टल जैसी दिखने वाली किसी निजी वेबसाइट पर आवेदन करना"]
      }
    },
    {
      label: { en: "Login / sign up", hi: "लॉगिन / साइन अप" },
      quick: { en: "Register as a new user; keep your user ID and password private", hi: "नए उपयोगकर्ता के रूप में रजिस्टर करें; यूज़र आईडी-पासवर्ड किसी को न बताएँ" },
      meaning: {
        en: "\"Apply Now\" takes you to the login page. The portal FAQ says: if you are a new user, \"select new user, register here and enter the details to create the account\".",
        hi: "\"Apply Now\" (अभी आवेदन करें) दबाने पर लॉगिन पेज खुलता है। पोर्टल के FAQ के अनुसार नए उपयोगकर्ता को \"new user\" चुनकर रजिस्टर करना होता है और जानकारी भरकर खाता बनाना होता है।"
      },
      write: {
        en: "Register with your own details and keep your user ID and password private. Forgot the password? The FAQ says click \"forgot password\" and enter your email ID; an email is sent with the next steps.",
        hi: "अपनी सही जानकारी से रजिस्टर करें और यूज़र आईडी व पासवर्ड किसी को न बताएँ। पासवर्ड भूल गए? FAQ के अनुसार \"forgot password\" दबाकर अपना ईमेल डालें; आगे के चरण ईमेल पर आएँगे।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Sharing your portal password with an agent or shopkeeper"],
        hi: ["अपना पोर्टल पासवर्ड किसी एजेंट या दुकानदार को बता देना"]
      }
    },
    {
      label: { en: "Whose income, and how much", hi: "किसकी आय, और कितनी" },
      quick: { en: "Not stated officially; ask Tehsil / CSC. Write only true figures.", hi: "आधिकारिक तौर पर नहीं लिखा; तहसील / CSC पर पूछें। सिर्फ़ सही आँकड़े लिखें" },
      meaning: {
        en: "The portal's service card does not explain whose income is counted (only the applicant's or the whole family's), which sources of income to include, or for which year.",
        hi: "पोर्टल के सेवा विवरण में यह नहीं बताया गया कि किसकी आय गिनी जाती है (सिर्फ़ आवेदक की या पूरे परिवार की), कौन-कौन सी आय जोड़नी है, या किस साल की।"
      },
      write: {
        en: "Ask at your Tehsil / CSC centre or check eservices.uk.gov.in before you fill this. Write only true figures; the Patwari checks the application (see \"What happens after you apply\").",
        hi: "यह भरने से पहले अपनी तहसील / CSC केंद्र पर पूछें या eservices.uk.gov.in देखें। सिर्फ़ सही आँकड़े लिखें; आवेदन की जाँच पटवारी करते हैं (देखें \"आवेदन के बाद क्या होता है\")।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Guessing the income figure instead of asking what to include"],
        hi: ["क्या जोड़ना है यह पूछने की जगह आय का अंदाज़ा लिख देना"]
      }
    },
    {
      label: { en: "Applicant photo *", hi: "आवेदक की फ़ोटो *" },
      quick: { en: "Upload a clear, recent photo of the applicant", hi: "आवेदक की साफ़ और हाल की फ़ोटो अपलोड करें" },
      meaning: {
        en: "\"Applicant Photo\" is in the portal's list of Required Documents.",
        hi: "पोर्टल की आवश्यक दस्तावेज़ों की सूची में \"एप्लिकेंट फोटो\" (आवेदक की फ़ोटो) है।"
      },
      write: {
        en: "Upload a clear, recent photo of the applicant. The size, background and file format are not stated on the service card, so ask at your CSC centre or check the upload screen.",
        hi: "आवेदक की साफ़ और हाल की फ़ोटो अपलोड करें। फ़ोटो का साइज़, बैकग्राउंड और फ़ाइल फ़ॉर्मेट सेवा विवरण में नहीं लिखा, इसलिए CSC केंद्र पर पूछें या अपलोड वाला पेज देखें।"
      },
      documents: { en: ["Applicant photo"], hi: ["आवेदक की फ़ोटो"] },
      mistakes: {
        en: ["Uploading a photo of someone else in the family instead of the applicant"],
        hi: ["आवेदक की जगह परिवार के किसी और की फ़ोटो लगा देना"]
      }
    },
    {
      label: { en: "ID proof *", hi: "पहचान पत्र *" },
      quick: { en: "Upload ID proof; accepted IDs not stated, so ask Tehsil / CSC", hi: "पहचान पत्र अपलोड करें; कौन-सा मान्य है, तहसील / CSC पर पूछें" },
      meaning: {
        en: "\"Id Proof\" is a Required Document.",
        hi: "\"पहचान पत्र\" आवश्यक दस्तावेज़ है।"
      },
      write: {
        en: "The portal does not list which ID cards are accepted. Ask at your Tehsil / CSC centre or check eservices.uk.gov.in.",
        hi: "कौन-से पहचान पत्र मान्य हैं, यह पोर्टल पर नहीं लिखा। अपनी तहसील / CSC केंद्र पर पूछें या eservices.uk.gov.in देखें।"
      },
      documents: { en: ["ID proof"], hi: ["पहचान पत्र"] },
      mistakes: {
        en: ["Uploading a blurry or cut-off scan"],
        hi: ["धुंधला या कटा हुआ स्कैन अपलोड करना"]
      }
    },
    {
      label: { en: "Address proof *", hi: "निवास का प्रमाण *" },
      quick: { en: "Upload address proof; accepted proofs not stated, so ask Tehsil / CSC", hi: "निवास का प्रमाण अपलोड करें; कौन-सा मान्य है, तहसील / CSC पर पूछें" },
      meaning: {
        en: "\"Address Proof\" is a Required Document.",
        hi: "\"निवास का प्रमाण\" आवश्यक दस्तावेज़ है।"
      },
      write: {
        en: "The portal does not list which address proofs are accepted. Ask at your Tehsil / CSC centre or check eservices.uk.gov.in.",
        hi: "कौन-से निवास प्रमाण मान्य हैं, यह पोर्टल पर नहीं लिखा। अपनी तहसील / CSC केंद्र पर पूछें या eservices.uk.gov.in देखें।"
      },
      documents: { en: ["Address proof"], hi: ["निवास का प्रमाण"] },
      mistakes: {
        en: ["Giving an address that does not match your address proof"],
        hi: ["ऐसा पता लिखना जो निवास प्रमाण से मेल नहीं खाता"]
      }
    },
    {
      label: { en: "Ration card / copy of family register *", hi: "राशन कार्ड / परिवार रजिस्टर की नकल *" },
      quick: { en: "Upload ration card or a copy of the family register", hi: "राशन कार्ड या परिवार रजिस्टर की नकल, इनमें से एक अपलोड करें" },
      meaning: {
        en: "The Required Documents list says \"Ration Card/Copy Of Family Register\". \"Ration Card\" is also shown again under Optional Documents.",
        hi: "आवश्यक दस्तावेज़ों में \"राशन कार्ड/परिवार रजिस्टर की नकल\" लिखा है। वैकल्पिक दस्तावेज़ों में भी \"राशन कार्ड\" दोबारा दिखता है।"
      },
      write: {
        en: "Upload one of the two. Where to get a copy of the family register is not stated, so ask at your Tehsil / CSC centre.",
        hi: "इन दोनों में से एक अपलोड करें। परिवार रजिस्टर की नकल कहाँ से मिलेगी, यह नहीं लिखा, इसलिए तहसील / CSC केंद्र पर पूछें।"
      },
      documents: { en: ["Ration card, or copy of family register"], hi: ["राशन कार्ड, या परिवार रजिस्टर की नकल"] },
      mistakes: {
        en: ["Skipping this because ration card also appears as optional"],
        hi: ["राशन कार्ड वैकल्पिक में भी दिखता है, यह सोचकर यह दस्तावेज़ छोड़ देना"]
      }
    },
    {
      label: { en: "Self-declaration form *", hi: "स्व-घोषणा पत्र *" },
      quick: { en: "Official format not found; ask Tehsil / CSC. Sign it yourself.", hi: "आधिकारिक प्रारूप नहीं मिला; तहसील / CSC पर पूछें। पढ़कर ख़ुद हस्ताक्षर करें" },
      meaning: {
        en: "\"Self Declaration Form\" (स्व-घोषणा पत्र) is a Required Document. It is your own signed statement.",
        hi: "\"स्व-घोषणा पत्र\" आवश्यक दस्तावेज़ है। यह आपका अपना हस्ताक्षर किया हुआ बयान होता है।"
      },
      write: {
        en: "We could not find the official format of this declaration. Ask at your Tehsil / CSC centre for the correct format, or check eservices.uk.gov.in. Sign it yourself and do not sign a blank or filled-in sheet you have not read.",
        hi: "हमें इस घोषणा पत्र का आधिकारिक प्रारूप नहीं मिला। सही प्रारूप के लिए तहसील / CSC केंद्र पर पूछें या eservices.uk.gov.in देखें। हस्ताक्षर ख़ुद करें, और बिना पढ़े किसी ख़ाली या भरे हुए काग़ज़ पर हस्ताक्षर न करें।"
      },
      documents: { en: ["Self-declaration form, signed"], hi: ["हस्ताक्षर किया हुआ स्व-घोषणा पत्र"] },
      mistakes: {
        en: ["Using a format copied from a private website or another state", "Signing without reading what is written"],
        hi: ["किसी निजी वेबसाइट या दूसरे राज्य का प्रारूप इस्तेमाल करना", "बिना पढ़े हस्ताक्षर कर देना"]
      }
    },
    {
      label: { en: "Pay slip (optional)", hi: "वेतन पर्ची (वैकल्पिक)" },
      quick: { en: "Optional: upload it if there is a salary", hi: "वैकल्पिक: वेतन मिलता हो तो वेतन पर्ची अपलोड करें" },
      meaning: {
        en: "\"Pay Slip\" is listed under Optional Documents.",
        hi: "वैकल्पिक दस्तावेज़ों में \"वेतन पर्ची\" है।"
      },
      write: {
        en: "Upload it if there is a salary. Whose pay slip (applicant or family member) and how recent it should be is not stated, so ask at your Tehsil / CSC centre.",
        hi: "अगर वेतन मिलता है तो इसे अपलोड करें। किसकी वेतन पर्ची (आवेदक की या परिवार के सदस्य की) और कितनी पुरानी तक चलेगी, यह नहीं लिखा, इसलिए तहसील / CSC केंद्र पर पूछें।"
      },
      documents: { en: ["Pay slip, if any"], hi: ["वेतन पर्ची, अगर हो"] },
      mistakes: { en: [], hi: [] }
    },
    {
      label: { en: "Fee and payment", hi: "शुल्क और भुगतान" },
      quick: { en: "Check the total on the payment screen before paying", hi: "भुगतान से पहले पेमेंट पेज पर कुल रक़म देख लें" },
      meaning: {
        en: "The service card shows \"CSC/EDC Fee: ₹40\". The portal FAQ separately says you \"have to pay Rs 30 in addition to the charges fixed for department services\". Payment modes listed: Credit card / Debit card / UPI / Net Banking.",
        hi: "सेवा विवरण में \"CSC/EDC शुल्क: ₹40\" लिखा है। पोर्टल के FAQ में अलग से लिखा है कि विभाग की तय फ़ीस के अलावा ₹30 और देने होते हैं। भुगतान के तरीक़े: क्रेडिट कार्ड / डेबिट कार्ड / UPI / नेट बैंकिंग।"
      },
      write: {
        en: "The portal does not make clear what the exact total for this certificate is. Check the amount shown on the payment screen, or ask at your CSC centre, before paying.",
        hi: "इस प्रमाण पत्र के लिए कुल कितने रुपये लगेंगे, यह पोर्टल पर साफ़ नहीं है। भुगतान से पहले पेमेंट पेज पर दिखी रक़म देखें, या CSC केंद्र पर पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Paying an agent more than the amount shown, without a receipt"],
        hi: ["बिना रसीद के किसी एजेंट को दिखाई गई रक़म से ज़्यादा पैसे दे देना"]
      }
    },
    {
      label: { en: "What happens after you apply", hi: "आवेदन के बाद क्या होता है" },
      quick: { en: "Keep your application number; watch for SMS updates", hi: "आवेदन नंबर संभालकर रखें; हर चरण का SMS देखते रहें" },
      meaning: {
        en: "The portal's \"Officer Flow\" has 5 steps: 1 Applicant (application submitted), 2 Tehsildar, 3 Patwari, 4 Tehsildar, 5 Certificate issued / rejected. Estimated completion: 15 days.",
        hi: "पोर्टल के \"अधिकारी प्रवाह\" में 5 चरण हैं: 1 आवेदक (आवेदन जमा), 2 तहसीलदार, 3 पटवारी, 4 तहसीलदार, 5 प्रमाण पत्र जारी / अस्वीकृत। अनुमानित समय: 15 दिन।"
      },
      write: {
        en: "Keep your application number. The FAQ says you get an SMS after each step about the officer's action and any further verification needed. Reply to the Patwari's enquiry with the same facts you gave in the application.",
        hi: "अपना आवेदन नंबर संभालकर रखें। FAQ के अनुसार हर चरण के बाद SMS आता है कि अधिकारी ने क्या किया और आगे कोई जाँच बाक़ी है या नहीं। पटवारी पूछताछ करें तो वही जानकारी दें जो आवेदन में दी थी।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Giving a mobile number you don't use, so you miss the SMS updates"],
        hi: ["ऐसा मोबाइल नंबर देना जो आप इस्तेमाल नहीं करते, जिससे SMS छूट जाएँ"]
      }
    },
    {
      label: { en: "Track, download and verify", hi: "स्थिति देखें, डाउनलोड करें, जाँचें" },
      quick: { en: "Use your application number to track, download or verify", hi: "आवेदन नंबर से स्थिति देखें, प्रमाण पत्र डाउनलोड करें या जाँचें" },
      meaning: {
        en: "The portal home page has \"Track Application\", \"Download Certificates\" and \"Verify Certificate\". The FAQ says there is no limit on downloading the certificate.",
        hi: "पोर्टल के मुख्य पेज पर \"Track Application\", \"Download Certificates\" और \"Verify Certificate\" विकल्प हैं। FAQ के अनुसार प्रमाण पत्र डाउनलोड करने की कोई सीमा नहीं है।"
      },
      write: {
        en: "Enter your application number to check status or verify the certificate. How long the certificate stays valid is not stated on the portal, so ask at your Tehsil or check with the office that asked you for it.",
        hi: "स्थिति देखने या प्रमाण पत्र जाँचने के लिए आवेदन नंबर डालें। प्रमाण पत्र कितने समय तक मान्य रहता है, यह पोर्टल पर नहीं लिखा, इसलिए तहसील में पूछें या उस दफ़्तर से पूछें जिसने यह माँगा है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Paying someone to download a certificate you can download yourself"],
        hi: ["जो प्रमाण पत्र आप ख़ुद डाउनलोड कर सकते हैं, उसके लिए किसी को पैसे देना"]
      }
    }
  ]
});
