import { useTranslation } from 'react-i18next';

export interface NavLinkItem {
  to: string;
  labelKey: string;
  end?: boolean;
}

export const useNavigation = () => {
  const { t } = useTranslation();

  const navLinks: NavLinkItem[] = [
    { to: '/', labelKey: 'nav.home', end: true },
    { to: '/about', labelKey: 'nav.about' },
    { to: '/projects', labelKey: 'nav.projects' },
    { to: '/contact', labelKey: 'nav.contact' },
  ];

  // Returns the links with the translations applied.
  const translatedNavLinks = navLinks.map((link) => ({
    ...link,
    label: t(link.labelKey),
  }));

  return {
    navLinks: translatedNavLinks,
  };
};
