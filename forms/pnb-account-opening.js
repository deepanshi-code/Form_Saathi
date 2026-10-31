// Checked against PNB's official "Account opening form for Resident Individual (Updated upto 19.02.2026)",
// form code PNB-1249A6 (LOT NO.01/FEB26), downloaded from pnb.bank.in/download-form.html.
// The file is bilingual: English pages are Part I (CIF), sections 1-9, Part II (account type,
// facilities, nomination, photo & signature) and the numbered terms & conditions (1-39).
// Every statement below comes from that form. If the form does not answer something,
// the guide says "ask at the branch" instead of guessing.

window.FORMS.push({
  id: "pnb-account-opening",
  verified: true,
  source: {
    title: "PNB Account opening form for Resident Individual, PNB-1249A6 (Updated upto 19.02.2026)",
    url: "https://pnb.bank.in/downloadprocess.aspx?fid=zNXDTKvAIueRqCEkrtlCXw=="
  },
  lastChecked: "2026-10-30",
  caution: {
    en: "This PNB form is updated up to 19 February 2026 and says \"Form 60\" for people without PAN. The newer account forms of SBI (October 2026) and HDFC Bank (April 2026) say \"Form 97\" instead, and the PAN application itself moved to Form 93 under the Income-tax Rules, 2026. If you have no PAN, ask at the branch which form they want now.",
    hi: "पीएनबी का यह फॉर्म 19 फ़रवरी 2026 तक अपडेट है और इसमें पैन न होने पर \"फॉर्म 60\" लिखा है। एसबीआई (अक्टूबर 2026) और एचडीएफसी बैंक (अप्रैल 2026) के नए खाता फॉर्म में इसकी जगह \"फॉर्म 97\" लिखा है, और आयकर नियम 2026 के तहत पैन का आवेदन भी अब फॉर्म 93 पर होता है। अगर आपके पास पैन नहीं है, तो शाखा में पूछें कि अब कौन-सा फॉर्म चाहिए।"
  },

  category: { en: "Bank", hi: "बैंक" },
  name: { en: "PNB Savings Account Opening Form", hi: "पीएनबी बचत खाता खोलने का फॉर्म" },
  about: {
    en: "Punjab National Bank's form for opening a savings (or current) account. It has two parts: Part I is about you (the \"Customer Information Sheet\"), Part II is about the account. The form says: fields marked * are mandatory, fill in BLOCK letters only, and use black ink for signature.",
    hi: "पंजाब नैशनल बैंक में बचत (या चालू) खाता खोलने का फॉर्म। इसके दो भाग हैं: भाग I में आपकी जानकारी (\"ग्राहक सूचना पत्र\"), भाग II में खाते की जानकारी। फॉर्म के अनुसार: * वाले खाने ज़रूरी हैं, सिर्फ़ बड़े (BLOCK) अक्षरों में भरें, और हस्ताक्षर काली स्याही से करें।"
  },

  fields: [
    {
      label: { en: "Type of Account (Part II)", hi: "खाते का प्रकार (भाग II)" },
      quick: { en: "Tick \"Savings Bank Account\" for a normal savings account", hi: "सामान्य बचत खाते के लिए \"Savings Bank Account\" पर टिक करें" },
      meaning: {
        en: "Part II starts with four boxes: Savings Bank Account, BSBDA (Basic Savings Bank Deposit Account), Small Account, Current Account.",
        hi: "भाग II की शुरुआत में चार खाने हैं: बचत बैंक खाता, BSBDA (बेसिक बचत बैंक जमा खाता), लघु खाता, चालू खाता।"
      },
      write: {
        en: "For a normal savings account, tick \"Savings Bank Account\". The terms say a BSBDA holder cannot open any other savings account in PNB, and must close existing PNB savings accounts within 30 days. A Small Account works for 12 months at first, and can be extended 12 more months if you show proof that you have an OVD. If you are unsure which suits you, ask at the branch.",
        hi: "सामान्य बचत खाते के लिए \"Savings Bank Account\" पर टिक करें। शर्तों के अनुसार BSBDA वाला व्यक्ति पीएनबी में कोई दूसरा बचत खाता नहीं खोल सकता, और उसे पीएनबी के मौजूदा बचत खाते 30 दिन में बंद करने होंगे। लघु खाता पहले 12 महीने चलता है, और OVD होने का प्रमाण देने पर 12 महीने और बढ़ सकता है। कौन-सा खाता आपके लिए ठीक है, यह पक्का न हो तो शाखा में पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking BSBDA while you already have or want another PNB savings account"],
        hi: ["पहले से या आगे पीएनबी में दूसरा बचत खाता होते हुए BSBDA पर टिक करना"]
      }
    },
    {
      label: { en: "Name *", hi: "नाम *" },
      quick: { en: "One BLOCK letter per box, same as on your ID", hi: "हर खाने में एक बड़ा अक्षर; नाम पहचान पत्र जैसा ही रखें" },
      meaning: {
        en: "Your name, split into boxes: Prefix (like Mr/Ms), First Name, Middle Name, Last Name.",
        hi: "आपका नाम, अलग-अलग खानों में: प्रीफ़िक्स (जैसे Mr/Ms), पहला नाम, बीच का नाम, आख़िरी नाम।"
      },
      write: {
        en: "Write one letter per box, in BLOCK (capital) letters. Leave Middle Name empty if you don't have one. The form does not say the name must match your ID, but keep it the same as on the ID you submit; ask at the branch if your ID spells it differently.",
        hi: "हर खाने में एक अक्षर, बड़े (BLOCK) अक्षरों में लिखें। बीच का नाम न हो तो वह खाना खाली छोड़ें। फॉर्म में यह नहीं लिखा कि नाम पहचान पत्र जैसा ही हो, फिर भी वैसा ही रखें जैसा जमा किए गए पहचान पत्र पर है; पहचान पत्र पर स्पेलिंग अलग हो तो शाखा में पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing in small (lowercase) letters", "Putting the surname in the First Name boxes"],
        hi: ["छोटे (lowercase) अक्षरों में लिखना", "उपनाम (सरनेम) को पहले नाम वाले खानों में लिखना"]
      }
    },
    {
      label: { en: "Name of * (Father / Mother / Spouse)", hi: "का नाम * (पिता / माता / पति या पत्नी)" },
      quick: { en: "Tick Father, Mother or Spouse; father's name is a must without PAN", hi: "पिता, माता या पति/पत्नी पर टिक कर नाम लिखें; पैन नहीं तो पिता का नाम" },
      meaning: {
        en: "Item 5 in Personal Details. You tick whose name you are writing: Father, Mother or Spouse.",
        hi: "व्यक्तिगत विवरण का खाना 5। आप टिक करते हैं कि किसका नाम लिख रहे हैं: पिता, माता या पति/पत्नी।"
      },
      write: {
        en: "Tick one box and write that person's full name. The form says: \"Father name is mandatory if PAN is not provided\".",
        hi: "एक खाने पर टिक करें और उस व्यक्ति का पूरा नाम लिखें। फॉर्म पर लिखा है: अगर पैन नहीं दिया है, तो पिता का नाम ज़रूरी है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Not ticking whose name you wrote", "Writing the mother's or spouse's name when you have no PAN"],
        hi: ["यह टिक न करना कि किसका नाम लिखा है", "पैन न होने पर माता या पति/पत्नी का नाम लिखना"]
      }
    },
    {
      label: { en: "Mobile No. and Email ID", hi: "मोबाइल नंबर और ईमेल आईडी" },
      quick: { en: "A mobile number you will keep; needed for electronic banking", hi: "ऐसा मोबाइल नंबर जो आगे भी रखेंगे; इसके बिना इलेक्ट्रॉनिक लेन-देन नहीं" },
      meaning: {
        en: "Your contact details. Part II says \"Mobile No. is Mandatory\" for ATM-cum-debit card, cheque book, internet banking, SMS alerts, phone banking, mobile banking and e-statement.",
        hi: "आपके संपर्क की जानकारी। भाग II में लिखा है कि एटीएम-कम-डेबिट कार्ड, चेक बुक, इंटरनेट बैंकिंग, SMS अलर्ट, फ़ोन बैंकिंग, मोबाइल बैंकिंग और ई-स्टेटमेंट के लिए मोबाइल नंबर ज़रूरी है।"
      },
      write: {
        en: "Write a mobile number you will keep. Without it you are not eligible for any electronic transactions (terms, point 28). One email or mobile can be registered with at most 5 customer IDs. If the number or email is already used by someone else at PNB (say, a parent), write the \"Reason\" and your \"Relationship with account holder\". The form also asks you to declare that your email is not a short-lived, self-disposable one.",
        hi: "ऐसा मोबाइल नंबर लिखें जो आप आगे भी रखेंगे। इसके बिना आप किसी भी इलेक्ट्रॉनिक लेन-देन के पात्र नहीं होंगे (शर्तें, बिंदु 28)। एक ईमेल या मोबाइल ज़्यादा से ज़्यादा 5 ग्राहक आईडी से जुड़ सकता है। अगर यह नंबर या ईमेल पीएनबी में पहले से किसी और (जैसे माता-पिता) के नाम पर है, तो \"कारण\" और \"खाताधारक के साथ संबंध\" लिखें। फॉर्म में यह घोषणा भी है कि आपका ईमेल कुछ दिन में ख़त्म होने वाला (डिस्पोज़ेबल) नहीं है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving the mobile number blank, which blocks electronic banking", "Using a parent's number without writing the reason and relationship", "Giving a temporary or throwaway email"],
        hi: ["मोबाइल नंबर खाली छोड़ना, जिससे इलेक्ट्रॉनिक बैंकिंग नहीं मिलती", "माता-पिता का नंबर देकर कारण और संबंध न लिखना", "अस्थायी या डिस्पोज़ेबल ईमेल देना"]
      }
    },
    {
      label: { en: "Proof of Identity / Address *", hi: "पहचान / पते का प्रमाण *" },
      quick: { en: "Tick ONE ID; fill its number and issue date", hi: "एक पहचान पत्र पर टिक करें; उसका नंबर और जारी होने की तारीख़ भरें" },
      meaning: {
        en: "Section 2. The form says: tick \"any one ID type\" and give its details.",
        hi: "खंड 2। फॉर्म कहता है: \"कोई एक\" पहचान पत्र चुनकर टिक करें और उसका विवरण दें।"
      },
      write: {
        en: "Tick one ID type. If you choose Aadhaar, also tick how it is checked: \"E-KYC\" or \"Offline verification\". Then fill Document Identification Number *, Issued By, Issue Date *, and Expiry Date (only if your ID has one).",
        hi: "एक पहचान पत्र पर टिक करें। आधार चुनें तो यह भी टिक करें कि जाँच कैसे होगी: \"E-KYC\" या \"Offline verification\"। फिर दस्तावेज़ पहचान संख्या *, जारी करने वाला, जारी होने की तारीख़ *, और समाप्ति तिथि (सिर्फ़ अगर पहचान पत्र पर हो) भरें।"
      },
      documents: {
        en: ["Any one of: Passport (mandatory for NRI/PIO)", "Voter's Identity Card", "Driving License", "NREGA Job Card", "Letter issued by National Population Register with name and address", "Proof of Possession of Aadhaar No."],
        hi: ["इनमें से कोई एक: पासपोर्ट (NRI/PIO के लिए ज़रूरी)", "वोटर पहचान पत्र", "ड्राइविंग लाइसेंस", "नरेगा जॉब कार्ड", "राष्ट्रीय जनसंख्या रजिस्टर का पत्र, जिसमें नाम और पता हो", "आधार नंबर होने का प्रमाण"]
      },
      mistakes: {
        en: ["Ticking more than one ID type", "Leaving Issue Date blank (it is mandatory)", "Bringing an ID that is not on this list, such as a college ID card"],
        hi: ["एक से ज़्यादा पहचान पत्र पर टिक करना", "जारी होने की तारीख़ खाली छोड़ना (यह ज़रूरी है)", "ऐसा पहचान पत्र लाना जो इस सूची में नहीं है, जैसे कॉलेज आईडी कार्ड"]
      }
    },
    {
      label: { en: "Address Details * and \"Is this your Current Address?\"", hi: "पते का विवरण * और \"क्या यही आपका वर्तमान पता है?\"" },
      quick: { en: "Address as on your ID; tick \"NO\" if you live elsewhere", hi: "पहचान पत्र वाला पता लिखें; अब कहीं और रहते हैं तो \"NO\" टिक करें" },
      meaning: {
        en: "Section 3 is the address \"as per Proof of Address\" you gave in section 2. Item 8 asks: \"Is the address provided above your Current Address?\" Section 4 is for your current / local / correspondence address.",
        hi: "खंड 3 में वही पता लिखें जो खंड 2 के पते के प्रमाण पर है। खाना 8 पूछता है: \"क्या ऊपर दिया पता ही आपका वर्तमान पता है?\" खंड 4 वर्तमान / स्थानीय / पत्राचार के पते के लिए है।"
      },
      write: {
        en: "Copy the address from your ID into section 3, with City/Village, District, State, PIN and Country. If you still live there, tick \"Yes\". If not (for example, you moved for college), tick \"NO\", write where you live now in section 4, and give one document from section 5. You must then submit an OVD with your current address within three months, or the bank may restrict the account.",
        hi: "खंड 3 में पहचान पत्र वाला पता लिखें: शहर/गाँव, ज़िला, राज्य, पिन और देश सहित। अगर आप अब भी वहीं रहते हैं, तो \"Yes\" पर टिक करें। अगर नहीं (जैसे पढ़ाई के लिए दूसरे शहर आए हैं), तो \"NO\" पर टिक करें, खंड 4 में अभी का पता लिखें, और खंड 5 में से एक दस्तावेज़ दें। फिर तीन महीने के अंदर वर्तमान पते वाला OVD जमा करना होगा, वरना बैंक खाते पर रोक लगा सकता है।"
      },
      documents: {
        en: ["Only if the ID lacks your current address, one of: Utility Bill", "PPO / FPPO (pension payment order)", "Property or Municipal Tax Receipt", "Accommodation allotment letter from an employer (Government, PSU, scheduled commercial bank, listed company, etc.)", "Self-Declaration (only if you did Aadhaar e-KYC and the Aadhaar address is not your current address; then the 3-month rule does not apply)"],
        hi: ["सिर्फ़ तब, जब पहचान पत्र पर वर्तमान पता न हो, इनमें से एक: बिजली-पानी जैसा बिल (यूटिलिटी बिल)", "PPO / FPPO (पेंशन भुगतान आदेश)", "संपत्ति या नगर निगम कर की रसीद", "नियोक्ता (सरकार, सार्वजनिक उपक्रम, अनुसूचित वाणिज्यिक बैंक, सूचीबद्ध कंपनी आदि) का आवास आवंटन पत्र", "स्व-घोषणा (सिर्फ़ तब, जब आधार e-KYC किया हो और आधार का पता वर्तमान पता न हो; तब 3 महीने वाला नियम लागू नहीं)"]
      },
      mistakes: {
        en: ["Writing your hostel or rented address in section 3 instead of the address on your ID", "Not submitting an updated OVD within three months", "Assuming any old bill works: the form doesn't say how recent it must be, so ask at the branch"],
        hi: ["खंड 3 में पहचान पत्र वाले पते की जगह हॉस्टल या किराए का पता लिखना", "तीन महीने में नए पते वाला OVD जमा न करना", "यह मान लेना कि कोई भी पुराना बिल चलेगा: बिल कितना नया हो, यह फॉर्म में नहीं लिखा, इसलिए शाखा में पूछें"]
      }
    },
    {
      label: { en: "Tax Proof: PAN * (or Form 60)", hi: "कर का प्रमाण: पैन * (या फॉर्म 60)" },
      quick: { en: "Your PAN; no PAN? Ask the branch: Form 60 or newer", hi: "अपना पैन लिखें; पैन नहीं तो शाखा में पूछें: फॉर्म 60 या नया फॉर्म" },
      meaning: {
        en: "Section 6. Item 1 asks for your PAN. Item 2 asks if your country of tax residence is India only.",
        hi: "खंड 6। खाना 1 में पैन माँगा गया है। खाना 2 पूछता है कि क्या आप सिर्फ़ भारत के कर निवासी हैं।"
      },
      write: {
        en: "Write your PAN. The form says \"If PAN not submitted, fill form 60\" (see the note at the top about the new tax rules). Without PAN, you must give your PAN by the date the Government notifies, or the account stops working until you do (terms, point 20). For item 2, tick \"Yes\" if India is your only country of tax residence. If you tick \"No\", you must also fill the FATCA annexure.",
        hi: "अपना पैन लिखें। फॉर्म पर लिखा है: पैन जमा न करें तो फॉर्म 60 भरें (नए कर नियमों वाली ऊपर की सूचना देखें)। पैन के बिना खाता खुले तो सरकार की तय तारीख़ तक पैन देना होगा, वरना पैन देने तक खाता काम नहीं करेगा (शर्तें, बिंदु 20)। खाना 2 में, अगर आप सिर्फ़ भारत के कर निवासी हैं तो \"Yes\" पर टिक करें। \"No\" पर टिक करें तो FATCA वाला अनुबंध भी भरना होगा।"
      },
      documents: {
        en: ["PAN card copy, OR the form for people without PAN (ask at the branch: Form 60 or a newer form)"],
        hi: ["पैन कार्ड की कॉपी, या पैन न होने पर उसका फॉर्म (शाखा में पूछें: फॉर्म 60 या कोई नया फॉर्म)"]
      },
      mistakes: {
        en: ["Leaving PAN blank without giving the no-PAN form", "Ticking \"No\" for tax residence by mistake, which needs an extra FATCA form"],
        hi: ["पैन खाली छोड़ना और पैन न होने वाला फॉर्म भी न देना", "गलती से कर निवास में \"No\" पर टिक करना, जिससे अलग FATCA फॉर्म भरना पड़ता है"]
      }
    },
    {
      label: { en: "Occupation Type *, Annual Income * and Expected Annual Credit *", hi: "पेशे का प्रकार *, वार्षिक आय * और अपेक्षित वार्षिक जमा *" },
      quick: { en: "Tick occupation, fill income and expected credit; no income? Ask branch", hi: "पेशा टिक करें, आय और अपेक्षित जमा भरें; आय नहीं तो शाखा में पूछें" },
      meaning: {
        en: "Section 7 asks what you do and your yearly income in rupees. Part II asks \"Expected Annual Credit\": how much money you expect to come into the account in a year.",
        hi: "खंड 7 पूछता है कि आप क्या करते हैं और आपकी सालाना आय रुपयों में। भाग II में \"अपेक्षित वार्षिक जमा\" पूछा गया है: साल भर में खाते में कितना पैसा आने की उम्मीद है।"
      },
      write: {
        en: "Occupation options: Private Sector Service, Public/Govt. Sector Service, Student, Retired, Self-Employed, Not Working, Housewife, Other. Fill \"Business\" and \"Nature of Business\" only if self-employed, and Organization Name and Designation only if salaried. The bank sets a limit on your account from the Expected Annual Credit. If you give only a self-declaration (no income proof), a lower limit is set, and once it is crossed no more money can come in until you submit proof (terms, point 36). The form doesn't say what a student with no income should write, so ask at the branch.",
        hi: "पेशे के विकल्प: निजी क्षेत्र सेवा, सार्वजनिक/सरकारी क्षेत्र सेवा, विद्यार्थी, सेवानिवृत्त, स्व-नियोजित, कार्यरत नहीं, गृहिणी, अन्य। \"व्यवसाय\" और \"व्यवसाय का स्वरूप\" सिर्फ़ स्व-नियोजित भरें, और संगठन का नाम व पदनाम सिर्फ़ नौकरी वाले। बैंक अपेक्षित वार्षिक जमा के आधार पर खाते की सीमा तय करता है। अगर आप सिर्फ़ स्व-घोषणा देते हैं (आय का प्रमाण नहीं), तो कम सीमा तय होगी, और सीमा पार होने पर प्रमाण देने तक खाते में और पैसा नहीं आ सकेगा (शर्तें, बिंदु 36)। जिस छात्र की कोई आय नहीं, वह क्या लिखे, यह फॉर्म में नहीं है, इसलिए शाखा में पूछें।"
      },
      documents: {
        en: ["Proof of annual income, if you have it (the form doesn't list which documents; ask at the branch)"],
        hi: ["वार्षिक आय का प्रमाण, अगर हो (कौन-से दस्तावेज़ चलेंगे, यह फॉर्म में नहीं लिखा; शाखा में पूछें)"]
      },
      mistakes: {
        en: ["Leaving Annual Income or Expected Annual Credit blank (both are mandatory)", "Writing a very low Expected Annual Credit, so money stops coming in once the limit is crossed"],
        hi: ["वार्षिक आय या अपेक्षित वार्षिक जमा खाली छोड़ना (दोनों ज़रूरी हैं)", "अपेक्षित वार्षिक जमा बहुत कम लिखना, जिससे सीमा पार होते ही खाते में पैसा आना रुक जाए"]
      }
    },
    {
      label: { en: "Politically exposed person *", hi: "राजनैतिक रूप से जोखिम वाले व्यक्ति *" },
      quick: { en: "Tick one; for most people it is \"None\"", hi: "एक पर टिक करें; ज़्यादातर लोगों के लिए \"None\" (कोई नहीं)" },
      meaning: {
        en: "Item 7.6. The form explains these are people who have been given prominent public functions by a foreign country, such as heads of state, senior politicians, senior government, judicial or military officers.",
        hi: "खाना 7.6। फॉर्म के अनुसार ये वे लोग हैं जिन्हें किसी दूसरे देश ने बड़ा सार्वजनिक पद दिया हो, जैसे राष्ट्र या सरकार के प्रमुख, वरिष्ठ राजनेता, वरिष्ठ सरकारी, न्यायिक या सैन्य अधिकारी।"
      },
      write: {
        en: "Tick one: \"Politically exposed person\", \"Related to politically exposed person\", or \"None\". For most people it is \"None\". Don't skip it: the field is mandatory.",
        hi: "एक पर टिक करें: \"राजनैतिक रूप से जोखिम वाले व्यक्ति\", \"उनसे संबंधित\", या \"इनमें से कोई नहीं\"। ज़्यादातर लोगों के लिए \"None\" (कोई नहीं)। इसे खाली न छोड़ें: यह ज़रूरी है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving all three boxes empty"],
        hi: ["तीनों खाने खाली छोड़ देना"]
      }
    },
    {
      label: { en: "Aadhaar consent: Yes / No (section 9)", hi: "आधार सहमति: हाँ / नहीं (खंड 9)" },
      quick: { en: "Tick Yes or No; DBT benefits need Aadhaar e-KYC and seeding", hi: "हाँ या नहीं पर टिक करें; डीबीटी लाभ के लिए आधार ई-केवाईसी और जोड़ना ज़रूरी" },
      meaning: {
        en: "A declaration that you gave your Aadhaar voluntarily, and that the bank may verify it with UIDAI through biometric authentication.",
        hi: "यह घोषणा कि आपने आधार अपनी मर्ज़ी से दिया है, और बैंक इसे UIDAI से बायोमेट्रिक जाँच द्वारा सत्यापित कर सकता है।"
      },
      write: {
        en: "Tick Yes or No. The form says: \"e-KYC authentication and Aadhar seeding is mandatory for availing DBT benefit\". DBT means government benefits (like scholarships or subsidies) paid directly into your account.",
        hi: "हाँ या नहीं पर टिक करें। फॉर्म पर लिखा है: डीबीटी का लाभ पाने के लिए ई-केवाईसी प्रमाणीकरण और आधार को बैंक खाते से जोड़ना ज़रूरी है। डीबीटी यानी सरकारी लाभ (जैसे छात्रवृत्ति या सब्सिडी) सीधे आपके खाते में।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking No and later expecting scholarship or subsidy money in this account"],
        hi: ["\"नहीं\" पर टिक करके बाद में इस खाते में छात्रवृत्ति या सब्सिडी की उम्मीद करना"]
      }
    },
    {
      label: { en: "Facilities required (Part II)", hi: "ज़रूरी सुविधाएँ (भाग II)" },
      quick: { en: "Tick the services you want; write the name for your card", hi: "जो सेवाएँ चाहिए उन पर टिक करें; डेबिट कार्ड पर छपने वाला नाम लिखें" },
      meaning: {
        en: "Services you want with the account: ATM cum Debit Card, Cheque Book, Internet Banking (View or Transaction), SMS Alerts (charges applicable), Phone Banking, Mobile Banking, e-statement instead of paper, Passbook.",
        hi: "खाते के साथ आप कौन-सी सेवाएँ चाहते हैं: एटीएम-कम-डेबिट कार्ड, चेक बुक, इंटरनेट बैंकिंग (सिर्फ़ देखना या लेन-देन), SMS अलर्ट (शुल्क लगेगा), फ़ोन बैंकिंग, मोबाइल बैंकिंग, कागज़ की जगह ई-स्टेटमेंट, पासबुक।"
      },
      write: {
        en: "Tick the boxes you want. For the debit card, tick Yes and write the \"Name as would appear on the card\". The first seven need a mobile number. For internet banking, \"View\" only lets you see the account; \"Transaction\" lets you send money too.",
        hi: "जो सुविधाएँ चाहिए उन पर टिक करें। डेबिट कार्ड के लिए Yes पर टिक करें और \"कार्ड पर छपने वाला नाम\" लिखें। पहली सात सुविधाओं के लिए मोबाइल नंबर ज़रूरी है। इंटरनेट बैंकिंग में \"View\" से सिर्फ़ खाता देख सकते हैं; \"Transaction\" से पैसे भी भेज सकते हैं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking only \"View\" when you want to send money online", "Forgetting the name for the debit card"],
        hi: ["ऑनलाइन पैसे भेजने हों फिर भी सिर्फ़ \"View\" पर टिक करना", "डेबिट कार्ड पर छपने वाला नाम न लिखना"]
      }
    },
    {
      label: { en: "Nomination (Part II, section 2)", hi: "नामांकन / नॉमिनी (भाग II, खंड 2)" },
      quick: { en: "One nominee here, or tick \"do not want to nominate\"", hi: "यहाँ एक नॉमिनी लिखें, या \"नामित नहीं करना चाहते\" पर टिक करें" },
      meaning: {
        en: "A nominee is the person to whom the bank returns the money in this account if you die. The form offers \"Yes, (Fill form below)\" or a box saying you do not want to nominate anyone.",
        hi: "नॉमिनी वह व्यक्ति है जिसे आपकी मृत्यु होने पर बैंक इस खाते का पैसा लौटाएगा। फॉर्म में \"हाँ (नीचे फॉर्म भरें)\" या \"किसी को नामित नहीं करना चाहते\" का खाना है।"
      },
      write: {
        en: "This form has space for one nominee: Name, Relationship with the Customer, Age, and Date of Birth if the nominee is a minor. Nominee's mobile number is optional. If the nominee is a minor, write the person who will receive the money on their behalf. The nominee must be a person (\"nomination in favour of other than individual is invalid\"). For more than one nominee, fill a separate form, PNB 1386. The bank must give you an acknowledgement slip (DA-1). You can also tick to print the nominee's name on the passbook.",
        hi: "इस फॉर्म में एक नॉमिनी की जगह है: नाम, ग्राहक से संबंध, उम्र, और नाबालिग हो तो जन्म तिथि। नॉमिनी का मोबाइल नंबर वैकल्पिक है। नॉमिनी नाबालिग हो, तो उस व्यक्ति का नाम लिखें जो उसकी ओर से पैसा लेगा। नॉमिनी कोई व्यक्ति ही होना चाहिए (संस्था आदि का नामांकन अमान्य है)। एक से ज़्यादा नॉमिनी के लिए अलग फॉर्म PNB 1386 भरें। बैंक आपको पावती पर्ची (DA-1) ज़रूर देगा। चाहें तो पासबुक पर नॉमिनी का नाम छपवाने के लिए टिक कर सकते हैं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving the section blank instead of ticking Yes or \"do not want to nominate\"", "Not writing who receives the money for a minor nominee", "Not taking the acknowledgement slip"],
        hi: ["\"हाँ\" या \"नामित नहीं करना चाहते\" पर टिक करने के बजाय खंड खाली छोड़ना", "नाबालिग नॉमिनी के लिए पैसा लेने वाले का नाम न लिखना", "पावती पर्ची न लेना"]
      }
    },
    {
      label: { en: "Mode of Operation *", hi: "परिचालन विधि *" },
      quick: { en: "Tick \"Self\" if the account is only in your name", hi: "खाता सिर्फ़ आपके नाम पर है तो \"Self\" पर टिक करें" },
      meaning: {
        en: "Who can run the account. Options: Self, Either or Survivor, Former or Survivor, Anyone or Survivor, Jointly Operated, Others.",
        hi: "खाता कौन चलाएगा। विकल्प: स्वयं, दोनों में से कोई एक या उत्तरजीवी, पूर्ववर्ती या उत्तरजीवी, कोई एक या उत्तरजीवी, संयुक्त रूप से, अन्य।"
      },
      write: {
        en: "If the account is only in your name, tick \"Self\". The other options are for joint accounts. In a joint account, every holder fills their own Part I. If you are opening a joint account and are unsure which option to choose, ask at the branch.",
        hi: "अगर खाता सिर्फ़ आपके नाम पर है, तो \"स्वयं\" (Self) पर टिक करें। बाकी विकल्प संयुक्त खाते के लिए हैं। संयुक्त खाते में हर खाताधारक अपना भाग I अलग भरता है। संयुक्त खाता खोल रहे हैं और विकल्प समझ न आए, तो शाखा में पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking a joint option for an account only in your name"],
        hi: ["सिर्फ़ अपने नाम वाले खाते के लिए संयुक्त खाते वाला विकल्प चुनना"]
      }
    },
    {
      label: { en: "Photo * and Signature / Thumb impression", hi: "फ़ोटो * और हस्ताक्षर / अंगूठे का निशान" },
      quick: { en: "Paste photo (don't staple); sign in black ink, same every time", hi: "फ़ोटो चिपकाएँ (स्टेपल नहीं); काली स्याही से, हर बार एक जैसा हस्ताक्षर करें" },
      meaning: {
        en: "Part I (end of section 9) has a photo box and a signature box. Part II, section 3 \"Photo & Signature\" has another photo box and two signature boxes for each applicant. The bank keeps these as your specimen signature.",
        hi: "भाग I (खंड 9 के अंत में) में एक फ़ोटो और एक हस्ताक्षर का खाना है। भाग II के खंड 3 \"फ़ोटो एवं हस्ताक्षर\" में हर आवेदक के लिए फिर एक फ़ोटो और दो हस्ताक्षर के खाने हैं। बैंक इन्हें आपके नमूना हस्ताक्षर के रूप में रखता है।"
      },
      write: {
        en: "Paste a recent passport-size photo; the form says \"Do not Staple\". Sign in black ink only, the same way every time. The form doesn't say how many photos to bring, so ask at the branch. If you give a thumb impression instead of signing, two witnesses must sign in the nomination section.",
        hi: "हाल की पासपोर्ट साइज़ फ़ोटो चिपकाएँ; फॉर्म पर लिखा है: स्टेपल न करें। सिर्फ़ काली स्याही से, हर बार एक जैसा हस्ताक्षर करें। कितनी फ़ोटो लानी हैं, यह फॉर्म में नहीं लिखा, इसलिए शाखा में पूछें। अगर हस्ताक्षर की जगह अंगूठा लगाते हैं, तो नॉमिनी वाले खंड में दो गवाहों के हस्ताक्षर ज़रूरी हैं।"
      },
      documents: { en: ["Recent passport-size photos (ask at the branch how many)"], hi: ["हाल की पासपोर्ट साइज़ फ़ोटो (कितनी, यह शाखा में पूछें)"] },
      mistakes: {
        en: ["Stapling the photo", "Using blue ink", "Signing differently in different boxes"],
        hi: ["फ़ोटो स्टेपल करना", "नीली स्याही का इस्तेमाल", "अलग-अलग खानों में अलग तरह से हस्ताक्षर करना"]
      }
    }
  ]
});
