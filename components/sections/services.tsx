
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
import { PiShippingContainerBold } from 'react-icons/pi';
import { FaMoneyBillWave, FaGift, FaHeadset } from 'react-icons/fa';

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

export default function ServicesSection() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 overflow-hidden">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 text-center p-6 border border-muted md:border-0 border-primary-line"
          >
            <Icon size={32} />
            <h4 className="font-semibold text-canvas-text-contrast">
              {service.title}
            </h4>
            <p className="text-sm text-muted-foreground">{service.description}</p>
          </div>
        );
      })}
    </section>
  );
}