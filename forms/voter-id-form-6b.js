// Checked against the Election Commission of India's English "Form-6B: Letter of Information of Aadhaar number for
// the purpose of electoral roll authentication" published on voters.eci.gov.in
// (https://voters.eci.gov.in/formspdf/Form_6B_English.pdf, PDF dated 12-08-2022 per its own metadata), the same
// Form 6B and Rule 26B as printed in the Gazette notification of the Registration of Electors (Amendment) Rules,
// 2022 (copy linked from voters.eci.gov.in as https://voters.eci.gov.in/guidelines/Form-6B_en.pdf, and ECI letter
// to all CEOs dated 23-06-2022 on amendments to election laws and rules, hosted by CEO Manipur) and in the Manual of
// Election Law Vol. II (Legislative Department, legislative.gov.in, December 2024 edition), the ECI "Note explaining
// process of annual revision/updation of electoral rolls" FAQ (https://www.eci.gov.in/Documents/Final-ER-FAQ.pdf,
// December 2024, Q42 on Aadhaar), and the ECI press release of 18-03-2025 on linking EPIC with Aadhaar
// (PIB Release ID 2112377, https://www.pib.gov.in/PressReleasePage.aspx?PRID=2112377).
// Every statement below comes from one of those documents. If something is not stated in them, the guide says
// "ask your Booth Level Officer (BLO) / ERO" instead of guessing.

