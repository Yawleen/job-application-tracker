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
import { signUp } from '@/lib/auth/auth-client';
import { useRouter } from 'next/navigation';

function SignUp() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);

    try {
      const result = await signUp.email({ name, email, password });

      if (result.error) {
        setError(result.error.message || "Echec de l'inscription.");
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

    const nameRaw = formData.get('name');
    const emailRaw = formData.get('email');
    const passwordRaw = formData.get('password');

    if (
      typeof nameRaw !== 'string' ||
      typeof emailRaw !== 'string' ||
      typeof passwordRaw !== 'string'
    ) {
      setError('Erreur formulaire.');
      return;
    }

    const name = nameRaw.trim();
    const email = emailRaw.trim();
    const password = passwordRaw.trim();

    if (!name || !email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("L'adresse mail est invalide.");
      return;
    }

    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }

    await register(name, email, password);
  };

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
        <form onSubmit={handleOnSubmit} className="space-y-4">
          <CardContent className="space-y-4">
            {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm font-semibold text-destructive">
                {error}
              </div>
            )}
            <FormInputGroup
              label="Nom"
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
            />
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
              {loading ? 'Création du compte' : "S'inscrire"}
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
