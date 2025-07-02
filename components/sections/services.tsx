
// import { PiShippingContainerBold } from 'react-icons/pi';
// import { FaMoneyBillWave, FaGift, FaHeadset } from 'react-icons/fa';

// const services = [
//   {
//     icon: PiShippingContainerBold,
//     title: 'Free Shipping',
//     description: 'Order above $500',
//   },
//   {
//     icon: FaMoneyBillWave,
//     title: 'Money Back Guaranteed',
//     description: 'Within 7 days',
//   },
//   {
//     icon: FaGift,
//     title: 'Offers & Discounts',
//     description: 'Weekly / Monthly',
//   },
//   {
//     icon: FaHeadset,
//     title: 'Customer Support',
//     description: '24/7 Support service',
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="grid grid-cols-2 md:grid-cols-4  overflow-hidden py-6">
//       {services.map((service, index) => {
//         const Icon = service.icon;
//         return (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center gap-2 text-center p-6 border-b border-b-primary-line border-r border-r-primary-line "
//           >
//             <Icon size={32} />
//             <h4 className="font-semibold text-canvas-text-contrast">{service.title}</h4>
//             <p className="text-sm text-muted-foreground">{service.description}</p>
//           </div>
//         );
//       })}
//     </section>
//   );
// }
// import { PiShippingContainerBold } from 'react-icons/pi';
// import { FaMoneyBillWave, FaGift, FaHeadset } from 'react-icons/fa';

// const services = [
//   {
//     icon: PiShippingContainerBold,
//     title: 'Free Shipping',
//     description: 'Order above $500',
//   },
//   {
//     icon: FaMoneyBillWave,
//     title: 'Money Back Guaranteed',
//     description: 'Within 7 days',
//   },
//   {
//     icon: FaGift,
//     title: 'Offers & Discounts',
//     description: 'Weekly / Monthly',
//   },
//   {
//     icon: FaHeadset,
//     title: 'Customer Support',
//     description: '24/7 Support service',
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="grid grid-cols-2 md:grid-cols-4 overflow-hidden">
//       {services.map((service, index) => {
//         const Icon = service.icon;
//         return (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center gap-2 text-center p-6 border border-muted md:border-0 border-primary-line"
//           >
//             <Icon size={32} />
//             <h4 className="font-semibold text-canvas-text-contrast">
//               {service.title}
//             </h4>
//             <p className="text-sm text-muted-foreground">{service.description}</p>
//           </div>
//         );
//       })}
//     </section>
//   );
// }

// 'use client';

// import { motion } from 'framer-motion';
// import { PiShippingContainerBold } from 'react-icons/pi';
// import { FaMoneyBillWave, FaGift, FaHeadset } from 'react-icons/fa';
// import { Variants } from 'framer-motion';

// const services = [
//   {
//     icon: PiShippingContainerBold,
//     title: 'Free Shipping',
//     description: 'Order above $500',
//   },
//   {
//     icon: FaMoneyBillWave,
//     title: 'Money Back Guaranteed',
//     description: 'Within 7 days',
//   },
//   {
//     icon: FaGift,
//     title: 'Offers & Discounts',
//     description: 'Weekly / Monthly',
//   },
//   {
//     icon: FaHeadset,
//     title: 'Customer Support',
//     description: '24/7 Support service',
//   },
// ];

// // Animation Variants
// const containerVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants : Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: 'easeOut' },
//   },
// };

// export default function ServicesSection() {
//   return (
//     <motion.section
//       className="grid grid-cols-2 md:grid-cols-4 overflow-hidden"
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ amount: 0.5 }}
//     >
//       {services.map((service, index) => {
//         const Icon = service.icon;
//         return (
//           <motion.div
//             key={index}
//             variants={itemVariants}
//             className="flex flex-col items-center justify-center gap-2 text-center p-6 border border-muted md:border-0 border-primary-line"
//           >
//             <Icon size={32} />
//             <h4 className="font-semibold text-canvas-text-contrast">
//               {service.title}
//             </h4>
//             <p className="text-sm text-muted-foreground">{service.description}</p>
//           </motion.div>
//         );
//       })}
//     </motion.section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { PiShippingContainerBold } from 'react-icons/pi';
import { FaMoneyBillWave, FaGift, FaHeadset } from 'react-icons/fa';
import { Variants } from 'framer-motion';

// Services data
const services = [
  {
    icon: PiShippingContainerBold,
    title: 'Free Shipping',
    description: 'Order above $500',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Money Back Guaranteed',
    description: 'Within 7 days',
  },
  {
    icon: FaGift,
    title: 'Offers & Discounts',
    description: 'Weekly / Monthly',
  },
  {
    icon: FaHeadset,
    title: 'Customer Support',
    description: '24/7 Support service',
  },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ServicesSection() {
  return (
    <motion.section
      className="grid grid-cols-2 md:grid-cols-4 overflow-hidden border border-primary-line md:border-none"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
    >
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`
              flex flex-col items-center justify-center gap-2 text-center p-6
              border border-primary-line
              ${index === 0 || index === 1 ? 'border-b' : ''}
              ${index % 2 === 0 ? 'border-r' : ''}
              md:border-none md:border-b-0 md:border-r-0
            `}
          >
            <Icon size={32} />
            <h4 className="font-semibold text-canvas-text-contrast">
              {service.title}
            </h4>
            <p className="text-sm text-muted-foreground">{service.description}</p>
          </motion.div>
        );
      })}
    </motion.section>
  );
}
