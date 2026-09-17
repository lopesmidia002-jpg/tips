import { HtmlImageItem, TipItem, TipsterRank, LiveMatch, RecentBet } from '../types';

export const HTML_IMAGES: HtmlImageItem[] = [
  {
    id: 'logo-bettips',
    title: 'Logo Oficial BetTips PRO',
    category: 'logo',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZROkoESXTGU0RDmnQy3UMEwCN_07P8syCIwbtS6NUbyogs5DwnamiiCF0V8xGlukU9Ij0bPpjU6Z5WFiWnrPAqNOFiHC1v2kRWJlHNW9UDS2KslzUDxMhrhKc-U7hkHojmXF-X0VZqeRf5mlXzuqaV_FePSCWRqSnKnC8t5sGdicQGpQi6a9AacGEJqAHhDarCpmfm8_ZIAS1RMEnjPQ8OoJkXQOZZRD5LtbMs7GuYKASHfTg-thwdw',
    alt: 'BetTips Pro Logo em gradiente verde e ciano neon com alvo, raio e seta ascendente',
    dimensions: '1024x1024 px',
    description: 'Emblema principal do aplicativo exibido no cabeçalho e na identidade visual da marca.'
  },
  {
    id: 'avatar-user',
    title: 'Avatar do Usuário / Perfil',
    category: 'tipster',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1834zkgwNuCgi_vn_PcZ63M6dy97EcLT3qlAUKRCW9C94jDvI3D3IVceULRMpYiW50c75GWvVaW5NpE82kd3gz4_bQf0mPAA0EEgTrdCrufMaHOI2FNY7pRhej1M3lX6j4MEgH5N6gfJAGbNisDCg8swz9ajYQ6ATIHWSqa0Y5vYDMGnUvcCY3jDPdEh3xH5fWEkCyQXZ4C3WeRu78MTx4f5RP_JybtFR34huzyJka5UFGb0yeF2-xQ',
    alt: 'Foto de perfil do apostador / analista no cabeçalho superior direito',
    dimensions: '512x512 px',
    description: 'Foto do trader/analista exibida no canto superior direito do header de todas as telas.'
  },
  {
    id: 'crest-realmadrid',
    title: 'Escudo Real Madrid C.F.',
    category: 'crest',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgHorFo-tLskDgn_jLpVapllpys8FDtomr5o51XG6ew1la8ciS_laq3OXVFuKc7rYTDTqXkUsHuOrQtFFEULI3FLVnDgma_EzAq2CujDVcpqSwRUSQyKguACCaZoSLrOEJ4s7Hk7sj-IqcqwfikUuTXbrrfIQp-jAgXEpn_9j4c9PiKFvT_YDIvvRZSzeOKgeNB3MKIUG-OJzH6vsKTcv3Dmq8OW7ywSefEUYjGUcHD88Z6Gxc9AQw9Q',
    alt: 'Escudo oficial do Real Madrid em alta resolução para o card de confronto',
    dimensions: '512x512 px',
    description: 'Escudo do time mandante na tela de análise e na Tip Ouro da Champions League.'
  },
  {
    id: 'crest-mancity',
    title: 'Escudo Manchester City F.C.',
    category: 'crest',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7n37AFemCvZJmZLJT4K2cLLIlX26ZFZ1pM1r2qZGrRa1RDjBZHO_WDSjV3tS67AS9rACjYCw18lB23DDBqVsnNYVdZmky1zY2gwnkeY-duTl7xkY6wtL2zhp23cRKMCtifDF-X2Rbc_nJgAM5BgaF0g1j8c-mtD0VaHfUpDPrApx_dqifa-EIELk8EvVHiXMeblacY9BFTZommKOqu3f8pqBmQprfG9--40Tfq3T8pm0Mv-slM42OYQ',
    alt: 'Escudo oficial do Manchester City circular moderno',
    dimensions: '512x512 px',
    description: 'Escudo do time visitante para o confronto Real Madrid vs Man City.'
  },
  {
    id: 'tipster-andre-fontes',
    title: 'André Fontes (@TraderGreen) - #1 Destaque',
    category: 'tipster',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA55uAdmstBYeBMGAbwXlpKanZXqTO_zIONRJIsq6e3SeFYDxxDI846mJBwaKqGFHfYzLGK8hVXbQBgdZrCdgpvqEn66ofs0KfMY8IyZJDp_1oAPtJXcQz8AaQMU72KGo-RvNLvlY9tK0m6RBpkda3QSRYrOJyRhjHdfJYQX_M9XLCGb8chIPxRTYh6cODWDK2Vi1LL134coGva5u_TE9ldAiQmH8S07uTHeOyhKzXmwPOOWxILICMN_A',
    alt: 'Retrato de André Fontes, analista destaque #1 do ranking de tipsters com óculos em estúdio de trading',
    dimensions: '512x512 px',
    description: 'Tipster #1 com 78.4% de Win Rate, +34.2% de ROI médio e +48.5u de lucro líquido.'
  },
  {
    id: 'tipster-lucas-green',
    title: 'Lucas Green (@LucasGreen) - Cantos',
    category: 'tipster',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO6sE0qMyP7kM5ArWA4zBn2VMUSLQhja3uXMzbx1UdBG98-I_GEpqQncBdcxj5cDbSZ6aa4SIc7Lqlrl-A3wgedF4T9_9tvELFw7_hIN5MNO-atnzG5IlBnBpwFO0BjzlvHIPrAjMowmmspQNqoctB7vnDGEwyemD9xJ5XiNYHTQX8XUUVhQTSOVE_XRaEYExnsbcopoWZ1-f45YD-guMX6bMLTH8BkFt1-3SwP3LsJBTfMrALd3Botg',
    alt: 'Avatar do tipster Lucas Green em iluminação neon azul e ciano',
    dimensions: '512x512 px',
    description: 'Tipster verificado especialista em futebol e escanteios, com 28% de ROI nos últimos 30 dias.'
  },
  {
    id: 'tipster-hoops-data',
    title: 'HoopsData (@HoopsData) - NBA',
    category: 'tipster',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtTEtMfJZMYQleOfc3TUmVQANHTjeK-M-xBvet1XdvjtuzazaN7Z9f09z7OwevrBZ9o-4BPsSmdPLjV-EsvQJ_RqE8mV2sO4WCJOulXAT0JmUjA8qwrIqVo-VSzQHvSM-QtbzNzg1NYF3DS-H-LVOLYrDGL-RuUfdoJBJzBgsJwHPxoRyGO0ihjh8yhMslCLEZ5HTc43ieiz6qo4HGCqGEwlD-nA_fix4rIhdKV-9T9wzSXIbd_-SSSg',
    alt: 'Avatar de analista quantitativo de basquete NBA',
    dimensions: '512x512 px',
    description: 'Especialista em apostas individuais e estatísticas da NBA, com 74% de assertividade.'
  },
  {
    id: 'tipster-mestre-do-bet',
    title: 'Mestre do Bet (@MestreDoBet) - Brasileirão',
    category: 'tipster',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV7iBovFqL33p_RO2719if1Dz-SCB8vYmkx1K_tHKerIY9uWRmNX3I7UqhhK_f_8jij0AIDZtO7aE0bFwCXcUk9BQ1nDoBlLLH4Mm13Y3UIUlmIbhFC6nRPstHFudCqX2_zgGalslqAyoI9AMhXXzlXpgmJUgY_mAeBc6wWDP9pjg6jvND_r6K-Uie3BwKiRVZGmF0K_bExr0FZBbUdR5uEBd6T4tEyYYPDXuirk504qq9VjcniHeRUA',
    alt: 'Foto do tipster brasileiro de terno com óculos escuros e iluminação neon',
    dimensions: '512x512 px',
    description: 'Handicapper de elite focado em Brasileirão Série A, acumulando 6 greens consecutivos.'
  },
  {
    id: 'tipster-felipe-tips',
    title: 'Felipe Tips (@FelipeTips) - Editorial',
    category: 'tipster',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB42d_0X8gedgf9HWMaq68df4U0yvu_9G-NBGG1rry8fP1US1qXUlo66DdS6c2DXf2u3UKsqQWatFtT_hvKKNysk_NNnNVC00P2y988kvmEY2VS58g-vncZDy0VWFS6XkqhVjqWgdGe4xVfhSi14wAfbAw30vsWElICj0erN9RRnLCXUG51fwGDYdel0PXHDDftXm884m9SZ4L8Hz1b99b_7AgbBRc3cpMLn4YwbLkRTOLIcXQsNKX0Lw',
    alt: 'Analista de mercado com fone de ouvido analisando métricas de futebol europeu',
    dimensions: '512x512 px',
    description: 'Autor da análise tática do confronto Real Madrid vs Man City na aba de Análise.'
  },
  {
    id: 'tipster-matheus-reis',
    title: 'Matheus Reis (@HandicapPro) - #2 Ranking',
    category: 'tipster',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKlxy8izdY027xKgCW24RMz-m1p9N9KZ_JmyT0LhE3_drNsZZtl7KGYeM0azJhNTnt6ecb2-VscYN0wEqp6eQPoePu52hfsHEUIopiEgMehtfe8fhD8vTQBnxNcq9DSNtYMCTctB6UxDtkwhA854-kqTg1unHdEELPs5mhrpoRK3mURsXhCmrd-eQZvYvEiIQbHA_CkZ86umVGWVB3sRNQMTvGX6b80Ue0ypbjXKnR-i-3EKjdhASd1w',
    alt: 'Retrato do tipster Matheus Reis, especialista em Premier League',
    dimensions: '512x512 px',
    description: 'Vice-líder do ranking com 71.2% de Win Rate e +26.8% de ROI.'
  },
  {
    id: 'tipster-camila-odds',
    title: 'Camila Odds (@BasqueteEV) - #3 Ranking',
    category: 'tipster',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy-3IK8YSs88kr2VcxIbIpXlh5oCuUIn2eWSeOKfi-pD93bgixFevfjUTWRIjn_X2fJIa7Ij-48a7rfIuod39r6URCD43Xrq1jLTre3epK3O51cPe3HxsP-8Fi-bIxCaYXTlbqdqMZiLuB3Zstf0yqPa5KZpB8OkWh9itDBqfP3ssR2j9cu0tKyAd_Vwi9a94aqHVKBye5qzHE5sd0K7Y0J5jgiq8-dceW6dznKsh0kiwZF2lqSLk74w',
    alt: 'Analista de dados Camila Odds com tablet e iluminação cyber blue',
    dimensions: '512x512 px',
    description: '3ª colocada no ranking, especialista em Basquete EV com 69.5% de taxa de acerto.'
  },
  {
    id: 'tipster-rodrigo-p',
    title: 'Rodrigo P. (@CantosSniper) - #4 Ranking',
    category: 'tipster',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGnQDC85fLayTRfx4qXfMdjIj6--PQCac8Tq8U9Wwq82IVmIHTG2Jb0-cNcB-_O1YNREp1sijXJtdLtYYXly9X-TJK9_LN73gSQplU8PTN4qcuUDROAAYICnq7HZlhtnVM2Um3fczqvL9y0zDSmUaKFAlln5LTXO0TRS98245ZOJLGUvbfg6coUW0SPGK6DESiLAJ68-67aCKpNVd3X2_JiWLM2MBuw0vpQvdIGD5i2G13Z8NRW9hm3Q',
    alt: 'Especialista em mercado de escanteios Rodrigo P.',
    dimensions: '512x512 px',
    description: 'Sniper de cantos asiáticos com 210 tips registradas e 6 greens seguidos.'
  },
  {
    id: 'radar-analyst-1',
    title: 'Operador Radar ao Vivo #1',
    category: 'analyst',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0uoHa-Jb_UV9cLGHhAIuUxD4jZI0Vz4Op-BBH6YA-eYMnL67gvov4IUEbhdgo1QKLT3rOSaaeDxO8enDb8pCFb1nugzIoMzw-cu0qMj55NHLQ9-d7ekhrHxJfxZzej0HcZwtqDh43cusBeYKDS4bzTX0WwXLW7KGaneTxASfB88-4sJlDMKFdkHXEwFVLweh99KI8O77uowXCtGTkx2FLJiFVvydwHfBHbZS423l7L5UMKqa8IVl0Q',
    alt: 'Analista de plantão com headset e monitores com telas verdes neon',
    dimensions: '512x512 px',
    description: 'Analista operacional responsável pelo monitoramento dos 8 jogos ao vivo.'
  },
  {
    id: 'radar-analyst-2',
    title: 'Operador Radar ao Vivo #2',
    category: 'analyst',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTgk-iDHNyvKiye0GMldPU1gCR44qhKrJ4CbKMC-yTxCr3ELlTklfZyd07c8N1UHKgtgNEcMoJhmqgiIry6GFJ9qmJg793Dzc7g1dH1uKkkD-MEuK26fGLkhtPwalkIivvbzapReM2MaMpuFCJnOS7i36F4STR8iALm8VKOO7oP0vANgDTY5yaEbaPcBxlrXHbUQcfjJxYJEQvdgq23-JRVPvuoE3Wh4GjggbD2dGHDbid34fWA-11wQ',
    alt: 'Analista quantitativo de apostas ao vivo em estúdio escuro',
    dimensions: '512x512 px',
    description: 'Segundo operador em tempo real para algoritmos de detecção de pressão ofensiva.'
  },
  {
    id: 'channel-lucas-vip',
    title: 'Canal VIP Cantos @LucasGreen',
    category: 'analyst',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLwxZ6XyGoAPvFZXichbKmDCrIQt7BO6XNNNnxt01nl_GGB8_sLd6c6X5g504BBJ-W5t9y7si7JCbBxmuJqK47D2xacGEsMQRWiyNLK8fPdUQ9_TB70ZspHZBMR39jGuEIrJqIbY-oVdQ9IPRqJHjEIXpJ6IPsPBRD0jyngFZWuhlnlS2LkwTRmkfZ-SJuCFbNOQFGMeMO9f3gnvvdafcNhE5jrttst6dbpAcJr5MgOOGbSSBTMP0XhA',
    alt: 'Avatar do canal VIP de cantos do Lucas Green',
    dimensions: '512x512 px',
    description: 'Canal VIP exclusivo de cantos limites com 18 greens seguidos.'
  }
];

