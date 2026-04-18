'use client';

import { useRouter } from 'next/navigation';
import { Registration } from '@/views/Registration';

export default function RegistrationPage() {
  const router = useRouter();

  return (
    <Registration
      onNext={() => router.push('/')}
      onBack={() => router.push('/sign-in')}
    />
  );
}
