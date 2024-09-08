// app/providers.tsx
"use client"; // Since this will be a client component

import { store } from '@/redux/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}
