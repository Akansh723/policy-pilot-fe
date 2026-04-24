'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useQuoteFlow } from '@/context/QuoteFlowContext';
import { PurchaseSuccess } from '@/views/PurchaseSuccess';

export default function SuccessPage() {
  const router = useRouter();
  const { vehicleData, purchaseId } = useQuoteFlow();

  useEffect(() => {
    if (!vehicleData || !purchaseId) router.replace('/');
  }, [vehicleData, purchaseId, router]);

  if (!vehicleData || !purchaseId) return null;

  return <PurchaseSuccess vehicleData={vehicleData} purchaseId={purchaseId} />;
}
