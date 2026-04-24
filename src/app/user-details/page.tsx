'use client';

import { useRouter } from 'next/navigation';
import { useQuoteFlow } from '@/context/QuoteFlowContext';
import { UserDetails } from '@/views/UserDetails';

export default function UserDetailsPage() {
  const router = useRouter();
  const { purchaseData } = useQuoteFlow();

  return (
    <UserDetails onNext={() => router.push(purchaseData ? '/policy-review' : '/')} />
  );
}
