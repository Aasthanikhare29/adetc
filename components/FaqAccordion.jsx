'use client';

import { useState } from 'react';

export default function FaqAccordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <details key={i} className="post-faq-item" open={isOpen}>
            <summary
              onClick={(e) => {
                e.preventDefault();
                setOpen(isOpen ? null : i);
              }}
            >
              {item.q}
            </summary>
            <p>{item.a}</p>
          </details>
        );
      })}
    </>
  );
}