export const VERIFIED_TIPS: TipItem[] = [
  {
    id: 'tip-1',
    tipster: {
      name: 'Lucas Green',
      handle: '@LucasGreen',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO6sE0qMyP7kM5ArWA4zBn2VMUSLQhja3uXMzbx1UdBG98-I_GEpqQncBdcxj5cDbSZ6aa4SIc7Lqlrl-A3wgedF4T9_9tvELFw7_hIN5MNO-atnzG5IlBnBpwFO0BjzlvHIPrAjMowmmspQNqoctB7vnDGEwyemD9xJ5XiNYHTQX8XUUVhQTSOVE_XRaEYExnsbcopoWZ1-f45YD-guMX6bMLTH8BkFt1-3SwP3LsJBTfMrALd3Botg',
      verified: true,
      roi: 'ROI 28% (Últimos 30d)'
    },
    category: 'futebol',
    match: 'Arsenal vs Bayern Munich',
    tournament: 'Champions League',
    time: 'Hoje 16:00',
    probability: '64%',
    market: 'Mais de 9.5 Escanteios',
    odds: 1.82,
    stake: '1.5u',
    tag: 'Pressão alta calculada',
    tagIcon: 'trending_up'
  },
  {
    id: 'tip-2',
    tipster: {
      name: 'HoopsData',
      handle: '@HoopsData',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtTEtMfJZMYQleOfc3TUmVQANHTjeK-M-xBvet1XdvjtuzazaN7Z9f09z7OwevrBZ9o-4BPsSmdPLjV-EsvQJ_RqE8mV2sO4WCJOulXAT0JmUjA8qwrIqVo-VSzQHvSM-QtbzNzg1NYF3DS-H-LVOLYrDGL-RuUfdoJBJzBgsJwHPxoRyGO0ihjh8yhMslCLEZ5HTc43ieiz6qo4HGCqGEwlD-nA_fix4rIhdKV-9T9wzSXIbd_-SSSg',
      verified: true,
      roi: 'Assertividade 74%'
    },
    category: 'nba',
    match: 'LA Lakers vs Boston Celtics',
    tournament: 'NBA Season',
    time: 'Hoje 23:30',
    probability: '68%',
    market: 'LeBron James +24.5 Pontos',
    odds: 1.88,
    stake: '2.0u',
    tag: 'Bateu em 4/5 jogos',
    tagIcon: 'show_chart'
  },
  {
    id: 'tip-3',
    tipster: {
      name: 'Mestre do Bet',
      handle: '@MestreDoBet',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV7iBovFqL33p_RO2719if1Dz-SCB8vYmkx1K_tHKerIY9uWRmNX3I7UqhhK_f_8jij0AIDZtO7aE0bFwCXcUk9BQ1nDoBlLLH4Mm13Y3UIUlmIbhFC6nRPstHFudCqX2_zgGalslqAyoI9AMhXXzlXpgmJUgY_mAeBc6wWDP9pjg6jvND_r6K-Uie3BwKiRVZGmF0K_bExr0FZBbUdR5uEBd6T4tEyYYPDXuirk504qq9VjcniHeRUA',
      verified: true,
      roi: 'Streak: 6 Greens seguidos'
    },
    category: 'brasileirao',
    match: 'Flamengo vs Palmeiras',
    tournament: 'Brasileirão Série A',
    time: 'Amanhã 16:00',
    probability: '58%',
    market: 'Empate ou Palmeiras e -3.5 Gols',
    odds: 2.10,
    stake: '1.0u',
    tag: 'Defesas consistentes',
    tagIcon: 'shield'
  }
];

