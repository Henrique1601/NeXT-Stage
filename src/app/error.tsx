"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-white mb-4">Algo deu errado</h1>
        <p className="text-white/40 mb-8 text-sm leading-relaxed">
          Ocorreu um erro inesperado. Tente recarregar a página.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4A853] to-[#F5C542] text-[#050505] text-sm font-medium hover:shadow-[0_0_30px_rgba(212,168,83,0.3)] transition-shadow"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
