import AccessibilityMenu from "../components/AccessibilityMenu";
import { useLanguage } from '../LanguageContext.jsx'; 
import { translations } from '../translations.js';

export default function Impressum() {
    const { language } = useLanguage();

    return (
        <section className="mt-10 text-center">
            <h3 className="text-sm font-medium mb-1">Bildnachweise</h3>

            <p className="text-xs text-gray-500">
                Accessibility-Icon von{" "}
                <a
                    href="https://www.freepik.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-700"
                >
                    Freepik
                </a>
            </p>
            <AccessibilityMenu />
        </section>
    );
}
