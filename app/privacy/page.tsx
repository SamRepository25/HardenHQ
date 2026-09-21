import Link from 'next/link';
import { ArrowLeft, Lock, Shield } from 'lucide-react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Privacy Policy',
  description: 'HardenHQ Privacy Policy and information about how the service handles submitted scan data.',
};

export default function PrivacyPage() {
  return (
    <AppShell>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/30">
              <Lock className="h-7 w-7 text-primary" aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Privacy Policy</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">Your privacy matters.</h1>
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              This Privacy Policy explains how HardenHQ handles information when you use the HardenHQ website and its public website security scanning features.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: September 21, 2026</p>
          </div>

          <div className="mt-12 space-y-6">
            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">1. Information you provide</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                When you submit a website URL for scanning, HardenHQ processes that URL so the requested security analysis can be performed. Do not submit passwords, API keys, authentication tokens, private URLs, or other confidential information through the public scanner.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">2. How scan information is used</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Submitted URLs are used to retrieve publicly accessible HTTP information and generate security findings, scores, and recommendations. HardenHQ is designed for defensive analysis and authorized security assessment.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">3. Accounts and credentials</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                The public scanner does not require you to create an account or provide credentials for the website you are scanning. HardenHQ does not ask you to enter a target website&apos;s password or authentication secret to perform a public scan.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">4. Third-party websites and services</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                A website scanned through HardenHQ remains operated by its respective owner. Its own privacy policy, cookies, logging, and data practices are separate from HardenHQ. HardenHQ may also rely on infrastructure or hosting providers to operate the service; those providers may process information as necessary to provide their services.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">5. Security</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                HardenHQ is built as a security analysis tool and uses reasonable technical measures appropriate to the service. However, no internet service can guarantee absolute security. You should avoid submitting confidential information to the public scanner.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">6. Data retention and deletion</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                HardenHQ does not promise indefinite storage of scan information. Data may be retained for operational, security, debugging, abuse-prevention, or service-improvement purposes where necessary. If you have a privacy question or deletion request, contact the project through the official HardenHQ GitHub repository.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">7. Children&apos;s privacy</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                HardenHQ is a general-purpose website security tool and is not specifically directed at children. Do not submit personal or confidential information through the scanner.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
                8. Changes to this Privacy Policy
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                This Privacy Policy may be updated as HardenHQ changes or adds features. The latest version will be published on this page with an updated date.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">9. Contact</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                For privacy questions or requests, use the HardenHQ contact page or GitHub repository linked below.
              </p>
              <div className="mt-5">
                <Button asChild variant="outline">
                  <Link href="/contact">Contact HardenHQ</Link>
                </Button>
              </div>
            </section>
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to HardenHQ
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
