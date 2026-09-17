import React from 'react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  onOpenGallery: () => void;
  onOpenVipPlans: () => void;
  onShowToast: (msg: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onOpenGallery,
  onOpenVipPlans,
  onShowToast
}) => {
  const getTabLabel = () => {
    switch (activeTab) {
      case 'feed':
        return 'Feed';
      case 'analise':
        return 'Análise';
      case 'vip':
        return 'Vip / Ao Vivo';
      case 'tipsters':
        return 'Tipsters';
      case 'banca':
        return 'Banca';
      default:
        return 'Feed';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 bg-[#0d131f]/90 backdrop-blur-xl border-b border-[#242a37]/60 shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
      <div className="max-w-md mx-auto h-16 px-4 flex items-center justify-between">
        {/* Left: Brand Logo & Subtitle */}
        <div className="flex items-center gap-2.5">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZROkoESXTGU0RDmnQy3UMEwCN_07P8syCIwbtS6NUbyogs5DwnamiiCF0V8xGlukU9Ij0bPpjU6Z5WFiWnrPAqNOFiHC1v2kRWJlHNW9UDS2KslzUDxMhrhKc-U7hkHojmXF-X0VZqeRf5mlXzuqaV_FePSCWRqSnKnC8t5sGdicQGpQi6a9AacGEJqAHhDarCpmfm8_ZIAS1RMEnjPQ8OoJkXQOZZRD5LtbMs7GuYKASHfTg-thwdw"
            alt="BetTips PRO Logo"
            className="h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(0,255,135,0.4)] cursor-pointer"
            onClick={() => onShowToast('BetTips PRO - Algoritmos de Valor')}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-space font-bold text-lg text-[#dde2f3] tracking-tight leading-none">
                BetTips
              </span>
              <button
                type="button"
                onClick={onOpenVipPlans}
                className="px-1.5 py-0.5 rounded bg-[#00ff87]/20 text-[#00ff87] text-[10px] font-space font-bold uppercase tracking-wider hover:bg-[#00ff87]/30 transition-colors"
              >
                PRO
              </button>
            </div>
            <span className="text-[11px] text-[#b9cbb9] font-space font-medium leading-tight">
              {getTabLabel()}
            </span>
          </div>
        </div>

        {/* Right: Live indicator, Gallery button, Notifications & Profile */}
        <div className="flex items-center gap-2">
          {/* Live Indicator Badge */}
          <button
            type="button"
            onClick={() => onShowToast('12 eventos ao vivo com monitoramento de pressão em tempo real')}
            className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#242a37]/80 hover:bg-[#2f3542] transition-colors cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff87] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff87]"></span>
            </span>
            <span className="text-[10px] font-space text-[#00ff87] font-bold uppercase tracking-wider">
              12 AO VIVO
            </span>
          </button>

          {/* Interactive HTML Image Gallery Button */}
          <button
            type="button"
            onClick={onOpenGallery}
            title="Abrir Galeria Interativa & Links Diretos das Imagens HTML"
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#00e3fd]/15 hover:bg-[#00e3fd]/25 text-[#00e3fd] border border-[#00e3fd]/30 transition-all active:scale-95 shadow-[0_0_10px_rgba(0,227,253,0.15)]"
          >
            <span className="material-symbols-outlined text-[16px]">collections</span>
            <span className="text-[10px] font-space font-bold uppercase tracking-wider hidden sm:inline">
              Galeria
            </span>
          </button>

          {/* Notifications button */}
          <button
            type="button"
            aria-label="Notificações"
            onClick={() => onShowToast('Nenhuma nova notificação crítica.')}
            className="w-9 h-9 relative flex items-center justify-center text-[#b9cbb9] hover:text-[#dde2f3] transition-colors rounded-full hover:bg-[#242a37]"
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-1.5 right-1.5 flex h-2 w-2 rounded-full bg-[#ffb4ab] ring-2 ring-[#0d131f]"></span>
          </button>

          {/* Profile Avatar */}
          <button
            type="button"
            onClick={() => onShowToast('Perfil de apostador: @LopesMidia - Plano VIP Ativo')}
            className="flex items-center"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1834zkgwNuCgi_vn_PcZ63M6dy97EcLT3qlAUKRCW9C94jDvI3D3IVceULRMpYiW50c75GWvVaW5NpE82kd3gz4_bQf0mPAA0EEgTrdCrufMaHOI2FNY7pRhej1M3lX6j4MEgH5N6gfJAGbNisDCg8swz9ajYQ6ATIHWSqa0Y5vYDMGnUvcCY3jDPdEh3xH5fWEkCyQXZ4C3WeRu78MTx4f5RP_JybtFR34huzyJka5UFGb0yeF2-xQ"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-[#00ff87]/40 shadow-sm"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
