const difficultTimesPrayers = [
    {
        id: 1, 
        text: "Father, be my refuge and strength in this challenging season.",
        verse: "Psalm 46:1"
      },
      {
        id: 2,
        text: "Give me peace that surpasses understanding during this trial.",
        verse: "Philippians 4:7"
      },
      {
        id: 3,
        text: "Lord, walk with me through this valley and help me not to fear.",
        verse: "Psalm 23:4"
      },
      {
        id: 4,
        text: "Strengthen my heart and help me to wait patiently on You.",
        verse: "Psalm 27:14"
      },
      {
        id: 5,
        text: "God, remind me that You are near to the brokenhearted.",
        verse: "Psalm 34:18"
      },
      {
        id: 6,
        text: "Help me to find rest in Your promises when I feel weary.",
        verse: "Matthew 11:28"
      },
      {
        id: 7,
        text: "Let Your light shine in my darkness and guide my path.",
        verse: "Isaiah 58:10"
      },
      {
        id: 8,
        text: "Even in this storm, help me trust that You’re in control.",
        verse: "Mark 4:39-40"
      },
      {
        id: 9,
        text: "Lord, use this trial to strengthen my character and faith.",
        verse: "James 1:2-4"
      },
      {
        id: 10,
        text: "Surround me with Your love and remove every fear.",
        verse: "1 John 4:18"
      },
      {
        id: 11,
        text: "Keep me from falling into despair; lift my soul again.",
        verse: "Psalm 42:11"
      },
      {
        id: 12,
        text: "God of comfort, hold me close when everything feels like it's falling apart.",
        verse: "2 Corinthians 1:3-4"
      },
      {
        id: 13,
        text: "Help me to remember that this pain has a purpose.",
        verse: "Romans 8:18"
      },
      {
        id: 14,
        text: "Give me strength when I feel like I have nothing left.",
        verse: "Isaiah 40:29-31"
      },
      {
        id: 15,
        text: "Let Your joy be my strength, even through tears.",
        verse: "Nehemiah 8:10"
      },
      {
        id: 16,
        text: "Renew my spirit, Lord, and help me keep moving forward.",
        verse: "2 Corinthians 4:16-17"
      },
      {
        id: 17,
        text: "May I never lose hope, for You are working all things out.",
        verse: "Romans 8:28"
      },
      {
        id: 18,
        text: "Father, calm the storm in my heart and mind.",
        verse: "John 14:27"
      },
      {
        id: 19,
        text: "Show me the beauty that can rise from brokenness.",
        verse: "Isaiah 61:3"
      },
      {
        id: 20,
        text: "Let this difficult time draw me closer to You.",
        verse: "James 4:8"
      },
      {
        id: 21,
        text: "Lord, remind me daily that You are fighting my battles.",
        verse: "Exodus 14:14"
      },
      {
        id: 22,
        text: "In my weakness, be my strength and my song.",
        verse: "2 Corinthians 12:9"
      },
      {
        id: 23,
        text: "Help me hold on to faith when everything feels uncertain.",
        verse: "Hebrews 10:23"
      },
      {
        id: 24,
        text: "Lift my eyes to the hills, from where my help comes.",
        verse: "Psalm 121:1-2"
      },
      {
        id: 25,
        text: "Lord, help me not to give up, even when I feel like quitting.",
        verse: "Galatians 6:9"
      },
      {
        id: 26,
        text: "Surround me with peace when anxiety rises within me.",
        verse: "Psalm 94:19"
      },
      {
        id: 27,
        text: "Teach me to trust in Your timing through this pain.",
        verse: "Ecclesiastes 3:11"
      },
      {
        id: 28,
        text: "Help me to remember Your faithfulness in past trials.",
        verse: "Lamentations 3:22-23"
      },
      {
        id: 29,
        text: "Even when I walk through fire, let me not be burned.",
        verse: "Isaiah 43:2"
      },
      {
        id: 30,
        text: "Lord, give me clarity and wisdom in this season of confusion.",
        verse: "James 1:5"
      },
      {
        id: 31,
        text: "Be my anchor when the winds of life try to blow me over.",
        verse: "Hebrews 6:19"
      },
      {
        id: 32,
        text: "Heal my brokenness and mend every wounded part of me.",
        verse: "Jeremiah 30:17"
      },
      {
        id: 33,
        text: "Keep my feet from stumbling on this difficult path.",
        verse: "Psalm 121:3"
      },
      {
        id: 34,
        text: "Lord, teach me to praise even when it's painful.",
        verse: "Habakkuk 3:17-18"
      },
      {
        id: 35,
        text: "Hide me in Your presence when life feels too heavy.",
        verse: "Psalm 32:7"
      },
      {
        id: 36,
        text: "Let my heart not be troubled, for You have overcome the world.",
        verse: "John 16:33"
      },
      {
        id: 37,
        text: "God, defend me from every enemy rising against me.",
        verse: "Psalm 18:2"
      },
      {
        id: 38,
        text: "Help me forgive and let go of pain caused by others.",
        verse: "Colossians 3:13"
      },
      {
        id: 39,
        text: "Give me the courage to keep walking in faith daily.",
        verse: "2 Timothy 1:7"
      },
      {
        id: 40,
        text: "Let my tears be seeds that will grow into joy.",
        verse: "Psalm 126:5"
      },
      {
        id: 41,
        text: "God, even when I don’t understand, help me to trust Your heart.",
        verse: "Proverbs 3:5-6"
      },
      {
        id: 42,
        text: "Surround me with Your love that casts out all fear.",
        verse: "1 John 4:18"
      },
      {
        id: 43,
        text: "Strengthen me, Lord, when my soul feels weary and tired.",
        verse: "Isaiah 40:29"
      },
      {
        id: 44,
        text: "Restore hope where despair has tried to take root.",
        verse: "Romans 15:13"
      },
      {
        id: 45,
        text: "Let Your light shine in the darkness I’m facing today.",
        verse: "John 1:5"
      },
      {
        id: 46,
        text: "Keep my spirit from being crushed by hardship.",
        verse: "Proverbs 18:14"
      },
      {
        id: 47,
        text: "Help me not to isolate, but to find comfort in godly community.",
        verse: "Galatians 6:2"
      },
      {
        id: 48,
        text: "Show me the purpose behind the pain I’m going through.",
        verse: "Romans 5:3-5"
      },
      {
        id: 49,
        text: "Let me find peace in stillness before You.",
        verse: "Psalm 46:10"
      },
      {
        id: 50,
        text: "Remind me that Your grace is sufficient for today.",
        verse: "2 Corinthians 12:9"
      },
      {
        id: 51,
        text: "God, lift my burdens and teach me to rest in You.",
        verse: "Matthew 11:28"
      },
      {
        id: 52,
        text: "Give me songs of deliverance even in my darkest hour.",
        verse: "Psalm 32:7"
      },
      {
        id: 53,
        text: "Help me release control and trust in Your sovereignty.",
        verse: "Isaiah 55:8-9"
      },
      {
        id: 54,
        text: "Fill me with joy that is not dependent on circumstances.",
        verse: "Nehemiah 8:10"
      },
      {
        id: 55,
        text: "Let me remember that You are always near to the brokenhearted.",
        verse: "Psalm 34:18"
      },
      {
        id: 56,
        text: "When I am afraid, help me to put my trust in You.",
        verse: "Psalm 56:3"
      },
      {
        id: 57,
        text: "God, shine Your face upon me and give me peace.",
        verse: "Numbers 6:25-26"
      },
      {
        id: 58,
        text: "Guide me with Your counsel through every decision I face.",
        verse: "Psalm 73:24"
      },
      {
        id: 59,
        text: "Uphold me with Your righteous right hand.",
        verse: "Isaiah 41:10"
      },
      {
        id: 60,
        text: "Let Your presence be my comfort and strength always.",
        verse: "Psalm 23:4"
      }
]

export default difficultTimesPrayers