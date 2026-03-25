'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { MouseEvent, useState } from 'react';

const images: { src: string; alt: string; tabIndex: number }[] = [
  {
    src: '/hero-images/hero1.png',
    alt: 'Organisez vos candidatures',
    tabIndex: 1,
  },
  {
    src: '/hero-images/hero2.png',
    alt: 'Faites-vous embaucher',
    tabIndex: 2,
  },
  {
    src: '/hero-images/hero3.png',
    alt: 'Gérez vos tableaux',
    tabIndex: 3,
  },
];

function ImageTabs() {
  const [tabIndex, setTabIndex] = useState(1);
  const currentImage = images.find((image) => image.tabIndex === tabIndex);

  const baseStyles =
    'flex-1 rounded-lg px-6 py-3 text-sm font-medium transition-colors';

  const getButtonStyles = (isActive: boolean) =>
    isActive
      ? 'bg-primary text-white'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200';

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) =>
    setTabIndex(Number(e.currentTarget.tabIndex));

  return (
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <Button
            onClick={handleOnClick}
            tabIndex={1}
            className={`${baseStyles} ${getButtonStyles(tabIndex === 1)}`}
          >
            Organisez vos candidatures
          </Button>
          <Button
            onClick={handleOnClick}
            tabIndex={2}
            className={`${baseStyles} ${getButtonStyles(tabIndex === 2)}`}
          >
            Faites-vous embaucher
          </Button>
          <Button
            onClick={handleOnClick}
            tabIndex={3}
            className={`${baseStyles} ${getButtonStyles(tabIndex === 3)}`}
          >
            Gérez les tableaux
          </Button>
        </div>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
          {currentImage && (
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={800}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageTabs;
