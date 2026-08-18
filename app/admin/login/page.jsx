'use client';

import { useActionState } from 'react';
import { signIn } from '../actions';

export default function LoginPage() {
  const [state, action, pending] = useActionState(signIn, {});

  return (
    <>
      <div className="admin-topbar">
        <h1>AdEtc Admin</h1>
      </div>
      <div className="admin-card" style={{ maxWidth: 380, padding: 24 }}>
        <form action={action}>
          {state?.error && <p className="admin-error">{state.error}</p>}
          <div className="admin-field">
            <label htmlFor="email">Email</label>
            <input className="admin-input" id="email" name="email" type="email" required autoComplete="username" />
          </div>
          <div className="admin-field">
            <label htmlFor="password">Password</label>
            <input className="admin-input" id="password" name="password" type="password" required autoComplete="current-password" />
          </div>
          <button className="admin-btn admin-btn-primary" type="submit" disabled={pending}>
            {pending ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </>
  );
}
