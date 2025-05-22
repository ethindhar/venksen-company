import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from './context/LanguageContext';
import './About.css';

const translations = {
  en: {
    title: "About VenkSen",
    intro: "VenkSen Pvt. Ltd. is a spin-off start-up founded in 2025 by Dr. Y. Veera Manohara Reddy, Dr. Neelam Kumari, and their students. Incorporated in May 2025 and incubated at Sri Venkateswara College, University of Delhi, VenkSen benefits from strong institutional and regulatory support. We develop low-cost, electrochemistry-based platforms for rapid detection of biological and chemical analytes, including nucleic acids, proteins, small molecules, and ions. Our technology is designed for high performance in biosafety and point-of-use applications. Currently, we are collaborating with the University of Hyderabad and Sri Venkateswara University to advance our R&D. VenkSen is positioned to deliver scalable, market-ready solutions across diagnostics, environmental testing, and beyond. We are seeking strategic investment to accelerate growth and commercialization.",
    story: {
      title: "Our Story",
      content: "VenkSen Private Limited specializes in designing accessible, intuitive electrochemical sensing systems leveraging advanced nanomaterials such as boron nitride nanotubes (BNNTs), graphene oxide (GO), metal-organic frameworks (MOFs), and carbon nanotubes (CNTs). These innovations enable high-precision, low-cost detection of biological and chemical targets—including virus, nucleic acids, proteins, small molecules, and ionic species—for applications in biosafety monitoring and decentralized diagnostic environments."
    },
    vision: {
      title: "Vision",
      content: "To pioneer a future where nanotechnology-driven diagnostics redefine accessibility, precision, and sustainability in global health—empowering communities and industries to thrive through real-time, actionable insights."
    },
    mission: {
      title: "Mission",
      content: "At VenkSen, we leverage cutting-edge nanomaterials like boron nitride nanotubes (BNNTs), graphene oxide (GO), metal-organic frameworks (MOFs), and carbon nanotubes (CNTs) to design scalable, user-centric electrochemical platforms. Our mission is to democratize advanced diagnostics by delivering affordable, portable solutions that detect critical biological and chemical analytes—from nucleic acids to ionic species—enabling safer environments, healthier populations, and smarter decision-making in biosafety, industrial, and point-of-care settings."
    },
    sustainability: {
      title: "Sustainability Commitment",
      content: "We believe innovation must harmonize with planetary stewardship. By integrating eco-conscious practices into every stage of our work, we commit to:",
      points: {
        env: "Environmental Responsibility: Minimizing waste and energy consumption through green synthesis of nanomaterials (e.g., MOFs, CNTs) and recyclable device architectures.",
        ethical: "Ethical Innovation: Prioritizing non-toxic, biocompatible materials and ethical sourcing to ensure safety for users and ecosystems.",
        equity: "Global Health Equity: Partnering with underserved communities to deploy low-cost diagnostics that address pressing public health and environmental challenges, aligning with UN Sustainable Development Goals (SDGs)."
      }
    }
  },
  hi: {
    title: "वेंकसेन के बारे में",
    intro: "वेंकसेन प्रा. लि. एक स्पिन-ऑफ स्टार्टअप है, जिसकी स्थापना 2025 में डॉ. वाई. वीरा मनोहरा रेड्डी, डॉ. नीलम कुमारी और उनके छात्रों द्वारा की गई थी। मई 2025 में स्थापित और श्री वेंकटेश्वर कॉलेज, दिल्ली विश्वविद्यालय में इनक्यूबेटेड, वेंकसेन को मजबूत संस्थागत और नियामक समर्थन प्राप्त है। हम कम लागत वाले, इलेक्ट्रोकेमिस्ट्री-आधारित प्लेटफॉर्म विकसित करते हैं, जो जैविक और रासायनिक विश्लेषकों (जैसे न्यूक्लिक एसिड, प्रोटीन, छोटे अणु और आयन) की त्वरित पहचान के लिए सक्षम हैं। हमारी तकनीक बायोसेफ्टी और पॉइंट-ऑफ-यूज़ अनुप्रयोगों में उच्च प्रदर्शन के लिए डिज़ाइन की गई है। वर्तमान में, हम अपने अनुसंधान एवं विकास को आगे बढ़ाने के लिए हैदराबाद विश्वविद्यालय और श्री वेंकटेश्वर विश्वविद्यालय के साथ सहयोग कर रहे हैं। वेंकसेन डायग्नोस्टिक्स, पर्यावरण परीक्षण और अन्य क्षेत्रों में स्केलेबल, मार्केट-रेडी समाधान प्रदान करने के लिए तैयार है। हम विकास और व्यावसायीकरण को तेज़ करने के लिए रणनीतिक निवेश की तलाश कर रहे हैं।",
    story: {
      title: "हमारी कहानी",
      content: "वेंकसेन प्राइवेट लिमिटेड उन्नत नैनोमटीरियल्स जैसे बोरॉन नाइट्राइड नैनोट्यूब्स (BNNTs), ग्राफीन ऑक्साइड (GO), मेटल-ऑर्गेनिक फ्रेमवर्क्स (MOFs), और कार्बन नैनोट्यूब्स (CNTs) का उपयोग करके सुलभ, सहज इलेक्ट्रोकेमिकल सेंसिंग सिस्टम डिजाइन करने में विशेषज्ञता रखता है।"
    },
    vision: {
      title: "दृष्टि",
      content: "एक ऐसे भविष्य का नेतृत्व करना जहां नैनोटेक्नॉलॉजी-संचालित डायग्नोस्टिक्स वैश्विक स्वास्थ्य में पहुंच, सटीकता और स्थिरता को पुनर्परिभाषित करें—वास्तविक समय, क्रियाशील अंतर्दृष्टि के माध्यम से समुदायों और उद्योगों को समृद्ध होने में सशक्त बनाएं।"
    },
    mission: {
      title: "मिशन",
      content: "वेंकसेन में, हम स्केलेबल, उपयोगकर्ता-केंद्रित इलेक्ट्रोकेमिकल प्लेटफॉर्म डिजाइन करने के लिए बोरॉन नाइट्राइड नैनोट्यूब्स (BNNTs), ग्राफीन ऑक्साइड (GO), मेटल-ऑर्गेनिक फ्रेमवर्क्स (MOFs), और कार्बन नैनोट्यूब्स (CNTs) जैसे अत्याधुनिक नैनोमटीरियल्स का उपयोग करते हैं।"
    },
    sustainability: {
      title: "स्थिरता प्रतिबद्धता",
      content: "हमारा मानना है कि नवाचार को ग्रहीय प्रबंधन के साथ सामंजस्य स्थापित करना चाहिए। हमारे काम के हर चरण में पर्यावरण-जागरूक प्रथाओं को एकीकृत करके, हम प्रतिबद्ध हैं:",
      points: {
        env: "पर्यावरणीय जिम्मेदारी: नैनोमटीरियल्स (जैसे MOFs, CNTs) के हरे संश्लेषण और पुनर्चक्रणीय डिवाइस आर्किटेक्चर के माध्यम से अपशिष्ट और ऊर्जा खपत को कम करना।",
        ethical: "नैतिक नवाचार: उपयोगकर्ताओं और पारिस्थितिक तंत्रों के लिए सुरक्षा सुनिश्चित करने के लिए गैर-विषाक्त, बायोकम्पैटिबल सामग्री और नैतिक सोर्सिंग को प्राथमिकता देना।",
        equity: "वैश्विक स्वास्थ्य समानता: संयुक्त राष्ट्र सतत विकास लक्ष्यों (SDGs) के अनुरूप, तत्काल सार्वजनिक स्वास्थ्य और पर्यावरणीय चुनौतियों को संबोधित करने वाले कम लागत वाले नैदानिक उपकरणों को तैनात करने के लिए वंचित समुदायों के साथ साझेदारी करना।"
      }
    }
  }
};

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Helmet>
        <title>About | VENKSEN Private Limited</title>
        <meta name="description" content="Learn about VENKSEN Private Limited, our mission, vision, and commitment to innovation." />
      </Helmet>
      <div>
        <section>
          <div className="content-section" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0 0 2rem 0', letterSpacing: '-2px' }}>{t.title}</h1>
            <p style={{fontFamily:'Monserrat',fontSize:'20px'}}>{t.intro}</p>
          </div>
        </section>

        <div className="content-section">
          {/* Story Section */}
          <div className="card zigzag-container" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'stretch' }}>
            <div className="content-left">
              <h2 className="section-title">{t.story.title}</h2>
              <p>{t.story.content}</p>
            </div>
            <div className="image-right" style={{ flex: '1 1 400px', maxWidth: '600px', minWidth: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="./story.jpg"
                alt={t.story.title}
                className="section-image"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'contain',
                  background: '#fff',
                  borderRadius: '16px'
                }}
              />
            </div>
          </div>

          {/* Vision Section */}
          <div className="card zigzag-container reverse">
            <div className="image-left">
              <img src="./vision.png" alt={t.vision.title} className="section-image" style={{ width: '350px', height: '350px', objectFit: 'cover' }} />
            </div>
            <div className="content-right">
              <h2 className="section-title">{t.vision.title}</h2>
              <p>{t.vision.content}</p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="card zigzag-container">
            <div className="content-left">
              <h2 className="section-title">{t.mission.title}</h2>
              <p>{t.mission.content}</p>
            </div>
            <div className="image-right">
              <img src="./mission.jpg" alt={t.mission.title} className="section-image" style={{ width: '350px', height: '350px', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Sustainability Section */}
          <div className="card zigzag-container reverse">
            <div className="image-left">
              <img src="./sustainability.jpg" alt={t.sustainability.title} className="section-image" style={{ width: '350px', height: '350px', objectFit: 'cover' }} />
            </div>
            <div className="content-right">
              <h2 className="section-title">{t.sustainability.title}</h2>
              <p>{t.sustainability.content}</p>
              <ul>
                <li><b>{t.sustainability.points.env}</b></li>
                <li><b>{t.sustainability.points.ethical}</b></li>
                <li><b>{t.sustainability.points.equity}</b></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;