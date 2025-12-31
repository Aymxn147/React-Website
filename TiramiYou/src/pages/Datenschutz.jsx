import AccessibilityMenu from "../components/AccessibilityMenu";
import { useLanguage } from '../LanguageContext.jsx'; 
import { translations } from '../translations.js';

function News() {
  const { language } = useLanguage();

  return (
    <div>
      <h1>News</h1>
      <AccessibilityMenu />
    </div>
  );
}

export default News;
