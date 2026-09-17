import React, { useState } from 'react';
import { TIPSTERS_RANKING } from '../data/mockData';

interface TipstersViewProps {
  onShowToast: (msg: string) => void;
}

export const TipstersView: React.FC<TipstersViewProps> = ({ onShowToast }) => {
  const [periodFilter, setPeriodFilter] = useState<'mes' | '3meses' | 'temporada'>('mes');
  const [marketFilter, setMarketFilter] = useState<'todos' | 'gols' | 'handicap' | 'cantos'>('todos');
  const [followedState, setFollowedState] = useState<Record<string, boolean>>({
    '@TraderGreen': true,
  });

  const toggleFollow = (handle: string, name: string) => {
    setFollowedState((prev) => {
      const isFollowing = !prev[handle];
      onShowToast(isFollowing ? `Você agora está seguindo ${name}!` : `Você deixou de seguir ${name}`);
      return { ...prev, [handle]: isFollowing };
    });
  };

  const featured = TIPSTERS_RANKING.find((t) => t.isFeatured) || TIPSTERS_RANKING[0];
  const runnersUp = TIPSTERS_RANKING.filter((t) => !t.isFeatured);

  return (
    <div className="flex flex-col w-full px-4 pt-3 pb-8 space-y-4">
      {/* Overview Summary & Title */}
      <div className="flex flex-col space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#00ff87] text-[20px]">verified</span>
            <h2 className="font-space text-lg text-[#dde2f3] font-bold tracking-tight">
              Ranking de Tipsters Verificados
            </h2>
          </div>
          <span className="font-space text-[10px] px-2 py-0.5 rounded-full bg-[#242a37] text-[#b9cbb9] flex items-center gap-1 border border-[#3b4b3d]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87] animate-pulse"></span>
            Tempo Real
          </span>
        </div>
        <p className="text-xs text-[#b9cbb9]">
          Estatísticas consolidadas e auditadas com base em stakes flat de 1 unidade.
        </p>
      </div>

      {/* Interactive Filters */}
      <div className="flex flex-col space-y-2">
        {/* Period Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
          {(
            [
              { id: 'mes', label: 'Este Mês' },
              { id: '3meses', label: 'Últimos 3 Meses' },
              { id: 'temporada', label: 'Temporada' },
            ] as const
          ).map((p) => {
            const isActive = periodFilter === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setPeriodFilter(p.id)}
                className={`font-space text-[12px] px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#00ff87] text-[#00210c] font-bold shadow-sm'
                    : 'bg-[#242a37] text-[#b9cbb9] hover:text-[#dde2f3] font-medium'
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Market Tags */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
          {(
            [
              { id: 'todos', label: 'Todos' },
              { id: 'gols', label: 'Gols / Ambas' },
              { id: 'handicap', label: 'Handicap Asiático' },
              { id: 'cantos', label: 'Cantos' },
            ] as const
          ).map((m) => {
            const isActive = marketFilter === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setMarketFilter(m.id)}
                className={`font-space text-[11px] px-2.5 py-1 rounded-lg transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#2f3542] text-[#00ff87] font-bold border border-[#00ff87]/30'
                    : 'bg-[#161c28] text-[#b9cbb9] hover:text-[#dde2f3] border border-[#242a37]'
                }`}
              >
                {m.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Tipster (#1 of the Month) */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#242a37] via-[#1a202c] to-[#161c28] p-4 shadow-xl border border-[#00ff87]/30">
        {/* Ambient Glows */}
        <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#00ff87]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#00e3fd]/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col space-y-3">
          {/* Top Badge Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00ff87] text-[#00210c] font-space text-[10px] font-bold shadow-sm">
              <span className="material-symbols-outlined text-[15px]">military_tech</span>
              #1 DESTAQUE DO MÊS
            </div>
            <div className="flex items-center gap-1 text-[#00ff87] font-space text-[10px] font-bold bg-[#080e1a]/80 px-2 py-0.5 rounded-full border border-[#00ff87]/20">
              <span className="material-symbols-outlined text-[13px]">local_fire_department</span>
              7 GREENS SEGUIDOS
            </div>
          </div>

          {/* Tipster Identity */}
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src={featured.avatar}
                alt={featured.name}
                className="w-15 h-15 rounded-full object-cover shadow-lg ring-2 ring-[#00ff87]/40"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#080e1a] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#00ff87] text-[16px]">
                  check_circle
                </span>
              </div>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="font-space text-base text-[#dde2f3] font-bold truncate">
                  {featured.name}
                </h3>
                <span className="font-space text-[10px] px-2 py-0.5 rounded bg-[#00e3fd]/15 text-[#9cf0ff] font-semibold">
                  {featured.badge}
                </span>
              </div>
              <span className="text-[12px] text-[#b9cbb9]">{featured.handle}</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="font-space text-[10px] text-[#b9cbb9]">Especialista:</span>
                <span className="font-space text-[10px] text-[#f1ffef] font-medium truncate">
                  {featured.specialty}
                </span>
              </div>
            </div>
          </div>

          {/* Performance Metrics Triad */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#080e1a]/90 text-center border border-[#242a37]">
              <span className="font-space text-[9px] text-[#b9cbb9] uppercase tracking-wider">Win Rate</span>
              <span className="font-space text-[18px] text-[#00ff87] font-bold mt-0.5">
                {featured.winRate}
              </span>
              <span className="text-[10px] text-[#b9cbb9]">{featured.tipsCount}</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#080e1a]/90 text-center border border-[#242a37]">
              <span className="font-space text-[9px] text-[#b9cbb9] uppercase tracking-wider">ROI Médio</span>
              <span className="font-space text-[18px] text-[#00ff87] font-bold mt-0.5">
                {featured.roi}
              </span>
              <span className="text-[10px] text-[#b9cbb9]">EV +8.4%</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#080e1a]/90 text-center border border-[#242a37]">
              <span className="font-space text-[9px] text-[#b9cbb9] uppercase tracking-wider">Lucro Líq.</span>
              <span className="font-space text-[18px] text-[#00e3fd] font-bold mt-0.5">
                {featured.profit}
              </span>
              <span className="text-[10px] text-[#9cf0ff]">Banca Base</span>
            </div>
          </div>

          {/* Action Button & Confidence Sparkline preview */}
          <div className="flex items-center gap-2 pt-1">
            <div className="flex-1 flex flex-col justify-center px-3 py-1.5 rounded-xl bg-[#242a37]/70 border border-[#2f3542]">
              <div className="flex justify-between items-center mb-0.5">
                <span className="font-space text-[9px] text-[#b9cbb9]">Confiança da Curva</span>
                <span className="font-space text-[10px] text-[#00ff87] font-bold">Consistência 9.8</span>
              </div>
              <svg className="w-full h-4" preserveAspectRatio="none" viewBox="0 0 100 20">
                <path
                  d="M0,18 Q15,16 30,12 T60,8 T85,4 L100,2"
                  fill="none"
                  stroke="#00ff87"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <button
              type="button"
              onClick={() => toggleFollow(featured.handle, featured.name)}
              className={`px-4 py-2.5 rounded-xl font-space text-[12px] font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all ${
                followedState[featured.handle]
                  ? 'bg-[#00ff87] text-[#00210c]'
                  : 'bg-[#2f3542] text-[#dde2f3] hover:bg-[#00ff87] hover:text-[#00210c]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {followedState[featured.handle] ? 'check' : 'add_task'}
              </span>
              <span>{followedState[featured.handle] ? 'Seguindo' : 'Seguir Tips'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Leaderboard Section */}
      <div className="flex flex-col space-y-2.5">
        <div className="flex items-center justify-between px-1">
          <h3 className="font-space text-[12px] text-[#dde2f3] uppercase tracking-wider font-bold">
            Próximos Líderes do Ranking
          </h3>
          <span className="font-space text-[10px] text-[#b9cbb9]">Critério: ROI Decrescente</span>
        </div>

        {runnersUp.map((tipster) => {
          const isFollowing = followedState[tipster.handle];
          return (
            <div
              key={tipster.rank}
              className="flex flex-col rounded-2xl bg-[#1a202c] p-3.5 space-y-2.5 shadow-sm border border-[#242a37] hover:border-[#00ff87]/30 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2f3542] text-[#dde2f3] font-space text-[12px] font-bold shrink-0">
                    {tipster.rank}
                  </div>
                  <img
                    src={tipster.avatar}
                    alt={tipster.name}
                    className="w-11 h-11 rounded-full object-cover shrink-0 ring-1 ring-[#00e3fd]/30"
                  />
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-space text-[13px] text-[#dde2f3] font-bold truncate">
                        {tipster.name}
                      </span>
                      <span className="material-symbols-outlined text-[#00e3fd] text-[15px]">
                        verified
                      </span>
                    </div>
                    <span className="text-[11px] text-[#b9cbb9] truncate">
                      {tipster.handle} · {tipster.badge}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end shrink-0 pl-2">
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00ff87]/15 text-[#00ff87] font-space text-[10px] font-bold">
                    <span className="material-symbols-outlined text-[12px]">local_fire_department</span>
                    {tipster.streakText}
                  </div>
                  <span className="font-space text-[9px] text-[#b9cbb9] mt-0.5">
                    {tipster.tipsCount}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                <div className="p-2 rounded-xl bg-[#161c28] flex flex-col items-center border border-[#242a37]">
                  <span className="font-space text-[9px] text-[#b9cbb9]">Win Rate</span>
                  <span className="font-space text-[14px] text-[#dde2f3] font-bold">
                    {tipster.winRate}
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-[#161c28] flex flex-col items-center border border-[#242a37]">
                  <span className="font-space text-[9px] text-[#b9cbb9]">ROI</span>
                  <span className="font-space text-[14px] text-[#00ff87] font-bold">
                    {tipster.roi}
                  </span>
                </div>
                <div className="p-1 rounded-xl bg-[#161c28] flex items-center justify-center border border-[#242a37]">
                  <button
                    type="button"
                    onClick={() => toggleFollow(tipster.handle, tipster.name)}
                    className={`w-full h-full rounded-lg font-space text-[11px] font-bold transition-all py-1.5 flex items-center justify-center gap-1 ${
                      isFollowing
                        ? 'bg-[#00ff87] text-[#00210c]'
                        : 'bg-[#2f3542] hover:bg-[#00ff87] hover:text-[#00210c] text-[#dde2f3]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[13px]">
                      {isFollowing ? 'check' : 'add'}
                    </span>
                    <span>{isFollowing ? 'Seguindo' : 'Seguir'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Transparent Audit Block */}
      <div className="rounded-2xl bg-[#080e1a] p-3.5 flex flex-col space-y-2.5 shadow-md border border-[#242a37]">
        <div className="flex items-start gap-2.5">
          <div className="p-2 rounded-xl bg-[#00ff87]/10 text-[#00ff87] shrink-0 border border-[#00ff87]/20">
            <span className="material-symbols-outlined text-[22px]">gavel</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <h4 className="font-space text-[14px] text-[#dde2f3] font-bold">
                Auditoria 100% Transparente
              </h4>
              <span className="font-space text-[9px] px-1.5 py-0.2 rounded bg-[#00ff87] text-[#00210c] font-bold">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-[#b9cbb9] mt-1 leading-relaxed">
              Zero manipulação de odds ou tips deletadas. Todas as entradas possuem carimbo de data/hora imutável antes do pontapé inicial.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onShowToast('Registro de auditoria criptográfica aberto para consulta pública.')}
          className="flex items-center justify-between p-2.5 rounded-xl bg-[#242a37]/80 hover:bg-[#242a37] transition-colors border border-[#3b4b3d]/40 text-left"
        >
          <div className="flex items-center gap-2 min-w-0">
            <span className="material-symbols-outlined text-[#00e3fd] text-[16px] shrink-0">lock</span>
            <span className="font-space text-[10px] text-[#dde2f3] truncate">
              Todos os bilhetes são registrados na blockchain/sistema antes do apito inicial
            </span>
          </div>
          <span className="material-symbols-outlined text-[#00ff87] text-[16px] shrink-0">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
};
