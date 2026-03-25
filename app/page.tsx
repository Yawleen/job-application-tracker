import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, CheckCircle2, TrendingUp } from 'lucide-react';
import { routes } from '@/lib/routes';
import Link from 'next/link';
import ImageTabs from '@/components/ImageTabs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="container mx-auto px-4 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-black mb-6 text-6xl font-bold">
            Une meilleure façon de suivre vos candidatures d&apos;emploi.
          </h1>
          <p className="text-muted-foreground mb-10 text-xl">
            Capturez, organisez et gérez vos candidatures d&apos;emploi en un
            seul endroit.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link href={routes.signUp}>
              <Button size="lg" className="h-12 px-8 text-lg font-medium">
                Commencez gratuitement <ArrowRight />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Gratuit pour toujours.
            </p>
          </div>
        </div>
      </section>
      <section className="border-t bg-white py-16">
        <ImageTabs />
      </section>
      <section className="border-t bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-black">
                Organisez vos candidatures
              </h3>
              <p className="text-muted-foreground">
                Créez des tableaux et des colonnes personnalisés pour suivre vos
                candidatures à chaque étape du processus.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-black">
                Suivez les progrès
              </h3>
              <p className="text-muted-foreground">
                Suivez l&apos;état d&apos;avancement de votre candidature, de la
                candidature initiale à l&apos;entretien puis à l&apos;offre
                d&apos;emploi, grâce à des tableaux Kanban visuels.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-black">
                Restez organisé
              </h3>
              <p className="text-muted-foreground">
                Ne perdez jamais de vue une candidature. Conservez toutes vos
                informations relatives à votre recherche d&apos;emploi au même
                endroit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