export const TIPSTERS_RANKING: TipsterRank[] = [
  {
    rank: 1,
    name: 'André Fontes',
    handle: '@TraderGreen',
    badge: 'Mestre da Champions',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA55uAdmstBYeBMGAbwXlpKanZXqTO_zIONRJIsq6e3SeFYDxxDI846mJBwaKqGFHfYzLGK8hVXbQBgdZrCdgpvqEn66ofs0KfMY8IyZJDp_1oAPtJXcQz8AaQMU72KGo-RvNLvlY9tK0m6RBpkda3QSRYrOJyRhjHdfJYQX_M9XLCGb8chIPxRTYh6cODWDK2Vi1LL134coGva5u_TE9ldAiQmH8S07uTHeOyhKzXmwPOOWxILICMN_A',
    specialty: 'Over Gols & Mercados Europeus',
    winRate: '78.4%',
    roi: '+34.2%',
    profit: '+48.5u',
    tipsCount: '87/111 Tips',
    streakText: '7 GREENS SEGUIDOS',
    isFeatured: true
  },
  {
    rank: 2,
    name: 'Matheus Reis',
    handle: '@HandicapPro',
    badge: 'Especialista Premier League',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKlxy8izdY027xKgCW24RMz-m1p9N9KZ_JmyT0LhE3_drNsZZtl7KGYeM0azJhNTnt6ecb2-VscYN0wEqp6eQPoePu52hfsHEUIopiEgMehtfe8fhD8vTQBnxNcq9DSNtYMCTctB6UxDtkwhA854-kqTg1unHdEELPs5mhrpoRK3mURsXhCmrd-eQZvYvEiIQbHA_CkZ86umVGWVB3sRNQMTvGX6b80Ue0ypbjXKnR-i-3EKjdhASd1w',
    specialty: 'Handicap Asiático',
    winRate: '71.2%',
    roi: '+26.8%',
    profit: '+32.4u',
    tipsCount: '142 tips registradas',
    streakText: '5 Greens'
  },
  {
    rank: 3,
    name: 'Camila Odds',
    handle: '@BasqueteEV',
    badge: 'Especialista NBA / NBB',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy-3IK8YSs88kr2VcxIbIpXlh5oCuUIn2eWSeOKfi-pD93bgixFevfjUTWRIjn_X2fJIa7Ij-48a7rfIuod39r6URCD43Xrq1jLTre3epK3O51cPe3HxsP-8Fi-bIxCaYXTlbqdqMZiLuB3Zstf0yqPa5KZpB8OkWh9itDBqfP3ssR2j9cu0tKyAd_Vwi9a94aqHVKBye5qzHE5sd0K7Y0J5jgiq8-dceW6dznKsh0kiwZF2lqSLk74w',
    specialty: 'Basquete Pontos & Rebotes',
    winRate: '69.5%',
    roi: '+21.4%',
    profit: '+25.0u',
    tipsCount: '98 tips registradas',
    streakText: '4 Greens'
  },
  {
    rank: 4,
    name: 'Rodrigo P.',
    handle: '@CantosSniper',
    badge: 'Mercado de Escanteios',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGnQDC85fLayTRfx4qXfMdjIj6--PQCac8Tq8U9Wwq82IVmIHTG2Jb0-cNcB-_O1YNREp1sijXJtdLtYYXly9X-TJK9_LN73gSQplU8PTN4qcuUDROAAYICnq7HZlhtnVM2Um3fczqvL9y0zDSmUaKFAlln5LTXO0TRS98245ZOJLGUvbfg6coUW0SPGK6DESiLAJ68-67aCKpNVd3X2_JiWLM2MBuw0vpQvdIGD5i2G13Z8NRW9hm3Q',
    specialty: 'Cantos Limite HT/FT',
    winRate: '66.8%',
    roi: '+18.9%',
    profit: '+21.2u',
    tipsCount: '210 tips registradas',
    streakText: '6 Greens'
  }
];

