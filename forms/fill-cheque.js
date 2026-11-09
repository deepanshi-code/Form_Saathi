// Checked against these official Reserve Bank of India (RBI) documents (all read on 9 November 2026):
//  - "FAQs on Cheque Clearing" (RBI, PDF dated 07-01-2026),
//    https://www.rbi.org.in/commonman/Upload/English/FAQs/PDFs/CHEQUE07012026.pdf
//  - Circular RBI/2009-10/503, DPSS.CO.CHD.No.2806/04.07.05/2009-10 of 22 June 2010, "Standardisation and
//    Enhancement of Security Features in Cheque Forms" (prohibiting alterations / corrections on CTS cheques
//    from 1 December 2010), https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/CACA220610.pdf
//  - Circular RBI/2009-10/323, DPSS.CO.CHD.No.1832/04.07.05/2009-10 of 22 February 2010 (CTS-2010 standard),
//    circular text only as shown on https://www.rbi.org.in/scripts/BS_CircularIndexDisplay.aspx?Id=5509
//    (the annexed specification with the specimen cheque, rbidocs.rbi.org.in/rdocs/content/PDFs/SCFR220210.pdf,
//    could not be opened: the site shows a human-verification check to automated downloads)
//  - Circular RBI/2020-21/41, DPSS.CO.RPPD.No.309/04.07.005/2020-21 of 25 September 2020, "Positive Pay System
//    for Cheque Truncation System", https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=11969
//  - Circular RBI/2011-12/251, DBOD.AML BC.No.47/14.01.001/2011-12 of 4 November 2011, "Payment of
//    Cheques/Drafts/Pay Orders/Banker's Cheques" (validity three months from 1 April 2012),
//    https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=6805&Mode=0
//  - Master Direction - Know Your Customer (KYC) Direction, 2016, updated 14 August 2025, paragraphs 58 and 60,
//    https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11566
//  - Reserve Bank of India (Commercial Banks - Responsible Business Conduct) Directions, 2025,
//    RBI/2025-26/170, updated as on 1 October 2026, paragraphs 136, 138, 139-140, 142 and 165,
//    https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13140
//  - Circular RBI/2005-06/282, DBOD.BP.BC No.56/21.01.001/2005-06 of 23 January 2006, "Collection of account
//    payee cheque - Prohibition on crediting proceeds to third party account",
//    https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/68376.pdf
//  - Circular RBI/2025-26/73, CO.DPSS.RLPD.No.S536/04-07-001/2025-2026 of 13 August 2025, "Introduction of
//    Continuous Clearing and Settlement on Realisation in Cheque Truncation System",
//    https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12891
//  - Master Circular on Customer Service in Banks, RBI/2014-15/72 of 1 July 2014, para 3 (vii) on 'self' or
//    'bearer' cheques, https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/72MC010714CS.pdf
//  - "Payment Instruments in India", Chapter III, section 3.3 (RBI publication, 12 December 1998),
//    https://www.rbi.org.in/scripts/PublicationsView.aspx?id=156
// Every statement below comes from one of those documents. Where they do not answer something (for example
// how exactly to draw the crossing, or how to strike out "or bearer"), the guide says "ask your bank branch"
// instead of guessing. No page image or layout is given because RBI's specimen cheque could not be opened.

