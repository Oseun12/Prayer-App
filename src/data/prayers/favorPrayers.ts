const favorPrayers = [
    {
      id: "1",
      text: "Lord, I pray for Your favor to surround me like a shield.",
      verse: "Psalm 5:12"
    },
    {
      id: "2",
      text: "Father, grant me favor in every area of my life, especially in my career.",
      verse: "Proverbs 3:4"
    },
    {
      id: "3",
      text: "Lord, I declare that Your favor will open doors for me that no man can shut.",
      verse: "Revelation 3:8"
    },
    {
      id: "4",
      text: "Father, bless me with favor that will cause people to help me without hesitation.",
      verse: "Psalm 44:3"
    },
    {
      id: "5",
      text: "Lord, I pray for Your divine favor upon my family and loved ones.",
      verse: "Genesis 39:21"
    },
    {
      id: "6",
      text: "Father, let Your favor be upon me today and guide my steps.",
      verse: "Psalm 90:17"
    },
    {
      id: "7",
      text: "Lord, I trust in Your favor to bring success and promotion in my work.",
      verse: "Psalm 75:6-7"
    },
    {
      id: "8",
      text: "Father, I ask for Your favor to be evident in my relationships and interactions.",
      verse: "Proverbs 16:15"
    },
    {
      id: "9",
      text: "Lord, surround me with favor as I walk through each day of my life.",
      verse: "Psalm 5:12"
    },
    {
      id: "10",
      text: "Father, grant me favor with those in authority, that I may find favor in their sight.",
      verse: "Esther 2:15"
    },
    {
      id: "11",
      text: "Lord, let Your favor shine upon my efforts and make them successful.",
      verse: "Deuteronomy 33:23"
    },
    {
      id: "12",
      text: "Father, bless me with favor and increase my capacity to receive it.",
      verse: "Psalm 84:11"
    },
    {
      id: "13",
      text: "Lord, I ask for Your favor to flow into my life like a river of blessings.",
      verse: "Isaiah 66:11"
    },
    {
      id: "14",
      text: "Father, let Your favor bring peace and joy into my heart.",
      verse: "Proverbs 16:7"
    },
    {
      id: "15",
      text: "Lord, I pray for favor in my finances and provision for all my needs.",
      verse: "Philippians 4:19"
    },
    {
      id: "16",
      text: "Father, grant me favor to break through every obstacle and challenge I face.",
      verse: "Psalm 118:25"
    },
    {
      id: "17",
      text: "Lord, I claim Your favor to accomplish great things beyond my abilities.",
      verse: "2 Corinthians 9:8"
    },
    {
      id: "18",
      text: "Father, favor me with divine connections and opportunities that lead to success.",
      verse: "Luke 2:52"
    },
    {
      id: "19",
      text: "Lord, let Your favor rest upon me as I walk in Your will.",
      verse: "Psalm 32:10"
    },
    {
      id: "20",
      text: "Father, I declare that Your favor will bring promotion and elevation in my life.",
      verse: "Psalm 75:6-7"
    },
    {
      id: "21",
      text: "Lord, open doors of favor and prosperity that I may walk in blessings.",
      verse: "Isaiah 45:2-3"
    },
    {
      id: "22",
      text: "Father, grant me favor in my endeavors and help me to succeed beyond measure.",
      verse: "Psalm 118:25"
    },
    {
      id: "23",
      text: "Lord, I pray for favor in every decision I make, that it will be according to Your will.",
      verse: "Proverbs 3:5-6"
    },
    {
      id: "24",
      text: "Father, bless me with the favor of Your presence in everything I do.",
      verse: "Psalm 16:11"
    },
    {
      id: "25",
      text: "Lord, I ask for favor in every relationship I have, that they may be built on trust and love.",
      verse: "Proverbs 3:3-4"
    },
    {
      id: "26",
      text: "Father, let Your favor bring abundance and fruitfulness in my life.",
      verse: "Psalm 65:11"
    },
    {
      id: "27",
      text: "Lord, may Your favor guide me toward divine opportunities and blessings.",
      verse: "Isaiah 48:17"
    },
    {
      id: "28",
      text: "Father, I pray for favor in my studies and academic endeavors.",
      verse: "Proverbs 2:6"
    },
    {
      id: "29",
      text: "Lord, I ask for Your favor to help me overcome every challenge I face.",
      verse: "2 Corinthians 12:9"
    },
    {
      id: "30",
      text: "Father, grant me favor with people who will help me fulfill Your purpose for my life.",
      verse: "Esther 2:17"
    },
    {
      id: "31",
      text: "Lord, may Your favor make me a vessel of blessings to others.",
      verse: "Genesis 12:2-3"
    },
    {
      id: "32",
      text: "Father, bless me with favor that will bring peace, joy, and success into my life.",
      verse: "Psalm 4:6-7"
    },
    {
      id: "33",
      text: "Lord, let Your favor rest on my work and career, bringing promotions and success.",
      verse: "Colossians 3:23-24"
    },
    {
      id: "34",
      text: "Father, I pray for favor that will cause my dreams and visions to become a reality.",
      verse: "Habakkuk 2:3"
    },
    {
      id: "35",
      text: "Lord, surround me with people who favor me and help me achieve my goals.",
      verse: "Psalm 41:11"
    },
    {
      id: "36",
      text: "Father, I ask for favor in every area of my life, in Jesus' name.",
      verse: "Psalm 44:3"
    },
    {
      id: "37",
      text: "Lord, help me to walk in Your favor all the days of my life.",
      verse: "Psalm 23:6"
    },
    {
      id: "38",
      text: "Father, may Your favor rest on my endeavors and make them prosperous.",
      verse: "Deuteronomy 28:12"
    },
    {
      id: "39",
      text: "Lord, bless me with the favor to excel beyond my expectations and limitations.",
      verse: "Ephesians 3:20"
    },
    {
      id: "40",
      text: "Father, may Your favor open doors of opportunity and blessing in my life.",
      verse: "Revelation 3:8"
    },
    {
      id: "41",
      text: "Lord, let Your favor bring breakthrough in every area of my life.",
      verse: "Isaiah 43:19"
    },
    {
      id: "42",
      text: "Father, grant me favor that will lead to advancement and blessings.",
      verse: "Psalm 37:23-24"
    },
    {
      id: "43",
      text: "Lord, I ask for Your favor to be upon my family and my home.",
      verse: "Psalm 128:1-4"
    },
    {
      id: "44",
      text: "Father, let Your favor enable me to complete every task with excellence.",
      verse: "1 Corinthians 10:31"
    },
    {
      id: "45",
      text: "Lord, I trust in Your favor to provide for every need and grant me success.",
      verse: "Philippians 4:19"
    }
  ];
  
  export default favorPrayers;
  