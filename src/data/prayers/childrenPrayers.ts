const childrenPrayers = [
    {
      id: 1,
      text: "Lord, bless my children with wisdom beyond their years.",
      verse: "James 1:5"
    },
    {
      id: 2,
      text: "May my children grow in favor with God and man.",
      verse: "Luke 2:52"
    },
    {
      id: 3,
      text: "Protect my children from harm and lead them in safety.",
      verse: "Psalm 121:7-8"
    },
    {
      id: 4,
      text: "Let my children be filled with joy and peace.",
      verse: "Romans 15:13"
    },
    {
      id: 5,
      text: "Surround my children with godly friends and mentors.",
      verse: "Proverbs 13:20"
    },
    {
      id: 6,
      text: "Establish my children in righteousness and truth.",
      verse: "Isaiah 54:13"
    },
    {
      id: 7,
      text: "Let my children walk in integrity and uprightness.",
      verse: "Proverbs 20:7"
    },
    {
      id: 8,
      text: "Grant my children hearts that seek after You.",
      verse: "Psalm 119:10"
    },
    {
      id: 9,
      text: "Help my children to be kind and compassionate.",
      verse: "Ephesians 4:32"
    },
    {
      id: 10,
      text: "Give my children strength in times of trouble.",
      verse: "Psalm 46:1"
    },
    {
      id: 11,
      text: "May my children honor and obey their parents.",
      verse: "Ephesians 6:1-3"
    },
    {
      id: 12,
      text: "Keep my children from evil influences.",
      verse: "2 Thessalonians 3:3"
    },
    {
      id: 13,
      text: "Fill my children with Your Holy Spirit.",
      verse: "Acts 2:39"
    },
    {
      id: 14,
      text: "Teach my children to love Your Word.",
      verse: "Psalm 119:105"
    },
    {
      id: 15,
      text: "Let my children be rooted in faith and hope.",
      verse: "Colossians 2:6-7"
    },
    {
      id: 16,
      text: "Guard my children’s hearts and minds.",
      verse: "Philippians 4:7"
    },
    {
      id: 17,
      text: "Raise my children as lights in the world.",
      verse: "Matthew 5:14"
    },
    {
      id: 18,
      text: "Deliver my children from every fear.",
      verse: "2 Timothy 1:7"
    },
    {
      id: 19,
      text: "Grant my children success in their education.",
      verse: "Daniel 1:17"
    },
    {
      id: 20,
      text: "Make my children fruitful in every good work.",
      verse: "Colossians 1:10"
    },
    {
      id: 21,
      text: "Establish my children’s future in Your hands.",
      verse: "Jeremiah 29:11"
    },
    {
      id: 22,
      text: "Fill my children with Your love and grace.",
      verse: "1 John 4:7"
    },
    {
      id: 23,
      text: "Let my children be bold in their faith.",
      verse: "Joshua 1:9"
    },
    {
      id: 24,
      text: "Help my children to trust You completely.",
      verse: "Proverbs 3:5-6"
    },
    {
      id: 25,
      text: "May my children glorify You in all they do.",
      verse: "1 Corinthians 10:31"
    },
    {
      id: 26,
      text: "Clothe my children with humility.",
      verse: "1 Peter 5:5"
    },
    {
      id: 27,
      text: "Teach my children to be thankful always.",
      verse: "1 Thessalonians 5:18"
    },
    {
      id: 28,
      text: "Let my children find joy in Your presence.",
      verse: "Psalm 16:11"
    },
    {
      id: 29,
      text: "Bless my children with discernment and insight.",
      verse: "Proverbs 2:3-5"
    },
    {
      id: 30,
      text: "Help my children to resist temptation.",
      verse: "1 Corinthians 10:13"
    },
    {
      id: 31,
      text: "Keep my children from discouragement.",
      verse: "Galatians 6:9"
    },
    {
      id: 32,
      text: "Let my children be diligent and not lazy.",
      verse: "Proverbs 10:4"
    },
    {
      id: 33,
      text: "Plant seeds of faith deep within my children.",
      verse: "Matthew 13:23"
    },
    {
      id: 34,
      text: "Let my children be confident in who You made them to be.",
      verse: "Psalm 139:14"
    },
    {
      id: 35,
      text: "May my children always walk in love.",
      verse: "Ephesians 5:2"
    },
    {
      id: 36,
      text: "Bless my children with patience and understanding.",
      verse: "Proverbs 14:29"
    },
    {
      id: 37,
      text: "Guide my children to fulfill their purpose.",
      verse: "Psalm 138:8"
    },
    {
      id: 38,
      text: "May my children overflow with hope by the Holy Spirit.",
      verse: "Romans 15:13"
    },
    {
      id: 39,
      text: "Lead my children to seek Your kingdom first.",
      verse: "Matthew 6:33"
    },
    {
      id: 40,
      text: "Let my children delight themselves in You.",
      verse: "Psalm 37:4"
    },
    {
      id: 41,
      text: "Strengthen my children in Your truth.",
      verse: "John 17:17"
    },
    {
      id: 42,
      text: "May my children grow in grace daily.",
      verse: "2 Peter 3:18"
    },
    {
      id: 43,
      text: "Let my children be peacemakers.",
      verse: "Matthew 5:9"
    },
    {
      id: 44,
      text: "Cover my children with the blood of Jesus.",
      verse: "Revelation 12:11"
    },
    {
      id: 45,
      text: "Build my children up in faith and power.",
      verse: "Jude 1:20"
    },
    {
      id: 46,
      text: "May my children never depart from Your ways.",
      verse: "Proverbs 22:6"
    },
    {
      id: 47,
      text: "Let my children walk by faith and not by sight.",
      verse: "2 Corinthians 5:7"
    },
    {
      id: 48,
      text: "Surround my children with Your angels.",
      verse: "Psalm 91:11"
    },
    {
      id: 49,
      text: "Make my children vessels of honor.",
      verse: "2 Timothy 2:21"
    },
    {
      id: 50,
      text: "Let my children shine like stars in the world.",
      verse: "Philippians 2:15"
    },
    {
      id: 51,
      text: "Give my children wisdom and revelation in knowing You.",
      verse: "Ephesians 1:17"
    },
    {
      id: 52,
      text: "May my children always speak the truth in love.",
      verse: "Ephesians 4:15"
    },
    {
      id: 53,
      text: "Bless my children with a teachable spirit.",
      verse: "Proverbs 9:9"
    },
    {
      id: 54,
      text: "Let my children be a blessing to others.",
      verse: "Genesis 12:2"
    },
    {
      id: 55,
      text: "Give my children ears to hear Your voice.",
      verse: "John 10:27"
    },
    {
      id: 56,
      text: "Fill my children with songs of deliverance.",
      verse: "Psalm 32:7"
    },
    {
      id: 57,
      text: "Let my children be quick to forgive.",
      verse: "Colossians 3:13"
    },
    {
      id: 58,
      text: "May my children hunger for righteousness.",
      verse: "Matthew 5:6"
    },
    {
      id: 59,
      text: "Bless my children with creativity and skill.",
      verse: "Exodus 35:35"
    },
    {
      id: 60,
      text: "Help my children to grow into mighty men and women of God.",
      verse: "Psalm 112:1-2"
    }
  ]
  
  export default childrenPrayers
  