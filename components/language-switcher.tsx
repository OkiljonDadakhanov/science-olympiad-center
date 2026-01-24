"use client"

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { locales } from '@/i18n/request';

const languageConfig: Record<string, { name: string; flag: JSX.Element }> = {
  uz: {
    name: "O'zbek",
    flag: (
      <svg className="w-5 h-4 rounded-sm" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1eb53a" d="M0 320h640v160H0z"/>
        <path fill="#0099b5" d="M0 0h640v160H0z"/>
        <path fill="#ce1126" d="M0 153.6h640v172.8H0z"/>
        <path fill="#fff" d="M0 163.2h640v153.6H0z"/>
        <circle fill="#fff" cx="134" cy="80" r="40"/>
        <circle fill="#0099b5" cx="148" cy="80" r="32"/>
        <g fill="#fff" transform="translate(196 80)">
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2].slice(0, row === 0 ? 1 : row === 1 ? 2 : row === 2 ? 3 : row === 3 ? 3 : 3).map((col) => (
              <circle key={`${row}-${col}`} r="6" cx={col * 18 - (row === 0 ? 0 : row === 1 ? 9 : row === 2 ? 18 : row === 3 ? 18 : 18)} cy={row * 16 - 32}/>
            ))
          )}
        </g>
      </svg>
    ),
  },
  en: {
    name: 'English',
    flag: (
      <svg className="w-5 h-4 rounded-sm" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <path fill="#012169" d="M0 0h640v480H0z"/>
        <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
        <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
        <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
        <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
      </svg>
    ),
  },
  ru: {
    name: 'Русский',
    flag: (
      <svg className="w-5 h-4 rounded-sm" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" d="M0 0h640v160H0z"/>
        <path fill="#0039a6" d="M0 160h640v160H0z"/>
        <path fill="#d52b1e" d="M0 320h640v160H0z"/>
      </svg>
    ),
  },
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as 'uz' | 'en' | 'ru' });
  };

  const currentLang = languageConfig[locale] || languageConfig['uz'];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 h-9 px-3">
          {currentLang.flag}
          <span className="hidden sm:inline text-sm font-medium">{currentLang.name}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {locales.map((loc) => {
          const lang = languageConfig[loc];
          return (
            <DropdownMenuItem
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`gap-3 cursor-pointer ${locale === loc ? 'bg-accent' : ''}`}
            >
              {lang.flag}
              <span>{lang.name}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
