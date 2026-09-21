import Link from 'next/link';
import { ArrowLeft, FileText, Shield } from 'lucide-react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Terms of Use',
  description: 'HardenHQ Terms of Use governing access to and use of the website security analysis service.',
};

export default function TermsOfUsePage() {
  return (
    <AppShell>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/30">
              <FileText className="h-7 w-7 text-primary" aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Terms of Use</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">Using HardenHQ responsibly.</h1>
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              These Terms of Use describe the permitted and responsible use of HardenHQ and its website security analysis features.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: September 21, 2026</p>
          </div>

          <div className="mt-12 space-y-6">
            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">1. Acceptable use</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                HardenHQ is intended for legitimate defensive security analysis. You may use the service to assess websites and systems that you own or are explicitly authorized to test.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">2. Authorization is required</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                You are responsible for ensuring that you have permission to scan every target submitted to HardenHQ. Do not use the service against systems where you do not have authorization.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">3. Prohibited activities</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                You must not use HardenHQ to facilitate unauthorized access, exploitation, disruption, denial-of-service activity, credential theft, evasion of security controls, harassment, or other unlawful or harmful activity.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
                4. Security results
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                HardenHQ uses automated analysis. Findings and recommendations are informational and may contain false positives or false negatives. A scan does not guarantee that a website is secure or free of vulnerabilities and should not replace professional security testing when appropriate.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">5. No credentials or secrets</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Do not submit passwords, API keys, authentication tokens, private URLs, or other confidential secrets through the public scanner.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">6. Service availability</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                HardenHQ may be modified, restricted, suspended, or discontinued without guaranteeing continuous availability. Features and scanning behavior may change over time.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">7. Third-party targets</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                HardenHQ does not control websites submitted for scanning and is not responsible for their content, availability, security, or policies. You remain responsible for your interaction with those systems.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">8. Compliance with law</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                You must comply with all laws, regulations, contracts, and applicable terms when using HardenHQ. These Terms of Use do not grant permission to access or test any third-party system.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">9. Changes to these Terms of Use</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                These Terms of Use may be updated as HardenHQ evolves. The latest version will be published on this page with an updated date.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">10. Contact</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Questions about these Terms of Use can be raised through the HardenHQ contact page.
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
