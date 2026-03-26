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
import { useState } from 'react';
import { signIn } from '@/lib/auth/auth-client';

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const logIn = async (email: string, password: string) => {
    setLoading(true);

    try {
      const result = await signIn.email({ email, password });

      if (result.error) {
        setError(result.error.message || 'Echec de la connexion.');
      } else {
        // redirect to dashboard
      }
    } catch {
      setError("Une erreur inattendue s'est produite.");
    } finally {
      setLoading(false);
    }
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setError('');

    const formData = new FormData(e.currentTarget);

    const emailRaw = formData.get('email');
    const passwordRaw = formData.get('password');

    if (typeof emailRaw !== 'string' || typeof passwordRaw !== 'string') {
      setError('Erreur formulaire.');
      return;
    }

    const email = emailRaw.trim();
    const password = passwordRaw.trim();

    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    await logIn(email, password);
  };

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
        <form onSubmit={handleOnSubmit} className="space-y-4">
          <CardContent className="space-y-4">
            {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm font-semibold text-destructive">
                {error}
              </div>
            )}
            <FormInputGroup
              label="Adresse mail"
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
            />
            <FormInputGroup
              label="Mot de passe"
              id="password"
              name="password"
              type="password"
              minLength={8}
              placeholder="1234567$!"
              required
            />
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {loading ? 'Connexion en cours' : 'Se connecter'}
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
