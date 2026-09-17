import React, { useState, useEffect } from 'react';

interface PixCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: { name: string; price: string; period: string } | null;
  onShowToast: (msg: string) => void;
}

export const PixCheckoutModal: React.FC<PixCheckoutModalProps> = ({
  isOpen,
  onClose,
  plan,
  onShowToast,
}) => {
  const [copied, setCopied] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(14 * 60 + 59); // 14:59
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'checking' | 'approved'>('pending');

  const selectedPlanName = plan?.name || 'VIP Sniper Anual';
  const selectedPlanPrice = plan?.price || 'R$ 704,40';

  const pixCode = `00020126580014br.gov.bcb.pix0136bettips-pro-vip-pay-94827103825204000053039865406704.405802BR5915BETTIPS PRO TEC6009SAO PAULO62070503***6304E8A2`;

  useEffect(() => {
    if (!isOpen) {
      setSecondsRemaining(14 * 60 + 59);
      setPaymentStatus('pending');
      setCopied(false);
      return;
    }

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleCopyPix = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(pixCode).catch(() => {});
    }
    setCopied(true);
    onShowToast('Código Pix copiado! Cole no aplicativo do seu banco.');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSimulatePayment = () => {
    setPaymentStatus('checking');
    setTimeout(() => {
      setPaymentStatus('approved');
      onShowToast('🎉 Pagamento PIX aprovado com sucesso! Bem-vindo ao VIP!');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0d131f]/95 backdrop-blur-md flex flex-col justify-end sm:justify-center p-0 sm:p-4">
      <div className="bg-[#161c28] w-full max-w-md mx-auto rounded-t-3xl sm:rounded-3xl border border-[#242a37] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Handle & Header */}
        <div className="p-4 pb-2 border-b border-[#242a37] flex flex-col">
          <div className="w-12 h-1 bg-[#2f3542] rounded-full mx-auto mb-3 sm:hidden"></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#00ff87]/15 flex items-center justify-center text-[#00ff87] border border-[#00ff87]/30">
                <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <h2 className="font-space text-lg text-[#dde2f3] font-bold">Pagar com Pix</h2>
                  <span className="px-2 py-0.2 rounded-full bg-[#00ff87]/20 text-[#00ff87] font-space text-[9px] font-bold uppercase">
                    Instantâneo
                  </span>
                </div>
                <span className="text-xs text-[#b9cbb9]">
                  {selectedPlanName} • <strong className="text-[#00ff87]">{selectedPlanPrice}</strong>
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#242a37] text-[#b9cbb9] hover:text-[#dde2f3] flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-4 overflow-y-auto flex flex-col space-y-3.5">
          {paymentStatus === 'approved' ? (
            /* Success State */
            <div className="flex flex-col items-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-[#00ff87]/20 border-2 border-[#00ff87] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,135,0.4)] animate-bounce">
                <span className="material-symbols-outlined text-[#00ff87] text-[40px]">check_circle</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-space text-xl text-[#dde2f3] font-bold">Pagamento Confirmado!</h3>
                <p className="text-xs text-[#b9cbb9]">
                  Sua assinatura <strong>{selectedPlanName}</strong> foi ativada. O radar ao vivo e canais VIP já estão liberados!
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#1a202c] border border-[#242a37] w-full text-left space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-[#b9cbb9]">Transação ID:</span>
                  <span className="font-space text-[#00ff87] font-bold">#PIX-982410-OK</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#b9cbb9]">Valor Pago:</span>
                  <span className="font-space text-[#dde2f3] font-bold">{selectedPlanPrice}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#b9cbb9]">Vencimento:</span>
                  <span className="font-space text-[#dde2f3]">1 ano a partir de hoje</span>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-[#00ff87] text-[#00210c] font-space text-[14px] font-bold"
              >
                Acessar Área VIP Agora
              </button>
            </div>
          ) : (
            <>
              {/* Countdown Alert */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#1a202c] border border-[#242a37]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#00e3fd] text-[18px]">timer</span>
                  <span className="text-xs text-[#b9cbb9]">Código Pix expira em:</span>
                </div>
                <span className="font-space text-base text-[#00ff87] font-bold tracking-wider">
                  {formattedTime}
                </span>
              </div>

              {/* QR Code Container */}
              <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-lg mx-auto max-w-[240px]">
                {/* Visual SVG QR Code representing the Pix code */}
                <svg
                  className="w-48 h-48"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Frame */}
                  <rect width="200" height="200" fill="white" />
                  {/* Position squares */}
                  {/* Top-Left */}
                  <rect x="15" y="15" width="45" height="45" fill="#0d131f" rx="4" />
                  <rect x="23" y="23" width="29" height="29" fill="white" rx="2" />
                  <rect x="29" y="29" width="17" height="17" fill="#00ff87" rx="2" />

                  {/* Top-Right */}
                  <rect x="140" y="15" width="45" height="45" fill="#0d131f" rx="4" />
                  <rect x="148" y="23" width="29" height="29" fill="white" rx="2" />
                  <rect x="154" y="29" width="17" height="17" fill="#00ff87" rx="2" />

                  {/* Bottom-Left */}
                  <rect x="15" y="140" width="45" height="45" fill="#0d131f" rx="4" />
                  <rect x="23" y="148" width="29" height="29" fill="white" rx="2" />
                  <rect x="29" y="154" width="17" height="17" fill="#00ff87" rx="2" />

                  {/* Data Grid Mockup Dots */}
                  <rect x="70" y="20" width="10" height="10" fill="#0d131f" />
                  <rect x="90" y="20" width="10" height="10" fill="#0d131f" />
                  <rect x="110" y="20" width="10" height="10" fill="#0d131f" />
                  <rect x="75" y="40" width="15" height="10" fill="#0d131f" />
                  <rect x="100" y="40" width="10" height="15" fill="#0d131f" />
                  <rect x="120" y="40" width="10" height="10" fill="#0d131f" />

                  <rect x="20" y="70" width="10" height="15" fill="#0d131f" />
                  <rect x="40" y="80" width="10" height="10" fill="#0d131f" />
                  <rect x="70" y="70" width="60" height="60" fill="#0d131f" rx="6" />
                  {/* Central BetTips Icon */}
                  <rect x="80" y="80" width="40" height="40" fill="#00ff87" rx="4" />
                  <path
                    d="M95 90 L108 98 L95 106 Z"
                    fill="#00210c"
                  />

                  <rect x="140" y="70" width="10" height="10" fill="#0d131f" />
                  <rect x="160" y="75" width="20" height="10" fill="#0d131f" />
                  <rect x="145" y="95" width="15" height="15" fill="#0d131f" />
                  <rect x="170" y="95" width="15" height="10" fill="#0d131f" />

                  <rect x="20" y="115" width="15" height="10" fill="#0d131f" />
                  <rect x="45" y="120" width="10" height="10" fill="#0d131f" />

                  <rect x="70" y="145" width="15" height="15" fill="#0d131f" />
                  <rect x="95" y="145" width="10" height="10" fill="#0d131f" />
                  <rect x="115" y="140" width="15" height="15" fill="#0d131f" />
                  <rect x="140" y="145" width="10" height="10" fill="#0d131f" />
                  <rect x="160" y="140" width="25" height="10" fill="#0d131f" />

                  <rect x="70" y="170" width="20" height="10" fill="#0d131f" />
                  <rect x="100" y="165" width="25" height="15" fill="#0d131f" />
                  <rect x="135" y="165" width="15" height="15" fill="#0d131f" />
                  <rect x="160" y="165" width="20" height="15" fill="#0d131f" />
                </svg>
                <span className="text-[10px] text-zinc-600 font-space font-semibold mt-1">
                  Escaneie com a câmera ou app do banco
                </span>
              </div>

              {/* 3 Steps Guide */}
              <div className="space-y-1.5 bg-[#1a202c] p-3 rounded-xl border border-[#242a37]">
                <span className="font-space text-[11px] text-[#00ff87] font-bold uppercase">
                  Como pagar com Pix:
                </span>
                <div className="flex items-start gap-2 text-xs text-[#dde2f3]">
                  <span className="w-4 h-4 rounded-full bg-[#242a37] text-[10px] font-bold flex items-center justify-center text-[#00ff87] shrink-0 mt-0.5">
                    1
                  </span>
                  <span>Abra o app do seu banco e selecione a opção <strong>Pix</strong></span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#dde2f3]">
                  <span className="w-4 h-4 rounded-full bg-[#242a37] text-[10px] font-bold flex items-center justify-center text-[#00ff87] shrink-0 mt-0.5">
                    2
                  </span>
                  <span>Escolha <strong>Pix Copia e Cola</strong> ou aponte para o QR Code</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#dde2f3]">
                  <span className="w-4 h-4 rounded-full bg-[#242a37] text-[10px] font-bold flex items-center justify-center text-[#00ff87] shrink-0 mt-0.5">
                    3
                  </span>
                  <span>Confirme o pagamento de <strong>{selectedPlanPrice}</strong></span>
                </div>
              </div>

              {/* Pix Copia e Cola Input & Copy Button */}
              <div className="space-y-2">
                <label className="font-space text-[10px] text-[#b9cbb9] uppercase block">
                  Pix Copia e Cola
                </label>
                <div className="relative">
                  <input
                    type="text"
                    readOnly
                    value={pixCode}
                    className="w-full bg-[#080e1a] border border-[#242a37] rounded-xl px-3 py-2 text-xs text-[#b9cbb9] font-mono select-all pr-10 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#242a37] text-[#00ff87] hover:bg-[#2f3542]"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copied ? 'check' : 'content_copy'}
                    </span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPix}
                  className="w-full py-3 px-4 rounded-xl bg-[#00ff87] hover:bg-[#00e478] text-[#00210c] font-space text-[14px] font-bold flex items-center justify-center gap-2 shadow-[0_0_16px_rgba(0,255,135,0.3)] transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {copied ? 'done_all' : 'copy_all'}
                  </span>
                  <span>{copied ? 'Código Copiado com Sucesso!' : 'Copiar Código Pix'}</span>
                </button>
              </div>

              {/* Live Bank Confirmation Radar */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#080e1a] border border-[#242a37]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#00e3fd] text-[18px] animate-spin">
                    sync
                  </span>
                  <span className="text-xs text-[#dde2f3]">
                    {paymentStatus === 'checking'
                      ? 'Verificando com o Banco Central...'
                      : 'Aguardando confirmação bancária...'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleSimulatePayment}
                  className="text-[11px] font-space text-[#00ff87] font-bold hover:underline"
                >
                  Já paguei
                </button>
              </div>

              {/* Trust Footer */}
              <div className="flex items-center justify-center gap-3 text-[10px] text-[#b9cbb9] pt-1">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px] text-[#00ff87]">security</span>
                  <span>SSL 256-bit</span>
                </div>
                <span>•</span>
                <span>Banco Central do Brasil</span>
                <span>•</span>
                <span>Garantia de 7 Dias</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
