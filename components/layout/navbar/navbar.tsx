// import { createClient } from '@/lib/utils/supabase/server';
// // import { NavLinks } from './nav-links';
import { TopBanner } from './top-banner';
import MiddleBanner from './middle-banner';
import MainMenu from './nav-links';

export default async function Navbar () {
  // const supabase = await createClient();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // return (
  //   <>
  //     <NavLinks user={user} />
  //   </>
  // );
  return(
    <>
      
      <TopBanner/>
      <MiddleBanner/>
      <MainMenu/>
    
    </>
  );
  
};