export const LIVE_MATCHES: LiveMatch[] = [
  {
    id: 'live-1',
    tournament: 'Champions League',
    minute: "68'",
    isHot: true,
    homeTeam: 'Arsenal',
    awayTeam: 'Bayern Munique',
    homeScore: 1,
    awayScore: 1,
    statusText: '2T em andamento',
    offensivePressure: 89,
    pressureLabel: '89% (Crítica)',
    shotsCount: '+12 finalizações no 2T',
    xgStats: 'xG Últimos 15m: 1.42',
    attacksCount: 'Ataques perigosos: 26',
    recommendation: 'Over 2.5 Gols no Jogo',
    limitWindow: 'Janela limite: Odd min @2.05',
    liveOdds: 2.15,
    timeRemaining: '~3 min',
    liquidity: 'Alta'
  },
  {
    id: 'live-2',
    tournament: 'Brasileirão Série A',
    minute: "81'",
    isHot: false,
    homeTeam: 'Flamengo',
    awayTeam: 'Palmeiras',
    homeScore: 0,
    awayScore: 1,
    statusText: 'Linha recuada',
    offensivePressure: 84,
    pressureLabel: '84% Assertivo',
    shotsCount: 'Pressão total',
    xgStats: '9 escanteios até agora',
    attacksCount: 'Disparou gatilho de valor',
    recommendation: 'Cantos Limite Asiático (+9.5)',
    limitWindow: 'Taxa 30d: +28.4% ROI',
    liveOdds: 1.85,
    timeRemaining: '~5 min',
    liquidity: 'Média/Alta'
  }
];

