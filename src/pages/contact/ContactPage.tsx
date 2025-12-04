// src/pages/Contact.tsx
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ArrowTopRightOnSquareIcon,
  HeartIcon as HeartIconOutline,
} from '@heroicons/react/24/outline';
import { EnvelopeIcon as EnvelopeIconSolid } from '@heroicons/react/24/solid';
import { MessageCircleReply } from 'lucide-react';
import { useTranslatedContent } from '@/hooks/useTranslatedContent';

export const ContactPage = () => {
  const { t } = useTranslatedContent();
  const contactMethods = [
    {
      icon: '📨',
      title: 'Email',
      description: 'Send me an email and I will reply as soon as possible.',
      value: 'gisela.contactme@gmail.com',
      href: 'mailto:gisela.contactme@gmail.com',
      buttonText: 'Send Email',
      color: 'accent',
      bgGradient: 'bg-gradient-orb-pink',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      description: "Let's connect professionally",
      value: 'linkedin.com/in/giselascarpin',
      href: 'https://linkedin.com/in/giselascarpin',
      buttonText: 'View Profile',
      color: 'sky',
      bgGradient: 'bg-sky-100',
    },
    {
      icon: '🐙',
      title: 'GitHub',
      description: 'Review my projects and contributions',
      value: 'github.com/giselars',
      href: 'https://github.com/giselars',
      buttonText: 'See GitHub',
      color: 'lavender',
      bgGradient: 'bg-lavender-100',
    },
  ];

  const quickLinks = [
    {
      emoji: '📄',
      text: 'Download CV',
      href: '/cv.pdf',
    },
    {
      emoji: '💼',
      text: 'View Portfolio',
      href: '/projects',
    },
    {
      emoji: '📝',
      text: 'Read Blog',
      href: '/blog',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <SectionTitle subtitle={t('contact.subtitle')}>
        {t('contact.title')}
      </SectionTitle>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-6">
          <ChatBubbleLeftRightIcon className="w-12 h-12 text-accent-500 animate-bounce-slow" />
          <SparklesIcon className="w-8 h-8 text-primary-500 animate-pulse" />
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {t('contact.doYouHaveAProject')}
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {t('contact.description')}
          <span className="text-accent-500 ml-1">{t('contact.letsTalk')}</span>
        </p>
      </div>

      {/* Main CTA Card */}
      <Card className="p-8 md:p-12 mb-12 text-center bg-gradient-orb-pink border-accent-200">
        <div className="max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-gradient-button rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
            <EnvelopeIcon className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('contact.card.title')}
          </h3>
          <p className="text-white mb-8 text-lg">
            {t('contact.card.subtitle')}
          </p>

          <a
            href="mailto:gisela.contactme@gmail.com"
            className="inline-flex items-center gap-3 bg-gradient-button text-white px-8 py-4 rounded-full shadow-button hover:shadow-glow transition-all duration-300 text-lg font-semibold hover:scale-105"
          >
            <EnvelopeIconSolid className="w-6 h-6" />
            gisela.contactme@gmail.com
          </a>

          <p className="text-sm text-white mt-6">{t('contact.card.info')} 📧</p>
        </div>
      </Card>

      {/* Contact Methods Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <Card key={index} hover className="p-6 text-center group">
            <div
              className={`w-16 h-16 ${method.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              {typeof method.icon === 'string' ? (
                <span className="text-3xl">{method.icon}</span>
              ) : (
                <method.icon className="w-8 h-8 text-gray-700" />
              )}
            </div>

            <h4 className="text-lg font-bold text-gray-800 mb-2">
              {method.title}
            </h4>
            <p className="text-sm text-gray-600 mb-4">{method.description}</p>

            <a
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={
                method.href.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium group-hover:gap-3 transition-all"
            >
              {method.buttonText}
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </Card>
        ))}
      </div>

      {/* Quick Links */}
      {/* 
      <Card className="p-8 mb-12">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Quick Links
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-2 px-6 py-3 bg-white/80 border-2 border-lavender-200 rounded-full hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 text-gray-700 font-medium"
            >
              <span className="text-xl">{link.emoji}</span>
              {link.text}
            </a>
          ))}
        </div>
      </Card>
       */}

      {/* Availability Card */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-mint-50 border-mint-200">
          <div className="flex items-start gap-4">
            <MessageCircleReply className="w-8 h-8 text-yellow-500 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-800 mb-2">
                {t('contact.availabilityCard.quickResponse.title')}
              </h4>
              <p className="text-sm text-gray-700">
                {t('contact.availabilityCard.quickResponse.description')}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-honey-50 border-honey-200">
          <div className="flex items-start gap-4">
            <HeartIconOutline className="w-8 h-8 text-accent-500 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-800 mb-2">
                {t('contact.availabilityCard.abailableFor.title')}
              </h4>
              <p className="text-sm text-gray-700">
                {t('contact.availabilityCard.abailableFor.description')}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Other RRSS */}
      {/*  
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-4">
          Would you prefer to use a different medium? I am also available on
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://twitter.com/user"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-sky-300 hover:scale-110 transition-all duration-300 shadow-glass"
          >
            <span className="text-xl">𝕏</span>
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-lavender-300 hover:scale-110 transition-all duration-300 shadow-glass"
          >
            <span className="text-xl">💬</span>
          </a>
          <a
            href="https://t.me/user"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-sky-300 hover:scale-110 transition-all duration-300 shadow-glass"
          >
            <span className="text-xl">✈️</span>
          </a>
        </div>
      </div>
      */}
    </div>
  );
};
