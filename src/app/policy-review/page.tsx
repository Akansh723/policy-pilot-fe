'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useQuoteFlow } from '@/context/QuoteFlowContext';
import { PolicyReview } from '@/views/PolicyReview';

export default function PolicyReviewPage() {
  const router = useRouter();
  const { purchaseData, vehicleData, setPurchaseId } = useQuoteFlow();

  useEffect(() => {
    if (!purchaseData || !vehicleData) router.replace('/get-a-quote');
  }, [purchaseData, vehicleData, router]);

  if (!purchaseData || !vehicleData) return null;

  return (
    <PolicyReview
      policyData={purchaseData.policyData}
      vehicleData={vehicleData}
      selectedAddons={purchaseData.selectedAddons}
      totalPremium={purchaseData.totalPremium}
      onNext={(id) => {
        setPurchaseId(id);
        router.push('/success');
      }}
      onBack={() => router.push('/quote')}
    />
  );
}