export const HTML_IMAGE_ASSETS = HTML_IMAGES;

export const APP_SCREENS_GALLERY = [
  {
    id: 'screen-feed',
    tab: 'feed' as const,
    title: 'Feed de Palpites & Tip Ouro do Dia',
    screenTitle: 'Feed Principal',
    description: 'Feed em tempo real com métricas IA, EV+, tips verificadas e botão de copiar bilhete pronto.'
  },
  {
    id: 'screen-analise',
    tab: 'analise' as const,
    title: 'Raio-X Estatístico & H2H com Comparador de Odds',
    screenTitle: 'Tela de Análise',
    description: 'Confronto direto Real Madrid vs Man City, gráficos de gols, comparador Betano/Bet365 e bilhete pronto #BTT-9482X.'
  },
  {
    id: 'screen-vip',
    tab: 'vip' as const,
    title: 'Radar Live Bot 24/7 & Canais VIP',
    screenTitle: 'VIP / Ao Vivo',
    description: 'Monitoramento com 18ms de latência, medidor de pressão ofensiva 89% e salas exclusivas no Telegram/Discord.'
  },
  {
    id: 'screen-tipsters',
    tab: 'tipsters' as const,
    title: 'Ranking de Tipsters Verificados & Auditoria',
    screenTitle: 'Ranking Tipsters',
    description: 'Leaderboard auditado com Win Rate, ROI e consistência do #1 André Fontes e analistas europeus.'
  },
  {
    id: 'screen-banca',
    tab: 'banca' as const,
    title: 'Gestão de Banca & Curva Patrimonial',
    screenTitle: 'Gestão de Banca',
    description: 'Evolução patrimonial, calculadora de stake em unidades, métricas 2x2 e registro de entradas.'
  },
  {
    id: 'screen-checkout',
    tab: 'vip' as const,
    title: 'Checkout Pix Instantâneo & Planos VIP',
    screenTitle: 'Checkout Pix',
    description: 'QR Code dinâmico, código copia e cola, timer de expiração e simulação de aprovação bancária imediata.'
  }
];

