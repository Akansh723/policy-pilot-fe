'use client';

import { useRouter } from 'next/navigation';
import { useQuoteFlow } from '@/context/QuoteFlowContext';
import { VehicleInfo } from '@/views/VehicleInfo';

export default function GetAQuotePage() {
  const router = useRouter();
  const { vehicleData, setVehicleData } = useQuoteFlow();

  return (
    <VehicleInfo
      initialData={vehicleData}
      onNext={(data) => {
        setVehicleData(data);
        router.push('/review');
      }}
    />
  );
}
