import React from 'react';

export default function WipPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 z-0"
        style={{ backgroundImage: `url('/images/house-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/20 to-background" />
      </div>
      <div className="relative z-10 text-center px-4 md:px-6 max-w-2xl mx-auto flex flex-col items-center justify-center py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight mb-4 text-primary-foreground drop-shadow-lg animate-fade-in">
          Estamos trabajando en el sitio
        </h1>
        <p className="text-lg sm:text-2xl mb-8 text-primary-foreground/80 font-light tracking-wide animate-slide-up">
          Pronto una nueva experiencia.<br/>
          <span className="text-accent mt-4 block">¡Espéralo!</span>
        </p>
        <div className="mt-10 animate-fade-in">
          <svg width="60" height="60" fill="none" viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" stroke="#a88b69" strokeWidth="4"/><path d="M20 32l6 6 14-14" stroke="#a88b69" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>
    </main>
  );
}
