import { Heart, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-50 via-white to-pink-50 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-sm text-gray-600 flex items-center gap-1.5">
            © 2024 TiramiYou. Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> in Frankfurt
          </p>

          {/* Social Media */}
          <div className="flex gap-4">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/tirami.you/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm font-semibold">@tirami.you</span>
            </a>

            {/* TikTok mit React‑Icons */}
<a
  href="https://www.tiktok.com/@tirami.you/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors group"
>
  {/* TikTok Icon: normal Tiktok-02, auf Hover Tiktok-03 */}
  <img
    src="/images/tiktok-02.svg"
    alt="TikTok"
    className="w-5 h-5 group-hover:hidden"
  />
  <img
    src="/images/tiktok-03.svg"
    alt="TikTok"
    className="w-5 h-5 hidden group-hover:block"
  />

  <span className="text-sm font-semibold">@tirami.you</span>
</a>

          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#impressum" className="hover:text-pink-500 transition-colors">Impressum</a>
            <a href="#datenschutz" className="hover:text-pink-500 transition-colors">Datenschutz</a>
            <a href="#agb" className="hover:text-pink-500 transition-colors">AGB</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
