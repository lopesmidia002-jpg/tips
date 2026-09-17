import React, { useState } from 'react';

interface AnaliseViewProps {
  onShowToast: (msg: string) => void;
  onSaveToBankroll: (item: { match: string; market: string; odds: number; stake: string }) => void;
}

export const AnaliseView: React.FC<AnaliseViewProps> = ({ onShowToast, onSaveToBankroll }) => {
  const [isSavedInBankroll, setIsSavedInBankroll] = useState(false);
  const [likesCount, setLikesCount] = useState(342);
  const [hasLiked, setHasLiked] = useState(false);

  const handleCopyCode = (code: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).catch(() => {});
    }
    onShowToast(`Código ${code} copiado com sucesso!`);
  };

  const toggleSaveBankroll = () => {
    const next = !isSavedInBankroll;
    setIsSavedInBankroll(next);
    if (next) {
      onSaveToBankroll({
        match: 'Real Madrid x Man City',
        market: 'Ambas Marcam & +2.5 Gols',
        odds: 1.95,
        stake: '2.5u'
      });
      onShowToast('Palpite salvo na sua Gestão de Banca!');
    } else {
      onShowToast('Palpite removido da Banca');
    }
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikesCount((prev) => prev + 1);
      setHasLiked(true);
      onShowToast('Você curtiu a análise de @FelipeTips');
    } else {
      setLikesCount((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  return (
    <div className="flex flex-col w-full px-4 pt-3 pb-8 gap-3.5">
      {/* Match Card Context */}
      <div className="relative overflow-hidden rounded-2xl bg-[#161c28] p-3.5 shadow-md border border-[#242a37]">
        <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-[#00ff87]/5 blur-2xl pointer-events-none"></div>

        {/* Tournament & Match Meta */}
        <div className="flex items-center justify-between gap-1 mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#00ff87]">military_tech</span>
            <span className="font-space text-[10px] text-[#00ff87] uppercase tracking-wider font-bold">
              UEFA Champions League
            </span>
            <span className="text-[#b9cbb9] font-space text-[10px]">• Quartas</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#2f3542]">
            <span className="material-symbols-outlined text-[12px] text-[#00e3fd]">schedule</span>
            <span className="font-space text-[10px] text-[#00e3fd] font-semibold">Hoje 16:00</span>
          </div>
        </div>

        {/* Teams Matchup with Authentic Crests */}
        <div className="grid grid-cols-5 items-center gap-1 my-1">
          {/* Home Team */}
          <div className="col-span-2 flex flex-col items-center text-center gap-1">
            <div className="w-13 h-13 rounded-full bg-[#1a202c] flex items-center justify-center p-2 shadow-inner relative border border-[#242a37]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgHorFo-tLskDgn_jLpVapllpys8FDtomr5o51XG6ew1la8ciS_laq3OXVFuKc7rYTDTqXkUsHuOrQtFFEULI3FLVnDgma_EzAq2CujDVcpqSwRUSQyKguACCaZoSLrOEJ4s7Hk7sj-IqcqwfikUuTXbrrfIQp-jAgXEpn_9j4c9PiKFvT_YDIvvRZSzeOKgeNB3MKIUG-OJzH6vsKTcv3Dmq8OW7ywSefEUYjGUcHD88Z6Gxc9AQw9Q"
                alt="Real Madrid Crest"
                className="w-8 h-8 object-contain drop-shadow"
              />
            </div>
            <span className="font-space text-[15px] text-[#dde2f3] font-bold leading-tight">
              Real Madrid
            </span>
            <span className="font-space text-[10px] text-[#b9cbb9]">Mandante</span>
          </div>

          {/* VS Divider & Stadium */}
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="w-7 h-7 rounded-full bg-[#242a37] flex items-center justify-center border border-[#3b4b3d]/50">
              <span className="font-space text-[10px] text-[#b9cbb9] font-bold">VS</span>
            </div>
            <span className="text-[10px] leading-tight text-[#849585] mt-1 text-center truncate max-w-[65px]">
              Bernabéu
            </span>
          </div>

          {/* Away Team */}
          <div className="col-span-2 flex flex-col items-center text-center gap-1">
            <div className="w-13 h-13 rounded-full bg-[#1a202c] flex items-center justify-center p-2 shadow-inner relative border border-[#242a37]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7n37AFemCvZJmZLJT4K2cLLIlX26ZFZ1pM1r2qZGrRa1RDjBZHO_WDSjV3tS67AS9rACjYCw18lB23DDBqVsnNYVdZmky1zY2gwnkeY-duTl7xkY6wtL2zhp23cRKMCtifDF-X2Rbc_nJgAM5BgaF0g1j8c-mtD0VaHfUpDPrApx_dqifa-EIELk8EvVHiXMeblacY9BFTZommKOqu3f8pqBmQprfG9--40Tfq3T8pm0Mv-slM42OYQ"
                alt="Manchester City Crest"
                className="w-8 h-8 object-contain drop-shadow"
              />
            </div>
            <span className="font-space text-[15px] text-[#dde2f3] font-bold leading-tight">
              Man City
            </span>
            <span className="font-space text-[10px] text-[#b9cbb9]">Visitante</span>
          </div>
        </div>

        {/* Live Confidence Meter */}
        <div className="mt-3 pt-1 flex items-center justify-between bg-[#1a202c]/80 rounded-xl px-3 py-2 border border-[#242a37]">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#00ff87]">bolt</span>
            <span className="font-space text-[12px] text-[#dde2f3] font-medium">Algoritmo Predictor Pro</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-space text-[10px] text-[#b9cbb9]">Confiança:</span>
            <span className="font-space text-[13px] text-[#00ff87] font-bold">9.4/10</span>
          </div>
        </div>
      </div>

      {/* Main Pick Card (Whale Play Recommendation) */}
      <div className="relative overflow-hidden rounded-2xl bg-[#1a202c] p-4 shadow-xl border border-[#00ff87]/30">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#00ff87]/10 blur-3xl pointer-events-none"></div>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00ff87]/15 border border-[#00ff87]/30">
            <span className="material-symbols-outlined text-[14px] text-[#00ff87]">star</span>
            <span className="font-space text-[10px] text-[#00ff87] uppercase tracking-wider font-bold">
              Palpite Premium
            </span>
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#00e3fd]/15 border border-[#00e3fd]/30">
            <span className="font-space text-[10px] text-[#00e3fd] uppercase font-bold">EV +14.2%</span>
          </div>
        </div>

        <div className="flex flex-col gap-0.5 mb-3">
          <span className="font-space text-[10px] text-[#b9cbb9] uppercase tracking-wider">
            Mercado Selecionado
          </span>
          <h2 className="font-space text-[22px] sm:text-[24px] text-[#dde2f3] font-bold leading-tight">
            Ambas Marcam &amp; +2.5 Gols
          </h2>
        </div>

        {/* Quick Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 bg-[#161c28] rounded-xl p-2.5 mb-3 border border-[#242a37]">
          <div className="flex flex-col items-center text-center p-1">
            <span className="font-space text-[10px] text-[#b9cbb9]">Cotação Top</span>
            <span className="font-space text-[20px] text-[#00ff87] font-bold">1.95</span>
            <span className="text-[10px] text-[#b9cbb9]">Betano</span>
          </div>
          <div className="flex flex-col items-center text-center p-1 bg-[#1a202c] rounded-lg border border-[#2f3542]">
            <span className="font-space text-[10px] text-[#b9cbb9]">Stake Rec.</span>
            <span className="font-space text-[20px] text-[#dde2f3] font-bold">
              2.5<span className="text-xs font-normal text-[#b9cbb9]">u</span>
            </span>
            <span className="text-[10px] text-[#00ff87] font-medium">2.5% banca</span>
          </div>
          <div className="flex flex-col items-center text-center p-1">
            <span className="font-space text-[10px] text-[#b9cbb9]">Win-Rate IA</span>
            <span className="font-space text-[20px] text-[#00e3fd] font-bold">74%</span>
            <span className="text-[10px] text-[#9cf0ff]">Alta prob.</span>
          </div>
        </div>

        {/* Confidence Bar Progress */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between font-space text-[10px]">
            <span className="text-[#b9cbb9]">Exposição de Risco</span>
            <span className="text-[#00ff87] font-bold">Risco Baixo-Médio (Tier 1)</span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#080e1a] overflow-hidden flex">
            <div className="h-full bg-[#00ff87] w-[74%] rounded-full shadow-[0_0_8px_#00ff87]"></div>
          </div>
        </div>
      </div>

      {/* Odds Comparison Table */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-[#00e3fd]">price_change</span>
            <h3 className="font-space text-[15px] text-[#dde2f3] font-bold">Comparador de Casas</h3>
          </div>
          <span className="font-space text-[10px] text-[#b9cbb9]">Odd atualizada há 2m</span>
        </div>

        <div className="flex flex-col gap-2">
          {/* Betano (Top Pick) */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#242a37] border border-[#00ff87]/30 shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#1a202c] flex items-center justify-center border border-[#00ff87]/40 shadow-inner">
                <span className="font-space text-[16px] text-[#00ff87] font-bold">B</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-space text-[13px] text-[#dde2f3] font-bold">Betano</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#00ff87]/20 text-[#00ff87] font-space text-[9px] font-bold uppercase">
                    Melhor Odd
                  </span>
                </div>
                <span className="text-[11px] text-[#b9cbb9]">Pagamento antecipado</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="font-space text-[16px] text-[#00ff87] font-bold">1.95</span>
              <button
                type="button"
                onClick={() => handleCopyCode('#BTT-9482X')}
                className="px-3.5 py-1.5 rounded-lg bg-[#00ff87] text-[#00210c] font-space text-[12px] font-bold hover:bg-[#00e478] active:scale-95 transition-all shadow-sm"
              >
                Apostar
              </button>
            </div>
          </div>

          {/* Bet365 */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#161c28] border border-[#242a37]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#1a202c] flex items-center justify-center border border-[#2f3542]">
                <span className="font-space text-[16px] text-[#bdf4ff] font-bold">3</span>
              </div>
              <div className="flex flex-col">
                <span className="font-space text-[13px] text-[#dde2f3] font-bold">Bet365</span>
                <span className="text-[11px] text-[#b9cbb9]">Criar aposta disponível</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="font-space text-[15px] text-[#dde2f3] font-bold">1.91</span>
              <button
                type="button"
                onClick={() => onShowToast('Redirecionando para cotação Bet365 (1.91)...')}
                className="px-3.5 py-1.5 rounded-lg bg-[#2f3542] text-[#dde2f3] font-space text-[12px] hover:bg-[#333946] active:scale-95 transition-all"
              >
                Abrir
              </button>
            </div>
          </div>

          {/* Sportingbet */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#161c28] border border-[#242a37]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#1a202c] flex items-center justify-center border border-[#2f3542]">
                <span className="font-space text-[16px] text-[#b9cbb9] font-bold">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-space text-[13px] text-[#dde2f3] font-bold">Sportingbet</span>
                <span className="text-[11px] text-[#b9cbb9]">Odd boost indisponível</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="font-space text-[15px] text-[#b9cbb9] font-bold">1.88</span>
              <button
                type="button"
                onClick={() => onShowToast('Redirecionando para cotação Sportingbet (1.88)...')}
                className="px-3.5 py-1.5 rounded-lg bg-[#2f3542] text-[#dde2f3] font-space text-[12px] hover:bg-[#333946] active:scale-95 transition-all"
              >
                Abrir
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Raio-X & Estatísticas H2H */}
      <div className="flex flex-col gap-2.5 bg-[#161c28] p-3.5 rounded-2xl shadow-md border border-[#242a37]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-[#00e3fd]">query_stats</span>
            <h3 className="font-space text-[15px] text-[#dde2f3] font-bold">Raio-X Estatístico &amp; H2H</h3>
          </div>
          <span className="font-space text-[10px] text-[#00e3fd] font-semibold">Últimos 5 Jogos</span>
        </div>

        {/* Form Comparison Badges */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {/* Real Madrid Form */}
          <div className="flex flex-col gap-1.5 bg-[#1a202c] p-2.5 rounded-xl border border-[#242a37]">
            <div className="flex items-center justify-between">
              <span className="font-space text-[11px] text-[#dde2f3] font-bold">Real Madrid</span>
              <span className="font-space text-[10px] text-[#00ff87] font-semibold">4V - 1E</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-5 h-5 rounded flex items-center justify-center bg-[#00ff87]/20 text-[#00ff87] font-space text-[10px] font-bold">
                V
              </span>
              <span className="w-5 h-5 rounded flex items-center justify-center bg-[#00ff87]/20 text-[#00ff87] font-space text-[10px] font-bold">
                V
              </span>
              <span className="w-5 h-5 rounded flex items-center justify-center bg-[#2f3542] text-[#b9cbb9] font-space text-[10px] font-bold">
                E
              </span>
              <span className="w-5 h-5 rounded flex items-center justify-center bg-[#00ff87]/20 text-[#00ff87] font-space text-[10px] font-bold">
                V
              </span>
              <span className="w-5 h-5 rounded flex items-center justify-center bg-[#00ff87]/20 text-[#00ff87] font-space text-[10px] font-bold">
                V
              </span>
            </div>
          </div>

          {/* Man City Form */}
          <div className="flex flex-col gap-1.5 bg-[#1a202c] p-2.5 rounded-xl border border-[#242a37]">
            <div className="flex items-center justify-between">
              <span className="font-space text-[11px] text-[#dde2f3] font-bold">Man City</span>
              <span className="font-space text-[10px] text-[#00ff87] font-semibold">4V - 1E</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-5 h-5 rounded flex items-center justify-center bg-[#00ff87]/20 text-[#00ff87] font-space text-[10px] font-bold">
                V
              </span>
              <span className="w-5 h-5 rounded flex items-center justify-center bg-[#00ff87]/20 text-[#00ff87] font-space text-[10px] font-bold">
                V
              </span>
              <span className="w-5 h-5 rounded flex items-center justify-center bg-[#00ff87]/20 text-[#00ff87] font-space text-[10px] font-bold">
                V
              </span>
              <span className="w-5 h-5 rounded flex items-center justify-center bg-[#2f3542] text-[#b9cbb9] font-space text-[10px] font-bold">
                E
              </span>
              <span className="w-5 h-5 rounded flex items-center justify-center bg-[#00ff87]/20 text-[#00ff87] font-space text-[10px] font-bold">
                V
              </span>
            </div>
          </div>
        </div>

        {/* Comparative Bar: Gols Marcados */}
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex items-center justify-between font-space text-[10px] text-[#b9cbb9]">
            <span>Média Gols / Partida (Temporada)</span>
            <span className="text-[#dde2f3] font-bold">5.0 Gols Total</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-7 text-right font-space text-[12px] text-[#dde2f3] font-bold">2.4</span>
            <div className="flex-1 h-2.5 rounded-full bg-[#1a202c] flex overflow-hidden border border-[#2f3542]">
              <div className="h-full bg-[#00e478]" style={{ width: '48%' }}></div>
              <div className="h-full bg-[#00e3fd]" style={{ width: '52%' }}></div>
            </div>
            <span className="w-7 text-left font-space text-[12px] text-[#00e3fd] font-bold">2.6</span>
          </div>
          <div className="flex justify-between items-center text-[10px] text-[#b9cbb9]">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#00e478]"></span>
              <span>Real Madrid</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#00e3fd]"></span>
              <span>Man City</span>
            </div>
          </div>
        </div>

        {/* H2H Fact Card */}
        <div className="flex items-center gap-2.5 bg-[#1a202c] p-2.5 rounded-xl border border-[#00ff87]/20">
          <div className="w-9 h-9 rounded-full bg-[#00ff87]/15 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px] text-[#00ff87]">trending_up</span>
          </div>
          <div className="flex flex-col">
            <span className="font-space text-[10px] text-[#00ff87] font-bold uppercase">
              Tendência H2H Confirmada
            </span>
            <span className="text-[11px] text-[#dde2f3]">
              4 dos últimos 5 duelos diretos terminaram com mais de 3.5 gols e ambas marcando.
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Analysis from Verified Tipster */}
      <div className="flex flex-col gap-2.5 bg-[#1a202c] p-3.5 rounded-2xl shadow-md border border-[#242a37]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB42d_0X8gedgf9HWMaq68df4U0yvu_9G-NBGG1rry8fP1US1qXUlo66DdS6c2DXf2u3UKsqQWatFtT_hvKKNysk_NNnNVC00P2y988kvmEY2VS58g-vncZDy0VWFS6XkqhVjqWgdGe4xVfhSi14wAfbAw30vsWElICj0erN9RRnLCXUG51fwGDYdel0PXHDDftXm884m9SZ4L8Hz1b99b_7AgbBRc3cpMLn4YwbLkRTOLIcXQsNKX0Lw"
                alt="FelipeTips"
                className="w-10 h-10 rounded-full object-cover shadow-sm ring-1 ring-[#00ff87]/30"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#00ff87] flex items-center justify-center">
                <span className="material-symbols-outlined text-[10px] text-[#00210c] font-bold">
                  check
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-space text-[13px] text-[#dde2f3] font-bold">@FelipeTips</span>
                <span className="font-space text-[9px] px-1 rounded bg-[#242a37] text-[#00ff87] uppercase font-bold">
                  PRO
                </span>
              </div>
              <span className="text-[11px] text-[#b9cbb9]">ROI Geral +22.8% • 79% no Futebol Europeu</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onShowToast('Link da análise copiado!')}
            className="w-8 h-8 rounded-full bg-[#242a37] flex items-center justify-center text-[#b9cbb9] hover:text-[#dde2f3]"
          >
            <span className="material-symbols-outlined text-[16px]">share</span>
          </button>
        </div>

        <div className="bg-[#161c28] p-3 rounded-xl border border-[#242a37]">
          <p className="text-[13px] text-[#dde2f3] leading-relaxed italic">
            “Ambas as defesas vêm concedendo chances claras em transição rápida, enquanto Haaland e Vinicius Jr chegam em pico de rendimento físico. O retrospecto histórico é brutal: 4 dos últimos 5 confrontos bateram acima de 3 gols com naturalidade.”
          </p>
        </div>

        <div className="flex items-center justify-between text-[#b9cbb9] pt-0.5 text-[11px]">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleLike}
              className={`flex items-center gap-1 transition-colors ${hasLiked ? 'text-[#00ff87]' : 'hover:text-[#00ff87]'}`}
            >
              <span className="material-symbols-outlined text-[16px]">thumb_up</span>
              <span className="font-space text-[11px]">{likesCount} curtidas</span>
            </button>
            <button
              type="button"
              onClick={() => onShowToast('Comentários abertos: 28 opiniões de tipsters')}
              className="flex items-center gap-1 hover:text-[#00e3fd] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
              <span className="font-space text-[11px]">28 comentários</span>
            </button>
          </div>
          <span className="font-space text-[10px] text-[#849585]">Publicado há 45m</span>
        </div>
      </div>

      {/* Quick Action / Bet Placement Sticky-Style Block */}
      <div className="rounded-2xl bg-[#242a37] p-3.5 shadow-xl border border-[#00ff87]/30 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-space text-[10px] text-[#b9cbb9] uppercase">Código Betano / Bilhete</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <code className="font-space text-[13px] font-bold text-[#00e3fd] bg-[#080e1a] px-2 py-0.5 rounded tracking-wider border border-[#00e3fd]/20">
                #BTT-9482X
              </code>
              <button
                type="button"
                aria-label="Copiar código"
                onClick={() => handleCopyCode('BTT-9482X')}
                className="flex items-center justify-center p-1 rounded hover:bg-[#333946] text-[#b9cbb9] hover:text-[#dde2f3] transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
              </button>
            </div>
          </div>
          <div className="text-right">
            <span className="font-space text-[10px] text-[#b9cbb9] uppercase">Retorno Potencial (2.5u)</span>
            <div className="font-space text-[18px] text-[#00ff87] font-bold leading-tight">
              R$ 243,75
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={toggleSaveBankroll}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-space text-[12px] font-bold active:scale-95 transition-all border ${
              isSavedInBankroll
                ? 'bg-[#00ff87]/20 text-[#00ff87] border-[#00ff87]/40'
                : 'bg-[#080e1a] text-[#dde2f3] border-[#2f3542] hover:bg-[#161c28]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] text-[#00ff87]">
              {isSavedInBankroll ? 'bookmark_added' : 'bookmark_add'}
            </span>
            <span>{isSavedInBankroll ? 'Salvo na Banca' : 'Salvar na Banca'}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              handleCopyCode('BTT-9482X');
              onShowToast('Cupom Betano #BTT-9482X gerado! Abrindo casa...');
            }}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#00ff87] text-[#00210c] font-space text-[12px] font-bold hover:bg-[#00e478] active:scale-95 transition-all shadow-[0_0_12px_rgba(0,255,135,0.3)]"
          >
            <span className="material-symbols-outlined text-[16px]">electric_bolt</span>
            <span>Apostar na Betano</span>
          </button>
        </div>
      </div>
    </div>
  );
};
