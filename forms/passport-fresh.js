// Checked against the official "Instructions for Filling of Passport Application Form and Supplementary Form"
// (Instruction Booklet V3.0, 21 pages) on passportindia.gov.in. The Passport Seva site switches from
// booklet V2.9 to V3.0 from 1 July 2026; V2.9 was also read to see what changed (mainly the fee list).
// Every statement below comes from the booklet. Column numbers are the booklet's column numbers.
// If the booklet does not answer something, the guide says "ask at the Passport Seva Kendra" instead of guessing.

window.FORMS.push({
  id: "passport-fresh",
  verified: true,
  source: {
    title: "Passport Seva: Instructions for Filling of Passport Application Form and Supplementary Form (Instruction Booklet V3.0, in use from 1 July 2026)",
    url: "https://www.passportindia.gov.in/AppOnlineProject/pdf/ApplicationformInstructionBooklet-V3.0.pdf"
  },
  lastChecked: "2026-10-30",

  category: { en: "Government", hi: "सरकारी" },
  name: { en: "Fresh Passport Application (Adult, Normal)", hi: "नया पासपोर्ट आवेदन (वयस्क, सामान्य)" },
  about: {
    en: "The Government of India form for your first passport. It has two parts: the Passport Application Form and a Supplementary Form (fill the Supplementary Form only where it applies to you). What you write is printed in your passport, so check every spelling. On the printed form: use CAPITAL letters, a black or blue ball point pen, and put a cross (X) in boxes, not a tick. Never write \"NA\" — leave the box blank. Giving false information is an offence under Section 12 of the Passports Act, 1967.",
    hi: "यह भारत सरकार का पहला पासपोर्ट बनवाने का फॉर्म है। इसके दो हिस्से हैं: पासपोर्ट आवेदन फॉर्म और पूरक (Supplementary) फॉर्म। पूरक फॉर्म सिर्फ़ वहीं भरें जहाँ वह आप पर लागू हो। आप जो लिखेंगे वही पासपोर्ट पर छपेगा, इसलिए हर स्पेलिंग ध्यान से जाँचें। छपे हुए फॉर्म पर: कैपिटल अक्षरों में लिखें, काले या नीले बॉल पेन का इस्तेमाल करें, और खाने में टिक नहीं, क्रॉस (X) लगाएँ। \"NA\" कभी न लिखें, खाना खाली छोड़ दें। गलत जानकारी देना पासपोर्ट अधिनियम, 1967 की धारा 12 के तहत अपराध है।"
  },

  fields: [
    {
      label: { en: "Service required: Applying for / Type of application (Column 1.1, 1.4)", hi: "कौन-सी सेवा चाहिए: आवेदन किसके लिए / आवेदन का प्रकार (खाना 1.1, 1.4)" },
      meaning: {
        en: "Column 1.1 asks if this is a fresh passport or a re-issue. Column 1.4 asks if you want Normal or Tatkaal (urgent) processing.",
        hi: "खाना 1.1 पूछता है कि यह नया पासपोर्ट है या दोबारा जारी (re-issue)। खाना 1.4 पूछता है कि आपको सामान्य (Normal) चाहिए या तत्काल (Tatkaal)।"
      },
      write: {
        en: "Cross \"Fresh Passport\" if you have never held a passport. Cross \"Normal\" unless you need it urgently. The booklet says Tatkaal needs no proof of urgency, but its fee is higher and police verification is then done after the passport is issued. Some categories cannot apply under Tatkaal.",
        hi: "अगर आपके पास पहले कभी पासपोर्ट नहीं था, तो \"Fresh Passport\" पर क्रॉस लगाएँ। जल्दी न हो तो \"Normal\" पर क्रॉस लगाएँ। बुकलेट के अनुसार तत्काल के लिए जल्दी का कोई सबूत नहीं चाहिए, पर उसकी फ़ीस ज़्यादा है और पुलिस जाँच पासपोर्ट जारी होने के बाद होती है। कुछ श्रेणियों के लोग तत्काल में आवेदन नहीं कर सकते।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Crossing \"Re-issue\" when you never had a passport", "Choosing Tatkaal without checking whether your category is allowed"],
        hi: ["पहले कभी पासपोर्ट न होने पर भी \"Re-issue\" पर क्रॉस लगाना", "बिना जाँचे तत्काल चुन लेना कि आपकी श्रेणी को इसकी अनुमति है या नहीं"]
      }
    },
    {
      label: { en: "Type of passport booklet and validity (Column 1.5, 1.6)", hi: "पासपोर्ट बुकलेट का प्रकार और वैधता (खाना 1.5, 1.6)" },
      meaning: {
        en: "Column 1.5: how many pages you want in the passport, 36 or 60. More pages leave more room for visas and stamps. Column 1.6, \"Validity Required\", is explained in the booklet only for minors.",
        hi: "खाना 1.5: पासपोर्ट में कितने पेज चाहिए, 36 या 60। ज़्यादा पेज में वीज़ा और मुहरों के लिए ज़्यादा जगह होती है। खाना 1.6 \"Validity Required\" के बारे में बुकलेट सिर्फ़ नाबालिगों के लिए बताती है।"
      },
      write: {
        en: "Cross 36 or 60 pages. The fee list in booklet V3.0 gives, for a fresh 10-year passport: 36 pages Rs. 2,500, 60 pages Rs. 3,500. Tatkaal adds Rs. 2,500 on top. For adults the booklet gives no separate instruction on Column 1.6; if you are unsure what to mark, ask at the Passport Seva Kendra. Check the current fee on passportindia.gov.in before paying.",
        hi: "36 या 60 पेज पर क्रॉस लगाएँ। बुकलेट V3.0 की फ़ीस सूची में 10 साल वाले नए पासपोर्ट की फ़ीस: 36 पेज ₹2,500, 60 पेज ₹3,500। तत्काल के लिए ₹2,500 और जुड़ते हैं। वयस्कों के लिए खाना 1.6 पर बुकलेट में अलग से कुछ नहीं लिखा है; क्या भरें, यह पक्का न हो तो पासपोर्ट सेवा केंद्र में पूछें। पैसे देने से पहले passportindia.gov.in पर मौजूदा फ़ीस ज़रूर देख लें।"
      },
      changed: {
        en: "Changed recently: the booklet in use until 30 June 2026 (V2.9) listed Rs. 1,500 for 36 pages, Rs. 2,000 for 60 pages and Rs. 2,000 extra for Tatkaal. The current booklet (V3.0, from 1 July 2026) lists Rs. 2,500, Rs. 3,500 and Rs. 2,500. Older websites and videos may still show the old fees.",
        hi: "हाल में बदला: 30 जून 2026 तक चलने वाली बुकलेट (V2.9) में 36 पेज के ₹1,500, 60 पेज के ₹2,000 और तत्काल के ₹2,000 अलग से लिखे थे। मौजूदा बुकलेट (V3.0, 1 जुलाई 2026 से) में ये ₹2,500, ₹3,500 और ₹2,500 हैं। पुरानी वेबसाइटों और वीडियो में अभी भी पुरानी फ़ीस दिख सकती है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Going by old fee figures from before July 2026"],
        hi: ["जुलाई 2026 से पहले की पुरानी फ़ीस मान लेना"]
      }
    },
    {
      label: { en: "Applicant's Given Name and Surname (Column 2.1)", hi: "आवेदक का दिया गया नाम (Given Name) और उपनाम (Surname) (खाना 2.1)" },
      meaning: {
        en: "Surname is your family name (for example JAIN). Given Name is the rest of your name (for example PIYUSH KUMAR). Your name will appear in the passport exactly as you write it here.",
        hi: "Surname यानी उपनाम या परिवार का नाम (जैसे JAIN)। Given Name यानी आपके नाम का बाकी हिस्सा (जैसे PIYUSH KUMAR)। यहाँ जैसा लिखेंगे, पासपोर्ट पर बिल्कुल वैसा ही छपेगा।"
      },
      write: {
        en: "Write full words, no initials: \"P.K.JAIN\" or \"PIYUSH K JAIN\" is wrong. Do not add titles like Major or Doctor. A surname can have two words, like DAS GUPTA. If you do not use a surname, leave Surname blank and write your full name under Given Name. The booklet warns that some embassies (UAE, European countries etc.) insist on a surname for a visa, so if you use one, you must write it.",
        hi: "पूरे शब्द लिखें, शॉर्ट फ़ॉर्म नहीं: \"P.K.JAIN\" या \"PIYUSH K JAIN\" गलत है। मेजर, डॉक्टर जैसी उपाधि न लिखें। उपनाम दो शब्दों का भी हो सकता है, जैसे DAS GUPTA। अगर आप उपनाम नहीं लगाते, तो Surname खाली छोड़ें और पूरा नाम Given Name में लिखें। बुकलेट चेतावनी देती है कि कुछ दूतावास (यूएई, यूरोपीय देश आदि) वीज़ा के लिए उपनाम माँगते हैं, इसलिए अगर आप उपनाम लगाते हैं, तो उसे ज़रूर लिखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing initials instead of the full name", "Putting the family name in Given Name and the first name in Surname", "Leaving Surname blank even though you use one"],
        hi: ["पूरे नाम की जगह शुरुआती अक्षर (initials) लिखना", "परिवार का नाम Given Name में और पहला नाम Surname में लिख देना", "उपनाम इस्तेमाल करते हुए भी Surname खाली छोड़ना"]
      }
    },
    {
      label: { en: "Known by other names? / Ever changed your name? (Column 2.2, 2.3)", hi: "क्या आप किसी और नाम से भी जाने जाते हैं? / क्या कभी नाम बदला है? (खाना 2.2, 2.3)" },
      meaning: {
        en: "2.2 is about an alias, a second name people know you by. The booklet's example: Rajesh Bansal who is also known as Raja. 2.3 is about a name you used earlier and changed, even slightly.",
        hi: "2.2 उपनाम या दूसरे नाम (alias) के बारे में है, जिससे लोग आपको जानते हैं। बुकलेट का उदाहरण: राजेश बंसल, जिन्हें राजा भी कहा जाता है। 2.3 उस नाम के बारे में है जो पहले था और बदला गया, चाहे थोड़ा-सा ही।"
      },
      write: {
        en: "If Yes, cross Yes and write the details in the Supplementary Form (Column 1 for aliases, Column 2 for previous names). The booklet says even a small change counts, like Harvinder to Harjinder or Ritesh to Reetesh, and so does a woman changing her name or surname after marriage. If neither applies, cross No.",
        hi: "अगर हाँ, तो Yes पर क्रॉस लगाएँ और जानकारी पूरक फॉर्म में भरें (दूसरे नाम के लिए खाना 1, पुराने नाम के लिए खाना 2)। बुकलेट के अनुसार छोटा-सा बदलाव भी गिना जाता है, जैसे हरविंदर से हरजिंदर या रितेश से रीतेश, और शादी के बाद महिला का नाम या उपनाम बदलना भी। अगर दोनों में से कुछ लागू नहीं, तो No पर क्रॉस लगाएँ।"
      },
      documents: {
        en: ["If you changed your name, extra documents are needed (Table 2, Case 12). Ask at the Passport Seva Kendra which ones apply to you."],
        hi: ["अगर नाम बदला है, तो अतिरिक्त दस्तावेज़ चाहिए (तालिका 2, केस 12)। कौन-से आप पर लागू हैं, यह पासपोर्ट सेवा केंद्र में पूछें।"]
      },
      mistakes: {
        en: ["Crossing No when your certificates show a slightly different spelling of your name", "Crossing Yes but leaving the Supplementary Form blank"],
        hi: ["प्रमाणपत्रों में नाम की स्पेलिंग थोड़ी अलग होने पर भी No पर क्रॉस लगाना", "Yes पर क्रॉस लगाकर पूरक फॉर्म खाली छोड़ देना"]
      }
    },
    {
      label: { en: "Date of birth (Column 2.4)", hi: "जन्म तिथि (खाना 2.4)" },
      meaning: { en: "The day you were born. You must attach a proof of date of birth.", hi: "आपके जन्म की तारीख। इसके साथ जन्म तिथि का प्रमाण लगाना ज़रूरी है।" },
      write: {
        en: "Write it as DD-MM-YYYY: day, then month, then full year.",
        hi: "DD-MM-YYYY क्रम में लिखें: पहले दिन, फिर महीना, फिर पूरा साल।"
      },
      documents: {
        en: [
          "Any one of: Birth certificate from the Registrar of Births and Deaths or Municipal Corporation (it should show the child's name, parents' names, date and place of birth, sex, registration number and date)",
          "Transfer / School leaving / Matriculation certificate from the school last attended or a recognised board",
          "Policy bond of a public life insurance company showing your date of birth",
          "Driving licence, Election Photo ID card (Voter ID) or PAN card, only if it shows your complete date of birth"
        ],
        hi: [
          "इनमें से कोई एक: जन्म-मृत्यु रजिस्ट्रार या नगर निगम का जन्म प्रमाणपत्र (इसमें बच्चे का नाम, माता-पिता के नाम, जन्म तिथि और स्थान, लिंग, पंजीकरण संख्या और तारीख होनी चाहिए)",
          "आख़िरी स्कूल या मान्य बोर्ड का ट्रांसफ़र / स्कूल छोड़ने का / मैट्रिक (10वीं) प्रमाणपत्र",
          "सरकारी जीवन बीमा कंपनी का पॉलिसी बॉन्ड, जिसमें जन्म तिथि हो",
          "ड्राइविंग लाइसेंस, वोटर आईडी या पैन कार्ड, पर तभी जब उसमें पूरी जन्म तिथि लिखी हो"
        ]
      },
      mistakes: {
        en: ["Writing the month before the day", "Giving a document that shows only the year of birth"],
        hi: ["दिन से पहले महीना लिखना", "ऐसा दस्तावेज़ देना जिसमें सिर्फ़ जन्म का साल लिखा हो"]
      }
    },
    {
      label: { en: "Place of birth (Column 2.5)", hi: "जन्म स्थान (खाना 2.5)" },
      meaning: { en: "Where you were born. There are separate boxes for village/town/city, district, State/UT and country.", hi: "आप कहाँ पैदा हुए। गाँव/कस्बा/शहर, ज़िला, राज्य/केंद्र शासित प्रदेश और देश के अलग-अलग खाने हैं।" },
      write: {
        en: "Born in India: write the village, town or city, then the district, then the State or UT. Born outside India: write only the country and leave the other boxes blank. Born before 15/08/1947 in a place now in Pakistan or Bangladesh: write the place and \"Undivided India\" as the country, and leave District and State/UT blank.",
        hi: "भारत में जन्म: गाँव, कस्बा या शहर, फिर ज़िला, फिर राज्य या केंद्र शासित प्रदेश लिखें। भारत के बाहर जन्म: सिर्फ़ देश लिखें, बाकी खाने खाली छोड़ें। 15/08/1947 से पहले ऐसी जगह जन्म जो अब पाकिस्तान या बांग्लादेश में है: जगह का नाम लिखें, देश में \"Undivided India\" लिखें, और ज़िला व राज्य खाली छोड़ें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing a place that does not match your birth certificate"],
        hi: ["ऐसा जन्म स्थान लिखना जो जन्म प्रमाणपत्र से मेल न खाए"]
      }
    },
    {
      label: { en: "Citizenship, PAN, Voter ID, Aadhaar, visible mark (Column 2.8–2.10, 2.16, 2.17)", hi: "नागरिकता, पैन, वोटर आईडी, आधार, पहचान चिह्न (खाना 2.8–2.10, 2.16, 2.17)" },
      meaning: {
        en: "2.8 asks how you are an Indian citizen: by birth, by descent (born to Indian parents outside India), or by registration/naturalisation (granted by the Ministry of Home Affairs). 2.16 is a mark on your body that can be seen, such as a mole or birth mark.",
        hi: "2.8 पूछता है कि आप भारत के नागरिक कैसे हैं: जन्म से, वंश से (भारत के बाहर भारतीय माता-पिता से जन्म), या पंजीकरण/देशीयकरण से (गृह मंत्रालय से मिली नागरिकता)। 2.16 शरीर पर दिखने वाला कोई निशान है, जैसे तिल या जन्म का निशान।"
      },
      write: {
        en: "Most people born in India cross \"Birth\". Write PAN, Voter ID and Aadhaar only if you have them. The booklet says giving Aadhaar speeds up processing. For a visible mark, write where it is (for example, a mole on the forehead); if you have none, leave it blank.",
        hi: "भारत में पैदा हुए ज़्यादातर लोग \"Birth\" पर क्रॉस लगाते हैं। पैन, वोटर आईडी और आधार तभी लिखें जब आपके पास हों। बुकलेट के अनुसार आधार देने से काम जल्दी होता है। पहचान चिह्न में लिखें कि निशान कहाँ है (जैसे माथे पर तिल); कोई निशान न हो तो खाली छोड़ें।"
      },
      documents: {
        en: ["Citizens by descent or registration need extra documents (Table 2, Cases 2 and 3). Ask at the Passport Seva Kendra."],
        hi: ["वंश या पंजीकरण से नागरिक बने लोगों को अतिरिक्त दस्तावेज़ चाहिए (तालिका 2, केस 2 और 3)। पासपोर्ट सेवा केंद्र में पूछें।"]
      },
      mistakes: {
        en: ["Writing \"NA\" or \"NIL\" in empty boxes (leave them blank)"],
        hi: ["खाली खानों में \"NA\" या \"NIL\" लिखना (उन्हें खाली छोड़ें)"]
      }
    },
    {
      label: { en: "Employment type (Column 2.11–2.13)", hi: "रोज़गार का प्रकार (खाना 2.11–2.13)" },
      meaning: {
        en: "What kind of work you do. 2.12 asks for your organisation's name only if you work in Government, a Statutory Body or a PSU. 2.13 asks whether your spouse is a government servant (for minors, a parent).",
        hi: "आप किस तरह का काम करते हैं। 2.12 में संस्था का नाम तभी लिखना है जब आप सरकार, किसी वैधानिक संस्था (Statutory Body) या सार्वजनिक उपक्रम (PSU) में काम करते हों। 2.13 पूछता है कि क्या आपके पति/पत्नी सरकारी कर्मचारी हैं (नाबालिग के लिए माता या पिता)।"
      },
      write: {
        en: "Cross the option on the form that fits you. The booklet does not list the options or say which one a student should pick; if none fits, ask at the Passport Seva Kendra. Government, PSU and Statutory Body employees have extra documents and Annexures (see 'Annexures').",
        hi: "फॉर्म पर जो विकल्प आप पर लागू हो, उस पर क्रॉस लगाएँ। बुकलेट में विकल्पों की सूची नहीं है और यह भी नहीं बताया कि छात्र कौन-सा चुनें; कोई विकल्प फ़िट न हो तो पासपोर्ट सेवा केंद्र में पूछें। सरकारी, PSU या वैधानिक संस्था के कर्मचारियों के लिए अतिरिक्त दस्तावेज़ और परिशिष्ट (Annexure) हैं ('परिशिष्ट' देखें)।"
      },
      documents: { en: [], hi: [] },
      mistakes: { en: [], hi: [] }
    },
    {
      label: { en: "Educational qualification and Non-ECR (Column 2.14, 2.15)", hi: "शैक्षिक योग्यता और Non-ECR (खाना 2.14, 2.15)" },
      meaning: {
        en: "ECR means \"Emigration Check Required\". If your passport is ECR, you need clearance from the Protector of Emigrants before going to work in 18 listed countries, including UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain and Malaysia. Non-ECR is not printed on the passport; ECR is.",
        hi: "ECR यानी \"इमिग्रेशन जाँच ज़रूरी\"। अगर पासपोर्ट ECR है, तो 18 तय देशों (जैसे यूएई, सऊदी अरब, क़तर, ओमान, कुवैत, बहरीन, मलेशिया) में नौकरी के लिए जाने से पहले प्रोटेक्टर ऑफ़ इमिग्रेंट्स से मंज़ूरी लेनी होती है। पासपोर्ट पर ECR छपता है, Non-ECR नहीं छपता।"
      },
      write: {
        en: "In 2.14, cross your highest qualification. In 2.15, cross Yes if you fall in a Non-ECR category and can prove it. The categories include: matriculation (10th) pass and above; age above 50; income-tax payers (not NIL returns); professional degree holders; recognised diploma holders; and others listed in the booklet. If none applies, cross No.",
        hi: "2.14 में अपनी सबसे ऊँची पढ़ाई पर क्रॉस लगाएँ। 2.15 में Yes पर तभी क्रॉस लगाएँ जब आप किसी Non-ECR श्रेणी में आते हों और उसका सबूत दे सकें। श्रेणियों में शामिल हैं: मैट्रिक (10वीं) पास या उससे ज़्यादा; 50 साल से ज़्यादा उम्र; आयकर देने वाले (NIL रिटर्न नहीं); प्रोफ़ेशनल डिग्री वाले; मान्य डिप्लोमा वाले; और बुकलेट में दी गई कुछ और। कोई लागू न हो तो No पर क्रॉस लगाएँ।"
      },
      documents: {
        en: ["Proof of your Non-ECR category (Document No. 3), for example proof that you passed matriculation (10th) or higher"],
        hi: ["अपनी Non-ECR श्रेणी का सबूत (दस्तावेज़ संख्या 3), जैसे मैट्रिक (10वीं) या उससे ऊपर पास होने का सबूत"]
      },
      mistakes: {
        en: ["Crossing Yes without bringing proof (then ECR may be stamped)", "Crossing No even though you have passed 10th"],
        hi: ["सबूत लाए बिना Yes पर क्रॉस लगाना (तब ECR लग सकता है)", "10वीं पास होते हुए भी No पर क्रॉस लगाना"]
      }
    },
    {
      label: { en: "Present residential address (Column 4)", hi: "वर्तमान निवास का पता (खाना 4)" },
      meaning: {
        en: "The address where you live now. The form also asks whether your permanent address is the same. If it is different, fill Column 3 of the Supplementary Form.",
        hi: "वह पता जहाँ आप अभी रहते हैं। फॉर्म यह भी पूछता है कि क्या स्थायी पता यही है। अगर अलग है, तो पूरक फॉर्म का खाना 3 भरें।"
      },
      write: {
        en: "Write your real present address. The booklet warns of a heavy penalty for false or hidden address details. You need proof only for the present address, but you must mention every place you stayed during the previous one year. Students living away from their parents have extra documents (Table 2, Case 19).",
        hi: "अपना असली मौजूदा पता लिखें। बुकलेट चेतावनी देती है कि पते की गलत या छिपाई गई जानकारी पर भारी जुर्माना है। सबूत सिर्फ़ मौजूदा पते का चाहिए, पर पिछले एक साल में जहाँ-जहाँ रहे, वे सब जगहें बतानी होंगी। माता-पिता से दूर रहने वाले छात्रों के लिए अतिरिक्त दस्तावेज़ हैं (तालिका 2, केस 19)।"
      },
      documents: {
        en: [
          "Any one proof of present address: Water bill; Telephone bill (landline or postpaid mobile); Electricity bill; Gas connection bill; Income Tax Assessment Order; Election Commission Photo ID card; Aadhaar letter/card or e-Aadhaar; Rent agreement; Photo passbook of a running bank account (scheduled public or private Indian bank, or Regional Rural Bank); Spouse's passport copy (if the address matches); Employer certificate on letterhead with seal (public limited companies only)",
          "Students living away from parents: Student ID card from a Government-recognised institution (full-time course) and a Bonafide letter from the college (UGC-recognised, on official letterhead)"
        ],
        hi: [
          "मौजूदा पते का कोई एक सबूत: पानी का बिल; टेलीफ़ोन बिल (लैंडलाइन या पोस्टपेड मोबाइल); बिजली का बिल; गैस कनेक्शन का बिल; आयकर निर्धारण आदेश; चुनाव आयोग का फ़ोटो पहचान पत्र; आधार पत्र/कार्ड या ई-आधार; किराया अनुबंध (रेंट एग्रीमेंट); चालू बैंक खाते की फ़ोटो वाली पासबुक (सूचीबद्ध सरकारी या निजी भारतीय बैंक, या क्षेत्रीय ग्रामीण बैंक); पति/पत्नी के पासपोर्ट की कॉपी (अगर पता मेल खाता हो); नियोक्ता का प्रमाणपत्र, लेटरहेड और मुहर के साथ (सिर्फ़ पब्लिक लिमिटेड कंपनियाँ)",
          "माता-पिता से दूर रहने वाले छात्र: सरकार से मान्य संस्था का छात्र पहचान पत्र (फ़ुल-टाइम कोर्स) और कॉलेज (UGC से मान्य) के आधिकारिक लेटरहेड पर बोनाफ़ाइड पत्र"
        ]
      },
      mistakes: {
        en: ["Writing your home-town address when you actually live somewhere else now", "Not mentioning other places you lived in the past one year", "Giving an employer letter from a company that is not a public limited company"],
        hi: ["अभी कहीं और रहते हुए भी गाँव/घर का पता लिख देना", "पिछले एक साल में रहे दूसरे पते न बताना", "ऐसी कंपनी का पत्र देना जो पब्लिक लिमिटेड नहीं है"]
      }
    },
    {
      label: { en: "Emergency contact details (Column 5)", hi: "आपातकालीन संपर्क (खाना 5)" },
      meaning: {
        en: "Details of a person who can be contacted in an emergency.",
        hi: "ऐसे व्यक्ति की जानकारी जिससे किसी आपात स्थिति में संपर्क किया जा सके।"
      },
      write: {
        en: "The booklet only calls this column \"Self Explanatory\" and gives no rules about who you may name. If you are unsure, ask at the Passport Seva Kendra or check passportindia.gov.in.",
        hi: "बुकलेट में इस खाने को सिर्फ़ \"Self Explanatory\" (अपने आप समझ आने वाला) कहा गया है और किसका नाम दें, इसका कोई नियम नहीं बताया गया। शक हो तो पासपोर्ट सेवा केंद्र में पूछें या passportindia.gov.in देखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: { en: [], hi: [] }
    },
    {
      label: { en: "Passport details and other details (Column 6, 7)", hi: "पासपोर्ट से जुड़ी और अन्य जानकारी (खाना 6, 7)" },
      meaning: {
        en: "Column 6 asks whether you have ever held an Identity Certificate, or ever applied for a passport that was not issued. Column 7 asks questions about you, including criminal cases.",
        hi: "खाना 6 पूछता है कि क्या आपके पास कभी पहचान प्रमाणपत्र (Identity Certificate) रहा है, या क्या आपने कभी पासपोर्ट के लिए आवेदन किया था जो जारी नहीं हुआ। खाना 7 में आपके बारे में कुछ सवाल हैं, जिनमें आपराधिक मामलों के सवाल भी हैं।"
      },
      write: {
        en: "Answer every question truthfully; hiding information is an offence. If a criminal case is pending against you in any court, you can still apply, but you must attach the court's written permission to travel abroad. The booklet says a short validity passport, normally for one year, is then issued.",
        hi: "हर सवाल का सच्चा जवाब दें; जानकारी छिपाना अपराध है। अगर किसी अदालत में आप पर आपराधिक मामला चल रहा है, तब भी आप आवेदन कर सकते हैं, पर विदेश जाने की अदालत की लिखित अनुमति साथ लगानी होगी। बुकलेट के अनुसार तब आमतौर पर एक साल का कम अवधि वाला पासपोर्ट मिलता है।"
      },
      documents: {
        en: ["If a criminal case is pending: written permission from the court to travel abroad"],
        hi: ["अगर आपराधिक मामला चल रहा है: विदेश जाने के लिए अदालत की लिखित अनुमति"]
      },
      mistakes: {
        en: ["Answering No to hide an earlier application or a pending case"],
        hi: ["पहले के आवेदन या चल रहे मामले को छिपाने के लिए No लिखना"]
      }
    },
    {
      label: { en: "Enclosures, proof documents and Annexures (Column 9)", hi: "संलग्न दस्तावेज़, सबूत और परिशिष्ट (खाना 9)" },
      meaning: {
        en: "The list of documents you attach. An Annexure is a fixed-format certificate or declaration printed at the end of the booklet (Annexure A to J). An ordinary adult who is a citizen by birth needs none of them.",
        hi: "आप जो दस्तावेज़ लगा रहे हैं उनकी सूची। परिशिष्ट (Annexure) एक तय फ़ॉर्मेट का प्रमाणपत्र या घोषणा है, जो बुकलेट के आख़िर में छपी है (Annexure A से J)। जन्म से नागरिक सामान्य वयस्क को इनमें से किसी की ज़रूरत नहीं है।"
      },
      write: {
        en: "Attach self-attested photocopies (signed by you) and list them in Column 9; keep your signature from covering important details. Bring the originals too; they are returned after checking. For an ordinary adult (Table 2, Case I-A-1), Normal: proof of address, proof of date of birth, Non-ECR proof if you crossed Yes, and if the Passport Office needs post-police verification, any three documents from Document No. 41. Annexures A, G and H are for Government/PSU/Statutory Body employees; C, D and I are about minors; J is a joint photo declaration by husband and wife.",
        hi: "दस्तावेज़ों की स्व-सत्यापित (ख़ुद के हस्ताक्षर वाली) फ़ोटोकॉपी लगाएँ और उनकी सूची खाना 9 में लिखें; ध्यान रखें कि हस्ताक्षर ज़रूरी जानकारी पर न आए। असली (ओरिजिनल) दस्तावेज़ भी साथ लाएँ; जाँच के बाद लौटा दिए जाते हैं। सामान्य वयस्क (तालिका 2, केस I-A-1), Normal के लिए: पते का सबूत, जन्म तिथि का सबूत, Yes चुना हो तो Non-ECR का सबूत, और अगर पासपोर्ट कार्यालय को बाद में पुलिस जाँच करनी हो तो दस्तावेज़ संख्या 41 की सूची में से कोई तीन। Annexure A, G और H सरकारी/PSU/वैधानिक संस्था के कर्मचारियों के लिए हैं; C, D और I नाबालिगों के लिए; J पति-पत्नी की संयुक्त फ़ोटो घोषणा है।"
      },
      documents: {
        en: ["Document No. 41 (for 18 and above, any three): Aadhaar / e-Aadhaar; Voter ID (EPIC); Service photo ID from Government, PSU, local body or public limited company; SC/ST/OBC certificate; Arms licence; Pension documents; PAN; Bank, Kisan or Post Office passbook; Student photo ID card; Driving licence (valid, of the state where you apply); Birth certificate; Ration card"],
        hi: ["दस्तावेज़ संख्या 41 (18 साल या उससे ऊपर, कोई तीन): आधार / ई-आधार; वोटर आईडी (EPIC); सरकार, PSU, स्थानीय निकाय या पब्लिक लिमिटेड कंपनी का सर्विस फ़ोटो पहचान पत्र; SC/ST/OBC प्रमाणपत्र; शस्त्र लाइसेंस; पेंशन के दस्तावेज़; पैन; बैंक, किसान या डाकघर पासबुक; छात्र फ़ोटो पहचान पत्र; ड्राइविंग लाइसेंस (वैध, उसी राज्य का जहाँ आवेदन कर रहे हैं); जन्म प्रमाणपत्र; राशन कार्ड"]
      },
      mistakes: {
        en: ["Bringing only photocopies and no originals", "Forgetting to self-attest the photocopies", "Filling an Annexure that is not meant for your case"],
        hi: ["सिर्फ़ फ़ोटोकॉपी लाना, ओरिजिनल नहीं", "फ़ोटोकॉपी पर अपने हस्ताक्षर करना भूल जाना", "ऐसा Annexure भर देना जो आपके मामले के लिए है ही नहीं"]
      }
    },
    {
      label: { en: "Photograph and signature / thumb impression", hi: "फ़ोटो और हस्ताक्षर / अंगूठे का निशान" },
      meaning: {
        en: "Your signature or thumb impression is scanned and printed in the passport. A photo is NOT needed if you submit at a Passport Seva Kendra (PSK) or Post Office Passport Seva Kendra (POPSK).",
        hi: "आपके हस्ताक्षर या अंगूठे का निशान स्कैन होकर पासपोर्ट पर छपता है। अगर आप पासपोर्ट सेवा केंद्र (PSK) या डाकघर पासपोर्ट सेवा केंद्र (POPSK) में आवेदन जमा करते हैं, तो फ़ोटो नहीं चाहिए।"
      },
      write: {
        en: "Sign with a blue or black ball point pen, fully inside the box without touching its lines. If you cannot sign, put your left thumb impression (right thumb only if the left is unfit, and write that below the box). If you submit at another centre (DPC, Speed Post Centre or CSC), paste ONE recent colour photo, 4.5 cm x 3.5 cm, plain white background, dark clothes, both ears visible.",
        hi: "नीले या काले बॉल पेन से हस्ताक्षर करें, पूरी तरह खाने के अंदर, उसकी लाइनों को छुए बिना। हस्ताक्षर नहीं कर सकते तो बाएँ हाथ के अंगूठे का निशान लगाएँ (बायाँ अंगूठा ठीक न हो तभी दायाँ, और यह खाने के नीचे लिख दें)। अगर किसी और केंद्र (DPC, स्पीड पोस्ट केंद्र या CSC) पर जमा करते हैं, तो हाल की एक रंगीन फ़ोटो चिपकाएँ: 4.5 सेमी x 3.5 सेमी, सादी सफ़ेद पृष्ठभूमि, गहरे रंग के कपड़े, दोनों कान दिखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Signature touching or crossing the box lines", "Signing on the photo", "Black-and-white, computer-printed or group-cut photo", "Dark or coloured glasses, or uniform, in the photo"],
        hi: ["हस्ताक्षर का खाने की लाइन को छूना या बाहर जाना", "फ़ोटो पर हस्ताक्षर करना", "ब्लैक-एंड-व्हाइट, कंप्यूटर प्रिंट या ग्रुप फ़ोटो से काटी गई फ़ोटो", "फ़ोटो में काला या रंगीन चश्मा, या वर्दी"]
      }
    }
  ]
});
