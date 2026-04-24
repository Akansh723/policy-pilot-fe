'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useQuoteFlow } from '@/context/QuoteFlowContext';
import { VehicleReview } from '@/views/VehicleReview';

export default function ReviewPage() {
  const router = useRouter();
  const { vehicleData, setPolicyData } = useQuoteFlow();

  useEffect(() => {
    if (!vehicleData) router.replace('/get-a-quote');
  }, [vehicleData, router]);

  if (!vehicleData) return null;

  return (
    <VehicleReview
      vehicleData={vehicleData}
      onContinue={(data) => {
        setPolicyData(data);
        router.push('/quote');
      }}
      onEdit={() => router.push('/get-a-quote')}
    />
  );
}
