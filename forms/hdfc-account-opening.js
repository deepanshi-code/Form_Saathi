// Checked against HDFC Bank's official English "Account Opening Form for Resident Individuals"
// (4 pages, form code "92589/02.04.2026_M070", file last modified 08-07-2026 on hdfc.bank.in, Forms Centre > Personal).
// Minimum-balance and initial-deposit figures come from HDFC Bank's official "Regular Savings Account
// Eligibility" page (hdfc.bank.in, figures stated as effective July 1, 2022).
// Every statement below comes from one of those two documents. If something is not stated
// in them, the guide says "ask at the branch" instead of guessing.

window.FORMS.push({
  id: "hdfc-account-opening",
  verified: true,
  source: {
    title: "HDFC Bank Account Opening Form for Resident Individuals (form code 92589/02.04.2026_M070), file dated 08-07-2026",
    url: "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/pdf/forms-centre/personal-banking/account-openings/Account%20Opening%20Form%20-%20For%20Individuals%20(%20for%20opening%20Regular%20Savings%20Account,%20Basic%20Savings%20Bank%20Deposit%20Account,%20Individual%20Current%20Account).pdf"
  },
  lastChecked: "2026-10-30",

  category: { en: "Bank", hi: "बैंक" },
  name: { en: "HDFC Bank Savings Account Opening Form", hi: "एचडीएफसी बैंक बचत खाता खोलने का फॉर्म" },
  about: {
    en: "HDFC Bank's 4-page form for resident individuals. The same form is used for savings, salary, basic savings (BSBDA), current, FD, RD, PPF and Sukanya Samriddhi accounts, so fill only the sections for the account you want. Fields marked * are mandatory. If you are already an HDFC customer, write your Customer ID (mandatory for existing customers). The form says: \"Do not sign this form if it is BLANK\".",
    hi: "निवासी व्यक्तियों के लिए एचडीएफसी बैंक का 4 पेज का फॉर्म। यही फॉर्म बचत, सैलरी, बेसिक बचत (BSBDA), चालू, एफडी, आरडी, पीपीएफ और सुकन्या समृद्धि खातों के लिए है, इसलिए सिर्फ़ वही हिस्से भरें जो आपके खाते से जुड़े हैं। * वाले खाने ज़रूरी हैं। अगर आप पहले से एचडीएफसी के ग्राहक हैं, तो अपनी कस्टमर आईडी लिखें (पुराने ग्राहकों के लिए ज़रूरी)। फॉर्म पर लिखा है: खाली फॉर्म पर हस्ताक्षर न करें।"
  },

  fields: [
    {
      label: { en: "\"Please open my / our\" (account type)", hi: "\"मेरा / हमारा खाता खोलें\" (खाते का प्रकार)" },
      quick: { en: "Tick one: \"Savings\" for a normal account; ask branch about balance", hi: "कोई एक टिक करें: सामान्य खाते के लिए \"Savings\"; बैलेंस शाखा में पूछें" },
      meaning: {
        en: "Which account you want. Options printed on the form: Savings, Savings Max, Salary, Salary & Reimbursement, BSBDA Savings (Basic Savings Bank Deposit Account), Kids Advantage Account, Current, FD, RD, PPF A/C, Sukanya Samriddhi A/C, KGC SB & CA.",
        hi: "आप कौन-सा खाता चाहते हैं। फॉर्म पर छपे विकल्प: Savings, Savings Max, Salary, Salary & Reimbursement, BSBDA Savings (बेसिक बचत खाता), Kids Advantage, Current (चालू), FD, RD, PPF, सुकन्या समृद्धि, KGC SB & CA।"
      },
      write: {
        en: "The form says \"[Tick anyone]\". For a normal savings account, tick \"Savings\". The form does not explain how the products differ (for example, Savings vs Savings Max vs BSBDA), so ask at the branch which one suits you and what balance it needs.",
        hi: "फॉर्म पर लिखा है \"[Tick anyone]\" यानी कोई एक चुनें। सामान्य बचत खाते के लिए \"Savings\" पर टिक करें। अलग-अलग खातों में क्या फ़र्क है (जैसे Savings, Savings Max, BSBDA), यह फॉर्म में नहीं बताया गया है, इसलिए शाखा में पूछें कि आपके लिए कौन-सा सही है और उसमें कितना बैलेंस रखना होगा।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking more than one account type", "Picking an account without asking what minimum balance it needs"],
        hi: ["एक से ज़्यादा खाते पर टिक करना", "बिना पूछे खाता चुन लेना कि उसमें कितना न्यूनतम बैलेंस चाहिए"]
      }
    },
    {
      label: { en: "(B) Operating instruction", hi: "(B) खाता चलाने का तरीका" },
      quick: { en: "Tick \"Single\" if the account is only in your name", hi: "खाता सिर्फ़ आपके नाम पर है तो \"Single\" पर टिक करें" },
      meaning: {
        en: "Who can use the account. Options: Single, Either or Survivor, Jointly, Former or Survivor, Minor under Guardian.",
        hi: "खाता कौन चला सकता है। विकल्प: Single (अकेले), Either or Survivor (दोनों में से कोई भी), Jointly (दोनों साथ मिलकर), Former or Survivor (पहला धारक, उसके बाद जीवित धारक), Minor under Guardian (अभिभावक के तहत नाबालिग)।"
      },
      write: {
        en: "For an account only in your name, tick \"Single\". Note what the form says: for \"Jointly\", \"Debit/ATM Card not issued\". Linking an existing card is available only for Single or Either or Survivor.",
        hi: "अगर खाता सिर्फ़ आपके नाम पर है, तो \"Single\" पर टिक करें। ध्यान दें: फॉर्म के अनुसार \"Jointly\" चुनने पर डेबिट/एटीएम कार्ड नहीं मिलता। पुराना कार्ड जोड़ने की सुविधा सिर्फ़ Single या Either or Survivor में है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking \"Jointly\" and then expecting a debit card"],
        hi: ["\"Jointly\" चुनकर डेबिट कार्ड की उम्मीद करना"]
      }
    },
    {
      label: { en: "(A) Applicant name", hi: "(A) आवेदक का नाम" },
      quick: { en: "One letter per box; leave a box empty between words", hi: "हर खाने में एक अक्षर; शब्दों के बीच एक खाना खाली छोड़ें" },
      meaning: {
        en: "Your name in separate boxes: Prefix (Mr/Ms etc.), First name, Middle name, Surname.",
        hi: "आपका नाम अलग-अलग खानों में: Prefix (श्री/सुश्री आदि), पहला नाम, बीच का नाम, उपनाम (सरनेम)।"
      },
      write: {
        en: "One letter per box. The form says \"Leave a space between two words.\" If the account is for a minor, the form says to write the parent's or guardian's name (as an applicant) below the minor's name.",
        hi: "हर खाने में एक अक्षर। फॉर्म पर लिखा है: दो शब्दों के बीच एक खाना खाली छोड़ें। अगर खाता नाबालिग का है, तो नाबालिग के नाम के नीचे माता-पिता या अभिभावक का नाम (आवेदक के रूप में) लिखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the surname in the First name box", "Not leaving a box empty between words"],
        hi: ["सरनेम को पहले नाम वाले खाने में लिख देना", "शब्दों के बीच खाली खाना न छोड़ना"]
      }
    },
    {
      label: { en: "Date of birth * and age proof", hi: "जन्म तिथि * और उम्र का प्रमाण" },
      quick: { en: "DD MM YYYY; ask the branch which age proof to attach", hi: "DD MM YYYY लिखें; उम्र का कौन-सा प्रमाण चलेगा, शाखा में पूछें" },
      meaning: {
        en: "The day you were born. Next to it is an \"AGE PROOF\" column with a \"Proof Attached\" box.",
        hi: "आपके जन्म की तारीख। इसके पास \"AGE PROOF\" (उम्र का प्रमाण) का कॉलम है, जिसमें \"Proof Attached\" (प्रमाण लगाया) का खाना है।"
      },
      write: {
        en: "The boxes are printed DD MM YYYY: day, then month, then the full year. Tick \"Proof Attached\" if you attach an age proof. The form does not list which documents count as age proof, so ask at the branch.",
        hi: "खाने DD MM YYYY क्रम में हैं: पहले दिन, फिर महीना, फिर पूरा साल। अगर उम्र का प्रमाण लगा रहे हैं तो \"Proof Attached\" पर टिक करें। कौन-से दस्तावेज़ उम्र के प्रमाण माने जाएँगे, यह फॉर्म में नहीं लिखा, इसलिए शाखा में पूछें।"
      },
      documents: { en: ["Age proof (ask at the branch which documents are accepted)"], hi: ["उम्र का प्रमाण (शाखा में पूछें कि कौन-से दस्तावेज़ चलेंगे)"] },
      mistakes: {
        en: ["Writing the month before the day", "Writing only two digits of the year"],
        hi: ["दिन से पहले महीना लिखना", "साल के सिर्फ़ दो अंक लिखना"]
      }
    },
    {
      label: { en: "Gender * and Mother's maiden name *", hi: "लिंग * और माँ का शादी से पहले का नाम *" },
      quick: { en: "Tick gender; write your mother's name before marriage", hi: "लिंग टिक करें; माँ का शादी से पहले वाला नाम लिखें" },
      meaning: {
        en: "Gender options: Male, Female, Third Gender. \"Mother's maiden name\" means your mother's name before her marriage. Unlike many forms, this one does not ask for your father's name here.",
        hi: "लिंग के विकल्प: पुरुष, महिला, तृतीय लिंग। \"Mother's maiden name\" यानी आपकी माँ का शादी से पहले का नाम। कई फॉर्मों से अलग, यहाँ पिता का नाम नहीं माँगा गया है।"
      },
      write: {
        en: "Tick one gender box. Write your mother's name as it was before marriage. Both are marked mandatory (*).",
        hi: "लिंग के एक खाने पर टिक करें। माँ का वह नाम लिखें जो शादी से पहले था। दोनों खाने ज़रूरी (*) हैं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the mother's current (married) surname instead of her maiden name", "Writing the father's name in this box"],
        hi: ["शादी से पहले के नाम की जगह माँ का अभी का (शादी के बाद का) सरनेम लिखना", "इस खाने में पिता का नाम लिख देना"]
      }
    },
    {
      label: { en: "PAN No. * (or Form 97)", hi: "पैन नंबर * (या फॉर्म 97)" },
      quick: { en: "Your 10-character PAN, or attach Form 97 if you have none", hi: "अपना 10 अक्षरों का पैन लिखें; पैन नहीं तो फॉर्म 97 लगाएँ" },
      meaning: {
        en: "PAN is your Permanent Account Number from the Income Tax Department. The form says: \"PAN NO. (If not available attach Form 97)\". Nationality is also asked here and is mandatory.",
        hi: "पैन आयकर विभाग का स्थायी खाता संख्या है। फॉर्म पर लिखा है: पैन न हो तो फॉर्म 97 लगाएँ। यहीं राष्ट्रीयता (Nationality) भी पूछी गई है, जो ज़रूरी है।"
      },
      write: {
        en: "Write your 10-character PAN. No PAN? Attach Form 97. There is also a \"Form 97 Exempt\" box; the form does not explain who is exempt, so ask at the branch. This form says \"Form 97\", not \"Form 60\"; if someone asks you for Form 60, confirm at the branch.",
        hi: "अपना 10 अक्षरों का पैन लिखें। पैन नहीं है? तो फॉर्म 97 लगाएँ। फॉर्म पर \"Form 97 Exempt\" (छूट) का खाना भी है; किसे छूट मिलती है यह नहीं बताया गया, इसलिए शाखा में पूछें। इस फॉर्म में \"फॉर्म 97\" लिखा है, \"फॉर्म 60\" नहीं; अगर कोई फॉर्म 60 माँगे तो शाखा में पुष्टि करें।"
      },
      documents: {
        en: ["PAN card, OR a filled Form 97"],
        hi: ["पैन कार्ड, या भरा हुआ फॉर्म 97"]
      },
      mistakes: {
        en: ["Leaving PAN blank without attaching Form 97", "Ticking \"Form 97 Exempt\" without checking that it applies to you"],
        hi: ["फॉर्म 97 लगाए बिना पैन का खाना खाली छोड़ना", "बिना पक्का किए \"Form 97 Exempt\" पर टिक कर देना"]
      }
    },
    {
      label: { en: "Aadhaar card no. and \"Link with A/C for DBT\"", hi: "आधार नंबर और \"DBT के लिए खाते से जोड़ें\"" },
      quick: { en: "Write Aadhaar number; tick whether to link it for DBT", hi: "आधार नंबर लिखें; DBT के लिए जोड़ना है या नहीं, टिक करें" },
      meaning: {
        en: "DBT means Direct Benefit Transfer: government subsidies paid straight into a bank account. Here you choose whether this account should receive them. The form also asks for the \"Previous Bank name where subsidy is received\".",
        hi: "DBT यानी डायरेक्ट बेनिफ़िट ट्रांसफ़र: सरकारी सब्सिडी सीधे बैंक खाते में आना। यहाँ आप चुनते हैं कि सब्सिडी इस खाते में आए या नहीं। फॉर्म यह भी पूछता है कि अभी सब्सिडी किस बैंक में आती है।"
      },
      write: {
        en: "Write your Aadhaar number and tick whether to link it for DBT. The form says the DBT / Non-DBT consent must be given by all applicants. In the declarations you agree that you give your Aadhaar (physical copy, e-Aadhaar, masked Aadhaar or offline XML) voluntarily for identity/address proof. If you are unsure about moving your subsidy to this account, ask at the branch before ticking.",
        hi: "अपना आधार नंबर लिखें और टिक करें कि DBT के लिए जोड़ना है या नहीं। फॉर्म के अनुसार DBT / Non-DBT की सहमति सभी आवेदकों को देनी होगी। घोषणा में आप मानते हैं कि आधार (कॉपी, ई-आधार, मास्क्ड आधार या ऑफ़लाइन XML) पहचान/पते के प्रमाण के लिए अपनी मर्ज़ी से दे रहे हैं। अगर सब्सिडी इस खाते में लाने को लेकर पक्का नहीं हैं, तो टिक करने से पहले शाखा में पूछें।"
      },
      documents: { en: ["Aadhaar (physical copy, e-Aadhaar, masked Aadhaar or offline XML), if you choose to give it"], hi: ["आधार (कॉपी, ई-आधार, मास्क्ड आधार या ऑफ़लाइन XML), अगर आप देना चाहें"] },
      mistakes: {
        en: ["Ticking \"Link with A/C for DBT\" without knowing your subsidy will now come to this account"],
        hi: ["बिना समझे \"Link with A/C for DBT\" पर टिक करना कि अब सब्सिडी इसी खाते में आएगी"]
      }
    },
    {
      label: { en: "(D) Mailing address and permanent address", hi: "(D) डाक का पता और स्थायी पता" },
      quick: { en: "Mailing address with landmark (mandatory); your card PIN comes here", hi: "डाक का पता लैंडमार्क के साथ (ज़रूरी); कार्ड का पिन यहीं आएगा" },
      meaning: {
        en: "Mailing address is where the bank sends post. Permanent address is your fixed home address. Both have boxes for Flat No & Bldg Name, Road No./Name, Landmark, City, State, PIN Code and Country.",
        hi: "डाक का पता = जहाँ बैंक चिट्ठी भेजेगा। स्थायी पता = आपका पक्का घर का पता। दोनों में फ़्लैट/बिल्डिंग, सड़क, लैंडमार्क, शहर, राज्य, पिन कोड और देश के खाने हैं।"
      },
      write: {
        en: "Landmark is mandatory: the form asks for \"a prominent landmark\" so deliveries reach you. Your welcome kit and the ATM/debit card PIN are posted to the mailing address. If both addresses are the same, tick the box for that. Permanent address is mandatory if your mailing address is an office address. If you move, the form says to tell the bank within two weeks with a valid address proof.",
        hi: "लैंडमार्क ज़रूरी है: फॉर्म कोई जाना-माना लैंडमार्क माँगता है ताकि डाक आप तक पहुँचे। वेलकम किट और एटीएम/डेबिट कार्ड का पिन डाक के पते पर आता है। दोनों पते एक हों तो उसका खाना टिक करें। अगर डाक का पता ऑफ़िस का है, तो स्थायी पता ज़रूरी है। फॉर्म के अनुसार घर बदलने पर दो हफ़्ते के अंदर सही पते के प्रमाण के साथ बैंक को बताएँ।"
      },
      documents: { en: ["Address proof (ask at the branch which documents are accepted)"], hi: ["पते का प्रमाण (शाखा में पूछें कि कौन-से दस्तावेज़ चलेंगे)"] },
      mistakes: {
        en: ["Leaving the landmark blank", "Giving a hostel or temporary address as mailing address and missing the PIN letter after moving", "Not telling the bank within two weeks after moving"],
        hi: ["लैंडमार्क खाली छोड़ना", "हॉस्टल या अस्थायी पता देना और वहाँ से जाने के बाद पिन वाली चिट्ठी न मिलना", "घर बदलने के बाद दो हफ़्ते में बैंक को न बताना"]
      }
    },
    {
      label: { en: "(E) Contact details: mobile * and email *", hi: "(E) संपर्क: मोबाइल * और ईमेल *" },
      quick: { en: "A mobile and email you will keep; statements come here", hi: "ऐसा मोबाइल और ईमेल जो आगे भी रखेंगे; स्टेटमेंट यहीं आएगा" },
      meaning: {
        en: "The form says contact details are mandatory for new customers. Your mobile number will be linked to NetBanking, Mobile Banking, SMS, toll-free banking and WhatsApp banking.",
        hi: "फॉर्म के अनुसार नए ग्राहकों के लिए संपर्क जानकारी ज़रूरी है। आपका मोबाइल नंबर नेटबैंकिंग, मोबाइल बैंकिंग, SMS, टोल-फ़्री बैंकिंग और व्हाट्सऐप बैंकिंग से जुड़ जाएगा।"
      },
      write: {
        en: "Write a mobile number and email you will keep. Free monthly statements go to this email, and you get SMS alerts for credits/debits above Rs. 5,000. If the bank has no mobile number for you, it may issue an ATM card instead of a debit card. There is a box \"I do not want Net / Mobile Banking\" if you don't want it.",
        hi: "ऐसा मोबाइल नंबर और ईमेल लिखें जो आप आगे भी रखेंगे। हर महीने का स्टेटमेंट इसी ईमेल पर मुफ़्त आएगा और ₹5,000 से ज़्यादा के लेन-देन पर SMS आएगा। अगर बैंक के पास आपका मोबाइल नंबर नहीं है, तो डेबिट कार्ड की जगह एटीएम कार्ड दिया जा सकता है। नेट/मोबाइल बैंकिंग नहीं चाहिए तो \"I do not want Net / Mobile Banking\" का खाना है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Giving a family member's or old number you won't keep", "Giving a wrong email, so statements don't reach you"],
        hi: ["घर के किसी और का या ऐसा पुराना नंबर देना जो आप नहीं रखेंगे", "गलत ईमेल देना, जिससे स्टेटमेंट नहीं मिलता"]
      }
    },
    {
      label: { en: "(F) Customer profile: occupation, income, source of funds", hi: "(F) ग्राहक प्रोफ़ाइल: व्यवसाय, आय, पैसे का स्रोत" },
      quick: { en: "Tick accurately (students: \"Student\"); no income? Ask the branch", hi: "सही जानकारी टिक करें (छात्र: \"Student\"); आय नहीं तो शाखा में पूछें" },
      meaning: {
        en: "Occupation options include Salaried, Self-employed, Retired, Housewife, Student and Others. Gross annual income is in ranges, starting at \"< 50,000\". Source of funds: Salary, Business Income, Agriculture, Investment Income, Others. Residence type: Owned, Rented/Leased, Ancestral/Family, Company provided.",
        hi: "व्यवसाय के विकल्पों में नौकरी (Salaried), स्वरोज़गार, सेवानिवृत्त, गृहिणी, छात्र (Student) और अन्य हैं। सालाना आय सीमाओं में है, सबसे कम \"< 50,000\"। पैसे का स्रोत: वेतन, व्यवसाय, खेती, निवेश से आय, अन्य। घर का प्रकार: अपना, किराए का, पुश्तैनी/परिवार का, कंपनी का दिया।"
      },
      write: {
        en: "Students can tick \"Student\". The form has no \"no income\" box, so if you earn nothing, ask at the branch what to tick for income and source of funds. Be accurate: the form says, as per RBI guidelines, the bank checks that your transactions match this profile.",
        hi: "छात्र \"Student\" पर टिक कर सकते हैं। फॉर्म में \"कोई आय नहीं\" का खाना नहीं है, इसलिए अगर आपकी कमाई नहीं है तो आय और पैसे के स्रोत के लिए क्या टिक करें, यह शाखा में पूछें। सही जानकारी दें: फॉर्म के अनुसार आरबीआई के नियमों के तहत बैंक देखता है कि आपके लेन-देन इस प्रोफ़ाइल से मेल खाते हैं या नहीं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Guessing a high income range", "Leaving income and source of funds blank"],
        hi: ["अंदाज़े से ज़्यादा आय की सीमा चुन लेना", "आय और पैसे के स्रोत का खाना खाली छोड़ना"]
      }
    },
    {
      label: { en: "(G) Politically Exposed Person (PEP) declaration", hi: "(G) राजनीतिक रूप से प्रमुख व्यक्ति (PEP) की घोषणा" },
      quick: { en: "Tick Yes or No; most people tick No", hi: "Yes या No टिक करें; ज़्यादातर लोग No चुनते हैं" },
      meaning: {
        en: "PEPs are people entrusted with prominent public functions by a foreign country, such as heads of state, senior politicians, senior government, judicial or military officers. You declare whether you are a PEP or a relative or close associate of one.",
        hi: "PEP वे लोग हैं जिन्हें किसी विदेशी देश ने बड़ा सार्वजनिक पद दिया हो, जैसे राष्ट्राध्यक्ष, वरिष्ठ नेता, वरिष्ठ सरकारी, न्यायिक या सैन्य अधिकारी। आप बताते हैं कि आप PEP हैं या किसी PEP के रिश्तेदार या क़रीबी सहयोगी हैं या नहीं।"
      },
      write: {
        en: "Tick Yes or No. Most people tick No. The form says the bank can close the account if this declaration is untrue, and that you must inform the bank if this changes later.",
        hi: "Yes या No पर टिक करें। ज़्यादातर लोग No चुनते हैं। फॉर्म के अनुसार यह घोषणा गलत निकली तो बैंक खाता बंद कर सकता है, और बाद में स्थिति बदले तो बैंक को बताना होगा।"
      },
      documents: { en: [], hi: [] },
      mistakes: { en: ["Leaving both Yes and No unticked"], hi: ["Yes और No दोनों में से किसी पर टिक न करना"] }
    },
    {
      label: { en: "(H) Payment details and minimum balance", hi: "(H) पैसा जमा करने का तरीका और न्यूनतम बैलेंस" },
      quick: { en: "Pick cash, cheque or transfer; check minimum balance is filled before signing", hi: "नकद, चेक या ट्रांसफ़र चुनें; हस्ताक्षर से पहले न्यूनतम बैलेंस लिखा देखें" },
      meaning: {
        en: "How you put the first money in: Cheque, HDFC/other bank transfer, or Cash. On page 4 you also confirm the \"Average Monthly / Quarterly / Half Yearly Balance\" you must keep; the amount is left blank for that product.",
        hi: "पहला पैसा कैसे जमा करेंगे: चेक, एचडीएफसी/दूसरे बैंक से ट्रांसफ़र, या नकद। पेज 4 पर आप यह भी मानते हैं कि आपको कितना \"औसत मासिक / तिमाही / छमाही बैलेंस\" रखना है; रकम का खाना उस खाते के हिसाब से भरा जाता है।"
      },
      write: {
        en: "Cash must be deposited in person at the account-opening branch only. A cheque must be crossed \"A/c payee\" and made payable to \"HDFC Bank Ltd. A/c. <Applicant's Name>\". Make sure the minimum balance amount and product name are written before you sign: not keeping it \"will attract charges\". HDFC's website lists, for the Regular Savings Account: urban Rs. 10,000 average monthly balance, semi-urban Rs. 5,000, rural Rs. 2,500 average quarterly balance (or a fixed deposit instead), with the same amounts as initial deposit. Confirm the current figure at the branch.",
        hi: "नकद सिर्फ़ उसी शाखा में ख़ुद जाकर जमा होगा जहाँ खाता खुल रहा है। चेक पर \"A/c payee\" क्रॉसिंग हो और वह \"HDFC Bank Ltd. A/c. <आवेदक का नाम>\" के नाम पर हो। हस्ताक्षर से पहले देख लें कि न्यूनतम बैलेंस की रकम और खाते का नाम लिखा हो: यह बैलेंस न रखने पर चार्ज लगेगा। एचडीएफसी की वेबसाइट पर Regular Savings Account के लिए: शहरी शाखा ₹10,000 औसत मासिक बैलेंस, अर्ध-शहरी ₹5,000, ग्रामीण ₹2,500 औसत तिमाही बैलेंस (या इसकी जगह एफडी), और इतनी ही रकम शुरुआती जमा। मौजूदा रकम शाखा में पक्की करें।"
      },
      documents: { en: ["Cheque, transfer details or cash for the first deposit"], hi: ["पहली जमा के लिए चेक, ट्रांसफ़र की जानकारी या नकद"] },
      mistakes: {
        en: ["Signing while the minimum balance amount is still blank", "Writing the cheque in the bank's name only, without \"A/c. <Applicant's Name>\"", "Choosing an account whose balance you cannot keep, and then paying charges"],
        hi: ["न्यूनतम बैलेंस की रकम खाली रहते हुए हस्ताक्षर कर देना", "चेक सिर्फ़ बैंक के नाम पर लिखना, \"A/c. <आवेदक का नाम>\" के बिना", "ऐसा खाता चुनना जिसका बैलेंस आप नहीं रख पाएँ, और फिर चार्ज भरना"]
      }
    },
    {
      label: { en: "(M) Nomination (DA1)", hi: "(M) नामांकन / नॉमिनी (DA1)" },
      quick: { en: "Tick Yes and fill one nominee, or tick No", hi: "Yes टिक करके एक नॉमिनी भरें, या No टिक करें" },
      meaning: {
        en: "A nominee is the person to whom the bank returns the money in this account if you die. You tick \"Yes, I/We wish to nominate\" or \"No, I do not wish to nominate\".",
        hi: "नॉमिनी वह व्यक्ति है जिसे आपकी मृत्यु होने पर बैंक इस खाते का पैसा लौटाएगा। आप \"Yes, I/We wish to nominate\" या \"No, I do not wish to nominate\" पर टिक करते हैं।"
      },
      write: {
        en: "If Yes, fill the nominee's name, relationship, address, date of birth and contact. This form has space for one nominee; it says to fill a separate nomination form for multiple nominees. If the nominee is a minor, appoint an adult (appointee) to receive the money and write their date of birth. You can also tick to display the nominee name on your passbook and statements.",
        hi: "Yes चुनें तो नॉमिनी का नाम, रिश्ता, पता, जन्म तिथि और संपर्क भरें। इस फॉर्म में एक नॉमिनी की जगह है; एक से ज़्यादा नॉमिनी के लिए अलग नामांकन फॉर्म भरने को कहा गया है। नॉमिनी नाबालिग हो, तो किसी बालिग (अपॉइंटी) को पैसा लेने के लिए चुनें और उसकी जन्म तिथि लिखें। आप पासबुक और स्टेटमेंट पर नॉमिनी का नाम दिखाने का खाना भी टिक कर सकते हैं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking neither Yes nor No", "Naming a minor nominee without filling the appointee details", "Writing two nominees here instead of using a separate form"],
        hi: ["Yes या No में से किसी पर टिक न करना", "नाबालिग नॉमिनी देकर अपॉइंटी की जानकारी न भरना", "अलग फॉर्म की जगह यहीं दो नॉमिनी लिख देना"]
      }
    },
    {
      label: { en: "Photograph and signature", hi: "फ़ोटो और हस्ताक्षर" },
      quick: { en: "Paste latest photo; sign across it after filling everything", hi: "हाल की फ़ोटो चिपकाएँ; सब भरने के बाद फ़ोटो के आर-पार हस्ताक्षर करें" },
      meaning: {
        en: "Paste your latest passport-size photo on page 4 and sign the form in the places marked \"1st Applicant Signature\". For a minor, the guardian also signs.",
        hi: "पेज 4 पर अपनी हाल की पासपोर्ट साइज़ फ़ोटो चिपकाएँ और \"1st Applicant Signature\" वाली जगहों पर हस्ताक्षर करें। नाबालिग के खाते में अभिभावक भी हस्ताक्षर करते हैं।"
      },
      write: {
        en: "The form says \"Photo to be signed across\": sign partly on the photo and partly on the form. Sign only after every relevant section is filled. You also confirm you signed in the presence of a named bank officer. If you give a thumb impression, it must be attested by 2 witnesses (their details go in the nomination section). The form does not state an ink colour; ask at the branch.",
        hi: "फॉर्म पर लिखा है \"Photo to be signed across\": हस्ताक्षर आधा फ़ोटो पर और आधा फॉर्म पर करें। सारे ज़रूरी हिस्से भरने के बाद ही हस्ताक्षर करें। आप यह भी मानते हैं कि आपने बैंक अधिकारी (जिनका नाम लिखा है) के सामने हस्ताक्षर किए। अगर अंगूठा लगाते हैं, तो 2 गवाहों का सत्यापन ज़रूरी है (उनकी जानकारी नॉमिनी वाले हिस्से में)। स्याही का रंग फॉर्म में नहीं लिखा; शाखा में पूछें।"
      },
      documents: { en: ["Latest passport-size photo"], hi: ["हाल की पासपोर्ट साइज़ फ़ोटो"] },
      mistakes: {
        en: ["Signing a form that still has blank sections", "Not signing across the photo", "Using an old photo"],
        hi: ["ऐसे फॉर्म पर हस्ताक्षर करना जिसमें अभी खाली हिस्से हैं", "फ़ोटो के आर-पार हस्ताक्षर न करना", "पुरानी फ़ोटो लगाना"]
      }
    }
  ]
});
