import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from './context/LanguageContext';
import './About.css';

const translations = {
  en: {
    title: "Our Team",
    members: [
      {
        name: "Dr. Y. Veera Manohara Reddy",
        role: "Founder",
        image: "/veera.jpg",
        content: `Dr. Y. Veera Manohara Reddy is an Assistant Professor in the Department of Chemistry at Sri Venkateswara College, University of Delhi, and the founder of Venksen Pvt. Ltd, a company focused on innovative diagnostic and sensing technologies. He is a leading expert in materials chemistry, electrochemical biosensors, and nanotechnology, with research spanning advanced 2D materials like MXenes and graphene for healthcare, environmental, and energy applications.\n\nWith international postdoctoral experience in South Korea and Norway, Dr. Reddy has authored over 25 high-impact publications and secured competitive research funding. He has garnered prestigious recognitions such as the DBT-ILS Biotech Hackathon Award, and is actively involved in the global scientific community through editorial roles and memberships in prominent organizations such as the American Chemical Society and The Electrochemical Society. His entrepreneurial vision and research leadership are driving the development of next-generation, low-cost diagnostic technologies.`
      },
      {
        name: "Dr. Neelam Kumari",
        role: "Director",
        image: "/neela.jpg",
        content: `is a distinguished chemist and policy expert with a Ph.D. from INMAS, DRDO. With over a decade of experience spanning industry, academia, and national policy, she has deep expertise in molecular imaging and drug discovery. Her research on PET, SPECT, and optical imaging probes for cancer and neurological disorders is widely published in Scopus-indexed journals. Dr. Kumari previously served as a Consultant at the University Grants Commission, where she played a key role in implementing NEP 2020. A UGC-certified Master Trainer in Indian Knowledge Systems, her leadership at VenkSen drives a vision of integrating cutting-edge research, education, and innovation to tackle global healthcare challenges.`
      },
      {
        name: "Dr. Sanivarapu Lokeswara Reddy",
        role: "Chief Scientific Officer",
        image: "/lokeshwara.jpg",
        content: `Dr. Sanivarapu Lokeswara Reddy brings a strong background in bioelectronics and sensor technology to his role at Venksen Pvt Ltd. He earned his B.Sc. in Computer Science from Loyola Degree College, Pulivendula, in 2015, followed by an M.Sc. in Materials Science and Nanotechnology from Yogi Vemana University in 2017. He completed his Ph.D. in Bioelectronics and Biosensors at Alagappa University in 2023, where his research focused on designing nanostructured biosensors for biomedical applications.\n\nCurrently serving as a Postdoctoral Fellow in the Department of Chemistry at Chiang Mai University, Thailand, Dr. Reddy specializes in developing nanomaterial-based biosensors, flexible electronics, and point-of-care diagnostic devices. His work centers on creating advanced sensing platforms—including electrochemical and optical biosensors, wearable sensors, and smartphone-integrated analytical tools—aimed at tackling critical challenges in healthcare, environmental monitoring, and agriculture.`
      },
      {
        name: "Ms. Shivangi Arya",
        role: "Non-Executive Director",
        image: "/shivangi.jpg",
        content: `B.Sc. Life Sciences (3rd Year), Sri Venkateswara College, University of Delhi\nExperience in multiplex biosensors\nNon-Executive Director, VenkSen Pvt. Ltd.`
      },
      {
        name: "Ms. Gaurvi",
        role: "Non-Executive Director",
        image: "/gaurvi.jpg",
        content: `B.Sc. Life Sciences (1st Year), Sri Venkateswara College, University of Delhi\nExperience in multiplex biosensors\nNon-Executive Director, VenkSen Pvt. Ltd.`
      }
    ]
  },
  hi: {
    title: "हमारी टीम",
    members: [
      {
        name: "डॉ. वाई. वीरा मनोहरा रेड्डी",
        role: "संस्थापक",
        image: "/veera.jpg",
        content: `डॉ. वाई. वीरा मनोहरा रेड्डी श्री वेंकटेश्वर कॉलेज, दिल्ली विश्वविद्यालय के रसायन विभाग में सहायक प्रोफेसर हैं और वेंकसेन प्रा. लि. के संस्थापक हैं, जो नवाचारपूर्ण डायग्नोस्टिक और सेंसिंग तकनीकों पर केंद्रित है। वे मटीरियल्स केमिस्ट्री, इलेक्ट्रोकेमिकल बायोसेंसर और नैनोटेक्नोलॉजी के अग्रणी विशेषज्ञ हैं, जिनका अनुसंधान MXenes और ग्राफीन जैसे उन्नत 2D मटीरियल्स पर केंद्रित है।\n\nदक्षिण कोरिया और नॉर्वे में अंतरराष्ट्रीय पोस्टडॉक्टरल अनुभव के साथ, डॉ. रेड्डी ने 25 से अधिक उच्च-प्रभाव वाले प्रकाशनों का लेखन किया है और प्रतिस्पर्धी अनुसंधान फंडिंग प्राप्त की है। उन्हें DBT-ILS बायोटेक हैकथॉन अवार्ड जैसे प्रतिष्ठित सम्मान मिले हैं, और वे अमेरिकन केमिकल सोसाइटी और द इलेक्ट्रोकेमिकल सोसाइटी जैसी प्रमुख संस्थाओं में सक्रिय सदस्य हैं। उनकी उद्यमशील दृष्टि और अनुसंधान नेतृत्व अगली पीढ़ी की कम लागत वाली डायग्नोस्टिक तकनीकों के विकास को आगे बढ़ा रहे हैं।`
      },
      {
        name: "डॉ. नीलम कुमारी",
        role: "निदेशक",
        image: "/neela.jpg",
        content: `एक प्रतिष्ठित रसायनज्ञ और नीति विशेषज्ञ हैं, जिनके पास INMAS, DRDO से पीएच.डी. है। उद्योग, अकादमिक और राष्ट्रीय नीति में एक दशक से अधिक के अनुभव के साथ, उन्हें आणविक इमेजिंग और ड्रग डिस्कवरी में गहरी विशेषज्ञता है। कैंसर और न्यूरोलॉजिकल विकारों के लिए PET, SPECT और ऑप्टिकल इमेजिंग प्रोब्स पर उनका अनुसंधान Scopus-सूचीबद्ध पत्रिकाओं में व्यापक रूप से प्रकाशित है। डॉ. कुमारी ने पहले विश्वविद्यालय अनुदान आयोग में सलाहकार के रूप में कार्य किया, जहां उन्होंने NEP 2020 के कार्यान्वयन में महत्वपूर्ण भूमिका निभाई। भारतीय ज्ञान प्रणालियों में UGC-प्रमाणित मास्टर ट्रेनर के रूप में, वेंकसेन में उनकी नेतृत्व क्षमता अनुसंधान, शिक्षा और नवाचार को एकीकृत करने की दृष्टि को आगे बढ़ाती है।`
      },
      {
        name: "डॉ. सनीवरापु लोकेश्वर रेड्डी",
        role: "मुख्य वैज्ञानिक अधिकारी",
        image: "/lokeshwara.jpg",
        content: `डॉ. सनीवरापु लोकेश्वर रेड्डी वेंकसेन प्रा. लि. में बायोइलेक्ट्रॉनिक्स और सेंसर तकनीक में मजबूत पृष्ठभूमि लाते हैं। उन्होंने 2015 में लोयोला डिग्री कॉलेज, पुलिवेंदुला से कंप्यूटर साइंस में बी.एससी., 2017 में योगी वेमाना विश्वविद्यालय से मटीरियल्स साइंस और नैनोटेक्नोलॉजी में एम.एससी., और 2023 में अलागप्पा विश्वविद्यालय से बायोइलेक्ट्रॉनिक्स और बायोसेंसर में पीएच.डी. प्राप्त की।\n\nवर्तमान में वे थाईलैंड के चियांग माई विश्वविद्यालय के रसायन विभाग में पोस्टडॉक्टरल फेलो के रूप में कार्यरत हैं, जहां वे नैनोमटीरियल-आधारित बायोसेंसर, फ्लेक्सिबल इलेक्ट्रॉनिक्स और पॉइंट-ऑफ-केयर डायग्नोस्टिक डिवाइस विकसित करने में विशेषज्ञ हैं। उनका कार्य उन्नत सेंसिंग प्लेटफार्म—जैसे इलेक्ट्रोकेमिकल और ऑप्टिकल बायोसेंसर, वेयरेबल सेंसर, और स्मार्टफोन-एकीकृत विश्लेषणात्मक उपकरण—के निर्माण पर केंद्रित है, जिसका उद्देश्य स्वास्थ्य देखभाल, पर्यावरण निगरानी और कृषि में महत्वपूर्ण चुनौतियों का समाधान करना है।`
      },
      {
        name: "सुश्री शिवांगी आर्य",
        role: "नॉन-एग्जीक्यूटिव डायरेक्टर",
        image: "/shivangi.jpg",
        content: `बी.एससी. लाइफ साइंसेज (तृतीय वर्ष), श्री वेंकटेश्वर कॉलेज, दिल्ली विश्वविद्यालय\nमल्टीप्लेक्स बायोसेंसर में अनुभव\nनॉन-एग्जीक्यूटिव डायरेक्टर, वेंकसेन प्रा. लि.`
      },
      {
        name: "सुश्री गौरवी",
        role: "नॉन-एग्जीक्यूटिव डायरेक्टर",
        image: "/gaurvi.jpg",
        content: `बी.एससी. लाइफ साइंसेज (प्रथम वर्ष), श्री वेंकटेश्वर कॉलेज, दिल्ली विश्वविद्यालय\nमल्टीप्लेक्स बायोसेंसर में अनुभव\nनॉन-एग्जीक्यूटिव डायरेक्टर, वेंकसेन प्रा. लि.`
      }
    ]
  }
};

