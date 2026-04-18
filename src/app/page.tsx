import { Home } from '@/views/Home';
import { AuthGate } from '@/views/Home/HomeClient';

export default function HomePage() {
  return (
    <AuthGate>
      <Home />
    </AuthGate>
  );
}
