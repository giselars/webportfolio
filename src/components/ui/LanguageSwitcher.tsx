import { useTranslation } from 'react-i18next';
import { LanguageIcon } from '@heroicons/react/24/outline';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 hover:bg-white shadow-glass hover:shadow-card transition-all duration-300 text-gray-700 hover:text-primary-600 cursor-pointer"
      aria-label="Change language"
    >
      <LanguageIcon className="w-5 h-5" />
      <span className="text-sm font-medium uppercase">
        {i18n.language === 'en' ? 'ES' : 'EN'}
      </span>
    </button>
  );
};
