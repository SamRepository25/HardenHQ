'use client';

import { FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Shield, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.detail || 'Unable to sign in.');
        return;
      }

      const next = searchParams.get('next');
      const destination = next && next.startsWith('/') && !next.startsWith('//') ? next : '/dashboard';
      router.replace(destination);
      router.refresh();
    } catch {
      setError('Unable to reach the authentication service.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
            <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
            <div className="absolute inset-0 -z-10 rounded-xl bg-primary/20 blur-lg" aria-hidden="true" />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            Harden<span className="text-gradient">HQ</span>
          </span>
        </div>

        <section className="glass-strong rounded-2xl border p-7 shadow-2xl">
          <div className="mb-7">
            <h1 className="text-2xl font-bold">Admin sign in</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign in to access your HardenHQ security dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                disabled={loading}
              />
            </div>

            {error && (
              <p role="alert" className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </p>
            )}

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
}
