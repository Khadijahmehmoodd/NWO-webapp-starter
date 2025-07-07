export const paths = {
  auth: {
    signin: '/signin',
    signup: '/signin/signup',
    forgotPassword: '/signin/forgot_password',
    unauthorized: '/unauthorized',
  },
  home: '/',
  user: {
    dashboard: '/products', // ← ✅ Update from '/account' to '/products'
  },
  resources: {
    privacyPolicy: '/privacy-policy',
    termsOfService: '/terms-of-service',
  },
};
