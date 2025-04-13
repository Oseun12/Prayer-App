const faithPrayers = [
  {
    id: 1,
    text: "Lord, increase my faith when doubts arise in my heart.",
    verse: "Hebrews 11:1"
  },
  {
    id: 2,
    text: "Help me to trust in Your promises even when I don't see results.",
    verse: "Romans 8:28"
  },
  {
    id: 3,
    text: "Father, teach me to walk by faith and not by sight.",
    verse: "2 Corinthians 5:7"
  },
  {
    id: 4,
    text: "Lord, strengthen my faith to stand firm during trials.",
    verse: "James 1:3"
  },
  {
    id: 5,
    text: "God, help me believe that all things are possible through You.",
    verse: "Mark 9:23"
  },
  {
    id: 6,
    text: "Lord, help me to remain faithful even when I feel weak.",
    verse: "2 Timothy 2:13"
  },
  {
    id: 7,
    text: "Let my faith grow stronger each day through Your Word.",
    verse: "Romans 10:17"
  },
  {
    id: 8,
    text: "Give me boldness to step out in faith, even when it's uncomfortable.",
    verse: "Hebrews 11:6"
  },
  {
    id: 9,
    text: "Father, help me trust Your timing in every season of my life.",
    verse: "Ecclesiastes 3:1"
  },
  {
    id: 10,
    text: "Lord, let my faith be a testimony that encourages others.",
    verse: "Matthew 5:16"
  },
  {
    id: 11,
    text: "Help me believe You’re working, even when I can't see it.",
    verse: "John 20:29"
  },
  {
    id: 12,
    text: "Strengthen my heart to believe in Your power over my problems.",
    verse: "Luke 1:37"
  },
  {
    id: 13,
    text: "Father, renew my faith in Your Word daily.",
    verse: "Psalm 119:105"
  },
  {
    id: 14,
    text: "Lord, help me not to lean on my own understanding but to trust You.",
    verse: "Proverbs 3:5-6"
  },
  {
    id: 15,
    text: "When fear tries to shake me, help me to stand firm in faith.",
    verse: "Isaiah 41:10"
  },
  {
    id: 16,
    text: "Let my faith be anchored in Your unchanging character.",
    verse: "Malachi 3:6"
  },
  {
    id: 17,
    text: "Help me hold on to Your promises when life gets hard.",
    verse: "2 Peter 3:9"
  },
  {
    id: 18,
    text: "Lord, give me faith that moves mountains.",
    verse: "Matthew 17:20"
  },
  {
    id: 19,
    text: "Teach me to trust even when I don’t understand Your ways.",
    verse: "Isaiah 55:8-9"
  },
  {
    id: 20,
    text: "Lord, fill my heart with unwavering faith and hope.",
    verse: "Romans 15:13"
  },
  {
    id: 21,
    text: "Help me to rest in Your faithfulness when I feel overwhelmed.",
    verse: "Lamentations 3:22-23"
  },
  {
    id: 22,
    text: "Give me the courage to trust You fully, even in uncertainty.",
    verse: "Joshua 1:9"
  },
  {
    id: 23,
    text: "Lord, help me to fix my eyes on You, not on my circumstances.",
    verse: "Hebrews 12:2"
  },
  {
    id: 24,
    text: "Strengthen my belief that You are always with me.",
    verse: "Deuteronomy 31:6"
  },
  {
    id: 25,
    text: "Let my faith shine through in every area of my life.",
    verse: "Galatians 2:20"
  },
  {
    id: 26,
    text: "Help me to speak words of faith and not fear.",
    verse: "2 Corinthians 4:13"
  },
  {
    id: 27,
    text: "Remind me daily that You are in control.",
    verse: "Psalm 46:10"
  },
  {
    id: 28,
    text: "Build my faith through every challenge I face.",
    verse: "Romans 5:3-5"
  },
  {
    id: 29,
    text: "Lord, keep me faithful in prayer and in seeking You.",
    verse: "1 Thessalonians 5:17"
  },
  {
    id: 30,
    text: "Grant me enduring faith when answers are delayed.",
    verse: "Isaiah 40:31"
  },
  {
    id: 31,
    text: "Let me not waver in unbelief but be strong in faith.",
    verse: "Romans 4:20"
  },
  {
    id: 32,
    text: "Teach me to trust that You are working everything for my good.",
    verse: "Genesis 50:20"
  },
  {
    id: 33,
    text: "Fill me with peace that comes from trusting in You.",
    verse: "Isaiah 26:3"
  },
  {
    id: 34,
    text: "Lord, when my faith is weak, be my strength.",
    verse: "Philippians 4:13"
  },
  {
    id: 35,
    text: "Give me the grace to obey You in faith, not by feelings.",
    verse: "John 14:15"
  },
  {
    id: 36,
    text: "May my faith inspire others to believe in You.",
    verse: "1 Timothy 4:12"
  },
  {
    id: 37,
    text: "Help me to trust You even when I don't understand the outcome.",
    verse: "Job 13:15"
  },
  {
    id: 38,
    text: "Let my faith remain unshaken in times of testing.",
    verse: "1 Peter 1:6-7"
  },
  {
    id: 39,
    text: "Lord, keep me rooted in Your Word to strengthen my faith.",
    verse: "Colossians 2:6-7"
  },
  {
    id: 40,
    text: "Let faith rise within me when I'm tempted to fear.",
    verse: "Psalm 56:3"
  },
  {
    id: 41,
    text: "Help me to remember that You reward those who diligently seek You.",
    verse: "Hebrews 11:6"
  },
  {
    id: 42,
    text: "Strengthen my trust in Your perfect timing.",
    verse: "Ecclesiastes 3:11"
  },
  {
    id: 43,
    text: "Let my heart be still and know that You are God.",
    verse: "Psalm 46:10"
  },
  {
    id: 44,
    text: "Remind me that You are my Shepherd, and I shall not want.",
    verse: "Psalm 23:1"
  },
  {
    id: 45,
    text: "Teach me to walk by faith and not by sight.",
    verse: "2 Corinthians 5:7"
  },
  {
    id: 46,
    text: "Help me to hold firmly to the hope I profess.",
    verse: "Hebrews 10:23"
  },
  {
    id: 47,
    text: "Let my faith not fail when I face trials.",
    verse: "Luke 22:32"
  },
  {
    id: 48,
    text: "Lord, give me a childlike faith that trusts without question.",
    verse: "Matthew 18:3"
  },
  {
    id: 49,
    text: "May I never doubt Your love for me.",
    verse: "Romans 8:38-39"
  },
  {
    id: 50,
    text: "Help me to persevere through the storm with unwavering faith.",
    verse: "James 1:3-4"
  },
  {
    id: 51,
    text: "Let my life be built on the foundation of faith in Christ.",
    verse: "1 Corinthians 3:11"
  },
  {
    id: 52,
    text: "Give me confidence in Your unfailing promises.",
    verse: "2 Peter 3:9"
  },
  {
    id: 53,
    text: "When I am afraid, help me to trust in You.",
    verse: "Psalm 56:3"
  },
  {
    id: 54,
    text: "Lord, fill my heart with unwavering confidence in Your plans.",
    verse: "Jeremiah 29:11"
  },
  {
    id: 55,
    text: "Let my response to fear be rooted in faith, not panic.",
    verse: "Isaiah 41:10"
  },
  {
    id: 56,
    text: "Help me to believe in Your healing even before I see results.",
    verse: "Mark 5:34"
  },
  {
    id: 57,
    text: "Lord, teach me to trust even when the way is unclear.",
    verse: "Proverbs 3:5-6"
  },
  {
    id: 58,
    text: "Strengthen my faith as I wait for answered prayers.",
    verse: "Psalm 27:14"
  },
  {
    id: 59,
    text: "Let my faith grow stronger each day through Your Word.",
    verse: "Romans 10:17"
  },
  {
    id: 60,
    text: "Grant me boldness to step out in faith when You call.",
    verse: "Matthew 14:29"
  },
  {
    id: 61,
    text: "Lord, help me to trust You even when I don't understand the situation.",
    verse: "Isaiah 55:8-9"
  },
  {
    id: 62,
    text: "Let my faith shine as a testimony to others.",
    verse: "Matthew 5:16"
  },
  {
    id: 63,
    text: "May my words and actions reflect a heart full of faith.",
    verse: "James 2:17"
  },
  {
    id: 64,
    text: "Teach me to pray with belief, not just hope.",
    verse: "Mark 11:24"
  },
  {
    id: 65,
    text: "Fill me with assurance that You are working behind the scenes.",
    verse: "Romans 8:28"
  },
  {
    id: 66,
    text: "Let faith arise in me when discouragement tries to take over.",
    verse: "Psalm 42:11"
  },
  {
    id: 67,
    text: "Help me believe that You will provide all I need.",
    verse: "Philippians 4:19"
  },
  {
    id: 68,
    text: "Lord, give me faith to step into new beginnings with boldness.",
    verse: "Isaiah 43:19"
  },
  {
    id: 69,
    text: "Even when I walk through the valley, help me trust You’re with me.",
    verse: "Psalm 23:4"
  },
  {
    id: 70,
    text: "Let my roots go deep in Your truth and faithfulness.",
    verse: "Colossians 2:6-7"
  },
  {
    id: 71,
    text: "Remind me that Your Word is true and trustworthy.",
    verse: "Numbers 23:19"
  },
  {
    id: 72,
    text: "Give me the courage to keep believing even after delays.",
    verse: "Habakkuk 2:3"
  },
  {
    id: 73,
    text: "May I never be ashamed to proclaim my faith in You.",
    verse: "Romans 1:16"
  },
  {
    id: 74,
    text: "Let my faith not waver, even in silence from heaven.",
    verse: "Job 13:15"
  },
  {
    id: 75,
    text: "Lord, help me to take You at Your Word without hesitation.",
    verse: "John 20:29"
  },
  {
    id: 76,
    text: "Plant in me a faith that thrives even in the wilderness.",
    verse: "Deuteronomy 8:2-3"
  },
  {
    id: 77,
    text: "Let my hope overflow from a strong foundation of faith.",
    verse: "Romans 15:13"
  },
  {
    id: 78,
    text: "Help me stand firm in faith no matter what comes my way.",
    verse: "1 Corinthians 16:13"
  },
  {
    id: 79,
    text: "Remind me that even faith as small as a mustard seed moves mountains.",
    verse: "Matthew 17:20"
  },
  {
    id: 80,
    text: "Lord, give me rest in knowing You are in control.",
    verse: "Psalm 46:1"
  }
];
  
  export default faithPrayers;
  