import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getActiveProfile, profiles } from './config/profileData';
import IntroSplash from './components/IntroSplash';
import CardHeader from './components/CardHeader';
import ActionButtons from './components/ActionButtons';
import ContactDetails from './components/ContactDetails';
import ServicesList from './components/ServicesList';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import ShareModal from './components/ShareModal';
import PhysicalCardModal from './components/PhysicalCardModal';
import CallModal from './components/CallModal';

export default function App() {
  const [profile, setProfile] = useState(() => getActiveProfile());
  const [hasLoadedIntro, setHasLoadedIntro] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);

  // Listen to popstate or hash changes for slug-based switching
  useEffect(() => {
    const handleLocationChange = () => {
      setProfile(getActiveProfile());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleManualProfileSelect = (key) => {
    if (profiles[key]) {
      setProfile(profiles[key]);
      const newUrl = `${window.location.pathname}?profile=${key}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
    }
  };

  const handleCallAction = () => {
    if (profile.contact.secondaryPhone) {
      setShowCallModal(true);
    } else {
      window.location.href = `tel:${profile.contact.primaryPhoneClean}`;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-start sm:py-8 sm:px-4 relative overflow-x-hidden">
      {/* 1. Fast logo reveal intro animation */}
      {!hasLoadedIntro && (
        <IntroSplash
          profile={profile}
          onComplete={() => setHasLoadedIntro(true)}
        />
      )}

      {/* 2. Soft Ambient Lighting & Grid Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Soft elegant blue and indigo ambient spots */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-100/60 blur-[130px]" />
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-100/50 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-50/70 blur-[140px]" />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.4] bg-light-pattern" />
      </div>

      {/* 3. Main Business Card Container (Mobile-first, max-w-[420px]) */}
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[420px] min-h-screen sm:min-h-0 sm:rounded-[32px] card-surface relative z-10 flex flex-col justify-between overflow-hidden"
      >
        {/* Top Section */}
        <div>
          <CardHeader
            profile={profile}
            onOpenShare={() => setShowShareModal(true)}
            onOpenPhysicalCard={() => setShowCardModal(true)}
          />

          <ActionButtons
            profile={profile}
            onOpenShare={() => setShowShareModal(true)}
            onSelectCall={handleCallAction}
          />

          <ContactDetails profile={profile} />

          <ServicesList profile={profile} />

          <SocialLinks profile={profile} />
        </div>

        {/* Footer */}
        <Footer
          profile={profile}
          onSelectProfile={handleManualProfileSelect}
        />
      </motion.main>

      {/* 4. Modals */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        profile={profile}
      />

      <PhysicalCardModal
        isOpen={showCardModal}
        onClose={() => setShowCardModal(false)}
        profile={profile}
      />

      <CallModal
        isOpen={showCallModal}
        onClose={() => setShowCallModal(false)}
        profile={profile}
      />
    </div>
  );
}
