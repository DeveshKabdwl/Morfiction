import { Project, Capability, Milestone } from '../types';

export const VERIFIED_PROJECTS: Project[] = [
  {
    id: 'cobx-masters',
    title: 'Cobx Masters',
    subtitle: 'Arena Esports Events',
    category: 'esports',
    categoryLabel: 'ESPORTS EVENTS • APRIL 2019',
    date: 'April 2019',
    description:
      'Comprehensive international arena esports tournament execution featuring multi-national rosters, caster desks, trophy reveal staging, and live stadium broadcasting.',
    fullDossier: [
      'Staged in Mumbai with teams competing across premier titles like Dota 2 and CS:GO.',
      'Managed full live arena production, lighting sequences, multi-language caster desk, and player soundproof booths.',
      'Broadcasted across global streaming platforms with integrated partner branding and stage reveals.',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCXbOxT44_RUW5Iu-XcW4vJUZm65U5UeN1ny3xpYm5lVnXVfiwBXQkTHakgpTLkmKRjB-S8uQOOMpmqsGpD3DvwO6jt5ug-Ne9Rxq2f_Jzg5EJYUbk6Pe3oSSOFywpmKGoF8I9rfyJvFj6lwDFOi1n6xW5zlslsP_6jJ1SRLSp1ZY8yVxCTkVo0b_tOEQ7mS1QrOIe2ZtW0GwxlSqF0hX1xZmRPyifnyz3jscj2dlly1RKObqDckRVQ_o6rJwcA15CB0g',
    secondaryImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7cF2Gc_5WybzFRfAdPAyxwyiWQrGmK5jmFWDYblh9olJrF-wxarz8a_H-FVyKlKZ76Zlbz_Y-FWKOi5L98UUxqGCZbbV9R7Liap_D8sOUCEWZdlMA4hON-xaeCSCX8QVOxYrNc0OzHz0zqJsodjPn_YWOHZkRsQ1T9A4sL0462S0K8bdPibRsjwlsas5cSgqIJPGsXfGRiOAnjY4JZG9VDi5SE6l98owkHmW2gQCukdMCy8stliEDgQcb9JdVrLUb7A',
    tags: ['Arena Production', 'International Rosters', 'Broadcast Desk'],
    metrics: [
      { label: 'Event Tier', value: 'International LAN' },
      { label: 'Stage Format', value: 'Multi-Title Arena' },
      { label: 'Production', value: '4K Broadcast' },
    ],
    isFeatured: true,
  },
  {
    id: 'bgmi-creator-campaign',
    title: 'BGMI Creator Campaigns',
    subtitle: 'Featured Publisher Rollout',
    category: 'publisher',
    categoryLabel: 'FEATURED PUBLISHER ROLLOUT',
    date: 'July 2021',
    description:
      'Headline title rollout activation for Battlegrounds Mobile India (BGMI) engaging a total of 16 prominent gaming creators, featuring Snax, Sangwan, Shreeman Legend, and Jonathan.',
    fullDossier: [
      'Comprehensive publisher campaign production and ecosystem execution for the Battlegrounds Mobile India (BGMI) / Krafton publisher ecosystem.',
      'Strategic creator alignment managing a total of 16 prominent gaming creators, headlined by Snax, Sangwan, Shreeman Legend, and Jonathan.',
      'Multi-channel synchronized rollout driving monumental community engagement, millions of organic video views, and day-one title adoption.',
    ],
    imageUrl: '/Morfiction%20Services.jpg',
    tags: ['Krafton BGMI Rollout', '16 Featured Creators', 'Publisher Launch'],
    metrics: [
      { label: 'Campaign Scale', value: '16 Featured Creators' },
      { label: 'Publisher Context', value: 'Krafton BGMI Launch' },
      { label: 'Ecosystem Reach', value: 'Pan-India Community' },
    ],
    isFeatured: true,
    isCreatorProject: true,
    youtubeVideoId: 'zRmWCTV87D8',
  },
  {
    id: 'chaos-iima',
    title: 'Chaos IIMA',
    subtitle: 'College Esports Events',
    category: 'campus',
    categoryLabel: 'COLLEGE ESPORTS EVENTS • MARCH 2017',
    date: 'March 2017',
    description:
      'Pioneer collegiate esports tournament integration at the Indian Institute of Management Ahmedabad (IIMA) featuring competitive LAN brackets, live audience cheering, and prize ceremony.',
    fullDossier: [
      'One of Morfiction’s earliest flagship campus tournament integrations at prestigious IIM Ahmedabad cultural festival Chaos.',
      'Organized multi-tier LAN tournaments drawing collegiate squads from across the country.',
      'Managed hardware setup, refereeing, and cash prize distribution on stage.',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCeEqcCfmAQN20OOYbsdWdMV25RWjIH2i8JjyhlgBNTqMa5ps0gJJCPfu7c_4VL7lK9c9jf2of3LDphYFQgdxgYyTItEKIaMiIDdYR-7DeKIl0zOfgbg1R0221zKy7PRiSzBYYt6vTkQryDFhB4p7GALICrrQbc9hMCE81eX9gZBlOjQTYdxGCTLI8FzTWrUoYkhupZZ_2LEl5-ILhDutmYcy2g-byLRBcxYfNKCCKxD-Wax6ZTf6IhfmbAkzTv8ybnVw',
    tags: ['IIM Ahmedabad', 'Collegiate Circuit', 'LAN Battleground'],
    metrics: [
      { label: 'Venue', value: 'IIM Ahmedabad' },
      { label: 'Format', value: 'Campus LAN' },
      { label: 'Heritage', value: 'Est. March 2017' },
    ],
  },
  {
    id: 'esports-events-2018',
    title: 'Competitive Esports Event',
    subtitle: 'Esports Events',
    category: 'esports',
    categoryLabel: 'ESPORTS EVENTS • FEBRUARY 2018',
    date: 'February 2018',
    description:
      'End-to-end operational management of live competitive esports stage, player isolation booths, refereeing protocols, and caster commentary desk.',
    fullDossier: [
      'Comprehensive tournament floor execution with strict competitive integrity standards.',
      'Low-latency networking architecture and pro player station configuration.',
      'Broadcast stream operations linking camera switches, audio mixers, and analyst desks.',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7cF2Gc_5WybzFRfAdPAyxwyiWQrGmK5jmFWDYblh9olJrF-wxarz8a_H-FVyKlKZ76Zlbz_Y-FWKOi5L98UUxqGCZbbV9R7Liap_D8sOUCEWZdlMA4hON-xaeCSCX8QVOxYrNc0OzHz0zqJsodjPn_YWOHZkRsQ1T9A4sL0462S0K8bdPibRsjwlsas5cSgqIJPGsXfGRiOAnjY4JZG9VDi5SE6l98owkHmW2gQCukdMCy8stliEDgQcb9JdVrLUb7A',
    tags: ['Stage Management', 'Player Booths', 'Broadcast Production'],
    metrics: [
      { label: 'Discipline', value: 'Pro Competitive LAN' },
      { label: 'Operations', value: 'On-Ground Staging' },
      { label: 'Coverage', value: 'Live Stream' },
    ],
  },
  {
    id: 'cafe-events-2017',
    title: 'Cafe Events Circuit',
    subtitle: 'Gaming / Cafe Events',
    category: 'campus',
    categoryLabel: 'CAFE EVENTS • DECEMBER 2017',
    date: 'December 2017',
    description:
      'Grassroots gaming cafe tournaments and regional community LAN gatherings driving competitive player engagement and grassroots esports pipelines.',
    fullDossier: [
      'Organized high-density grassroots gaming competitions across prominent regional gaming cafes (Blitz-zone).',
      'Fostered local player communities, scouting emerging talent, and creating weekend tournament habits.',
      'Collaborated with hardware sponsors for high-refresh display demos and peripheral testing.',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACglirXJKufZbWBM2hfAcgTBS1jtzsMs7J-chjWstJh7pBG0v5ccXDgM59uPeiBAtWkYkpPAsCv5qyGuWE9MEfnSqB7Mq0Ge385pHo5UupsAfYlHPOTnniO5cdKBFYEs_ZlKUsMINov5UlYB7UXHADy022YvXgPf4XcYiDhTAHpmt4MwyaDwm_N2pDhcF5irkV5BEOo9ZxijNSoadg6Er-14R5teLAWekGCfVX4CHRt88LKFjrywq5iAsr-JnMwdNZZQ',
    tags: ['Grassroots LAN', 'Cafe Tournament', 'Community Building'],
    metrics: [
      { label: 'Circuit Type', value: 'Gaming Cafes' },
      { label: 'Player Focus', value: 'Grassroots Community' },
      { label: 'Format', value: 'Weekly LANs' },
    ],
  },
  {
    id: 'nvidia-brand-activation',
    title: 'NVIDIA Brand Activation',
    subtitle: 'Brand Activation',
    category: 'brand',
    categoryLabel: 'BRAND ACTIVATION • JULY 2021',
    date: 'July 2021',
    description:
      'Hardware activation showcase connecting community gamers, demo stations, high-performance GPU testing, and tournament prize rewards featuring top gaming franchises.',
    fullDossier: [
      'Interactive hardware experience zone allowing gamers to test RTX technology in real-time competitive matches.',
      'Community challenges and speed-runs with winners taking home exclusive publisher posters and hardware gear.',
      'Seamless brand integration designed to build organic goodwill and brand preference among PC gamers.',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMkYqYrAMxK-IzWcBZvfbsWUAsLVuzMIR3ZX1LlkcCfMqtC6Y64gkfnMPZP0YeoEZfd9_INr-h7vDxUSmHdsCHh1Y1dS5YNUCzE2FeGYzIqJjf7eU1JQ21UOiWnSLR1K7t_qf76QW0uWVqx_toJLzrOKt2lZlqYZ7e8sXlj_nOPQYdUOJHtj4prLdLJGnm756ZLRmsS-62Iv_Ml8cNL6bBehxixhnWrClGVTqgVHbbPDBffbtkpAPcYMr8M82D_58loQ',
    tags: ['NVIDIA GeForce', 'Community Showcase', 'Hardware Demos'],
    metrics: [
      { label: 'Brand Partner', value: 'NVIDIA' },
      { label: 'Engagement', value: 'Interactive Demos' },
      { label: 'Audience', value: 'PC Gaming Community' },
    ],
  },
];

export const CORE_CAPABILITIES: Capability[] = [
  {
    number: '01',
    title: 'Publisher Launches & Community Growth',
    description:
      'Helping gaming publishers introduce titles, synchronize marketing beats, and build deep player communities across India, Southeast Asia, and international markets.',
    deliverables: [
      'Title Rollout & Launch Strategy',
      'Community Hubs & Discord Growth',
      'Pre-Registration & Beta Campaigns',
      'Onboarding Experience Design',
    ],
    tags: ['Title Rollout', 'Community Engagement', 'Publisher Liaison'],
  },
  {
    number: '02',
    title: 'Esports Tournaments & Competitive Ecosystems',
    description:
      'Comprehensive tournament management across pro LAN stages, arena finals, live multi-feed broadcasts, caster talent, and grassroots competitive ladders.',
    deliverables: [
      'Full Arena & Stage Production',
      'Tournament Rulebooks & Integrity',
      'Broadcast Operations & Caster Talent',
      'Player Hospitality & Stage Logistics',
    ],
    tags: ['Arena Production', 'Competitive Circuits', 'Broadcast Ops'],
  },
  {
    number: '03',
    title: 'Campus Activations & College Tours',
    description:
      'On-ground collegiate gaming and hardware experiences at tier-1 universities across India, introducing students to competitive titles and hardware ecosystems.',
    deliverables: [
      'Pan-India Campus Tour Execution',
      'Collegiate Esports Tournaments',
      'Interactive Hardware Experience Hubs',
      'Student Ambassador Programs',
    ],
    tags: ['Collegiate Tours', 'Interactive Hubs', 'Youth Culture'],
  },
  {
    number: '04',
    title: 'Influencer & Creator Marketing',
    description:
      'Creator-led campaigns, show matches, watch parties, and integrated broadcast features connecting brands with India’s top gaming streaming talent.',
    deliverables: [
      'Curated Gaming Creator Rosters',
      'Show Matches & Live Stream Raids',
      'Co-Stream Watch Parties',
      'Performance & Conversion Tracking',
    ],
    tags: ['Creator Roster', 'Broadcast Integrations', 'Influencer Reach'],
  },
  {
    number: '05',
    title: 'Brand Partnerships & Experiential Sponsorship',
    description:
      'Bridging technology brands, gaming titles, and audience touchpoints through authentic experiential design without disruptive commercial tropes.',
    deliverables: [
      'Experiential Hardware Showcases',
      'Title & Event Sponsorship Packaging',
      'Interactive Expo Booth Fabrication',
      'Product Seeding to Pro Players',
    ],
    tags: ['Hardware Showcases', 'Experiential Design', 'Sponsorship Ops'],
  },
  {
    number: '06',
    title: 'Gaming Commerce & Retail Distribution',
    description:
      'Gaming retail distributor initiatives, experiential pop-ups, and merchandise fulfillment programs designed to convert fandom into sustainable revenue.',
    deliverables: [
      'Distributor & Retail Partner Programs',
      'Gaming Pop-Up Merchandise Zones',
      'Official Apparel & Peripherals Sales',
      'E-commerce & On-Ground POS Sync',
    ],
    tags: ['Retail Programs', 'Distributor Networks', 'Gaming Commerce'],
  },
];

export const CAPABILITY_MAPPING = [
  {
    domain: 'Publisher Launches',
    icon: 'sports_esports',
    focus: 'End-to-end title rollouts, launch activations, and gamer onboarding.',
    verifiedPartners: 'BGMI (Krafton) • Point Blank',
  },
  {
    domain: 'Campus Activations',
    icon: 'school',
    focus: 'On-ground college tours, hardware testing, and student LANs.',
    verifiedPartners: 'NVIDIA • MSI • ZOTAC • Acer • AMD',
  },
  {
    domain: 'Esports Operations',
    icon: 'stadium',
    focus: 'Arena tournaments, caster production, soundproof booths, and broadcast.',
    verifiedPartners: 'Cobx Masters • Chaos IIMA • National LANs',
  },
  {
    domain: 'Creator Campaigns',
    icon: 'video_camera_front',
    focus: 'Influencer meetups, title launches, and streaming tournaments.',
    verifiedPartners: 'Top Gaming Creators & Broadcast Casters',
  },
  {
    domain: 'Community Building',
    icon: 'hub',
    focus: 'Grassroots gaming cafes, watch parties, and collegiate hubs.',
    verifiedPartners: 'Active Player Hubs & Cafe Circuits',
  },
  {
    domain: 'Ecosystem Collaborations',
    icon: 'handshake',
    focus: 'Strategic production alliances and creative fabrication in gaming media.',
    verifiedPartners: 'AcidTrip Arts • Arizing Pixel',
  },
];

export const TIMELINE_MILESTONES: Milestone[] = [
  {
    number: '01',
    date: 'MARCH 2017',
    title: 'Chaos IIMA',
    category: 'College Esports Events',
    description:
      'Inaugural collegiate esports championship at the Indian Institute of Management Ahmedabad. Set the standard for campus LAN competitive tournaments in India.',
    venue: 'IIM Ahmedabad Campus',
  },
  {
    number: '02',
    date: 'DECEMBER 2017',
    title: 'Cafe Events Circuit',
    category: 'Gaming / Cafe Events',
    description:
      'Regional gaming cafe network tournament. Activated grassroots LAN players through high-octane weekend tournaments and hardware testing.',
    venue: 'Blitz-Zone & Partner LAN Centers',
  },
  {
    number: '03',
    date: 'FEBRUARY 2018',
    title: 'Competitive Esports Stage Ops',
    category: 'Esports Events',
    description:
      'Full technical execution of pro competitive gaming stages, including dedicated player booths, refereeing oversight, and live caster commentary.',
    venue: 'National Competitive Arena',
  },
  {
    number: '04',
    date: 'APRIL 2019',
    title: 'Cobx Masters Arena',
    category: 'Arena Esports Events',
    description:
      'International tier esports tournament staged in Mumbai. Featured multinational teams, stadium spectator zones, trophy reveal choreography, and global streaming.',
    venue: 'Mumbai Arena',
  },
  {
    number: '05',
    date: 'JULY 2021',
    title: 'BGMI Publisher Launch Campaign',
    category: 'Publisher Launch',
    description:
      'Historic publisher rollout for Battlegrounds Mobile India featuring marquee creators Snax, Sangwan, Shreeman Legend, and Jonathan driving tens of millions of impressions.',
    venue: 'Pan-India Digital & Creator Circuit',
  },
  {
    number: '06',
    date: 'JULY 2021',
    title: 'NVIDIA Brand Activation',
    category: 'Brand Activation',
    description:
      'Hardware and gaming showcase with interactive demo stations, competitive community shootouts, and hardware prize presentations.',
    venue: 'Experiential Gaming Showcase',
  },
  {
    number: '07',
    date: '2022 – PRESENT',
    title: 'Multi-Market Expansion',
    category: 'Ecosystem Growth Partner',
    description:
      'Active cross-border footprint supporting game publishers, tech manufacturers, and creator agencies across India, Southeast Asia, and Brazil.',
    venue: 'India • Southeast Asia • Brazil',
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: 'Ideas with Purpose',
    subtitle: 'CLEAR INTENT • MEASURABLE REACH',
    description:
      'We never produce spectacle for its own sake. Every stage cue, campus hub, and creator rollout directly connects players to titles and drives authentic brand engagement with zero corporate fluff.',
    icon: 'lightbulb',
  },
  {
    number: '02',
    title: 'Built for the Real World',
    subtitle: 'DEPENDABLE PHYSICAL OPERATIONS',
    description:
      'Creative ambition without rigorous physical logistics is just a wish. We engineer rock-solid stage infrastructure, fail-safe network routing, pro audio setups, and seamless on-ground management.',
    icon: 'build',
  },
  {
    number: '03',
    title: 'Culture Meets Experience',
    subtitle: 'AUTHENTIC GAMING FLUENCY',
    description:
      'We live inside gaming culture, streaming subcultures, and collegiate gaming hubs. We know what genuinely resonates with competitive players and casual communities without feeling artificial.',
    icon: 'sports_esports',
  },
];
