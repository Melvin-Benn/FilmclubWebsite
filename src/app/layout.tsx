import { Metadata } from 'next';
import * as React from 'react';
import 'src/style.css';

export const metadata: Metadata = {
  title: 'Filmclub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