window.FORMS.push({
  id: "fill-cheque",
  verified: false,
  source: {
    title: "Reserve Bank of India: FAQs on Cheque Clearing (PDF dated 07-01-2026), with RBI circulars on CTS-2010 cheques, alterations, Positive Pay and cheque validity",
    url: "https://www.rbi.org.in/commonman/Upload/English/FAQs/PDFs/CHEQUE07012026.pdf"
  },
  caution: {
    en: "Every bank prints its own cheque book, so the boxes on your leaf may look a little different. RBI's official specimen of the standard (CTS-2010) cheque could not be opened for this guide, so the exact place of each box is not shown here, and RBI's pages do not explain how to draw the crossing or how to strike out \"or bearer\". Those parts are marked; ask your bank branch if you are unsure.",
    hi: "हर बैंक अपनी चेक बुक ख़ुद छापता है, इसलिए आपके चेक पर खाने थोड़े अलग दिख सकते हैं। इस गाइड के लिए RBI का स्टैंडर्ड (CTS-2010) चेक का आधिकारिक नमूना खुल नहीं पाया, इसलिए हर खाने की सही जगह यहाँ नहीं दिखाई गई है। RBI के पन्नों में यह भी नहीं लिखा कि क्रॉसिंग कैसे बनाएँ या \"or bearer\" कैसे काटें। ये हिस्से अलग से बताए गए हैं; शक हो तो अपनी बैंक शाखा से पूछ लें।"
  },
  lastChecked: "2026-11-09",

  category: { en: "Bank", hi: "बैंक" },
  name: { en: "How to fill a cheque", hi: "चेक कैसे भरें" },
  about: {
    en: "A cheque tells your bank to pay a fixed amount from your account to someone. Today cheques in India are cleared by the Cheque Truncation System (CTS): the bank scans the cheque and sends its picture, not the paper, for payment. Only cheques of the \"CTS-2010\" standard can be cleared this way; they have security features such as special paper, a watermark, the bank's logo in invisible ink and a hidden \"VOID\" pattern. Because the cheque is read from its picture, write clearly, never correct anything, and use a fresh leaf if you make a mistake. You may write a cheque in Hindi, English or your regional language.",
    hi: "चेक से आप अपने बैंक को कहते हैं कि आपके खाते से तय रक़म किसी को दे दी जाए। आजकल भारत में चेक \"चेक ट्रंकेशन सिस्टम\" (CTS) से क्लियर होते हैं: बैंक चेक को स्कैन करके उसकी फ़ोटो भेजता है, काग़ज़ नहीं। इस तरीक़े से सिर्फ़ \"CTS-2010\" स्टैंडर्ड वाले चेक ही क्लियर होते हैं; इनमें ख़ास काग़ज़, वॉटरमार्क, अदृश्य स्याही में बैंक का लोगो और छिपा हुआ \"VOID\" पैटर्न जैसी सुरक्षा होती है। चेक उसकी फ़ोटो से पढ़ा जाता है, इसलिए साफ़ लिखें, कुछ भी काटकर ठीक न करें, और ग़लती हो जाए तो नया चेक लें। चेक हिंदी, अंग्रेज़ी या अपनी क्षेत्रीय भाषा में लिख सकते हैं।"
  },

  fields: [
    {
      label: { en: "Date", hi: "तारीख़ (Date)" },
      quick: { en: "Today's date, or the date the money should be paid", hi: "आज की तारीख़, या जिस दिन से पैसा मिलना चाहिए" },
      meaning: {
        en: "The date of the cheque. A cheque is valid for three months from this date: since 1 April 2012 banks must not pay a cheque that is presented more than three months after its date.",
        hi: "चेक की तारीख़। चेक इस तारीख़ से तीन महीने तक चलता है: 1 अप्रैल 2012 से बैंक ऐसा चेक नहीं चुकाते जो अपनी तारीख़ से तीन महीने के बाद जमा किया जाए।"
      },
      write: {
        en: "Write the date clearly in the date space printed on the leaf. The date is one of the main parts (with payee name, amount and signature) that must show clearly in the scanned picture. RBI says cheques dated in Hindi as per the National Calendar (Saka Samvat) are also accepted if otherwise in order. The only change RBI allows on a CTS cheque is for date validation, if required; for that, ask your bank branch how they want it done.",
        hi: "चेक पर छपी तारीख़ वाली जगह में तारीख़ साफ़ लिखें। तारीख़ उन ज़रूरी हिस्सों में से है (पाने वाले का नाम, रक़म और हस्ताक्षर के साथ) जो स्कैन की फ़ोटो में साफ़ दिखने चाहिए। RBI के अनुसार राष्ट्रीय पंचांग (शक संवत) के हिसाब से हिंदी में लिखी तारीख़ वाले चेक भी, बाक़ी सब ठीक हो तो, माने जाते हैं। CTS चेक पर RBI सिर्फ़ तारीख़ को दोबारा मान्य (date validation) करने के लिए बदलाव की छूट देता है, अगर ज़रूरत हो; इसके लिए अपनी बैंक शाखा से पूछें कि वे कैसे करवाते हैं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Giving a cheque that the receiver cannot deposit within three months of its date", "Overwriting the date instead of asking the bank"],
        hi: ["ऐसा चेक देना जो पाने वाला तारीख़ से तीन महीने के अंदर जमा न कर पाए", "बैंक से पूछे बिना तारीख़ के ऊपर दोबारा लिख देना"]
      }
    },
    {
      label: { en: "Pay (name of the payee)", hi: "Pay (पैसा पाने वाले का नाम)" },
      quick: { en: "Full name of the person or company to be paid", hi: "जिसे पैसा देना है, उस व्यक्ति या कंपनी का पूरा नाम" },
      meaning: {
        en: "The line after the word \"Pay\" is for the name of the person or organisation who should get the money (the payee).",
        hi: "\"Pay\" शब्द के बाद वाली लाइन में उस व्यक्ति या संस्था का नाम लिखा जाता है जिसे पैसा मिलना है (पेयी)।"
      },
      write: {
        en: "Write the payee's name clearly. If the cheque will be deposited in the payee's bank account, write the name as it is on that account, because an \"account payee\" cheque is credited only to the payee named on it. If you get the name wrong, do not correct it: RBI says that for any change in the payee's name a fresh cheque leaf must be used.",
        hi: "पाने वाले का नाम साफ़ लिखें। अगर चेक पाने वाले के बैंक खाते में जमा होगा, तो नाम वैसा ही लिखें जैसा उस खाते में है, क्योंकि \"अकाउंट पेयी\" चेक का पैसा सिर्फ़ उसी के खाते में जाता है जिसका नाम चेक पर लिखा है। नाम ग़लत लिख जाए तो उसे ठीक न करें: RBI के अनुसार पाने वाले के नाम में किसी भी बदलाव के लिए नया चेक लेना होगा।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Cutting or overwriting the name", "Writing a short or nickname that does not match the payee's bank account"],
        hi: ["नाम काटना या उसके ऊपर लिखना", "ऐसा छोटा या घरेलू नाम लिखना जो पाने वाले के बैंक खाते से मेल न खाए"]
      }
    },
    {
      label: { en: "\"or bearer\" (printed at the end of the Pay line)", hi: "\"or bearer\" (Pay वाली लाइन के आख़िर में छपा)" },
      quick: { en: "Ask your branch before striking it out", hi: "काटने से पहले अपनी बैंक शाखा से पूछें" },
      meaning: {
        en: "Many cheque leaves print \"or bearer\" after the payee line. RBI explains that a cheque payable to bearer can be passed on just by handing it over, while a cheque payable to order needs the holder's endorsement as well as delivery. RBI also tells banks to pay \"self\" or \"bearer\" cheques in cash, taking usual precautions, without insisting that the account holder be present.",
        hi: "कई चेक पर पाने वाले की लाइन के बाद \"or bearer\" छपा होता है। RBI के अनुसार \"बेयरर\" (धारक) को देय चेक सिर्फ़ हाथ में देकर आगे दिया जा सकता है, जबकि \"ऑर्डर\" को देय चेक के लिए हाथ में देने के साथ उस पर पीछे हस्ताक्षर (एंडोर्समेंट) भी चाहिए। RBI बैंकों से यह भी कहता है कि \"सेल्फ़\" या \"बेयरर\" चेक का नक़द भुगतान सामान्य सावधानी के साथ करें, खाताधारक को बुलाने पर ज़ोर न दें।"
      },
      write: {
        en: "Leaving \"or bearer\" means whoever holds the cheque may be able to get it paid. The RBI documents read for this guide do not say how to strike out \"or bearer\" or what that changes on a cheque, so ask your bank branch how to mark the cheque if you want only the named payee to be paid. To make sure the money goes only into the payee's bank account, see the \"A/c Payee\" field.",
        hi: "\"or bearer\" छोड़ देने का मतलब है कि जिसके हाथ में चेक है, वह भी उसका भुगतान ले सकता है। इस गाइड के लिए पढ़े गए RBI के दस्तावेज़ों में यह नहीं लिखा कि \"or bearer\" कैसे काटें या काटने से चेक में क्या बदलता है, इसलिए अगर आप चाहते हैं कि सिर्फ़ नाम वाले व्यक्ति को ही पैसा मिले, तो अपनी बैंक शाखा से पूछें कि चेक पर क्या लिखें। पैसा सिर्फ़ पाने वाले के बैंक खाते में जाए, इसके लिए \"A/c Payee\" वाला खाना देखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Handing over a bearer cheque to someone else to carry, without thinking that the holder can get it paid"],
        hi: ["बेयरर चेक किसी और के हाथ भेज देना, यह सोचे बिना कि जिसके पास चेक है वह पैसा ले सकता है"]
      }
    },
    {
      label: { en: "Rupees (amount in words)", hi: "Rupees (रक़म शब्दों में)" },
      quick: { en: "The amount in words, same as the figures", hi: "रक़म शब्दों में, अंकों वाली रक़म जितनी ही" },
      meaning: {
        en: "RBI calls the amount in words the \"legal amount\". It must say exactly the same amount as the figures in the ₹ box.",
        hi: "शब्दों में लिखी रक़म को RBI \"लीगल अमाउंट\" कहता है। यह बिल्कुल वही रक़म होनी चाहिए जो ₹ वाले खाने में अंकों में लिखी है।"
      },
      write: {
        en: "Write the amount in words on the \"Rupees\" line in permanent ink of an image-friendly colour (RBI has not fixed any one ink colour). You may write it in Hindi, English or your regional language. If you make a mistake, do not cut or overwrite: RBI says any change in the amount in words needs a fresh cheque leaf, and cheques with alterations are not accepted in CTS.",
        hi: "\"Rupees\" वाली लाइन पर रक़म शब्दों में पक्की (permanent) स्याही से लिखें, ऐसे रंग में जो स्कैन में साफ़ आए (RBI ने कोई एक रंग तय नहीं किया है)। आप हिंदी, अंग्रेज़ी या अपनी क्षेत्रीय भाषा में लिख सकते हैं। ग़लती हो जाए तो काटें या ऊपर न लिखें: RBI के अनुसार शब्दों वाली रक़म में किसी भी बदलाव के लिए नया चेक लेना होगा, और काट-छाँट वाले चेक CTS में नहीं लिए जाते।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Words and figures showing different amounts", "Using erasable ink", "Correcting a word instead of using a new leaf"],
        hi: ["शब्दों और अंकों में अलग-अलग रक़म", "मिटने वाली स्याही से लिखना", "नया चेक लेने की जगह किसी शब्द को ठीक कर देना"]
      }
    },
    {
      label: { en: "₹ box (amount in figures)", hi: "₹ वाला खाना (रक़म अंकों में)" },
      quick: { en: "The amount in figures, matching the words exactly", hi: "रक़म अंकों में, शब्दों से बिल्कुल मेल खाती" },
      meaning: {
        en: "RBI calls the amount in figures the \"courtesy amount\". It is written in the box with the ₹ sign.",
        hi: "अंकों में लिखी रक़म को RBI \"कर्टसी अमाउंट\" कहता है। यह ₹ के निशान वाले खाने में लिखी जाती है।"
      },
      write: {
        en: "Write the same amount as in words, clearly, inside the box, in permanent ink. Do not correct a figure: RBI says any change in the amount in figures needs a fresh cheque leaf. If the amount is ₹50,000 or more, also see the Positive Pay field.",
        hi: "शब्दों वाली रक़म ही अंकों में, खाने के अंदर, साफ़ और पक्की स्याही से लिखें। किसी अंक को ठीक न करें: RBI के अनुसार अंकों वाली रक़म में किसी भी बदलाव के लिए नया चेक लेना होगा। अगर रक़म ₹50,000 या उससे ज़्यादा है, तो पॉज़िटिव पे वाला खाना भी देखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Figures not matching the words", "Overwriting a digit", "Writing outside the box"],
        hi: ["अंक शब्दों से मेल न खाना", "किसी अंक के ऊपर दोबारा लिखना", "खाने से बाहर लिखना"]
      }
    },
    {
      label: { en: "Signature", hi: "हस्ताक्षर (Signature)" },
      quick: { en: "Sign in the signature space, as your bank has it", hi: "हस्ताक्षर वाली जगह पर, बैंक में दिए जैसे ही साइन करें" },
      meaning: {
        en: "Your signature as the account holder (the drawer) tells the bank to pay. It is one of the main parts of the cheque that must show clearly in the scanned picture.",
        hi: "खाताधारक (चेक देने वाले) के रूप में आपका हस्ताक्षर बैंक को भुगतान करने को कहता है। यह चेक के उन ज़रूरी हिस्सों में से है जो स्कैन की फ़ोटो में साफ़ दिखने चाहिए।"
      },
      write: {
        en: "Sign in the space meant for the signature, in the same way as the specimen signature your bank has for your account. Keep it inside that space so it is not covered by stamps; RBI tells banks that their stamps must not overshadow the date, payee name, amount or signature. If you are not sure which signature the bank has on record, ask your bank branch. If an account holder is too ill to sign, RBI allows a mark identified by two independent witnesses; ask the branch for this.",
        hi: "हस्ताक्षर के लिए बनी जगह में वैसे ही साइन करें जैसा नमूना हस्ताक्षर (specimen signature) बैंक के पास आपके खाते के लिए है। साइन उसी जगह के अंदर रखें ताकि मोहर से न ढके; RBI ने बैंकों से कहा है कि उनकी मोहर तारीख़, पाने वाले के नाम, रक़म या हस्ताक्षर को ढके नहीं। अगर पक्का नहीं पता कि बैंक के रिकॉर्ड में कौन-सा हस्ताक्षर है, तो अपनी बैंक शाखा से पूछें। अगर खाताधारक बीमारी की वजह से साइन न कर सके, तो RBI दो स्वतंत्र गवाहों से पहचाने गए निशान की अनुमति देता है; इसके लिए शाखा से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Signing differently from the specimen signature at the bank", "Signing outside the signature space, where a stamp may cover it"],
        hi: ["बैंक में दिए नमूना हस्ताक्षर से अलग साइन करना", "हस्ताक्षर की जगह से बाहर साइन करना, जहाँ मोहर उसे ढक सकती है"]
      }
    },
    {
      label: { en: "\"A/c Payee\" crossing", hi: "\"A/c Payee\" क्रॉसिंग" },
      quick: { en: "Mark \"A/c Payee\" so money goes only to payee's account", hi: "\"A/c Payee\" लिखें, ताकि पैसा सिर्फ़ पाने वाले के खाते में जाए" },
      meaning: {
        en: "An \"account payee\" cheque can only be collected into the bank account of the payee named on it. RBI directs banks not to collect account payee cheques for any person other than the payee. If anyone asks the bank to credit it to some other account, the bank must ask for the cheque or the account payee mark to be withdrawn by the drawer.",
        hi: "\"अकाउंट पेयी\" चेक का पैसा सिर्फ़ उसी के बैंक खाते में जा सकता है जिसका नाम चेक पर लिखा है। RBI ने बैंकों को निर्देश दिया है कि अकाउंट पेयी चेक पाने वाले के अलावा किसी और के लिए जमा न करें। अगर कोई बैंक से किसी दूसरे खाते में पैसा डालने को कहे, तो बैंक को कहना होता है कि चेक देने वाला वह चेक या उस पर लगा अकाउंट पेयी निशान वापस ले।"
      },
      write: {
        en: "The mark commonly used is two parallel lines across the cheque with \"A/c Payee\" written between them, but the RBI documents read for this guide do not describe how to draw it, so ask your bank branch where and how they want it marked. Use it whenever the money should go only into the payee's account. Do not mark it on a cheque you want to withdraw as cash (for example a \"self\" cheque).",
        hi: "आम तौर पर चेक पर दो समानांतर (parallel) लाइनें खींचकर उनके बीच \"A/c Payee\" लिखा जाता है, लेकिन इस गाइड के लिए पढ़े गए RBI के दस्तावेज़ों में यह नहीं लिखा कि इसे कैसे बनाएँ, इसलिए अपनी बैंक शाखा से पूछें कि वे इसे कहाँ और कैसे चाहते हैं। जब भी पैसा सिर्फ़ पाने वाले के खाते में जाना हो, यह निशान लगाएँ। जिस चेक से आप नक़द निकालना चाहते हैं (जैसे \"सेल्फ़\" चेक), उस पर यह न लगाएँ।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Marking \"A/c Payee\" on a cheque meant to be paid in cash", "Expecting the bank to credit an account payee cheque to someone else's account"],
        hi: ["नक़द लेने वाले चेक पर \"A/c Payee\" लिख देना", "यह उम्मीद करना कि बैंक अकाउंट पेयी चेक किसी और के खाते में डाल देगा"]
      }
    },
    {
      label: { en: "Parts printed by the bank (cheque number, MICR code, IFSC, account details)", hi: "बैंक के छापे हुए हिस्से (चेक नंबर, MICR कोड, IFSC, खाते का विवरण)" },
      quick: { en: "Do not write, sign or stamp on these", hi: "इन पर कुछ न लिखें, न साइन करें, न मोहर लगाएँ" },
      meaning: {
        en: "The bank prints some details on every leaf before giving you the cheque book: each cheque has its own number, and the MICR code and the IFSC of your branch are printed on the cheque leaf (RBI also asks banks to print these two in your passbook or statement). The leaf also carries security features of the CTS-2010 standard, such as the watermark, the bank's logo in invisible ink and the hidden \"VOID\" pattern.",
        hi: "चेक बुक देने से पहले बैंक हर चेक पर कुछ जानकारी छापता है: हर चेक का अपना नंबर होता है, और आपकी शाखा का MICR कोड और IFSC चेक पर छपा होता है (RBI बैंकों से कहता है कि ये दोनों आपकी पासबुक या स्टेटमेंट में भी छापें)। चेक पर CTS-2010 स्टैंडर्ड की सुरक्षा भी होती है, जैसे वॉटरमार्क, अदृश्य स्याही में बैंक का लोगो और छिपा हुआ \"VOID\" पैटर्न।"
      },
      write: {
        en: "Write nothing on these printed parts, and keep your writing and signature inside their own spaces so the scanned picture stays clear. Check that any details printed for you, such as your name or account number, are correct; if not, ask your bank branch. Use only the CTS-2010 cheque book your bank gives you: non-CTS cheques cannot be presented in CTS clearing any more.",
        hi: "इन छपे हुए हिस्सों पर कुछ न लिखें, और अपनी लिखावट और साइन अपनी-अपनी जगह में ही रखें ताकि स्कैन की फ़ोटो साफ़ रहे। आपके लिए छपी जानकारी, जैसे आपका नाम या खाता नंबर, सही है या नहीं, जाँच लें; ग़लत हो तो अपनी बैंक शाखा से पूछें। बैंक की दी हुई CTS-2010 चेक बुक ही इस्तेमाल करें: बिना-CTS वाले चेक अब CTS क्लियरिंग में जमा नहीं हो सकते।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing or signing across the code line at the bottom of the cheque", "Using an old non-CTS cheque book"],
        hi: ["चेक के नीचे छपी कोड वाली लाइन पर लिखना या साइन करना", "पुरानी बिना-CTS वाली चेक बुक इस्तेमाल करना"]
      }
    },
    {
      label: { en: "Positive Pay (for cheques of ₹50,000 and above)", hi: "पॉज़िटिव पे (₹50,000 या उससे ज़्यादा के चेक के लिए)" },
      quick: { en: "For ₹50,000+, send cheque details to your bank", hi: "₹50,000 या ज़्यादा के चेक की जानकारी बैंक को भेजें" },
      meaning: {
        en: "Under the Positive Pay System (from 1 January 2021), you send your bank some details of a cheque you have issued, such as the date, the payee's name and the amount. When the cheque is presented, CTS checks it against these details and flags any difference to both banks. Banks must offer this to all account holders for cheques of ₹50,000 and above.",
        hi: "पॉज़िटिव पे सिस्टम (1 जनवरी 2021 से) में आप जारी किए गए चेक की कुछ जानकारी, जैसे तारीख़, पाने वाले का नाम और रक़म, अपने बैंक को भेजते हैं। जब चेक जमा होता है, तो CTS उसे इस जानकारी से मिलाता है और कोई फ़र्क़ हो तो दोनों बैंकों को बताता है। ₹50,000 या उससे ज़्यादा के चेक के लिए बैंकों को यह सुविधा सभी खाताधारकों को देनी होती है।"
      },
      write: {
        en: "Send the details through your bank's channel, such as SMS, mobile app, internet banking or ATM. Using it is your choice, but your bank may make it compulsory for cheques of ₹5,00,000 and above. RBI says only cheques that follow these instructions are covered by the dispute resolution mechanism in CTS. Ask your bank which details it needs and how soon you must send them.",
        hi: "जानकारी अपने बैंक के किसी तरीक़े से भेजें, जैसे SMS, मोबाइल ऐप, इंटरनेट बैंकिंग या ATM। इसे इस्तेमाल करना आपकी मर्ज़ी है, लेकिन ₹5,00,000 या उससे ज़्यादा के चेक के लिए आपका बैंक इसे ज़रूरी कर सकता है। RBI के अनुसार CTS के विवाद निपटारा तरीक़े (dispute resolution) में सिर्फ़ वही चेक आते हैं जो इन निर्देशों का पालन करते हैं। अपने बैंक से पूछें कि कौन-सी जानकारी चाहिए और कितनी जल्दी भेजनी है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Sending details that do not match the cheque (date, name or amount)", "Not checking whether your bank has made it compulsory for ₹5,00,000 and above"],
        hi: ["ऐसी जानकारी भेजना जो चेक से मेल न खाए (तारीख़, नाम या रक़म)", "यह न जाँचना कि ₹5,00,000 या ज़्यादा के चेक के लिए आपके बैंक ने इसे ज़रूरी किया है या नहीं"]
      }
    },
    {
      label: { en: "Giving and depositing the cheque", hi: "चेक देना और जमा करना" },
      quick: { en: "Deposit within three months; ask for an acknowledgement", hi: "तीन महीने के अंदर जमा करें; रसीद (acknowledgement) माँगें" },
      meaning: {
        en: "The payee deposits the cheque in their bank, which scans it and sends it for clearing. A cheque must be presented within three months of its date.",
        hi: "पाने वाला चेक अपने बैंक में जमा करता है, जो उसे स्कैन करके क्लियरिंग के लिए भेजता है। चेक अपनी तारीख़ से तीन महीने के अंदर जमा होना चाहिए।"
      },
      write: {
        en: "You can put the cheque in the drop box or give it at the counter; a branch cannot refuse an acknowledgement if you ask for one at the counter, and you cannot be forced to use the drop box. For savings account customers there is no service charge for collecting cheques up to ₹1,00,000; for bigger cheques and other accounts, charges are in the bank's Cheque Collection Policy. If you have a complaint about non-payment or long delay, complain to the bank first; if it does not reply within 30 days, you can complain under the RBI Integrated Ombudsman Scheme at cms.rbi.org.in (toll-free 14448).",
        hi: "चेक ड्रॉप बॉक्स में डाल सकते हैं या काउंटर पर दे सकते हैं; काउंटर पर रसीद (acknowledgement) माँगने पर शाखा मना नहीं कर सकती, और आपको ड्रॉप बॉक्स में डालने के लिए मजबूर नहीं किया जा सकता। सेविंग्स खाते वालों के लिए ₹1,00,000 तक के चेक जमा करवाने पर कोई सर्विस चार्ज नहीं है; इससे बड़े चेक और दूसरे खातों के चार्ज बैंक की चेक कलेक्शन पॉलिसी में होते हैं। भुगतान न होने या बहुत देर होने की शिकायत पहले बैंक से करें; 30 दिन में जवाब न मिले तो cms.rbi.org.in पर RBI एकीकृत लोकपाल योजना में शिकायत कर सकते हैं (टोल-फ़्री 14448)।"
      },
      changed: {
        en: "Changed: from 4 October 2025 CTS moved to \"continuous clearing\". Cheques are now cleared through the day, and the presenting bank must release the money to the customer within one hour of successful settlement, subject to usual safeguards.",
        hi: "बदलाव: 4 अक्टूबर 2025 से CTS में \"कंटीन्यूअस क्लियरिंग\" शुरू हुई। अब चेक पूरे दिन क्लियर होते हैं, और सेटलमेंट सफल होने के एक घंटे के अंदर जमा करने वाले बैंक को ग्राहक को पैसा देना होता है, सामान्य सावधानियों के साथ।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Keeping a cheque for more than three months before depositing it", "Not asking for an acknowledgement when giving the cheque at the counter"],
        hi: ["चेक को तीन महीने से ज़्यादा रखे रहना और फिर जमा करना", "काउंटर पर चेक देते समय रसीद (acknowledgement) न माँगना"]
      }
    }
  ]
});
