import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  Phone,
  MapPin,
  Clock,
  Home,
  Hammer,
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  Building2,
  Leaf,
  Zap,
  Award,
  Factory,
  ClipboardList
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Carousel } from "./components/ui/carousel";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-start leading-none ${className}`} aria-label="SCHWER BAU Logo">
    <div className="text-2xl font-bold tracking-tighter text-slate-900 flex items-center">
      SCHWER BAU<span className="text-slate-400" aria-hidden="true">-</span>
    </div>
    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.1em] -mt-0.5">
      und Renovierungs GmbH
    </div>
    <div className="flex gap-0.5 mt-1.5 w-full max-w-[140px]" aria-hidden="true">
      {[...Array(10)].map((_, i) => (
        <div key={i} className={`h-[3px] flex-grow ${i % 2 === 0 ? 'bg-rose-600' : 'bg-slate-400'}`} />
      ))}
    </div>
  </div>
);

const SERVICES = [
  {
    title: "Hochbau",
    description: "Wir realisieren anspruchsvolle Neubauprojekte mit Fokus auf Qualität, Effizienz und Langlebigkeit.",
    icon: Building2,
    image: "/img-hochbau.jpg",
    tag: "Hochbau"
  },
  {
    title: "Renovierung & Sanierung",
    description: "Von der Kernsanierung bis zur hochwertigen Renovierung – wir modernisieren Bestandsimmobilien und erhalten wertvolle Bausubstanz.",
    icon: Hammer,
    image: "/img-renovierung.jpg",
    tag: "Renovierung & Sanierung"
  },
  {
    title: "Gewerbe",
    description: "Von Industrie- über Bürogebäude bis hin zu Handelsimmobilien – wir realisieren anspruchsvolle Gewerbeprojekte.",
    icon: Factory,
    image: "/img-tiefbau.jpg",
    tag: "Gewerbe"
  },
  {
    title: "Baumanagement",
    description: "Professionelle Projektsteuerung und Koordination aller Gewerke – von der Planung bis zur schlüsselfertigen Übergabe.",
    icon: ClipboardList,
    image: "/img-schluesselfertig.jpg",
    tag: "Baumanagement"
  }
];

const VALUES = [
  {
    title: "Qualität",
    description: "Höchste Standards in Material und Ausführung sind für uns selbstverständlich.",
    icon: Award
  },
  {
    title: "Nachhaltigkeit",
    description: "Wir bauen für die Zukunft – mit ökologischen Materialien und effizienten Prozessen.",
    icon: Leaf
  },
  {
    title: "Innovation",
    description: "Modernste Bautechnologien und digitale Planungsprozesse (BIM).",
    icon: Zap
  },
  {
    title: "Verlässlichkeit",
    description: "Termintreue und Kostentransparenz sind die Basis unserer Zusammenarbeit.",
    icon: ShieldCheck
  }
];

const STATS = [
  { label: "Jahre Erfahrung", value: "20+" },
  { label: "Abgeschlossene Projekte", value: "450+" },
  { label: "Zufriedene Kunden", value: "100%" },
  { label: "Mitarbeiter", value: "12" }
];

const GALLERY_SLIDES = [
  {
    title: "Bewehrung Dachdecke",
    button: "Projekt anfragen",
    src: "/gallery-01.jpg",
  },
  {
    title: "Terrassenbau mit Überdachung",
    button: "Projekt anfragen",
    src: "/gallery-02.jpg",
  },
  {
    title: "Kellerbodenplatte mit Bewehrung",
    button: "Projekt anfragen",
    src: "/gallery-04.jpg",
  },
  {
    title: "Baggerarbeiten & Erdaushub",
    button: "Projekt anfragen",
    src: "/gallery-05.jpg",
  },
  {
    title: "Bodenplatte mit Dämmung",
    button: "Projekt anfragen",
    src: "/gallery-06.jpg",
  },
  {
    title: "Stahlbeton-Kellergeschoss",
    button: "Projekt anfragen",
    src: "/gallery-07.jpg",
  },
  {
    title: "Dachterrasse – Fertigstellung",
    button: "Projekt anfragen",
    src: "/gallery-08.jpg",
  },
  {
    title: "Pflasterarbeiten & Stützmauer",
    button: "Projekt anfragen",
    src: "/gallery-09.jpg",
  },
  {
    title: "Einfahrt mit Pflastersteinen",
    button: "Projekt anfragen",
    src: "/gallery-10.jpg",
  },
  {
    title: "Rohbau Ziegelmauerwerk",
    button: "Projekt anfragen",
    src: "/gallery-11.jpg",
  },
  {
    title: "Granitplatten – Vorbereitung",
    button: "Projekt anfragen",
    src: "/gallery-12.jpg",
  },
  {
    title: "Granit-Stützmauer – Fertig",
    button: "Projekt anfragen",
    src: "/gallery-13.jpg",
  },
  {
    title: "Rollrasen – Gartengestaltung",
    button: "Projekt anfragen",
    src: "/gallery-14.jpg",
  },
  {
    title: "Kernsanierung Altbau",
    button: "Projekt anfragen",
    src: "/gallery-15.jpg",
  },
];

const ImpressumModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto p-12 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-rose-600 transition-colors"
              aria-label="Impressum schließen"
            >
              <X size={24} />
            </button>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-tighter">Impressum</h2>
                <div className="w-12 h-1 bg-rose-600 mb-8"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 text-slate-600">
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Angaben gemäß § 5 TMG</h3>
                  <p className="font-bold text-slate-900">
                    SCHWER BAU- und Renovierungs GmbH<br />
                    Patronatstraße 22<br />
                    71282 Hemmingen
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Kontakt</h3>
                  <p>
                    Tel.: <a href="tel:0715062296">07150 6296</a><br />
                    Mobil: <a href="tel:01622942035">0162 2942035</a><br />
                    E-Mail: <a href="mailto:info@schwer-bau.de">info@schwer-bau.de</a>
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Vertreten durch</h3>
                  <p className="font-bold text-slate-900">Sami Arslan</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Registereintrag</h3>
                  <p>
                    Amtsgericht Stuttgart<br />
                    Registernummer: HRB 202328
                  </p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-slate-100 text-xs text-slate-400 leading-relaxed space-y-4">
                <p>
                  <strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  <strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DatenschutzModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-12 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-rose-600 transition-colors"
              aria-label="Datenschutz schließen"
            >
              <X size={24} />
            </button>
            
            <div className="space-y-8 text-slate-600 text-sm leading-relaxed">
              <div>
                <h2 className="text-xl sm:text-3xl font-bold text-slate-900 mb-6 uppercase tracking-tighter hyphens-auto">Datenschutzerklärung</h2>
                <div className="w-12 h-1 bg-rose-600 mb-8"></div>
              </div>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">1. Datenschutz auf einen Blick</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">2. Verantwortliche Stelle</h3>
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
                  <strong>SCHWER BAU- und Renovierungs GmbH</strong><br />
                  Patronatstraße 22<br />
                  71282 Hemmingen<br />
                  E-Mail: info@schwer-bau.de
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">3. Datenerfassung auf dieser Website</h3>
                <p><strong>Hosting</strong></p>
                <p>
                  Wir hosten unsere Website bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Vercel erfasst automatisch Server-Log-Dateien (IP-Adresse, Browsertyp, Betriebssystem, Referrer URL, Zeitstempel). Dies ist technisch notwendig, um die Website stabil und sicher anzuzeigen (Art. 6 Abs. 1 lit. f DSGVO). Die Datenübertragung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln. Mit Vercel besteht ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO.
                </p>
                <p><strong>Cookies</strong></p>
                <p>
                  Unsere Website verwendet ausschließlich technisch notwendige Cookies, um die Funktionalität der Seite zu gewährleisten (z. B. Speicherung Ihrer Cookie-Einstellungen). Diese Cookies erfordern keine Einwilligung (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">4. Google Maps (Iframe-Einbindung)</h3>
                <p>
                  Diese Website bindet Karten des Dienstes Google Maps per Iframe ein. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p>
                  Google Maps wird nur geladen, wenn Sie dem Einsatz über unser Cookie-Banner zugestimmt haben. Nach Ihrer Einwilligung stellt Ihr Browser eine direkte Verbindung zu den Servern von Google her. Dabei wird Ihre IP-Adresse sowie Informationen über Ihren Browser und Ihr Betriebssystem an Google übertragen und in der Regel auf Servern in den USA gespeichert. Auf diese Datenübertragung haben wir keinen Einfluss.
                </p>
                <p>
                  Die Nutzung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die Einwilligung kann jederzeit mit Wirkung für die Zukunft über unsere Cookie-Einstellungen widerrufen werden.
                </p>
                <p>
                  Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <strong>https://policies.google.com/privacy</strong>
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">5. WhatsApp</h3>
                <p>
                  Auf dieser Website ist ein Link zum Messenger-Dienst WhatsApp eingebunden. Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland (Teil des Meta-Konzerns).
                </p>
                <p>
                  Wenn Sie auf den WhatsApp-Link klicken, werden Sie zur WhatsApp-App oder -Website weitergeleitet. Eine Datenübertragung an WhatsApp/Meta findet erst durch Ihren Klick statt. Wir haben keinen Einfluss auf die Datenverarbeitung durch WhatsApp. Weitere Informationen finden Sie in der Datenschutzerklärung von WhatsApp: <strong>https://www.whatsapp.com/legal/privacy-policy</strong>
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">6. Ihre Rechte</h3>
                <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO)</li>
                  <li><strong>Recht auf Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
                  <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
                  <li><strong>Recht auf Einschränkung</strong> der Verarbeitung (Art. 18 DSGVO)</li>
                  <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                  <li><strong>Widerspruchsrecht</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
                  <li><strong>Recht auf Widerruf</strong> einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
                </ul>
                <p>
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <strong>info@schwer-bau.de</strong>
                </p>
                <p><strong>Beschwerderecht bei der Aufsichtsbehörde</strong></p>
                <p>
                  Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren (Art. 77 DSGVO). Zuständige Aufsichtsbehörde für Baden-Württemberg ist:<br />
                  Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
                  Königstraße 10a, 70173 Stuttgart<br />
                  <strong>https://www.baden-wuerttemberg.datenschutz.de</strong>
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CookieSettingsModal = ({
  isOpen,
  onClose,
  settings,
  onSave
}: {
  isOpen: boolean;
  onClose: () => void;
  settings: { essential: boolean; maps: boolean; analytics: boolean; marketing: boolean };
  onSave: (settings: { essential: boolean; maps: boolean; analytics: boolean; marketing: boolean }) => void;
}) => {
  const [localSettings, setLocalSettings] = useState(settings);

  useEffect(() => {
    if (isOpen) {
      setLocalSettings(settings);
    }
  }, [isOpen, settings]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white w-full max-w-lg p-10 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-tighter">Cookie-Einstellungen</h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-bold text-slate-900 text-sm uppercase tracking-tight">Essenziell</p>
                  <p className="text-xs text-slate-500">Notwendig für die Grundfunktion der Website.</p>
                </div>
                <div className="w-12 h-6 bg-rose-600 rounded-full relative opacity-50 cursor-not-allowed">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-slate-100 rounded-lg">
                <div>
                  <p className="font-bold text-slate-900 text-sm uppercase tracking-tight">Google Maps</p>
                  <p className="text-xs text-slate-500">Zeigt unseren Standort auf einer interaktiven Karte. Dabei wird Ihre IP-Adresse an Google (USA) übertragen.</p>
                </div>
                <button
                  onClick={() => setLocalSettings(prev => ({ ...prev, maps: !prev.maps }))}
                  className={`w-12 h-6 rounded-full relative flex-shrink-0 transition-colors ${localSettings.maps ? 'bg-rose-600' : 'bg-slate-200'}`}
                  aria-label="Google Maps ein- oder ausschalten"
                >
                  <motion.div
                    animate={{ x: localSettings.maps ? 24 : 4 }}
                    className="absolute top-1 left-0 w-4 h-4 bg-white rounded-full"
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border border-slate-100 rounded-lg">
                <div>
                  <p className="font-bold text-slate-900 text-sm uppercase tracking-tight">Analyse</p>
                  <p className="text-xs text-slate-500">Helfen Sie uns, die Website zu verbessern.</p>
                </div>
                <button
                  onClick={() => setLocalSettings(prev => ({ ...prev, analytics: !prev.analytics }))}
                  className={`w-12 h-6 rounded-full relative flex-shrink-0 transition-colors ${localSettings.analytics ? 'bg-rose-600' : 'bg-slate-200'}`}
                >
                  <motion.div
                    animate={{ x: localSettings.analytics ? 24 : 4 }}
                    className="absolute top-1 left-0 w-4 h-4 bg-white rounded-full"
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border border-slate-100 rounded-lg">
                <div>
                  <p className="font-bold text-slate-900 text-sm uppercase tracking-tight">Marketing</p>
                  <p className="text-xs text-slate-500">Für personalisierte Angebote und Werbung.</p>
                </div>
                <button
                  onClick={() => setLocalSettings(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className={`w-12 h-6 rounded-full relative flex-shrink-0 transition-colors ${localSettings.marketing ? 'bg-rose-600' : 'bg-slate-200'}`}
                >
                  <motion.div
                    animate={{ x: localSettings.marketing ? 24 : 4 }}
                    className="absolute top-1 left-0 w-4 h-4 bg-white rounded-full"
                  />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => onSave(localSettings)}
                className="flex-grow py-4 bg-rose-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-rose-700 transition-all"
              >
                Speichern
              </button>
              <button
                onClick={onClose}
                className="px-6 py-4 border border-slate-200 text-slate-400 font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-all"
              >
                Abbrechen
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CookieBanner = ({
  onAcceptAll,
  onAcceptEssential,
  onOpenSettings
}: {
  onAcceptAll: () => void;
  onAcceptEssential: () => void;
  onOpenSettings: () => void;
}) => {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-6 right-6 z-[90] md:left-auto md:max-w-md"
    >
      <div className="bg-white p-8 shadow-2xl border border-slate-100">
        <div className="flex items-center gap-4 mb-4 text-rose-600">
          <ShieldCheck size={24} />
          <h3 className="font-bold uppercase tracking-widest text-xs">Datenschutz-Hinweis</h3>
        </div>
        <p className="text-slate-500 text-xs leading-relaxed mb-8">
          Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Diese Seite bindet Google Maps per Iframe ein – dabei wird Ihre IP-Adresse an Google übertragen. Weitere Infos in unserer Datenschutzerklärung.
        </p>
        <div className="flex flex-col gap-3">
          <button 
            onClick={onAcceptAll}
            className="w-full py-4 bg-rose-600 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-rose-700 transition-all"
          >
            Alle akzeptieren
          </button>
          <div className="flex gap-3">
            <button 
              onClick={onOpenSettings}
              className="flex-grow py-3 border border-slate-200 text-slate-600 font-bold uppercase tracking-widest text-[9px] hover:bg-slate-50 transition-all"
            >
              Einstellungen
            </button>
            <button
              onClick={onAcceptEssential}
              className="flex-grow py-3 border border-slate-200 text-slate-400 font-bold uppercase tracking-widest text-[9px] hover:bg-slate-50 transition-all"
            >
              Nur essenzielle
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<{
    essential: boolean;
    maps: boolean;
    analytics: boolean;
    marketing: boolean;
    decided: boolean;
  }>(() => {
    const saved = localStorage.getItem('schwer_bau_cookie_consent');
    if (saved) {
      const parsed = JSON.parse(saved);
      return { essential: true, maps: false, analytics: false, marketing: false, decided: false, ...parsed };
    }
    return { essential: true, maps: false, analytics: false, marketing: false, decided: false };
  });

  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const saveConsent = (settings: { essential: boolean; maps: boolean; analytics: boolean; marketing: boolean }) => {
    const newConsent = { ...settings, decided: true };
    setCookieConsent(newConsent);
    localStorage.setItem('schwer_bau_cookie_consent', JSON.stringify(newConsent));
    setIsCookieSettingsOpen(false);
  };

  const acceptAll = () => {
    saveConsent({ essential: true, maps: true, analytics: true, marketing: true });
  };

  const acceptEssential = () => {
    saveConsent({ essential: true, maps: false, analytics: false, marketing: false });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-rose-100 selection:text-rose-900">
        
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white border-b border-slate-200 py-4" : "bg-transparent py-6"}`}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <a href="#home" aria-label="Zur Startseite scrollen" className="block">
                <div className="bg-white p-2 rounded-sm shadow-sm">
                  <Logo />
                </div>
              </a>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {[
                { label: 'Startseite', href: '#home' },
                { label: 'Leistungen', href: '#leistungen' },
                { label: 'Über uns', href: '#überuns' },
                { label: 'Galerie', href: '#galerie' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${scrolled ? "text-slate-600 hover:text-rose-600" : "text-slate-200 hover:text-white"}`}
                  aria-label={`Gehe zu ${item.label}`}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="px-6 py-3 bg-rose-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-rose-700 transition-all" aria-label="Kontakt aufnehmen">
                Kontakt
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`md:hidden p-2 transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}
              aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 md:hidden pt-24 px-4 bg-slate-50"
            >
              <div className="space-y-6">
                {[
                  { label: 'Startseite', href: '#home' },
                  { label: 'Leistungen', href: '#leistungen' },
                  { label: 'Über uns', href: '#überuns' },
                  { label: 'Galerie', href: '#galerie' }
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-4xl font-bold text-slate-900 hover:text-rose-600 transition-colors uppercase tracking-tighter"
                    aria-label={`Gehe zu ${item.label}`}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-8 border-t border-slate-200">
                  <a href="#contact" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between w-full p-6 bg-rose-600 text-white text-xl font-bold uppercase tracking-widest" aria-label="Projektanfrage stellen">
                    Projekt anfragen
                    <ArrowRight size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
          <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
            <img
              src="/img-hero.jpg"
              alt="Baustelle der SCHWER BAU GmbH in Hemmingen"
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-rose-600 text-white text-[11px] font-bold tracking-[0.4em] uppercase mb-12">
                Tradition & Handwerk
              </div>
              <h1 className="text-5xl md:text-9xl font-bold text-white leading-[0.9] mb-12 tracking-tighter uppercase">
                Bauen mit <br />
                <span className="text-rose-600">Vertrauen</span>.
              </h1>
              <p className="text-xl text-slate-300 mb-16 leading-relaxed max-w-xl border-l-4 border-rose-600 pl-8">
                Seit 2006 realisieren wir Bauprojekte mit Leidenschaft und schwäbischer Gründlichkeit. Ehrlich, verlässlich und immer auf Augenhöhe mit unseren Kunden.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#leistungen" className="px-10 py-5 bg-rose-600 text-white font-bold uppercase tracking-widest hover:bg-rose-700 transition-all flex items-center gap-3" aria-label="Unsere Leistungen ansehen">
                  Unsere Leistungen
                  <ArrowRight size={18} />
                </a>
                <a href="#überuns" className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all" aria-label="Mehr über uns erfahren">
                  Über uns
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Side Label */}
          <div className="absolute right-10 bottom-40 hidden xl:block">
            <div className="rotate-90 origin-right text-[10px] font-bold tracking-[0.5em] text-white/30 uppercase">
              Schwer Bau- und Renovierung GmbH
            </div>
          </div>

          {/* Stats Strip */}
          <div className="absolute bottom-0 left-0 right-0 z-10 bg-slate-950/80 backdrop-blur-sm border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className={`py-6 px-4 md:px-8 text-center group ${i % 2 === 0 && i < STATS.length - 1 ? 'border-r border-white/5' : ''} ${i % 2 !== 0 && i < STATS.length - 1 ? 'md:border-r border-white/5' : ''} ${i < 2 ? 'border-b border-white/5 md:border-b-0' : ''}`}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter group-hover:text-rose-600 transition-colors">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="leistungen" className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
              <div className="max-w-2xl">
                <span className="text-rose-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Kompetenzen</span>
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tighter uppercase">
                  Unsere <br />
                  <span className="text-rose-600">Leistungen</span>.
                </h2>
              </div>
              <p className="text-slate-500 max-w-sm text-lg border-l-2 border-rose-600 pl-8">
                Wir bieten ganzheitliche Lösungen für den modernen Hoch- und Gewerbebau.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white border border-slate-200 flex flex-col h-full hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`Leistung: ${service.title} - SCHWER BAU GmbH`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-widest">
                        {service.tag}
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-6 text-rose-600">
                      <service.icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight group-hover:text-rose-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    <a href="#contact" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 group-hover:text-rose-600 transition-all" aria-label={`Projektanfrage für ${service.title}`}>
                      Projekt anfragen <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="überuns" className="py-24 md:py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-start">
              <div className="relative lg:sticky lg:top-28">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-square bg-slate-200 overflow-hidden"
                >
                  <img
                    src="/img-ueber-uns.jpg"
                    alt="Handwerker der SCHWER BAU GmbH bei der Arbeit"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </motion.div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-rose-600 flex items-center justify-center text-white p-8 text-center hidden lg:flex">
                  <div className="text-sm font-bold uppercase tracking-[0.2em]">Ehrliches Bauen. Seit 2006.</div>
                </div>
              </div>

              <div>
                <span className="text-rose-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Das Unternehmen</span>
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-10 tracking-tighter uppercase">
                  Qualität ist unser <br />
                  <span className="text-rose-600">Fundament</span>.
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed mb-12">
                  <p className="text-lg font-medium text-slate-900">
                    SCHWER BAU steht für Verlässlichkeit, Kompetenz und höchste handwerkliche Präzision in der Region Hemmingen.
                  </p>
                  <p>
                    Als inhabergeführtes Unternehmen begleiten wir unsere Kunden bei der Realisierung ihrer Bauvorhaben. Unser Anspruch ist es, durch ehrliches Handwerk und innovative Lösungen bleibende Werte zu schaffen.
                  </p>
                </div>
                <div className="grid grid-cols-2 border border-slate-200">
                  {VALUES.map((value, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`p-6 flex gap-5 items-start group hover:bg-white transition-colors ${i % 2 === 0 ? 'border-r border-slate-200' : ''} ${i < 2 ? 'border-b border-slate-200' : ''}`}
                    >
                      <div className="w-10 h-10 bg-slate-50 flex items-center justify-center text-rose-600 flex-shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                        <value.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold mb-1 uppercase tracking-tight">{value.title}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galerie" className="py-24 md:py-32 bg-slate-950 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <div>
                <span className="text-rose-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Referenzen</span>
                <h2 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tighter uppercase">
                  Unsere <br />
                  <span className="text-rose-600">Projekte</span>.
                </h2>
              </div>
              <p className="text-slate-400 max-w-sm text-lg border-l-2 border-rose-600 pl-8">
                Einblicke in abgeschlossene und laufende Bauprojekte – von der Bodenplatte bis zur schlüsselfertigen Übergabe.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden w-full pb-20">
            <Carousel slides={GALLERY_SLIDES} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="bg-white border border-slate-200 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-20">
                  <span className="text-rose-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Jetzt starten</span>
                  <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tighter uppercase">
                    Bereit für Ihr <br />
                    <span className="text-rose-600">Projekt</span>?
                  </h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-12 border-l-2 border-rose-600 pl-6">
                    Kontaktieren Sie uns unverbindlich – wir beraten Sie persönlich und entwickeln gemeinsam die beste Lösung für Ihr Vorhaben.
                  </p>
                  
                  <div className="space-y-12">
                    <div className="flex items-start gap-8">
                      <div className="w-14 h-14 bg-slate-50 flex items-center justify-center text-rose-600 border border-slate-100">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3">Zentrale</p>
                        <div className="flex flex-col gap-2">
                          <a href="tel:01622942035" className="text-2xl text-slate-900 hover:text-rose-600 transition-colors font-bold" aria-label="Rufen Sie uns an unter 0162 2942035">0162 2942035</a>
                          <a 
                            href="https://wa.me/491622942035" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors text-sm font-bold uppercase tracking-widest"
                            aria-label="Kontaktieren Sie uns über WhatsApp"
                          >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-8">
                      <div className="w-14 h-14 bg-slate-50 flex items-center justify-center text-rose-600 border border-slate-100">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3">Standort</p>
                        <p className="text-2xl text-slate-900 font-bold">Patronatstraße 22, <br />71282 Hemmingen</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-8">
                      <div className="w-14 h-14 bg-slate-50 flex items-center justify-center text-rose-600 border border-slate-100">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3">Erreichbarkeit</p>
                        <p className="text-2xl text-slate-900 font-bold">Mo - Fr: 08:00 - 18:00 Uhr</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-20 pt-12 border-t border-slate-100">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-slate-200 overflow-hidden flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" className="w-full h-full text-slate-400">
                          <rect width="80" height="80" fill="#e2e8f0"/>
                          <circle cx="40" cy="30" r="14" fill="#94a3b8"/>
                          <ellipse cx="40" cy="68" rx="22" ry="16" fill="#94a3b8"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-900 font-bold text-xl uppercase tracking-tight">Sami Arslan</p>
                        <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Geschäftsführung</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[350px] sm:h-[450px] lg:h-auto overflow-hidden bg-slate-100">
                  {cookieConsent.maps ? (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8687.043571324855!2d9.038587577460685!3d48.86646560013692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799d796548ba5b7%3A0xe8c760768f995ca!2sSchwer%20Bau-%20und%20Renovierungs%20GmbH!5e1!3m2!1sde!2sde!4v1774013999333!5m2!1sde!2sde"
                      width="100%"
                      height="100%"
                      style={{ border: 0, display: 'block', minHeight: '600px' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Standort Schwer Bau- und Renovierungs GmbH"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 p-10 text-center gap-6">
                      <div className="w-16 h-16 bg-slate-200 flex items-center justify-center">
                        <MapPin size={32} className="text-slate-400" />
                      </div>
                      <div className="max-w-xs">
                        <p className="font-bold text-slate-900 uppercase tracking-tight mb-2">Karte nicht geladen</p>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Um die interaktive Karte anzuzeigen, stimmen Sie der Übertragung Ihrer IP-Adresse an Google zu.
                        </p>
                      </div>
                      <button
                        onClick={() => saveConsent({ ...cookieConsent, maps: true })}
                        className="px-8 py-4 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-rose-700 transition-all"
                      >
                        Karte laden
                      </button>
                      <button
                        onClick={() => setIsCookieSettingsOpen(true)}
                        className="text-[10px] text-slate-400 uppercase tracking-widest font-bold hover:text-slate-600 transition-colors"
                      >
                        Cookie-Einstellungen
                      </button>
                    </div>
                  )}
                  {cookieConsent.maps && (
                    <div className="absolute bottom-12 left-12 z-10">
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Patronatstraße+22,+71282+Hemmingen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-5 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-rose-700 transition-all flex items-center gap-4"
                        aria-label="Route zu unserem Standort berechnen"
                      >
                        <MapPin size={20} />
                        Route berechnen
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 md:gap-20 mb-24">
              <div className="max-w-md">
                <div className="flex items-center gap-3 mb-10">
                  <div className="bg-white p-4 rounded-sm shadow-md inline-block">
                    <Logo />
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Ihr Partner für anspruchsvolle Architektur und nachhaltiges Bauen. Wir schaffen bleibende Werte durch ehrliches Handwerk und innovative Lösungen.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-20">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-10">Navigation</h4>
                  <ul className="space-y-6 text-sm text-slate-400">
                    <li><a href="#home" className="hover:text-rose-600 transition-colors uppercase tracking-widest font-bold" aria-label="Zur Startseite">Startseite</a></li>
                    <li><a href="#leistungen" className="hover:text-rose-600 transition-colors uppercase tracking-widest font-bold" aria-label="Unsere Leistungen">Leistungen</a></li>
                    <li><a href="#überuns" className="hover:text-rose-600 transition-colors uppercase tracking-widest font-bold" aria-label="Mehr über uns">Über uns</a></li>
                    <li><a href="#galerie" className="hover:text-rose-600 transition-colors uppercase tracking-widest font-bold" aria-label="Unsere Galerie">Galerie</a></li>
                    <li><a href="#contact" className="hover:text-rose-600 transition-colors uppercase tracking-widest font-bold" aria-label="Kontakt aufnehmen">Kontakt</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-10">Rechtliches</h4>
                  <ul className="space-y-6 text-sm text-slate-400">
                    <li><button onClick={() => setIsImpressumOpen(true)} className="hover:text-rose-600 transition-colors uppercase tracking-widest font-bold" aria-label="Impressum ansehen">Impressum</button></li>
                    <li><button onClick={() => setIsDatenschutzOpen(true)} className="hover:text-rose-600 transition-colors uppercase tracking-widest font-bold" aria-label="Datenschutzerklärung ansehen">Datenschutz</button></li>
                    <li><button onClick={() => setIsCookieSettingsOpen(true)} className="hover:text-rose-600 transition-colors uppercase tracking-widest font-bold" aria-label="Cookie-Einstellungen verwalten">Cookies</button></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
              <p>© {new Date().getFullYear()} SCHWER BAU- und Renovierungs GmbH</p>
              <div className="flex gap-12">
                <span>Handwerk aus Leidenschaft</span>
                <span>Hemmingen, Deutschland</span>
              </div>
            </div>
          </div>
        </footer>

        <ImpressumModal isOpen={isImpressumOpen} onClose={() => setIsImpressumOpen(false)} />
        <DatenschutzModal isOpen={isDatenschutzOpen} onClose={() => setIsDatenschutzOpen(false)} />
        <CookieSettingsModal 
          isOpen={isCookieSettingsOpen} 
          onClose={() => setIsCookieSettingsOpen(false)} 
          settings={cookieConsent}
          onSave={saveConsent}
        />
        {!cookieConsent.decided && (
          <CookieBanner onAcceptAll={acceptAll} onAcceptEssential={acceptEssential} onOpenSettings={() => setIsCookieSettingsOpen(true)} />
        )}
    </div>
  );
}
