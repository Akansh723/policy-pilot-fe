'use client';

import { useRouter } from 'next/navigation';
import { useQuoteFlow } from '@/context/QuoteFlowContext';
import { SignIn } from '@/views/SignIn';

export default function SignInPage() {
  const router = useRouter();
  const { purchaseData, setIsAuthenticated } = useQuoteFlow();

  return (
    <SignIn
      totalPremium={purchaseData?.totalPremium}
      onNext={(isNewUser) => {
        setIsAuthenticated(true);
        if (isNewUser) {
          router.push('/user-details');
        } else {
          router.push(purchaseData ? '/policy-review' : '/');
        }
      }}
      onBack={() => router.push(purchaseData ? '/quote' : '/')}
    />
  );
}
