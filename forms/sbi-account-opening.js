// Checked against SBI's official English form "Account Opening Form for Resident Individual"
// (file dated 07-10-2026 on sbi.bank.in) and RBI's FAQ on the KYC Master Direction (9 June 2025).
// Every statement below comes from one of those two documents. If something is not stated
// in them, the guide says "ask the branch" instead of guessing.

window.FORMS.push({
  id: "sbi-account-opening",
  verified: true,
  source: {
    title: "SBI Account Opening Form for Resident Individual (Part I & II), file dated 07-10-2026",
    url: "https://sbi.bank.in/documents/16012/38550822/07102026_Common+Deposit+Account+Opening+Form_+English.pdf/cde2f9e4-a54c-dc07-d7b3-1180d58f3cef?t=1791364855710"
  },
  lastChecked: "2026-10-30",

  category: { en: "Bank", hi: "बैंक" },
  name: { en: "SBI Savings Account Opening Form", hi: "एसबीआई बचत खाता खोलने का फॉर्म" },
  about: {
    en: "State Bank of India's form for opening a savings account. Fill it in BLOCK (capital) letters. Fields marked * are mandatory. Use black ink for signatures.",
    hi: "भारतीय स्टेट बैंक में बचत खाता खोलने का फॉर्म। इसे बड़े (कैपिटल) अक्षरों में भरें। * वाले खाने ज़रूरी हैं। हस्ताक्षर काली स्याही से करें।"
  },

  fields: [
    {
      label: { en: "Name *", hi: "नाम *" },
      meaning: {
        en: "Your full name, split into boxes: salutation (title), first name, middle name, last name.",
        hi: "आपका पूरा नाम, अलग-अलग खानों में: संबोधन (टाइटल), पहला नाम, बीच का नाम, आख़िरी नाम।"
      },
      write: {
        en: "The form says \"Same as ID Proof\": write your name exactly as on the ID you submit, in BLOCK letters.",
        hi: "फॉर्म पर लिखा है \"पहचान प्रमाण जैसा ही\": नाम बिल्कुल वैसा लिखें जैसा जमा किए गए पहचान पत्र पर है, बड़े अक्षरों में।"
      },
      documents: { en: ["The ID proof you submit (see 'Proof of identity/address')"], hi: ["जो पहचान प्रमाण आप जमा करेंगे ('पहचान/पते का प्रमाण' देखें)"] },
      mistakes: {
        en: ["Spelling or name order different from the ID proof", "Writing in small (lowercase) letters"],
        hi: ["पहचान पत्र से अलग स्पेलिंग या नाम का क्रम", "छोटे (lowercase) अक्षरों में लिखना"]
      }
    },
    {
      label: { en: "Date of birth *", hi: "जन्म तिथि *" },
      meaning: { en: "The day you were born.", hi: "आपके जन्म की तारीख।" },
      write: {
        en: "The boxes are printed as DD MM YYYY: day first, then month, then the full year.",
        hi: "खाने DD MM YYYY क्रम में छपे हैं: पहले दिन, फिर महीना, फिर पूरा साल।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the month before the day", "Writing only two digits of the year"],
        hi: ["दिन से पहले महीना लिखना", "साल के सिर्फ़ दो अंक लिखना"]
      }
    },
    {
      label: { en: "Gender *", hi: "लिंग *" },
      meaning: { en: "Options on the form: Male, Female, Third Gender.", hi: "फॉर्म पर विकल्प: पुरुष, महिला, तृतीय लिंग।" },
      write: { en: "Tick one box.", hi: "एक खाने पर टिक करें।" },
      documents: { en: [], hi: [] },
      mistakes: { en: [], hi: [] }
    },
    {
      label: { en: "Name of Father / Mother / Spouse *", hi: "पिता / माता / पति या पत्नी का नाम *" },
      meaning: {
        en: "Field 6 asks for the name of ONE of these people. You tick which one you are writing.",
        hi: "खाना 6 में इनमें से किसी एक का नाम माँगा गया है। आप टिक करके बताते हैं कि किसका नाम लिख रहे हैं।"
      },
      write: {
        en: "Tick Father, Mother or Spouse, then write that person's full name. The form says: \"Father name is mandatory, if PAN is not provided\".",
        hi: "पिता, माता या पति/पत्नी में से एक पर टिक करें और उनका पूरा नाम लिखें। फॉर्म पर लिखा है: अगर पैन नहीं दिया है, तो पिता का नाम ज़रूरी है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Not ticking whose name you wrote", "Writing the mother's or spouse's name when you have no PAN (the father's name is then mandatory)"],
        hi: ["यह टिक न करना कि किसका नाम लिखा है", "पैन न होने पर माता या पति/पत्नी का नाम लिखना (तब पिता का नाम ज़रूरी है)"]
      }
    },
    {
      label: { en: "Occupation type *", hi: "व्यवसाय का प्रकार *" },
      meaning: {
        en: "What you do. The form lists many options, such as Service (job), Business, Self Employed, Housewife, Student, Retired and Agriculture.",
        hi: "आप क्या काम करते हैं। फॉर्म में कई विकल्प हैं, जैसे सर्विस (नौकरी), व्यवसाय, स्वरोज़गार, गृहिणी, छात्र, सेवानिवृत्त, कृषि।"
      },
      write: {
        en: "Tick the one that fits. College and school students can tick \"Student\".",
        hi: "जो लागू हो उस पर टिक करें। कॉलेज या स्कूल के छात्र \"Student\" पर टिक कर सकते हैं।"
      },
      documents: { en: [], hi: [] },
      mistakes: { en: [], hi: [] }
    },
    {
      label: { en: "Annual income *", hi: "वार्षिक आय *" },
      meaning: { en: "How much you earn in a year, in rupees.", hi: "आप एक साल में कितना कमाते हैं, रुपयों में।" },
      write: {
        en: "This field is marked mandatory. The form does not say what to write if you have no income (for example, as a student), so ask the branch staff instead of leaving it blank.",
        hi: "यह खाना ज़रूरी बताया गया है। अगर आपकी कोई आय नहीं है (जैसे छात्र), तो क्या लिखें यह फॉर्म में नहीं बताया गया है, इसलिए खाली छोड़ने के बजाय शाखा के कर्मचारी से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: { en: ["Leaving it blank"], hi: ["खाली छोड़ देना"] }
    },
    {
      label: { en: "PAN * (or Form 97)", hi: "पैन * (या फॉर्म 97)" },
      meaning: {
        en: "PAN is your Permanent Account Number from the Income Tax Department. If you don't have one, the form asks for Form 97 instead.",
        hi: "पैन आयकर विभाग का स्थायी खाता संख्या है। अगर आपके पास पैन नहीं है, तो फॉर्म इसकी जगह फॉर्म 97 माँगता है।"
      },
      write: {
        en: "Write your PAN. No PAN? Submit Form 97 together with a proof of date of birth other than Aadhaar. You must give your PAN later by a date the Government notifies, or the account stops working until you do. PAN is also mandatory for international or forex transactions.",
        hi: "अपना पैन लिखें। पैन नहीं है? तो फॉर्म 97 और आधार के अलावा जन्म तिथि का कोई प्रमाण जमा करें। सरकार द्वारा तय तारीख़ तक बाद में पैन देना होगा, वरना पैन देने तक खाता काम करना बंद कर देगा। विदेशी/फ़ॉरेक्स लेन-देन के लिए पैन ज़रूरी है।"
      },
      changed: {
        en: "Changed recently: older SBI forms and RBI's June 2025 FAQ say \"Form 60\". SBI's current form (October 2026) says \"Form 97\". If someone tells you to bring Form 60, the advice may be outdated, so confirm at the branch.",
        hi: "हाल में बदला: एसबीआई के पुराने फॉर्म और आरबीआई के जून 2025 के FAQ में \"फॉर्म 60\" लिखा है। एसबीआई के मौजूदा फॉर्म (अक्टूबर 2026) में \"फॉर्म 97\" लिखा है। अगर कोई फॉर्म 60 लाने को कहे, तो वह सलाह पुरानी हो सकती है, इसलिए शाखा में पुष्टि करें।"
      },
      documents: {
        en: ["PAN card, OR Form 97 + a proof of date of birth (not Aadhaar)"],
        hi: ["पैन कार्ड, या फॉर्म 97 + जन्म तिथि का प्रमाण (आधार नहीं)"]
      },
      mistakes: {
        en: ["Leaving it blank instead of submitting Form 97", "Bringing Form 60 based on old advice"],
        hi: ["फॉर्म 97 देने के बजाय खाना खाली छोड़ना", "पुरानी सलाह के आधार पर फॉर्म 60 ले आना"]
      }
    },
    {
      label: { en: "Proof of identity / address (OVD) *", hi: "पहचान / पते का प्रमाण (OVD) *" },
      meaning: {
        en: "OVD means \"Officially Valid Document\": one ID from RBI's fixed list that shows your name and address.",
        hi: "OVD यानी \"आधिकारिक रूप से मान्य दस्तावेज़\": आरबीआई की तय सूची में से एक पहचान पत्र, जिसमें आपका नाम और पता हो।"
      },
      write: {
        en: "Tick any ONE ID type and write its document number. Also tick whether you are giving an e-document (digital version).",
        hi: "कोई एक पहचान पत्र चुनकर टिक करें और उसका नंबर लिखें। यह भी टिक करें कि आप ई-दस्तावेज़ (डिजिटल) दे रहे हैं या नहीं।"
      },
      documents: {
        en: ["Any one of: Passport", "Voter ID card", "Driving licence", "Proof of possession of Aadhaar number", "NREGA job card (signed by a State Government officer)", "Letter from the National Population Register with name and address"],
        hi: ["इनमें से कोई एक: पासपोर्ट", "वोटर आईडी कार्ड", "ड्राइविंग लाइसेंस", "आधार नंबर होने का प्रमाण", "नरेगा जॉब कार्ड (राज्य सरकार के अधिकारी के हस्ताक्षर सहित)", "राष्ट्रीय जनसंख्या रजिस्टर का पत्र, जिसमें नाम और पता हो"]
      },
      mistakes: {
        en: ["Ticking more than one ID type (the form asks for any one)", "Bringing an ID that is not on this list, such as a college ID card"],
        hi: ["एक से ज़्यादा पहचान पत्र पर टिक करना (फॉर्म कोई एक माँगता है)", "ऐसा पहचान पत्र लाना जो इस सूची में नहीं है, जैसे कॉलेज आईडी कार्ड"]
      }
    },
    {
      label: { en: "Current address and correspondence address *", hi: "वर्तमान पता और पत्राचार का पता *" },
      meaning: {
        en: "Current address is where you live now. Correspondence address is where the bank should send letters. Each has boxes for Address type, City/Village, District, State, PIN and Country.",
        hi: "वर्तमान पता = जहाँ आप अभी रहते हैं। पत्राचार का पता = जहाँ बैंक चिट्ठी भेजे। दोनों में पते का प्रकार, शहर/गाँव, ज़िला, राज्य, पिन और देश के खाने हैं।"
      },
      write: {
        en: "If both addresses are the same, tick \"Same as Current\". If your ID doesn't show your current address (for example, you moved for college), attach one of the documents below instead. Then you must submit Aadhaar or an OVD with your current address within 3 months, or the account may stop working.",
        hi: "अगर दोनों पते एक ही हैं, तो \"Same as Current\" पर टिक करें। अगर आपके पहचान पत्र पर वर्तमान पता नहीं है (जैसे पढ़ाई के लिए दूसरे शहर आए हैं), तो नीचे दिए दस्तावेज़ों में से एक लगाएँ। फिर 3 महीने के अंदर वर्तमान पते वाला आधार या OVD जमा करना होगा, वरना खाता बंद हो सकता है।"
      },
      documents: {
        en: ["Only if your ID lacks the current address, one of: Utility bill (electricity, telephone, post-paid mobile, piped gas, water) not more than 2 months old", "Property or municipal tax receipt", "Pension payment order (PPO / FPPO)", "Accommodation allotment letter from an employer (Government, PSU, bank, listed company, etc.)"],
        hi: ["सिर्फ़ तब, जब पहचान पत्र पर वर्तमान पता न हो, इनमें से एक: 2 महीने से पुराना न हो ऐसा बिजली/टेलीफ़ोन/पोस्टपेड मोबाइल/पाइप गैस/पानी का बिल", "संपत्ति या नगर निगम कर की रसीद", "पेंशन भुगतान आदेश (PPO / FPPO)", "नियोक्ता (सरकार, सार्वजनिक उपक्रम, बैंक, सूचीबद्ध कंपनी आदि) का आवास आवंटन पत्र"]
      },
      mistakes: {
        en: ["Using a utility bill older than 2 months", "Not submitting an updated ID within 3 months"],
        hi: ["2 महीने से पुराना बिल देना", "3 महीने के अंदर नए पते वाला पहचान पत्र जमा न करना"]
      }
    },
    {
      label: { en: "Mobile number and email", hi: "मोबाइल नंबर और ईमेल" },
      meaning: {
        en: "The form says all communication will be sent to this mobile number and email ID.",
        hi: "फॉर्म के अनुसार बैंक की सारी सूचना इसी मोबाइल नंबर और ईमेल पर आएगी।"
      },
      write: {
        en: "Write a mobile number you will keep. The form also asks whose number it is (\"Self\" is one option). Without a mobile number you get no electronic banking (cheque book, internet/mobile banking, SMS alerts); only ATM cash withdrawals up to Rs. 10,000.",
        hi: "ऐसा मोबाइल नंबर लिखें जो आप आगे भी रखेंगे। फॉर्म यह भी पूछता है कि नंबर किसका है (\"Self\" यानी ख़ुद का, एक विकल्प है)। मोबाइल नंबर के बिना इलेक्ट्रॉनिक बैंकिंग (चेक बुक, इंटरनेट/मोबाइल बैंकिंग, SMS अलर्ट) नहीं मिलेगी; सिर्फ़ एटीएम से ₹10,000 तक नकद निकाल सकेंगे।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving it blank, which blocks electronic banking"],
        hi: ["खाली छोड़ना, जिससे इलेक्ट्रॉनिक बैंकिंग नहीं मिलती"]
      }
    },
    {
      label: { en: "Photograph *", hi: "फ़ोटो *" },
      meaning: { en: "Your recent passport-size photo.", hi: "आपकी हाल की पासपोर्ट साइज़ फ़ोटो।" },
      write: {
        en: "Paste it in the photo box. The form says \"Do not Staple\". SBI's terms ask for two copies of recent passport-size photos.",
        hi: "फ़ोटो वाले खाने में चिपकाएँ। फॉर्म पर लिखा है: स्टेपल न करें। एसबीआई की शर्तों में हाल की दो पासपोर्ट साइज़ फ़ोटो माँगी गई हैं।"
      },
      documents: { en: ["2 recent passport-size photos"], hi: ["हाल की 2 पासपोर्ट साइज़ फ़ोटो"] },
      mistakes: { en: ["Stapling the photo", "Using an old photo"], hi: ["फ़ोटो स्टेपल करना", "पुरानी फ़ोटो लगाना"] }
    },
    {
      label: { en: "Nomination (Part II, section F)", hi: "नामांकन / नॉमिनी (भाग II, खंड F)" },
      meaning: {
        en: "A nominee is the person who receives the money in this account if you die. It is optional, but SBI advises it.",
        hi: "नॉमिनी वह व्यक्ति है जिसे आपकी मृत्यु होने पर इस खाते का पैसा मिलेगा। यह वैकल्पिक है, पर एसबीआई इसकी सलाह देता है।"
      },
      write: {
        en: "You can name up to 4 nominees, either all together with a share % for each (total must be 100%), or in order of priority (the next one counts only after the one before has died). Fill only ONE of those two columns. If a nominee is a minor, write their date of birth and fill in the guardian details. If you don't want a nominee, tick \"I/we do not want to nominate any person\" and sign.",
        hi: "आप 4 तक नॉमिनी रख सकते हैं: या तो सबको एक साथ, हर एक का हिस्सा % में (कुल 100% होना चाहिए), या प्राथमिकता के क्रम में (अगला नॉमिनी तभी गिना जाएगा जब पहले वाले की मृत्यु हो चुकी हो)। इन दोनों में से सिर्फ़ एक कॉलम भरें। नॉमिनी नाबालिग हो तो उसकी जन्म तिथि और अभिभावक की जानकारी भरें। नॉमिनी नहीं चाहिए तो \"I/we do not want to nominate any person\" पर टिक करके हस्ताक्षर करें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Share percentages that don't add up to 100%", "Filling both the % column and the priority column", "Leaving the section blank instead of ticking \"do not want to nominate\""],
        hi: ["हिस्सों का कुल 100% न होना", "% वाला और प्राथमिकता वाला, दोनों कॉलम भर देना", "\"नॉमिनी नहीं चाहिए\" पर टिक करने के बजाय पूरा खंड खाली छोड़ना"]
      }
    },
    {
      label: { en: "Signature / thumb impression", hi: "हस्ताक्षर / अंगूठे का निशान" },
      meaning: {
        en: "The bank keeps this signature as your specimen and matches it on later transactions. The form asks for it in several places: next to the photo, under the declarations and in the nomination section.",
        hi: "बैंक इस हस्ताक्षर को आपके नमूने के रूप में रखता है और आगे के लेन-देन में इसी से मिलान करता है। फॉर्म में यह कई जगह माँगा गया है: फ़ोटो के पास, घोषणाओं के नीचे और नॉमिनी वाले खंड में।"
      },
      write: {
        en: "Sign in black ink. SBI's terms say your signature must be legible and well formed, and should NOT be in capital or block letters. Use the same signature every time. If you give a thumb impression instead, two witnesses must sign the nomination section.",
        hi: "काली स्याही से हस्ताक्षर करें। एसबीआई की शर्तों के अनुसार हस्ताक्षर साफ़ और सुडौल होने चाहिए और कैपिटल या ब्लॉक अक्षरों में नहीं होने चाहिए। हर बार एक जैसा हस्ताक्षर करें। अगर हस्ताक्षर की जगह अंगूठा लगाते हैं, तो नॉमिनी वाले खंड में दो गवाहों के हस्ताक्षर ज़रूरी हैं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Signing in capital letters (the form is filled in capitals, but the signature must not be)", "Signing differently each time", "Using blue ink"],
        hi: ["कैपिटल अक्षरों में हस्ताक्षर करना (फॉर्म कैपिटल में भरा जाता है, पर हस्ताक्षर नहीं)", "हर बार अलग हस्ताक्षर करना", "नीली स्याही का इस्तेमाल"]
      }
    }
  ]
});
