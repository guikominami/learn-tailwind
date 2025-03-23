import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

export type LanguageType = {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
};

export const LanguageContext = createContext<LanguageType>({
  language: 'portuguese',
  setLanguage: () => {},
});

export const LanguageContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>('portuguese');

  const ctxValue = {
    language: language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={ctxValue}>
      {children}
    </LanguageContext.Provider>
  );
};
