import { Hero, CollectionsSection, NewCollectionsSection, NecklaceSection, GiftSection, NewDesignSection, ServicesSection, GallerySection } from '@/components/sections';
// import {
//   getProducts,
//   getSubscription,
//   getUser,
// } from '@/lib/utils/supabase/queries';
// import { createClient } from '@/lib/utils/supabase/server';
// import { Tables } from '@/types_db';

// Remove line 10 to 53 when dealing with the real data. Replace <OurPlan /> with the following:
// <OurPlan user={user} subscription={subscription} products={products ?? []} />

// type Price = Tables<'prices'>;
// type Product = Tables<'products'>;

// interface ProductWithPrices extends Product {
//   prices: Price[];
// }

// const mockedProducts: ProductWithPrices[] = [
//   {
//     id: 'prod_1',
//     name: 'Pro Plan',
//     description: 'A premium plan with all features included',
//     image: '/path-to-image.jpg',
//     metadata: null,
//     active: true,
//     prices: [
//       {
//         id: 'price_monthly',
//         currency: 'USD',
//         interval: 'month',
//         unit_amount: 999,
//         active: true,
//         product_id: 'prod_1',
//         interval_count: 1,
//         trial_period_days: 7,
//         type: 'recurring',
//       },
//       {
//         id: 'price_annual',
//         currency: 'USD',
//         interval: 'year',
//         unit_amount: 19999,
//         active: true,
//         product_id: 'prod_1',
//         interval_count: 1,
//         trial_period_days: 7,
//         type: 'recurring',
//       },
//     ],
//   },
// ];

export default async function HomePage() {
  // const supabase = await createClient();
  // const [user, subscription, products] = await Promise.all([
  //   getUser(supabase),
  //   getSubscription(supabase),
  //   getProducts(supabase),
  // ]);

  return (
    <div className='bg-canvas-on-canvas'>
      <Hero />
      <CollectionsSection
        // user={user}
        // subscription={subscription}
        // products={mockedProducts ?? []}
      />
      <NewCollectionsSection/>
      <GiftSection/>
      <NecklaceSection/>
      <NewDesignSection/>
      <ServicesSection/>
      <GallerySection/>
    </div>
  );
}
