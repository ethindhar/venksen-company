import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from './context/LanguageContext';
import './Technology.css';

const translations = {
  en: {
    title: "Our Technology",
    intro: "At VenkSen, we leverage cutting-edge nanotechnology to revolutionize electrochemical sensing. Our innovative approach combines advanced nanomaterials with sophisticated detection systems to create highly sensitive and selective biosensors.",
    nanomaterials: {
      title: "Advanced Nanomaterials",
      content: "Our platform utilizes state-of-the-art nanomaterials including Boron Nitride Nanotubes (BNNTs), Graphene Oxide (GO), Metal-Organic Frameworks (MOFs), and Carbon Nanotubes (CNTs). These materials provide exceptional electrical conductivity, surface area, and chemical stability for precise analyte detection."
    },
    applications: {
      title: "Applications",
      content: "Our nanotechnology-enabled sensors are designed for diverse applications:",
      points: {
        healthcare: "Healthcare: Real-time detection of viruses, proteins, and nucleic acids for point-of-care diagnostics",
        biosafety: "Biosafety: Rapid monitoring of biological threats and environmental contaminants",
        industrial: "Industrial: Quality control and process monitoring in manufacturing environments"
      }
    },
    advantages: {
      title: "Key Advantages",
      content: "Our nanotechnology platform offers several distinct advantages:",
      points: {
        sensitivity: "High Sensitivity: Detection of analytes at ultra-low concentrations",
        specificity: "Enhanced Specificity: Precise targeting of specific molecules",
        speed: "Rapid Response: Real-time detection and analysis",
        cost: "Cost-Effective: Affordable manufacturing and operation"
      }
    }
  },
  hi: {
    title: "हमारी तकनीक",
    intro: "वेंकसेन में, हम इलेक्ट्रोकेमिकल सेंसिंग में क्रांति लाने के लिए अत्याधुनिक नैनोटेक्नोलॉजी का उपयोग करते हैं। हमारा नवीन दृष्टिकोण उन्नत नैनोमटीरियल्स को परिष्कृत डिटेक्शन सिस्टम के साथ जोड़कर अत्यधिक संवेदनशील और चयनात्मक बायोसेंसर बनाता है।",
    nanomaterials: {
      title: "उन्नत नैनोमटीरियल्स",
      content: "हमारा प्लेटफॉर्म बोरॉन नाइट्राइड नैनोट्यूब्स (BNNTs), ग्राफीन ऑक्साइड (GO), मेटल-ऑर्गेनिक फ्रेमवर्क्स (MOFs), और कार्बन नैनोट्यूब्स (CNTs) सहित अत्याधुनिक नैनोमटीरियल्स का उपयोग करता है।"
    },
    applications: {
      title: "अनुप्रयोग",
      content: "हमारे नैनोटेक्नोलॉजी-सक्षम सेंसर विविध अनुप्रयोगों के लिए डिज़ाइन किए गए हैं:",
      points: {
        healthcare: "स्वास्थ्य सेवा: पॉइंट-ऑफ-केयर डायग्नोस्टिक्स के लिए वायरस, प्रोटीन और न्यूक्लिक एसिड का रीयल-टाइम पता लगाना",
        biosafety: "बायोसेफ्टी: जैविक खतरों और पर्यावरणीय प्रदूषकों की त्वरित निगरानी",
        industrial: "औद्योगिक: विनिर्माण वातावरण में गुणवत्ता नियंत्रण और प्रक्रिया निगरानी"
      }
    },
    advantages: {
      title: "प्रमुख लाभ",
      content: "हमारा नैनोटेक्नोलॉजी प्लेटफॉर्म कई विशिष्ट लाभ प्रदान करता है:",
      points: {
        sensitivity: "उच्च संवेदनशीलता: अल्ट्रा-लो सांद्रता में विश्लेषकों का पता लगाना",
        specificity: "बढ़ी हुई विशिष्टता: विशिष्ट अणुओं का सटीक लक्ष्यीकरण",
        speed: "त्वरित प्रतिक्रिया: रीयल-टाइम पता लगाना और विश्लेषण",
        cost: "लागत प्रभावी: किफायती विनिर्माण और संचालन"
      }
    }
  }
};

const Technology = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Helmet>
        <title>Technology | VENKSEN Private Limited</title>
        <meta name="description" content="Learn about VENKSEN's cutting-edge nanotechnology and electrochemical sensing platforms." />
      </Helmet>
      <div>
        <section>
          <div className="content-section" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0 0 2rem 0', letterSpacing: '-2px' }}>{t.title}</h1>
            <p>{t.intro}</p>
          </div>
        </section>

        <div className="content-section">
          {/* Nanomaterials Section */}
          <div className="card zigzag-container">
            <div className="content-left">
              <h2 className="section-title">{t.nanomaterials.title}</h2>
              <p>{t.nanomaterials.content}</p>
            </div>
            <div className="image-right">
              <img src="/advancednano.jpg" alt="Nanomaterials" className="section-image" />
            </div>
          </div>

          {/* Applications Section */}
          <div className="card zigzag-container reverse">
            <div className="image-left">
              <img src="/application.jpg" alt="Applications" className="section-image" />
            </div>
            <div className="content-right">
              <h2 className="section-title">{t.applications.title}</h2>
              <p>{t.applications.content}</p>
              <ul>
                <li><b>{t.applications.points.healthcare}</b></li>
                <li><b>{t.applications.points.biosafety}</b></li>
                <li><b>{t.applications.points.industrial}</b></li>
              </ul>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="card zigzag-container">
            <div className="content-left">
              <h2 className="section-title">{t.advantages.title}</h2>
              <p>{t.advantages.content}</p>
              <ul>
                <li><b>{t.advantages.points.sensitivity}</b></li>
                <li><b>{t.advantages.points.specificity}</b></li>
                <li><b>{t.advantages.points.speed}</b></li>
                <li><b>{t.advantages.points.cost}</b></li>
              </ul>
            </div>
            <div className="image-right">
              <img src="/advantage.jpg" alt="Advantages" className="section-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology; 
