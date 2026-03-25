'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import FormInputGroup from '@/components/FormInputGroup';
import Link from 'next/link';
import { routes } from '@/lib/routes';

function SignUp() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black">
            Inscription
          </CardTitle>
          <CardDescription className="text-gray-600">
            Créez un compte pour commencer à tracker vos candidatures.
          </CardDescription>
        </CardHeader>
        <form className="space-y-4">
          <CardContent className="space-y-4">
            <FormInputGroup
              label="Nom"
              id="name"
              type="text"
              placeholder="John Doe"
              required
            />
            <FormInputGroup
              label="Adresse mail"
              id="email"
              type="email"
              placeholder="john@example.com"
              required
            />
            <FormInputGroup
              label="Mot de passe"
              id="password"
              type="password"
              minLength={8}
              placeholder="1234567$!"
              required
            />
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              S&apos;inscrire
            </Button>
            <p className="text-center text-sm text-gray-600">
              Déjà inscrit ?{' '}
              <Link
                href={routes.signIn}
                className="font-medium text-primary hover:underline"
              >
                Se connecter
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default SignUp;
