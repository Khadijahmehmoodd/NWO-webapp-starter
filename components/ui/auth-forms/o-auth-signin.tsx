// 'use client';

// import React, { useState } from 'react';
// import { signInWithOAuth } from '@/lib/utils/auth-helpers/client';
// import { type Provider } from '@supabase/supabase-js';
// import { FaGithub, FaGoogle } from 'react-icons/fa';
// import { Button } from '@/components/ui';

// type OAuthProviders = {
//   name: Provider;
//   displayName: string;
//   icon: React.JSX.Element;
// };

// export default function OauthSignIn () {
//   const oAuthProviders: OAuthProviders[] = [
//     {
//       name: 'github',
//       displayName: 'Continue with Google',
//       icon: <FaGoogle className='w-5 h-5' />,
//     },
   
//   ];
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     setIsSubmitting(true); 
//     await signInWithOAuth(e);
//     setIsSubmitting(false);
//   };

//   return (
//     <>
//       {oAuthProviders.map((provider) => (
//         <form key={provider.name} onSubmit={(e) => handleSubmit(e)}>
//           <input type='hidden' name='provider' value={provider.name} />
//           <Button
//             color='gray'
//             size='medium'
//             variant='soft'
//             type='submit'
//             className='w-full'
//             loading={isSubmitting}
//           >
//             <span className='mr-2'>{provider.icon}</span>
//             <span>{provider.displayName}</span>
//           </Button>
//         </form>
//       ))}
//     </>
//   );
// };

'use client';

import { createClient } from '@/lib/utils/supabase/client';
import { Button } from '@/components/ui';

interface OauthSignInProps {
  redirectTo?: string; 
}

export default function OauthSignIn({ redirectTo = '/account' }: OauthSignInProps) {
  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo, 
      },
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <Button
        onClick={() => handleOAuthLogin('google')}
        variant="outline"
        color="gray"
        size="medium"
      >
        Continue with Google
      </Button>

      <Button
        onClick={() => handleOAuthLogin('github')}
        variant="outline"
        color="gray"
        size="medium"
      >
        Continue with GitHub
      </Button>
    </div>
  );
}
