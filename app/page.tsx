import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
            <Button size="lg" className="h-12 px-8 text-lg font-medium">
              Commencez gratuitement <ArrowRight />
            </Button>
            <p className="text-sm text-muted-foreground">
              Gratuit pour toujours.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
