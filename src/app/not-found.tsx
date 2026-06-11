import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-[#D4A853] text-sm font-mono tracking-widest mb-4">ERRO 404</p>
        <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">Página não encontrada</h1>
        <p className="text-white/40 text-sm leading-relaxed mb-8">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4A853] to-[#F5C542] text-[#050505] text-sm font-medium hover:shadow-[0_0_30px_rgba(212,168,83,0.3)] transition-shadow"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
