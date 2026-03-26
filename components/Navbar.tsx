'use client';

import { Briefcase } from 'lucide-react';
import Link from 'next/link';
import { routes } from '@/lib/routes';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';
import { signOut, useSession } from '@/lib/auth/auth-client';
import { useRouter } from 'next/navigation';

function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  const logOut = async () => {
    const result = await signOut();

    if (result.data?.success) {
      router.push(routes.signIn);
    } else {
      alert('Erreur lors de la déconnexion.');
    }
  };

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href={routes.home}
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <Briefcase />
          Job Tracker
        </Link>
        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              <Link href="">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-black"
                >
                  Dashboard
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="relative h-8 w-8 rounded-full overflow-hidden">
                  <Avatar className="size-8">
                    <AvatarFallback className="w-full bg-primary text-white">
                      {session.user.name[0].toLocaleUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {session.user.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {session.user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuItem className="cursor-pointer" onClick={logOut}>
                    Se déconnecter
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href={routes.signIn}>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-black"
                >
                  Se connecter
                </Button>
              </Link>
              <Link href={routes.signUp}>
                <Button className="bg-primary hover:bg-primary/90">
                  Commencez gratuitement
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
