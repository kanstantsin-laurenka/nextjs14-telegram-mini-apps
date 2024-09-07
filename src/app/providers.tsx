import { NextUIProvider } from '@nextui-org/react';
import { SDKProvider } from '@telegram-apps/sdk-react';

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextUIProvider>
      <SDKProvider acceptCustomStyles={true} debug={true}>
        {children}
      </SDKProvider>
    </NextUIProvider>
  );
}
