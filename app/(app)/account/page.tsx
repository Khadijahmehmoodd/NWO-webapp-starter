import { redirect } from 'next/navigation';
import { createClient } from '@/lib/utils/supabase/server';
import {
  getSubscription,
  getUser,
  getUserDetails,
} from '@/lib/utils/supabase/queries';
import CustomerPortalForm from '@/components/ui/account-forms/customer-portal-form';
import EmailForm from '@/components/ui/account-forms/email-form';
import NameForm from '@/components/ui/account-forms/name-form';
import SignOutForm from '@/components/ui/account-forms/signout-form';
import Image from 'next/image';

export default async function Account() {
  const supabase = await createClient();
  const [user, userDetails, subscription] = await Promise.all([
    getUser(supabase),
    getUserDetails(supabase),
    getSubscription(supabase),
  ]);

  if (!user) return redirect('/signin');

  return (
    <section className="bg-canvas-on-canvas min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-primary-700">
          My Jewels Profile 💎
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Column – User Info */}
          <div className="flex flex-col items-center bg-primary-line p-6 rounded-xl shadow-md">
            <Image
              src="/image/user-placeholder.png"
              alt="User Profile"
              width={120}
              height={120}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{userDetails?.full_name || 'Your Name'}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>

          {/* Right Column – Forms */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6 space-y-6 border border-gray-200">
            <NameForm userName={userDetails?.full_name ?? ''} />
            <EmailForm userEmail={user?.email} />
            <CustomerPortalForm subscription={subscription} />
            <SignOutForm />
          </div>
        </div>
      </div>
    </section>
  );
}
