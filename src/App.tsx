/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActiveTab, RecentBet } from './types';
import { RECENT_BETS } from './data/mockData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { FeedView } from './components/FeedView';
import { AnaliseView } from './components/AnaliseView';
import { TipstersView } from './components/TipstersView';
import { VipLiveView } from './components/VipLiveView';
import { BancaView } from './components/BancaView';
import { VipPlansModal } from './components/VipPlansModal';
import { PixCheckoutModal } from './components/PixCheckoutModal';
import { InteractiveGalleryModal } from './components/InteractiveGalleryModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('feed');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isVipPlansOpen, setIsVipPlansOpen] = useState(false);
  const [isPixCheckoutOpen, setIsPixCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
    period: string;
  } | null>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [betsList, setBetsList] = useState<RecentBet[]>(RECENT_BETS);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3200);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const handleSaveToBankroll = (item: {
    match: string;
    market: string;
    odds: number;
    stake: string;
  }) => {
    const stakeMultiplier = parseFloat(item.stake) || 1.5;
    const potentialReturn = (stakeMultiplier * 50 * item.odds).toFixed(2);

    const newBet: RecentBet = {
      id: `b-${Date.now()}`,
      match: item.match,
      market: item.market,
      odds: item.odds,
      stake: item.stake,
      result: 'pending',
      amount: `R$ ${potentialReturn}`,
      date: 'Hoje'
    };

    setBetsList((prev) => [newBet, ...prev]);
  };

  const handleSelectPlan = (plan: { name: string; price: string; period: string }) => {
    setSelectedPlan(plan);
    setIsVipPlansOpen(false);
    setIsPixCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080e1a] text-[#dde2f3] flex flex-col selection:bg-[#00ff87] selection:text-[#00210c] font-sans antialiased relative">
      {/* Mobile-Centric Container */}
      <div className="max-w-md mx-auto w-full min-h-screen bg-[#0d131f] flex flex-col relative pb-20 pt-16 shadow-[0_0_50px_rgba(0,0,0,0.8)] border-x border-[#242a37]/50">
        {/* Header with App Logo, Live Indicator & Gallery Direct Link Access */}
        <Header
          activeTab={activeTab}
          onOpenGallery={() => setIsGalleryOpen(true)}
          onOpenVipPlans={() => setIsVipPlansOpen(true)}
          onShowToast={showToast}
        />

        {/* Main Content Rendered based on Active Tab */}
        <main className="flex-1 flex flex-col">
          {activeTab === 'feed' && (
            <FeedView
              onShowToast={showToast}
              onNavigateTab={(tab) => setActiveTab(tab)}
              onSaveToBankroll={handleSaveToBankroll}
            />
          )}

          {activeTab === 'analise' && (
            <AnaliseView
              onShowToast={showToast}
              onSaveToBankroll={handleSaveToBankroll}
            />
          )}

          {activeTab === 'vip' && (
            <VipLiveView
              onShowToast={showToast}
              onOpenVipPlans={() => setIsVipPlansOpen(true)}
              onSaveToBankroll={handleSaveToBankroll}
            />
          )}

          {activeTab === 'tipsters' && (
            <TipstersView onShowToast={showToast} />
          )}

          {activeTab === 'banca' && (
            <BancaView
              onShowToast={showToast}
              betsList={betsList}
              onAddBet={(bet) => setBetsList((prev) => [bet, ...prev])}
            />
          )}
        </main>

        {/* Bottom Navigation with 5 Destinations */}
        <BottomNav activeTab={activeTab} onSelectTab={(tab) => setActiveTab(tab)} />

        {/* Interactive Gallery Modal (Addresses the user's specific prompt for direct HTML links and interactive gallery) */}
        <InteractiveGalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          onNavigateToTab={(tab) => setActiveTab(tab)}
          onShowToast={showToast}
        />

        {/* VIP Plans & Subscription Modal */}
        <VipPlansModal
          isOpen={isVipPlansOpen}
          onClose={() => setIsVipPlansOpen(false)}
          onSelectPlan={handleSelectPlan}
          onShowToast={showToast}
        />

        {/* Instant Pix Checkout Modal */}
        <PixCheckoutModal
          isOpen={isPixCheckoutOpen}
          onClose={() => setIsPixCheckoutOpen(false)}
          plan={selectedPlan}
          onShowToast={showToast}
        />

        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 max-w-xs w-[90%] px-4 py-2.5 rounded-xl bg-[#161c28]/95 backdrop-blur-md border border-[#00ff87]/50 shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-top-2 duration-150">
            <span className="material-symbols-outlined text-[#00ff87] text-[18px] shrink-0">
              verified
            </span>
            <span className="text-xs text-[#dde2f3] font-space font-medium leading-tight truncate">
              {toastMessage}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
