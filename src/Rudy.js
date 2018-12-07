[...document.getElementsByClassName('stream-item-footer')].map((e) => {
  const numbers = e.textContent.match(/[\d,]+/g)
    .slice(0, 3)
    .map((ns) => parseInt(ns.replace(/,/g, '')))
  return [
    e.parentElement.parentElement.getElementsByClassName('js-tweet-text-container')[0].textContent,
    ...numbers,
    e.parentElement.parentElement.dataset.tweetId,
    e.parentElement.parentElement.dataset.retweetId,
  ]
}).map((arr) => {
    return {
        text: arr[0],
        replies: arr[1],
        retweets: arr[2],
        likes: arr[3],
        tweetId: arr[4],
        retweetId: arr[5],
    };
  }).filter((e) => !e.retweetId).slice(0,100);

const Rudy =
[
  {
    "text": "\n  The service for President George H.W. Bush was very fitting for such a good man. His son’s eulogy was beautiful. I had the great honor of working with President Bush in the Reagan administration. He set the standard for contributing VPs. His Presidency was truly consequently.\n",
    "replies": 1700,
    "retweets": 2311,
    "likes": 14765,
    "tweetId": "1070392329884831751"
  },
  {
    "text": "\n  Twitter allowed someone to invade my text with a disgusting anti-President message. The same thing-period no space-occurred later and it didn’t happen. Don’t tell me they are not committed cardcarrying anti-Trumpers. Time Magazine also may fit that description. FAIRNESS PLEASE\n",
    "replies": 22119,
    "retweets": 3721,
    "likes": 9481,
    "tweetId": "1070118915139923968"
  },
  {
    "text": "\n  Mueller brings process cases like Cohen’s pleading guilty to lying to Congress and threatens similar cases against Cohen and  Corsi. These cases, and all so far,  demonstrate no evidence of Trump collusion and are “...full of sound and fury signifying.”\n",
    "replies": 6429,
    "retweets": 5277,
    "likes": 13807,
    "tweetId": "1069192141610655744"
  },
  {
    "text": "\n  No one did more to serve our country nobly and well from war hero to President than President George H.W.Bush. I knew him. I worked with him. I learned from him and twice he came to my rescue when others didn’t have the courage to do so; the Teamsters case and my first election .\n",
    "replies": 745,
    "retweets": 1334,
    "likes": 8993,
    "tweetId": "1068900051790020608"
  },
  {
    "text": "\n  Kimim  ° has f\n",
    "replies": 3648,
    "retweets": 2365,
    "likes": 4633,
    "tweetId": "1068650461304102913"
  },
  {
    "text": "\n  Hysterical coverage of Cohen plea. It misses point that ,once again like Corsi leaked documents demonstrate, Mueller’s  crew has no evidence of collusion. Along the way,however,he is keeping America safe from false statement makers or people with faulty memories or both.\n",
    "replies": 2891,
    "retweets": 8465,
    "likes": 25091,
    "tweetId": "1068469418617962496"
  },
  {
    "text": "\n  Tomorrow we all pause and, as our forebears did almost four centuries ago, we pray thank you to the One and Same God who gave us the gift of American freedom. With that we accept our duty to protect it with our lives and to extend it with our works.\n",
    "replies": 1270,
    "retweets": 6197,
    "likes": 22383,
    "tweetId": "1065281170924101632"
  },
  {
    "text": "\n  How do you find 4,000 ballots here, 5,000 there, three days after everybody else, but these two Democrat bossed counties, have finished counting. Maybe that’s why they kept as Commissioner in Broward someone who was found guilty of destroying ballots.\n",
    "replies": 1753,
    "retweets": 9713,
    "likes": 21772,
    "tweetId": "1060936414555185153"
  },
  {
    "text": "\n  How is it possible that the person in charge of Broward County elections was found by a court to have acted illegally during 2016 elections for destroying ballots and was not fired. Maybe they count on the machine,along with Palm Beach,to steal elections.Years of irregularities.\n",
    "replies": 2008,
    "retweets": 15710,
    "likes": 37513,
    "tweetId": "1060923684628643840"
  },
  {
    "text": "\n  If you’re interested in free speech then Antifa’s goons who stormed Tucker Carlson’s home should be arrested. Tucker’s wife was in kitchen and Antifa goons were pounding on door and yelling threats. Where is media outrage or concern about free speech. We support you Tucker.\n",
    "replies": 1416,
    "retweets": 9902,
    "likes": 24319,
    "tweetId": "1060762623912894464"
  },
  {
    "text": "\n  You would have to be a fool to believe an endless count in only 2 of 67 counties in FL. is to count every ballot. Time for court to intervene and not give these 2 counties more time than all other counties. Incompetence or fraud? Could they be waiting to create more votes?\n",
    "replies": 1016,
    "retweets": 6184,
    "likes": 12003,
    "tweetId": "1060740425085054976"
  },
  {
    "text": "\n  Why does it take 2 days or more time to count ballots in Broward and Palm Beach,FL? Count is over in the other counties?Are they just slower or do they cheat? Why is a Democrat pol,found to have illegally destroyed ballots in 2016,in charge of the endlessly continuing count.\n",
    "replies": 2533,
    "retweets": 14977,
    "likes": 37425,
    "tweetId": "1060736663637450753"
  },
  {
    "text": "\n  Democrats love to say there is no voter fraud in US. That’s because it is a regular part of their machine politics and you have to be naive,even simple minded not to recognize it. Investigate Broward and Palm Beach Counties in FL and I’m told you will find plenty.\n",
    "replies": 5492,
    "retweets": 16546,
    "likes": 37801,
    "tweetId": "1060730742550990848"
  },
  {
    "text": "\n  Hillary’s lawyers trying to steal Florida election. They are still counting(or creating)ballots just in Democratic Broward and Palm Beach. All other votes counted in the state. Court should disqualify votes counted only after all other counties were finished.\n",
    "replies": 10259,
    "retweets": 16262,
    "likes": 38219,
    "tweetId": "1060725476598185984"
  },
  {
    "text": "\n  In case media doesn’t emphasize this: President Trump did much better in his first mid-year than most Presidents. House losses less and bigger Senate gains. He certainly did a lot better than Presidents Obama and Clinton. See if you see that in mainstream media.\n",
    "replies": 553,
    "retweets": 4950,
    "likes": 11345,
    "tweetId": "1060052206349627392"
  },
  {
    "text": "\n  The DeSantis/Scott team won critical races in Florida. Also there was no place President Trump campaigned harder and it paid off. The big loser former President Obama looks like defeats wherever he worked hard. Maybe now he will follow 43’s more Presidential approach.\n",
    "replies": 711,
    "retweets": 3131,
    "likes": 9254,
    "tweetId": "1060047560885321733"
  },
  {
    "text": "\n  The young emerging star of 2018 is not Beto O’Rourke but Josh Hawley who looks like he will win by +8% over Claire McCaskill. Again with a big assist to President Trump. Also it is good to see that Americans rise up against the kind of tactics used against Justice Kavanaugh.\n",
    "replies": 710,
    "retweets": 4678,
    "likes": 20854,
    "tweetId": "1060032795567890432"
  },
  {
    "text": "\n  Congratulations to Mike Braun who won a big Senate race in Indiana. Could feel the momentum on Saturday and the President’s rally and support played a big role. Mike’s call for returning to a politics of ideas rather than personal attacks was a good start.\n",
    "replies": 73,
    "retweets": 866,
    "likes": 3703,
    "tweetId": "1060006218826178561"
  },
  {
    "text": "\n  Sen. McCaskill says some Dems have gone CRAZY. She’s for stopping illegal entry. But she voted against Justice Kavanaugh and will vote for Schumer who you know means obstruction, character assasination and impeachment. Take her advice and vote against her crazy Dems ...and her.\n",
    "replies": 466,
    "retweets": 3248,
    "likes": 7307,
    "tweetId": "1059842263889702913"
  },
  {
    "text": "\n  If 4,000 people from Europe showed up in American ports and insisted on coming into US without legal identification,they would be rejected because their entry was illegal.  No different for South America.  Not racism but equal application of law without bias. That’s America.\n",
    "replies": 1440,
    "retweets": 13704,
    "likes": 38110,
    "tweetId": "1059662735556911104"
  },
  {
    "text": "\n  Caravans  cannot crash over the border without vetting. But who are they? Could MS-13 have hidden some killers in the group? Why wouldn’t they take advantage of this invasion? For political reasons Democrats would allow it despite the risk. Not our President.\n",
    "replies": 1197,
    "retweets": 5434,
    "likes": 13157,
    "tweetId": "1059599577580482560"
  },
  {
    "text": "\n  Dems have to pay to get 6,000 to listen to Obama. Look at turnout in Cleveland today for President Trump. No one has to pay them. That’s what happens when you keep your promises and keep America on a positive course.\n",
    "replies": 1294,
    "retweets": 8265,
    "likes": 25297,
    "tweetId": "1059578578831110144"
  },
  {
    "text": "\n  Great enthusiasm for @EddieEdwardsNH  for Congress. He’s a Navy vet,a law enforcement chief and businessman. At Theo’s restaurant in Manchester where there are pictures of President Trump’s visit. Eddie will pursue a pro-Trump agenda, more jobs, better wages and a safer America.pic.twitter.com/vcN8misdzC – at Theo's Pizza Restaurant\n",
    "replies": 143,
    "retweets": 659,
    "likes": 1345,
    "tweetId": "1059503517524811776"
  },
  {
    "text": "\n  In New Hampshire with Eddie Edwards running in CD1. A Navy veteran, a law enforcement chief, a businessman , a real patriot. This man made it on his own. Rally at 1:30pm at Edwards Victory Office, 150 Chestnut Street in Manchester.\n",
    "replies": 123,
    "retweets": 1113,
    "likes": 2970,
    "tweetId": "1059480125346103297"
  },
  {
    "text": "\n  It was so great to see the best Attorney General in US, my good friend  @PamBondi - All of us that supported and her for AG, myself and @realDonaldTrump, are very proud of her! Thank you for your exceptional service. There will be more.pic.twitter.com/LYbrc3mTKU\n",
    "replies": 361,
    "retweets": 1004,
    "likes": 3504,
    "tweetId": "1059290500690313216"
  },
  {
    "text": "\n  Amazing day in Boca Raton and Daytona Beach. The support for @RonDeSantisFL is alive and Florida will come through like it always does. Floridians will reject the failed Tallahassee Mayor and elect a battle tested leader, my friend Ron.pic.twitter.com/ZWj1GeFjRH\n",
    "replies": 158,
    "retweets": 652,
    "likes": 1631,
    "tweetId": "1059277929899847682"
  },
  {
    "text": "\n  Just finished rally for @RonDeSantisFL in NYC 6th Borough, Boca. Great enthusiasm for Ron an Rick Scott for Senate. They don’t want a socialist imposing an income tax or attacking the police. Repubs will win innFL.pic.twitter.com/kEudQEEsCE\n",
    "replies": 593,
    "retweets": 4745,
    "likes": 11197,
    "tweetId": "1059216723365236736"
  },
  {
    "text": "\n  Great rally for @RonDeSantisFL  in Daytona. On to Boca Raton Repub. Headquarters. A great state like Fl. needs a leader who can build on Gov. Scott’s success. More jobs, lower taxes, safer communities and support for our police. Vote for DeSantis for Gov. and  Scott for Senate.\n",
    "replies": 149,
    "retweets": 1416,
    "likes": 3557,
    "tweetId": "1059198700944326657"
  },
  {
    "text": "\n  Floridians do you want an income tax in Fl? Want a 40% increase in corporate tax? If you do vote for Gillum (you can’t call him Andrew) for Gov.  Or you can vote for low taxes, growing jobs and support for the police and Israel and vote for Ron DeSantis.  @RonDeSantisFL .\n",
    "replies": 1073,
    "retweets": 8781,
    "likes": 18849,
    "tweetId": "1059149124514312192"
  },
  {
    "text": "\n  According to the founder of Dream Defenders Gillum (you can’t call him Andrew) is the inspiration for DD and a part of the movement. It’s agenda is socialist economics, anti-police and virulently anti -Israel. They favor a complete boycott of Israel. Vote for @RonDeSantisFl.\n",
    "replies": 582,
    "retweets": 5565,
    "likes": 10374,
    "tweetId": "1058959409219551233"
  },
  {
    "text": "\n  Rally with @RonDeSantisFl tomorrow at 1 in Daytona and at 3:30 in Boca. Last night mega rally will put Ron and @ScottforFlorida over the top. But take no risk. Gillum will impose job crippling taxes, destroy police morale and bring the FBI corruption probe to the Gov’s office.\n",
    "replies": 218,
    "retweets": 1831,
    "likes": 4124,
    "tweetId": "1058944547789643776"
  },
  {
    "text": "\n  Good day. Mike Braun Indiana, John James Michigan and Danny Tartanian, Dean Heller and Adam Laxalt Nevada. Great enthusiasm for an America already much better than two years ago. Democrats promise socialism, obstructionism and impeachment. Vote to keep moving forward...Repub.!!pic.twitter.com/xDW13TxM4p\n",
    "replies": 102,
    "retweets": 474,
    "likes": 1120,
    "tweetId": "1058880596896768000"
  },
  {
    "text": "\n  Rally with @DannyTarkanian in beautiful Las Vegas. This can really stop a Pelosi win and get us a great guy in DC. Also @deanHeller for Senate @AdamLaxalt for Gov. and @WesDuncan for AG will put Nevada in right column. Very exciting team!pic.twitter.com/El73mS0LSL\n",
    "replies": 106,
    "retweets": 363,
    "likes": 823,
    "tweetId": "1058876797977120768"
  },
  {
    "text": "\n  Pictures after rally in Indianapolis with Mike Braun, lost Yankee fans and proud Hoosiers. People here really mad at Democrat obstructionism-  character assasination, delay and impeachment. They will vote Republican all the way.\n",
    "replies": 248,
    "retweets": 1261,
    "likes": 3610,
    "tweetId": "1058752830796976128"
  },
  {
    "text": "\n  pic.twitter.com/B9sZUdC9Ut\n",
    "replies": 41,
    "retweets": 132,
    "likes": 427,
    "tweetId": "1058751622824820737"
  },
  {
    "text": "\n  Going to see my NBF John James at Holland Civic Center in Michigan and ask them to vote for a leader and not a warn out politician. John will add real support to the best economic growth in decades and not try to obstruct, defame and impeach\n",
    "replies": 208,
    "retweets": 902,
    "likes": 2362,
    "tweetId": "1058746744299814912"
  },
  {
    "text": "\n  Going to Franklin Township School West in Indianapolis to support Mike Braun for Senate. Mike will keep America on right track. His opponent voted for almost every  Obama Judge but against Justice Kavanaugh. He takes orders from his boss Chuck Schumer.#RightTrackResults\n",
    "replies": 135,
    "retweets": 499,
    "likes": 1312,
    "tweetId": "1058729593664925698"
  },
  {
    "text": "\n  #REALNEWS:250,000 new jobs in just last month, unemployment at only 3.7%. Best performance for  economy in memory. Look at difference with job-killing Leftie Democrat Obama. Don’t let Democrat socialist win. If you want more jobs and higher I wages...VOTE REPUBLICAN.\n",
    "replies": 383,
    "retweets": 1388,
    "likes": 3279,
    "tweetId": "1058723903407902720"
  },
  {
    "text": "\n  Hanoi Jane Fonda says the President is like Hitler. This is same one who gave aid and comfort to those who were killing Americans.  If this Blame America First celebrity is against President; good reason to vote Republican and support him .\n",
    "replies": 1260,
    "retweets": 7351,
    "likes": 18547,
    "tweetId": "1058690259263934465"
  },
  {
    "text": "\n  Sorry for the mistake with JOHN JAMES first name but you’d be making one if you don’t elect him to Senate from Michigan.The tweet was not planned but spontaneous.I saw his interview and record-military, business-and said this is a true leader,not the same old. He’s exceptional\n",
    "replies": 789,
    "retweets": 4514,
    "likes": 14185,
    "tweetId": "1058359846016303109"
  },
  {
    "text": "\n  Trump Posts Explosive Ad Attacking Dems - 1600 Dailyhttps://1600daily.com/2018/11/01/trump-posts-explosive-ad-attacking-dems/ …\n",
    "replies": 190,
    "retweets": 663,
    "likes": 1721,
    "tweetId": "1058204308473290753"
  },
  {
    "text": "\n  Democrat candidate for Governor of Florida has thrown staffer under bus who said on tape,he is hiding his far left socialist agenda. Machine politician cover-up-fire the scapegoat. No wonder the failed Mayor of Tallahassee is involved in an FBI corruption probe. DeSANTIS for Gov.\n",
    "replies": 699,
    "retweets": 6768,
    "likes": 13050,
    "tweetId": "1058182777114370048"
  },
  {
    "text": "\n  Don James is running for Senate in Michigan. He is a combat veteran, a successful business man and believes in lower taxes, more jobs, effective health care and safety and security. He’s the future of our party. Let’s make that future now.. Vote for Don James.\n",
    "replies": 4367,
    "retweets": 6756,
    "likes": 17078,
    "tweetId": "1058147671268040707"
  },
  {
    "text": "\n  #RETROGRESSIVES: Democrat candidate for Governor of Florida wants to increase government give-aways, regulation and taxes-corporate tax by a job-killing 40%.He’s no moderate. His ideas are socialist. He will\nintroduce an INCOME TAX. Save your economy, vote for RON DeSANTIS.\n",
    "replies": 497,
    "retweets": 2984,
    "likes": 5593,
    "tweetId": "1057823450910334982"
  },
  {
    "text": "\n  Progressives want to introduce socialism in US. It’s a failed economic program from the 19th century. They are RETROGRESSIVES trying to hijack Democrat Party. Vote to continue best economy in decades. Vote Republican, a 21st century party.\n",
    "replies": 643,
    "retweets": 3366,
    "likes": 7055,
    "tweetId": "1057756530051870720"
  },
  {
    "text": "\n  Which of these candidates represents today’s Democrat party? The one in Arizona who said, while the Taliban was killing Americans, it was fine to fight for them. Or the one in Florida who is involved in an FBI investigation and runs the highest crime city in FL. Vote Republican!\n",
    "replies": 721,
    "retweets": 4937,
    "likes": 9778,
    "tweetId": "1057752409378865153"
  },
  {
    "text": "\n  Democrat party is abandoning any pretense of honesty. Their staffers all across America are admitting their candidates in Arizona, Tennessee and Missouri, to name a few, are lying and pretending to be moderate. Reject deception, vote for truth. VOTE REPUBLICAN!\n",
    "replies": 1930,
    "retweets": 18859,
    "likes": 41016,
    "tweetId": "1057665720937537536"
  },
  {
    "text": "\n  Where do Democrats find these candidates? In Arizona one who said in 2003 it was fine for an American to fight for the Taliban. In Florida a Mayor governing the state’s most dangerous city and involved in a FBI corruption investigation. Vote Republican!\n",
    "replies": 617,
    "retweets": 4392,
    "likes": 9761,
    "tweetId": "1057486179807969280"
  },
  {
    "text": "\n  In Arizona who should succeed John McCain? The Democrat candidate who said in Feb. 2003 it was fine for an American to fight for the Taliban?Or Martha McSally who fought for the U.S. as a fighter pilot and commander of a squadron in Afghanistan and Iraq? The only answer McSally!\n",
    "replies": 749,
    "retweets": 7840,
    "likes": 16628,
    "tweetId": "1057480998487777280"
  },
  {
    "text": "\n  After September 11,2001 it was important to realize we were not alone. All those who came to volunteer or just to show support made us realize an entire nation, indeed much of the world was there to help us. The President and First Lady will make that happen for Pittsburgh today.\n",
    "replies": 664,
    "retweets": 2101,
    "likes": 6113,
    "tweetId": "1057263228768739329"
  },
  {
    "text": "\n  It is sick for the Trump haters on cable to try to blame the President for the anti-Semitic hateful  mass murder in Pittsburgh. The murderer hated President Trump because of his support for Israel and for having too many Jews around him. REALLY SICK!!!!\n",
    "replies": 658,
    "retweets": 2990,
    "likes": 7808,
    "tweetId": "1057158078620151809"
  },
  {
    "text": "\n  The Democrat candidate for Governor in Florida is reportedly under criminal investigation by the FBI. His city has highest crime in State. He wants to raise your taxes. I’m not sure you know this because the press has been sickenly biased. Vote for Ron DeSantis.\n",
    "replies": 1612,
    "retweets": 17230,
    "likes": 35040,
    "tweetId": "1057155880611966978"
  },
  {
    "text": "\n  There’s another reason Florida could become another Chicago-high taxes and you can bet a massive income tax. That’s what you will get with the failed Mayor of Tallahassee, highest crime rate in State. Vote for a real, honest leader Ron DeSantis.\n",
    "replies": 237,
    "retweets": 1537,
    "likes": 3152,
    "tweetId": "1057149060182872064"
  },
  {
    "text": "\n  Absolutely true!https://twitter.com/maryanneinct/status/1056861516853592069 …\n",
    "replies": 603,
    "retweets": 3212,
    "likes": 8053,
    "tweetId": "1056956325526151169"
  },
  {
    "text": "\n  Anti-semitism is anti-American as is racism and all forms of group hatred. All Americans are one with the good people of Pittsburg as they were with New York during 9/11. If we all pray together and we all end our divisiveness starting with ourselves, goodness will defeat evil.\n",
    "replies": 714,
    "retweets": 3249,
    "likes": 9114,
    "tweetId": "1056540064350695424"
  },
  {
    "text": "\n  As a former prosecutor and Mayor, I ask the people of my adopted State Florida to reject a Mayor with highest murder and crime rates in State. You don’t want to become Chicago.  Vote for a real leader who will keep Florida safe... Ron DeSANTIS.\n",
    "replies": 1401,
    "retweets": 11812,
    "likes": 28653,
    "tweetId": "1056312693039267840"
  },
  {
    "text": "\n  The attack on the synagogue in Pittsburg reminds us that  anti-semitism is still very dangerous. All your fellow citizens stand with you today in condemning this vile act of hatred. This was an attack on all of us.  Together we pray for all of you and for America.\n",
    "replies": 269,
    "retweets": 1785,
    "likes": 5217,
    "tweetId": "1056276273973129216"
  },
  {
    "text": "\n  Florida is critical. Ron DeSANTIS will keep Florida one of our best economies, his opponent wants to tax the economy into decline. No real choice ..for GROWTH it’s ...DeSANTIS.\n",
    "replies": 2686,
    "retweets": 9839,
    "likes": 24092,
    "tweetId": "1056009329806114817"
  },
  {
    "text": "\n  #REALNEWS: Pres. Trump foreign policy succeeds again where predecessors failed. North and South Korea disarmed the Security Zone in DMZ and made a step toward peace. Obama left him with a dangerous Korea and he is diffusing it. Where’s the NY Times editorial praising him.\n",
    "replies": 854,
    "retweets": 6136,
    "likes": 14528,
    "tweetId": "1055778273609900032"
  },
  {
    "text": "\n  President Trump’s condemnation of political violence  was bi-partisan. Pelosi and Schumer cast it aside. I urge them to join without reservation. Whether rhetoric causes violence or not, I ask all to join together. Whatever past mistakes , let’s now be  respectful to each other.\n",
    "replies": 1488,
    "retweets": 4862,
    "likes": 14347,
    "tweetId": "1055507230798331905"
  },
  {
    "text": "\n  ARMENIANS want me to tell Americans that the media doesn’t tell you that Armenians, and much of the world,  appreciate President Trump’ s leadership. No political phony talk but honesty. America leading the world to peace and freedom.\n",
    "replies": 481,
    "retweets": 2288,
    "likes": 6141,
    "tweetId": "1054795413037805568"
  },
  {
    "text": "\n  Many ARMENIANS want me to tell Americans that they love President Trump’s dedication to making America Great Again.This will lead the world to peace and respect for human achievement and freedom. It’s wonderful to see America. once again, respected and admired. GOD BLESS AMERICA!\n",
    "replies": 182,
    "retweets": 523,
    "likes": 1511,
    "tweetId": "1054795409271472128"
  },
  {
    "text": "\n  People here in Armenia think President Trump has once again restored America’s leadership position. They say if we follow. as Obama did, someone else will try to lead and only for their own ends. There is no other nation that has the strength and values to protect human dignity.\n",
    "replies": 1001,
    "retweets": 2257,
    "likes": 9269,
    "tweetId": "1054788238009946112"
  },
  {
    "text": "\n  Tucker Carlson’s book SHIP OF FOOLS is a well reasoned analysis of our current condition. It’s a non-partisan analysis of our current political bitterness and to fix it you must first understand it.  Highly recommend it to all.\n",
    "replies": 513,
    "retweets": 1807,
    "likes": 5837,
    "tweetId": "1052651191325286400"
  },
  {
    "text": "\n  If you vote for Democrats for Congress you’re putting Jerry Nadler (D-NY) in charge of Judiciary and he promises to impeach the President and probably Justice Kavanaugh. The party of RAGE will also bring us chaos. Don’t reverse strongest economy in memory.\n",
    "replies": 5015,
    "retweets": 14863,
    "likes": 36243,
    "tweetId": "1051481442205802496"
  },
  {
    "text": "\n  #REALNEWS: Pastor Brunson’s release only happened because of President Trump’s persistence in saving American lives. His much tougher approach has resulted in, I believe, 17 Americans released from captivity. A stronger America results in a much safer world.\n",
    "replies": 681,
    "retweets": 5512,
    "likes": 15437,
    "tweetId": "1051054243044646912"
  },
  {
    "text": "\n  Hillary must clarify ; must there be both a Democrat House and Senate for them to be civil or would control of one House at least make them less indecent? I suspect,like all bullies,power corrupts. Everything is getting better. Democrats can’t be trusted to be in power.\n",
    "replies": 995,
    "retweets": 4270,
    "likes": 10164,
    "tweetId": "1050753140923002882"
  },
  {
    "text": "\n  No Democrat has condemned Holder’s plea to kick Republicans or Clinton’s advocacy for incivility. This combined with organized Democrat harassment of Republicans is what the Democrat Party stands for in the 2018 election. It is inconsistent with American values.\n",
    "replies": 1976,
    "retweets": 9205,
    "likes": 19731,
    "tweetId": "1050726091353141248"
  },
  {
    "text": "\n  The mainstream media comments on Kanye West is disgraceful. It’s part of the Democrat agenda of personal destruction of anyone who disagrees with their agenda of mass dependency. Kanye is fighting for personal accountability, the key to freedom. I respect Kanye’s courage.\n",
    "replies": 2452,
    "retweets": 12279,
    "likes": 35686,
    "tweetId": "1050577441369063426"
  },
  {
    "text": "\n  Hillary: “Civility can start again...” when Democrats are in power. Holder: Democrat response to Republicans is to “kick ‘em.” This is MOB RULE. Instead vote Republican for lower taxes, better health care,  more jobs and a stronger America.\n",
    "replies": 729,
    "retweets": 4332,
    "likes": 9742,
    "tweetId": "1050564546182561793"
  },
  {
    "text": "\n  A vote for a Democrat House is a vote for a big move toward socialism, obstruction of pro-job agenda, mob harassment, destruction of people nominated to high office, endless investigations of politically motivated charges and an attempt to impeach Justice Kavanaugh.\n",
    "replies": 3410,
    "retweets": 10657,
    "likes": 23807,
    "tweetId": "1050200315549675527"
  },
  {
    "text": "\n  WOW: Hillary Clinton has said there will be no civility in American politics until Democrats are in control. She is threatening continued obstruction, destruction and incivility unless you do what she wants. Democrat agenda is impeachment; Republican making America even greater.\n",
    "replies": 3384,
    "retweets": 18175,
    "likes": 46728,
    "tweetId": "1050021312528302080"
  },
  {
    "text": "\n  Democrats can’t gracefully lose and help us unite.  They want to continue to divide America by opening impeachment if  they win the House. Dr. Ford says, if confirmed, that Justice Kavanaugh should not be impeached. Meanwhile Democrats will relentlessly divide and obstruct.\n",
    "replies": 1546,
    "retweets": 5639,
    "likes": 14962,
    "tweetId": "1048602536129843200"
  },
  {
    "text": "\n  #REALNEWS: 3.7% unemployment, the lowest in 49 years. 4.2% growth rate for our economy. Let’s not have Pelosi and Schumer halt President Trump’s momentum by continuing their politics of personal destruction and complete obstruction. Vote for a Republican Congress.\n",
    "replies": 253,
    "retweets": 1702,
    "likes": 4172,
    "tweetId": "1048559581171990528"
  },
  {
    "text": "\n  Senator Collins vote for Judge Kavanaugh was a vote crying out for a new political system based on fairness and civility. Also Senators Flake and Manchin restores basic American values to our important political decisions. Today they were heroes.\n",
    "replies": 453,
    "retweets": 2002,
    "likes": 6798,
    "tweetId": "1048555472930963456"
  },
  {
    "text": "\n  The Senate Democrats have exposed a woman who wanted anonymity. They have announced their belief in entirely uncorroborated and false charges of criminal conduct against a judge of otherwise unquestioned good character. America now sees how awful it would be if they won.\n",
    "replies": 859,
    "retweets": 5734,
    "likes": 15200,
    "tweetId": "1048528040349917185"
  },
  {
    "text": "\n  Everyone should sympathize with Judge Kavanaugh and Dr. Ford. They are victims of a distorted set of values. To pursue their objectives Democrats are willing to sacrifice anyone’s reputation. Decent leaders of both parties must agree: NEVER AGAIN.\n",
    "replies": 1669,
    "retweets": 4569,
    "likes": 16113,
    "tweetId": "1047968811138408450"
  },
  {
    "text": "\n  FBI report is done. No  corroboration of Democrat smears of Judge Kavanaugh. Who drove Dr. Fox there? Who drove her home? No one has come forward! Do any of the 5 she placed there  corroborate her? No! Some are contradictory. Its obvious: Democrat exploitation of Dr. Ford. SHAME!\n",
    "replies": 11479,
    "retweets": 10931,
    "likes": 34206,
    "tweetId": "1047935076124823553"
  },
  {
    "text": "\n  Pelosi says she will impeach Kavanaugh if he is confirmed. Shouldn’t these phonies await the FBI report. Obviously the Democrats were only asking for an FBI report for delay not to seek the truth. Any vote for a Democrat for Congress is a vote for injustice and a Speaker Pelosi.\n",
    "replies": 2821,
    "retweets": 18318,
    "likes": 46446,
    "tweetId": "1046934635157045249"
  },
  {
    "text": "\n  #REALNEWS: Again President Trump does what his predecessors  could not; a fair deal for US with Canada. Finally free and FAIR trade with our neighbors. He’s right, we  might get tired of winning Really never, America is GREAT AGAIN.\n",
    "replies": 797,
    "retweets": 5477,
    "likes": 16939,
    "tweetId": "1046779858347528192"
  },
  {
    "text": "\n  Correction:  he voted for, and I supported, Justices Sotormayor and Kagen. They were the best you could expect from a left-leaning Democrat President. Judge Kavanaugh meets and maybe exceeds those principled standards.\n",
    "replies": 560,
    "retweets": 1101,
    "likes": 4316,
    "tweetId": "1045459508816998400"
  },
  {
    "text": "\n  Senator Lindsay Graham distinguished himself today as the fairest man and the best lawyer in Washington. He voted for Justices Sotormayor and Kagen  on old fashioned principles. I also did. If he is going to vote for Judge Kavanaugh, the Senate all should.\n",
    "replies": 7081,
    "retweets": 14398,
    "likes": 54746,
    "tweetId": "1045458410853081088"
  },
  {
    "text": "\n  President-elect of NCRI, the primary resistance to the murderous regime in Iran.pic.twitter.com/dTfEYCbfc5 – at Sheraton New York Times Square Hotel\n",
    "replies": 800,
    "retweets": 1097,
    "likes": 1548,
    "tweetId": "1043572208554135552"
  },
  {
    "text": "\n  2018 Iran Uprising Summit #FREEIRAN2018 is focused on the uprising in Iran  posing an alternative to the homicidal regime. The regime has announced that the MEK is the only organization that can realistically replace them. The movement is led by Maryam Rajavi, an heroic woman.\n",
    "replies": 548,
    "retweets": 1607,
    "likes": 3799,
    "tweetId": "1043569058241806336"
  },
  {
    "text": "\n  Times article on John Dowd takes my quote out of context. I said if I knew in advance Mueller wouldn’t keep his word , I would not have followed the same strategy. and John would have also. In any event , John’s disclosures make questioning really unnecessary.\n",
    "replies": 558,
    "retweets": 1139,
    "likes": 3869,
    "tweetId": "1042085968243838977"
  },
  {
    "text": "\n  Isn’t Manafort cooperating when he says no collusion. He should get as much credit,maybe more, by sticking to the truth. After all Mueller is seeking justice not political revenge, isn’t he.?\n",
    "replies": 1200,
    "retweets": 3688,
    "likes": 10003,
    "tweetId": "1041360323461230598"
  },
  {
    "text": "\n  Morning shows all ignore clear statement from Manafort team that there is no cooperation against the President and a statement “there was no collusion.” It is pathetic: how biased they are! What’s new?\n",
    "replies": 2039,
    "retweets": 9480,
    "likes": 23478,
    "tweetId": "1041341978452140033"
  },
  {
    "text": "\n  #REALNEWS: Woodward says no evidence of http://collusion.So  does Manafort’s team. Mueller can investigate endlessly and he will find no evidence. The only conspiracy,using criminal means, is the campaign to stop and then remove President Trump.\n",
    "replies": 3975,
    "retweets": 6752,
    "likes": 15817,
    "tweetId": "1041168209074941952"
  },
  {
    "text": "\n  According to sources close to Manafort defense: “The coooeration agree does not involve the Trump campaign....There was no collusion with Russia.” Another road travelled by Mueller. Same conclusion: no evidence of collusion President did nothing wrong.\n",
    "replies": 10229,
    "retweets": 10723,
    "likes": 30293,
    "tweetId": "1040982608170110976"
  },
  {
    "text": "\n  Just met with @Mike_Miller_FL who is a great candidate in Florida CD 7. His opponent voted against major tax reduction. She will raise your taxes. He will support the lowest taxes possible. Support Miller in FL. I do.\n",
    "replies": 690,
    "retweets": 2575,
    "likes": 6808,
    "tweetId": "1040082981187186688"
  },
  {
    "text": "\n  Remember my firefighters and police officers and all first responders who gave their lives to save others on 9/11/01. Today thank God for them and pray for them and their families.\n",
    "replies": 3885,
    "retweets": 15915,
    "likes": 58629,
    "tweetId": "1039521053045936128"
  },
  {
    "text": "\n  Today is the best of times and the worst. The best because of the heroism and the worst because terrorist hatred took so many innocent people. Tragically it continues as Islamic Extremist Terrorism pursues it’s war and cowardly killing of innocents.\n",
    "replies": 293,
    "retweets": 2193,
    "likes": 6789,
    "tweetId": "1039519238480949248"
  },
  {
    "text": "\n  All developments point to no collusion. Papadopoulos testified no knowledge of collusion. Woodward,after exhaustive research, found no evidence. And “anonymous author” makes no such allegation. Why? Because the President did nothing wrong. Time to end it.\n",
    "replies": 4157,
    "retweets": 11042,
    "likes": 27690,
    "tweetId": "1039174763820843009"
  },
  {
    "text": "\n  Mueller is now finished with Papadopoulos. He got 14 days. Wow big case for the Angry Democrats. Sometimes you get more for traffic violations. And again: NO EVIDENCE OF COLLUSION. I think they bankrupted him to flip him. Proud of yourself “liberals.”\n",
    "replies": 3510,
    "retweets": 14383,
    "likes": 35493,
    "tweetId": "1038933542888251392"
  },
  {
    "text": "\n  The elite consider Woodward the best investigative journalist of our times. He exhaustively investigated the President. He has a book of narratives contradicted by many patriots. However, he found no evidence of colluding with Russians. Not even anonymous.\n",
    "replies": 5104,
    "retweets": 9605,
    "likes": 27923,
    "tweetId": "1038546374047014913"
  },
  {
    "text": "\n  The anonymous author of Times op-ed is undermining the decisions of the lawfully elected President. His choice if it’s so bad is to quit and go public. After all what can he do to protect us inside. He doesn’t see everything. What a coward and phony.\n",
    "replies": 1733,
    "retweets": 5647,
    "likes": 16933,
    "tweetId": "1038244144144166912"
  },
  {
    "text": "\n  #REALNEWS: Unemployment below 4%. More jobs than workers. Real wages up. This is result of Trump reduced regulation, lower taxes, pro-business and pro-jobs as a correction for failed  very left wing Obama economy. This makes Deep State even angrier.\n",
    "replies": 1075,
    "retweets": 4501,
    "likes": 11233,
    "tweetId": "1038074912760639489"
  },
  {
    "text": "\n  #REALNEWS: Mayor Emanuel resigns because he can’t protect the people of Chicago from murder like other Mayors can do. Now not another Democratic incompetent like him. An independent professional!\n",
    "replies": 394,
    "retweets": 1002,
    "likes": 2879,
    "tweetId": "1037320054382178304"
  },
  {
    "text": "\n  After the speeches by Senste Democrats maybe we can hear from Judge Kavanaugh who will impress all Americans that he will be a great Justice. No greatness emerging from Senate Democrats so sit back and seethe.\n",
    "replies": 522,
    "retweets": 1618,
    "likes": 5593,
    "tweetId": "1037318571788062720"
  },
  {
    "text": "\n  Joining Generals Matthis and Kelly and John Dowd and Jay Sekulow. His incident  about me entirely false. 20 to 30 witnesses saw it and can say he or his source are liars. Most important for  libel purposes, he never called me. Didn’t want to know truth.\n",
    "replies": 2163,
    "retweets": 8761,
    "likes": 20783,
    "tweetId": "1037315982862311424"
  }
];

export default Rudy;
