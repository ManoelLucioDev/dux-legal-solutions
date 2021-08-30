import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './locales';
import messages from './messages';

interface ProviderProps {
  locale: string;
}

const Provider : React.FC<ProviderProps> = ({children, locale = LOCALES.PORTUGUESE}) => {
    return (
    <IntlProvider
        locale={locale}
        textComponent={Fragment}
        messages={messages[locale]}
        >
        {children}
    </IntlProvider>
    );
}
export default Provider;

