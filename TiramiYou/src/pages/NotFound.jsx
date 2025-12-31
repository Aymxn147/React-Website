import { useLanguage } from '../LanguageContext.jsx'; 
import { translations } from '../translations.js';

function NotFound() {
  const { language } = useLanguage();

  return <h1>{translations[language].fnf} (404)</h1>;
}

export default NotFound;
