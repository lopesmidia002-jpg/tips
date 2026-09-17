import React, { useState } from 'react';
import { RECENT_BETS } from '../data/mockData';
import { RecentBet } from '../types';

interface BancaViewProps {
  onShowToast: (msg: string) => void;
  betsList: RecentBet[];
  onAddBet: (bet: RecentBet) => void;
}

export const BancaView: React.FC<BancaViewProps> = ({ onShowToast, betsList, onAddBet }) => {
  const [period, setPeriod] = useState<'7d' | '30d' | 'tudo'>('30d');
  const [unitValue, setUnitValue] = useState(50);
  const [isEditingUnit, setIsEditingUnit] = useState(false);
  const [tempUnit, setTempUnit] = useState('50');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Form for custom bet
  const [newMatch, setNewMatch] = useState('');
  const [newMarket, setNewMarket] = useState('');
  const [newOdds, setNewOdds] = useState('1.90');
  const [newStake, setNewStake] = useState('2.0');

  const totalBankroll = 5480;
  const monthlyProfit = 1120;
  const totalUnits = (totalBankroll / unitValue).toFixed(1);
  const monthlyUnits = (monthlyProfit / unitValue).toFixed(1);

  const handleSaveUnit = () => {
    const val = parseFloat(tempUnit);
    if (!isNaN(val) && val > 0) {
      setUnitValue(val);
      setIsEditingUnit(false);
      onShowToast(`Valor da unidade atualizado para R$ ${val.toFixed(2)}`);
    }
  };

  const handleCreateBet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMatch.trim() || !newMarket.trim()) {
      onShowToast('Por favor, informe a partida e o mercado.');
      return;
    }

    const oddsNum = parseFloat(newOdds) || 1.9;
    const stakeNum = parseFloat(newStake) || 1.0;
    const returnVal = (stakeNum * unitValue * oddsNum).toFixed(2);

    const bet: RecentBet = {
      id: `b-${Date.now()}`,
      match: newMatch,
      market: newMarket,
      odds: oddsNum,
      stake: `${stakeNum}u`,
      result: 'pending',
      amount: `R$ ${returnVal}`,
      date: 'Hoje'
    };

    onAddBet(bet);
    setIsRegisterOpen(false);
    setNewMatch('');
    setNewMarket('');
    onShowToast('Aposta registrada com sucesso na sua banca!');
  };

  return (
    <div className="flex flex-col w-full px-4 pt-3 pb-8 space-y-4">
      {/* Bankroll Overview Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#242a37] via-[#1a202c] to-[#080e1a] p-4 shadow-xl border border-[#00ff87]/30">
        <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-[#00ff87]/15 blur-2xl pointer-events-none"></div>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#00ff87] text-[18px]">account_balance_wallet</span>
            <span className="font-space text-[11px] text-[#00ff87] uppercase font-bold tracking-wider">
              Gestão de Banca Inteligente
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsEditingUnit(!isEditingUnit)}
            className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#2f3542] hover:bg-[#333946] text-[#b9cbb9] hover:text-[#dde2f3] font-space text-[10px]"
          >
            <span className="material-symbols-outlined text-[13px]">tune</span>
            <span>1u = R$ {unitValue.toFixed(2)}</span>
          </button>
        </div>

        {/* Unit edit inline input */}
        {isEditingUnit && (
          <div className="mb-3 p-2.5 rounded-xl bg-[#080e1a] border border-[#00ff87]/30 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-[#b9cbb9]">Valor 1u:</span>
              <input
                type="number"
                value={tempUnit}
                onChange={(e) => setTempUnit(e.target.value)}
                className="w-20 bg-[#161c28] border border-[#2f3542] rounded px-2 py-1 text-xs text-[#dde2f3] font-space font-bold focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={handleSaveUnit}
              className="px-3 py-1 bg-[#00ff87] text-[#00210c] text-xs font-space font-bold rounded"
            >
              Salvar
            </button>
          </div>
        )}

        {/* Big Numbers */}
        <div className="flex flex-col mb-3">
          <span className="text-[11px] text-[#b9cbb9]">Saldo Total da Banca</span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <h1 className="font-space text-3xl font-extrabold text-[#dde2f3] tracking-tight">
              R$ {totalBankroll.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </h1>
            <span className="font-space text-sm text-[#00e3fd] font-bold">
              ({totalUnits}u)
            </span>
          </div>
        </div>

        {/* Profit Highlight Box */}
        <div className="grid grid-cols-2 gap-2 bg-[#080e1a]/80 p-3 rounded-xl border border-[#242a37]">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#b9cbb9]">Lucro Líquido (Mês)</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="material-symbols-outlined text-[#00ff87] text-[18px]">trending_up</span>
              <span className="font-space text-lg text-[#00ff87] font-bold">
                +R$ {monthlyProfit.toFixed(2)}
              </span>
            </div>
            <span className="text-[10px] text-[#60ff98] font-space">+{monthlyUnits} Unidades</span>
          </div>
          <div className="flex flex-col justify-center items-end text-right">
            <span className="text-[10px] text-[#b9cbb9]">Retorno Sobre Capital (ROI)</span>
            <span className="font-space text-lg text-[#00e3fd] font-bold mt-0.5">
              +25.6%
            </span>
            <span className="text-[10px] text-[#9cf0ff]">Consistência Alta</span>
          </div>
        </div>
      </div>

      {/* Interactive Growth Chart SVG */}
      <div className="rounded-2xl bg-[#161c28] p-3.5 shadow-md border border-[#242a37] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#00ff87] text-[18px]">show_chart</span>
            <h3 className="font-space text-[14px] text-[#dde2f3] font-bold">Evolução Patrimonial</h3>
          </div>
          <div className="flex items-center gap-1 bg-[#080e1a] p-0.5 rounded-lg border border-[#242a37]">
            {(['7d', '30d', 'tudo'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setPeriod(t)}
                className={`px-2 py-0.5 rounded font-space text-[10px] uppercase font-bold transition-colors ${
                  period === t
                    ? 'bg-[#242a37] text-[#00ff87]'
                    : 'text-[#b9cbb9] hover:text-[#dde2f3]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* SVG Curve Graphic */}
        <div className="relative w-full h-36 bg-[#0d131f] rounded-xl p-2 border border-[#242a37] overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between text-[9px] text-[#849585] font-space">
            <span>R$ 5.800</span>
            <span className="text-[#00ff87] font-bold">Pico Atual: R$ 5.480</span>
          </div>

          <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
            {/* Gradient Fill */}
            <defs>
              <linearGradient id="bankrollGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00ff87" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#00ff87" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid horizontal dashed lines */}
            <line x1="0" y1="20" x2="300" y2="20" stroke="#242a37" strokeDasharray="3 3" />
            <line x1="0" y1="45" x2="300" y2="45" stroke="#242a37" strokeDasharray="3 3" />
            <line x1="0" y1="70" x2="300" y2="70" stroke="#242a37" strokeDasharray="3 3" />

            {/* Area Path */}
            <path
              d="M 0,65 Q 40,60 70,52 T 140,45 T 200,30 T 250,22 T 300,10 L 300,80 L 0,80 Z"
              fill="url(#bankrollGrad)"
            />

            {/* Stroke Line */}
            <path
              d="M 0,65 Q 40,60 70,52 T 140,45 T 200,30 T 250,22 T 300,10"
              fill="none"
              stroke="#00ff87"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Glow dot at the end */}
            <circle cx="300" cy="10" r="4" fill="#00ff87" className="animate-ping opacity-75" />
            <circle cx="300" cy="10" r="3.5" fill="#00ff87" />
          </svg>

          <div className="flex justify-between text-[9px] text-[#849585] font-space pt-1">
            <span>Dia 01</span>
            <span>Dia 10</span>
            <span>Dia 20</span>
            <span>Hoje</span>
          </div>
        </div>
      </div>

      {/* Performance Matrix 2x2 */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="p-3 rounded-2xl bg-[#161c28] border border-[#242a37] flex flex-col">
          <span className="font-space text-[10px] text-[#b9cbb9] uppercase">Total de Entradas</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="font-space text-xl text-[#dde2f3] font-bold">42</span>
            <span className="text-[11px] text-[#00ff87] font-semibold">(32G / 10R)</span>
          </div>
          <span className="text-[10px] text-[#b9cbb9] mt-0.5">Média 1.4 tips/dia</span>
        </div>

        <div className="p-3 rounded-2xl bg-[#161c28] border border-[#242a37] flex flex-col">
          <span className="font-space text-[10px] text-[#b9cbb9] uppercase">Taxa de Acerto</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="font-space text-xl text-[#00ff87] font-bold">76.2%</span>
          </div>
          <span className="text-[10px] text-[#60ff98] mt-0.5">+4.1% vs mês anterior</span>
        </div>

        <div className="p-3 rounded-2xl bg-[#161c28] border border-[#242a37] flex flex-col">
          <span className="font-space text-[10px] text-[#b9cbb9] uppercase">Odd Média</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="font-space text-xl text-[#00e3fd] font-bold">1.88</span>
          </div>
          <span className="text-[10px] text-[#9cf0ff] mt-0.5">Faixa de valor (+EV)</span>
        </div>

        <div className="p-3 rounded-2xl bg-[#161c28] border border-[#242a37] flex flex-col">
          <span className="font-space text-[10px] text-[#b9cbb9] uppercase">Max Drawdown</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="font-space text-xl text-[#dde2f3] font-bold">-3.2u</span>
          </div>
          <span className="text-[10px] text-[#00ff87] mt-0.5">Risco ultra-controlado</span>
        </div>
      </div>

      {/* Action Button: Register new custom bet */}
      <button
        type="button"
        onClick={() => setIsRegisterOpen(true)}
        className="w-full py-3 rounded-xl bg-[#242a37] hover:bg-[#2f3542] text-[#00ff87] border border-[#00ff87]/30 font-space text-[13px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
      >
        <span className="material-symbols-outlined text-[18px]">add_circle</span>
        <span>Registrar Nova Aposta na Banca</span>
      </button>

      {/* Registration Modal */}
      {isRegisterOpen && (
        <div className="p-4 rounded-2xl bg-[#1a202c] border border-[#00ff87]/40 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-space text-[13px] text-[#dde2f3] font-bold">
              Nova Entrada de Aposta
            </span>
            <button
              type="button"
              onClick={() => setIsRegisterOpen(false)}
              className="text-[#b9cbb9] hover:text-[#dde2f3]"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          <form onSubmit={handleCreateBet} className="space-y-2.5">
            <div>
              <label className="text-[10px] text-[#b9cbb9] font-space uppercase block mb-1">
                Partida / Evento
              </label>
              <input
                type="text"
                placeholder="Ex: Real Madrid vs Barcelona"
                value={newMatch}
                onChange={(e) => setNewMatch(e.target.value)}
                className="w-full bg-[#080e1a] border border-[#242a37] rounded-xl px-3 py-2 text-xs text-[#dde2f3] focus:outline-none focus:border-[#00ff87]"
              />
            </div>

            <div>
              <label className="text-[10px] text-[#b9cbb9] font-space uppercase block mb-1">
                Mercado
              </label>
              <input
                type="text"
                placeholder="Ex: Ambas Marcam Sim"
                value={newMarket}
                onChange={(e) => setNewMarket(e.target.value)}
                className="w-full bg-[#080e1a] border border-[#242a37] rounded-xl px-3 py-2 text-xs text-[#dde2f3] focus:outline-none focus:border-[#00ff87]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] text-[#b9cbb9] font-space uppercase block mb-1">
                  Cotação (Odd)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={newOdds}
                  onChange={(e) => setNewOdds(e.target.value)}
                  className="w-full bg-[#080e1a] border border-[#242a37] rounded-xl px-3 py-2 text-xs text-[#dde2f3] focus:outline-none focus:border-[#00ff87]"
                />
              </div>
              <div>
                <label className="text-[10px] text-[#b9cbb9] font-space uppercase block mb-1">
                  Stake (Unidades)
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={newStake}
                  onChange={(e) => setNewStake(e.target.value)}
                  className="w-full bg-[#080e1a] border border-[#242a37] rounded-xl px-3 py-2 text-xs text-[#dde2f3] focus:outline-none focus:border-[#00ff87]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-[#00ff87] text-[#00210c] font-space text-[13px] font-bold mt-2"
            >
              Salvar Entrada
            </button>
          </form>
        </div>
      )}

      {/* Recent Ledger History */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between px-1">
          <h3 className="font-space text-[12px] text-[#dde2f3] uppercase font-bold tracking-wider">
            Histórico Recente de Entradas
          </h3>
          <span className="font-space text-[10px] text-[#b9cbb9]">Filtrado por data</span>
        </div>

        <div className="flex flex-col space-y-2">
          {betsList.map((bet) => (
            <div
              key={bet.id}
              className="flex items-center justify-between p-3 rounded-2xl bg-[#161c28] border border-[#242a37]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    bet.result === 'green'
                      ? 'bg-[#00ff87]/15 text-[#00ff87] border border-[#00ff87]/30'
                      : bet.result === 'red'
                      ? 'bg-[#ffb4ab]/15 text-[#ffb4ab] border border-[#ffb4ab]/30'
                      : 'bg-[#00e3fd]/15 text-[#00e3fd] border border-[#00e3fd]/30'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {bet.result === 'green'
                      ? 'check_circle'
                      : bet.result === 'red'
                      ? 'cancel'
                      : 'hourglass_top'}
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-space text-[13px] text-[#dde2f3] font-bold truncate">
                    {bet.match}
                  </span>
                  <span className="text-[11px] text-[#b9cbb9] truncate">
                    {bet.market} • Odd {bet.odds.toFixed(2)} ({bet.stake})
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end shrink-0 pl-2">
                <span
                  className={`font-space text-[13px] font-bold ${
                    bet.result === 'green'
                      ? 'text-[#00ff87]'
                      : bet.result === 'red'
                      ? 'text-[#ffb4ab]'
                      : 'text-[#00e3fd]'
                  }`}
                >
                  {bet.amount}
                </span>
                <span className="font-space text-[9px] uppercase font-bold px-1.5 py-0.2 rounded mt-0.5 bg-[#242a37] text-[#b9cbb9]">
                  {bet.result === 'green' ? 'GREEN' : bet.result === 'red' ? 'RED' : 'EM ABERTO'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
