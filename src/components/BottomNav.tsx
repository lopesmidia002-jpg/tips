import React from 'react';
import { ActiveTab } from '../types';

interface BottomNavProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onSelectTab }) => {
  const navItems: { id: ActiveTab; label: string; icon: string; isLive?: boolean }[] = [
    { id: 'feed', label: 'Feed', icon: 'local_fire_department' },
    { id: 'analise', label: 'Análise', icon: 'monitoring' },
    { id: 'vip', label: 'VIP/Live', icon: 'bolt', isLive: true },
    { id: 'tipsters', label: 'Tipsters', icon: 'military_tech' },
    { id: 'banca', label: 'Banca', icon: 'account_balance_wallet' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full z-40 pb-[env(safe-area-inset-bottom,0px)] bg-[#080e1a]/95 backdrop-blur-xl border-t border-[#242a37]/60 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectTab(item.id)}
              className={`relative flex flex-col items-center justify-center gap-1 w-16 h-14 transition-all ${
                isActive
                  ? 'text-[#00ff87] font-bold'
                  : 'text-[#b9cbb9] hover:text-[#dde2f3]'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span className={`material-symbols-outlined text-[22px] transition-transform ${isActive ? 'scale-110' : ''}`}>
                  {item.icon}
                </span>
                {item.isLive && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff87] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff87]"></span>
                  </span>
                )}
              </div>
              <span className="font-space text-[10px] uppercase tracking-wider leading-none">
                {item.label}
              </span>

              {isActive && (
                <span className="absolute bottom-1 w-7 h-0.5 bg-[#00ff87] rounded-full shadow-[0_0_8px_#00ff87]"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
