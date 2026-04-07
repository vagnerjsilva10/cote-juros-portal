import { redirect } from 'next/navigation';

import { coteFinanceAppUrl } from '@/data/homepage';

export default function Page() {
  redirect(coteFinanceAppUrl);
}
