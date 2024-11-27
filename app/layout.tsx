"use client";
import '@/app/ui/global.css';
import React, { useState } from 'react';
import { hin115_font, ing115_font } from '@/fonts';
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  const [selectedFont, setSelectedFont] = useState(hin115_font);
  const handleFontChange = (font: any) => { setSelectedFont(font); };
  const getFontClass = (sval:string) => {
    switch (sval) {
      case '0': return ing115_font ;
      case '1': return hin115_font ;
      default: return ing115_font ;
    }
  }
  return (
    <html lang="en">
        <body className={`${selectedFont.className} antialiased`}>
        <div>
          {/* <select onChange={(e) => handleFontChange(e.target.value === '0' ? ing115_font : hin115_font)}> */}
          <select onChange={(e) => handleFontChange(getFontClass(e.target.value))}>
            <option value="0">ing115 font</option>
            <option value="1">hin115 font</option>
          </select>
        </div>
          {children}
        </body>
    </html>
  );
}
