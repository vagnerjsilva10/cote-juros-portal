import { createHash } from 'crypto';

import { cookies } from 'next/headers';

import { getAdminAccessKey } from '@/lib/env';

const ADMIN_COOKIE_NAME = 'cote_admin_session';

function adminSessionValue() {
  return createHash('sha256').update(`cote-admin:${getAdminAccessKey()}`).digest('hex');
}

export async function isAdminAuthenticated() {
  if (!getAdminAccessKey()) {
    return false;
  }

  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_COOKIE_NAME)?.value === adminSessionValue();
}

export async function setAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, adminSessionValue(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    path: '/admin',
    maxAge: 60 * 60 * 12
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
}