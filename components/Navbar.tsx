import { Briefcase } from 'lucide-react';
import Link from 'next/link';
import { routes } from '@/lib/routes';
import { Button } from './ui/button';

function Navbar() {
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
          <Link href={routes.signUp}>
            <Button className="bg-primary hover:bg-primary/90">
              Commencez gratuitement
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
