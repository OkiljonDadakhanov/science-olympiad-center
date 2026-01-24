import { Link as NextLink } from '@/i18n/routing';
import { ComponentProps } from 'react';

export function LocaleLink(props: ComponentProps<typeof NextLink>) {
  return <NextLink {...props} />;
}

