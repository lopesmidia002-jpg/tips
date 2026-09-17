import React, { useState } from 'react';
import { VERIFIED_TIPS } from '../data/mockData';
import { ActiveTab } from '../types';

interface FeedViewProps {
  onShowToast: (msg: string) => void;
  onNavigateTab: (tab: ActiveTab) => void;
  onSaveToBankroll: (item: { match: string; market: string; odds: number; stake: string }) => void;
}

export const FeedView: React.FC<FeedViewProps> = ({
  onShowToast,
  onNavigateTab,
  onSaveToBankroll
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'futebol' | 'nba' | 'tenis' | 'esports' | 'aovivo'>('todos');
  const [bookmarkedTips, setBookmarkedTips] = useState<Record<string, boolean>>({});

  const toggleBookmark = (id: string) => {
    setBookmarkedTips((prev) => {
      const next = !prev[id];
      onShowToast(next ? 'Palpite salvo nos seus favoritos!' : 'Palpite removido dos favoritos');
      return { ...prev, [id]: next };
    });
  };

  const handleCopyTicket = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    onShowToast('Bilhete copiado para a área de transferência!');
  };

  const handleShare = (title: string) => {
    if (navigator.share) {
      navigator.share({
        title: 'BetTips PRO',
        text: `Confira este palpite no BetTips PRO: ${title}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      handleCopyTicket(title);
    }
  };

  const filteredTips = VERIFIED_TIPS.filter((tip) => {
    if (selectedFilter === 'todos') return true;
    if (selectedFilter === 'futebol') return tip.category === 'futebol' || tip.category === 'brasileirao';
    if (selectedFilter === 'nba') return tip.category === 'nba';
    if (selectedFilter === 'aovivo') return true; // mock live items
    return true;
  });

  return (
    <div className="flex flex-col w-full pb-6">
      {/* Performance Snapshot Banner */}
      <div className="px-4 pt-3 pb-1">
        <div className="bg-[#242a37] rounded-full px-3 py-2 flex items-center justify-between shadow-sm border border-[#3b4b3d]/30">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 rounded-full bg-[#00ff87]/15 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#00ff87] text-[16px]">verified</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <span className="font-space text-[10px] text-[#b9cbb9] uppercase tracking-wider font-bold">
                Greens Hoje:
              </span>
              <span className="font-space text-[12px] text-[#00ff87] font-bold">8/9</span>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0 pl-2">
            <span className="font-space text-[10px] text-[#b9cbb9] uppercase">ROI:</span>
            <span className="font-space text-[12px] text-[#00ff87] font-bold bg-[#00ff87]/10 px-2 py-0.5 rounded-full">
              +14.2%
            </span>
          </div>
        </div>
      </div>

      {/* Hero Highlight: Tip Ouro do Dia */}
      <section className="px-4 py-2">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#242a37] via-[#1a202c] to-[#080e1a] p-4 shadow-xl border border-[#00ff87]/20">
          {/* Ambient Glow */}
          <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-[#00ff87]/10 blur-2xl pointer-events-none"></div>

          {/* Header Badge Row */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-1.5 bg-[#00e3fd]/15 px-2.5 py-1 rounded-full border border-[#00e3fd]/30">
              <span className="material-symbols-outlined text-[#00e3fd] text-[16px]">bolt</span>
              <span className="font-space text-[10px] uppercase font-bold tracking-wider text-[#00e3fd]">
                Tip Ouro do Dia
              </span>
            </div>
            <div className="flex items-center gap-1 bg-[#00ff87]/20 px-2.5 py-1 rounded-full border border-[#00ff87]/30">
              <span className="font-space text-[10px] uppercase tracking-wider text-[#00ff87] font-bold">
                EV+ 18%
              </span>
            </div>
          </div>

          {/* Match Details */}
          <div
            className="flex items-center justify-between mb-3 cursor-pointer group"
            onClick={() => onNavigateTab('analise')}
            title="Ver análise completa do jogo"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#2f3542] flex items-center justify-center p-1.5 shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[#dde2f3] text-[22px]">sports_soccer</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-space text-[10px] uppercase text-[#b9cbb9]">UEFA Champions League</span>
                  <span className="w-1 h-1 rounded-full bg-[#3b4b3d]"></span>
                  <span className="font-space text-[10px] text-[#b9cbb9]">20:00</span>
                </div>
                <h2 className="font-space text-lg text-[#dde2f3] font-bold group-hover:text-[#00ff87] transition-colors">
                  Real Madrid <span className="text-[#b9cbb9] text-xs font-normal">vs</span> Man City
                </h2>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#b9cbb9] text-[20px] group-hover:text-[#00ff87] group-hover:translate-x-0.5 transition-all">
              chevron_right
            </span>
          </div>

          {/* Recommendation Card Inside Gold Pick */}
          <div className="bg-[#080e1a]/80 rounded-xl p-3 mb-3 border border-[#242a37]">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-space text-[10px] uppercase tracking-wider text-[#b9cbb9]">
                Mercado Recomendado
              </span>
              <span className="font-space text-[11px] text-[#00ff87] font-bold">Confiança 92%</span>
            </div>
            <div className="font-space text-[14px] text-[#f1ffef] font-bold tracking-wide">
              Ambas Marcam e Mais de 2.5 Gols
            </div>

            {/* Metrics Row */}
            <div className="mt-2.5 pt-2 flex items-center justify-between border-t border-[#242a37]">
              <div className="flex items-center gap-3">
                <div>
                  <span className="font-space text-[10px] block text-[#b9cbb9] uppercase">Odd Alvo</span>
                  <span className="font-space text-[16px] text-[#00ff87] font-bold">1.95</span>
                </div>
                <div className="w-px h-6 bg-[#2f3542]"></div>
                <div>
                  <span className="font-space text-[10px] block text-[#b9cbb9] uppercase">Stake</span>
                  <span className="font-space text-[12px] text-[#dde2f3] font-semibold">2.5 Unidades</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-space text-[10px] text-[#b9cbb9] uppercase mb-1">Métrica IA</span>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2.5 rounded-[2px] bg-[#00ff87]"></span>
                  <span className="w-2 h-2.5 rounded-[2px] bg-[#00ff87]"></span>
                  <span className="w-2 h-2.5 rounded-[2px] bg-[#00ff87]"></span>
                  <span className="w-2 h-2.5 rounded-[2px] bg-[#00ff87]"></span>
                  <span className="w-2 h-2.5 rounded-[2px] bg-[#00ff87]/25"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            onClick={() => {
              handleCopyTicket('Real Madrid vs Man City: Ambas Marcam e +2.5 Gols (Odd 1.95)');
              onSaveToBankroll({
                match: 'Real Madrid vs Man City',
                market: 'Ambas Marcam & +2.5 Gols',
                odds: 1.95,
                stake: '2.5u'
              });
            }}
            className="w-full h-11 rounded-xl bg-[#00ff87] hover:bg-[#00e478] active:scale-[0.98] text-[#00210c] font-space text-[14px] font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_16px_rgba(0,255,135,0.3)]"
          >
            <span className="material-symbols-outlined text-[20px]">content_copy</span>
            <span>Copiar Bilhete Pronto</span>
          </button>
        </div>
      </section>

      {/* Horizontal Filter Pills */}
      <div className="py-2.5 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 px-4 min-w-max">
          {(
            [
              { id: 'todos', label: 'Todos' },
              { id: 'futebol', label: 'Futebol' },
              { id: 'nba', label: 'Basquete (NBA)' },
              { id: 'tenis', label: 'Tênis' },
              { id: 'esports', label: 'eSports' },
              { id: 'aovivo', label: 'Ao Vivo (3)', isPulse: true },
            ] as { id: 'todos' | 'futebol' | 'nba' | 'tenis' | 'esports' | 'aovivo'; label: string; isPulse?: boolean }[]
          ).map((filter) => {
            const isActive = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3.5 py-1.5 rounded-full font-space text-[12px] transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#00ff87] text-[#00210c] font-bold shadow-sm'
                    : 'bg-[#242a37] text-[#b9cbb9] hover:text-[#dde2f3] font-semibold'
                }`}
              >
                {filter.isPulse && (
                  <span className="w-2 h-2 rounded-full bg-[#ffb4ab] animate-pulse"></span>
                )}
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feed Header */}
      <div className="px-4 pt-2 pb-1 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[#00ff87] text-[18px]">verified_user</span>
          <span className="font-space text-base text-[#dde2f3] font-bold">Palpites Verificados</span>
        </div>
        <span className="font-space text-[10px] text-[#b9cbb9] uppercase tracking-wider">
          Ordenado por EV
        </span>
      </div>

      {/* Tips Feed List */}
      <div className="flex flex-col gap-3 px-4 py-2">
        {filteredTips.map((tip) => {
          const isSaved = bookmarkedTips[tip.id];
          return (
            <article
              key={tip.id}
              className="bg-[#161c28] rounded-2xl p-3.5 flex flex-col gap-3 shadow-md border border-[#242a37]/80 hover:border-[#00ff87]/30 transition-all"
            >
              {/* Tipster Meta Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={tip.tipster.avatar}
                    alt={tip.tipster.name}
                    className="w-8 h-8 rounded-full object-cover bg-[#2f3542] ring-1 ring-[#00ff87]/30"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="font-space text-[12px] text-[#dde2f3] font-bold">
                        {tip.tipster.handle}
                      </span>
                      <span className="material-symbols-outlined text-[#00ff87] text-[15px]">
                        check_circle
                      </span>
                    </div>
                    <span className="font-space text-[10px] text-[#00ff87] font-semibold">
                      {tip.tipster.roi}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-[#242a37] px-2 py-0.5 rounded-full">
                  <span className="font-space text-[10px] text-[#b9cbb9] font-medium capitalize">
                    {tip.category === 'brasileirao' ? 'Brasileirão' : tip.category}
                  </span>
                </div>
              </div>

              {/* Match Info & Odds Matrix */}
              <div className="flex flex-col gap-1.5 bg-[#1a202c] rounded-xl p-2.5 border border-[#242a37]">
                <div className="flex items-center justify-between">
                  <span className="font-space text-[10px] text-[#b9cbb9] uppercase">
                    {tip.tournament} • {tip.time}
                  </span>
                  <span className="font-space text-[10px] text-[#00e3fd] font-bold">
                    Prob. {tip.probability}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-space text-[14px] text-[#dde2f3] font-bold truncate">
                      {tip.match}
                    </h3>
                    <p className="text-[13px] text-[#f1ffef] font-medium mt-0.5">
                      {tip.market}
                    </p>
                  </div>
                  <div className="flex flex-col items-end shrink-0">
                    <div className="px-2.5 py-1 rounded-lg bg-[#2f3542] text-[#00ff87] font-space text-[15px] font-bold border border-[#00ff87]/20">
                      {tip.odds.toFixed(2)}
                    </div>
                    <span className="font-space text-[10px] text-[#b9cbb9] mt-0.5">
                      Stake {tip.stake}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions Bar */}
              <div className="flex items-center justify-between pt-0.5">
                <div className="flex items-center gap-1.5 text-[#b9cbb9]">
                  <span className="material-symbols-outlined text-[16px] text-[#00ff87]">
                    {tip.tagIcon}
                  </span>
                  <span className="text-[11px] font-medium">{tip.tag}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    aria-label="Salvar palpite"
                    onClick={() => toggleBookmark(tip.id)}
                    className={`w-9 h-9 rounded-lg bg-[#242a37] flex items-center justify-center transition-colors ${
                      isSaved ? 'text-[#00ff87]' : 'text-[#b9cbb9] hover:text-[#00ff87]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {isSaved ? 'bookmark' : 'bookmark_border'}
                    </span>
                  </button>
                  <button
                    type="button"
                    aria-label="Compartilhar palpite"
                    onClick={() => handleShare(`${tip.match}: ${tip.market}`)}
                    className="w-9 h-9 rounded-lg bg-[#242a37] flex items-center justify-center text-[#b9cbb9] hover:text-[#dde2f3] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">share</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleCopyTicket(`${tip.match}: ${tip.market} (Odd ${tip.odds})`);
                      onSaveToBankroll({
                        match: tip.match,
                        market: tip.market,
                        odds: tip.odds,
                        stake: tip.stake
                      });
                    }}
                    className="h-9 px-3 rounded-lg bg-[#2f3542] hover:bg-[#00ff87] hover:text-[#00210c] text-[#f1ffef] font-space text-[12px] font-bold flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[16px]">add_task</span>
                    <span>Seguir</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
