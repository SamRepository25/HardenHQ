import Link from 'next/link';
import { ArrowLeft, FileText, Shield } from 'lucide-react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Terms and Conditions',
  description: 'HardenHQ Terms and Conditions for using the website security analysis service.',
};

export default function TermsPage() {
  return (
    <AppShell>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/30">
              <FileText className="h-7 w-7 text-primary" aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Terms and Conditions</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">Rules for using HardenHQ.</h1>
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              These Terms and Conditions govern your use of the HardenHQ website and its website security analysis features.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: September 21, 2026</p>
          </div>

          <div className="mt-12 space-y-6">
            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">1. Acceptance of these terms</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                By accessing or using HardenHQ, you agree to these Terms and Conditions. If you do not agree with them, do not use the service.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">2. Authorized security testing only</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                You may use HardenHQ only to analyze websites and systems that you own or are expressly authorized to assess. You are responsible for obtaining all required permission before initiating a scan.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">3. Prohibited use</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                You must not use HardenHQ to conduct unauthorized security testing, disrupt or degrade a service, bypass access controls, interfere with networks or systems, violate applicable law, or facilitate harmful activity. You must not use scan results as a pretext for unauthorized access or exploitation.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">4. Scan results are informational</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                HardenHQ provides automated security observations, scores, and recommendations. Results may be incomplete, inaccurate, outdated, or affected by the configuration and availability of the target website. A scan is not a substitute for a professional security assessment, penetration test, code review, or legal advice.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">5. No guarantee of security</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                A website receiving a favorable HardenHQ result does not mean that the website is secure or free from vulnerabilities. Security changes over time, and automated analysis cannot identify every possible issue.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
                6. Service availability
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                HardenHQ may be changed, suspended, limited, or discontinued at any time. The service is provided on an availability basis, and uninterrupted or error-free operation is not guaranteed.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">7. Intellectual property</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Unless otherwise stated, the HardenHQ software, branding, interface, documentation, and original content are owned by their respective rights holders. These terms do not transfer ownership of HardenHQ or any third-party content to you.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">8. Third-party websites</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                HardenHQ can analyze third-party websites at your request. HardenHQ does not control those websites and is not responsible for their content, availability, security, or policies.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">9. Your responsibility</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                You are responsible for your use of HardenHQ, the URLs you submit, your authorization to scan those targets, and your compliance with applicable laws and agreements. Do not submit confidential credentials or secrets to the public scanner.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">10. Changes to these terms</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                These Terms and Conditions may be updated as HardenHQ evolves. The latest version will be published on this page with an updated date. Continued use of the service after an update means you accept the revised terms.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold">11. Contact</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Questions about these terms can be raised through the HardenHQ contact page or official GitHub repository.
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