const Team = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [expandedIndexes, setExpandedIndexes] = useState({});
  const PREVIEW_CHAR_LIMIT = 400; // Approximate 6 lines
  const IMAGE_HEIGHT = 300;

  return (
    <>
      <Helmet>
        <title>Team | VENKSEN Private Limited</title>
        <meta name="description" content="Meet the team behind VENKSEN Private Limited." />
      </Helmet>
      <div className="content-section" style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'left' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0 0 2rem 0', letterSpacing: '-2px' }}>{t.title}</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: '2rem',
            justifyContent: 'flex-start',
            overflowX: 'auto',
            paddingBottom: '1rem'
          }}
        >
          {t.members.slice(0, 3).map((member, idx) => {
            let name = member.name;
            let role = member.role;
            let content = member.content;
            const isLong = content.length > PREVIEW_CHAR_LIMIT;
            const expanded = expandedIndexes[idx] || false;
            const displayContent = expanded ? content : content.slice(0, PREVIEW_CHAR_LIMIT) + (isLong && !expanded ? '...' : '');
            return (
              <div key={name} style={{ width: '340px', background: '#fff', borderRadius: '16px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '0 0 2rem 0', display: 'flex', flexDirection: 'column', minHeight: '520px', overflow: 'hidden' }}>
                <img
                  src={member.image}
                  alt={name}
                  style={{
                    width: '100%',
                    height: IMAGE_HEIGHT + 'px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    background: '#f5f5f5',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px'
                  }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '0 0 0.5rem 0',color:'black' }}>{name}</h2>
                  {role && <div style={{ fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '0.5rem', color:'black' }}>{role}</div>}
                  <p style={{ fontSize: '1rem', color: '#222', whiteSpace: 'pre-line', margin: 0, alignContent:'center' }}>{displayContent}</p>
                  {isLong && (
                    <button
                      style={{ marginTop: '1rem', background: '#222', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.5rem 1.2rem', cursor: 'pointer', fontWeight: 'bold' }}
                      onClick={() =>
                        setExpandedIndexes(prev => ({
                          ...prev,
                          [idx]: !prev[idx]
                        }))
                      }
                    >
                      {expanded ? 'Show Less' : 'Read More'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: '2rem',
            justifyContent: 'flex-start',
            overflowX: 'auto',
            paddingBottom: '1rem'
          }}
        >
          {t.members.slice(3).map((member, idx) => {
            let name = member.name;
            let role = member.role;
            let content = member.content;
            const isLong = content.length > PREVIEW_CHAR_LIMIT;
            const expanded = expandedIndexes[idx + 3] || false;
            const displayContent = expanded ? content : content.slice(0, PREVIEW_CHAR_LIMIT) + (isLong && !expanded ? '...' : '');
            return (
              <div key={name} style={{ width: '340px', background: '#fff', borderRadius: '16px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '0 0 2rem 0', display: 'flex', flexDirection: 'column', minHeight: '520px', overflow: 'hidden' }}>
                <img
                  src={member.image}
                  alt={name}
                  style={{
                    width: '100%',
                    height: IMAGE_HEIGHT + 'px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    background: '#f5f5f5',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px'
                  }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '0 0 0.5rem 0',color:'black' }}>{name}</h2>
                  {role && <div style={{ fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '0.5rem', color:'black' }}>{role}</div>}
                  <p style={{ fontSize: '1rem', color: '#222', whiteSpace: 'pre-line', margin: 0, alignContent:'center' }}>{displayContent}</p>
                  {isLong && (
                    <button
                      style={{ marginTop: '1rem', background: '#222', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.5rem 1.2rem', cursor: 'pointer', fontWeight: 'bold' }}
                      onClick={() =>
                        setExpandedIndexes(prev => ({
                          ...prev,
                          [idx + 3]: !prev[idx + 3]
                        }))
                      }
                    >
                      {expanded ? 'Show Less' : 'Read More'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;