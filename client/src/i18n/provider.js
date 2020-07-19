import React from "react";
import { IntlProvider } from "react-intl";

import { LOCALES } from "./locales";

const Provider = ({ children, locale }) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);
