import React, { useState } from 'react';

interface VipPlansModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (plan: { name: string; price: string; period: string }) => void;
  onShowToast: (msg: string) => void;
}

export const VipPlansModal: React.FC<VipPlansModalProps> = ({
  isOpen,
  onClose,
  onSelectPlan,
  onShowToast,
}) => {
  const [billingPeriod, setBillingPeriod] = useState<'annual' | 'monthly'>('annual');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!isOpen) return null;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const isAnnual = billingPeriod === 'annual';

  const proPrice = isAnnual ? 'R$ 29,90' : 'R$ 49,90';
  const sniperPrice = isAnnual ? 'R$ 58,70' : 'R$ 97,90';
  const syndicatePrice = isAnnual ? 'R$ 139,90' : 'R$ 189,90';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0d131f]/95 backdrop-blur-md animate-in fade-in duration-200">
      <div className="max-w-md mx-auto min-h-screen px-4 pt-4 pb-12 flex flex-col">
        {/* Top bar with close */}
        <div className="flex items-center justify-between py-2 mb-2">
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1a202c] text-[#b9cbb9] hover:text-[#dde2f3] flex items-center justify-center border border-[#242a37]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00ff87]/15 border border-[#00ff87]/30">
            <span className="material-symbols-outlined text-[#00ff87] text-[16px]">lock</span>
            <span className="font-space text-[10px] text-[#00ff87] uppercase font-bold tracking-wider">
              Acesso Exclusivo VIP
            </span>
          </div>
        </div>

        {/* Hero Value Header */}
        <div className="relative overflow-hidden rounded-2xl bg-[#1a202c] p-5 shadow-xl border border-[#00ff87]/30 mb-4 text-center">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#00ff87]/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#00e3fd]/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative flex flex-col items-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00ff87]/15 border border-[#00ff87]/30">
              <span className="material-symbols-outlined text-[#00ff87] text-[16px]">military_tech</span>
              <span className="font-space text-[10px] text-[#00ff87] uppercase font-bold tracking-wider">
                Passaporte de Lucratividade
              </span>
            </div>

            <h1 className="font-space text-2xl font-bold text-[#dde2f3] tracking-tight leading-tight">
              Eleve Seu Nível com <span className="text-[#00ff87]">BetTips Pro VIP</span>
            </h1>

            <p className="text-xs text-[#b9cbb9] max-w-xs leading-relaxed">
              Acesso instantâneo a bots live com IA, tips auditadas de alta taxa de acerto e gestão de stake calibrada.
            </p>

            <div className="flex items-center justify-center gap-2 pt-1">
              <div className="flex items-center gap-1 bg-[#080e1a] px-2.5 py-1 rounded-lg border border-[#242a37]">
                <span className="material-symbols-outlined text-[15px] text-[#00ff87]">star</span>
                <span className="font-space text-[11px] text-[#dde2f3] font-bold">4.9/5</span>
                <span className="text-[10px] text-[#b9cbb9]">(12.4k avaliações)</span>
              </div>
              <div className="flex items-center gap-1 bg-[#00ff87]/10 px-2.5 py-1 rounded-lg border border-[#00ff87]/20">
                <span className="material-symbols-outlined text-[15px] text-[#00ff87]">trending_up</span>
                <span className="font-space text-[11px] text-[#00ff87] font-bold">+48.5u no mês</span>
              </div>
            </div>
          </div>
        </div>

        {/* Billing Switch */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center p-1 rounded-full bg-[#161c28] w-full max-w-xs justify-between border border-[#242a37] shadow-inner">
            <button
              type="button"
              onClick={() => setBillingPeriod('monthly')}
              className={`w-1/2 py-2 rounded-full font-space text-[12px] transition-all ${
                !isAnnual
                  ? 'bg-[#242a37] text-[#00ff87] font-bold shadow-md'
                  : 'text-[#b9cbb9] font-medium'
              }`}
            >
              Mensal
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod('annual')}
              className={`w-1/2 py-2 rounded-full font-space text-[12px] transition-all relative flex items-center justify-center gap-1 ${
                isAnnual
                  ? 'bg-[#242a37] text-[#00ff87] font-bold shadow-md'
                  : 'text-[#b9cbb9] font-medium'
              }`}
            >
              <span>Anual</span>
              <span className="bg-[#00ff87] text-[#00210c] px-1.5 py-0.2 rounded-full text-[9px] uppercase font-extrabold">
                -40%
              </span>
            </button>
          </div>
        </div>

        {/* Tier Cards */}
        <div className="flex flex-col space-y-3.5">
          {/* Plano PRO */}
          <div className="flex flex-col rounded-2xl bg-[#161c28] p-4 space-y-3 shadow-md border border-[#242a37]">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#b9cbb9] text-[18px]">sports_soccer</span>
                  <span className="font-space text-[15px] text-[#dde2f3] font-bold">Plano PRO</span>
                </div>
                <p className="text-[11px] text-[#b9cbb9] mt-0.5">Entrada perfeita para iniciantes</p>
              </div>
              <span className="font-space text-[9px] px-2 py-0.5 rounded bg-[#242a37] text-[#b9cbb9] font-semibold uppercase">
                Starter
              </span>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="font-space text-2xl text-[#dde2f3] font-bold tracking-tight">
                {proPrice}
              </span>
              <span className="text-[11px] text-[#b9cbb9]">/ mês</span>
            </div>

            <ul className="space-y-1.5 text-xs text-[#dde2f3]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00ff87] text-[16px] shrink-0">check_circle</span>
                <span>Tips pré-jogo diárias (Futebol, Tênis &amp; NBA)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00ff87] text-[16px] shrink-0">check_circle</span>
                <span>Acesso a tipsters auditados e ranking mensal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00ff87] text-[16px] shrink-0">check_circle</span>
                <span>Calculadora de gestão de stake integrada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00ff87] text-[16px] shrink-0">check_circle</span>
                <span>Canal de alertas rápidos no Telegram (3/dia)</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => {
                onSelectPlan({ name: 'Plano PRO', price: proPrice, period: isAnnual ? 'Anual' : 'Mensal' });
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-[#242a37] hover:bg-[#2f3542] text-[#dde2f3] font-space text-[12px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Assinar Pro</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          {/* PLANO VIP SNIPER (Mais Escolhido) */}
          <div className="relative flex flex-col rounded-2xl bg-[#1a202c] p-4.5 space-y-3 shadow-2xl overflow-hidden border-2 border-[#00ff87]/50">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00e3fd] via-[#00ff87] to-[#00e3fd]"></div>

            <div className="flex justify-between items-center -mt-0.5">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#00ff87] text-[20px]">bolt</span>
                <span className="font-space text-lg text-[#00ff87] font-bold tracking-tight">
                  VIP Sniper
                </span>
              </div>
              <div className="flex items-center gap-1 bg-[#00ff87] text-[#00210c] px-2.5 py-0.5 rounded-full shadow-md">
                <span className="material-symbols-outlined text-[12px]">local_fire_department</span>
                <span className="font-space text-[9px] font-extrabold uppercase tracking-wide">
                  Mais Escolhido
                </span>
              </div>
            </div>

            <p className="text-xs text-[#b9cbb9] -mt-1.5">
              Consistência profissional com robôs de alta precisão ao vivo
            </p>

            <div className="bg-[#080e1a]/90 p-3 rounded-xl flex items-center justify-between border border-[#242a37]">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-space text-2xl text-[#00ff87] font-extrabold tracking-tight">
                    {sniperPrice}
                  </span>
                  <span className="text-[11px] text-[#b9cbb9]">/ mês</span>
                </div>
                <span className="font-space text-[10px] text-[#00e3fd]">
                  {isAnnual ? 'Cobrado anualmente (R$ 704,40)' : 'Cobrado mensalmente'}
                </span>
              </div>
              <div className="text-right">
                <span className="font-space text-[10px] px-2 py-0.5 rounded bg-[#00ff87]/20 text-[#00ff87] font-bold">
                  +EV &gt; 12.8%
                </span>
              </div>
            </div>

            <ul className="space-y-1.5 text-xs text-[#dde2f3]">
              <li className="flex items-start gap-2 text-[#00ff87] font-semibold">
                <span className="material-symbols-outlined text-[16px] shrink-0">verified</span>
                <span>Tudo incluso no Plano Pro, mais:</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00ff87] text-[16px] shrink-0">
                  precision_manufacturing
                </span>
                <span><strong>Radar Live Bot 24/7</strong> (Latência ultrabaixa 18ms)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00ff87] text-[16px] shrink-0">crisis_alert</span>
                <span>Alertas Push: <em>Cantos Limite</em> &amp; <em>Gols Iminentes</em></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00ff87] text-[16px] shrink-0">forum</span>
                <span>Comunidade Secreta VIP no Discord c/ Lives</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00ff87] text-[16px] shrink-0">touch_app</span>
                <span>Copiador de bilhete 1-toque com Bet365 e Betano</span>
              </li>
              <li className="flex items-start gap-2 text-[#00e3fd]">
                <span className="material-symbols-outlined text-[16px] shrink-0">shield_with_heart</span>
                <span className="font-medium">Garantia incondicional de 7 dias</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => {
                onSelectPlan({
                  name: 'VIP Sniper Anual',
                  price: isAnnual ? 'R$ 704,40' : 'R$ 97,90',
                  period: isAnnual ? 'Anual' : 'Mensal'
                });
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-[#00ff87] hover:bg-[#00e478] text-[#00210c] font-space text-[14px] font-extrabold uppercase tracking-wide flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all active:scale-95"
            >
              <span>Desbloquear VIP Agora</span>
              <span className="material-symbols-outlined text-[20px]">flash_on</span>
            </button>
          </div>

          {/* Syndicate Elite */}
          <div className="flex flex-col rounded-2xl bg-[#161c28] p-4 space-y-3 shadow-md border border-[#242a37]">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#00e3fd] text-[18px]">diamond</span>
                  <span className="font-space text-[15px] text-[#dde2f3] font-bold">Syndicate Elite</span>
                </div>
                <p className="text-[11px] text-[#b9cbb9] mt-0.5">Para bancas acima de R$ 15.000</p>
              </div>
              <span className="font-space text-[9px] px-2 py-0.5 rounded bg-[#242a37] text-[#00e3fd] font-semibold uppercase">
                High Stakes
              </span>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="font-space text-2xl text-[#dde2f3] font-bold tracking-tight">
                {syndicatePrice}
              </span>
              <span className="text-[11px] text-[#b9cbb9]">/ mês</span>
            </div>

            <ul className="space-y-1.5 text-xs text-[#dde2f3]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00ff87] text-[16px] shrink-0">check_circle</span>
                <span>Acesso total ao ecossistema VIP Sniper</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00ff87] text-[16px] shrink-0">support_agent</span>
                <span>Mentoria 1-a-1 semanal com Analista Sênior</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00ff87] text-[16px] shrink-0">vpn_lock</span>
                <span>Salas de liquidez asiática (Pinnacle/Singbet)</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => {
                onSelectPlan({ name: 'Syndicate Elite', price: syndicatePrice, period: isAnnual ? 'Anual' : 'Mensal' });
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-[#242a37] hover:bg-[#2f3542] text-[#dde2f3] font-space text-[12px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Assinar Syndicate</span>
              <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
            </button>
          </div>
        </div>

        {/* Guarantee Seal */}
        <div className="rounded-2xl bg-[#161c28] p-3.5 space-y-2 mt-4 border border-[#242a37]">
          <div className="flex items-start gap-2.5">
            <div className="p-2 rounded-xl bg-[#242a37] text-[#00ff87] shrink-0">
              <span className="material-symbols-outlined text-[22px]">verified_user</span>
            </div>
            <div className="flex flex-col">
              <span className="font-space text-[13px] text-[#dde2f3] font-bold">
                Garantia Blindada de 7 Dias
              </span>
              <p className="text-[11px] text-[#b9cbb9] mt-0.5">
                Teste todo o conteúdo, bots e sinais. Se você não registrar lucro ou não gostar, reembolsamos 100% via PIX em até 10 minutos.
              </p>
            </div>
          </div>
          <div className="pt-2 flex items-center justify-between px-2 text-[#b9cbb9] border-t border-[#242a37] text-[10px]">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[#00ff87] text-[15px]">qr_code_2</span>
              <span>Pix Imediato</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[#dde2f3] text-[15px]">credit_card</span>
              <span>Até 12x no Cartão</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[#00e3fd] text-[15px]">lock</span>
              <span>Checkout 256-bit</span>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="rounded-2xl bg-[#161c28] p-3.5 space-y-2 mt-3 border border-[#242a37]">
          <div className="flex items-center gap-1.5 pb-1">
            <span className="material-symbols-outlined text-[#00ff87] text-[18px]">help_outline</span>
            <span className="font-space text-[13px] text-[#dde2f3] font-bold">Dúvidas Frequentes</span>
          </div>

          {[
            {
              q: 'Como recebo o acesso após assinar?',
              a: 'A liberação é automática! Assim que confirmado (segundos no PIX/Cartão), você recebe um e-mail com link do app e convite exclusivo para os canais do Telegram e Discord.'
            },
            {
              q: 'Posso cancelar quando quiser?',
              a: 'Sim, com 1 clique direto no painel do seu perfil. Sem burocracia, sem telefonemas e sem fidelidade obrigatória.'
            },
            {
              q: 'Preciso ter banca alta para começar?',
              a: 'Não. Nosso bot trabalha com unidades proporcionais (ex: 1% a 2% de stake). Você pode iniciar com bancas a partir de R$ 50,00 aplicando nossa gestão recomendada.'
            }
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-[#1a202c] p-2.5 border border-[#242a37]">
              <button
                type="button"
                onClick={() => toggleFaq(i)}
                className="flex items-center justify-between w-full text-left font-space text-[11px] text-[#dde2f3] font-semibold"
              >
                <span>{item.q}</span>
                <span
                  className={`material-symbols-outlined text-[16px] text-[#00ff87] transition-transform ${
                    openFaq === i ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openFaq === i && (
                <p className="text-[11px] text-[#b9cbb9] mt-2 pt-1 border-t border-[#242a37] leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Micro Help */}
        <div className="flex items-center justify-center gap-1.5 text-center text-[#b9cbb9] py-4 text-[11px]">
          <span className="material-symbols-outlined text-[15px]">headset_mic</span>
          <span>
            Precisa de ajuda com o plano ideal?{' '}
            <button
              type="button"
              onClick={() => onShowToast('Consultor de plantão: contato direto via WhatsApp (11) 99824-7162')}
              className="text-[#00ff87] font-semibold underline underline-offset-2"
            >
              Fale com um consultor
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
