export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between px-6 py-3 rounded-full border border-white/[0.06] bg-[#050505]/60 backdrop-blur-xl">
          <p className="text-white/30 text-xs">
            © 2026 <span className="text-[#D4A853]">NeXT Stage</span>
          </p>
          <p className="text-white/20 text-xs hidden sm:block">
            Feito por desenvolvedores, para desenvolvedores
          </p>
          <p className="text-white/30 text-xs">Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
