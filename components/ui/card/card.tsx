// 'use client';

// import React, { ReactNode, useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// interface Props {
//   title: string;
//   description?: string;
//   footer?: ReactNode;
//   children: ReactNode;
// }

// export default function Card({ title, description, footer, children }: Props) {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize(); // set initially
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const cardContent = (
//     <div className="flex flex-col w-full max-w-md gap-5 px-6 py-6 rounded-2xl shadow-xl bg-primary-line">
//       <div className="text-center space-y-1">
//         <h3 className="text-3xl font-semibold text-canvas-text-contrast">{title}</h3>
//         <p className="text-canvas-on-canvas">{description}</p>
//       </div>
//       {children}
//     </div>
//   );

//   return (
//     <div className="w-full">
//       {isMobile ? (
//         cardContent
//       ) : (
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: 'easeOut' }}
//         >
//           {cardContent}
//         </motion.div>
//       )}

//       {footer && (
//         <div className="p-4 border-t rounded-b-md border-zinc-700 bg-zinc-900 text-zinc-500">
//           {footer}
//         </div>
//       )}
//     </div>
//   );
// }
import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Card({ title, description, footer, children, className }: Props) {
  return (
    <div
      className={clsx(
        'rounded-2xl bg-canvas-border-hover p-6 shadow-lg',
        'transition-all duration-500 ease-in-out',
        'sm:rounded-2xl',
        
      )}
    >
      <div className="text-center mb-9">
        <h3 className="text-2xl font-semibold text-canvas-text-contrast">
          {title}
        </h3>
        <p className="text-sm text-canvas-text-contrast">{description}</p>
      </div>
      {children}
      {footer && <div className="pt-4">{footer}</div>}
    </div>
  );
}
