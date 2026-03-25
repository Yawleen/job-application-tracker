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

function SignIn() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black">
            Connexion
          </CardTitle>
          <CardDescription className="text-gray-600">
            Entrez vos identifiants pour accéder à votre compte.
          </CardDescription>
        </CardHeader>
        <form className="space-y-4">
          <CardContent className="space-y-4">
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
              Se connecter
            </Button>
            <p className="text-center text-sm text-gray-600">
              Pas de compte ?{' '}
              <Link
                href={routes.signUp}
                className="font-medium text-primary hover:underline"
              >
                S&apos;inscrire
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default SignIn;
