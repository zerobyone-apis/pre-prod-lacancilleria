export const FooterMinimal = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-2">La Cancillería</h3>
            <p className="text-sm text-muted-foreground">Punta del Este, Uruguay</p>
          </div>
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© 2024 La Cancillería. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
