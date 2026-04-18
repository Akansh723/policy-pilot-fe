'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useQuoteFlow } from '@/context/QuoteFlowContext';
import { QuoteResults } from '@/views/QuoteResults';

export default function QuotePage() {
  const router = useRouter();
  const { policyData, purchaseData, setPurchaseData, isAuthenticated } = useQuoteFlow();

  useEffect(() => {
    if (!policyData) router.replace('/get-a-quote');
  }, [policyData, router]);

  if (!policyData) return null;

  return (
    <QuoteResults
      policyData={policyData}
      initialSelectedAddons={purchaseData?.selectedAddons}
      onBack={() => router.push('/review')}
      onNext={(selectedAddons, totalPremium) => {
        setPurchaseData({ policyData, selectedAddons, totalPremium });
        router.push(isAuthenticated ? '/policy-review' : '/sign-in');
      }}
    />
  );
}
