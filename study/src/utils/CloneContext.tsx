import React, { createContext } from 'react';

export type CloneContextType = {
  enabledElements: EnabledElements;
  setEnabledElements: React.Dispatch<React.SetStateAction<EnabledElements>>;
  defaultStyling: Styling;
  styling: Styling;
  setCloneDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  hideText: boolean;
  setHideText: React.Dispatch<React.SetStateAction<boolean>>;
};

export type EnabledElements = {
  [key: string]: boolean;
};

export type Styling = {
  [key: string]: {
    var: string;
    value: string;
  };
};

const CloneContext = createContext<CloneContextType | undefined>(undefined);
export default CloneContext;

export function useCloneContext() {
  const context = React.useContext(CloneContext);
  if (!context) {
    throw new Error(
      'useCloneContext must be used within a CloneContext.Provider',
    );
  }
  return context;
}
