import React, { useState } from 'react';
import { HTML_IMAGE_ASSETS, APP_SCREENS_GALLERY } from '../data/mockData';
import { HtmlImageItem, ActiveTab } from '../types';

interface InteractiveGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTab: (tab: ActiveTab) => void;
  onShowToast: (msg: string) => void;
}

export const InteractiveGalleryModal: React.FC<InteractiveGalleryModalProps> = ({
  isOpen,
  onClose,
  onNavigateToTab,
  onShowToast,
}) => {
  const [activeGalleryTab, setActiveGalleryTab] = useState<'assets' | 'screens'>('assets');
  const [selectedImage, setSelectedImage] = useState<HtmlImageItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('todos');

  if (!isOpen) return null;

  const handleCopyLink = (url: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {});
    }
    onShowToast(`Link direto copiado: ${label}`);
  };

  const filteredAssets = HTML_IMAGE_ASSETS.filter((item) => {
    if (categoryFilter === 'todos') return true;
    return item.category === categoryFilter;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0d131f]/95 backdrop-blur-lg flex flex-col p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="max-w-xl mx-auto w-full min-h-screen flex flex-col pb-12">
        {/* Header Bar */}
        <div className="flex items-center justify-between py-3 border-b border-[#242a37] mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#00e3fd]/15 flex items-center justify-center text-[#00e3fd] border border-[#00e3fd]/30">
              <span className="material-symbols-outlined text-[22px]">collections</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-space text-lg text-[#dde2f3] font-bold leading-none">
                  Galeria Interativa &amp; Links HTML
                </h2>
                <span className="px-2 py-0.2 rounded-full bg-[#00ff87]/20 text-[#00ff87] text-[9px] font-space font-bold uppercase">
                  11 Imagens
                </span>
              </div>
              <p className="text-xs text-[#b9cbb9] mt-0.5">
                Links diretos para imagens e galeria interativa que abre no navegador
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1a202c] text-[#b9cbb9] hover:text-[#dde2f3] flex items-center justify-center border border-[#242a37]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Gallery Mode Switcher */}
        <div className="grid grid-cols-2 p-1 rounded-xl bg-[#080e1a] border border-[#242a37] mb-3 shadow-inner">
          <button
            type="button"
            onClick={() => setActiveGalleryTab('assets')}
            className={`py-2 px-3 rounded-lg font-space text-[12px] font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeGalleryTab === 'assets'
                ? 'bg-[#242a37] text-[#00e3fd] shadow-md border border-[#00e3fd]/30'
                : 'text-[#b9cbb9] hover:text-[#dde2f3]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">image</span>
            <span>Imagens &amp; Assets HTML ({HTML_IMAGE_ASSETS.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveGalleryTab('screens')}
            className={`py-2 px-3 rounded-lg font-space text-[12px] font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeGalleryTab === 'screens'
                ? 'bg-[#242a37] text-[#00ff87] shadow-md border border-[#00ff87]/30'
                : 'text-[#b9cbb9] hover:text-[#dde2f3]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">view_quilt</span>
            <span>Galeria de Telas do App (6)</span>
          </button>
        </div>

        {/* TAB 1: HTML Image Assets & Direct Links */}
        {activeGalleryTab === 'assets' && (
          <div className="flex flex-col space-y-3">
            {/* Explanatory Banner answering user question */}
            <div className="p-3 rounded-xl bg-[#161c28] border border-[#00e3fd]/30 flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#00e3fd] text-[20px] shrink-0 mt-0.5">
                info
              </span>
              <div className="text-xs text-[#b9cbb9] leading-relaxed">
                <strong className="text-[#dde2f3] block mb-0.5">
                  Links Diretos para Imagens do HTML no Navegador:
                </strong>
                Sim, é 100% possível! Abaixo você encontra o link direto de cada imagem original com o botão{' '}
                <span className="text-[#00e3fd] font-semibold">"Abrir Imagem no Navegador"</span> (usando{' '}
                <code className="text-[#00ff87] font-mono text-[11px]">target="_blank"</code>) e{' '}
                <span className="text-[#00ff87] font-semibold">"Copiar Link Direto"</span> para uso em qualquer outro lugar.
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
              {[
                { id: 'todos', label: 'Todos' },
                { id: 'logo', label: 'Logo' },
                { id: 'tipster', label: 'Tipsters' },
                { id: 'crest', label: 'Escudos' },
                { id: 'analyst', label: 'Analistas' },
                { id: 'screen', label: 'Capturas de Telas' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`px-3 py-1 rounded-full font-space text-[11px] transition-all whitespace-nowrap ${
                    categoryFilter === cat.id
                      ? 'bg-[#00e3fd] text-[#00210c] font-bold shadow-sm'
                      : 'bg-[#1a202c] text-[#b9cbb9] hover:text-[#dde2f3] border border-[#242a37]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid of Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredAssets.map((asset) => (
                <div
                  key={asset.id}
                  className="rounded-2xl bg-[#161c28] border border-[#242a37] p-3 flex flex-col justify-between shadow-md hover:border-[#00e3fd]/40 transition-all group"
                >
                  <div>
                    {/* Image Preview Container */}
                    <div
                      onClick={() => setSelectedImage(asset)}
                      className="relative w-full h-36 rounded-xl bg-[#080e1a] overflow-hidden flex items-center justify-center p-2 mb-2.5 cursor-pointer border border-[#242a37] group-hover:border-[#00e3fd]/30 transition-colors"
                    >
                      <img
                        src={asset.url}
                        alt={asset.title}
                        className="max-h-full max-w-full object-contain rounded drop-shadow transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#00e3fd] text-[#00210c] font-space text-[11px] font-bold shadow-md">
                          <span className="material-symbols-outlined text-[15px]">zoom_in</span>
                          Ampliar
                        </span>
                      </div>
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0d131f]/80 backdrop-blur font-space text-[9px] uppercase font-bold text-[#00e3fd] border border-[#00e3fd]/20">
                        {asset.category}
                      </span>
                    </div>

                    {/* Metadata */}
                    <h3 className="font-space text-[13px] text-[#dde2f3] font-bold truncate">
                      {asset.title}
                    </h3>
                    <p className="text-[11px] text-[#b9cbb9] mt-0.5 line-clamp-2">
                      {asset.description}
                    </p>
                  </div>

                  {/* Actions: Open directly in browser or copy link */}
                  <div className="flex flex-col gap-1.5 mt-3 pt-2 border-t border-[#242a37]">
                    <div className="flex items-center gap-1.5">
                      <a
                        href={asset.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-1.5 px-2.5 rounded-lg bg-[#00e3fd]/15 hover:bg-[#00e3fd]/25 text-[#00e3fd] font-space text-[11px] font-bold flex items-center justify-center gap-1 border border-[#00e3fd]/30 transition-colors text-center"
                      >
                        <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                        <span>Abrir Link Direto</span>
                      </a>
                      <button
                        type="button"
                        aria-label="Copiar link direto"
                        onClick={() => handleCopyLink(asset.url, asset.title)}
                        className="p-1.5 rounded-lg bg-[#242a37] hover:bg-[#2f3542] text-[#b9cbb9] hover:text-[#00ff87] border border-[#2f3542] transition-colors"
                        title="Copiar URL direta para a área de transferência"
                      >
                        <span className="material-symbols-outlined text-[16px]">content_copy</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Interactive App Screens Showcase */}
        {activeGalleryTab === 'screens' && (
          <div className="flex flex-col space-y-3">
            <div className="p-3 rounded-xl bg-[#161c28] border border-[#00ff87]/30 flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#00ff87] text-[20px] shrink-0 mt-0.5">
                touch_app
              </span>
              <div className="text-xs text-[#b9cbb9] leading-relaxed">
                <strong className="text-[#dde2f3] block mb-0.5">
                  Navegação Interativa entre Telas do App:
                </strong>
                Clique em qualquer tela abaixo para ser redirecionado instantaneamente para ela no aplicativo ou visualizar em detalhes.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {APP_SCREENS_GALLERY.map((screen) => (
                <div
                  key={screen.id}
                  className="rounded-2xl bg-[#161c28] border border-[#242a37] p-3.5 flex flex-col justify-between shadow-md hover:border-[#00ff87]/40 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded bg-[#00ff87]/15 text-[#00ff87] font-space text-[10px] font-bold uppercase">
                        {screen.screenTitle}
                      </span>
                      <span className="material-symbols-outlined text-[#b9cbb9] text-[18px]">
                        smartphone
                      </span>
                    </div>

                    <h3 className="font-space text-base text-[#dde2f3] font-bold">
                      {screen.title}
                    </h3>
                    <p className="text-xs text-[#b9cbb9] mt-1 leading-relaxed">
                      {screen.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-4 pt-2 border-t border-[#242a37]">
                    <button
                      type="button"
                      onClick={() => {
                        onNavigateToTab(screen.tab);
                        onClose();
                        onShowToast(`Navegando para: ${screen.screenTitle}`);
                      }}
                      className="flex-1 py-2 px-3 rounded-xl bg-[#00ff87] text-[#00210c] font-space text-[12px] font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                    >
                      <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
                      <span>Ir Para Tela</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox Modal for High-Resolution Image Inspection */}
        {selectedImage && (
          <div className="fixed inset-0 z-60 bg-black/90 backdrop-blur-xl flex flex-col p-4 animate-in fade-in duration-150">
            <div className="flex items-center justify-between max-w-2xl mx-auto w-full py-2 border-b border-[#242a37]">
              <div>
                <h3 className="font-space text-base text-[#dde2f3] font-bold">
                  {selectedImage.title}
                </h3>
                <span className="font-space text-xs text-[#00e3fd]">
                  {selectedImage.category.toUpperCase()} • Alta Resolução
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedImage.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#00e3fd] text-[#00210c] font-space text-xs font-bold flex items-center gap-1 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[15px]">open_in_new</span>
                  <span>Abrir no Navegador</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="w-8 h-8 rounded-full bg-[#1a202c] text-[#dde2f3] flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center max-w-2xl mx-auto w-full p-4 overflow-hidden">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl border border-[#242a37]"
              />
            </div>

            <div className="max-w-2xl mx-auto w-full p-3 rounded-xl bg-[#161c28] border border-[#242a37] flex items-center justify-between gap-3">
              <div className="truncate text-xs text-[#b9cbb9] font-mono select-all">
                {selectedImage.url}
              </div>
              <button
                type="button"
                onClick={() => handleCopyLink(selectedImage.url, selectedImage.title)}
                className="px-3 py-1.5 rounded-lg bg-[#242a37] hover:bg-[#2f3542] text-[#00ff87] font-space text-xs font-bold shrink-0 flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[15px]">content_copy</span>
                <span>Copiar Link</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
