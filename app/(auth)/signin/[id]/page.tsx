
import React from 'react';
import { Card } from '@/components/ui';
import { createClient } from '@/lib/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { paths } from '@/lib/constants/paths';
import {
  getAuthTypes,
  getViewTypes,
  getDefaultSignInView,
  getRedirectMethod,
} from '@/lib/utils/auth-helpers/settings';

import { PasswordSignIn } from '@/components/ui/auth-forms/password-signin';
import EmailSignIn from '@/components/ui/auth-forms/email-signin';
import ForgotPassword from '@/components/ui/auth-forms/forgot-password';
import UpdatePassword from '@/components/ui/auth-forms/update-password';
import Separator from '@/components/ui/auth-forms/separator';
import OauthSignIn from '@/components/ui/auth-forms/o-auth-signin';

export default async function SignIn({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { id } = params;
  const queryParams = searchParams;

  const { allowOauth, allowEmail, allowPassword } = getAuthTypes();
  const viewTypes = getViewTypes().filter((v) => v !== 'signup');
  const redirectMethod = getRedirectMethod();

  const disableButton =
    queryParams?.disable_button === 'true' || queryParams?.disable_button === '1';

  let viewProp: string;

  
  if (typeof id === 'string' && viewTypes.includes(id)) {
    viewProp = id;
  } else {
    const cookieStore = await cookies(); 
    const preferredSignInView = cookieStore.get('preferredSignInView')?.value || null;
    viewProp = getDefaultSignInView(preferredSignInView);

    if (viewProp === 'signup') viewProp = 'password_signin';
    return redirect(`${paths.auth.signin}/${viewProp}`);
  }


  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

 
  if (user && viewProp !== 'update_password') {
    return redirect(paths.user.dashboard); 
  }

  if (!user && viewProp === 'update_password') {
    return redirect(paths.auth.signin);
  }

 
  let productId: string | null = null;
  if (user) {
    const { data: product } = await supabase
      .from('user_products')
      .select('id')
      .eq('user_id', user.id)
      .limit(1)
      .single();

    productId = product?.id ?? null;
  }

 
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <Card
          className="bg-canvas-bg-active"
          title={
            viewProp === 'forgot_password'
              ? 'Forgot your password?'
              : viewProp === 'update_password'
                ? 'Update Password'
                : 'Welcome to Jewels. Sign In'
          }
          description={
            viewProp === 'forgot_password'
              ? "Don't worry, we'll send you a message to help you reset your password."
              : viewProp === 'update_password'
                ? 'Please set a new password for your account'
                : 'Login to continue to the app.'
          }
        >
          <div>
          
            {viewProp !== 'update_password' && viewProp !== 'forgot_password' && allowOauth && (
              <>
                <OauthSignIn redirectTo={paths.user.dashboard} />
                <Separator text="OR" />
              </>
            )}

          
            {viewProp === 'password_signin' && (
              <PasswordSignIn
                allowEmail={allowEmail}
                redirectMethod={redirectMethod}
                redirectTo={paths.user.dashboard}
              />
            )}

       
            {viewProp === 'email_signin' && (
              <EmailSignIn
                allowPassword={allowPassword}
                redirectMethod={redirectMethod}
                disableButton={disableButton}
                redirectTo={paths.user.dashboard}
              />
            )}

            
            {viewProp === 'forgot_password' && (
              <ForgotPassword
                allowEmail={allowEmail}
                redirectMethod={redirectMethod}
                disableButton={disableButton}
                redirectTo={paths.user.dashboard}
              />
            )}

            
            {viewProp === 'update_password' && (
              <UpdatePassword
                redirectMethod={redirectMethod}
                redirectTo={productId ? `/products/${productId}` : paths.user.dashboard}
              />
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
