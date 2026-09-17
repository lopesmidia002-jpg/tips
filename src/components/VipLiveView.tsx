import React, { useState } from 'react';
import { LIVE_MATCHES } from '../data/mockData';

interface VipLiveViewProps {
  onShowToast: (msg: string) => void;
  onOpenVipPlans: () => void;
  onSaveToBankroll: (item: { match: string; market: string; odds: number; stake: string }) => void;
}

export const VipLiveView: React.FC<VipLiveViewProps> = ({
  onShowToast,
  onOpenVipPlans,
  onSaveToBankroll
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'live' | 'vip'>('live');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [pushSettings, setPushSettings] = useState({
    gols: true,
    cantos: true,
    cartoes: false,
    erroCasa: true
  });

  const toggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      onShowToast(next ? 'Alerta sonoro ativado (som agudo de gol/pressão)!' : 'Alerta sonoro desativado');
      return next;
    });
  };

  const togglePush = (key: keyof typeof pushSettings) => {
    setPushSettings((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      onShowToast(`Configuração de notificação atualizada.`);
      return next;
    });
  };

  return (
    <div className="flex flex-col w-full pb-8">
      {/* Status & Live Radar Header */}
      <div className="px-4 pt-2 pb-3">
        <div className="relative overflow-hidden rounded-2xl bg-[#161c28] p-3.5 shadow-md border border-[#242a37]">
          {/* Glow background */}
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#00ff87]/10 blur-2xl pointer-events-none"></div>

          <div className="flex items-center justify-between mb-2 relative z-10">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff87] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ff87]"></span>
              </span>
              <span className="font-space text-[10px] text-[#00ff87] tracking-wider uppercase font-bold">
                Radar ao Vivo Ativo
              </span>
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#242a37] text-[#b9cbb9] font-space text-[10px] border border-[#3b4b3d]/30">
              <span className="material-symbols-outlined text-[12px] text-[#00e3fd]">memory</span>
              <span>Latência: 18ms</span>
            </div>
          </div>

          <div className="flex items-baseline justify-between relative z-10">
            <div>
              <p className="font-space text-base text-[#dde2f3] font-bold">8 Jogos Monitorados</p>
              <p className="text-[11px] text-[#b9cbb9]">IA de pressão ofensiva e 4 analistas de prontidão</p>
            </div>
            <div className="flex -space-x-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0uoHa-Jb_UV9cLGHhAIuUxD4jZI0Vz4Op-BBH6YA-eYMnL67gvov4IUEbhdgo1QKLT3rOSaaeDxO8enDb8pCFb1nugzIoMzw-cu0qMj55NHLQ9-d7ekhrHxJfxZzej0HcZwtqDh43cusBeYKDS4bzTX0WwXLW7KGaneTxASfB88-4sJlDMKFdkHXEwFVLweh99KI8O77uowXCtGTkx2FLJiFVvydwHfBHbZS423l7L5UMKqa8IVl0Q"
                alt="Analista Radar 1"
                className="w-7 h-7 rounded-full object-cover ring-2 ring-[#080e1a]"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTgk-iDHNyvKiye0GMldPU1gCR44qhKrJ4CbKMC-yTxCr3ELlTklfZyd07c8N1UHKgtgNEcMoJhmqgiIry6GFJ9qmJg793Dzc7g1dH1uKkkD-MEuK26fGLkhtPwalkIivvbzapReM2MaMpuFCJnOS7i36F4STR8iALm8VKOO7oP0vANgDTY5yaEbaPcBxlrXHbUQcfjJxYJEQvdgq23-JRVPvuoE3Wh4GjggbD2dGHDbid34fWA-11wQ"
                alt="Analista Radar 2"
                className="w-7 h-7 rounded-full object-cover ring-2 ring-[#080e1a]"
              />
              <div className="w-7 h-7 rounded-full bg-[#333946] flex items-center justify-center text-[10px] font-bold text-[#00ff87] ring-2 ring-[#080e1a]">
                +2
              </div>
            </div>
          </div>

          {/* Sound Toggle */}
          <div className="mt-3 pt-2 flex items-center justify-between bg-[#1a202c]/70 rounded-xl px-3 py-2 border border-[#242a37]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00ff87] text-[18px]">
                {soundEnabled ? 'volume_up' : 'volume_off'}
              </span>
              <span className="text-[12px] text-[#dde2f3] font-medium">Alerta Sonoro de Oportunidade</span>
            </div>
            <button
              type="button"
              aria-label="Alternar som dos alertas"
              onClick={toggleSound}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                soundEnabled ? 'bg-[#00ff87]' : 'bg-[#2f3542]'
              }`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 transform rounded-full bg-[#00210c] transition-transform ${
                  soundEnabled ? 'translate-x-4.5' : 'translate-x-1 bg-[#dde2f3]'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Sub Tabs Selector */}
      <div className="px-4 mb-3">
        <div className="grid grid-cols-2 p-1 rounded-xl bg-[#080e1a] border border-[#242a37] shadow-inner">
          <button
            type="button"
            onClick={() => setActiveSubTab('live')}
            className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-space text-[12px] transition-all ${
              activeSubTab === 'live'
                ? 'bg-[#1a202c] text-[#00ff87] font-bold shadow-sm border border-[#00ff87]/20'
                : 'text-[#b9cbb9] hover:text-[#dde2f3] font-medium'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">smart_toy</span>
            <span>Alertas Live Bot (2)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveSubTab('vip')}
            className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-space text-[12px] transition-all ${
              activeSubTab === 'vip'
                ? 'bg-[#1a202c] text-[#00ff87] font-bold shadow-sm border border-[#00ff87]/20'
                : 'text-[#b9cbb9] hover:text-[#dde2f3] font-medium'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
            <span>Salas &amp; Canais VIP</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: Live Bot Alerts */}
      {activeSubTab === 'live' && (
        <div className="flex flex-col gap-3 px-4">
          {/* Card 1: Entrada Quente (Minuto 68') */}
          <div className="flex flex-col rounded-2xl bg-[#1a202c] p-3.5 relative overflow-hidden shadow-md border border-[#00ff87]/30">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff87] via-[#00e3fd] to-[#00ff87]"></div>

            {/* Sub-header */}
            <div className="flex items-center justify-between mb-2.5 pt-0.5">
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded bg-[#93000a]/30 text-[#ffb4ab] font-space text-[10px] uppercase flex items-center gap-1 font-bold border border-[#ffb4ab]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffb4ab] animate-pulse"></span>
                  Minuto 68'
                </span>
                <span className="px-2 py-0.5 rounded bg-[#242a37] text-[#00e3fd] font-space text-[10px] uppercase font-semibold">
                  Champions League
                </span>
              </div>
              <div className="flex items-center gap-1 text-[#00ff87]">
                <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                <span className="font-space text-[10px] uppercase font-bold">Super Quente</span>
              </div>
            </div>

            {/* Matchup Scoreboard */}
            <div className="flex items-center justify-between py-2 mb-2.5 bg-[#161c28] rounded-xl px-3 border border-[#242a37]">
              <div className="flex flex-col">
                <span className="font-space text-[15px] text-[#dde2f3] font-bold">Arsenal</span>
                <span className="font-space text-[10px] text-[#b9cbb9]">Mandante</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 bg-[#0d131f] px-3 py-1 rounded-full border border-[#2f3542]">
                  <span className="font-space text-[18px] text-[#dde2f3] font-bold">1</span>
                  <span className="text-[#b9cbb9] font-space text-[12px]">-</span>
                  <span className="font-space text-[18px] text-[#dde2f3] font-bold">1</span>
                </div>
                <span className="font-space text-[10px] text-[#00ff87] font-semibold mt-0.5">
                  2T em andamento
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-space text-[15px] text-[#dde2f3] font-bold">Bayern Munique</span>
                <span className="font-space text-[10px] text-[#b9cbb9]">Visitante</span>
              </div>
            </div>

            {/* Momentum Telemetry Widget */}
            <div className="mb-3 bg-[#080e1a]/80 rounded-xl p-2.5 border border-[#242a37]">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#00e3fd] text-[15px]">speed</span>
                  <span className="font-space text-[11px] text-[#dde2f3] font-semibold">
                    Pressão Ofensiva Arsenal
                  </span>
                </div>
                <span className="font-space text-[11px] text-[#00e3fd] font-bold">89% (Crítica)</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#242a37] overflow-hidden">
                <div className="h-full rounded-full bg-[#00e3fd] shadow-[0_0_8px_#00e3fd]" style={{ width: '89%' }}></div>
              </div>
              <div className="flex items-center justify-between mt-2 text-[10px] text-[#b9cbb9]">
                <span>+12 finalizações no 2T</span>
                <span>xG Últimos 15m: 1.42</span>
                <span>Ataques perigosos: 26</span>
              </div>
            </div>

            {/* Recommendation & Live Odds Box */}
            <div className="grid grid-cols-5 gap-2 mb-3">
              <div className="col-span-3 flex flex-col justify-center p-2.5 rounded-xl bg-[#161c28] border border-[#242a37]">
                <span className="font-space text-[9px] text-[#b9cbb9] uppercase">Sugestão do Analista</span>
                <span className="font-space text-[13px] text-[#dde2f3] font-bold">Over 2.5 Gols no Jogo</span>
                <span className="text-[11px] text-[#00ff87]">Janela limite: Odd min @2.05</span>
              </div>
              <div className="col-span-2 flex flex-col items-center justify-center p-2 rounded-xl bg-[#242a37] border border-[#00ff87]/30 text-center">
                <span className="font-space text-[9px] text-[#b9cbb9] uppercase">Odd ao Vivo</span>
                <div className="flex items-center gap-1">
                  <span className="font-space text-[18px] text-[#00ff87] font-bold">@2.15</span>
                  <span className="material-symbols-outlined text-[#00ff87] text-[16px] animate-bounce">
                    arrow_upward
                  </span>
                </div>
                <span className="font-space text-[10px] text-[#60ff98]">Subindo agora</span>
              </div>
            </div>

            {/* Liquidity Window */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-1.5 text-[#b9cbb9] font-space text-[11px]">
                <span className="material-symbols-outlined text-[14px] text-[#00ff87]">timelapse</span>
                <span>Janela: <strong className="text-[#dde2f3]">~3 min restantes</strong></span>
              </div>
              <span className="font-space text-[10px] text-[#b9cbb9]">Liquidez: Alta</span>
            </div>

            {/* Action Button */}
            <button
              type="button"
              onClick={() => {
                onSaveToBankroll({
                  match: 'Arsenal vs Bayern Munique (LIVE 68\')',
                  market: 'Over 2.5 Gols no Jogo',
                  odds: 2.15,
                  stake: '1.5u'
                });
                onShowToast('Entrada ao vivo confirmada com 1-Toque! Odd @2.15 travada.');
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#00ff87] text-[#00210c] font-space text-[14px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-[0_0_18px_rgba(0,255,135,0.25)]"
            >
              <span className="material-symbols-outlined text-[18px]">flash_on</span>
              <span>Pegar Entrada com 1-Toque</span>
            </button>
          </div>

          {/* Card 2: Alerta Sniper Bot (Minuto 81') */}
          <div className="flex flex-col rounded-2xl bg-[#1a202c] p-3.5 relative overflow-hidden shadow-md border border-[#242a37]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded bg-[#2f3542] text-[#9cf0ff] font-space text-[10px] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">smart_toy</span>
                  ALERTA SNIPER BOT
                </span>
                <span className="px-2 py-0.5 rounded bg-[#93000a]/20 text-[#ffb4ab] font-space text-[10px] uppercase font-bold">
                  Minuto 81'
                </span>
              </div>
              <div className="flex items-center gap-1 text-[#00ff87] font-space text-[10px] font-bold">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                <span>84% Assertivo</span>
              </div>
            </div>

            {/* Matchup */}
            <div className="flex items-center justify-between py-2 mb-2.5 bg-[#161c28] rounded-xl px-3 border border-[#242a37]">
              <div className="flex flex-col">
                <span className="font-space text-[14px] text-[#dde2f3] font-bold">Flamengo</span>
                <span className="font-space text-[10px] text-[#b9cbb9]">Pressão total</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 bg-[#0d131f] px-2.5 py-0.5 rounded-full border border-[#2f3542]">
                  <span className="font-space text-[14px] text-[#dde2f3] font-bold">0</span>
                  <span className="text-[#b9cbb9] text-[10px]">x</span>
                  <span className="font-space text-[14px] text-[#dde2f3] font-bold">1</span>
                </div>
                <span className="font-space text-[10px] text-[#b9cbb9] mt-0.5">Brasileirão Série A</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-space text-[14px] text-[#dde2f3] font-bold">Palmeiras</span>
                <span className="font-space text-[10px] text-[#b9cbb9]">Linha recuada</span>
              </div>
            </div>

            {/* Pattern Alert Box */}
            <div className="mb-3 p-3 rounded-xl bg-[#080e1a] border border-[#242a37]">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00e3fd] text-[18px] mt-0.5">
                  sports_soccer
                </span>
                <div className="flex flex-col">
                  <span className="font-space text-[13px] text-[#dde2f3] font-bold">
                    Cantos Limite Asiático (+9.5)
                  </span>
                  <p className="text-[11px] text-[#b9cbb9] mt-0.5">
                    Flamengo cruzando bolas consecutivas (9 escanteios até agora). Bot disparou gatilho de valor com base em 1.200 partidas históricas.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#242a37]">
                <div className="flex flex-col px-2 py-1 rounded-lg bg-[#161c28]">
                  <span className="font-space text-[9px] text-[#b9cbb9]">Taxa 30 Dias</span>
                  <span className="font-space text-[12px] text-[#00ff87] font-bold">+28.4% ROI</span>
                </div>
                <div className="flex flex-col px-2 py-1 rounded-lg bg-[#161c28]">
                  <span className="font-space text-[9px] text-[#b9cbb9]">Stake Sugerida</span>
                  <span className="font-space text-[12px] text-[#00e3fd] font-bold">1.5 Unidades</span>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center justify-between px-3 py-2 rounded-xl bg-[#242a37] border border-[#2f3542]">
                <span className="font-space text-[10px] text-[#b9cbb9]">ODD ATUAL</span>
                <span className="font-space text-[16px] text-[#00ff87] font-bold">@1.85</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  onSaveToBankroll({
                    match: 'Flamengo vs Palmeiras (LIVE 81\')',
                    market: 'Cantos Limite Asiático (+9.5)',
                    odds: 1.85,
                    stake: '1.5u'
                  });
                  onShowToast('Tip copiada e adicionada à sua gestão!');
                }}
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#2f3542] hover:bg-[#00ff87] hover:text-[#00210c] text-[#dde2f3] font-space text-[12px] font-bold flex items-center justify-center gap-1.5 transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">add_circle</span>
                <span>Copiar Tip</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: VIP Rooms & Exclusive Channels */}
      {activeSubTab === 'vip' && (
        <div className="flex flex-col gap-3 px-4">
          {/* VIP Pass Status Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#242a37] via-[#1a202c] to-[#080e1a] p-4 shadow-xl border border-[#00ff87]/30">
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-[#00e3fd]/10 blur-3xl pointer-events-none"></div>
            <div className="flex items-start justify-between relative z-10 mb-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#00ff87] text-[18px]">military_tech</span>
                  <span className="font-space text-base font-bold text-[#dde2f3]">
                    Passe Membro VIP Elite
                  </span>
                </div>
                <span className="font-space text-[10px] text-[#60ff98] uppercase tracking-wider">
                  Acesso Master Ativo
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#00ff87]/20 text-[#00ff87] font-space text-[10px] font-bold border border-[#00ff87]/30">
                OURO
              </span>
            </div>

            <p className="text-[11px] text-[#b9cbb9] mb-3 relative z-10 leading-relaxed">
              Você possui latência ultra-baixa de zero milissegundos, bilhetes prontos 15 min antes das casas corrigirem e canais integrados via Telegram/Discord.
            </p>

            {/* VIP Stats mini-bar */}
            <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-[#0d131f]/80 backdrop-blur mb-3 relative z-10 border border-[#242a37]">
              <div className="flex flex-col">
                <span className="font-space text-[9px] text-[#b9cbb9]">Greens Mês</span>
                <span className="font-space text-[16px] text-[#00ff87] font-bold">142</span>
              </div>
              <div className="flex flex-col">
                <span className="font-space text-[9px] text-[#b9cbb9]">Win Rate</span>
                <span className="font-space text-[16px] text-[#00e3fd] font-bold">81.7%</span>
              </div>
              <div className="flex flex-col">
                <span className="font-space text-[9px] text-[#b9cbb9]">Lucro (u)</span>
                <span className="font-space text-[16px] text-[#00ff87] font-bold">+34.8u</span>
              </div>
            </div>

            <div className="flex items-center gap-2 relative z-10">
              <button
                type="button"
                onClick={() => onShowToast('Canal Telegram VIP aberto!')}
                className="flex-1 py-2 px-3 rounded-xl bg-[#2f3542] hover:bg-[#333946] text-[#dde2f3] font-space text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors"
              >
                <span className="material-symbols-outlined text-[15px] text-[#00e3fd]">send</span>
                <span>Abrir Telegram Bot</span>
              </button>
              <button
                type="button"
                onClick={() => onShowToast('Servidor Discord VIP conectado!')}
                className="flex-1 py-2 px-3 rounded-xl bg-[#2f3542] hover:bg-[#333946] text-[#dde2f3] font-space text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors"
              >
                <span className="material-symbols-outlined text-[15px] text-[#00ff87]">
                  swap_horizontal_circle
                </span>
                <span>Discord VIP</span>
              </button>
            </div>
          </div>

          {/* Channels list */}
          <div
            onClick={() => onShowToast('Entrando na Sala Sniper Live...')}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-[#1a202c] shadow-sm border border-[#242a37] hover:border-[#00ff87]/30 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#242a37] flex items-center justify-center text-[#00ff87] border border-[#00ff87]/20">
                <span className="material-symbols-outlined text-[24px]">precision_manufacturing</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-space text-[14px] text-[#dde2f3] font-bold">Sala Sniper Live</span>
                  <span className="w-2 h-2 rounded-full bg-[#00ff87]"></span>
                </div>
                <span className="text-[11px] text-[#b9cbb9]">Robô autônomo de gols HT/FT</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-space text-[10px] text-[#00ff87] font-semibold">92.4% no mês</span>
                  <span className="text-[#b9cbb9] font-space text-[10px]">• 1.450 online</span>
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#00ff87] text-[20px]">chevron_right</span>
          </div>

          <div
            onClick={() => onShowToast('Conectando ao canal de cantos do Lucas Green...')}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-[#1a202c] shadow-sm border border-[#242a37] hover:border-[#00ff87]/30 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-[#242a37] border border-[#2f3542]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLwxZ6XyGoAPvFZXichbKmDCrIQt7BO6XNNNnxt01nl_GGB8_sLd6c6X5g504BBJ-W5t9y7si7JCbBxmuJqK47D2xacGEsMQRWiyNLK8fPdUQ9_TB70ZspHZBMR39jGuEIrJqIbY-oVdQ9IPRqJHjEIXpJ6IPsPBRD0jyngFZWuhlnlS2LkwTRmkfZ-SJuCFbNOQFGMeMO9f3gnvvdafcNhE5jrttst6dbpAcJr5MgOOGbSSBTMP0XhA"
                  alt="Lucas Green VIP"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#00ff87] ring-1 ring-[#080e1a]"></div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-space text-[14px] text-[#dde2f3] font-bold">Cantos @LucasGreen</span>
                  <span className="px-1.5 py-0.2 rounded bg-[#00ff87]/20 text-[#00ff87] font-space text-[9px] font-bold">
                    PRO
                  </span>
                </div>
                <span className="text-[11px] text-[#b9cbb9]">Especialista em cantos limites</span>
                <span className="font-space text-[10px] text-[#00ff87] font-bold mt-0.5">
                  🔥 18 Greens Seguidos
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#00ff87] text-[20px]">chevron_right</span>
          </div>

          <div
            onClick={() => onShowToast('Acessando plano de gestão de banca alavancada...')}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-[#1a202c] shadow-sm border border-[#242a37] hover:border-[#00e3fd]/30 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#242a37] flex items-center justify-center text-[#00e3fd] border border-[#00e3fd]/20">
                <span className="material-symbols-outlined text-[24px]">trending_up</span>
              </div>
              <div className="flex flex-col">
                <span className="font-space text-[14px] text-[#dde2f3] font-bold">Alavancagem Segura</span>
                <span className="text-[11px] text-[#b9cbb9]">Gestão disciplinada (1u a 10u)</span>
                <span className="font-space text-[10px] text-[#00e3fd] font-semibold mt-0.5">
                  Ciclo Atual: Passo 4 de 7
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#00ff87] text-[20px]">chevron_right</span>
          </div>

          {/* Upgrade Banner Button */}
          <button
            type="button"
            onClick={onOpenVipPlans}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#00ff87] to-[#00e3fd] text-[#00210c] font-space text-[13px] font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#00ff87]/20 active:scale-95 transition-all mt-1"
          >
            <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
            <span>Ver Todos os Planos VIP &amp; Checkout Pix</span>
          </button>
        </div>
      )}

      {/* Push Notification Preferences */}
      <div className="px-4 mt-4">
        <div className="p-3.5 rounded-2xl bg-[#161c28] border border-[#242a37]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#00ff87] text-[18px]">tune</span>
              <span className="font-space text-[13px] text-[#dde2f3] font-bold">
                Gatilhos de Notificação Push
              </span>
            </div>
            <span className="font-space text-[10px] text-[#00e3fd] font-semibold">Prioridade Alta</span>
          </div>
          <p className="text-[11px] text-[#b9cbb9] mb-3 leading-relaxed">
            Selecione quais eventos emitem alertas com vibração e sinal acústico exclusivo na sua tela de bloqueio.
          </p>

          <div className="grid grid-cols-2 gap-2">
            <label
              onClick={() => togglePush('gols')}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#1a202c] border border-[#242a37] cursor-pointer select-none"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00ff87] text-[16px]">sports_soccer</span>
                <span className="text-[11px] text-[#dde2f3] font-medium">Gols Iminentes</span>
              </div>
              <input
                type="checkbox"
                checked={pushSettings.gols}
                onChange={() => {}}
                className="accent-[#00ff87] w-4 h-4 rounded"
              />
            </label>

            <label
              onClick={() => togglePush('cantos')}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#1a202c] border border-[#242a37] cursor-pointer select-none"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00ff87] text-[16px]">flag</span>
                <span className="text-[11px] text-[#dde2f3] font-medium">Cantos Limite</span>
              </div>
              <input
                type="checkbox"
                checked={pushSettings.cantos}
                onChange={() => {}}
                className="accent-[#00ff87] w-4 h-4 rounded"
              />
            </label>

            <label
              onClick={() => togglePush('cartoes')}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#1a202c] border border-[#242a37] cursor-pointer select-none"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#b9cbb9] text-[16px]">style</span>
                <span className="text-[11px] text-[#dde2f3] font-medium">Cartões &amp; VAR</span>
              </div>
              <input
                type="checkbox"
                checked={pushSettings.cartoes}
                onChange={() => {}}
                className="accent-[#00ff87] w-4 h-4 rounded"
              />
            </label>

            <label
              onClick={() => togglePush('erroCasa')}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#1a202c] border border-[#242a37] cursor-pointer select-none"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00e3fd] text-[16px]">bolt</span>
                <span className="text-[11px] text-[#dde2f3] font-medium">Erro de Casa</span>
              </div>
              <input
                type="checkbox"
                checked={pushSettings.erroCasa}
                onChange={() => {}}
                className="accent-[#00ff87] w-4 h-4 rounded"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
