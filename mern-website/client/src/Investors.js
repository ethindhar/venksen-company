import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from './context/LanguageContext';

const translations = {
  en: {
    title: "Investors",
    content: `VenkSen Investor's Club
Welcome to the VenkSen Investor's Club—a gateway to shaping the future of diagnostics. At VenkSen Private Limited, we develop cutting-edge electrochemical sensing platforms powered by advanced nanomaterials like BNNTs, GO, MOFs, and CNTs. Our modular, low-cost solutions enable real-time detection of viruses, nucleic acids, proteins, and chemical analytes—redefining accessibility in healthcare, biosafety, and industrial monitoring.`
  },
  hi: {
    title: "निवेशक",
    content: `VenkSen निवेशक क्लब
VenkSen निवेशक क्लब में आपका स्वागत है—डायग्नोस्टिक्स के भविष्य को आकार देने का एक द्वार। VenkSen Private Limited में, हम BNNTs, GO, MOFs, और CNTs जैसे उन्नत नैनोमटीरियल्स द्वारा संचालित अत्याधुनिक इलेक्ट्रोकेमिकल सेंसिंग प्लेटफॉर्म विकसित करते हैं। हमारे मॉड्यूलर, कम लागत वाले समाधान वायरस, न्यूक्लिक एसिड, प्रोटीन और रासायनिक विश्लेषकों का वास्तविक समय में पता लगाने में सक्षम हैं—जो स्वास्थ्य सेवा, बायोसेफ्टी और औद्योगिक निगरानी में पहुंच को फिर से परिभाषित करते हैं।`
  }
};

const Investors = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Helmet>
        <title>Investors | VENKSEN Private Limited</title>
        <meta name="description" content="Information for investors of VENKSEN Private Limited." />
      </Helmet>
      <div className="content-section">
        <div className="card">
          <h2 className="section-title">{t.title}</h2>
          <p>{t.content}</p>
        </div>
      </div>
    </>
  );
};

export default Investors;