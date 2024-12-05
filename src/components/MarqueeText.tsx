import React from 'react';

export function MarqueeText() {
  const text = "SYNCHRONIZED ARCHIVE ";
  const repeatedText = text.repeat(20);

  return (
    <div className="marquee">
      <div className="marquee__inner">
        <span className="text-sm tracking-wider opacity-50">{repeatedText}</span>
      </div>
    </div>
  );
}