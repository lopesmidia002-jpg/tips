export type ActiveTab = 'feed' | 'analise' | 'vip' | 'tipsters' | 'banca';

export interface HtmlImageItem {
  id: string;
  title: string;
  category: 'logo' | 'tipster' | 'crest' | 'analyst' | 'screen';
  url: string;
  alt: string;
  dimensions?: string;
  description: string;
}

export interface TipItem {
  id: string;
  tipster: {
    name: string;
    handle: string;
    avatar: string;
    verified: boolean;
    roi: string;
  };
  category: 'futebol' | 'nba' | 'tenis' | 'esports' | 'brasileirao';
  match: string;
  tournament: string;
  time: string;
  probability: string;
  market: string;
  odds: number;
  stake: string;
  tag: string;
  tagIcon: string;
}

export interface TipsterRank {
  rank: number;
  name: string;
  handle: string;
  badge: string;
  avatar: string;
  specialty: string;
  winRate: string;
  roi: string;
  profit: string;
  tipsCount: string;
  streakText: string;
  isFeatured?: boolean;
}

export interface LiveMatch {
  id: string;
  tournament: string;
  minute: string;
  isHot: boolean;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  statusText: string;
  offensivePressure: number;
  pressureLabel: string;
  shotsCount: string;
  xgStats: string;
  attacksCount: string;
  recommendation: string;
  limitWindow: string;
  liveOdds: number;
  timeRemaining: string;
  liquidity: string;
}

export interface AppScreenItem {
  id: string;
  tab: ActiveTab;
  title: string;
  screenTitle: string;
  description: string;
}

export interface RecentBet {
  id: string;
  match: string;
  market: string;
  odds: number;
  stake?: string;
  status?: 'green' | 'red' | 'live' | 'pending';
  result?: 'green' | 'red' | 'pending';
  statusText?: string;
  units?: string;
  profitBrl?: string;
  amount?: string;
  date?: string;
}
