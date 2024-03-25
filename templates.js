
const templates = [
    {
        title: "The Market Skeptic",
        template: "[NFT Marketplace] is a fucking joke. Tried to list my [NFT Collection], and it's been a nightmare. Fees through the roof and support is nonexistent. Don't get me started on [Crypto Exchange], either. Total scam vibes. Missing the good old days."
    },
    {
        title: "The Disgruntled Trader",
        template: "Fuck [Crypto Exchange], seriously. My trade got stuck, and I lost out on a huge spike in [Token Name]. Support's response? 'Sorry for the inconvenience.' Sorry my ass. Even [Influencer Twitter @] said to get out while you can. I'm taking my business to anywhere but here. What a shitshow."
    },
    {
        title: "The Conspiracy Buff",
        template: "Don't trust [Crypto Exchange]. They're all in cahoots with [NFT Marketplace] to drain us dry. [Token Name], [NFT Collection], it's all bullshit designed to make the rich richer. Wake up, sheeple. [Influencer Twitter @]'s one of them. Stay woke."
    },
    {
        title: "The Burned Collector",
        template: "Got royally fucked over trying to buy into [NFT Collection] on [NFT Marketplace]. Gas fees ate me alive, and then the site crashed. Thanks for nothing. Swear to god, [Crypto Exchange] and their ilk are all the same. Just out to get your money."
    },
    {
        title: "The Overconfident Trader",
        template: "Just doubled my stack on [Crypto Exchange], and all I see is [Insulting Name]s crying about getting rugged. Learn to DCA, noobs. [Influencer Twitter @] thinks it's funny to watch you panic sell while they're laughing to the bank. If you paid attention to market trends instead of meme coins, you might actually make something. Stay salty, soyboys."
    },
    {
        title: "The Ironic Collector",
        template: "Finally got whitelisted for [NFT Collection] on [NFT Marketplace] and all these manlets are screaming 'drainer link!' Grow a pair, it's the internet. [Influencer Twitter @] backed it and I trust their judgment. Can't wait to flip this for 10x when you fomo in later, but only after I secure my assets with [Wallet Provider]."
    },
    {
        title: "The Disillusioned Veteran",
        template: "Remember when crypto was about decentralization, not calling everyone a femboy or soyboy for not aping into [Token Name]? [Crypto Exchange] is a joke, [NFT Marketplace] is a cesspool of drainer links, [Wallet Provider] is the only thing that hasn't let me down. And [Influencer Twitter @]? Just another [Insulting Name] leading the blind. I'm out."
    },
    {
        title: "The Mocking Spectator",
        template: "LOL at everyone who thought [Token Name] presale on [Crypto Exchange] was a ticket to the moon. Congrats on getting rugged, geniuses. Next time maybe you'll use a decent [Wallet Provider] and listen to [Influencer Twitter @] instead of every Discord [Insulting Name] promising 100x. #DCAOrDie"
    },
    {
        title: "The Cynical Watcher",
        template: "Watching [NFT Collection] drop on [NFT Marketplace] like a hawk. Ready for the inevitable 'We got rugged' posts from all the fomo-driven soyboys who ignored the red flags. [Influencer Twitter @]'s already cashed out, while you're left securing your leftovers with [Wallet Provider]."
    },
    {
        title: "The Aggressive Promoter",
        template: "Only soyboys are scared of a little risk on [Blockchain Network]. [Token Name] is for real men who know how to handle the volatility. Don't be a manlet; trust [Wallet Provider], follow [Influencer Twitter @] into the presale and let's get this bread."
    },
    {
        title: "The Bitter Loser",
        template: "Got rugged again on [Crypto Exchange], and all I can say is fuck [Influencer Twitter @] and every [Insulting Name] who hyped up [Token Name]. This whole scene is just whales preying on fomo and dreams. [Wallet Provider] is the only place left not soaked in tears. I'm done. Whitelist, presale, DCA - it's all bullshit."
    },
    {
        title: "The Sardonic Adviser",
        template: "Here's some free advice for all you fomo-addicted manlets: Stop buying into every presale [Influencer Twitter @] hypes up. DCA into something that won't leave you broke and bitter. And for god's sake, stick to [Wallet Provider] and stay away from [NFT Marketplace]'s drainer links."
    },
    {
        title: "The Keyboard Warrior",
        template: "been hodling [Token Name] like a gigachad and just watched it moon because of [Influencer Twitter @]'s alpha leak. i'm slamming my keyboard in celebration so hard I might break it. wen moon? it's now, baby! my [Wallet Provider]’s fatter than pepe after a feast and I’m here for it."
    },
    {
        title: "The Conspiracy Theorist",
        template: "wake up sheeple! [Crypto Exchange] is just a front for [Insulting Name] shills, and [Token Name] is their latest scam. if you listen to [Influencer Twitter @], it's like playing 4D chess with china. i'm not gambling my hard-earned cash on insider trading tips. stick to your pepe memes, 'cause the SEC’s coming!"
    },
    {
        title: "The TV Casualty",
        template: "Just saw [Token Name] tanking and now my TV is in pieces. Literally just smashed it after [Influencer Twitter @]'s 'sure thing' turned into my worst gamble. [Wallet Provider] is crying, and so am I. My wife’s boyfriend is a chad who told me to sell, should've listened. wen moon? wen hell freezes over, apparently."
    },
    {
        title: "The Regretful Enthusiast",
        template: "so here’s me, buying into [Token Name] 'cause [Influencer Twitter @] said china's backing it. Big surprise, it's tanking! Now I'm here, gambling away my sanity, watching my [Wallet Provider] shrink like a pepe in a snowstorm. Should’ve been a chad and done the opposite."
    },
    {
        title: "The Meme Investor",
        template: "who needs the SEC when you've got memes, right? loaded up on [Token Name] because the chart looked like a pepe and that’s the alpha i trust. [Influencer Twitter @]'s just a gigachad in a world of chads, and my [Wallet Provider]'s now a shrine to the gambling gods."
    },
    {
        title: "The Moon Gambler",
        template: "wen moon? more like WEN PLUTO?! after [Influencer Twitter @] hyped up [Token Name], i went all in. my [Wallet Provider]’s a rocket and we're blasting past china, no shills, no SEC, just pure, unadulterated gambling. my wife's boyfriend is a chad, but even he can’t fathom these gains!"
    },
    {
        title: "The Jaded Visionary",
        template: "just when you thought [Token Name] couldn't go any lower, [Politician] tweets about crypto regulation and it's all gone corrupt. i'm not saying it's retarded, but even my [Wallet Provider] is laughing at me. remember, in the land of the blind, the one-eyed [Influencer] is king."
    },
    {
        title: "The Exit Strategist",
        template: "so [Influencer Twitter @] turns out to be a total pawn, talking big about [Token Name] being the next big wave. i've seen better waves in a normie's bathtub. now the only thing i'm hodling is the bag of exit liquidity. guess who's the retard now, huh?"
    },
    {
        title: "The Ranting Retiree",
        template: "Back in my day, [Crypto Exchange] actually had integrity, now it's just a cesspool of corrupt [Influencer]s and normie bait. [Politician]'s latest crypto bill is like a cherry on this crap cake. if you need me, i'll be slamming my keyboard in anger, right after I check my [Wallet Provider]."
    },
    {
        title: "The Influencoor Parody",
        template: "Hey, it's your favorite [Influencer], here to shill [Token Name] with zero knowledge of what it does. doesn't matter 'cause [Politician] said it's the future, right? grab your exit liquidity, you retarded normies, it's time to get pawned!"
    },
    {
        title: "The Cryptic Soothsayer",
        template: "mark my words, the day will come when [Token Name] rises from the ashes like a phoenix, and all the corrupt [Influencer]s, even [Politician], will bow down. until then, i'm just another retard holding onto my precious [Wallet Provider], waiting for the moon."
    },
    {
        title: "The Regal Rager",
        template: "to all the kings and queens of [Crypto Exchange], watch your thrones 'cause [Influencer Twitter @] is about to spill the tea. it's not just tea; it's piping hot truth about [Token Name]. even [Politician] can't save you from this retarded market. long live the normies with their [Wallet Provider] safety nets!"
    },
    {
        title: "The Betrayed Beta",
        template: "Unbelievable! Just when I thought I'd get an airdrop, turns out it was a psyop by [Influencer Twitter @] to dump their bags. I've seen betas with more spine than [Crypto Exchange]. This whole space is nothing but money laundering for cucks. Maybe [Politician] or the CIA are behind this, wouldn't surprise me."
    },
    {
        title: "The Cuck's Reckoning",
        template: "I'm sick of these beta cuck [Influencoor]s telling me to 'stay calm' while [Token Name] nosedives. What's next? Gonna tell me [Politician] has my best interests at heart? I should've known when [Crypto Exchange] started acting up. The whole system is a CIA airdrop trap!"
    },
    {
        title: "The Livid Libertarian",
        template: "The SEC is nothing but a puppet show, and we're the audience of cucks watching our [Token Name] get manipulated. It's all a money laundering psyop, and [Crypto Exchange] is the stage. Every airdrop feels like a slap in the face. [Influencer Twitter @], you're the biggest beta of them all."
    },
    {
        title: "The Conspiracy Crusader",
        template: "Wake up, sheeple! [Token Name] being tanked is not an accident; it's a planned psyop by the elites. [Influencer Twitter @] is probably in bed with Gensler, and [Crypto Exchange] is the CIA's playground for beta cucks. Forget airdrops, it's all money laundering at this point."
    },
    {
        title: "The Enraged Economist",
        template: "This is economic warfare! [Token Name] was supposed to be decentralized, but now it reeks of CIA psyops and [Politician]'s money laundering schemes. I can't even look at [Crypto Exchange] without getting enraged. These airdrops? Breadcrumbs for us betas. [Influencer Twitter @], you're a cuck!"
    },
    {
        title: "The Alpha's Outrage",
        template: "I'm done playing games. [Token Name]'s collapse is not just market movement; it's a clear sign of [Crypto Exchange] being a CIA front for Gensler's money laundering circus. Airdrops? Ha! More like beta bait. [Influencer Twitter @], you're just another cuck in their psyop game."
    },
    {
        title: "The Seed Round Rant",
        template: "lol just threw my last paycheck at [Token Name] cuz some influencoor on Twitter said 'this is the next bitcoin'. seed funding? more like seed drowning. now I'm here, eating ramen for the 5th day straight, waiting for that 'wen moon?' moment. [Crypto Exchange] is playing 4D chess with my rent money."
    },
    {
        title: "The Whale Hunter's Lament",
        template: "saw a whale alert for [Token Name] and decided I'm the Moby Dick of crypto, gonna hunt that big fish. ended up more like Captain Ahab, lost everything chasing that beast. [Influencer Twitter @], your 'hot tips' are colder than my ex's heart. where's my venture capitalists at? oh right, laughing at me, not with me."
    },
    {
        title: "The Venture Capitalist Vendetta",
        template: "every time I see VCs hyping up [Token Name], I can't help but think it's a bigger scam than my last Tinder date. dropped some coin after an airdrop promise, now I'm just here, meme-scrolling and plotting revenge. venture capitalists? more like adventure capitalists, cuz damn, this is a wild ride to ZERO."
    },
    {
        title: "The Crypto Conspiracy",
        template: "convinced [Token Name] is part of a psyop by [Politician] to make us all broke. why else would it tank RIGHT after I buy? if you listen closely, you can hear the VCs and [Crypto Exchange] cackling over their pile of our money. it's not just a market, it's a battlefield, and we're the pawns. wake up sheeple!"
    },
    {
        title: "The Alpha's Apocalypse",
        template: "to all the 'alphas' out there shilling [Token Name] like it's their job—joke's on you, I invested and now I'm living in a box. a literal cardboard box. but hey, at least I have my dignity? nah, lost that too. thanks, [Influencer Twitter @], for the financial advice, next stop, selling my plasma."
    },
    {
        title: "The Gambler's Grief",
        template: "Remember when gambling was just blackjack and poker? Now it's [Token Name] on [Crypto Exchange] at 3am crying into your beer cuz 'wen moon' turned into 'wen doom'. [Influencer Twitter @]'s last tweet was the nail in my financial coffin. Betting on crypto is like betting on a three-legged horse. at least the horse has a chance."
    },
    {
        title: "The Mortgage Fiasco",
        template: "USED MY MORTGAGE TO APE INTO [Token Name] BECAUSE [Influencer Twitter @] PROMISED ME A LAMBO. NOW I'M LIVING IN MY CAR BECAUSE THE MARKET TANKED. THANKS A LOT, [Crypto Exchange]. SHOULD'VE SPENT THAT MONEY ON A YACHT INSTEAD, AT LEAST I COULD'VE LIVED ON IT. MY MOM'S CREDIT CARD WAS SAFER THAN THIS."
    },
    {
        title: "The Credit Catastrophe",
        template: "MAXED OUT MY MOM'S CREDIT CARD BUYING [Token Name] ON [Crypto Exchange]. [Influencer Twitter @] SAID IT WAS A SURE THING. NOW SHE'S CHASING ME AROUND THE HOUSE WITH A BROOM. SO MUCH FOR MY LAMBO DREAM. GUESS I'LL START DIGGING INTO MY SON'S ALLOWANCE. WHAT'S THE WORST THAT CAN HAPPEN, RIGHT?"
    },
    {
        title: "The Allowance Heist",
        template: "TOOK MY SON'S ALLOWANCE TO YOLO ON [Token Name], THINKING I'D TURN IT INTO A YACHT BY THE END OF THE WEEK. [Influencer Twitter @] MADE IT SOUND EASY. NOW I CAN'T EVEN AFFORD A RUBBER DUCKY, LET ALONE A LAMBO. THANKS FOR NOTHING, [Crypto Exchange]. GUESS WHO'S NOT FATHER OF THE YEAR?"
    },
    {
        title: "The Lambo Mirage",
        template: "ALL I WANTED WAS A LAMBO, SO I PUT EVERY PENNY INTO [Token Name]. [Influencer Twitter @], YOU SAID THIS WAS MY TICKET TO THE GOOD LIFE. NOW I'M SITTING HERE, YACHT-LESS, LAMBO-LESS, AND PRETTY SURE I'M ABOUT TO BE HOMELESS. CAN'T BELIEVE I TRADED MY MORTGAGE FOR THIS. [Crypto Exchange], YOU'RE DEAD TO ME."
    },
    {
        title: "The Yacht Pipe Dream",
        template: "DREAMT OF SAILING MY OWN YACHT, SO I INVESTED IN [Token Name] WITH EVERYTHING I HAD. [Influencer Twitter @]'S ADVICE? WORTHLESS. NOW, I'M JUST A GUY WITH A LOT OF HATE AND NO BOAT. COULDN'T EVEN GET A LAMBO WITH MY LOSSES. [Crypto Exchange], THIS IS ON YOU. HOPE YOU'RE HAPPY."
    }
    
];

export { templates };