export const RECENT_BETS: RecentBet[] = [
  {
    id: 'bet-1',
    match: 'Real Madrid x Man City',
    market: 'Ambas Marcam & Over 2.5 • @1.98',
    odds: 1.98,
    stake: '2.5u',
    status: 'green',
    result: 'green',
    statusText: 'Finalizado (3x3)',
    units: '+1.95u',
    profitBrl: '+R$ 97,50',
    amount: '+R$ 97,50',
    date: 'Hoje'
  },
  {
    id: 'bet-2',
    match: 'Arsenal x Bayern Munique',
    market: 'Arsenal DNB (Empate Anula) • @1.72',
    odds: 1.72,
    stake: '1.5u',
    status: 'green',
    result: 'green',
    statusText: 'Finalizado (2x1)',
    units: '+1.23u',
    profitBrl: '+R$ 61,50',
    amount: '+R$ 61,50',
    date: 'Hoje'
  },
  {
    id: 'bet-3',
    match: 'Celtics x Heat',
    market: 'Handicap Heat +8.5 • @1.90',
    odds: 1.90,
    stake: '1.0u',
    status: 'red',
    result: 'red',
    statusText: 'Finalizado (114x94)',
    units: '-1.00u',
    profitBrl: '-R$ 50,00',
    amount: '-R$ 50,00',
    date: 'Ontem'
  },
  {
    id: 'bet-4',
    match: 'Flamengo x Palmeiras',
    market: 'Vitória Flamengo (1X2) • @2.10',
    odds: 2.10,
    stake: '1.5u',
    status: 'live',
    result: 'pending',
    statusText: 'Ao Vivo • 64\' 1T',
    units: '1.50u',
    profitBrl: 'Pot: +R$ 157,50',
    amount: 'R$ 157,50',
    date: 'Ao Vivo'
  }
];