window.FORMS.push({
  id: "voter-id-form-6b",
  verified: true,
  source: {
    title: "Election Commission of India, Form-6B: Letter of Information of Aadhaar number for the purpose of electoral roll authentication (voters.eci.gov.in, PDF dated 12-08-2022)",
    url: "https://voters.eci.gov.in/formspdf/Form_6B_English.pdf"
  },
  caution: {
    en: "The Form 6B on the ECI voter portal is still the August 2022 version, and the same form appears in the December 2024 Manual of Election Law. No newer version was found. On 18 March 2025 the Election Commission said linking EPIC with Aadhaar will be done only as per Article 326 of the Constitution, Sections 23(4), 23(5) and 23(6) of the Representation of the People Act, 1950, and the Supreme Court judgement in WP (Civil) No. 177/2023, and that technical talks with UIDAI were to begin. If the form or the rules change after that, your BLO or ERO will know: ask before you fill it.",
    hi: "चुनाव आयोग के वोटर पोर्टल पर फॉर्म 6B अभी भी अगस्त 2022 वाला है, और दिसंबर 2024 के चुनाव क़ानून मैनुअल में भी यही फॉर्म है। इससे नया वर्ज़न नहीं मिला। 18 मार्च 2025 को चुनाव आयोग ने कहा कि EPIC को आधार से जोड़ने का काम सिर्फ़ संविधान के अनुच्छेद 326, लोक प्रतिनिधित्व अधिनियम 1950 की धारा 23(4), 23(5) और 23(6), और सुप्रीम कोर्ट के WP (Civil) No. 177/2023 वाले फ़ैसले के अनुसार होगा, और UIDAI के साथ तकनीकी बातचीत शुरू होनी थी। इसके बाद फॉर्म या नियम बदले हों तो BLO या ERO को पता होगा: भरने से पहले पूछ लें।"
  },
  lastChecked: "2026-11-05",

  category: { en: "Government", hi: "सरकारी" },
  name: { en: "Voter ID: Form 6B (Give Aadhaar for Voter List)", hi: "वोटर आईडी: फॉर्म 6B (वोटर लिस्ट के लिए आधार देना)" },
  about: {
    en: "Form 6B is for people who are ALREADY on the voter list. You use it to give your Aadhaar number to the Electoral Registration Officer \"for the purpose of authentication\" of your entry. Rule 26B says an elector \"may intimate\" the Aadhaar number in Form 6B, and ECI's FAQ says the Aadhaar field is \"purely voluntary\" and not giving it is not a ground for rejection. If you do not have Aadhaar, the form lets you give a copy of another listed document instead. New voters do not need this form: Form 6 has its own Aadhaar box.",
    hi: "फॉर्म 6B उन लोगों के लिए है जो मतदाता सूची में पहले से हैं। इससे आप अपनी प्रविष्टि की पुष्टि (authentication) के लिए अपना आधार नंबर निर्वाचक रजिस्ट्रीकरण अधिकारी को देते हैं। नियम 26B के अनुसार मतदाता फॉर्म 6B में आधार नंबर \"दे सकता है\", और चुनाव आयोग के FAQ के अनुसार आधार देना पूरी तरह स्वैच्छिक है और न देने पर आवेदन रद्द करने का आधार नहीं बनता। आधार नहीं है तो फॉर्म में दी गई सूची से किसी दूसरे दस्तावेज़ की कॉपी दी जा सकती है। नए मतदाताओं को यह फॉर्म नहीं भरना: फॉर्म 6 में ही आधार का खाना है।"
  },

  fields: [
    {
      label: { en: "Name of elector (\"I ... am enrolled\")", hi: "मतदाता का नाम (\"मैं ... नामांकित हूँ\")" },
      quick: { en: "Your name exactly as on the voter list", hi: "अपना नाम, बिल्कुल वैसा जैसा मतदाता सूची में है" },
      meaning: {
        en: "The form starts as a letter: \"I ... (Name of Elector) am enrolled in electoral roll of ...\". You are telling the ERO that you are already a registered voter.",
        hi: "फॉर्म एक चिट्ठी की तरह शुरू होता है: \"मैं ... (मतदाता का नाम) ... की मतदाता सूची में नामांकित हूँ\"। आप ERO को बता रहे हैं कि आप पहले से पंजीकृत मतदाता हैं।"
      },
      write: {
        en: "Write your full name as it is printed on the voter list or your voter ID card, so your entry can be matched.",
        hi: "अपना पूरा नाम वैसा लिखें जैसा मतदाता सूची या वोटर आईडी कार्ड में छपा है, ताकि आपकी प्रविष्टि मिलाई जा सके।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Using a different spelling from the voter list (for example the spelling on another ID)"],
        hi: ["मतदाता सूची से अलग स्पेलिंग लिखना (जैसे किसी दूसरे पहचान पत्र वाली स्पेलिंग)"]
      }
    },
    {
      label: { en: "Assembly / Parliamentary Constituency", hi: "विधानसभा / लोकसभा क्षेत्र" },
      quick: { en: "Name of the constituency where you are a voter", hi: "जिस क्षेत्र में आप मतदाता हैं, उसका नाम" },
      meaning: {
        en: "The name of the Assembly Constituency whose voter list has your name. (Parliamentary Constituency is mentioned for places without a Legislative Assembly.)",
        hi: "उस विधानसभा क्षेत्र का नाम जिसकी मतदाता सूची में आपका नाम है। (लोकसभा क्षेत्र उन जगहों के लिए है जहाँ विधानसभा नहीं है।)"
      },
      write: {
        en: "Write the constituency name. Not sure? Search your name or EPIC number on voters.eci.gov.in, or ask your BLO.",
        hi: "क्षेत्र का नाम लिखें। पक्का नहीं पता? voters.eci.gov.in पर अपना नाम या EPIC नंबर खोजें, या अपने BLO से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing your district or city instead of the constituency name"],
        hi: ["क्षेत्र के नाम की जगह ज़िला या शहर लिख देना"]
      }
    },
    {
      label: { en: "EPIC number", hi: "EPIC नंबर" },
      quick: { en: "Your voter ID (EPIC) number, one character per box", hi: "अपना वोटर आईडी (EPIC) नंबर, हर खाने में एक अक्षर/अंक" },
      meaning: {
        en: "EPIC is your Elector's Photo Identity Card (voter ID card). Its number tells the office exactly which entry your Aadhaar or document should be linked to.",
        hi: "EPIC यानी मतदाता फ़ोटो पहचान पत्र (वोटर आईडी कार्ड)। इसके नंबर से दफ़्तर को पता चलता है कि आपका आधार या दस्तावेज़ किस प्रविष्टि से जोड़ना है।"
      },
      write: {
        en: "Copy it exactly from your voter ID card, one letter or digit per box. Lost your card? Search your name on voters.eci.gov.in or ask your BLO.",
        hi: "इसे वोटर आईडी कार्ड से बिल्कुल वैसा उतारें, हर खाने में एक अक्षर या अंक। कार्ड खो गया? voters.eci.gov.in पर अपना नाम खोजें या BLO से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Mixing up the letter O and the digit 0, or I and 1", "Writing an old EPIC number after you got a replacement card"],
        hi: ["अंग्रेज़ी O और अंक 0, या I और 1 में गड़बड़ करना", "नया कार्ड मिलने के बाद भी पुराना EPIC नंबर लिखना"]
      }
    },
    {
      label: { en: "Option (i): Aadhaar number", hi: "विकल्प (i): आधार नंबर" },
      quick: { en: "Tick (i) and write your 12-digit Aadhaar number", hi: "(i) पर टिक करें और 12 अंकों का आधार नंबर लिखें" },
      meaning: {
        en: "You tick ONE of two options: (i) give your Aadhaar number, \"or\" (ii) say you don't have one. Rule 26B (Gazette, June 2022) says an elector \"may intimate\" the Aadhaar number in Form 6B. ECI's FAQ (December 2024) says the Aadhaar field is \"purely voluntary\", that not giving it \"shall not be a ground for the rejection\" of the application, and that applicants are expected to give it voluntarily for the purification of the electoral roll.",
        hi: "दो में से एक विकल्प पर टिक करना है: (i) आधार नंबर दें, \"या\" (ii) बताएँ कि आपके पास आधार नहीं है। नियम 26B (राजपत्र, जून 2022) के अनुसार मतदाता फॉर्म 6B में आधार नंबर \"दे सकता है\"। चुनाव आयोग के FAQ (दिसंबर 2024) के अनुसार आधार वाला खाना पूरी तरह स्वैच्छिक है, आधार न देना आवेदन रद्द करने का आधार नहीं होगा, और उम्मीद की जाती है कि मतदाता सूची को शुद्ध रखने के लिए लोग अपनी मर्ज़ी से आधार दें।"
      },
      write: {
        en: "Tick the box before (i) and write your 12-digit Aadhaar number, one digit per box. Check every digit against your Aadhaar card. If you have Aadhaar but do not want to give it, the form has no box for that: ask your BLO or ERO what to do.",
        hi: "(i) के आगे वाले खाने पर टिक करें और 12 अंकों का आधार नंबर लिखें, हर खाने में एक अंक। हर अंक आधार कार्ड से मिलाएँ। अगर आधार है पर देना नहीं चाहते, तो फॉर्म में उसके लिए कोई खाना नहीं है: अपने BLO या ERO से पूछें कि क्या करें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking both (i) and (ii)", "A wrong digit in the Aadhaar number (check it twice)"],
        hi: ["(i) और (ii) दोनों पर टिक करना", "आधार नंबर में एक अंक भी ग़लत लिखना (दो बार जाँचें)"]
      }
    },
    {
      label: { en: "Option (ii): I don't have an Aadhaar number", hi: "विकल्प (ii): मेरे पास आधार नंबर नहीं है" },
      quick: { en: "Tick (ii) only if you have no Aadhaar number", hi: "(ii) पर तभी टिक करें जब आपके पास आधार नंबर नहीं है" },
      meaning: {
        en: "Option (ii) reads: \"I am not able to furnish my Aadhaar Number because I don't have Aadhaar number. Therefore, I hereby submit a copy of one of the following documents\". So it is only for people who do not have Aadhaar, and it must come with one document from the list below.",
        hi: "विकल्प (ii) में लिखा है: मैं आधार नंबर नहीं दे सकता क्योंकि मेरे पास आधार नंबर नहीं है, इसलिए नीचे दिए दस्तावेज़ों में से एक की कॉपी दे रहा हूँ। यानी यह सिर्फ़ उनके लिए है जिनके पास आधार नहीं है, और इसके साथ नीचे की सूची से एक दस्तावेज़ लगाना होगा।"
      },
      write: {
        en: "Tick the box before (ii) only if you truly do not have an Aadhaar number, then tick one document in the next part and attach its copy. The form ends without a declaration, but the statement you tick is your own written statement, so tick only what is true.",
        hi: "(ii) के आगे वाले खाने पर तभी टिक करें जब सच में आपके पास आधार नंबर नहीं है, फिर अगले हिस्से में एक दस्तावेज़ पर टिक करें और उसकी कॉपी लगाएँ। फॉर्म में अलग से घोषणा नहीं है, पर जिस बात पर आप टिक करते हैं वह आपका लिखित बयान है, इसलिए सिर्फ़ सच पर टिक करें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking (ii) when you do have Aadhaar", "Ticking (ii) but not attaching any document"],
        hi: ["आधार होते हुए भी (ii) पर टिक करना", "(ii) पर टिक करके कोई दस्तावेज़ न लगाना"]
      }
    },
    {
      label: { en: "Alternative document (tick any one)", hi: "दूसरा दस्तावेज़ (कोई एक टिक करें)" },
      quick: { en: "With option (ii): tick one listed document and attach its copy", hi: "विकल्प (ii) के साथ: सूची से एक दस्तावेज़ टिक करें और उसकी कॉपी लगाएँ" },
      meaning: {
        en: "This list is only for people who ticked option (ii). The form says \"Please tick any one\" of these 11 documents.",
        hi: "यह सूची सिर्फ़ उनके लिए है जिन्होंने विकल्प (ii) टिक किया है। फॉर्म के अनुसार इन 11 दस्तावेज़ों में से कोई एक टिक करना है।"
      },
      write: {
        en: "Tick the box next to the ONE document you are attaching, and attach a copy of it. If you ticked option (i), leave this whole list blank.",
        hi: "जो एक दस्तावेज़ लगा रहे हैं, उसके आगे वाले खाने पर टिक करें और उसकी कॉपी लगाएँ। अगर विकल्प (i) टिक किया है, तो यह पूरी सूची ख़ाली छोड़ दें।"
      },
      documents: {
        en: ["Copy of any ONE of: MGNREGA Job Card", "Passbook with photograph issued by Bank / Post Office", "Health Insurance Smart Card issued under the scheme of Ministry of Labour", "Driving Licence", "PAN Card", "Smart Card issued by RGI under NPR", "Indian Passport", "Pension document with photograph", "Service Identity Card with photograph issued to employees by Central / State Govt. / PSUs / Public Limited Companies", "Official Identity Card issued to MPs / MLAs / MLCs", "Unique Identity ID (UDID) Card issued by the Ministry of Social Justice and Empowerment"],
        hi: ["इनमें से किसी एक की कॉपी: मनरेगा जॉब कार्ड", "बैंक / डाकघर की फ़ोटो वाली पासबुक", "श्रम मंत्रालय की योजना के तहत जारी स्वास्थ्य बीमा स्मार्ट कार्ड", "ड्राइविंग लाइसेंस", "पैन कार्ड", "NPR के तहत RGI का जारी स्मार्ट कार्ड", "भारतीय पासपोर्ट", "फ़ोटो वाला पेंशन दस्तावेज़", "केंद्र / राज्य सरकार / PSU / पब्लिक लिमिटेड कंपनी का कर्मचारियों को जारी फ़ोटो वाला सर्विस पहचान पत्र", "सांसद / विधायक / विधान परिषद सदस्य का आधिकारिक पहचान पत्र", "सामाजिक न्याय और अधिकारिता मंत्रालय का जारी UDID कार्ड"]
      },
      mistakes: {
        en: ["Ticking more than one document", "Attaching a document that is not on this list", "Filling this list even though you gave your Aadhaar number in (i)"],
        hi: ["एक से ज़्यादा दस्तावेज़ टिक करना", "इस सूची से बाहर का दस्तावेज़ लगाना", "(i) में आधार नंबर देने के बाद भी यह सूची भरना"]
      }
    },
    {
      label: { en: "Signature of the elector", hi: "मतदाता के हस्ताक्षर" },
      quick: { en: "Sign here yourself", hi: "यहाँ ख़ुद हस्ताक्षर करें" },
      meaning: {
        en: "The letter is signed by the elector whose entry it is about.",
        hi: "यह चिट्ठी उसी मतदाता के हस्ताक्षर से जाती है जिसकी प्रविष्टि की बात है।"
      },
      write: {
        en: "Sign on the dotted line. The form does not mention a thumb impression; if you cannot sign, ask your BLO or ERO how to proceed.",
        hi: "बिंदु वाली लाइन पर हस्ताक्षर करें। फॉर्म में अंगूठे के निशान की बात नहीं लिखी; अगर आप हस्ताक्षर नहीं कर सकते, तो BLO या ERO से पूछें कि क्या करें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Someone else signing for you"],
        hi: ["आपकी जगह किसी और का हस्ताक्षर करना"]
      }
    },
    {
      label: { en: "Name and e-mail ID / mobile number of the elector", hi: "मतदाता का नाम और ईमेल / मोबाइल नंबर" },
      quick: { en: "Your name again, and your e-mail or mobile number", hi: "अपना नाम दोबारा, और अपना ईमेल या मोबाइल नंबर" },
      meaning: {
        en: "Below the signature you write your name again and an e-mail ID or mobile number where you can be contacted.",
        hi: "हस्ताक्षर के नीचे अपना नाम दोबारा और ऐसा ईमेल या मोबाइल नंबर लिखें जिस पर आपसे संपर्क हो सके।"
      },
      write: {
        en: "Write your name the same way as at the top. On the \"E-mail ID/Mobile Number\" line, give a number or e-mail you actually use.",
        hi: "नाम उसी तरह लिखें जैसे ऊपर लिखा है। \"ईमेल / मोबाइल नंबर\" वाली लाइन पर वही नंबर या ईमेल दें जो आप सच में इस्तेमाल करते हैं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the name differently from the top line", "Leaving the contact line blank"],
        hi: ["नाम ऊपर वाली लाइन से अलग लिखना", "संपर्क वाली लाइन ख़ाली छोड़ना"]
      }
    },
    {
      label: { en: "Place and date", hi: "जगह और तारीख़" },
      quick: { en: "Write the place and today's date", hi: "जगह और आज की तारीख़ लिखें" },
      meaning: {
        en: "The place where you sign and the date of signing, at the bottom left.",
        hi: "नीचे बाईं ओर वह जगह जहाँ आप हस्ताक्षर कर रहे हैं और हस्ताक्षर की तारीख़।"
      },
      write: {
        en: "Write the town or village and the date. Then hand the form to your BLO or ERO office, or apply online: ECI's FAQ lists Form 6B among the forms available on the Voter Service Portal (voters.eci.gov.in). The form has no receipt slip, so ask the office for an acknowledgement.",
        hi: "शहर या गाँव का नाम और तारीख़ लिखें। फिर फॉर्म अपने BLO या ERO दफ़्तर में दें, या ऑनलाइन भरें: चुनाव आयोग के FAQ में फॉर्म 6B उन फॉर्मों में है जो वोटर सर्विस पोर्टल (voters.eci.gov.in) पर मिलते हैं। इस फॉर्म में रसीद वाली पर्ची नहीं है, इसलिए दफ़्तर से पावती (रसीद) माँग लें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving the date blank", "Handing in the form without any acknowledgement"],
        hi: ["तारीख़ ख़ाली छोड़ना", "बिना किसी पावती के फॉर्म जमा कर देना"]
      }
    }
  ]
});
