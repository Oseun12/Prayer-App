import HomePage from "./_components/HomePage";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <div>
      <HomePage/>
      <Analytics/>
    </div>
  );
}
