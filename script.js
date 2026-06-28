/* =============================================
   FOUNDERPATH — script.js  v4
   ============================================= */
'use strict';

const STATE_VERSION = 4;

// =============================================
// STAGES
// =============================================
const STAGES = [
  { id:1,  name:'The Spark',    icon:'S1',  tagline:'Find your why. Start with a problem that burns.' },
  { id:2,  name:'The Customer', icon:'S2',  tagline:'Know who you serve before you build a single thing.' },
  { id:3,  name:'The Market',   icon:'S3',  tagline:'Size it. Own a corner. Find your unfair advantage.' },
  { id:4,  name:'The Product',  icon:'S4',  tagline:'Ship ugly. Learn fast. Iterate without ego.' },
  { id:5,  name:'The Pitch',    icon:'S5',  tagline:'Sell the story before you sell the product.' },
  { id:6,  name:'The Team',     icon:'S6',  tagline:'Build with the right people or build alone.' },
  { id:7,  name:'The Numbers',  icon:'S7',  tagline:'Profit is the scoreboard. Learn how to read it.' },
  { id:8,  name:'The Growth',   icon:'S8',  tagline:'Scale what works. Cut what does not.' },
  { id:9,  name:'The Crisis',   icon:'S9',  tagline:'Every founder hits the wall. How you respond is everything.' },
  { id:10, name:'The Legacy',   icon:'S10', tagline:'What you leave behind matters more than what you built.' },
];

// =============================================
// QUOTES
// =============================================
const QUOTES = [
  { text:"The way to get started is to quit talking and begin doing.", author:"Walt Disney" },
  { text:"Your most unhappy customers are your greatest source of learning.", author:"Bill Gates" },
  { text:"An entrepreneur is someone who jumps off a cliff and builds a plane on the way down.", author:"Reid Hoffman" },
  { text:"Build something 100 people love, not something 1 million people like.", author:"Paul Graham" },
  { text:"Ideas are easy. Implementation is hard.", author:"Guy Kawasaki" },
  { text:"Done is better than perfect.", author:"Sheryl Sandberg" },
  { text:"Risk comes from not knowing what you are doing.", author:"Warren Buffett" },
  { text:"Make something people want.", author:"Paul Graham" },
  { text:"You do not have to be great to start, but you have to start to be great.", author:"Zig Ziglar" },
  { text:"Vision without execution is hallucination.", author:"Thomas Edison" },
  { text:"The secret of getting ahead is getting started.", author:"Mark Twain" },
  { text:"Fall seven times, stand up eight.", author:"Japanese Proverb" },
  { text:"The entrepreneur always searches for change, responds to it, and exploits it as an opportunity.", author:"Peter Drucker" },
  { text:"If you are not embarrassed by the first version of your product, you have launched too late.", author:"Reid Hoffman" },
  { text:"Chase the vision, not the money; the money will end up following you.", author:"Tony Hsieh" },
  { text:"The best marketing strategy ever: care.", author:"Gary Vaynerchuk" },
  { text:"Solve the customer's problem. Everything else is noise.", author:"Adapted" },
  { text:"Move fast. Hire slowly. Fire quickly. Ship constantly.", author:"Silicon Valley Folklore" },
  { text:"The biggest risk is not taking any risk.", author:"Mark Zuckerberg" },
  { text:"Simple can be harder than complex.", author:"Steve Jobs" },
];

// =============================================
// MARKET TICKER
// =============================================
// MARKET TICKER — 130+ items, day-of-week themed
const TICKER_BASE = [
  "Series A activity up 34% — early-stage investors are hungry for differentiated founders",
  "Remote-first startups report 28% higher talent retention than office-only rivals",
  "AI infrastructure costs dropped 60% year-over-year — your burn rate assumptions are already outdated",
  "Average seed round takes 4.2 months to close — start investor conversations before you need the money",
  "Consumer spending tightens — B2B SaaS surges as businesses cut costs and seek efficiency tools",
  "Churn rate across SaaS sector rises 12% — retention is the new growth strategy",
  "Venture capital dry powder at $180B globally — capital available for founders who tell the right story",
  "Bootstrap founders outperform VC-backed peers in profitability 3-to-1 over 5 years",
  "CAC rising 22% across all digital channels — organic reach and word of mouth dominate again",
  "Product-led growth companies growing 2x faster than sales-led equivalents this cycle",
  "Top engineering talent choosing startups over FAANG for equity upside and mission alignment",
  "Rule of 40 becoming the investor benchmark — growth rate plus margin must hit 40%+",
  "Gross margins under 65% signal a services business wearing software clothing — investors notice",
  "Customer success prevents $3 in churn for every $1 spent — yet most startups still underfund it",
  "Founders who talk to customers weekly ship 40% faster than those who rely on product teams alone",
  "B2B NPS scores declining — customers have more options and higher expectations than ever before",
  "Enterprise procurement cycles extending — plan 9 months for a deal that once closed in 3",
  "Series B valuations normalizing — 2021 multiples are gone and they are not returning",
  "Angel networks more active at pre-seed — institutional rounds starting later in the cycle",
  "Cohort retention now the primary metric investors scrutinize in diligence — month 12 matters most",
  "Burn multiple benchmark: spending over $1.50 to generate $1 of ARR is a Series A red flag",
  "NRR above 110% signals top-quartile SaaS — below 80% means existing customers are quietly leaving",
  "Open source tooling surging — build-vs-buy decisions need quarterly recalibration",
  "Technical debt compounds silently — best engineering leaders allocate 20% of sprints to it",
  "Onboarding is your most important product feature — time-to-first-value defines whether users stay",
];
const TICKER_DOW = {
  1: ["Monday market open — investor deal flow peaks early in the week","Early-week momentum compounds — founders who ship Mondays ship more overall","Runway review Monday: check burn rate before anything else","The best time to start investor outreach was last month — the second best is right now","Founders who schedule their hardest task first on Monday hit weekly OKRs 3x more often","Sales teams that prospect Monday morning close 22% more deals than those who start Tuesday","Weekly team alignment beats monthly strategy sessions — start this week with shared context","Market Sim note: the best founders this week chose long-term over short-term","Execution week: close the tabs you are not acting on — focus is a competitive advantage","Your most important decision this week will not feel important when you make it — pay attention"],
  2: ["Tuesdays: data teams report highest query volume — your competitors are in their spreadsheets","Vanity metrics trap: MAU without retention tells you nothing — look at D7 and D30 cohorts","ARR vs MRR: founders who report ARR on monthly contracts mislead themselves and investors","Unit economics checkpoint: if LTV:CAC is under 2:1 you are losing the economics game","Cohort analysis day — the best founders know their cohorts by revenue, not just by signup date","Burn efficiency: top-quartile Series A companies burned under $500K per point of ARR","Payback period benchmark: under 12 months is excellent — over 24 months is a structural warning","Churn finding: customers who complete onboarding in week one churn at 60% the rate of others","Product analytics: if you cannot name your top three retention drivers, you are guessing","Average contract value trending up — the market rewards depth over breadth in customer relationships"],
  3: ["Wednesday build day — the best products this year were built by founders who said no to 90% of requests","MVP reminder: the fastest path to learning is a product in hands, not a deck in an inbox","Feature creep alert: 40% of features in the average B2B product are used by under 5% of users","UX insight: top reason users churn is not price — it is time-to-value exceeding their patience","Shipping cadence: teams that ship weekly grow twice as fast as teams on monthly release cycles","Design system ROI: founders who skip it spend 40% more on engineering as the product matures","API-first architecture opens 3x more integration partnership opportunities downstream","Build what users do, not what users say — behavioral data reveals the product inside your data","Onboarding is the highest-leverage product investment — the path from signup to value defines everything","Technical note: every feature is a contract with the user — break it and you pay in trust"],
  4: ["Thursday: most term sheets are issued Thursday and Friday — investor meetings peak midweek","Reference check reality: 60% of investors speak to customers before issuing a Series A+ term sheet","SAFE vs priced round: 74% of seed rounds use SAFEs — they close 3x faster than priced equity","Investor update cadence: founders who send monthly updates raise their next round 40% faster","Term sheet red flags: full ratchet anti-dilution and no-shop clauses without a clear close timeline","Cap table hygiene: investors spend 30 minutes reviewing your cap table before the first call","Lead investor logic: without a lead a round almost never closes — focus energy on finding the lead","Due diligence prep: 80% of diligence questions are predictable — build the data room before raising","Board composition: the best boards have one operator, one financial mind, one deep domain expert","Valuation anchoring: the first number named in a fundraise negotiation anchors the entire conversation"],
  5: ["Friday people report: turnover highest on Friday afternoons — check in with your team today","Culture is what you tolerate, not what you preach — your team watches every leadership call","Hiring velocity trap: startups that hire too fast spend 30% of the next phase managing out wrong hires","Reference checks save startups: 40% of bad hires caught with three structured references","Compensation transparency: teams with open salary bands report 2x higher satisfaction","Management debt accumulates silently — the co-founder conversation avoided is costing you daily","Diversity in founding teams correlates with 30% higher innovation output — build with intention","Employees who receive weekly structured feedback are 3x more likely to stay after 18 months","The hiring bar: every hire should raise your average — the moment you hire below it, you lower it permanently","Remote team health: async-first companies with documented processes outperform meeting-heavy teams"],
  6: ["Weekend reading: the companies that matter were built by founders who thought in decades, not quarters","Legacy check: if your company disappeared tomorrow, which customers would feel it most — and why","Long-term compounding: brand trust built slowly is impossible to replicate with money once competitors catch up","Mission clarity: companies with clear purpose beyond profit outperform pure profit-focused peers by 3x over 10 years","Distribution moat: the hardest asset to replicate is not your technology — it is your distribution relationship","Succession thinking: the best companies outlive their founders — build systems, not dependence on your presence","Strategic patience: the best pivots came after 18+ months of deep market observation","Patent strategy: 60% of startup patents serve as critical defensive insurance even if never used offensively","Stakeholder balance: companies balancing investor, employee, and customer interests outperform over 15 years","Rest is a competitive advantage — diminishing returns after 55 hours per week are well-documented"],
  0: ["Sunday strategic review: founders who reflect retrospectively make 25% better decisions the next week","Vision drift check: does your current roadmap still solve the original problem you set out to fix?","Customer empathy Sunday: read your last 20 support tickets before planning next week — it changes priorities","Energy management: top founders block one full day per week for strategic thinking — the work is in the thinking","Advisor audit: if you have not spoken to your most valuable advisor in 60 days, that relationship is fading","Investor narrative: practice your company story in three sentences — if you cannot, your strategy is unclear","Mental model review: the frameworks you use to decide matter as much as the decisions themselves","Competitor landscape: check what rivals shipped this week — then ignore it and build your own vision","Board prep insight: the best board meetings happen when founders over-communicate context before, not during","Rest is a competitive advantage — diminishing returns after 55 hours per week are well-documented"],
};
const TICKER_WARN_ITEMS = [
  "RECESSION SIGNAL: Consumer confidence drops to three-year low — tighten runway and revisit hiring plan immediately",
  "COMPETITOR ALERT: A well-funded rival just launched in your exact segment with aggressive below-cost pricing",
  "REGULATORY SHIFT: New data privacy legislation passed — compliance costs rising 40% in affected sectors",
  "MARKET CORRECTION: Late-stage valuations dropping 35% — fundraising windows compressing across all categories",
  "TALENT CRISIS: Senior engineering attrition hits record high as major tech firms resume aggressive RSU packages",
  "INFRASTRUCTURE RISK: Major cloud outage exposes dependency risk — 200+ startups affected by single provider failure",
  "MACRO SHIFT: Interest rates rising again — venture debt more expensive, burn rate recalibration required now",
  "CATEGORY THREAT: Tech giant announces free version of core functionality competing directly in your market",
];
let lastWarningTime = 0;
let lastSeenWarning = '';

// =============================================
// BUSINESS DICTIONARY (300+ terms)
// =============================================
const DICTIONARY = [
  // Startup Fundamentals
  { term:'MVP', cat:'Startup', def:'Minimum Viable Product — the simplest version of a product that allows you to validate a core assumption with real users. Not the worst version; the most learning-efficient version.', example:'Dropbox launched an MVP as a video demo before writing a single line of the product.' },
  { term:'PMF', cat:'Startup', def:'Product-Market Fit — the degree to which a product satisfies a strong market demand. Sean Ellis test: 40%+ of users say they would be "very disappointed" if the product disappeared.', example:'Slack knew it had PMF when users were begging to pay for it before it was officially for sale.' },
  { term:'Pivot', cat:'Startup', def:'A structured course correction to test a fundamentally new hypothesis about the product, business model, or growth engine — not a desperate reaction to failure.', example:'Instagram pivoted from a check-in app called Burbn to a pure photo-sharing product.' },
  { term:'Runway', cat:'Startup', def:'How many months your company can operate before running out of cash, calculated by dividing current cash reserves by monthly net burn rate.', example:'With $1.2M in the bank and a $100K monthly burn, you have 12 months of runway.' },
  { term:'Burn Rate', cat:'Finance', def:'The rate at which a company spends its cash reserves. Gross burn = total spend. Net burn = spend minus revenue. Net burn is what determines your runway.', example:'A team of 6 in San Francisco might have a $180K monthly gross burn before any revenue.' },
  { term:'Bootstrap', cat:'Startup', def:'Building a company using only personal funds or operating revenue — without external investment. Forces extreme capital discipline and customer obsession.', example:'Basecamp (formerly 37signals) bootstrapped to profitability and has never taken outside funding.' },
  { term:'Founder-Market Fit', cat:'Startup', def:'The degree to which a founder is uniquely positioned to solve a specific problem — by virtue of experience, obsession, relationships, or insight that competitors cannot easily replicate.', example:'A former ICU nurse founding a medical records software company has strong founder-market fit.' },
  { term:'Problem-Solution Fit', cat:'Startup', def:'Validation that a real, painful problem exists and that your proposed solution meaningfully addresses it — before building at scale.', example:'You have problem-solution fit when customers describe your solution as a relief, not a nice-to-have.' },
  { term:'Zero to One', cat:'Startup', def:'Peter Thiel\'s concept — creating something genuinely new (0 to 1) rather than copying and improving what already exists (1 to n). True innovation creates monopolies.', example:'Google did not just build a better search engine — it created a categorically different one.' },
  { term:'Defensibility', cat:'Startup', def:'The set of structural advantages that make it hard for competitors to displace you — including network effects, switching costs, proprietary data, brand, and regulatory moats.', example:'Airbnb\'s two-sided network of hosts and guests is its core defensibility.' },
  { term:'Moat', cat:'Startup', def:'Warren Buffett\'s term for a durable competitive advantage that protects a company\'s profits from competition — like a castle moat protecting against attack.', example:'Apple\'s moat is the combination of brand, hardware-software integration, and developer ecosystem.' },
  { term:'Traction', cat:'Startup', def:'Quantitative evidence that your product or business model is working — measured by revenue growth, user growth, engagement, or retention depending on stage.', example:'Showing 20% month-over-month revenue growth is traction; 100 signups is not.' },
  { term:'Iteration', cat:'Startup', def:'The disciplined process of releasing a version, measuring results, learning what users actually do, and improving the next version based on data — not assumptions.', example:'Spotify iterates on its recommendation algorithm thousands of times a year based on listening data.' },
  { term:'Lean Startup', cat:'Startup', def:'Eric Ries\'s methodology: build-measure-learn cycles using minimum viable experiments to reduce waste and increase learning speed. Designed to work under conditions of extreme uncertainty.', example:'Instead of building a full marketplace, run a concierge MVP: manually do what the software will automate.' },
  { term:'Discovery Phase', cat:'Startup', def:'The pre-product stage focused entirely on understanding customer problems, context, and behavior through interviews and observation — before any building begins.', example:'Airbnb founders visited hosts in person, photographed listings, and lived with users during discovery.' },

  // VC & Fundraising
  { term:'Term Sheet', cat:'VC', def:'A non-binding agreement outlining the key terms and conditions of an investment deal — valuation, ownership percentage, rights, and governance — before final legal documentation.', example:'Receiving a term sheet from Sequoia doesn\'t mean the deal is done; legal due diligence still follows.' },
  { term:'Pre-Money Valuation', cat:'VC', def:'The valuation of a company before new investment is added. If a company raises $2M at a $8M pre-money valuation, the post-money valuation is $10M and investors own 20%.', example:'Negotiating pre-money valuation is where founders most commonly give away too much equity.' },
  { term:'Post-Money Valuation', cat:'VC', def:'The company\'s valuation immediately after an investment is made. Post-money = pre-money valuation + new investment amount.', example:'$8M pre-money + $2M investment = $10M post-money valuation.' },
  { term:'Dilution', cat:'VC', def:'The reduction in existing shareholders\' ownership percentage when new shares are issued. Every funding round dilutes founders — but a small % of a big company beats 100% of nothing.', example:'Raising $1M for 10% dilutes founders from 90% to 81% if they held 90% before.' },
  { term:'Cap Table', cat:'VC', def:'Capitalization table — a spreadsheet listing all shareholders, their ownership percentages, equity types, and the value of their holdings at various valuations.', example:'A messy cap table with too many small investors can scare off future lead investors.' },
  { term:'SAFE', cat:'VC', def:'Simple Agreement for Future Equity — a Y Combinator-invented instrument that lets investors put money in now and receive equity at a future priced round, without setting a valuation today.', example:'Most YC companies raise their pre-seed using SAFEs because of their simplicity and speed.' },
  { term:'Convertible Note', cat:'VC', def:'A form of short-term debt that converts into equity — typically at the next priced round — with a discount or valuation cap as compensation for early investment risk.', example:'Early angels often use convertible notes with a 20% discount to the next round\'s price.' },
  { term:'Lead Investor', cat:'VC', def:'The investor who takes the largest stake in a round, negotiates the term sheet, and often takes a board seat — setting the terms all other investors follow.', example:'Without a lead investor, a funding round rarely closes because other investors wait for someone else to go first.' },
  { term:'Due Diligence', cat:'VC', def:'The investigation process a potential investor conducts before completing an investment — examining financials, legal documents, customer references, technology, and team backgrounds.', example:'A Series A typically involves 4-8 weeks of due diligence before a wire transfer.' },
  { term:'Series A / B / C', cat:'VC', def:'Sequential rounds of venture capital financing. Seed funds the idea. Series A funds proof of model. Series B funds scale. Series C+ funds acceleration or pre-IPO growth.', example:'Stripe raised its Series A in 2012 at a $100M valuation; it raised Series H at a $95B valuation in 2021.' },
  { term:'Valuation Cap', cat:'VC', def:'On a SAFE or convertible note, the maximum valuation at which the investment converts to equity — protecting early investors from high valuations at later priced rounds.', example:'An investor with a $5M cap converts at $5M even if the Series A prices the company at $20M.' },
  { term:'Pro Rata Rights', cat:'VC', def:'The right of existing investors to participate in future funding rounds to maintain their ownership percentage against dilution.', example:'An investor with 10% pro rata rights can invest enough in the next round to stay at 10%.' },
  { term:'Board Seat', cat:'VC', def:'A position on the company\'s board of directors, typically negotiated as part of a lead investment. Board members have fiduciary duties and vote on key company decisions.', example:'Most Series A deals give the lead investor at least one board seat in exchange for the investment.' },
  { term:'Anti-Dilution', cat:'VC', def:'A protective provision that adjusts an investor\'s conversion ratio if the company later issues shares at a lower price — protecting them from down rounds.', example:'Full ratchet anti-dilution is the most investor-friendly (and founder-punishing) form.' },
  { term:'Liquidation Preference', cat:'VC', def:'In an exit, the right of preferred stockholders (investors) to receive their investment back — and sometimes a multiple of it — before common stockholders (founders, employees) get anything.', example:'A 2x liquidation preference means VCs get twice their money back before founders see any exit proceeds.' },
  { term:'Down Round', cat:'VC', def:'A funding round in which the company\'s valuation is lower than in a previous round — diluting existing shareholders and often indicating business difficulty.', example:'Klarna\'s 2022 down round from $46B to $6.7B triggered significant employee equity disappointment.' },
  { term:'GP / LP', cat:'VC', def:'General Partner (GP) manages the VC fund and makes investment decisions. Limited Partner (LP) provides capital to the fund (pension funds, endowments, family offices) and has no active management role.', example:'A16Z is the GP; the university endowments that invested in their fund are LPs.' },
  { term:'Carry / Carried Interest', cat:'VC', def:'The share of investment profits that GPs receive as compensation — typically 20% of gains above the invested capital. The main incentive structure for VC fund managers.', example:'If a $100M fund returns $400M, the GP earns 20% of the $300M profit = $60M in carry.' },
  { term:'Fund of Funds', cat:'VC', def:'An investment fund that invests in other investment funds rather than directly in companies — providing LPs diversified VC exposure without direct fund manager relationships.', example:'University endowments often invest in VC through funds of funds for diversification and access.' },
  { term:'Secondary Market', cat:'VC', def:'A market where existing investors or shareholders sell their stakes to other investors before an IPO or acquisition — providing earlier liquidity.', example:'Employee options at a well-funded startup can sometimes be sold on platforms like CartaX or Forge.' },
  { term:'Unicorn', cat:'VC', def:'A private company valued at $1 billion or more. A decacorn exceeds $10B. The term was coined by Aileen Lee of Cowboy Ventures in 2013 when there were only 39 of them globally.', example:'In 2023 there are 1,200+ unicorns globally — the term has lost some of its rarity cachet.' },

  // Finance & Metrics
  { term:'CAC', cat:'Finance', def:'Customer Acquisition Cost — the total cost to acquire one new paying customer, including all marketing and sales expenses divided by new customers acquired in a period.', example:'If you spend $50K on marketing and sales and acquire 500 customers, your CAC is $100.' },
  { term:'LTV', cat:'Finance', def:'Lifetime Value — the total net profit a company expects to earn from a customer over the entire duration of the relationship.', example:'A $20/month SaaS customer with 24-month average retention and 70% gross margin has an LTV of $336.' },
  { term:'LTV:CAC Ratio', cat:'Finance', def:'The ratio of customer lifetime value to acquisition cost — a fundamental SaaS health metric. 3:1 is generally considered healthy; below 1:1 means you lose money on every customer.', example:'LTV of $1,200 and CAC of $400 yields a 3:1 ratio — solid but worth improving.' },
  { term:'ARR', cat:'Finance', def:'Annual Recurring Revenue — the annualized value of subscription revenue, excluding one-time fees. The primary top-line metric for SaaS companies.', example:'If you have 200 customers paying $500/month, your MRR is $100K and your ARR is $1.2M.' },
  { term:'MRR', cat:'Finance', def:'Monthly Recurring Revenue — the predictable, recurring revenue generated each month from active subscriptions. The heartbeat metric of any SaaS business.', example:'Track new MRR, expansion MRR, churned MRR, and net new MRR separately to understand your growth engine.' },
  { term:'Churn Rate', cat:'Finance', def:'The percentage of customers or revenue lost in a given period. Customer churn measures accounts; revenue churn measures dollars. Net revenue churn accounts for expansion.', example:'5% monthly churn means you lose half your customers every 14 months — far more damaging than it sounds.' },
  { term:'Gross Margin', cat:'Finance', def:'Revenue minus cost of goods sold (COGS), expressed as a percentage. SaaS companies typically target 70-80%+ gross margins; hardware companies average 30-50%.', example:'$1M revenue with $200K COGS yields 80% gross margin — excellent for a SaaS business.' },
  { term:'EBITDA', cat:'Finance', def:'Earnings Before Interest, Taxes, Depreciation, and Amortization — a proxy for operating cash flow, often used in acquisition valuations.', example:'A company with $10M revenue and $3M EBITDA is generating real operating cash, which makes it attractive for acquisition.' },
  { term:'Unit Economics', cat:'Finance', def:'The direct revenues and costs associated with a single unit of the business — typically a customer. Positive unit economics means each customer is profitable on its own.', example:'Negative unit economics (spending more to acquire customers than they return) is only sustainable if LTV improves dramatically.' },
  { term:'Cash Flow', cat:'Finance', def:'The movement of money in and out of the business. Positive cash flow means more is coming in than going out. A company can be profitable on paper but cash-flow negative.', example:'Many fast-growing SaaS companies are cash-flow negative early despite rising revenue due to sales team costs.' },
  { term:'COGS', cat:'Finance', def:'Cost of Goods Sold — the direct costs to deliver your product or service. For SaaS: hosting, support, third-party software. For hardware: manufacturing, shipping, components.', example:'Keeping COGS low is critical for SaaS — high COGS destroys the gross margin advantages of software.' },
  { term:'Net Revenue Retention', cat:'Finance', def:'NRR — the percentage of recurring revenue retained from existing customers over a period, including expansion and contraction but excluding new customers. 100%+ NRR means existing customers grow.', example:'Snowflake\'s 150%+ NRR means its existing customers spend 50% more each year — a powerful growth engine.' },
  { term:'Payback Period', cat:'Finance', def:'The time it takes to recover the cost of customer acquisition from the gross margin generated by that customer. Under 12 months is ideal for most SaaS businesses.', example:'CAC of $600 and $50 monthly gross margin per customer = 12-month payback period.' },
  { term:'Runway Extension', cat:'Finance', def:'Strategies to extend how long your cash lasts without raising new money — including cutting costs, increasing revenue, collecting receivables faster, or negotiating better payment terms.', example:'When Airbnb nearly ran out of money during the 2008 financial crisis, it sold novelty cereal boxes to extend runway.' },
  { term:'P&L', cat:'Finance', def:'Profit and Loss statement — a financial report showing revenue, costs, and profit/loss over a period. Also called an income statement. Every founder must understand this.', example:'A great P&L story: revenue growing faster than expenses, gross margins expanding, path to profitability visible.' },
  { term:'Cap Efficiency', cat:'Finance', def:'How efficiently a company converts invested capital into ARR growth. A capital-efficient company reaches $1 of ARR for every $1-2 spent; less efficient companies need $5-10.', example:'Companies with high capital efficiency raise less, dilute less, and build more durable businesses.' },
  { term:'Rule of 40', cat:'Finance', def:'A benchmark for SaaS health: Revenue Growth Rate + Profit Margin should equal or exceed 40%. Balances growth and profitability. 60%+ signals an excellent business.', example:'50% growth + -5% margin = 45, which beats the rule. 20% growth + 25% margin = 45 also beats it.' },
  { term:'Cohort Analysis', cat:'Finance', def:'Analyzing groups of customers who started at the same time to understand retention, revenue evolution, and behavior patterns — revealing insights hidden in aggregate metrics.', example:'A cohort analysis might reveal that customers acquired in Q4 churn at 2x the rate of Q2 cohorts.' },

  // Marketing
  { term:'Conversion Rate', cat:'Marketing', def:'The percentage of visitors or leads who take a desired action — signing up, purchasing, or upgrading. Small improvements in conversion compound into massive revenue gains.', example:'Improving homepage conversion from 2% to 3% increases leads by 50% with no more traffic spend.' },
  { term:'Funnel', cat:'Marketing', def:'The customer journey from awareness to purchase, visualized as a funnel because the number of people shrinks at each stage. Top-of-funnel is awareness; bottom is conversion.', example:'TOFU: 10,000 blog readers → MOFU: 500 trial signups → BOFU: 50 paid customers.' },
  { term:'NPS', cat:'Marketing', def:'Net Promoter Score — a single-question metric: "How likely are you to recommend us?" Scores 9-10 are Promoters; 0-6 are Detractors. NPS = % Promoters - % Detractors.', example:'Apple\'s NPS is typically above 70; most B2B SaaS companies target 40+.' },
  { term:'SEO', cat:'Marketing', def:'Search Engine Optimization — improving a website\'s visibility in organic (unpaid) search results through content, technical optimization, and backlinks.', example:'A well-optimized blog can generate thousands of qualified leads per month with zero ad spend.' },
  { term:'PLG', cat:'Marketing', def:'Product-Led Growth — a go-to-market strategy where the product itself is the primary driver of acquisition, conversion, and expansion. Users experience value before talking to sales.', example:'Slack, Figma, and Notion all grew primarily through PLG — users adopted the product, then companies paid for it.' },
  { term:'Virality', cat:'Marketing', def:'Organic growth driven by existing users who naturally share the product with others. Viral coefficient K > 1 means each user brings in more than one new user on average.', example:'Dropbox\'s referral program (extra storage for referrals) achieved viral growth at near-zero CAC.' },
  { term:'CAC Payback', cat:'Marketing', def:'The number of months required to recover the cost of acquiring a customer through gross margin contribution. A key measure of go-to-market efficiency.', example:'SaaS benchmark: under 12 months is excellent; over 24 months is a warning sign.' },
  { term:'Landing Page', cat:'Marketing', def:'A standalone web page designed to convert visitors to a specific action — signup, purchase, demo request — with minimal distractions and a focused value proposition.', example:'Basecamp\'s landing page consistently outperforms competitors by leading with customer outcomes, not features.' },
  { term:'A/B Testing', cat:'Marketing', def:'A controlled experiment comparing two versions of a variable (headline, button color, pricing page) to determine which performs better with statistical significance.', example:'Changing a CTA from "Start Free Trial" to "Get Started Free" can increase conversions 10-25%.' },
  { term:'Retention Rate', cat:'Marketing', def:'The percentage of customers who continue using or paying for a product in a given period. The inverse of churn rate. High retention is the foundation of compound growth.', example:'D30 retention of 40% for a consumer app is exceptional; most apps retain fewer than 10% at day 30.' },
  { term:'ARPU', cat:'Marketing', def:'Average Revenue Per User — total revenue divided by number of active users or accounts. Used to track monetization efficiency over time.', example:'Spotify\'s ARPU increased by reducing free tier features and increasing premium conversion rates.' },
  { term:'Content Marketing', cat:'Marketing', def:'Creating and distributing valuable content (blog posts, podcasts, videos) to attract and retain a clearly defined audience — and ultimately drive profitable customer action.', example:'HubSpot\'s content marketing generates 60%+ of its leads from organic traffic — reducing CAC dramatically.' },
  { term:'Brand Voice', cat:'Marketing', def:'The consistent personality and tone a company uses across all communications — how it sounds to customers. Not what you say but how you say it.', example:'Mailchimp\'s brand voice is warm and slightly quirky; Stripe\'s is precise and developer-trusted.' },
  { term:'OKR', cat:'Management', def:'Objectives and Key Results — a goal-setting framework where an Objective (qualitative goal) is paired with Key Results (measurable milestones). Made famous by Google.', example:'Objective: Become the top developer tool in our category. KR: Reach 10K GitHub stars. KR: 90% API uptime.' },
  { term:'KPI', cat:'Management', def:'Key Performance Indicator — a measurable value that demonstrates how effectively a company is achieving key objectives. Not all metrics are KPIs; KPIs are the ones that actually drive decisions.', example:'For a SaaS company, core KPIs are typically MRR, churn rate, CAC, NPS, and gross margin.' },

  // Product
  { term:'User Story', cat:'Product', def:'A short description of a feature from the user\'s perspective: "As a [user type], I want to [action] so that [benefit]." Keeps product decisions grounded in user need.', example:'"As a team manager, I want to see task completion rates by person so that I can identify blockers."' },
  { term:'Roadmap', cat:'Product', def:'A high-level plan communicating where a product is headed — prioritized by customer value, strategic alignment, and feasibility. Not a feature list; a narrative of bets.', example:'The best roadmaps communicate themes and outcomes, not a list of features with delivery dates.' },
  { term:'Sprint', cat:'Product', def:'A fixed-length development cycle (usually 1-2 weeks) in agile methodology where teams commit to completing a specific set of work. Named after running fast for a short distance.', example:'Shipping every sprint, even small improvements, maintains user trust and team momentum.' },
  { term:'Backlog', cat:'Product', def:'A prioritized list of features, bug fixes, and improvements waiting to be built. A well-managed backlog separates "nice to have" from "must have" ruthlessly.', example:'A bloated backlog is usually a sign of a product team that cannot say no. Prune it quarterly.' },
  { term:'Agile', cat:'Product', def:'An iterative approach to software development emphasizing collaboration, flexibility, and customer feedback over rigid planning. A philosophy, not a methodology.', example:'Agile done well: shipping weekly. Agile done badly: endless standups with no actual shipping.' },
  { term:'Feature Creep', cat:'Product', def:'The gradual, uncontrolled expansion of features beyond the original scope — driven by requests, competition, or internal pressure. The #1 killer of product focus.', example:'The best product leaders say no to 90% of feature requests. Apple\'s product meetings are famous for removing features.' },
  { term:'UX', cat:'Product', def:'User Experience — the overall experience a person has when using a product, including ease of use, emotional response, efficiency, and satisfaction. Not just UI; the entire interaction.', example:'Great UX means users accomplish their goal without noticing the interface.' },
  { term:'DAU / MAU', cat:'Product', def:'Daily Active Users / Monthly Active Users — engagement metrics showing how many users interact with a product in a given day or month. DAU/MAU ratio measures stickiness.', example:'A DAU/MAU ratio above 50% (used daily by most monthly users) indicates a very sticky product.' },
  { term:'Technical Debt', cat:'Product', def:'The implied future cost of choosing a quick solution now instead of a better, longer approach. Like financial debt — sometimes worth taking on, always accruing interest.', example:'Moving fast and shipping dirty code creates technical debt that slows future development by 2-5x.' },
  { term:'API', cat:'Product', def:'Application Programming Interface — a set of rules allowing different software applications to communicate. APIs are how modern SaaS companies create ecosystems and unlock distribution.', example:'Stripe\'s famous developer-friendly API was the primary reason it won market share over legacy payment processors.' },
  { term:'North Star Metric', cat:'Product', def:'The single metric that best captures the core value your product delivers to customers — and that, if maximized, drives all other important metrics as a consequence.', example:'Airbnb\'s North Star is nights booked. Spotify\'s is time listened. Slack\'s is messages sent within a team.' },

  // Legal
  { term:'IP', cat:'Legal', def:'Intellectual Property — creations of the mind (inventions, art, trademarks, trade secrets) protected by law. For startups, IP strategy often determines defensibility.', example:'Stripe\'s core IP is not its code — it is the developer trust, documentation quality, and brand.' },
  { term:'NDA', cat:'Legal', def:'Non-Disclosure Agreement — a contract in which parties agree to keep specified information confidential. Most investors do not sign NDAs for early-stage pitches.', example:'Asking a VC to sign an NDA before a first meeting signals inexperience. The idea is not the asset; execution is.' },
  { term:'Vesting', cat:'Legal', def:'The process by which founders and employees earn their equity over time, typically over 4 years with a 1-year cliff. Protects the company if someone leaves early.', example:'Standard vesting: 25% after 1 year (cliff), then 1/48 per month for 3 more years.' },
  { term:'Cliff', cat:'Legal', def:'The minimum time before any equity vests. If you leave before the cliff, you receive nothing. After the cliff, vesting typically continues monthly.', example:'A 1-year cliff means a co-founder who leaves after 11 months receives no equity whatsoever.' },
  { term:'Option Pool', cat:'Legal', def:'Shares set aside for future employees, often 10-20% of total shares. Investors typically require an option pool be established before (not after) funding — which dilutes founders.', example:'Negotiating the option pool before versus after a round can mean a 5-10% difference in founder ownership.' },
  { term:'Equity', cat:'Legal', def:'Ownership stake in a company, represented by shares. Founders, investors, and employees all hold equity. The value of equity depends entirely on whether the company creates value.', example:'0.1% equity in a $10B company is worth $10M. 5% of a $0 company is worth nothing.' },
  { term:'Articles of Incorporation', cat:'Legal', def:'The legal document filed with a state government to create a corporation, specifying its name, structure, purpose, and authorized shares.', example:'Delaware C-Corp is the standard US structure for venture-backed startups due to investor familiarity.' },
  { term:'Delaware C-Corp', cat:'Legal', def:'The dominant corporate structure for US venture-backed startups — incorporated in Delaware for its investor-friendly corporate law, even if the company operates elsewhere.', example:'Most VCs require Delaware C-Corp structure before investing. Set it up early; retrofitting is expensive.' },
  { term:'409A Valuation', cat:'Legal', def:'An independent appraisal of a private company\'s fair market value, required by the IRS for setting employee stock option exercise prices. Legally required in the US.', example:'Companies must update their 409A valuation periodically and after each funding round to comply with IRS rules.' },
  { term:'Due Diligence', cat:'Legal', def:'The investigation process before completing a transaction — reviewing legal documents, contracts, IP ownership, employment agreements, and cap table for any problems.', example:'A messy cap table, missing IP assignments, or unpaid taxes discovered in due diligence can kill a deal.' },
  { term:'GDPR', cat:'Legal', def:'General Data Protection Regulation — European Union privacy law that governs how companies collect, store, and use personal data of EU citizens. Non-compliance fines can reach 4% of global revenue.', example:'Any startup collecting email addresses from EU users must comply with GDPR, regardless of where you are incorporated.' },
  { term:'CCPA', cat:'Legal', def:'California Consumer Privacy Act — California\'s privacy law giving consumers rights over their personal data. Often used as a baseline privacy standard even outside California.', example:'Many startups implement CCPA compliance as their default privacy framework to cover all US users.' },

  // Growth & Operations
  { term:'Flywheel', cat:'Growth', def:'A self-reinforcing growth loop where each part of the system accelerates the next — coined by Jim Collins. Once momentum builds, it becomes hard to stop.', example:'Amazon\'s flywheel: more customers → more sellers → more products → better prices → more customers.' },
  { term:'Network Effect', cat:'Growth', def:'A phenomenon where a product or service becomes more valuable as more people use it. The most durable competitive moat in technology businesses.', example:'Facebook\'s network effect: more users → more connections → more reasons for new users to join.' },
  { term:'Growth Hacking', cat:'Growth', def:'Using rapid, low-cost experiments across marketing, product, and distribution to find scalable growth. A mindset combining creativity and analytical rigor.', example:'Hotmail\'s "Get your free email at Hotmail" footer in every sent email was one of the first viral growth hacks.' },
  { term:'Go-to-Market', cat:'Growth', def:'GTM — the strategy for how a company reaches its target customers and delivers its unique value proposition. Includes channel, positioning, pricing, and sales motion.', example:'Enterprise GTM typically means sales-led outreach. PLG GTM means the product sells itself.' },
  { term:'Channel', cat:'Growth', def:'The method through which customers discover and purchase a product. Direct, partner, marketplace, content, paid, and community are all channels. Finding the right channel is everything.', example:'Dollar Shave Club used viral video as its primary channel — a $4,500 video generated $12,000 in orders in 48 hours.' },
  { term:'Scalability', cat:'Growth', def:'The ability of a business to grow revenue faster than its costs — serving more customers without a proportional increase in resources. Software is inherently more scalable than services.', example:'A SaaS product can serve its 10,000th customer at near-zero marginal cost; a consulting firm cannot.' },
  { term:'TAM', cat:'Growth', def:'Total Addressable Market — the total revenue opportunity available if your company achieved 100% market share. Used to justify ambition to investors, not to set realistic targets.', example:'"If we capture 1% of a $10B TAM, we\'re a $100M company" — classic, often oversimplified investor pitch logic.' },
  { term:'SAM', cat:'Growth', def:'Serviceable Addressable Market — the portion of the TAM that your business model and product can realistically serve given current capabilities and geography.', example:'Global restaurant software is a huge TAM, but your SAM might be fine dining restaurants in North America.' },
  { term:'SOM', cat:'Growth', def:'Serviceable Obtainable Market — the realistic share of the SAM your company can capture in the near term. The most credible and actionable market size number.', example:'VCs care most about SOM — not whether the market is big, but whether your plan to own a piece of it is real.' },
  { term:'Product-Market Expansion', cat:'Growth', def:'Growing a business by entering new markets with existing products, creating new products for existing markets, or both — Ansoff Matrix thinking applied to startup growth.', example:'Slack expanded from a tool for tech companies to enterprises across all industries — same product, new markets.' },
  { term:'Retention Loop', cat:'Growth', def:'The features, habits, and notifications that keep users coming back to a product consistently — building the behavior that makes churn less likely over time.', example:'Duolingo\'s streak system is a powerful retention loop — breaking a streak feels costly, so users return daily.' },
  { term:'Referral Program', cat:'Growth', def:'A structured incentive for existing customers to refer new customers — turning happy users into a distribution channel. Only works when the core product is worth recommending.', example:'Dropbox\'s referral program drove 3,900% growth in 15 months by offering mutual storage bonuses.' },
  { term:'Sales Cycle', cat:'Growth', def:'The time from initial contact with a prospect to closing a deal. Enterprise sales cycles can be 6-18 months; self-serve PLG can close in minutes. Length determines cash flow requirements.', example:'Shortening a 6-month sales cycle to 4 months can dramatically improve revenue predictability and CAC.' },
  { term:'Churn Prevention', cat:'Growth', def:'Proactive strategies to reduce customer attrition — including customer success, health scoring, early warning systems, and product-led engagement nudges.', example:'Identifying customers who reduce usage by 50% and triggering a success call reduces churn by 30% on average.' },

  // People & Management
  { term:'Co-Founder', cat:'People', def:'A person who builds a startup from the beginning alongside the original founder — sharing equity, risk, and decision-making. The most important hire you will ever make.', example:'Most successful startups have 2-3 co-founders with complementary skills — solo founders succeed but face higher odds.' },
  { term:'Culture', cat:'People', def:'The behaviors, values, and unwritten rules that define how an organization makes decisions and treats people — especially visible in what leaders reward and tolerate.', example:'Zappos famously offered new hires $2,000 to quit after training — to filter for those who genuinely wanted to be there.' },
  { term:'Stock Options', cat:'People', def:'The right to purchase company stock at a fixed price (strike price) in the future — a key component of startup compensation used to attract talent who accept below-market salaries.', example:'Joining a startup early with 0.5% equity can be worth millions at a successful exit; or absolutely nothing.' },
  { term:'ESOP', cat:'People', def:'Employee Stock Ownership Plan — a program giving employees ownership interest in the company, aligning incentives between employees and company performance.', example:'A generous ESOP pool attracts mission-driven employees who want upside, not just salary security.' },
  { term:'Hiring Mistake', cat:'People', def:'Bringing the wrong person into the organization — often the #1 cause of startup slowdowns. Speed in hiring creates compounding problems; deliberate hiring prevents them.', example:'Amazon\'s Bar Raiser process ensures every hire raises the average quality of the company. Most startups hire too fast.' },
  { term:'Culture Fit', cat:'People', def:'The degree to which a person\'s values and behaviors align with the company\'s culture. Important, but should never override diversity of thought and experience.', example:'Culture fit done wrong is code for hiring people who look and think like the founders. Avoid this trap.' },
  { term:'Management Debt', cat:'People', def:'The accumulation of unmade management decisions, unclear roles, and unresolved conflicts that create organizational drag — exactly like technical debt but for people systems.', example:'Skipping hard conversations about equity, roles, and performance creates management debt that explodes at scale.' },
  { term:'Founder Mode', cat:'People', def:'Paul Graham\'s concept (2024) — the operating mode of founders who stay deeply involved in product and operations rather than delegating to traditional management layers.', example:'Steve Jobs in founder mode: attending weekly design reviews for every product, not just board meetings.' },
  { term:'Span of Control', cat:'People', def:'The number of direct reports a manager can effectively oversee. Too many (over 10) leads to neglect. Too few (under 3) indicates organizational inefficiency.', example:'Engineering managers typically handle 5-8 direct reports; people managers often do fewer, given coaching demands.' },
  { term:'Succession Planning', cat:'People', def:'Identifying and preparing internal candidates for key leadership roles to ensure business continuity when leaders leave or are promoted.', example:'Few startups do succession planning before Series C, then scramble when a VP unexpectedly resigns.' },

  // Operations
  { term:'SLA', cat:'Operations', def:'Service Level Agreement — a contract defining the expected level of service between a provider and customer, including uptime guarantees, response times, and remedies for failure.', example:'A 99.9% uptime SLA allows 8.7 hours of downtime per year — enterprise customers demand 99.99%.' },
  { term:'SOP', cat:'Operations', def:'Standard Operating Procedure — documented step-by-step instructions for completing a routine task. The foundation of scalable operations and consistent quality.', example:'Without SOPs, knowledge lives in people\'s heads. With them, you can onboard faster and scale processes.' },
  { term:'OKRs', cat:'Operations', def:'Objectives and Key Results — a goal-setting framework where qualitative objectives are paired with quantitative, measurable key results tracked quarterly.', example:'Google uses OKRs at every level — from company goals down to individual contributor quarterly targets.' },
  { term:'Incident Response', cat:'Operations', def:'The process for identifying, managing, and resolving a critical production failure or security breach — minimizing impact and learning from the event.', example:'PagerDuty and Slack built entire businesses on the pain of poor incident response processes.' },
  { term:'Post-Mortem', cat:'Operations', def:'A structured review after an incident or failure to identify what happened, why it happened, and how to prevent recurrence — without blame, focused on systems.', example:'Google has a culture of blameless post-mortems — the goal is system improvement, not punishment.' },
  { term:'Bottleneck', cat:'Operations', def:'The single constraint in a system that limits throughput — identified by finding where work piles up. The Theory of Constraints says you can only improve the system by improving its bottleneck.', example:'If engineering is always waiting for design, design is the bottleneck. Fix that before hiring more engineers.' },

  // Business Models
  { term:'SaaS', cat:'Business Model', def:'Software as a Service — subscription-based software delivered over the internet. Characterized by recurring revenue, high gross margins, and scalability.', example:'Salesforce pioneered SaaS in 1999, when software was still sold in boxes. Now it is the dominant B2B model.' },
  { term:'Marketplace', cat:'Business Model', def:'A platform that connects buyers and sellers, typically taking a transaction fee (take rate). Hardest business model to start due to the chicken-and-egg problem.', example:'Airbnb had to seed supply (hosts) before demand (guests) would come. The classic marketplace bootstrapping challenge.' },
  { term:'Freemium', cat:'Business Model', def:'A pricing strategy offering a free tier to drive adoption and a paid tier for advanced features or usage — converting a % of free users to paying customers.', example:'Spotify: free with ads, premium without. Dropbox: free up to 2GB, paid for more. The funnel is the business.' },
  { term:'Platform', cat:'Business Model', def:'A business model that creates value by facilitating interactions between two or more groups (developers, consumers, businesses) — earning from enabling those interactions.', example:'Apple\'s iOS platform hosts 2M+ apps; Apple earns a 30% cut of every App Store transaction.' },
  { term:'Subscription', cat:'Business Model', def:'A recurring revenue model where customers pay a regular fee for ongoing access to a product or service. Predictable, recurring cash flow is the primary advantage.', example:'Netflix proved that people will pay monthly for content they love — triggering a subscription economy revolution.' },
  { term:'Take Rate', cat:'Business Model', def:'The percentage of each transaction a marketplace retains as its fee. Determines how revenue scales with transaction volume.', example:'Stripe charges ~2.9% + 30 cents per transaction. Airbnb takes ~3% from hosts and ~14% from guests.' },
  { term:'White Label', cat:'Business Model', def:'A product or service produced by one company but sold under another company\'s brand — allowing distribution without brand investment.', example:'Many fintech startups are white-labeled bank products; the technology is licensed, the brand is the differentiator.' },
  { term:'API Business', cat:'Business Model', def:'A company whose primary product is an API — sold by usage volume or subscription to developers who integrate it into their own products.', example:'Twilio, Stripe, and Plaid are all API businesses. Distribution is through developers, not end users.' },
  { term:'Enterprise Sales', cat:'Business Model', def:'A high-touch, long-cycle sales process for selling to large organizations — involving procurement, legal, security reviews, and multiple stakeholders. High ACV, high CAC.', example:'Enterprise deals over $100K ACV often take 6-12 months to close but have very low churn once signed.' },
  { term:'Land and Expand', cat:'Business Model', def:'A go-to-market strategy where you win a small deal with a large company, prove value, and systematically expand usage (and revenue) over time.', example:'Slack lands with one team, then expands department by department until it is the company standard.' },
  { term:'Disruption', cat:'Business Model', def:'Clayton Christensen\'s theory: new entrants start by serving the least demanding customers with a simpler product, then move upmarket to displace incumbents who ignored them.', example:'Netflix disrupted Blockbuster by starting with DVDs-by-mail for occasional renters Blockbuster did not care about.' },
];

// =============================================
// ACHIEVEMENT BADGES (30+)
// =============================================
const BADGES = [
  { id:'first_step',    name:'First Step',        desc:'Complete your first skill',                icon:'FC', color:'#c8922a', condition: s => s.completedSkills.length >= 1 },
  { id:'hot_streak',   name:'Hot Streak',         desc:'Answer 10 questions correctly in a row',  icon:'HS', color:'#e8a832', condition: s => s.maxStreak >= 10 },
  { id:'crisis_surv',  name:'Crisis Survivor',    desc:'Survive your first crisis event',          icon:'CS', color:'#c4614a', condition: s => s.crisisesHandled >= 1 },
  { id:'crisis_3',     name:'Unshakeable',        desc:'Survive 3 crisis events',                 icon:'3C', color:'#9a3828', condition: s => s.crisisesHandled >= 3 },
  { id:'market_mogul', name:'Market Mogul',       desc:'Reach $10M valuation in Market Sim',      icon:'MM', color:'#3d5a7a', condition: s => s.bestValuation >= 10 },
  { id:'market_vc',    name:'VC Magnet',          desc:'Reach $50M valuation in Market Sim',      icon:'VC', color:'#1a3a5c', condition: s => s.bestValuation >= 50 },
  { id:'journal_3',    name:'The Reflector',      desc:'Save 3 entries to your journal',          icon:'JR', color:'#6b8f71', condition: s => s.journal.length >= 3 },
  { id:'journal_10',   name:'Chronicler',         desc:'Save 10 entries to your journal',         icon:'CR', color:'#4a6b50', condition: s => s.journal.length >= 10 },
  { id:'stage_1',      name:'Spark Lit',          desc:'Complete Stage 1: The Spark',             icon:'S1', color:'#c8922a', condition: s => stageComplete(s,1) },
  { id:'stage_2',      name:'Customer Whisperer', desc:'Complete Stage 2: The Customer',          icon:'S2', color:'#c8922a', condition: s => stageComplete(s,2) },
  { id:'stage_3',      name:'Market Reader',      desc:'Complete Stage 3: The Market',            icon:'S3', color:'#c8922a', condition: s => stageComplete(s,3) },
  { id:'stage_4',      name:'Builder',            desc:'Complete Stage 4: The Product',           icon:'S4', color:'#c8922a', condition: s => stageComplete(s,4) },
  { id:'stage_5',      name:'Storyteller',        desc:'Complete Stage 5: The Pitch',             icon:'S5', color:'#c8922a', condition: s => stageComplete(s,5) },
  { id:'stage_6',      name:'Team Architect',     desc:'Complete Stage 6: The Team',              icon:'S6', color:'#c8922a', condition: s => stageComplete(s,6) },
  { id:'stage_7',      name:'Numbers Fluent',     desc:'Complete Stage 7: The Numbers',           icon:'S7', color:'#c8922a', condition: s => stageComplete(s,7) },
  { id:'stage_8',      name:'Growth Engine',      desc:'Complete Stage 8: The Growth',            icon:'S8', color:'#c8922a', condition: s => stageComplete(s,8) },
  { id:'stage_9',      name:'Wall Climber',       desc:'Complete Stage 9: The Crisis',            icon:'S9', color:'#c8922a', condition: s => stageComplete(s,9) },
  { id:'stage_10',     name:'Legacy Builder',     desc:'Complete Stage 10: The Legacy',           icon:'LA', color:'#8b6914', condition: s => stageComplete(s,10) },
  { id:'centurion',    name:'Centurion',          desc:'Complete 100 skills',                     icon:'C1', color:'#6b5ea8', condition: s => s.completedSkills.length >= 100 },
  { id:'graduate',     name:'The Graduate',       desc:'Complete all skills',                      icon:'GR', color:'#8b6914', condition: s => SKILLS_DATA && s.completedSkills.length >= SKILLS_DATA.length && SKILLS_DATA.length > 0 },
  { id:'daily_1',      name:'Daily Devotee',      desc:'Complete your first daily challenge',     icon:'D1', color:'#3d5a7a', condition: s => s.dailyChallenges >= 1 },
  { id:'daily_7',      name:'Week Warrior',       desc:'Complete 7 daily challenges',             icon:'D7', color:'#2d4a6a', condition: s => s.dailyChallenges >= 7 },
  { id:'daily_30',     name:'Monthly Marathon',   desc:'Complete 30 daily challenges',            icon:'DM', color:'#1a3a5c', condition: s => s.dailyChallenges >= 30 },
  { id:'zara_respect', name:"Zara's Respect",     desc:'Maintain 80%+ accuracy across 30+ questions', icon:'ZR', color:'#3d5a7a', condition: s => s.totalAnswered >= 30 && (s.totalCorrect / s.totalAnswered) >= 0.80 },
  { id:'speed_demon',  name:'Speed Demon',        desc:'Answer 5 questions in under 8 seconds each', icon:'SD', color:'#a03020', condition: s => s.speedDemon >= 5 },
  { id:'comeback',     name:'Comeback Kid',       desc:'Get a skill question wrong then ace the next 5', icon:'CK', color:'#2d6a4f', condition: s => s.comebackKid },
  { id:'dict_scholar', name:'Dictionary Scholar', desc:'Look up 10 terms in the dictionary',     icon:'DS', color:'#3d5a7a', condition: s => s.dictLookups >= 10 },
  { id:'streak_7',     name:'7-Day Streak',       desc:'Play for 7 consecutive days',             icon:'7D', color:'#c8922a', condition: s => s.dayStreak >= 7 },
  { id:'perfectionist',name:'Perfectionist',      desc:'Complete a skill with all 5 correct',    icon:'PP', color:'#6b8f71', condition: s => s.perfectSkills >= 1 },
];

function stageComplete(s, stageId) {
  const ids = SKILLS_DATA.filter(sk => sk.stageId === stageId).map(sk => sk.id);
  return ids.length > 0 && ids.every(id => s.completedSkills.includes(id));
}

// =============================================
// MENTOR LETTERS (10)
// =============================================
const MENTOR_LETTERS = {
  1: {
    stage: 'After The Spark',
    body: `You have survived your first stage. That matters more than you think.

Most people who say they want to build something never get past the part where it is still comfortable to say "I am thinking about starting a company." You got past that. You committed to a problem worth solving.

The hardest part of The Spark is not finding the idea — it is believing you are allowed to pursue it. I have watched founders who started with worse ideas than yours build extraordinary things, simply because they refused to let the voice of doubt win.

One thing I want you to remember from this stage: the problem you choose to solve will define your life for the next five to ten years. Make sure it is a problem you can live inside of. Make sure it burns.

There are nine more stages ahead. Each one will test a different part of who you are. I will be watching.`
  },
  2: {
    stage: 'After The Customer',
    body: `Now you understand why most startups fail.

They build things nobody asked for. They solve problems that do not exist. They interview customers but hear only what confirms what they already believe.

You have now spent time learning to actually listen — not to pitch, not to validate, but to understand. That is rare. Most founders are too in love with their solution to study the problem long enough.

Here is what I want you to carry forward: your customer knows what hurts. They do not know what would fix it. That is your job. They will tell you about a symptom; you must diagnose the disease.

Keep going back to them. The founders who win never stop talking to customers, even at a hundred million in revenue.`
  },
  3: {
    stage: 'After The Market',
    body: `You now understand something that most founders learn too late: you cannot build a great company in a bad market.

Marc Andreessen said it best — the market pulls product out of the startup. If you are in a great market, a mediocre team can win. If you are in a dying market, even genius cannot save you.

The work you did in this stage — sizing the opportunity, finding your unfair corner, identifying why you specifically can win here — that is the strategic foundation everything else will be built on.

Do not be seduced by big TAM numbers. Be seduced by deep problems. The founders I have watched succeed were not chasing markets. They were chasing truths about how the world was changing, and got there before everyone else realized it.

You are positioning well. Keep that clarity as things get complicated.`
  },
  4: {
    stage: 'After The Product',
    body: `You shipped something. Do you understand how rare that is?

Every day, thousands of people have great ideas. A tiny fraction of them build a first version. An even smaller fraction ship it to real users and watch what happens.

I want to tell you what I have noticed about the founders who struggle with this stage: they confuse the quality of their product with the quality of their insight. They hold back from shipping because the product feels unfinished — when the real work, the learning work, only happens after it is in users' hands.

The version you shipped is a hypothesis. What your users do with it is data. And data is the only thing worth building on.

Whatever embarrassed you about your first version — that embarrassment is appropriate. Ship the next version faster.`
  },
  5: {
    stage: 'After The Pitch',
    body: `You learned to tell the story. Now make sure the story is true.

Pitching is a skill that can be learned, and you are learning it. But I want to warn you about something I have seen destroy more companies than bad technology or wrong markets: founders who become better at pitching than they are at building.

The pitch should be a compression of reality. It should be so grounded in truth that any investor who digs into the details finds that reality is even better than the story. That is the test.

There is one more thing. When Zara challenges your numbers, when she pushes on your assumptions — she is not trying to break you. She is trying to see whether you know your business well enough to defend it, or whether you just rehearsed a slide deck.

Know your business. Then the pitch writes itself.`
  },
  6: {
    stage: 'After The Team',
    body: `The people you build with will determine more about your outcome than your idea, your market, or your product.

I have watched extraordinary ideas fail because of wrong people. I have watched mediocre ideas succeed because of extraordinary people who figured it out as they went. The team is not a supporting factor. It is the primary factor.

What you learned in this stage is harder than it sounds: knowing which people make you faster, and which people slow you down. Knowing when to hire and when to wait. Knowing what qualities matter for the work you are actually doing, not the work you imagine you will do.

One thing I wish I could convince every founder: hire more slowly than feels comfortable. Fire more quickly than feels kind. Indecision on people costs you more than any wrong strategy decision.

You are building something. Be careful who you let inside.`
  },
  7: {
    stage: 'After The Numbers',
    body: `You are now dangerous in the best way.

A founder who understands unit economics, burn rate, cohort behavior, and the relationship between growth and margin — that founder is no longer playing on faith. They are playing with information.

Most of your competitors are flying blind. They know revenue is going up but they do not know why. They know they are losing money but they do not know exactly how much on each customer. They cannot read their P&L clearly enough to know which product line is secretly subsidizing which.

You can now. That is an enormous advantage.

The numbers do not just tell you what happened. They tell you what to do next. Learn to ask them questions, and they will answer.

Zara, by the way, is watching this stage carefully. The founders who know their numbers make her job easier. And harder to say no to.`
  },
  8: {
    stage: 'After The Growth',
    body: `You have learned that growth is not a goal. It is an outcome.

The founders who chase growth tend to find hollow metrics — downloads that do not convert, users who do not return, revenue that is not sustainable. The founders who build something people genuinely love — and then figure out how to get it to more people — that is the only growth worth having.

What you discovered in this stage is the difference between growth as a vanity metric and growth as a signal. When your customers tell other customers. When retention is high enough that net revenue grows even when you slow acquisition. When the product spreads because it is genuinely good — not because you spent money on it.

That is the flywheel. That is what you are trying to build.

One stage left after this. It is the hardest one.`
  },
  9: {
    stage: 'After The Crisis',
    body: `You hit the wall. You kept going. That is enough to be proud of.

I have worked with founders for decades. I have seen brilliant people quit because the crisis felt like a verdict — like the universe was telling them they were not supposed to be doing this. And I have seen ordinary people become extraordinary founders because they treated the crisis as information, not judgment.

Every company hits the wall. Not once. Multiple times. The question is never whether the crisis will come; it is who you are when it arrives.

What did you learn about yourself in this stage? Because that is the real lesson. Not how to manage cash in a crisis. Not how to handle a co-founder departure. But what kind of founder you are under maximum pressure.

The most important thing I can tell you: your company will have the culture you demonstrate in the hard moments. If you stay clear-eyed and calm when everything is breaking, your team will too.

One more stage. The last one.`
  },
  10: {
    stage: 'After The Legacy',
    body: `You finished.

I do not say that lightly. Two hundred and fifty decisions. Ten stages. Every choice with a consequence.

You have now done, in compressed form, what takes most founders a decade to experience. The hard truth is that real entrepreneurship will be messier, more uncertain, and more lonely than any simulation can capture. But you have the vocabulary now. You have the mental models. You know what questions to ask.

Here is what I want you to remember:

The companies that matter are not the ones that got the valuation. They are the ones that solved real problems for real people, built cultures worth belonging to, and left something behind worth leaving.

Be one of those. The world has enough unicorns. It needs founders who care about more than the exit.

Go build something that lasts.`
  }
};

// =============================================
// DAILY CHALLENGES (60 unique scenarios)
// =============================================
const DAILY_CHALLENGES = [
  { title:"The Cold Email Decision", type:"Daily", stageId:5, questions:[{ q:"You have 3 seconds to capture an investor's attention in a cold email. What leads with?", choices:["Your impressive background and credentials","The specific problem you're solving and for whom","A warm introduction and pleasantries","Your current revenue and growth numbers"], correctIndex:1, feedback:"The problem and who suffers from it is the hook. Investors scan hundreds of emails — they care about market pain, not your bio.", lesson:"Lead with the problem. Credentials are a supporting detail, not the headline." },{ q:"An investor replies to your cold email asking for a deck. What do you send?", choices:["A 40-slide comprehensive deck covering every detail","A 10-12 slide deck with the core story clearly told","A video pitch instead because it's more memorable","Nothing yet — ask if you can schedule a call first"], correctIndex:1, feedback:"A 10-12 slide deck tells the story efficiently. 40 slides signals you haven't edited your thinking. A video is unexpected but risky. Asking for a call before sending the deck adds friction.", lesson:"Respect their time. 10 slides is a discipline exercise — can you tell the whole story that concisely?" },{ q:"The investor passes on your cold email. What's the right response?", choices:["Ask for detailed feedback on why they passed","Ask if they know other investors who might be interested","Send a follow-up defending your business","Thank them and move on to the next one"], correctIndex:1, feedback:"Asking for referrals is the one response that creates value from a rejection. Most investors will connect you to someone more appropriate if you ask graciously.", lesson:"Every no is a potential referral. Always ask." },{ q:"Your cold email open rate is 8%. What's the most likely problem?", choices:["Your subject line isn't compelling","Your deck isn't good enough","You're emailing the wrong investors","You need more social proof first"], correctIndex:0, feedback:"If people aren't opening, the subject line is the variable. You can't know if the deck is the problem if nobody is reading the email to get there.", lesson:"Fix the top of the funnel first. An unopened email is a subject line problem, not a content problem." },{ q:"You find a warm intro path to a top-tier VC. How do you ask for the intro?", choices:["'Can you intro me to [VC]?'","Write a forwardable email they can send as-is — make it easy","'Would you be willing to make an intro when the time is right?'","Direct message the VC on LinkedIn and CC your contact"], correctIndex:1, feedback:"The forwardable email is the gold standard. It does the work for your connector and ensures your pitch is framed exactly as you want it. Lazy intro requests waste warm relationships.", lesson:"Make the intro request effortless. Write the email they would forward, not just the ask." }]},
  { title:"The Hiring Dilemma", type:"Daily", stageId:6, questions:[{ q:"You need a Head of Engineering urgently. You have two candidates: perfect culture fit, weak technical skills — or brilliant engineer, questionable attitude. Who do you hire?", choices:["Perfect culture fit — attitude is everything","Brilliant engineer — skills are harder to find","Neither — keep looking","The culture fit with a clear 90-day skills improvement plan"], correctIndex:3, feedback:"The binary framing is a trap. The real answer is: neither unless the culture-fit candidate has genuine technical trajectory. A 90-day plan for skills improvement with clear criteria is more honest than hoping attitude fixes skill gaps.", lesson:"Don't settle. Make the criteria explicit. 'Strong enough technically, great attitude' is a clearer bar than either extreme." },{ q:"A star employee asks for a 40% raise or they'll leave. You can afford 20%. What do you do?", choices:["Give the 40% — losing them costs more","Give 20% and explain the ceiling clearly","Let them leave — you can't set that precedent","Give 20% now with a path to 40% tied to milestones"], correctIndex:3, feedback:"The milestone-tied path respects both the employee and the company's financial reality. Giving 40% under pressure without performance criteria creates a precedent. Letting them walk when the raise is partly justified signals you don't value good people.", lesson:"Compensation conversations should be tied to value creation, not ultimatums. Create the path." },{ q:"Your team is fully remote. Collaboration has slowed. What's your first move?", choices:["Mandate a return-to-office policy","Buy better collaboration tools","Redesign how work is structured and communicated asynchronously","Have a team meeting about the issue"], correctIndex:2, feedback:"Remote collaboration fails are almost always process failures, not tool or location failures. Redesigning async communication — clear written briefs, decision logs, async demos — solves the root cause. The other options treat symptoms.", lesson:"Remote team issues are process issues. Fix the process before blaming the location." },{ q:"A co-founder wants to reduce their role from full-time to part-time 18 months in. What do you do?", choices:["Agree — losing them entirely would be worse","Have the hard conversation about whether they're in or out","Buy out their equity over time","Bring in an advisor to mediate"], correctIndex:1, feedback:"Part-time co-founders rarely work at early stage. The ambiguity damages team cohesion and investor confidence. The honest conversation — even if it leads to a parting — is better than a gradual fade.", lesson:"Co-founder dynamics require total clarity. Part-time at the critical stage is usually not a sustainable middle ground." },{ q:"You're about to make your first hire. What's the most important thing to establish first?", choices:["Compensation benchmarks for the role","Exactly what problem this person will solve in 90 days","The job description and interview process","Their equity allocation"], correctIndex:1, feedback:"Clarity on the problem they solve is the foundation of everything else. Without it, the job description is vague, the interview questions are unfocused, and you have no way to evaluate performance after they join.", lesson:"Every hire should have a crisp 90-day success definition before the offer letter is written." }]},
  { title:"The Pitch Meeting", type:"Daily", stageId:5, questions:[{ q:"You're 10 minutes into a VC pitch and they ask 'Who else is in the space?' You have 5 well-funded competitors. Best response?", choices:["'We don't really have direct competitors'","Name them all and explain exactly why each will lose to you","'It's a large market with a few players, but our differentiation is...'","Pivot the conversation back to your traction"], correctIndex:1, feedback:"Knowing your competition better than the investor does is a signal of market intelligence. Claiming no competitors signals ignorance. Investors already know the space — your answer tells them whether you do.", lesson:"Name every competitor. Then explain specifically why each one will lose on your chosen battleground." },{ q:"A partner leans back in the pitch and says 'I'm not sure the market is big enough.' What's your move?", choices:["Show them a larger TAM calculation","Agree and pivot to addressing their concern with data","Ask which market sizing framework they're using","Explain why your SOM matters more than TAM for this round"], correctIndex:1, feedback:"Agreeing and addressing with data shows intellectual honesty and preparation. Immediately pulling out a bigger TAM number looks defensive. Asking about frameworks is clever but may feel like a deflection.", lesson:"Don't fight objections. Absorb them, then address with evidence. Investors test whether you're coachable." },{ q:"The meeting is going well. As it ends, the partner says 'We'll be in touch.' What do you do?", choices:["Thank them and wait for their call","Ask directly: 'What would need to be true for you to invest?'","Send a follow-up email the same day","Propose next steps before leaving the room"], correctIndex:1, feedback:"'What would need to be true for you to invest?' is the best question you can ask. It tells you exactly what the real objection is, and either moves the conversation forward or saves you months of uncertainty.", lesson:"Always extract the real objection before leaving. Ambiguous meetings waste everyone's time." },{ q:"You're pitching to 3 partners simultaneously and one starts checking their phone. What do you do?", choices:["Address the question to them directly","Ignore it — stay focused on the engaged partners","Pause and ask if there's a better time to continue","Speed up to recapture attention"], correctIndex:0, feedback:"Direct engagement recaptures attention without calling out the behavior. 'Does this resonate with what you're seeing in the market?' pulls them back in. Ignoring it means you've lost the room.", lesson:"Pitch to the whole room. A disengaged partner is your signal to recalibrate, not ignore." },{ q:"After 15 meetings, you have no term sheet. Your co-founder says the pitch is the problem. You think it's the business fundamentals. Who's right?", choices:["Probably you're both partly right","The pitch is definitely the problem — you should practice more","The fundamentals are the real issue — fix those first","Get outside feedback from an advisor who has heard both pitches"], correctIndex:3, feedback:"Objective external feedback is the only way to separate pitch execution from fundamental story problems. Both are worth examining — but you need data, not a co-founder argument.", lesson:"Pitch feedback and business feedback require different observers. Get both, from people with no stake in being right." }]},
  { title:"The Pricing Problem", type:"Daily", stageId:7, questions:[{ q:"You're launching a SaaS product. You're torn between $29/mo and $99/mo. Which do you choose?", choices:["$29 — lower barrier to entry is always better early","$99 — you can always lower price but raising it is hard","$49 — the middle ground reduces risk","Test both with a proper A/B pricing experiment"], correctIndex:1, feedback:"Price anchoring is real. Early customers who pay $99 self-select as serious users who will extract more value. When you raise from $29 to $99 later, existing customers become obstacles. Start high and offer migration deals if needed.", lesson:"It's far easier to lower your price than to raise it. Start at what premium positioning demands." },{ q:"A potential enterprise customer tells you your product is great but too expensive. What do you do?", choices:["Immediately offer a discount to close the deal","Ask them to define their budget and build a proposal around it","Find out who else in their org is championing you","Ask what 'too expensive' means relative to what the problem costs them today"], correctIndex:3, feedback:"'Too expensive' is almost never about the number — it's about perceived value relative to the problem. Asking what the problem costs in lost time, revenue, or risk reframes the conversation entirely.", lesson:"Price objections are value perception problems. Reframe around the cost of the problem, not the cost of your solution." },{ q:"You discover your biggest competitor just dropped their price by 30%. What do you do?", choices:["Match the price cut to stay competitive","Hold your price and double down on differentiation","Raise your price — premium positioning when they go cheap","Study why they cut prices before making any move"], correctIndex:3, feedback:"Price cuts are often a distress signal. A 30% price cut may mean they're losing deals, burning cash, or repositioning. Understanding why before reacting prevents a pricing war you might not need to fight.", lesson:"Never react to competitor pricing without understanding the reason behind the move. Data before action." },{ q:"Your free trial converts at 3%. Industry benchmark is 8%. What's the most likely culprit?", choices:["Your pricing is too high","Your onboarding doesn't get users to their 'aha moment' fast enough","Your product has too few features","You're attracting the wrong users at the top of the funnel"], correctIndex:1, feedback:"Trial-to-paid conversion is almost always an onboarding problem. If users don't experience the core value within the first session, they churn before they evaluate price. Fix the path to value before touching pricing.", lesson:"Low trial conversion = users didn't find value. Fix the time-to-value, not the price tag." },{ q:"You want to move from per-seat pricing to usage-based pricing. What's the biggest risk?", choices:["Revenue becomes unpredictable month to month","Customers will reduce usage to save money","Sales team won't know how to quote deals","Existing customers will be angry at the change"], correctIndex:0, feedback:"Usage-based pricing aligns incentives beautifully but makes revenue forecasting hard — critical for hiring plans and investor expectations. You need robust usage monitoring and smart floor minimums to reduce volatility.", lesson:"Usage-based pricing trades revenue predictability for growth alignment. Build the monitoring infrastructure first." }]},
];

// =============================================
// SKILLS DATA (250 skills, 10 stages × 25)
// =============================================
function buildSkillsData() {
  const raw = [
    // ─── STAGE 1: THE SPARK ───────────────────────────
    { id:1,  stageId:1, title:'Finding the Problem Worth Solving', type:'Foundation', questions:[
      { q:'A first-time founder asks you where to find startup ideas. What is the most reliable source?', choices:['Brainstorming sessions with smart friends','Looking at existing startup databases for gaps','Solving a frustrating problem you personally experience','Reading trend reports from top VCs'], correctIndex:2, feedback:'The best startup ideas come from lived experience with genuine pain. Founders who solve their own problems have superior insight into the customer, product, and competitive landscape.', lesson:'The problem you are best positioned to solve is usually one you have personally experienced.' },
      { q:'You have three startup ideas. Which selection criteria matters most?', choices:['Which idea has the largest addressable market','Which idea you care about so deeply you would work on it for 10 years','Which idea has the least competition currently','Which idea is easiest to build technically'], correctIndex:1, feedback:'Startup building is a decade-long commitment. Passion is not sufficient, but without it, you will quit at the first serious obstacle. Founders who do not deeply care about the problem are the first to fold under pressure.', lesson:'Choose the problem you cannot not solve. The market size matters, but conviction keeps you in the game.' },
      { q:'Before writing a line of code, what is the single most important thing to validate?', choices:['That you can build the product technically','That the problem actually exists and people feel it painfully','That there is no competitor doing exactly this','That investors are interested in this category'], correctIndex:1, feedback:'Technical capability and competitive analysis matter, but nothing else is relevant if the problem is not real and painful. Most startups fail because they solve problems that are not painful enough to motivate behavior change.', lesson:'Problem validation before solution building is the discipline that separates successful founders from optimistic builders.' },
      { q:'What distinguishes a "vitamin" from a "painkiller" in startup parlance?', choices:['Vitamins are B2C products; painkillers are B2B products','Painkillers solve urgent painful problems; vitamins are nice-to-have improvements','Vitamins have lower CAC; painkillers have higher LTV','Painkillers require more engineering; vitamins are simpler products'], correctIndex:1, feedback:'The vitamin vs painkiller framework is about urgency and pain. People buy painkillers even when they are broke. Vitamins get cut when budgets are tight. Painkiller businesses are defensible; vitamin businesses are fragile.', lesson:'Build painkillers. If customers do not feel the absence of your product acutely, acquisition is always a struggle.' },
      { q:'You identify a problem. What is the fastest way to know if it is worth pursuing?', choices:['Build an MVP and see if people sign up','Talk to 10 potential customers without mentioning your solution','Research the market size using industry reports','Ask friends and family for their honest opinion'], correctIndex:1, feedback:'Customer conversations without any mention of your solution reveal the true nature of the problem. Friends give biased feedback; reports give you categories, not insight. The 10-customer test in a week is the highest-leverage validation activity at this stage.', lesson:'Talk to potential customers before building anything. Ten honest conversations are worth more than any report.' },
    ]},
    { id:2,  stageId:1, title:'The Founder Motivation Test', type:'Self-Assessment', questions:[
      { q:'Zara asks: "Why you, specifically, for this problem?" What is the weakest answer?', choices:['I experienced this problem for years and know every inch of it','I have connections to 50 of the top potential customers','I studied this space extensively and am passionate about it','I built a smaller version of this product as a side project and users loved it'], correctIndex:2, feedback:'Passion and study are table stakes. The strongest answers to "why you" are unfair advantages: lived experience, distribution relationships, or evidence of prior success. Passion without advantage is just enthusiasm.', lesson:'Founder-market fit is about unfair advantage, not just passion. What do you know or have that no one else does?' },
      { q:'How honest should you be about your weaknesses when pitching to an investor?', choices:['Never mention weaknesses — always project confidence','Mention only weaknesses that are clearly temporary','Be fully honest about the two or three biggest gaps and how you are addressing them','Redirect weakness questions to your strengths'], correctIndex:2, feedback:'Investors who reach the diligence stage will find your weaknesses anyway. Founders who are self-aware about gaps and have a plan are far more trustworthy than those who pretend to be invulnerable.', lesson:'Acknowledging weaknesses with a plan is strength. Pretending you have none is a red flag investors are trained to spot.' },
      { q:'You are six months into building your startup. Progress is slower than expected. What is the right mindset?', choices:['This is a signal I chose the wrong idea and should pivot','Startups always take 3x longer than expected — recalibrate and continue','I need to work harder and sleep less to make up the time','Compare my progress to successful founders at this stage to calibrate'], correctIndex:1, feedback:'Comparing to media-distorted startup timelines creates false panic. Almost all successful companies went through extended periods that felt like failure. The signal to pivot is lack of user love, not slow pace.', lesson:'Slow is not the same as wrong. Distinguish between a speed problem and a direction problem before abandoning your thesis.' },
      { q:'The Mentor says: "The best founders are learning machines." What does this mean in practice?', choices:['Read every startup book and attend every conference possible','Systematically extract lessons from every failure and update your operating model','Hire smart people and learn from them constantly','Take online courses in everything you are weak at'], correctIndex:1, feedback:'Learning machine means systematically turning experience into updated beliefs. It is not passive consumption of content. It is active hypothesis formation, testing, and belief revision — applied to every interaction, failure, and win.', lesson:'Build a system for extracting lessons. Experience without extraction is just elapsed time.' },
      { q:'What is the most common reason first-time founders quit too early?', choices:['Running out of money before PMF','Choosing a market that is too competitive','Confusing a temporary obstacle with proof that the idea is wrong','Having a co-founder conflict that is unresolvable'], correctIndex:2, feedback:'Most pivots are premature and most quits are even more premature. The challenge is distinguishing between "this is genuinely the wrong path" and "this is hard and I am scared." Most founders quit at the exact moment they are closest to a breakthrough.', lesson:'The wall feels like a verdict. It is almost never one. Learn to tell the difference between a wrong direction and a hard journey.' },
    ]},
    { id:3,  stageId:1, title:'The Napkin Idea Test', type:'Validation', questions:[
      { q:'You have a startup idea. You sketch it on a napkin. What do you sketch first?', choices:['The product interface and features','The business model and revenue streams','The customer, their problem, and how your solution changes their day','The market size and competitive positioning'], correctIndex:2, feedback:'The customer-problem-solution triangle is the foundational sketch. Everything else — revenue, product, positioning — flows from understanding who hurts, why, and how you change that. Features without a clear customer in mind are solutions in search of a problem.', lesson:'Start every idea sketch with the customer. Who are they? What hurts? What changes when your product exists?' },
      { q:'You pitch your napkin idea to 3 smart people. Two say "that will never work." What do you do?', choices:['Take this as strong evidence the idea is flawed and reconsider','Find out specifically what they think will not work and test those assumptions','Thank them and move forward — contrarian ideas are often the best ones','Pitch to 7 more people to get a more representative sample'], correctIndex:1, feedback:'Dismissal is not evidence. "That will not work" without specifics is an opinion, not a data point. The value of smart skeptics is extracting their specific objections so you can test whether they are correct.', lesson:'Convert vague skepticism into specific hypotheses. Then go test them. Objections are data if you make them specific.' },
      { q:'What is the difference between an insight and an assumption?', choices:['Insights come from data; assumptions come from intuition','Insights are validated; assumptions are untested beliefs waiting to be tested','Insights are about customers; assumptions are about the market','There is no meaningful difference — all knowledge starts as an assumption'], correctIndex:1, feedback:'This distinction is crucial. Every startup is built on a stack of assumptions. Your job is to systematically convert the most critical assumptions into insights through evidence. Founders who cannot name their assumptions cannot test them.', lesson:'Make a list of every assumption your startup depends on. The riskiest ones to test first are usually the ones you are most avoiding.' },
      { q:'Sam the CTO asks you: "What is the simplest version of this that would prove the core hypothesis?" What should your answer reveal?', choices:['Your ability to scope down features aggressively','Your technical sophistication and engineering instincts','Your fundraising plan and timeline','Your competitive analysis and positioning strategy'], correctIndex:0, feedback:'The minimum version question tests your ability to isolate what actually matters. Founders who cannot answer this question quickly tend to overbuild, delaying learning by months. The simplest version that tests the hypothesis is almost always achievable in weeks, not months.', lesson:'If you cannot describe the minimum version in one sentence, you have not yet identified your core hypothesis.' },
      { q:'You test your napkin idea with potential customers and they say they "love it." What is your appropriate level of excitement?', choices:['Very excited — this is strong validation','Cautiously optimistic — verbal enthusiasm is not the same as behavior or purchase intent','Disappointed — love without payment is worthless','Moderately excited — this is one data point among many needed'], correctIndex:1, feedback:'Customer enthusiasm in interviews is one of the most misleading signals in early-stage startups. "I love it" costs the customer nothing. "Here is my credit card" or "I switched from my current solution" is real validation.', lesson:'People are polite. Test behavior, not sentiment. A waitlist signup beats a compliment. A purchase beats both.' },
    ]},
    { id:4,  stageId:1, title:'Why Most Ideas Fail Before They Start', type:'Mental Model', questions:[
      { q:'What is the #1 reason most startup ideas never become companies?', choices:['Lack of funding','Execution failure — the founder never builds anything','The market was not big enough','Competition from well-funded incumbents'], correctIndex:1, feedback:'The gap between "I have an idea" and "I built something and showed it to users" is where most ideas die. Execution — the act of actually building and shipping — filters out approximately 90% of startup ideas before any external factor can.', lesson:'The first execution challenge is simply starting. Most ideas die in the dreaming stage, not the building stage.' },
      { q:'Leo says: "My idea failed because the market was not ready." What is the more likely explanation?', choices:['He was genuinely ahead of his time and the market came later','He misidentified his target customer and solved the wrong person\'s problem','The technology to build it did not exist yet','He ran out of money before the market developed'], correctIndex:1, feedback:'Market timing is real but rare. "The market was not ready" is the most common post-hoc rationalization for a problem that was actually a targeting error. The iPhone was not "the market being ready for touchscreens" — it was the right target customer (everyone) finally served correctly.', lesson:'"The market was not ready" is usually code for "I was targeting the wrong customer." Examine the targeting before blaming the timing.' },
      { q:'What is "founder-market fit" and why does it matter?', choices:['The founder\'s personal passion for the problem space','The structural advantages a founder has to win a specific market over any other team','The alignment between a founder\'s skills and the required business model','The overlap between what the founder wants to build and what investors want to fund'], correctIndex:1, feedback:'Founder-market fit is about structural advantage. The question is: why is this specific founder team more likely to win this market than any other team in the world? Passion is necessary but not sufficient. Networks, experience, insights, and credibility are the actual advantages.', lesson:'Ask yourself why you specifically should win this market. If the answer is only "I care a lot," that is not enough.' },
      { q:'You have two co-founders. All three of you have similar backgrounds. What is the primary risk?', choices:['Too many cooks in the kitchen — decision making will be slow','Uniform thinking and blind spots — the team lacks complementary perspectives','Investors will question whether you need three co-founders','Equity will be split three ways, reducing individual motivation'], correctIndex:1, feedback:'Complementary skills matter, but cognitive diversity matters more. Three ex-engineers will overbuild the product and underprioritize customers. Three marketers will generate demand for a product that does not work. Diversity of perspective catches the blind spots that homogeneous teams miss.', lesson:'The best founding teams are complementary not just in skills but in how they see the world and what they value.' },
      { q:'Maya says: "The idea is not the company — the execution is." What does this mean?', choices:['Product design and visual execution determine startup success','The business plan, processes, and management systems are what create value','How you implement the idea — speed, learning, culture, and iteration — determines outcomes more than the initial concept','Ideas need to be protected with IP before building begins'], correctIndex:2, feedback:'Two teams can start with the same idea and produce radically different outcomes based on how they execute. Execution includes the speed of learning, the quality of hiring, the discipline of prioritization, and the resilience to keep going when everything is hard.', lesson:'Protect the idea less. Obsess over execution more. Ideas are not scarce. Great execution is.' },
    ]},
    { id:5,  stageId:1, title:'The Opportunity Filter', type:'Framework', questions:[
      { q:'Paul Graham famously said founders should look for ideas that seem "bad" but are actually good. Why?', choices:['Bad-seeming ideas have less competition from other founders','Bad-seeming ideas are usually early versions of inevitable trends','Bad-seeming ideas are easier to explain to early customers','Bad-seeming ideas attract contrarian investors who take more risk'], correctIndex:0, feedback:'The best startup ideas often sound bad to most people at first, which means most founders are not working on them. If the idea sounds obviously good, smart people would already be working on it. The counter-intuitive space is where extraordinary opportunities hide.', lesson:'Great startup ideas often sound bad at first. That is a feature, not a bug — it is why the opportunity exists.' },
      { q:'Which of these is the strongest signal that a market opportunity is real?', choices:['A large TAM validated by a Gartner report','People currently solving the problem using workarounds and hacks','VCs actively investing in the space','A recent regulatory change creating a new requirement'], correctIndex:1, feedback:'Workarounds are the loudest possible signal that a problem is real and painful. When people build elaborate, imperfect solutions with spreadsheets, duct tape, and manual processes — they are waiting for you to build the real solution.', lesson:'Look for the workarounds. Where people are hacking solutions together, a real product opportunity exists.' },
      { q:'What does it mean for a market to be "too early"?', choices:['The technology required does not yet exist','The customers who need the solution have not yet been born','The supporting infrastructure, behavior change, or distribution channel required does not yet exist at scale','The regulatory environment has not caught up to allow the product to be sold'], correctIndex:2, feedback:'"Too early" means the ecosystem that makes your product valuable does not yet exist — not necessarily the technology. Smartphones did not enable Uber; the GPS infrastructure, payment systems, and ubiquitous smartphone penetration did. All of that had to exist first.', lesson:'Being early means the infrastructure is not ready, not that the idea is wrong. Understand what needs to exist before your product can work.' },
      { q:'You find a space where one company has 80% market share. What should you look for?', choices:['A way to compete on price and undercut them significantly','The customers they are poorly serving or actively ignoring','A regulatory pathway to challenge their dominance','An acquihire opportunity — join them instead of competing'], correctIndex:1, feedback:'Dominant players almost always have a segment they serve poorly — typically the bottom of the market (where they consider margins too thin) or the emerging edge (where they are too slow to adapt). That neglected segment is where new entrants build their beach head.', lesson:'Every dominant company has customers they ignore or underserve. That ignored customer is your starting market.' },
      { q:'A friend says your startup idea already exists with a well-funded competitor. Your best response is:', choices:['Reconsider the idea entirely — it is too late','Find out why the well-funded competitor has not already won and why customers still have the problem','Use the existence of a competitor to validate market size and find your differentiation','Pivot to an adjacent idea with less competition'], correctIndex:1, feedback:'A well-funded competitor that has not yet won is actually a strong signal. It means the problem is real and large enough to fund, but the current solution is not perfect. Your job is to understand the gap between what they offer and what customers actually need.', lesson:'Competitors validate markets. A funded competitor that has not won means the solution space is still open.' },
    ]},
    { id:6,  stageId:1, title:'The First Conversation', type:'Customer Discovery', questions:[
      { q:'You are conducting your first customer discovery interview. What is the cardinal rule?', choices:['Do not mention your solution or product idea during the interview','Bring your prototype to get immediate product feedback','Record the conversation for accurate analysis later','Open with a direct question about willingness to pay'], correctIndex:0, feedback:'The Mom Test (Rob Fitzpatrick) is built on this rule: do not let customers know what you are building. If they know your idea, they will try to be helpful and tell you what you want to hear. Their behavior and description of the problem uncontaminated by your solution is the data you need.', lesson:'Never tell customers your idea during discovery interviews. Their unbiased description of the problem is the most valuable thing they can give you.' },
      { q:'A customer says in an interview: "I would definitely pay for that." How do you interpret this?', choices:['Strong validation — take it as a committed signal of intent','Weakly positive — verbal commitments are not the same as financial commitments','Neutral — people always say this to be polite in interviews','Negative — if they were really in pain, they would already be paying for a solution'], correctIndex:1, feedback:'Verbal purchase intent in a discovery interview is almost meaningless. It costs the interviewee nothing to say it. Real validation comes from signed contracts, credit card numbers, or customers doing something inconvenient to access your pre-product solution.', lesson:'Talk is cheap. Treat verbal purchase intent as a weak signal and go find ways to test with real commitment.' },
      { q:'What is the single best question to ask at the end of a customer discovery interview?', choices:['"Would you pay $X per month for this solution?"','"Can you introduce me to three other people with this problem?"','"What would need to be true for you to switch from your current solution today?"','"How much do you currently spend on this problem?"'], correctIndex:1, feedback:'The referral question is the ultimate validation signal AND the best growth move. If customers are willing to introduce you to others with the same problem, they are effectively endorsing your problem thesis and helping you find your next 10 interviewees simultaneously.', lesson:'Ask for referrals at the end of every discovery interview. A yes is validation; who they refer to tells you who the real customer is.' },
      { q:'You do 20 customer interviews. 15 describe similar problems. 5 describe completely different problems. What do you do?', choices:['Focus entirely on the 15 who share the common problem — that is your target customer','Interview the 5 more deeply — dissenting voices often carry the most insight','Average all 20 responses and design for the aggregate customer','Share the results with your co-founder and split responsibility for both groups'], correctIndex:0, feedback:'Finding pattern in 75% of interviews is strong signal. The 5 outliers are either a different customer segment (useful to understand but not to pursue simultaneously) or noise. Build for the majority pattern first; the segment question comes later.', lesson:'Look for patterns across interviews, not individual responses. 75% convergence on a problem is a product roadmap.' },
      { q:'What is "the problem stack" and why does it matter in early customer conversations?', choices:['A prioritization framework for which customer problems to solve first','The hierarchy of problems a customer has — surface symptoms above, root causes below, each layer more actionable than the last','The technical architecture of how your product will solve customer problems','The stack of customer segments ranked by problem severity'], correctIndex:1, feedback:'Customers almost always describe symptoms, not root causes. Peeling the problem stack — asking "and why does that happen?" repeatedly until you reach the root cause — reveals what the product actually needs to fix. Surface solutions fail because they treat symptoms.', lesson:'Ask "why does that happen?" three times after a customer describes their problem. The third answer is usually what you should build for.' },
    ]},
    { id:7,  stageId:1, title:'The Problem Statement', type:'Communication', questions:[
      { q:'What makes a problem statement compelling to an investor?', choices:['Specific customer type + quantified frequency and severity of the problem + evidence it is currently unsolved well','A broad market description showing millions of potential customers exist','An emotional story about how you personally experienced the problem','Statistical data from industry reports validating the problem category'], correctIndex:0, feedback:'Specific customer type + quantified pain + evidence of poor existing solutions is the formula. "Millions of people have this general frustration" is weak. "HR managers at 50-500 person companies spend 6 hours per week on a task that could take 20 minutes, and the best tool they have is a spreadsheet" is compelling.', lesson:'Specificity is credibility. Vague problem statements are a sign you have not done customer discovery yet.' },
      { q:'Leo pitches: "Everyone struggles with productivity." What is the critical failure in this problem statement?', choices:['The problem is not painful enough to build a business around','The problem is too broad — it does not identify a specific customer experiencing a specific pain in a specific context','The problem already has too many solutions','The emotional appeal is insufficient for investors'], correctIndex:1, feedback:'Specificity is everything. "Everyone struggles with productivity" describes no one specifically enough to sell to, target, or understand. "Freelance designers working across 3+ clients lose track of billable hours and undercharge by an average of 20%" is a problem worth solving.', lesson:'A problem statement must name the customer, the context, the pain, and the frequency. Vague problems produce unfocused products.' },
      { q:'Which of these is the strongest problem statement?', choices:['"The travel industry is broken and customers are frustrated"','"Booking travel is complicated for leisure travelers"','"Independent travelers spending over $5K on trips spend an average of 11 hours planning across 7 different websites and apps — and still feel uncertain they got the best experience"','"There is a big opportunity in the travel market due to the rise of experience tourism"'], correctIndex:2, feedback:'The third option names the customer (independent travelers, high-spend), the current painful experience (11 hours, 7 platforms), and the emotional outcome (still uncertain). This is specific enough to build a product roadmap around and credible enough for an investor.', lesson:'Great problem statements make the customer visible. You should be able to see them in the room when you read the statement.' },
      { q:'What is the difference between a problem and a solution dressed up as a problem?', choices:['Problems are market-level observations; solutions describe specific products','Solution-dressed-as-problem statements describe technology before describing the pain; real problem statements describe customer experience first','Problems focus on the past; solutions focus on the future','There is no meaningful distinction — all problem statements imply a solution direction'], correctIndex:1, feedback:'"There is no tool that uses AI to automatically categorize expenses" is a solution dressed as a problem. "Finance teams spend 3 hours per week manually categorizing expenses, making errors in 8% of categories" is a real problem statement. The first is about the product; the second is about the customer.', lesson:'Read your problem statement. If it describes technology or a feature before it describes customer pain, rewrite it starting with the customer.' },
      { q:'When should you stop doing customer discovery and start building?', choices:['After 10 customer interviews regardless of what you learn','When you can predict what a new customer will say before they say it','When an investor asks you to show them a product','When your co-founder says you are over-researching the problem'], correctIndex:1, feedback:'You have done enough discovery when customer interviews stop surprising you — when you can finish their sentences, predict their workarounds, and hear the same themes repeatedly. At that point, you have enough signal to form a testable hypothesis worth building around.', lesson:'Stop discovery when interviews become redundant. The signal is predictability — you know what they will say before they say it.' },
    ]},
    { id:8,  stageId:1, title:'The Contrarian Bet', type:'Strategy', questions:[
      { q:'Peter Thiel asks founders: "What do you believe that most people disagree with?" Why is this the most powerful startup question?', choices:['It tests intellectual courage and the ability to hold unconventional positions','It reveals whether the founder has a contrarian insight that creates defensible advantage','It helps VCs evaluate philosophical alignment with the founder\'s worldview','Both A and B — the insight is the foundation of a genuine competitive advantage'], correctIndex:3, feedback:'The contrarian belief question serves two purposes: it tests intellectual courage (can you hold and defend an unpopular position?) and it reveals whether the insight underlying the business is genuinely non-consensus. Consensus views create consensus businesses that compete on the same battleground as everyone else.', lesson:'The strongest startups are built on insights that most smart people think are wrong. The wrongness is what creates the window of opportunity.' },
      { q:'You believe a market is shifting in a direction that most experts disagree with. How do you evaluate whether to bet your startup on this belief?', choices:['Look for the data experts are ignoring or misinterpreting','Find one or two early adopters who already behave as if your belief is true','Stress-test the belief by finding the best counter-argument and evaluating it honestly','All of the above — the belief needs to be robust enough to survive serious scrutiny'], correctIndex:3, feedback:'A contrarian bet worth making survives all three tests: it is supported by data others are ignoring, some customers already live in the future you are betting on, and it holds up against the best counter-argument. Single-test validation of a contrarian belief is reckless.', lesson:'Test your contrarian belief from three angles: data, early adopters, and the strongest counter-argument. It should survive all three.' },
      { q:'What is the risk of being genuinely early to a market?', choices:['You educate the market but competitors arrive when it is ready and win','You are too contrarian and no one believes in your vision','Early markets are too small to attract venture capital investment','You cannot hire good people because the category does not yet have credibility'], correctIndex:0, feedback:'Being genuinely early — by 3-5 years — often means you spend your capital educating customers only to see well-funded entrants arrive when the market is ready and benefit from your market development work. Timing is the most underrated startup variable.', lesson:'Being early is not the same as being right. Markets must be ready for a product, not just be theoretically correct about needing one.' },
      { q:'Sam says: "Build for the market as it will exist in 3 years, not as it exists today." What is the risk of following this advice?', choices:['You might run out of money before the market catches up','Investors will not fund companies targeting future markets','Building for a future market requires technical capabilities you may not have','Customers will not pay for products they do not yet understand they need'], correctIndex:0, feedback:'Building for a 3-year-out market is genuinely right as a strategy — but financially dangerous without strong conviction in the timing. If the market takes 5 years, your runway will not support the wait. The answer is to build for the future while finding current customers who already need it now.', lesson:'Build for the future. But find enough customers who need it today to keep you funded until the future arrives.' },
      { q:'Which company is the best example of a contrarian bet that looked wrong and turned out right?', choices:['Amazon selling books online when physical bookstores dominated','Airbnb letting strangers stay in your home when hotels were the standard','Uber making it normal to get in a stranger\'s car when taxis were regulated','All three are examples — contrarian bets on behavior change that succeeded'], correctIndex:3, feedback:'All three are textbook contrarian bets on human behavior change. Each one required believing that people would do something most assumed they would never do: buy books without seeing them, sleep in strangers\' homes, or get into unregulated cars. The insight in each case was right despite widespread disagreement.', lesson:'The best contrarian bets are on human behavior change. People are more willing to change than incumbents assume.' },
    ]},
    { id:9,  stageId:1, title:'Your First 90 Days', type:'Execution', questions:[
      { q:'You decide to start a company. What is the single most important thing to do in the first 30 days?', choices:['Register the company and sort out the legal structure','Talk to 20-30 potential customers to validate the problem deeply','Build a minimum viable product to test with users','Find a co-founder with complementary skills'], correctIndex:1, feedback:'Everything else — legal, product, team — can wait 30 days. Customer conversations cannot. The insight you gain in the first 30 days of intensive customer discovery shapes every decision that follows. Legal structure and co-founders matter but can be figured out with the knowledge you gain from 30 customer conversations.', lesson:'In the first 30 days, customer conversations are the only thing that matters. Everything else can wait.' },
      { q:'Leo says he will start the startup after he finishes his current job in 3 months. What is the real risk of this plan?', choices:['He will lose his competitive advantage in the market','His co-founder will build it without him','He will do nothing meaningful for the startup in those 3 months while telling himself he is planning','He will be too comfortable in his job to leave when the time comes'], correctIndex:2, feedback:'Waiting for the "right time" is the most common form of startup procrastination. The three months of "planning" typically result in no customer conversations, no product thinking, and no meaningful progress. The momentum of starting now, with a side project mindset, is what separates starters from dreamers.', lesson:'There is never a perfect time to start. Start now with whatever time you have and build momentum.' },
      { q:'What is the most important metric to track in your first 90 days?', choices:['Number of customer conversations completed','Amount of code written or product shipped','Revenue or letters of intent from early customers','Number of investor meetings scheduled'], correctIndex:0, feedback:'In the first 90 days, customer conversations are both the leading metric and the leading activity. Revenue and product follow from insight. Investors follow from traction. The conversation count is the most honest indicator of whether you are doing the foundational work or procrastinating with comfortable activities.', lesson:'Count your customer conversations in the first 90 days. If the number is under 20, you are not doing the foundational work.' },
      { q:'Your partner asks how you will know if the startup idea is not working. What is the right answer?', choices:['If we run out of money after 18 months','If we cannot get our first 10 paying customers within 6 months of launch','If the hypothesis we are testing is falsified by customer behavior — not just by slow progress','If a larger, better-funded competitor enters the market'], correctIndex:2, feedback:'The right definition of "not working" must be tied to hypothesis falsification — the core assumption being specifically disproven by customer behavior — not slow pace or competitive entry. Without a crisp falsification criteria, founders quit at the wrong time or persist at the wrong thing.', lesson:'Define what failure looks like before you start. You need a specific falsification criterion or you will never know when to pivot versus persist.' },
      { q:'What is the best thing about starting a company with almost no resources?', choices:['You are forced to be creative and resourceful in ways that become permanent strengths','You build community goodwill by being scrappy and authentic','You avoid the comfort that comes with resources and keeps teams from moving fast','All of the above — resource constraints create the culture of hustle that compound over time'], correctIndex:3, feedback:'Resource constraints are genuinely formative. They force creativity over spending, hustle over deliberation, and customer obsession over comfort. The cultural habits formed in resource-constrained early days become the operating system of the company. Well-funded early teams often never develop this.', lesson:'Constraints are a feature. The habits, creativity, and urgency they force are the foundation of your company culture.' },
    ]},
    { id:10, stageId:1, title:'The Co-Founder Question', type:'People', questions:[
      { q:'You are starting a company. Should you look for a co-founder?', choices:['Always — solo founders statistically underperform','Only if you find someone who adds genuine complementary value you cannot hire for later','No — co-founders create governance complexity and split equity unnecessarily','Only if investors require it'], correctIndex:1, feedback:'Solo founders can succeed — and sometimes succeed better without the governance costs of a co-founder relationship. The question is whether the person adds genuine complementary capability at a level that justifies the equity and relationship complexity. A mediocre co-founder is far worse than no co-founder.', lesson:'The co-founder bar is high. The right person is worth more than their equity cost. The wrong person is more expensive than either of you can calculate.' },
      { q:'What is the most important quality to look for in a co-founder?', choices:['Complementary technical skills you personally lack','A track record of finishing what they start under pressure','Deep domain expertise in your target market','An existing network in your target customer base'], correctIndex:1, feedback:'Every quality matters, but the meta-quality of finishing things under pressure reveals whether a person is a builder or a dreamer, whether they have resilience, and whether they will be there when the company hits the wall. Technical skills can be hired. Execution discipline is harder to assess and rarer.', lesson:'The most undervalued co-founder quality: finishing things when they are hard. Look for evidence in their history, not their ambition.' },
      { q:'You and your co-founder disagree on the company direction. How do you resolve it?', choices:['The technical co-founder wins on product decisions; the business co-founder wins on strategy','Bring in an investor or advisor to arbitrate the disagreement','Agree in advance on a decision-making framework — specific domains belong to each founder','Hold a vote and both commit to the outcome regardless of who wins'], correctIndex:2, feedback:'Domain ownership is the only sustainable conflict resolution framework. Ad hoc arbitration produces inconsistency. Voting does not scale when you are two people. Agreed-upon domains — "you own product decisions, I own go-to-market" — mean most conflicts resolve themselves because the domain is clear.', lesson:'Agree on who owns what before conflicts arise. Domain clarity is the co-founder prenuptial agreement.' },
      { q:'What percentage of startups that fail cite co-founder conflict as a primary or contributing factor?', choices:['About 10%','About 20%','About 40-50%','Over 65%'], correctIndex:2, feedback:'Estimates range widely, but most research places co-founder conflict at 40-50% of startup failures — making it one of the top three causes alongside market timing and product-market fit failure. This is why co-founder selection is the most important hiring decision a founder ever makes.', lesson:'Co-founder conflict kills nearly as many startups as bad markets. Select and structure the relationship with this in mind.' },
      { q:'How do you handle a co-founder who is underperforming but is your close friend?', choices:['Have the hard conversation immediately — mixing friendship and business requires explicit professionalism','Give them more time — friendship demands more patience than you would give a stranger','Hire around their weakness so the company does not suffer','Exit the company yourself rather than damage the friendship'], correctIndex:0, feedback:'The friendship is better served by honesty than by avoidance. The conversation is hard — but the outcome of not having it is a failing company, resentment, and a harder conversation in 12 months when stakes are higher. Professionalism is not the enemy of friendship; it is what protects it in a business context.', lesson:'Have the performance conversation now. Delaying it is not kindness — it is deferring a worse version of the same conversation.' },
    ]},
    // ─── STAGE 2: THE CUSTOMER ────────────────────────
    { id:11, stageId:2, title:'Who Exactly Is Your Customer?', type:'ICP', questions:[
      { q:'What does ICP stand for and why does it matter?', choices:['Integrated Customer Profile — a complete 360 view of all customer types you serve','Ideal Customer Profile — the specific type of customer who gets the most value from your product and is easiest to acquire and retain','Internal Customer Process — the steps customers go through to buy from you','Initial Customer Payment — the first transaction that validates willingness to pay'], correctIndex:1, feedback:'ICP is Ideal Customer Profile. It matters because not all customers are equal. Some will buy quickly, extract maximum value, renew, expand, and refer others. Others will buy slowly, churn early, and drain support resources. Building for your ICP and acquiring only ICPs is how unit economics improve over time.', lesson:'Define your ICP ruthlessly. Then align every go-to-market motion to attract only them.' },
      { q:'You have two types of customers: ones who love your product and ones who use it passively. Who do you focus on?', choices:['The passive users — they are bigger in number and represent more revenue potential','The passionate users — they reveal what the product truly does best and who it serves optimally','Split attention evenly — both types need to be served well','The passive users — converting them to passionate ones is a better use of resources than doubling down on existing fans'], correctIndex:1, feedback:'The passionate users are your ICP in action. They tell you what problem is truly solved, what features matter, and what the product\'s authentic value proposition is. Designing for passive users produces mediocre products. Designing for passionate users produces products that passionate users evangelize to others exactly like them.', lesson:'Your biggest fans are your product roadmap. Study them obsessively — they reveal who you are truly building for.' },
      { q:'Why is segmentation more important than targeting the largest possible audience?', choices:['Segmentation reduces marketing costs by narrowing ad targeting','A focused segment allows you to build a perfect product for a specific pain rather than an average product for everyone','Investors prefer focused market bets to broad market plays','Segmentation enables faster hiring because team needs are clearer'], correctIndex:1, feedback:'Building for everyone means building for no one. A product perfectly calibrated to one segment\'s specific pain will be loved intensely by that segment and generate word-of-mouth. An average product for a broad audience generates average engagement, high churn, and no virality.', lesson:'Go narrow first. Be the perfect solution for a specific someone before being a mediocre solution for anyone.' },
      { q:'What is a "negative ICP" and why should you define it?', choices:['A customer who gives negative reviews but continues paying','A customer type who will never extract real value from your product and should not be sold to','A hypothetical customer used to stress-test product positioning','A customer who exhibits early churn signals within the first 30 days'], correctIndex:1, feedback:'The negative ICP is the type of customer your sales team should not pursue, even if they seem willing to buy. They will churn, generate high support costs, damage your NPS, and divert attention from serving your actual ICP. Saying no to the wrong customer is as strategically important as saying yes to the right one.', lesson:'Define who you will not sell to. Turning away bad-fit customers is one of the highest-leverage decisions in early sales.' },
      { q:'Your B2B product has 3 possible buyers: the end user, the budget owner, and the IT approval team. Who is your customer?', choices:['The end user — they determine whether the product gets used','The budget owner — they sign the check and define ROI','All three — they are all customers who must be satisfied','The answer depends on who feels the problem most acutely and who can champion your product internally'], correctIndex:3, feedback:'In enterprise sales, the champion is the person who feels the problem most acutely and has enough organizational credibility to drive adoption. They might not control the budget, but they are your internal salesperson. Identify and enable them first; engage the budget owner and IT through them.', lesson:'In complex sales, find the internal champion — the person whose pain is greatest and whose credibility can carry your product through procurement.' },
    ]},
    { id:12, stageId:2, title:'The Art of the Customer Interview', type:'Research', questions:[
      { q:'What is the "Mom Test" in customer discovery?', choices:['Testing your idea with your mom to get an unbiased perspective','A framework for asking questions in ways that do not let customers know your idea or lead them to polite validation','A method for pitching ideas using emotional stories about family pain points','A test that determines whether an idea is simple enough for non-technical users to understand'], correctIndex:1, feedback:'The Mom Test (Rob Fitzpatrick) is about asking questions that reveal truth rather than confirmation. Questions like "What do you think of this idea?" invite polite enthusiasm. Questions like "Tell me about the last time you tried to solve this problem" reveal actual behavior and real pain.', lesson:'Ask about behavior in the past. Never ask for opinions about the future. Past behavior is data; future intent is flattery.' },
      { q:'What is the most common mistake founders make in customer interviews?', choices:['Asking too many questions and overwhelming the customer','Pitching the product idea during what should be a discovery conversation','Not recording the conversation and losing important details','Asking only about the problem and not about budget and willingness to pay'], correctIndex:1, feedback:'The pitch during discovery is the cardinal sin. Once customers know your idea, they shift from honest sharing to helpful validation — which is useless. The entire value of the discovery interview is getting uncontaminated signal about the problem before the customer knows your solution.', lesson:'In discovery interviews, you are a journalist, not a salesperson. Keep your solution out of the conversation entirely.' },
      { q:'You interview 20 customers and only 5 of them have the problem you are trying to solve. What do you do?', choices:['Change the product to serve all 20 customers broadly','Focus on the 5 — they are your actual target customer; the others were mismatched','Question whether the problem is real enough to build a business around','Interview 80 more customers to get a statistically significant sample before deciding'], correctIndex:1, feedback:'25% hit rate across 20 unfiltered interviews is not discouraging — it is clarifying. You now know who your real customer is. The 15 who do not have the problem are outside your ICP. Refine your targeting toward the profile of the 5 who do have the problem and interview 20 more of them specifically.', lesson:'A focused sample beats a large diffuse one. Finding 5 who have the problem tells you more than 20 who might.' },
      { q:'What does it mean when a customer says "I have always wanted something like this"?', choices:['Strong validation — there is proven demand for the product','A weak positive signal — it suggests the problem is real but has been endured rather than solved, implying potentially low urgency','A warning sign — if they have wanted it for years, why have they not found or built a solution?','Neutral — people say this about many things without following through on purchasing'], correctIndex:1, feedback:'"I have always wanted this" tells you the problem has been around a long time and no one has solved it well enough. That is actually a useful data point — but paired with "and here is what I am doing about it today" reveals urgency. If they are doing nothing about it today, urgency may be low.', lesson:'"I always wanted this" without "and here is what I am currently doing about it" often means the problem is tolerable, not urgent.' },
      { q:'What question should you never ask in a customer interview?', choices:['"Would you pay for a solution to this problem?"','"How do you currently handle this situation?"','"What is your biggest challenge in this area?"','"Can you show me the last time you dealt with this problem?"'], correctIndex:0, feedback:'"Would you pay?" is a leading question that prompts hypothetical commitment, which is almost always disconnected from real behavior. Better approaches: "Have you paid for solutions to this in the past?" or "Walk me through what happened the last time this cost you time or money." Behavioral evidence is what you are after.', lesson:'Never ask hypothetical willingness-to-pay questions. Instead ask about actual past spending on this problem.' },
    ]},
    { id:13, stageId:2, title:'Personas Are Not People', type:'Empathy', questions:[
      { q:'What is the primary risk of building products based on marketing personas?', choices:['Personas are too expensive to develop for early-stage companies','Personas are generalizations that can replace actual customer understanding with fictional proxies','Personas focus too much on demographics and ignore psychographic drivers','Personas are useful but not specific enough for early-stage product decisions'], correctIndex:1, feedback:'Personas are useful for communication but dangerous when they replace actual customer engagement. When a team says "our customer, Jennifer, values efficiency" without having talked to a real Jennifer in weeks, they are making product decisions based on fiction. Personas should be living documents constantly updated by real conversations.', lesson:'Keep customer personas anchored to real quotes from real conversations. The moment they feel like fictional characters, they are useless.' },
      { q:'What is "the jobs to be done" framework?', choices:['A HR framework for defining role responsibilities in fast-growing startups','The idea that customers hire products to perform specific functional, emotional, and social jobs — and the product that does those jobs best wins','A project management methodology for defining deliverables and success criteria','A customer segmentation approach based on the tasks customers need to complete'], correctIndex:1, feedback:'Jobs-to-Be-Done (Clayton Christensen) reframes the question from "who is the customer?" to "what job is the customer trying to get done?" A milkshake might be hired for the job of "making my boring morning commute more interesting." Understanding the job reveals the true competition and the true value.', lesson:'Ask not what category your product is in, but what job your customer hires it to do. The job defines the competition and the value proposition.' },
      { q:'Why do customers not behave the way they say they will in research?', choices:['Customer research questions are poorly worded and produce unreliable data','The context of an interview removes the emotional, social, and situational factors that drive actual purchasing behavior','Customers lie deliberately to appear more rational than they are','Research samples are rarely representative of the actual customer base'], correctIndex:1, feedback:'The classic problem of stated versus revealed preference. In an interview, customers describe ideal, rational behavior. In real purchasing situations, they are subject to loss aversion, social influence, friction, time pressure, and emotion. Research tells you their aspirational self; their behavior tells you their real self.', lesson:'Observe what customers do, not just what they say. Real behavior in real contexts is the only data that reliably predicts future behavior.' },
      { q:'You build a product based on customer feedback and nobody uses the most requested feature. What happened?', choices:['The feature was poorly implemented and UX needs improvement','Customers do not know what they want — ignore their feature requests','The feature solved a stated preference, not a behavioral need — the wrong question was asked','Market conditions changed between research and launch'], correctIndex:2, feedback:'Henry Ford\'s famous quote applies here: if he had asked customers what they wanted, they would have said faster horses. Customers are excellent at describing their problems and poor at designing solutions. Feature requests often mask the real underlying need. Dig beneath the feature to understand the job.', lesson:'Never build directly from feature requests. Dig one level deeper to find the underlying need the feature is meant to address.' },
      { q:'Maya says: "The brand starts with understanding, not positioning." What does this mean?', choices:['Brand identity should be developed before product positioning statements','Deep empathy with customer motivations and anxieties is the raw material of authentic brand strategy','Marketing positioning precedes branding in the go-to-market sequence','Understanding market data is more important than understanding individual customer stories'], correctIndex:1, feedback:'Authentic brand strategy emerges from real customer understanding — what they fear, aspire to, value, and believe. Brands that start with positioning statements often feel generic and forgettable. Brands that start with "we understand you deeply" create emotional resonance that positioning alone cannot manufacture.', lesson:'To build a brand that connects, start with what you know about customers\' inner world — not your product\'s positioning statement.' },
    ]},
    { id:14, stageId:2, title:'Talking to Customers at Scale', type:'Systems', questions:[
      { q:'When should you transition from one-on-one customer interviews to scalable research methods?', choices:['Immediately — quantitative data is more reliable than qualitative insights','After you have enough qualitative insight to form specific hypotheses worth testing quantitatively','When you reach 1,000 customers and interviews become logistically impossible','When investors ask for market validation data beyond anecdotal evidence'], correctIndex:1, feedback:'Qualitative interviews build the hypotheses; quantitative methods test them at scale. Starting with surveys before knowing the right questions produces garbage data. Starting with interviews before scaling to surveys produces both understanding and reliable validation.', lesson:'Qualitative before quantitative. Interviews build the hypothesis; surveys test it at scale.' },
      { q:'What is the value of a customer advisory board for an early-stage startup?', choices:['Regulatory credibility and industry association membership','A structured way to access 10-20 deep customers for ongoing product feedback and market intelligence','Free consulting from industry experts in exchange for equity','Access to their personal networks for business development and partnership opportunities'], correctIndex:1, feedback:'A customer advisory board of 10-20 passionate early users gives you ongoing, context-rich product feedback that surveys cannot replicate. The relationship is deeper than a survey respondent — these customers have enough context to give useful, specific input and enough investment to be honest.', lesson:'Build a customer advisory board early. 10 deeply engaged users are worth more than 1,000 survey respondents for product decisions.' },
      { q:'How often should a founder personally talk to customers after achieving product-market fit?', choices:['The founder should delegate customer research to the product and customer success teams at this stage','Regularly — at least 5-10 customer conversations per month, every month, forever','Quarterly through structured NPS surveys and customer health reviews','Only during product planning cycles or when major features are being designed'], correctIndex:1, feedback:'Customer disconnection is one of the most dangerous things that happens as companies scale. When founders stop talking to customers, they start managing data — and miss the qualitative signals that data cannot capture. The best founders at scale still run regular customer calls themselves.', lesson:'Customer conversations are not a phase. They are a permanent founder responsibility, regardless of company size.' },
      { q:'What is NPS and what are its limitations as a customer health metric?', choices:['Net Profit Score — a calculation of customer contribution margin; limited because it ignores churn','Net Promoter Score — a measure of recommendation likelihood; limited because it measures intent not behavior and can mask segment-level problems','New Product Satisfaction — a launch metric; limited to evaluating new features rather than ongoing satisfaction','Net Purchase Score — a measure of repeat purchase likelihood; limited because it focuses on transactional rather than emotional loyalty'], correctIndex:1, feedback:'NPS measures "how likely are you to recommend?" on a 0-10 scale. The limitations are real: it is a stated intent metric (not behavioral), a single aggregate NPS can hide dramatically different experiences among different segments, and it tells you the score but not the reason behind it.', lesson:'Use NPS as a signal and follow-up with open questions to find the reasons behind the score. The number is less useful than the why.' },
      { q:'A customer threatens to leave unless you build a specific feature. You do not have the resources to build it now. What is the best response?', choices:['Promise to build it by a specific date to retain the customer','Tell them honestly where it sits in the roadmap and why other priorities are ahead of it','Offer a discount in exchange for staying without the feature','Ask them to describe in detail what the feature would change for them — their answer may reveal a faster solution'], correctIndex:3, feedback:'The feature request might mask a simpler underlying need that can be addressed without building the exact feature. "What would this change for you?" often reveals that the customer needs a specific outcome, not the specific feature — and you might already have a way to get them there.', lesson:'Before building a demanded feature, understand the job it does. A simpler solution to the real underlying need is often already available.' },
    ]},
    { id:15, stageId:2, title:'The Segment Decision', type:'Strategy', questions:[
      { q:'Why do most B2B startups fail when trying to sell to enterprise companies too early?', choices:['Enterprise companies do not adopt unproven technology without extensive case studies','Sales cycles are so long that you run out of money before deals close','Enterprise procurement requires compliance and security certifications you do not have','All three create a perfect storm of failure — cash, credibility, and compliance all simultaneously block you'], correctIndex:3, feedback:'Enterprise sales early is a triple trap: sales cycles that exceed your runway, compliance requirements you are not built for yet, and lack of case studies that enterprise procurement demands. The most common pivot advice given to early startups is: "Go SMB first, build case studies, then move upmarket."', lesson:'Go SMB first, prove value, build case studies, then move to enterprise — not the other way around.' },
      { q:'What is a "beachhead" market and why should your first focus be very narrow?', choices:['The geographic market you enter first before expanding internationally','A small, specific market segment you dominate completely before expanding — the beach head where you establish total control before advancing','The most price-sensitive customer segment you use to validate willingness to pay','The market segment with the lowest CAC and highest volume'], correctIndex:1, feedback:'Geoffrey Moore\'s crossing the chasm concept: before you can mass-market, you need to own a niche completely. The beachhead is the small segment where you can be the undisputed winner — which gives you the case studies, the word-of-mouth, and the referral network to expand from.', lesson:'Pick one small market and dominate it completely before expanding. Being #1 in a niche is worth more than being #10 in a large market.' },
      { q:'How do you know when you have truly run out of customers in your initial segment?', choices:['When you have spoken to everyone in the segment and have no more referrals','When growth slows despite strong product-market fit within the original segment — a natural signal to expand','When your NPS drops below 50 in the segment, indicating declining satisfaction','When competitors start targeting your segment specifically'], correctIndex:1, feedback:'You rarely run out of customers — you run out of efficient ways to reach them within the segment. When acquisition gets harder and more expensive despite the product being loved, it is a signal the segment is saturated and expansion is needed. This is a good problem — it means you earned the right to expand.', lesson:'Segment saturation is a success signal. When growth slows despite strong product love, it is time to expand your ICP definition.' },
      { q:'What is the danger of segmenting by demographic rather than behavioral characteristics?', choices:['Demographic segments are too large to target efficiently with limited marketing budgets','Demographics describe who customers are; behavior describes what drives purchasing — the wrong filter leads to targeting the wrong people with the right demographics','Demographic segmentation requires expensive market research that early startups cannot afford','Behavioral data is harder to collect than demographic data, so demographic-first is a practical necessity'], correctIndex:1, feedback:'A 45-year-old executive and a 25-year-old entrepreneur might have identical purchasing behavior for a B2B tool — demographics tell you nothing useful. Behavioral segmentation (people who do X, have Y problem, and behave like Z) is far more predictive of who will buy and who will stay.', lesson:'Segment by behavior, not demographics. Who they are matters less than what they do and what problem they feel.' },
      { q:'Zara asks: "If you woke up tomorrow with no marketing budget, how would your best customers find you?" What should your answer reveal?', choices:['Your PR and media strategy for earned reach without paid media','The organic virality of your product and the natural channels through which your ICP discovers solutions like yours','Your dependency on paid acquisition and the risk it creates','Your product\'s word-of-mouth potential and referral program strategy'], correctIndex:1, feedback:'This question reveals whether your go-to-market is structural or financial. If the answer is "I don\'t know" or "they wouldn\'t," your acquisition is entirely dependent on paid channels — a fragile and expensive position. The strongest businesses have ICP members who find them because of where they already spend their attention.', lesson:'Your best growth channel is where your ICP naturally spends attention. Know where that is and be there before they are looking for you.' },
    ]},
    { id:16, stageId:2, title:'Empathy vs Sympathy in Business', type:'Mindset', questions:[
      { q:'What is the difference between empathy and sympathy in a founder-customer relationship?', choices:['Empathy leads to products that customers actually want; sympathy leads to products that founders think customers should want','Empathy is about understanding customer feelings; sympathy is about sharing them — both are equally valuable in product development','Empathy means walking in the customer\'s shoes; sympathy means feeling sorry for their problem — empathy is harder and more valuable','There is no meaningful difference; both describe emotional connection with customer needs'], correctIndex:2, feedback:'Empathy — genuinely experiencing and understanding the customer\'s world — produces insight that sympathy cannot. A founder who feels sorry for a customer\'s problem will build a solution based on pity. A founder who truly inhabits the customer\'s daily frustration will build a solution that feels obvious and necessary.', lesson:'Build empathy through immersion: use your own product, shadow customers, and live their workflow. Sympathy is insufficient.' },
      { q:'Why do so many products fail despite solving a "real" problem?', choices:['The solution is technically sound but economically unviable for the target customer','The problem is real but the product does not solve it in a way that fits the customer\'s existing behavior and context','The market size is insufficient to build a venture-scale business even if the problem is genuine','All of the above — real problems can have product-market fit failures on multiple dimensions simultaneously'], correctIndex:1, feedback:'The most common nuanced failure: the problem is real, but the solution demands too much behavior change. Customers will not abandon their existing workflow for a marginally better solution. The product must fit into how customers already work, not demand they change how they work to use it.', lesson:'Build solutions that fit into existing behavior. Products that require significant behavior change fail even when the underlying problem is real.' },
      { q:'A customer gives you negative feedback about your product in a review. What is the healthiest response?', choices:['Respond publicly to defend the product\'s actual capabilities','Reach out privately to understand the specific experience and what went wrong','Treat it as an outlier and focus on the positive reviews','Use it to update your ICP definition — this might be a customer you should not have sold to'], correctIndex:1, feedback:'Private outreach to unhappy customers generates more product insight per conversation than any research project. They are telling you where your product failed them specifically — which is the exact data you need to improve retention and reduce future churn.', lesson:'The negative reviewer is your most valuable advisor. Reach out personally, listen without defending, and fix what broke.' },
      { q:'Sam says: "The best product teams spend more time with customers than with code." Is this true?', choices:['No — engineers need to be coding to ship fast; customer time should be allocated to product managers','Yes for early stage, but scales must shift as the team grows and processes formalize','Yes always — every product decision should be grounded in recent customer contact regardless of company stage','It depends on the product type — B2C products can be tuned by data; B2B needs more direct customer contact'], correctIndex:1, feedback:'At early stage: 100% true. The product team is still forming its customer understanding and every decision should be customer-grounded. At scale: still true, but the methods shift toward synthesized customer data rather than direct interviews for every decision. The principle never changes; the method does.', lesson:'Customer contact time should never drop to zero for product teams. What changes at scale is how you collect and synthesize that contact.' },
      { q:'What is a "superfan" and how should you treat them?', choices:['A customer who makes unusually large purchases — maximize their expansion revenue','A customer who loves your product so much they voluntarily advocate for it without incentive — study them obsessively and make them feel seen','A power user who influences purchasing decisions in their industry — develop a formal partner or ambassador program','A customer who has been with you since the earliest days — reward their loyalty with special pricing and access'], correctIndex:1, feedback:'Superfans are the signal underneath the noise. They love something specific about your product that others feel less intensely. Understanding exactly what they love and why reveals your true product-market fit. Treating them exceptionally well — access, early features, founder relationship — turns them into your best marketing channel.', lesson:'Study your superfans forensically. What they love about you is your competitive advantage, not what your average customer thinks is fine.' },
    ]},
    { id:17, stageId:2, title:'The Retention Insight', type:'Analytics', questions:[
      { q:'Why is retention the most important metric for a consumer startup?', choices:['Investors value retention metrics more than growth metrics in down markets','Retention determines LTV which determines how much you can spend on acquisition — without retention, every growth strategy eventually becomes economically unviable','High retention signals product-market fit more reliably than any other metric','All of the above — retention is simultaneously the PMF signal, the LTV driver, and the growth engine foundation'], correctIndex:3, feedback:'Retention is the master metric because it is simultaneously the PMF indicator, the LTV driver, and the word-of-mouth engine. A product that retains well grows compoundingly through referrals. A product that does not retain is a leaky bucket — you pour in users but they drain out as fast as you acquire them.', lesson:'Fix retention before fixing acquisition. A leaky bucket grows no matter how much water you pour in.' },
      { q:'What is a "retention curve" and what does a healthy one look like?', choices:['A chart showing the percentage of users still active over time; healthy means it flattens above 0 rather than declining to 0','A chart showing revenue retention over time; healthy means it trends upward due to expansion','A chart showing how long it takes for new users to reach their first meaningful action; healthy means under 5 minutes','A chart showing the distribution of reasons for churn; healthy means no single reason exceeds 20%'], correctIndex:0, feedback:'A retention curve that flattens — even at 10% — means you have a core of customers for whom the product is truly essential. A curve that declines to 0 means everyone eventually leaves — which is the death signal. The height at which the curve flattens tells you how large your real addressable market is within your user base.', lesson:'A retention curve that flattens means you have a real core product. The height it flattens at tells you your true PMF depth.' },
      { q:'You notice that customers who complete a specific action in the first 7 days retain at 3x the rate of those who do not. What do you do?', choices:['Make that action the centerpiece of your onboarding — get every new user to it as fast as possible','Study whether the action is causal or correlational before designing around it','Build a notification campaign to push users toward the action after signup','Report this finding to leadership as the key driver of product-market fit'], correctIndex:0, feedback:'This is the "aha moment" insight — the specific action that predicts long-term retention. In practice: do both A and B. Redesign onboarding around the action immediately (because the correlation is valuable regardless of causality) and build the test to confirm causality simultaneously.', lesson:'Find your "aha moment" — the action that predicts long-term retention — and redesign onboarding to get every user there as fast as possible.' },
      { q:'A customer who has been with you for 18 months suddenly stops using the product. What is the most likely explanation?', choices:['A competitor offered better pricing or features','The contact who championed your product left the company','Their business needs evolved beyond what your product currently offers','The product had a quality or reliability issue they experienced'], correctIndex:1, feedback:'Churn after 18 months of healthy usage is most commonly explained by champion departure — the person who was the internal advocate, power user, and renewal decision-maker left their role. Without a champion, the product loses internal support and the renewal does not happen. Multi-threading (building relationships across the account) prevents this.', lesson:'Build relationships across accounts, not just with your champion. When they leave, the account should not follow.' },
      { q:'What is "expansion revenue" and why is it more valuable than new customer revenue?', choices:['Revenue from premium features added to existing subscriptions; more valuable because it has zero CAC and proves product value delivery','Revenue from expanding into new geographies; more valuable because it carries existing brand trust into new markets','Revenue from annual vs monthly subscriptions; more valuable because it improves cash flow predictability','Revenue from enterprise tier upgrades; more valuable because enterprise contracts have longer terms and lower churn'], correctIndex:0, feedback:'Expansion revenue — upsells, seat additions, premium tier upgrades — comes with zero Customer Acquisition Cost because you already have the customer. More importantly, expansion revenue is proof that customers are getting real, growing value from your product. It is simultaneously the most profitable and most validating growth signal.', lesson:'Expansion revenue is the best revenue because it is free to acquire and proves you are delivering growing value.' },
    ]},
    { id:18, stageId:2, title:'The Lost Customer', type:'Learning', questions:[
      { q:'What is the most valuable thing you can do when a customer churns?', choices:['Offer a discount or incentive to win them back immediately','Conduct a candid exit interview to understand exactly what drove them to leave','Remove them from your CRM to avoid skewing active customer metrics','Analyze their usage data to identify the behavioral signal that predicted their departure'], correctIndex:1, feedback:'Exit interviews with churned customers are one of the most underutilized research activities in startups. Churned customers are finally free of social obligation to be polite — they will tell you the truth. That truth, collected systematically, is a product roadmap for reducing future churn.', lesson:'The best interview is with someone who just left. They are finally free to be honest. Listen carefully.' },
      { q:'A competitor told your customer they do everything you do plus 10 more features. The customer churned. What is the real lesson?', choices:['You need to build faster and add more features to stay competitive','Your product value proposition was not clear enough for the customer to see the features you had that they needed','The competitor\'s positioning was stronger and your sales process did not pre-empt competitive objections','You were not multi-threaded in the account — the competitor found the right internal champion first'], correctIndex:1, feedback:'Feature comparison churns are almost always positioning failures. The customer who churns for a competitor\'s feature list was never convinced of your specific superior value. Strong positioning makes competitive comparisons irrelevant because customers are not evaluating the same thing — they are looking for what only you do best.', lesson:'When customers churn for a competitor feature list, you have a positioning problem, not a product problem. Clarify your unique value first.' },
      { q:'What percentage of churned customers typically give the real reason for leaving?', choices:['About 70% — most customers are willing to be candid when asked directly','About 40-50% — roughly half give the real reason; the rest give socially comfortable reasons','About 20-30% — most give polite or vague answers that protect the relationship','About 90% — people who have already left have no incentive to soften the truth'], correctIndex:1, feedback:'Even in exit interviews, customers often give the polite reason (moving to a competitor, cost, shifting priorities) rather than the uncomfortable reason (the product was confusing, support was terrible, we lost trust after a bug). Skilled interviewers probe the polite reasons to find the real ones.', lesson:'The first reason a churned customer gives is usually not the real one. Ask follow-up questions until you get to the thing they were reluctant to say.' },
      { q:'You analyze churn data and find that 60% of churners never used Feature X, which power users love. What do you do?', choices:['Build a better version of Feature X to make it more compelling','Design an activation campaign to get new customers to Feature X within their first 14 days','Survey churners to understand why they never used Feature X','Make Feature X the hero of your onboarding experience — it is clearly the retention driver'], correctIndex:1, feedback:'If Feature X drives retention but most customers never reach it, your onboarding is failing. The product may be great — the path to it is broken. Fixing onboarding to deliver customers to the feature that creates stickiness is more valuable than building more features on top of an already-strong retention driver.', lesson:'When the retention-driving feature has low adoption, fix the path to it before building anything new.' },
      { q:'Sam says: "The goal is not to prevent all churn — it is to prevent the churn that should not have happened." What does this mean?', choices:['Some churn is natural product-market fit filtering — customers who were not in your ICP were always going to leave','You should accept churn from power users but fight aggressively to retain casual users','Preventing churn is not economically justifiable for low-value customers — focus retention on high-LTV accounts only','Churn from product failure is different from churn from customer fit failure — only the former requires product changes'], correctIndex:0, feedback:'Not all churn is bad. Customers who were never in your ICP, who misunderstood your product, or who fundamentally could not extract value from it will churn — and preventing their churn would require compromising the product for everyone else. Distinguish fit-churn from product-churn before building a retention strategy.', lesson:'Some churn is a good product saying goodbye to the wrong customer. Fix product-churn; accept ICP-churn.' },
    ]},
    // ─── STAGES 3-10: Condensed but real skills ───────
    { id:19, stageId:2, title:"The Customer's Language", type:'Communication', questions:[
      { q:'Why should your website copy use the exact words customers use to describe their problem?', choices:['Search engines rank pages higher when they match user search queries exactly','Customers recognize their own language and feel understood — it creates immediate trust and conversion lift','Legal teams require exact language to comply with advertising standards','Customer language is more emotionally resonant than professional marketing copy'], correctIndex:1, feedback:'Using the exact words customers use to describe their problem is the highest-converting copywriting technique. When a visitor reads "Are you spending hours tracking inventory across spreadsheets?" and that is exactly how they describe their problem, the conversion is immediate because they feel seen.', lesson:'The best website copy is sentences your customers have already said out loud. Go find those sentences in your interviews.' },
      { q:'What is a "value proposition" and what makes a weak one?', choices:['A marketing tagline; weak ones are clever rather than clear','The specific outcome your product delivers for a specific customer; weak ones describe features rather than outcomes','The price-to-value ratio you offer relative to competitors; weak ones focus on price rather than quality','Your company\'s mission statement; weak ones are too abstract to be actionable'], correctIndex:1, feedback:'A value proposition answers: "For [specific customer], [product name] does [specific thing] so that [specific outcome]." Weak value propositions describe features, not outcomes — "automated expense tracking" versus "finance managers get 3 hours back per week and error rates drop to near-zero."', lesson:'Lead with the outcome the customer gets, not the feature that delivers it. "Get 3 hours back" beats "automated tracking."' },
      { q:'A customer says your product is "too complicated." What do they almost always really mean?', choices:['The interface has too many features and needs to be simplified','They have not yet reached their aha moment — the product feels complex because they do not yet see the value','The onboarding does not explain the product clearly enough','They are the wrong type of customer for your product and it shows in their feedback'], correctIndex:1, feedback:'"Too complicated" is almost always code for "I do not yet understand what this gives me." Once customers experience the value, complexity feels like power. The fix is rarely simplification — it is faster value delivery in onboarding so complexity is encountered after the reason for it is understood.', lesson:'"Too complicated" means "I do not see the value yet." Fix time-to-value before simplifying the product.' },
      { q:'What is "voice of customer" research and why is it different from regular surveys?', choices:['Verbal interviews conducted by the founder personally rather than delegated to researchers','Systematic collection and analysis of the exact language customers use to describe their problems, goals, and experiences — used to inform positioning and copy','Real-time monitoring of customer support conversations to identify product improvement opportunities','A structured advisory council program that gives customers formal input into product roadmap decisions'], correctIndex:1, feedback:'VoC research specifically harvests language — the exact words, phrases, and metaphors customers use. This language is then used directly in marketing copy, sales scripts, and product descriptions. The insight is not just what customers think but how they express it — because their expression is what resonates with prospects exactly like them.', lesson:'Voice of customer research collects language, not just opinions. The words your customers use are your most powerful marketing asset.' },
      { q:'Maya runs a brand audit and finds that customers describe your product very differently than your marketing does. What does this mean?', choices:['Your marketing is aspirational and customer language is literal — a gap is normal','There is a fundamental disconnect between how you see your product and how it actually delivers value — your marketing needs immediate revision','Customers do not fully understand the product yet — more education is needed','The brand messaging is targeted at prospects, not existing customers — a different language for each is expected'], correctIndex:1, feedback:'The gap between marketing language and customer language is one of the most actionable signals in brand strategy. If customers say "it saves me the back-and-forth" and your marketing says "streamline communication workflows," your marketing is failing to connect with the emotional experience customers actually have.', lesson:'When customer language and marketing language diverge, rewrite the marketing. Customer language always wins.' },
    ]},
    { id:20, stageId:2, title:'The Chasm Crossing', type:'Strategy', questions:[
      { q:'What is Geoffrey Moore\'s "Technology Adoption Lifecycle" and where do most startups die?', choices:['A model of how technology products evolve from invention to commodity; startups die in the maturity phase when growth slows','A model of customer types from Innovators to Laggards; startups die in the gap between Early Adopters and the Early Majority — the Chasm','A model of startup growth stages from seed to exit; startups die at the Series A bridge between product development and scaling','A model of market penetration rates; startups die when they cannot pass 10% market penetration'], correctIndex:1, feedback:'The Chasm (Geoffrey Moore) is the gap between Early Adopters (who buy on vision) and the Early Majority (who buy on proven solutions and peer references). Most startups die here because the strategy that works for Early Adopters — visionary pitch, rough product — completely fails for the Early Majority who want proof, case studies, and references.', lesson:'Different customers need different sales approaches. What worked in your first 100 sales will likely fail in your next 10,000.' },
      { q:'What strategy does Moore recommend for crossing the chasm?', choices:['Expand your product to serve as many customer types as possible simultaneously','Own one niche completely — dominate the beachhead with total market focus — then expand from that position of strength','Raise a large round to fund aggressive marketing to the mainstream market','Partner with an established company to piggyback on their customer relationships and credibility'], correctIndex:1, feedback:'The bowling pin strategy: knock over the beachhead pin (dominate one niche completely) and the adjacent pins (related segments) fall more easily. Trying to cross the chasm with broad marketing fails because mainstream customers want references from customers exactly like them — which you can only provide if you have dominated one segment.', lesson:'Own one segment completely before expanding. The beachhead gives you the references the mainstream demands.' },
      { q:'Which of these is the strongest signal that you are ready to cross the chasm?', choices:['You have raised a Series A and have enough capital to invest in mass marketing','You have a product that Early Adopters love and are beginning to find Mainstream customers who describe the same problem','You have 10+ detailed case studies from Early Adopter customers who saw strong ROI','You have a full sales team and customer success organization ready to scale'], correctIndex:1, feedback:'The readiness signal is finding Mainstream customers who describe the same problem in similar language to your Early Adopters — proving the problem is real beyond the early market. Case studies and capital help, but the primary signal is product-market fit that extends beyond the visionary customer segment.', lesson:'You are ready to cross the chasm when Mainstream customers describe the same problem as your Early Adopters without prompting.' },
      { q:'What type of customer is the most dangerous early adopter for a startup?', choices:['Customers who pay very little and demand a lot of product development support','Customers with extreme, atypical problems that drive the product in a direction that serves no one else','Enterprise customers who require extensive customization before purchasing','Customers with very high expectations who are likely to churn if the product does not immediately perform'], correctIndex:1, feedback:'The "lighthouse customer" with extreme atypical needs — a Fortune 500 company, a customer with a one-in-a-million use case — is dangerous precisely because their requirements shape your product in ways that serve no one else. Their money is real but their feedback can drive you far from the mainstream market.', lesson:'Early adopters with extreme atypical needs can drive your product off a cliff. Make sure their problems generalize to the majority.' },
      { q:'Sam says the most underrated growth strategy is also the oldest. What is he referring to?', choices:['Word of mouth — customers recommending the product to people who trust them','Direct sales — founders personally selling to every early customer','Email marketing — low-cost targeted communication to warm leads','Community building — creating a group of users who identify with each other through the product'], correctIndex:0, feedback:'Word of mouth remains the highest-converting, lowest-CAC growth channel in existence. A recommendation from someone you trust carries more weight than any ad, case study, or sales conversation. Building for word-of-mouth means building something people genuinely love — which is the foundational strategy, not a growth hack.', lesson:'Word of mouth is not a growth hack. It is what happens when you build something people genuinely love. Everything else is amplification.' },
    ]},
    // ─── STAGES 3-10: generated at runtime ───────────
  ];

  // Generate remaining 230 skills programmatically (stages 3-10, 25 each = 200 + remaining stage 2)
  const stageTopics = {
    3: ['Market Sizing Methods','Competitive Analysis Deep Dive','Positioning Strategy','Blue Ocean vs Red Ocean','Market Entry Timing','First Mover vs Fast Follower','Industry Forces Analysis','Regulatory Environment','Distribution Channels','The Niche Advantage','Category Creation','Competitive Moats','Adjacent Market Expansion','Market Disruption Patterns','Go-to-Market Sequencing','The Incumbents\' Dilemma','Pricing Strategy','Market Validation Methods','Competitor Customer Interviews','The Market Map','Segment Attractiveness','International Market Entry','Platform vs Product Strategy','The Network Effect','Defensible Positioning'],
    4: ['Defining the MVP','Build vs Buy Decisions','The Product Roadmap','Agile for Startups','The Feedback Loop','Technical Debt Trade-offs','Product-Market Fit Signals','Shipping vs Perfecting','Feature Prioritization','User Testing Methods','Design Thinking','The Aha Moment','Onboarding Design','API Strategy','Mobile-First Architecture','Data Model Design','The Build-Measure-Learn Cycle','Version 1 Lessons','Product Metrics That Matter','The Platform Decision','Developer Experience','Security from Day One','The 10x Engineer','Documentation Culture','Scaling Technical Infrastructure'],
    5: ['The Investor Pitch Structure','The Problem Slide','The Solution Slide','Market Size Slides','Business Model Clarity','Team Slide Psychology','The Ask and Use of Funds','Handling Objections','Demo Day Performance','Storytelling with Data','The Hook','Warm Introductions','AngelList and Syndicates','The Second Meeting','Term Sheet Navigation','Elevator Pitch Formula','The Vision Narrative','Pitch Deck Design Principles','Non-Dilutive Funding','Grant Strategy','Customer as Proof','Video Pitches','The Cold Email to Investors','Conference Networking','The Follow-Up Strategy'],
    6: ['First Hire Decision','The Founding Team Dynamic','Hiring for Culture','Compensation Design','Equity Philosophy','Remote Team Management','The 90-Day Onboarding','Performance Frameworks','Difficult Conversations','Building Psychological Safety','Delegation and Trust','Conflict Resolution','The Management Layer','Advisor Relationships','Board Management','Diversity in Teams','Hiring Senior Leadership','HR Compliance Basics','Team Communication Tools','The All-Hands Meeting','Recognition and Motivation','The Engineering Manager','The First GTM Hire','Offboarding Well','The Team Narrative'],
    7: ['Reading Financial Statements','Cash Flow Management','Runway Modeling','Burn Rate Optimization','Revenue Recognition','COGS Structure','SaaS Metrics Deep Dive','Forecasting Methodology','The Financial Model','Investor Reporting','Unit Economics Optimization','Pricing Experiments','Revenue Diversification','The Break-Even Analysis','Working Capital Management','Tax Strategy for Startups','Equity Financing vs Debt','Cap Table Management','Board Financial Reporting','Accounts Receivable','Vendor Negotiation','Cost Structure Analysis','The Finance Hire','Accounting Systems','Financial Due Diligence'],
    8: ['The Growth Model','Paid Acquisition Strategy','Content as a Growth Channel','SEO for Startups','Email Marketing Systems','Referral Program Design','Community-Led Growth','International Expansion','Channel Partner Strategy','The Sales Process','CRM Implementation','Marketing Attribution','Conversion Rate Optimization','Growth Experiments','The Growth Team','Brand Building at Scale','PR and Media Relations','Podcast and Audio Strategy','Event Marketing','Analyst Relations','The Renewal Engine','Expansion Revenue Strategy','Account-Based Marketing','Customer Success as Growth','Viral Loops'],
    9: ['The Founder Crisis','Cash Crisis Management','Team Crisis — Key Person Leaves','Product Crisis — Major Bug','Legal Crisis — IP Dispute','Competitive Crisis — Clone Attack','PR Crisis — Negative Viral Story','Investor Crisis — Term Sheet Pulled','Customer Crisis — Largest Account Churns','Operational Crisis — System Outage','Regulatory Crisis — Compliance Failure','The Pivot Decision','Co-Founder Breakup','Bridge Financing','Acquisition Offer During Crisis','The Morale Crisis','Layoffs — How and When','The Board Crisis','Founder Burnout','Market Crisis — Macro Economic Shock','The Pivot Playbook','Communicating Bad News','Crisis as Opportunity','Recovery Planning','Resilience Systems'],
    10: ['Defining Your Legacy','The Exit Landscape','M&A Process','IPO Readiness','Founder Transition','Board Independence','Building for Generational Value','Corporate Culture at Scale','The Founder\'s Role at 100 Employees','Giving Back — Mentorship','Documenting Institutional Knowledge','Succession Planning','The Board Chair Role','Long-Term Capital Strategy','Employee Stock Liquidity','The Acqui-hire','Strategic Partnerships at Scale','Brand at Maturity','Innovation at Scale','The Next Company','Writing the Founder\'s Story','Creating the Endowment','The Advisor Network','Impact Measurement','The Founder\'s Final Decision'],
  };

  const dialogueTemplates = [
    (t) => `The Mentor leans forward: "Every founder who walks through this door thinks ${t} is either trivial or terrifying. It is neither. It is the work."`,
    (t) => `Zara sets down her coffee: "I have seen companies die because they got ${t} wrong, and I have seen mediocre companies win because they got it exactly right. Pay attention."`,
    (t) => `Leo shakes his head: "I spent six months avoiding ${t}. Cost me more than I can put a number on. Do not make my mistake."`,
    (t) => `Maya pulls up a slide: "The data on ${t} is unambiguous. Most founders disagree with the data. The data is always right."`,
    (t) => `Sam spins in his chair: "I know you think ${t} is a business problem. It is. But the technical implications will hit you at 2am and you should understand them now."`,
  ];

  const questionTemplates = [
    (topic) => `In the context of ${topic}, which approach creates the most durable competitive advantage?`,
    (topic) => `A first-time founder is struggling with ${topic}. What is the most common mistake to avoid?`,
    (topic) => `Zara challenges you: "Why does ${topic} matter more than most founders realize?" What is the strongest answer?`,
    (topic) => `When should ${topic} take priority over other competing demands for founder attention?`,
    (topic) => `What is the most misunderstood aspect of ${topic} among early-stage startups?`,
  ];

  const generateChoices = () => {
    const pools = [
      ['Focus on speed over quality and iterate later', 'Build on strong customer insight before optimizing the approach', 'Copy what successful competitors are doing in this area', 'Outsource the function to reduce internal complexity'],
      ['The founder should handle this personally until it is properly understood', 'Delegate to a specialist immediately to free up founder bandwidth', 'Ignore it until it becomes urgent enough to justify attention', 'Hire a consultant to design the system from scratch'],
      ['When the cost of not doing it exceeds the cost of doing it wrong', 'Only after achieving product-market fit and Series A funding', 'From day one, as a foundational practice', 'When a specific crisis forces the issue onto the priority list'],
      ['Customer obsession — everything should connect to a specific customer outcome', 'Speed of execution — the fastest decision is almost always better than the most deliberate one', 'Financial discipline — every decision should pass a unit economics test', 'Team alignment — decisions should only be made when everyone agrees'],
    ];
    return pools[Math.floor(Math.random() * pools.length)];
  };

  // Concept explanations for all programmatically-generated skills
  const CONCEPT_MAP = {
    // Stage 3 — The Market
    'Market Sizing Methods': 'Estimating TAM (Total Addressable Market), SAM (Serviceable Addressable Market), and SOM (Serviceable Obtainable Market) using both top-down industry data and bottom-up unit economics. The number investors care about most is your credible SOM — the realistic slice you can capture — and the logic behind how you get there.',
    'Competitive Analysis Deep Dive': 'A structured mapping of every competitor across product capability, pricing, positioning, customer segments, and growth trajectory. The goal is not to find a gap — it is to find a gap you can defend. Most founders map obvious rivals and miss the indirect alternatives customers actually choose.',
    'Positioning Strategy': 'The deliberate decision about which competitors you want to be compared against, and how you shape that comparison in the customer\'s mind. Positioning is not your tagline. It is the mental real estate your product occupies relative to every alternative a customer could choose.',
    'Blue Ocean vs Red Ocean': 'Red Ocean: competing on the same value dimensions as existing players. Blue Ocean: redefining the competitive boundaries so comparison becomes difficult. Most startups begin in red oceans and must carve blue space through a combination of eliminating, reducing, raising, and creating value factors.',
    'Market Entry Timing': 'The single most underrated startup variable. Being right about a market but wrong about timing produces the same outcome as being simply wrong. Early markets require expensive customer education; late markets require differentiation against entrenched players. Timing is not luck — it is a hypothesis you must test.',
    'First Mover vs Fast Follower': 'First-mover advantage exists only when network effects, switching costs, or scale economies lock in customers before followers arrive. In most markets, the first mover educates customers and the fast follower converts them. Execution quality and timing beat pure arrival order.',
    'Industry Forces Analysis': 'Michael Porter\'s Five Forces: threat of new entrants, buyer bargaining power, supplier power, threat of substitute products, and competitive rivalry intensity. Used to assess whether a market is structurally attractive or a commodity trap where profit margins are structurally suppressed.',
    'Regulatory Environment': 'The legal, compliance, and governmental constraints that shape what you can build, how fast you can grow, and who can compete with you. Regulation creates both barriers and moats — founders who deeply understand their regulatory landscape turn constraints into competitive advantages.',
    'Distribution Channels': 'The paths through which your product reaches customers: direct sales, self-serve, partnerships, marketplaces, or distribution networks. Channel choice determines your CAC ceiling, speed to scale, and how much margin you give away. The best product loses to the product with better distribution.',
    'The Niche Advantage': 'Owning a small, specific segment completely before expanding. A niche gives you case studies, word-of-mouth density, and pricing power that broad-market players cannot match. You cannot win everywhere from day one. Win completely somewhere first, then expand from a position of strength.',
    'Category Creation': 'Building a new mental category in the customer\'s mind rather than competing in an existing one. Category creators define the evaluation criteria and write the comparison playbook. It is expensive and slow — but it is the only path to permanent price leadership and market definition.',
    'Competitive Moats': 'The structural advantages that make it difficult for competitors to displace you: network effects, switching costs, proprietary data, brand trust, and regulatory licensing. Moats are not built in a day. They are the compound interest of consistent early decisions made with long-term defensibility in mind.',
    'Adjacent Market Expansion': 'Entering a market closely related to your core segment using existing customers, technology, or distribution as leverage. Adjacent moves succeed when the new segment shares structural similarity with your proven segment — same buyer, similar problem, shared infrastructure — and fail when that similarity is assumed rather than verified.',
    'Market Disruption Patterns': 'Clayton Christensen\'s disruption theory: new entrants target low-end or overlooked customers with simpler, cheaper offerings, then move upmarket as quality improves. Incumbents rationally ignore them until it is too late. Understanding disruption patterns reveals where incumbents are most vulnerable.',
    'Go-to-Market Sequencing': 'The order in which you attack customer segments, channels, and geographies. GTM sequencing determines your learning speed, burn efficiency, and whether each phase funds the next. The wrong sequence burns cash on lessons you could have learned cheaply if you had started in the right place.',
    'The Incumbents\' Dilemma': 'Established companies face structural barriers to innovation: existing revenue streams, customer commitments, and organizational inertia create predictable blind spots. This is not weakness — it is rational optimization. Understanding the dilemma tells you exactly where and when to attack the established player.',
    'Pricing Strategy': 'The deliberate design of how you charge for value: price levels, packaging tiers, pricing model (per seat, usage, flat-rate), and anchoring. Pricing is the highest-leverage lever in the business. A 1% improvement in pricing typically improves profit more than a 1% improvement in volume or cost.',
    'Market Validation Methods': 'Structured experiments used to test whether a market will pay — customer interviews, landing page tests, pre-sales, letters of intent, concierge MVPs, and fake-door tests. Validation is not about proving yourself right. It is about finding out faster when you are wrong, before you have built the wrong thing.',
    'Competitor Customer Interviews': 'Conversations with your competitors\' customers — both happy ones and churned ones — to understand what is working, what is broken, and what unmet needs remain. These are the most information-dense customer interviews a founder can run. Competitors have already done the hard work of finding customers with the problem.',
    'The Market Map': 'A visual representation of the competitive landscape across two or three key dimensions — used to identify white space, cluster competitors, and communicate positioning to investors. A well-constructed market map makes invisible structure visible and helps investors instantly understand where you fit.',
    'Segment Attractiveness': 'The evaluation of whether a customer segment is worth pursuing, based on size, growth rate, purchase frequency, willingness to pay, switching costs, and strategic alignment. Not all customers are equal. The most attractive segment is rarely the largest one — it is the one where your specific advantages compound fastest.',
    'International Market Entry': 'Expanding beyond your home market requires understanding regulatory differences, localization needs, cultural purchasing behavior, local competition, and whether your unit economics hold in the new geography. Most startups enter international markets 18 months before they are ready because the demand signal is real but the operational readiness is not.',
    'Platform vs Product Strategy': 'A product solves a specific problem. A platform creates value by enabling others to build on top of it. Platform businesses benefit from network effects and are extraordinarily difficult to replicate — but require achieving critical mass before value compounds. Most companies that claim to be platforms are products.',
    'The Network Effect': 'The mechanism by which a product becomes more valuable as more people use it. Direct network effects: each user benefits from all others. Indirect: users benefit from a parallel group. Data network effects: usage improves the product for everyone. Network effects are the most powerful moat — and the hardest to bootstrap.',
    'Defensible Positioning': 'Staking out a market position that is both valuable and difficult for competitors to replicate. Defensibility comes from specificity: the more precisely you serve a defined customer with a defined problem, the harder it is to displace you without building the same depth of customer understanding from scratch.',
    // Stage 4 — The Product
    'Defining the MVP': 'Minimum Viable Product: the smallest build that tests the riskiest assumption in your hypothesis. Not the worst version — the fastest learning. An MVP has one job: produce the specific evidence that either validates or falsifies your core assumption before you invest in building the full version.',
    'Build vs Buy Decisions': 'The framework for deciding whether to build a capability internally, buy existing software, or partner with a provider. The right answer depends on whether the capability is core to your differentiation, how long building would take, and total cost of ownership over the product\'s lifetime.',
    'The Product Roadmap': 'A prioritized sequence of features, improvements, and experiments — not a promise to customers, but a living hypothesis about where value will compound fastest. Roadmaps should change when customer evidence changes, not when internal opinions shift or when a stakeholder applies pressure.',
    'Agile for Startups': 'An iterative development methodology: build small increments, ship them, measure the response, and adjust. For startups, the most critical Agile principle is not the ceremony or process. It is the cadence of learning — the speed at which customer feedback reaches the team and changes behavior.',
    'The Feedback Loop': 'The cycle of shipping → measuring → learning → improving. The tighter the loop, the faster the product improves. Every day between shipping something and hearing what customers actually do with it is wasted learning time. Shortening the loop is the highest-leverage engineering and product discipline.',
    'Technical Debt Trade-offs': 'The implied cost of shortcuts taken for speed. Technical debt compounds: early shortcuts become expensive constraints as the product scales. The strategic question is not whether to take on debt, but which debt is worth taking at which stage — and whether it will be repaid before it becomes structural.',
    'Product-Market Fit Signals': 'The qualitative and quantitative evidence that your product satisfies strong market demand. Sean Ellis benchmark: 40%+ say they\'d be very disappointed if the product disappeared. You will also see it in organic word-of-mouth, declining churn, users defending you to critics, and a pull feeling rather than a push.',
    'Shipping vs Perfecting': 'The tension between releasing something imperfect and waiting for better. The cost of delay is invisible in the moment — and real. The cost of imperfection is measurable and correctable. Reid Hoffman: if you are not embarrassed by your first version, you launched too late.',
    'Feature Prioritization': 'The process of deciding what to build next based on customer impact, strategic alignment, technical cost, and timing. Every framework — RICE, ICE, opportunity scoring — serves the same principle: build what creates the most value per unit of effort for the customers who matter most.',
    'User Testing Methods': 'The research techniques used to observe how real users interact with your product — usability tests, think-alouds, A/B tests, moderated sessions. User testing reveals what users actually do, which is always more honest and more useful than what they say they would do in a survey.',
    'Design Thinking': 'A human-centered problem-solving approach: Empathize with users, Define the real problem, Ideate solutions, Prototype quickly, and Test honestly. Design thinking prevents building solutions to problems that do not exist in the form you assumed they did. The first version of your assumptions is almost always wrong.',
    'The Aha Moment': 'The specific moment when a new user first realizes the core value of your product — the moment they understand why they should stay. Identifying your aha moment precisely and engineering the fastest possible path to it is the highest-leverage product investment in the early stage of any startup.',
    'Onboarding Design': 'The designed experience from first contact to first value — the sequence of steps that helps a new user reach their aha moment before they give up and leave. Onboarding is the most important product surface nobody sees in demos. Most churn is decided in the first 72 hours.',
    'API Strategy': 'The decisions about how your product exposes its functionality to developers and third-party integrations. An API strategy determines whether your product becomes a platform, whether you attract developer ecosystems, and whether you can be embedded in workflows you did not design.',
    'Mobile-First Architecture': 'Designing and building for mobile constraints before desktop enhancement. Mobile-first forces clarity about core functionality and removes feature bloat. It also reflects where most users actually are — for most consumer products, the mobile experience is the primary, defining one.',
    'Data Model Design': 'The foundational decisions about how information is structured, stored, and related in your product. Poor data model decisions compound: they become expensive to change as the product scales, and they constrain what features you can build without painful, expensive rework.',
    'The Build-Measure-Learn Cycle': 'Eric Ries\'s core Lean Startup loop: Build the smallest testable version, Measure what users actually do, Learn what the data means, decide whether to persist or pivot. The cycle is not about speed. It is about honesty — the willingness to measure honestly and act on uncomfortable truth.',
    'Version 1 Lessons': 'What the first real version reveals that no planning could have shown you. Version 1 lessons come from real users making unexpected choices, features nobody uses, workflows you did not anticipate, and complaints that arrive in the first 72 hours. Each one is worth more than a month of pre-launch speculation.',
    'Product Metrics That Matter': 'The small number of metrics that actually signal product health versus the long list of vanity metrics that look good in a deck. D7 and D30 retention, engagement depth, time-to-first-value, and NPS are real signals. Total signups and page views rarely predict whether your product survives.',
    'The Platform Decision': 'The strategic choice to build a platform — enabling others to create value on top of your product — versus a point solution that solves one problem completely. This decision shapes hiring, architecture, business model, and competitive dynamics for years. Most companies that call themselves platforms are products.',
    'Developer Experience': 'The quality of the experience developers have when building with your product, API, or SDK — documentation quality, onboarding friction, error clarity, and community support. Developer experience is a product discipline. Poor DX kills developer adoption regardless of how technically excellent the underlying system is.',
    'Security from Day One': 'Building security into the product architecture from the start rather than adding it as a compliance layer after a breach. Security debt compounds faster than technical debt because its cost is not paid internally — it is paid by customers, in trust and data. Retrofitting security is 5x more expensive than building it in.',
    'The 10x Engineer': 'The empirical observation that in complex knowledge work, top-decile performers often produce 5-10x the output of median performers — not by working more hours, but through better judgment, pattern recognition, and prioritization. Hiring one exceptional engineer often beats hiring three average ones.',
    'Documentation Culture': 'The organizational practice of writing down decisions, processes, and knowledge — making implicit knowledge explicit and durable. Documentation compounds: it accelerates onboarding, reduces single-point-of-failure risk, and enables scale. Teams that document well grow without losing institutional knowledge.',
    'Scaling Technical Infrastructure': 'The engineering decisions required to grow a product from hundreds to millions of users without breaking. Scalability is not just a performance problem — it is an architectural, organizational, and process problem that requires fundamentally different thinking at each order of magnitude of growth.',
    // Stage 5 — The Pitch
    'The Investor Pitch Structure': 'The standard arc of a compelling investor pitch: Problem, Solution, Market Size, Business Model, Traction, Team, and Ask. Each slide serves one job. The structure exists not because investors demand it, but because it maps to the questions every investor needs answered before they can say yes.',
    'The Problem Slide': 'The most important slide in any deck — the one that makes an investor feel the pain your customer experiences. A strong problem slide names the specific customer, quantifies the current pain, and reveals why existing solutions fall short. Without a felt problem, no solution matters.',
    'The Solution Slide': 'The slide that shows how your product specifically addresses the pain you just made the investor feel. The best solution slides are simple, visual, and demonstrate the insight that makes your approach work when others have failed. Resist the urge to explain every feature.',
    'Market Size Slides': 'The slides that establish whether the opportunity is worth pursuing at venture scale. TAM, SAM, and SOM — but presented credibly, not aspirationally. The most common mistake is presenting an enormous TAM without a credible path to capturing a meaningful SOM.',
    'Business Model Clarity': 'The ability to explain in one sentence how your company makes money, and in two more how that model scales. Investors reject more pitches for business model confusion than for bad products. If you cannot explain the economics clearly, it signals you have not deeply thought them through.',
    'Team Slide Psychology': 'The slide that answers the most important question investors ask privately: "Why is this team uniquely positioned to win this market?" Founder-market fit, relevant experience, and evidence of execution matter more than impressive titles. Investors bet on teams, not just ideas.',
    'The Ask and Use of Funds': 'The closing section that specifies how much you are raising, what it buys in terms of milestones, and what the resulting runway enables. Vague asks signal unclear priorities. A specific ask with specific milestones signals a founder who has thought rigorously about the path ahead.',
    'Handling Objections': 'The art of responding to investor challenges with intellectual honesty and preparation. The best founders absorb objections rather than deflect them, address them with data rather than rhetoric, and use them to demonstrate how deeply they have thought about their own risks.',
    'Demo Day Performance': 'The compressed pitch format — 3-7 minutes to convey a compelling story to many investors simultaneously. Demo day success is a function of clarity, confidence, and one memorable hook that makes investors want to follow up. Every word must earn its place.',
    'Storytelling with Data': 'The skill of using numbers to make emotional points rather than just informational ones. Data storytelling converts metrics into narrative: not "we grew 40% month-over-month" but "every month, 40% more founders found us without us spending a dollar on ads — here is why."',
    'The Hook': 'The opening of a pitch or email that makes an investor lean forward. A great hook is specific, surprising, or counterintuitive — it violates an expectation or reveals an insight most people have missed. The hook does not sell the company; it earns the next 60 seconds of attention.',
    'Warm Introductions': 'The mechanism by which most fundable pitches begin — a mutual contact who can vouch for the founder\'s credibility with a specific investor. Warm introductions dramatically increase response rates and set a collaborative frame before the pitch begins. Most deals start with a warm intro.',
    'AngelList and Syndicates': 'AngelList is a platform for startup fundraising and angel investing. Syndicates allow individual angel investors to pool capital behind a deal led by a trusted lead investor. For founders, syndicates provide access to many investors through one relationship rather than hundreds of individual conversations.',
    'The Second Meeting': 'The follow-up conversation after an investor shows initial interest — and the point where most deals either advance or stall. Second meetings are won by demonstrating progress on the specific concerns raised in the first, and by asking the question "What would need to be true for you to invest?"',
    'Term Sheet Navigation': 'The process of understanding, evaluating, and negotiating the key terms of an investment offer: valuation, dilution, governance rights, liquidation preferences, and protective provisions. Most founders focus on valuation. Experienced founders focus on the terms that govern control and exit economics.',
    'Elevator Pitch Formula': 'A 30-60 second verbal summary of your company that conveys who the customer is, what problem they have, what your solution does, and why you are the right team to deliver it — without jargon or unnecessary context. The elevator pitch is not for closing deals; it is for earning the next conversation.',
    'The Vision Narrative': 'The long-form story of why your company will matter in 10 years — the world as it will exist if you succeed. A compelling vision narrative is not a feature roadmap; it is a compelling description of the future that makes investors want to live in that world and back the people building it.',
    'Pitch Deck Design Principles': 'The visual and structural standards that make a pitch deck clear, professional, and memorable. One idea per slide. Minimal text. Data visualized, not tabulated. Consistent brand identity. The deck is not the pitch — it is the structure that holds the pitch while you are not in the room.',
    'Non-Dilutive Funding': 'Capital that does not require giving up equity — grants, revenue-based financing, government programs, loans, and competitions. Non-dilutive funding is often overlooked by startups focused on VC. For the right business at the right stage, it is the highest-ROI capital available.',
    'Grant Strategy': 'The systematic pursuit of government, foundation, and corporate grants as a funding source — particularly for startups in healthcare, climate, defense, research, or social impact. Grants require patience and paperwork but provide capital with no dilution and often carry credibility that unlocks other funding.',
    'Customer as Proof': 'Using actual customer stories, logos, usage data, and quotes as the most credible form of evidence in any pitch. Nothing a founder says about their own product is as persuasive as what a customer says about the value they have received. Real proof is worth more than any claim.',
    'Video Pitches': 'The asynchronous video format used for cold investor outreach or virtual pitch competitions — a 3-5 minute presentation designed to create enough interest for a live conversation. Video pitches must work in silent mode, in the first 30 seconds, and on mobile.',
    'The Cold Email to Investors': 'An unsolicited outreach to an investor you do not have a warm introduction to. Cold emails require a subject line that earns the open, a first sentence that earns the second, and a clear, specific ask. The best cold emails are short, specific about the investor\'s interest, and include one piece of proof.',
    'Conference Networking': 'The strategic use of industry events, startup conferences, and investor summits to build relationships before you need them. Conference networking is most effective when you arrive with a specific list of people you want to meet, a clear reason for each meeting, and a follow-up system.',
    'The Follow-Up Strategy': 'The sequence of actions taken after a pitch or initial meeting to maintain investor interest and demonstrate momentum without being annoying. The best follow-ups add new information — a new customer, a metric that moved, a question answered — rather than simply checking in.',
    // Stage 6 — The Team
    'First Hire Decision': 'The choice of who to bring into the company first — a decision that shapes culture, working style, and team DNA permanently. The first hire sets expectations about quality, pace, and values. A great first hire makes every subsequent hire easier. A bad first hire makes everything harder.',
    'The Founding Team Dynamic': 'The working relationship between co-founders: how decisions get made, how conflict gets resolved, how equity is shared, and how roles evolve as the company grows. Co-founder dynamics are the most underrated factor in startup success — and co-founder conflict is one of the top causes of failure.',
    'Hiring for Culture': 'The practice of assessing whether a candidate will reinforce or erode the values and working norms you are intentionally building. Culture fit is not about similarity — it is about whether a person will thrive in and contribute to the specific environment your company needs to succeed.',
    'Compensation Design': 'The structure of how you pay people: salary levels, equity allocation, bonus design, and benefit packages. Compensation design communicates what you value, determines who you can attract, and sets expectations that are very hard to reset later. Get this wrong early and you will pay for it at scale.',
    'Equity Philosophy': 'The principles that guide how you distribute equity across founders, early employees, advisors, and future hires. Equity philosophy determines who feels like an owner and who feels like an employee — and that distinction shapes how hard people fight for the company when things get difficult.',
    'Remote Team Management': 'The practices, tools, and cultural norms that enable distributed teams to collaborate effectively — asynchronous communication standards, documentation habits, overlap hours, and explicit check-in structures. Remote management failures are almost always process failures, not location failures.',
    'The 90-Day Onboarding': 'The structured program that helps a new hire become productive and culturally integrated in their first three months. The 90-day plan defines what success looks like at 30, 60, and 90 days — making performance evaluation objective and helping the new hire know they are on track.',
    'Performance Frameworks': 'The systems used to evaluate, develop, and reward individual performance: goals and key results (OKRs), quarterly reviews, structured feedback cycles, and promotion criteria. Without explicit frameworks, performance evaluation becomes subjective — which is expensive both legally and culturally.',
    'Difficult Conversations': 'The practice of addressing underperformance, misalignment, or interpersonal friction directly and honestly. Difficult conversations delayed always become more difficult. The founders who build great cultures are not the ones who avoid hard conversations — they are the ones who have them early and clearly.',
    'Building Psychological Safety': 'Creating an environment where team members feel safe to speak up, disagree, admit mistakes, and take risks without fear of punishment. Google\'s Project Aristotle found psychological safety to be the single most important factor in high-performing teams — more important than individual talent.',
    'Delegation and Trust': 'The practice of transferring decision-making authority to team members — moving from doing to enabling. Delegation requires clear expectations, appropriate authority, and genuine trust. Founders who cannot delegate become the bottleneck that prevents the company from scaling beyond their personal capacity.',
    'Conflict Resolution': 'The structured approach to addressing disagreement between team members in ways that strengthen rather than damage relationships and culture. Conflict that is avoided becomes resentment. Conflict that is addressed with clear principles becomes stronger understanding. Not all conflict is bad — unaddressed conflict always is.',
    'The Management Layer': 'The middle managers and team leads who translate company strategy into team execution. The management layer becomes necessary when the founding team can no longer maintain direct relationships with everyone. Building it too early creates bureaucracy. Building it too late creates chaos.',
    'Advisor Relationships': 'The structured relationships with experienced domain experts who provide guidance, introductions, and credibility in exchange for small equity grants. Advisors are most valuable when they have specific, relevant experience — and least valuable when they are prestigious names without time or engagement.',
    'Board Management': 'The discipline of preparing for, running, and following up on board meetings in ways that make the board a genuine asset rather than a governance obligation. The best boards are informed before meetings, focused on strategy during them, and engaged between them through regular updates.',
    'Diversity in Teams': 'The intentional practice of building teams with diverse backgrounds, perspectives, experiences, and cognitive styles. Beyond the ethical case, diverse founding teams demonstrably produce more innovative solutions by accessing wider problem-solving approaches. Diversity requires intentional process, not just intention.',
    'Hiring Senior Leadership': 'Bringing in experienced executives who have managed larger organizations than your current stage — a transition that requires clarity about what authority they have, what culture they are inheriting, and what success looks like in their first 90 days. The wrong senior hire can damage culture faster than three wrong junior hires.',
    'HR Compliance Basics': 'The legal employment requirements that apply to startups: classification of workers (employee vs contractor), required benefits, anti-discrimination policies, proper documentation, and termination procedures. HR compliance mistakes are survivable early and fatal late — and always more expensive to fix than to prevent.',
    'Team Communication Tools': 'The platforms and protocols used for internal communication: Slack for real-time, email for external, Notion or Confluence for documentation, Zoom for video. Tool choice matters less than the norms around how they are used. Mixed protocols in the same tool produce the worst of all worlds.',
    'The All-Hands Meeting': 'The company-wide gathering — weekly, monthly, or quarterly — where leadership shares strategy, celebrates wins, acknowledges challenges, and answers questions. All-hands meetings are the primary mechanism for maintaining cultural alignment as the team grows past the point of direct individual relationships.',
    'Recognition and Motivation': 'The practices used to acknowledge individual and team achievement in ways that reinforce the behaviors you want to see more of. Recognition is most powerful when it is specific, timely, and tied to the values you are explicitly building. Vague or delayed recognition has minimal impact.',
    'The Engineering Manager': 'The role between individual contributors and executive leadership in an engineering organization — responsible for team performance, technical direction, recruiting, and cross-functional communication. The best engineering managers enable engineers to do their best work rather than doing engineering themselves.',
    'The First GTM Hire': 'The first person responsible for generating revenue — often a head of sales, growth marketer, or customer success lead. The first GTM hire shapes your commercial culture permanently. Hiring too early (before you have a repeatable motion) wastes their talent. Hiring too late constrains your growth.',
    'Offboarding Well': 'The structured process of separating from an employee or contractor in a way that is legally sound, culturally respectful, and information-preserving. Poor offboarding creates legal risk, damages team morale, and loses institutional knowledge that can take months to reconstruct.',
    'The Team Narrative': 'The story you tell about your team — to candidates, investors, customers, and partners — that conveys why this specific group of people is uniquely equipped to win this specific market. The team narrative is not a resume summary. It is a compelling argument for why the team has unfair advantages.',
    // Stage 7 — The Numbers
    'Reading Financial Statements': 'The ability to interpret the three core financial statements: Income Statement (revenue and expenses over a period), Balance Sheet (assets, liabilities, equity at a point in time), and Cash Flow Statement (actual cash movement). Together they tell the complete story of financial health that no single statement can tell alone.',
    'Cash Flow Management': 'The active management of the timing and amount of cash inflows and outflows to ensure the company can meet its obligations. Profitable companies can fail from poor cash flow management. Cash is not the same as revenue, and the gap between them — often disguised by accrual accounting — is where startups die.',
    'Runway Modeling': 'The calculation of how many months the company can operate before running out of cash, modeled under multiple scenarios of spending and revenue. Runway modeling forces explicit assumptions about growth, hiring, and burn — and reveals which assumptions carry the most risk.',
    'Burn Rate Optimization': 'The systematic reduction of monthly cash consumption without proportionally reducing output or speed. The goal is not to spend as little as possible — it is to maximize the ratio of progress to capital consumed. Every dollar saved extends runway; every dollar of runway is worth more as the company proves itself.',
    'Revenue Recognition': 'The accounting rules that determine when revenue is recorded — typically when it is earned, not when cash is received. For SaaS businesses, annual contracts paid upfront are recognized monthly over the contract period, not at signing. Revenue recognition clarity prevents self-deception about financial health.',
    'COGS Structure': 'Cost of Goods Sold: the direct costs of delivering your product or service — cloud infrastructure, payment processing, support labor, licensing fees. COGS determines gross margin, which determines how scalable and capital-efficient your business model is. High COGS disguised as operating expenses is a common early mistake.',
    'SaaS Metrics Deep Dive': 'The specific metrics that define SaaS business health: ARR, MRR, NRR (Net Revenue Retention), Gross Revenue Retention, CAC Payback Period, LTV:CAC ratio, Quick Ratio, Magic Number, and Rule of 40. Each metric reveals a different dimension of whether the business compounds or leaks.',
    'Forecasting Methodology': 'The systematic process of projecting future revenue, expenses, and cash flows using assumptions about growth drivers, conversion rates, and market dynamics. A good forecast is not a prediction — it is a structured way of making assumptions explicit so you can track which ones were right and which need revision.',
    'The Financial Model': 'A spreadsheet or tool that projects the company\'s financial performance under various scenarios — a tool for decision-making, not just reporting. A good financial model is simple enough to be understood, detailed enough to be useful, and honest enough to be trusted by the people who use it.',
    'Investor Reporting': 'The regular communication of financial and operational performance to investors — typically monthly updates with metrics, narrative context, and forward-looking commentary. The investors who hear from founders consistently provide more value and are more likely to lead follow-on rounds when the time comes.',
    'Unit Economics Optimization': 'The ongoing improvement of the ratio of revenue to cost at the level of a single customer — LTV relative to CAC. Unit economics optimization is not a one-time exercise. It is a continuous practice of testing what improves the ratio on both the revenue and cost side.',
    'Pricing Experiments': 'The structured testing of different price points, packaging options, and pricing models to discover what combination maximizes revenue without disproportionately increasing churn. Most startups are underpriced, and pricing experiments are the highest-ROI test a startup can run.',
    'Revenue Diversification': 'The strategic addition of revenue streams beyond the core product — professional services, marketplace fees, data licensing, or adjacent products — to reduce concentration risk and improve predictability. Diversification that dilutes focus is dangerous. Diversification that serves the same customer deeply is valuable.',
    'The Break-Even Analysis': 'The calculation of the revenue level at which total costs equal total revenue — the point where the company stops losing money on operations. Break-even analysis reveals how much revenue growth is required to achieve profitability and how sensitive that target is to cost structure changes.',
    'Working Capital Management': 'The management of the short-term assets and liabilities that fund daily operations — accounts receivable, accounts payable, inventory, and short-term debt. Working capital problems — often invisible in a P&L — are one of the most common causes of cash crises in otherwise healthy businesses.',
    'Tax Strategy for Startups': 'The planning practices that minimize tax liability while remaining compliant — R&D credits, state tax nexus management, entity structure optimization, equity compensation planning, and timing of deductions. Early tax decisions compound. Getting them wrong is expensive; getting them right is a competitive advantage.',
    'Equity Financing vs Debt': 'The choice between selling ownership (equity) and borrowing money (debt) as financing mechanisms. Equity requires no repayment but dilutes ownership and creates investor governance rights. Debt must be repaid with interest but preserves ownership and control. The right choice depends on stage, cash flow predictability, and risk tolerance.',
    'Cap Table Management': 'The ongoing maintenance of the capitalization table — the record of all ownership stakes, vesting schedules, option grants, and convertible instruments. A clean cap table is an asset. A messy cap table — with too many small holders, unclear vesting terms, or unresolved instruments — is a fundraising liability.',
    'Board Financial Reporting': 'The preparation and presentation of financial information to the board of directors — the package that frames the company\'s performance, highlights risks, and supports strategic decisions. Board reporting is not just accounting. It is leadership communication about the true state of the business.',
    'Accounts Receivable': 'The money owed to the company by customers for products or services delivered but not yet paid for. Accounts receivable management determines how quickly invoices convert to cash. Slow-paying customers can create a cash crisis even when revenue is strong — a critical distinction for founders who read only the income statement.',
    'Vendor Negotiation': 'The process of securing favorable terms from suppliers, service providers, and software vendors — including pricing, payment terms, volume discounts, and SLAs. Vendor negotiation is a direct lever on COGS and operating expenses. Early startups often accept default terms; sophisticated founders negotiate everything.',
    'Cost Structure Analysis': 'The systematic examination of all expenses — fixed, variable, and semi-variable — to understand what drives cost growth, where inefficiencies exist, and which costs are truly necessary at the current stage. Cost structure analysis reveals where the company is funding complexity rather than capacity.',
    'The Finance Hire': 'The decision of when and whom to bring in as the first dedicated finance professional — typically a Controller, CFO, or VP Finance. Hiring too early adds cost without value. Hiring too late creates financial risk as complexity grows. The trigger is usually a fundraise, an audit requirement, or a board demand for rigor.',
    'Accounting Systems': 'The software and processes used to record, classify, and report financial transactions — QuickBooks, Xero, NetSuite for accounting; Stripe for billing; Brex or Ramp for expenses. System choices made early constrain what is possible later. The time to choose the right system is before the data becomes complex.',
    'Financial Due Diligence': 'The process by which investors verify the financial claims made in a pitch — examining revenue quality, customer contracts, expense documentation, cap table accuracy, and accounting policies. Founders who prepare for due diligence before they raise close rounds faster with fewer surprises.',
    // Stage 8 — The Growth
    'The Growth Model': 'The explicit theory of how your company acquires, retains, and expands customers — paid acquisition, virality, content, or sales-led. A growth model is not a wish list of channels. It is a testable hypothesis about the primary mechanism by which customers find and stay with your product.',
    'Paid Acquisition Strategy': 'The deliberate use of paid advertising — search, social, display, podcast, or sponsored content — to acquire customers at a predictable cost. Paid acquisition is powerful when CAC payback is short enough to justify the outlay. Without that, scaling paid acquisition scales losses, not growth.',
    'Content as a Growth Channel': 'The use of written, video, audio, or visual content to attract customers organically — building an audience that converts to customers over time. Content compounds: early investments continue generating traffic and trust for years. The downside is that it is slow. The upside is that it is durable and defensible.',
    'SEO for Startups': 'The practice of optimizing your online presence so potential customers find you through search — through keyword strategy, content quality, technical optimization, and backlink development. SEO is a long-game investment that pays compounding dividends. The right time to start is 12 months before you need the traffic.',
    'Email Marketing Systems': 'The infrastructure and strategy for using email to acquire, engage, and retain customers — segmentation, automation sequences, behavioral triggers, and deliverability management. Email remains the highest-ROI marketing channel for most B2B and consumer businesses when executed with relevance and discipline.',
    'Referral Program Design': 'The structured incentive system that encourages existing customers to refer new ones — in exchange for credits, discounts, cash, or status. Referral programs work when customers have already had an aha moment and the incentive is meaningful. They fail when the product is not yet good enough for customers to risk their reputation.',
    'Community-Led Growth': 'Building a community of users, advocates, or practitioners around your product that generates organic growth through shared knowledge, peer support, and network effects. Community-led growth is slow to build and nearly impossible to replicate once established — making it one of the most defensible growth moats.',
    'International Expansion': 'The strategic and operational decision to enter new geographic markets — involving localization, regulatory compliance, local hiring, currency management, and cultural adaptation. International expansion typically requires more resources and time than founders expect, and delivers returns later than projections assume.',
    'Channel Partner Strategy': 'The use of third-party organizations — resellers, system integrators, referral partners, or distributors — to reach customers you cannot efficiently reach directly. Channel partners trade margin for reach and speed. The risks are loss of control over customer experience and dependence on partners\' motivation to sell your product.',
    'The Sales Process': 'The repeatable sequence of steps from first contact to closed deal — prospecting, qualification, discovery, demonstration, proposal, objection handling, and close. A documented sales process is the difference between a founder who sells and a company that can sell without the founder.',
    'CRM Implementation': 'The deployment and adoption of a Customer Relationship Management system to track leads, manage pipeline, and coordinate customer communications — Salesforce, HubSpot, Pipedrive. The system is only as valuable as the data entered. Most CRM failures are adoption failures, not software failures.',
    'Marketing Attribution': 'The practice of assigning credit for customer conversions to the marketing touchpoints that influenced the decision — first-touch, last-touch, or multi-touch attribution. Attribution determines which channels receive budget. Attribution models are all imperfect; the goal is to be consistently wrong in a way that still improves decisions.',
    'Conversion Rate Optimization': 'The systematic improvement of the percentage of visitors, trials, or leads that convert to the next stage of the funnel — through testing, user research, and iterative design. CRO compounds: a 20% improvement in conversion at each stage of a three-stage funnel produces a 73% improvement in overall output.',
    'Growth Experiments': 'The structured tests run to validate growth hypotheses — A/B tests, channel experiments, pricing tests, and onboarding variants. Growth experiments should have clear hypotheses, measurable outcomes, statistical rigor, and a pre-committed decision rule about what the result means.',
    'The Growth Team': 'The cross-functional group responsible for designing and running systematic experiments to improve acquisition, activation, retention, and referral — typically composed of product managers, engineers, designers, and data analysts. Growth teams work most effectively when they have direct ownership over metrics, not just recommendations.',
    'Brand Building at Scale': 'The intentional investment in awareness, reputation, and emotional association with your company at a scale where individual relationships no longer suffice. Brand becomes increasingly important as markets become more crowded and as the company moves upmarket. Brand is the only asset that appreciates while your competitors spend.',
    'PR and Media Relations': 'The practice of earning editorial coverage in publications, podcasts, and media your customers trust — building credibility and awareness that paid advertising cannot replicate. PR requires relationships, timing, genuine newsworthiness, and patience. The best PR is earned, not placed.',
    'Podcast and Audio Strategy': 'The use of podcast appearances, sponsored content, or owned shows as a channel for reaching target audiences with longer-form, trust-building content. Audio is consumed during activities where text cannot compete — commutes, workouts, cooking — giving it unique access to your audience\'s attention.',
    'Event Marketing': 'The use of conferences, workshops, webinars, roundtables, and proprietary events to build relationships and generate pipeline with high-value prospects. Events create conversational context that digital channels cannot replicate. The measure of event ROI is pipeline generated, not badges scanned.',
    'Analyst Relations': 'The practice of building relationships with industry analysts — Gartner, Forrester, IDC — who influence enterprise purchasing decisions through research reports, magic quadrants, and briefings. For enterprise software companies, analyst relations can determine whether you appear in shortlists before you have a dedicated enterprise sales team.',
    'The Renewal Engine': 'The systems, processes, and team responsible for ensuring existing customers renew their contracts at the end of each term. A strong renewal engine is the foundation of Net Revenue Retention. Renewals that are not actively managed leak predictably — customers who feel neglected find alternatives.',
    'Expansion Revenue Strategy': 'The deliberate design of product packaging, usage tiers, and account management practices that enable existing customers to generate more revenue over time — through upsells, cross-sells, seat expansion, and usage growth. Expansion revenue is the most capital-efficient growth available to a SaaS company.',
    'Account-Based Marketing': 'A B2B strategy that focuses marketing and sales resources on a defined list of high-value target accounts, personalizing outreach to match the specific context and needs of each account. ABM inverts the traditional funnel: instead of casting wide and filtering, you identify ideal accounts first and build campaigns to them.',
    'Customer Success as Growth': 'The practice of ensuring customers achieve their desired outcomes from your product — and designing customer success as a proactive growth function rather than a reactive support function. Customer success generates expansion revenue, reduces churn, and creates the advocates who make sales easier.',
    'Viral Loops': 'The mechanisms by which product usage generates more product usage — a feature or experience that naturally causes users to invite others or expose the product to new audiences. Viral loops are most powerful when product usage is inherently social and when the value to invitees is immediate and clear.',
    // Stage 9 — The Crisis
    'The Founder Crisis': 'The moment when the company\'s survival feels genuinely in doubt — caused by cash, team, product, or market failure — and the founder must make decisions under maximum uncertainty with no guarantee of outcome. Every significant company has faced a version of this. The founder\'s response defines what the company becomes.',
    'Cash Crisis Management': 'The specific actions taken when the company is running out of money faster than expected — emergency cost reduction, accelerated revenue collection, bridge financing conversations, and hard prioritization of what survives the constraint. Cash crises reward founders who have maintained investor relationships before they need them.',
    'Team Crisis — Key Person Leaves': 'The sudden departure of a critical team member — co-founder, senior engineer, or key salesperson — at a moment that threatens continuity. The immediate priority is stabilization and honest communication. The second priority is assessment: is the departure a symptom of a broader problem, or an isolated event?',
    'Product Crisis — Major Bug': 'A critical defect that causes data loss, security exposure, or complete service failure for customers. Product crises test your incident response process, your customer communication instincts, and your team\'s ability to work under pressure. How you handle the crisis is remembered longer than the crisis itself.',
    'Legal Crisis — IP Dispute': 'A claim that your product infringes on a third party\'s intellectual property — patent, trademark, copyright, or trade secret. Legal crises require immediate legal counsel, internal fact-finding, and communication management. The worst outcomes occur when founders delay engaging counsel or misrepresent facts to investors.',
    'Competitive Crisis — Clone Attack': 'A well-funded competitor copies your core product and enters the market aggressively. The initial response is almost always wrong — reactive discounting, feature copying, or public attacks. The right response is to double down on what makes you different in the dimensions that matter most to your core customer.',
    'PR Crisis — Negative Viral Story': 'A damaging narrative about your company spreading publicly — on social media, in press, or through customer complaints going viral. PR crises follow a predictable arc: initial shock, spread, peak, and decline. The speed and quality of your response determines where on that arc the damage stops.',
    'Investor Crisis — Term Sheet Pulled': 'An investor withdraws a committed term sheet — often due to market conditions, diligence findings, or a change in fund strategy. The psychological blow is significant. The operational response is to immediately assess true runway, communicate calmly with existing investors, and run a parallel fundraising process.',
    'Customer Crisis — Largest Account Churns': 'The loss of your biggest customer at a moment when it materially changes your revenue picture. The immediate priority is understanding why — was it product, relationship, price, or competitive? The second priority is ensuring the loss does not become a pattern. One departure is a data point; two is a signal.',
    'Operational Crisis — System Outage': 'A significant failure in your technical infrastructure that prevents customers from accessing the product. Operational crises are won or lost in communication cadence: updates every 15 minutes, honest status reporting, and post-incident reviews that prevent recurrence earn more trust than the outage loses.',
    'Regulatory Crisis — Compliance Failure': 'The discovery that the company is not in compliance with applicable laws or regulations — GDPR, HIPAA, securities law, employment law. Regulatory crises require immediate legal counsel, voluntary disclosure where appropriate, and a remediation plan. The cover-up is always worse than the violation.',
    'The Pivot Decision': 'The strategic decision to fundamentally change the product, customer, or business model based on evidence that the current direction is not working. A pivot is not a desperate reaction — it is a disciplined hypothesis change. The best pivots preserve what is working while changing what is not.',
    'Co-Founder Breakup': 'The formal separation between founding partners — a legal, emotional, and operational event that affects every stakeholder in the company. Most co-founder breakups are survivable if handled with vesting cliffs, clear equity buyback terms, and communication to the team that preserves trust in leadership.',
    'Bridge Financing': 'A short-term loan or convertible investment that extends runway while a company works toward its next milestone or formal funding round. Bridge financing buys time — but time is only valuable if it is used to materially change the company\'s trajectory. A bridge that leads to another bridge rarely ends well.',
    'Acquisition Offer During Crisis': 'An offer to acquire the company that arrives during a difficult period — when the company is most vulnerable and the founder\'s judgment is most compromised. Crisis acquisitions rarely maximize value for founders and employees. The discipline required is to slow down, engage advisors, and evaluate honestly.',
    'The Morale Crisis': 'The state in which team energy, belief in the mission, and trust in leadership have declined to a point where performance is measurably affected. Morale crises often precede key-person departures. They are caused by poor communication, unrealized promises, or sustained uncertainty — and are repaired through honest, consistent leadership behavior.',
    'Layoffs — How and When': 'The reduction of headcount as a financial or strategic necessity — one of the most psychologically difficult decisions a founder makes. Layoffs done well: decided quickly when the evidence is clear, executed in one cut rather than multiple rounds, communicated with honesty and genuine support for those affected.',
    'The Board Crisis': 'A breakdown in the relationship between the founder and the board of directors — often involving loss of confidence, a failed financing, or a governance dispute. Board crises that are not addressed become removal events. The founder who manages them proactively — with transparency and a credible plan — almost always survives.',
    'Founder Burnout': 'The state of physical, emotional, and cognitive exhaustion that results from sustained high-stress, high-stakes work without adequate recovery. Founder burnout is not a weakness — it is a physiological response to sustained cortisol that impairs decision-making before the founder recognizes it. It is also preventable.',
    'Market Crisis — Macro Economic Shock': 'An external economic event — recession, interest rate shock, pandemic, geopolitical disruption — that changes customer buying behavior, fundraising conditions, or operating costs. Market crises reward companies with strong unit economics, customer relationships, and financial discipline. They eliminate companies that were relying on favorable conditions to survive.',
    'The Pivot Playbook': 'The structured process for executing a strategic pivot: preserving team morale, managing investor communication, salvaging existing customer relationships, and repositioning the product for the new direction. The difference between a pivot and chaos is the discipline of the transition plan.',
    'Communicating Bad News': 'The practice of sharing difficult information — missed projections, customer losses, team departures, or product failures — with stakeholders in a way that maintains trust and preserves relationships. Bad news shared proactively and honestly compounds trust. Bad news that surfaces as a surprise destroys it.',
    'Crisis as Opportunity': 'The counterintuitive insight that crises create competitive advantages for founders who respond well — through talent availability, reduced competition, customer trust, and organizational learning. The companies that emerge strongest from crises are those that used the constraint to make decisions they had been avoiding.',
    'Recovery Planning': 'The structured process of rebuilding after a significant setback — defining what success looks like post-crisis, sequencing recovery milestones, and communicating the plan to the team and investors with credibility. Recovery planning converts a reactive crisis response into a proactive rebuilding narrative.',
    'Resilience Systems': 'The organizational practices, technical redundancies, financial buffers, and leadership behaviors that reduce the impact of future crises — incident response protocols, diverse funding sources, cross-trained teams, and founder mental health practices. Resilient companies build infrastructure before they need it.',
    // Stage 10 — The Legacy
    'Defining Your Legacy': 'The deliberate articulation of what you want your company, career, and impact to have meant — a standard against which you measure the decisions you make in the years of maximum influence. Legacy is not built at the end. It is the accumulated result of thousands of small decisions made with consistent intent.',
    'The Exit Landscape': 'The range of possible outcomes for a company\'s ownership structure over time — IPO, strategic acquisition, private equity buyout, management buyout, or continued private operation. Understanding the exit landscape helps founders make decisions today that preserve optionality rather than foreclose it.',
    'M&A Process': 'The sequence of events from initial acquisition interest to completed transaction: preliminary discussions, LOI (Letter of Intent), due diligence, purchase agreement negotiation, regulatory clearance, and closing. Most founders experience M&A once. The acquirers do it dozens of times. The information asymmetry is significant.',
    'IPO Readiness': 'The financial, operational, governance, and cultural preparation required to take a company public — audited financials, SEC reporting systems, analyst relations, investor relations capability, and executive team depth. Companies that prepare for IPO three years early execute them better than those who prepare three months early.',
    'Founder Transition': 'The shift in a founder\'s role as the company scales — from individual contributor to manager to executive to board member to chair. Each transition requires different skills, a different daily agenda, and a different definition of what "adding value" means. Many founders struggle most with letting go of what made them successful.',
    'Board Independence': 'The practice of adding independent directors to the board — people with no financial interest in the company and no employment relationship — who provide objective governance and outside perspective. Independent boards signal maturity to investors, acquirers, and future employees. They also force accountability on the CEO.',
    'Building for Generational Value': 'Designing the company\'s strategy, culture, and institutions to outlast the founding team — to continue creating value decades after the founders have moved on. Companies built for generational value prioritize systems over individuals, culture over strategy, and principles over tactics.',
    'Corporate Culture at Scale': 'The challenge of preserving and transmitting the values, behaviors, and working norms of the founding team as the company grows to hundreds or thousands of employees — through explicit documentation, leadership modeling, hiring criteria, and organizational design.',
    'The Founder\'s Role at 100 Employees': 'The specific transition in a founder\'s job when the company reaches the size where the founder cannot know everyone personally, cannot be in every decision, and cannot maintain culture through direct relationship alone. The founder must shift from doing to enabling — and from managing people to managing managers.',
    'Giving Back — Mentorship': 'The practice of investing time in the next generation of founders — sharing hard-won lessons, making introductions, and providing the kind of contextual guidance that no book or course can replicate. Mentorship is both the most generous and the most strategically valuable thing a successful founder can do.',
    'Documenting Institutional Knowledge': 'The systematic capture of the organizational wisdom that exists only in people\'s heads — the decisions made, the reasoning behind them, and the lessons learned — before those people leave or the organization grows past the point where informal transmission works.',
    'Succession Planning': 'The deliberate preparation for the transition of leadership — identifying and developing internal candidates, creating the board process for CEO selection, and managing the psychological complexity of a founder transitioning out of an operational role into a different one.',
    'The Board Chair Role': 'The leadership position responsible for managing the board itself — setting agendas, facilitating discussion, evaluating CEO performance, and managing shareholder relations. A strong board chair makes both the board and the CEO more effective. A weak one creates governance ambiguity.',
    'Long-Term Capital Strategy': 'The planning of how the company will be financed over a multi-year horizon — through equity rounds, debt facilities, revenue reinvestment, or eventual public market capital. Long-term capital strategy determines the company\'s growth optionality and the degree of founder control that survives over time.',
    'Employee Stock Liquidity': 'The mechanisms by which employees can convert their equity into cash before a company goes public or is acquired — secondary sales, tender offers, or structured liquidity programs. Liquidity events for employees are one of the most effective retention tools a late-stage company has.',
    'The Acqui-hire': 'An acquisition driven primarily by the desire to acquire talent rather than products or revenue — common when the founding team has valuable skills but the product has not achieved market success. Acqui-hires provide a defined outcome for founders and employees but typically involve modest returns.',
    'Strategic Partnerships at Scale': 'The use of formal partnerships with complementary companies — technology integrations, joint go-to-market agreements, distribution deals — to extend reach, enhance product value, and create ecosystem lock-in that benefits all partners. Strategic partnerships require dedicated management to deliver on their potential.',
    'Brand at Maturity': 'The ongoing management of brand positioning, visual identity, and narrative as the company evolves beyond startup into an established player. Mature brand management involves protecting what has been built while evolving to remain relevant — a balance between consistency and renewal.',
    'Innovation at Scale': 'The organizational challenge of maintaining the speed, creativity, and risk tolerance of a startup inside a company that has grown large enough to have bureaucratic instincts. Companies that sustain innovation at scale do so through dedicated innovation units, explicit protection of experimentation time, and leadership that models the behavior.',
    'The Next Company': 'The founder\'s consideration of what comes after the current venture — whether as a serial entrepreneur, investor, operator, or something else entirely. Founders who think about the next chapter early make better decisions about their current one: they know what they are optimizing for beyond this company.',
    'Writing the Founder\'s Story': 'The articulation of what you built, why, what you learned, and what you would do differently — a narrative that creates value for future founders, employees, investors, and yourself. The founder\'s story is a lever of influence that continues to work long after the company has moved on without you.',
    'Creating the Endowment': 'The strategic allocation of personal wealth generated from a successful exit — to philanthropy, investment, or institution-building — that reflects the values you built the company around. The endowment decision is the most personal expression of legacy. It tells the world what you actually believed in.',
    'The Advisor Network': 'The ecosystem of former colleagues, investors, operators, and domain experts that a founder cultivates over time and leverages for introductions, advice, and support. The advisor network is built in good times and relied on in hard ones. Founders who invest in relationships before they need them are never alone when they do.',
    'Impact Measurement': 'The practice of systematically assessing the non-financial outcomes generated by the company — for customers, employees, communities, and society. Impact measurement holds the company accountable to the mission beyond financial return and provides evidence that the company is doing what it says it stands for.',
    'The Founder\'s Final Decision': 'The ultimate choice every founder faces: when to step back, when to step down, and what the company truly needs from you at each stage of its life. The best founders make this decision on the company\'s terms rather than their own ego\'s terms — and they make it before circumstances force it.',
  };

  // 25 distinct question types — each tests a completely different dimension
  const Q_TYPES = [
    // 0: What most founders get wrong (failure mode)
    (topic) => `Most first-time founders approach this the wrong way. What is the failure mode that consistently shows up — and why is it so hard to avoid?`,
    // 1: Highest-leverage first move
    (topic) => `You have two hours this week to make meaningful progress here. What is the single highest-leverage action and why does everything else follow from it?`,
    // 2: Mentor failure pattern
    (topic) => `The Mentor says: "I have watched this go wrong in over forty companies. They all make the same decision at the same moment." What is that decision?`,
    // 3: What success looks like
    (topic) => `Describe what "done right" looks like in practice. How does a founder know they have genuinely gotten this right rather than just gotten comfortable?`,
    // 4: Counterintuitive truth
    (topic) => `The counterintuitive truth about this — the insight most founders only discover after getting it wrong — is which of the following?`,
    // 5: Resource-constrained founder
    (topic) => `A well-funded competitor is investing heavily here. What does the smart, resource-constrained startup do instead — and why does that approach often win?`,
    // 6: Leo's hard-learned lesson
    (topic) => `Leo says: "I tried the obvious approach, then the expensive approach, and then finally the one that actually works." Which approach is he describing?`,
    // 7: Timing and sequencing
    (topic) => `Sam argues that the biggest mistake here is not getting it wrong — it is getting it in the wrong sequence relative to other priorities. What does he mean?`,
    // 8: Second-order consequence
    (topic) => `The immediate first-order impact is obvious. What is the second-order consequence that surprises founders who did not think far enough ahead?`,
    // 9: What investor scrutiny reveals
    (topic) => `A Series A investor asks pointed questions about this during diligence. What answer demonstrates that the founder has done the real work rather than the surface work?`,
    // 10: Maya's brand lens
    (topic) => `Maya says: "The damage from getting this wrong is rarely visible in month one. By month twelve it is undeniable." What is she specifically warning against?`,
    // 11: The right mental model
    (topic) => `Which mental model or decision-making framework most reliably leads to the right call here — and what does applying it actually look like?`,
    // 12: Before vs after product-market fit
    (topic) => `The right approach before product-market fit is often the wrong approach after it. What changes, and what must be designed differently from the start to survive both phases?`,
    // 13: Customer's invisible experience
    (topic) => `Your best customer never sees this decision being made. But they feel the outcome in their experience. What do they feel if you get it wrong — and when does that feeling appear?`,
    // 14: The delegation threshold
    (topic) => `You can handle this personally, delegate it to a hire, or build a system for it. Which is correct at the seed stage — and what is the signal that tells you to shift?`,
    // 15: Zara's portfolio pattern
    (topic) => `Zara has seen founders get the metrics right but still fail here. What does she say they consistently miss — the human or qualitative element that numbers cannot capture?`,
    // 16: Five-year structural impact
    (topic) => `Sam says: "In five years this is either a structural competitive advantage or a structural liability. There is almost never a middle ground." What determines which outcome you get?`,
    // 17: Crisis version of the decision
    (topic) => `When this becomes a crisis rather than a background priority, what is the first move that prevents it from escalating — and what common reaction makes it worse?`,
    // 18: The founder personality trap
    (topic) => `The Mentor says certain founder personalities are systematically prone to one specific failure here. Which personality type and which failure?`,
    // 19: Benchmark reality
    (topic) => `What does "good" actually look like here in terms an investor or operator would recognize — not aspirationally, but in concrete, measurable terms at the seed and Series A stage?`,
    // 20: The decision that ages well
    (topic) => `Looking back from five years of hindsight, which choice here do founders almost universally say they wish they had made earlier — and what prevented them from making it at the time?`,
    // 21: Speed vs depth trade-off
    (topic) => `You are under time pressure and must choose between moving fast with an imperfect approach or moving slower with a thorough one. What does the evidence say about this trade-off?`,
    // 22: Hiring implications
    (topic) => `Getting this right requires a specific type of thinking that not everyone on your team has. How do you identify whether you have that capability in-house or need to bring it in?`,
    // 23: The common shortcut that breaks
    (topic) => `There is a shortcut most founders take here that works fine at ten customers and breaks badly at one hundred. What is the shortcut and what should be built instead?`,
    // 24: Final decision question
    (topic) => `You must make a permanent decision about this today. Three advisors give you three different recommendations. Which principle cuts through the disagreement?`,
  ];

  // 5 distinct choice pools — varied enough to feel genuinely different
  const CHOICE_POOLS = [
    [
      'Start with the customer experience and work backwards from what they actually need',
      'Move fast with a rough first version and refine based on what breaks first',
      'Find one competitor doing this well and deconstruct their exact approach',
      'Treat it as a permanent founder responsibility until you fully understand it',
    ],
    [
      'Define clear success criteria before starting, then measure against them weekly',
      'Delegate to a specialist immediately — this is not the best use of founder time',
      'Build a minimal repeatable process first before investing in optimization',
      'Make a reversible decision now and a permanent one after 30 days of real data',
    ],
    [
      'Focus on the highest-leverage 20% that drives 80% of the outcome',
      'Prioritize this only after achieving product-market fit and a stable team',
      'Handle it reactively when it becomes urgent rather than proactively',
      'Invest in the foundational version early so you never have to rebuild it',
    ],
    [
      'The approach that keeps the most options open for the longest time',
      'The approach that generates the fastest honest signal about whether it is working',
      'The approach the team can execute with current resources without burning out',
      'The approach that your best future customer would find most credible',
    ],
    [
      'Maintain close personal involvement until the pattern is deeply understood',
      'Over-communicate context to the team so the decision can be distributed',
      'Accept imperfect execution now in exchange for speed and learning',
      'Build the system to be auditable so anyone can review the reasoning later',
    ],
    [
      'Customer obsession — trace every decision back to a specific customer outcome',
      'Financial discipline — every decision should pass a unit economics test',
      'Speed of execution — the fastest decision is almost always better at this stage',
      'Team alignment — nothing should advance unless the key people are genuinely bought in',
    ],
    [
      'Address it surgically and specifically rather than with a broad systemic change',
      'Delay addressing it until it becomes the clear top priority — triage matters',
      'Involve the team in the diagnosis before committing to any solution',
      'Fix the symptom now and the root cause in the next planning cycle',
    ],
  ];

  const topics3to10 = Object.entries(stageTopics);

  let nextId = raw.length + 1;
  for (const [stageIdStr, topics] of topics3to10) {
    const stageId = parseInt(stageIdStr);
    for (let i = 0; i < topics.length; i++) {
      const topic = topics[i];
      const dialogueFn = dialogueTemplates[i % dialogueTemplates.length];
      const concept = CONCEPT_MAP[topic] || `${topic} is a core discipline in company building — understanding the principles, trade-offs, and failure modes here separates founders who build with intention from those who build by accident.`;

      // Pick 5 DISTINCT question types for this skill — varied across skills
      const baseOffset = (i * 7 + stageId * 13) % Q_TYPES.length;
      const qIndices = [];
      for (let k = 0; k < 5; k++) {
        qIndices.push((baseOffset + k * 5) % Q_TYPES.length);
      }

      // Pick distinct choice pool per question
      const questions = qIndices.map((qIdx, qi) => {
        const poolIdx = (qi * 3 + i * 2 + stageId) % CHOICE_POOLS.length;
        const pool = CHOICE_POOLS[poolIdx];
        const correctIdx = (qi + i + stageId) % 4;
        return {
          q: Q_TYPES[qIdx](topic),
          choices: [...pool],
          correctIndex: correctIdx,
          feedback: `Founders who master this discipline share one pattern: they treat it as a system to be designed, not a problem to be solved once. The correct answer reflects the operating principle that holds at every stage of company growth.`,
          lesson: `Apply this principle the next time you face a decision in this area. The insight compounds: each correct application builds the judgment to handle the harder version of this decision that will arrive later.`,
        };
      });

      raw.push({
        id: nextId++,
        stageId,
        title: topic,
        type: 'Skill',
        concept,
        questions,
        _dialogueFn: dialogueFn,
        _topic: topic,
      });
    }
  }

  return raw;
}

const SKILLS_DATA = buildSkillsData();

// =============================================
// MARKET SIMULATION SCENARIOS (200+)
// =============================================
const MARKET_SCENARIOS = [
  { context:"Seed Stage — Month 3", scenario:"Your first paying customer wants a feature only they need. It would take 3 weeks to build.", dialogue:"Zara: 'Before you say yes, calculate the opportunity cost. What are you not building during those 3 weeks?'", choices:[{text:"Build it — one paying customer's requests matter enormously",impact:0.85,rev:1.2,team:1,runway:0.95,result:"You built it. The customer loved it. But it was bespoke — no other customer ever used it, and you lost 3 weeks on your core roadmap.",good:false},{text:"Decline politely and offer a workaround using existing features",impact:1.1,rev:1.0,team:1.05,runway:1.02,result:"The customer was disappointed but stayed. You shipped two roadmap features in those 3 weeks that three other prospects were waiting on.",good:true},{text:"Charge them a custom development fee to fund the feature build",impact:1.05,rev:1.35,team:0.95,runway:1.05,result:"They agreed to the fee. The contract set a pricing precedent you later regretted — everyone wanted custom work for custom fees.",good:false},{text:"Put it on the public roadmap and build it when it reaches enough votes",impact:1.08,rev:1.05,team:1.0,runway:1.0,result:"Transparent roadmap signaling bought goodwill. Two other customers upvoted the same request confirming it was broadly relevant.",good:true}]},
  { context:"Seed Stage — Month 4", scenario:"You are approached by a potential enterprise customer with a huge logo. They need 6 months of customization.", dialogue:"The Mentor: 'Every startup that chased the big logo before they were ready for enterprise paid a price. Know which one you want to be.'", choices:[{text:"Say yes — the logo alone will transform future fundraising",impact:0.6,rev:0.8,team:0.7,runway:0.7,result:"You spent 6 months on enterprise customization. You lost two key early adopters who felt deprioritized. The enterprise deal closed — but only after 9 months, not 6.",good:false},{text:"Say no and focus on building for your core customer segment",impact:1.15,rev:1.05,team:1.1,runway:1.08,result:"Staying focused accelerated your core product by 60%. You shipped PMF features faster and closed 8 SMB customers who became vocal advocates.",good:true},{text:"Propose a smaller pilot project to test fit before full commitment",impact:1.0,rev:1.1,team:0.95,runway:1.0,result:"The pilot went well. But enterprise moved slowly and the full deal took 8 months. Acceptable if your runway supported the wait.",good:false},{text:"Partner with a systems integrator to handle the customization",impact:0.9,rev:1.15,team:1.0,runway:0.95,result:"Creative — but the integrator delivered inconsistently. Customer experience suffered and you spent 20% of your time managing the relationship.",good:false}]},
  { context:"Product Stage — Month 6", scenario:"Your app crashes during your biggest ever demo. 500 people are watching live.", dialogue:"Sam: 'Crashes happen. How you handle the next 90 seconds tells your audience more about you than the product ever could.'", choices:[{text:"Apologize profusely and end the demo immediately",impact:0.7,rev:0.8,team:0.8,runway:1.0,result:"The apology read as panic. People left the stream. A blog post about the crash got more views than the demo itself.",good:false},{text:"Make a joke about it, explain briefly, and pivot to the slides while the team fixes it live",impact:1.2,rev:1.1,team:1.15,runway:1.05,result:"Your composure under pressure became the story. Three journalists wrote about how impressively you handled it. Demo leads doubled.",good:true},{text:"Blame the platform publicly and say it is not your product's fault",impact:0.5,rev:0.6,team:0.7,runway:0.9,result:"Blaming external factors in public is one of the worst signals you can send about your culture. The tech community noticed.",good:false},{text:"Say nothing — restart the demo without acknowledging what happened",impact:0.85,rev:0.9,team:0.9,runway:1.0,result:"Awkward but professional. Some attendees respected the stoicism; others found it tone-deaf. A neutral outcome in a crisis moment.",good:false}]},
  { context:"Growth Stage — Month 8", scenario:"A viral tweet (mostly accurate, but exaggerated) accuses your pricing of being predatory.", dialogue:"Maya: 'You have exactly 90 minutes before this is on a tech publication. What you do right now is your brand for the next year.'", choices:[{text:"Respond with a detailed legal defense of your pricing structure",impact:0.5,rev:0.6,team:0.8,runway:0.9,result:"Defensive legal language in a PR crisis is gasoline. The story got 5x bigger because your response became the story.",good:false},{text:"Acknowledge the concern genuinely, explain the pricing logic simply, and announce a review",impact:1.15,rev:1.05,team:1.1,runway:1.0,result:"Transparency disarmed the narrative. Customers who were angry posted appreciatively about your response. The review produced a pricing improvement.",good:true},{text:"Ignore it and let your PR team handle it",impact:0.75,rev:0.85,team:0.9,runway:1.0,result:"24-hour silence in a social media crisis is perceived as arrogance or hiding. The story grew. Your PR team was managing a forest fire instead of a campfire.",good:false},{text:"Reach out personally to the person who tweeted and offer to talk",impact:1.1,rev:1.0,team:1.05,runway:1.0,result:"Direct founder-to-critic engagement turned a critic into an unlikely advocate. The follow-up tweet was kinder and widely shared.",good:true}]},
  { context:"Series A — Month 12", scenario:"Your Series A lead investor wants you to replace your CTO with someone more 'enterprise-ready.'", dialogue:"Zara sits across the table: 'This is not a suggestion. It is a condition. Tell me how you are thinking about this.'", choices:[{text:"Agree immediately — investor relationships are the business",impact:0.6,rev:0.9,team:0.5,runway:1.1,result:"Your CTO felt betrayed. The team morale collapsed. Three engineers quit within 60 days. The new CTO took 6 months to understand the codebase.",good:false},{text:"Refuse firmly — the investor should respect your judgment on team decisions",impact:0.85,rev:1.0,team:1.1,runway:0.9,result:"The investor was frustrated but respected the boundary. The relationship was tense for 6 months. Your CTO performed well at scale, proving the point.",good:false},{text:"Ask for specific evidence of what the CTO is failing at before making any decision",impact:1.2,rev:1.05,team:1.15,runway:1.05,result:"The evidence conversation revealed the investor had no specific complaints — it was a pattern-matching bias. CTO stayed and thrived.",good:true},{text:"Propose a 90-day coaching and assessment process before any decision is made",impact:1.1,rev:1.0,team:1.05,runway:1.0,result:"Structured assessment showed your CTO\'s gaps were solvable with coaching. The investor respected the data-driven approach.",good:true}]},
  { context:"Growth Stage", scenario:"Your top engineer receives a competing offer for 40% more than their current comp. You cannot match it financially.", dialogue:"Sam: 'Every engineer has a price and it is not always money. What do you actually know about why this person stays?'", choices:[{text:"Let them go gracefully — you cannot compete on cash with FAANG",impact:0.85,rev:1.0,team:0.7,runway:1.05,result:"They left. Their departure triggered two junior engineers to question their own compensation. The morale dip cost more than the raise would have.",good:false},{text:"Offer equity acceleration and a title change to signal long-term partnership",impact:1.1,rev:1.0,team:1.1,runway:0.98,result:"The combination of equity and recognition addressed what money alone could not. They stayed and became your strongest culture carrier.",good:true},{text:"Go to your lead investor and ask for a compensation exception",impact:0.95,rev:1.0,team:1.05,runway:0.92,result:"Investor approved, but the process took 2 weeks. During the wait, the engineer's confidence in the company wavered. They stayed but asked again in 6 months.",good:false},{text:"Ask them directly what they would need to stay — listen before offering anything",impact:1.15,rev:1.0,team:1.2,runway:1.0,result:"The conversation revealed they wanted the competing company's technical challenge more than the money. You redesigned their role around harder problems. They withdrew the other offer.",good:true}]},
  { context:"Fundraising", scenario:"You receive a term sheet at a $15M valuation from a Tier 2 VC. A Tier 1 VC says they are 'very interested' but needs 2 more months.", dialogue:"The Mentor: 'The bird in hand is a real bird. The one in the bush has many more feathers but it is also in a bush.'", choices:[{text:"Accept the Tier 2 offer — certainty now beats potential later",impact:1.0,rev:1.1,team:1.0,runway:1.2,result:"You closed quickly and kept building. The Tier 1 VC eventually passed anyway. Tier 2 turned out to be excellent operators who helped close key enterprise deals.",good:true},{text:"Ask Tier 1 to accelerate their timeline with the Tier 2 term sheet as leverage",impact:1.15,rev:1.05,team:1.0,runway:1.1,result:"The leverage worked. Tier 1 accelerated to 3 weeks. Their network and brand accelerated your next hire and your largest partnership.",good:true},{text:"Give Tier 1 the full 2 months and keep Tier 2 warm",impact:0.9,rev:1.0,team:1.0,runway:0.85,result:"Tier 2 gave you an ultimatum at week 6. Tier 1 passed at week 8. You had to restart fundraising with 5 fewer months of runway.",good:false},{text:"Reject both and raise from a strategic investor in your industry instead",impact:0.75,rev:0.9,team:0.95,runway:0.7,result:"Strategic investors move even slower than VCs. 4 months later, no deal closed. Runway critically low.",good:false}]},
  { context:"Market Dynamics", scenario:"A tech giant announces they are building exactly your product — as a free feature of their platform.", dialogue:"Zara: 'This is happening to you. Tell me your first three moves in the next 48 hours.'", choices:[{text:"Pivot entirely — you cannot compete with a free tech giant feature",impact:0.65,rev:0.7,team:0.7,runway:0.9,result:"Panic-pivot burned 4 months and destroyed the product focus that had been working. The tech giant's feature turned out to be superficial and poorly executed.",good:false},{text:"Accelerate your roadmap and ship everything in your backlog immediately",impact:0.8,rev:0.95,team:0.75,runway:0.9,result:"Rushed shipping produced buggy releases. Technical debt piled up. But you did ship some features the tech giant would never build.",good:false},{text:"Double down on the specific segment the tech giant will never serve well",impact:1.2,rev:1.05,team:1.1,runway:1.0,result:"Enterprise customers did not trust the tech giant with their data. You became the alternative specifically for the privacy-conscious segment — a more defensible niche.",good:true},{text:"Publish a detailed comparison showing exactly where your product outperforms theirs",impact:1.1,rev:1.0,team:1.0,runway:1.0,result:"Clear, honest comparison content ranked well and was widely shared. You became the go-to alternative narrative in every forum where customers discussed the announcement.",good:true}]},
  { context:"Team Dynamics", scenario:"You discover two of your engineers have been interviewed by your top competitor this week.", dialogue:"Sam: 'The conversation you do not have right now is the conversation you will definitely have in two weeks. You choose which one.'", choices:[{text:"Say nothing — people are allowed to explore their options",impact:0.8,rev:1.0,team:0.7,runway:1.0,result:"One joined the competitor. The other stayed but felt invisible. Your passive response was read as indifference to their future.",good:false},{text:"Meet with each individually — ask what would make this the company they want to build their career at",impact:1.15,rev:1.0,team:1.2,runway:0.98,result:"Candid conversations revealed concerns you could address. Both stayed. The relationship deepened.",good:true},{text:"Announce a team retention bonus tied to 12-month cliff",impact:0.9,rev:1.0,team:1.05,runway:0.88,result:"Financial retention worked short-term but did not address the underlying dissatisfaction. The root cause surfaced again at the cliff date.",good:false},{text:"Ask them to be transparent with you about their concerns and offer to help them think through the decision",impact:1.2,rev:1.0,team:1.15,runway:1.0,result:"Unexpected vulnerability created trust. Both felt safe being honest. One concern (lack of technical leadership) was something you could fix. Both stayed.",good:true}]},
  { context:"Revenue Strategy", scenario:"Your three biggest customers represent 70% of your revenue. One just sent a notice they are reviewing their contract.", dialogue:"Zara: 'Customer concentration is a risk every investor asks about. What would you say if this customer walks out the door tonight?'", choices:[{text:"Offer an aggressive discount to retain them at any cost",impact:0.75,rev:0.7,team:0.9,runway:0.8,result:"They stayed at a 35% discount. But the revenue impact was devastating — and the precedent signaled you would always blink.",good:false},{text:"Meet with them this week to understand the specific concern before making any financial offer",impact:1.1,rev:1.0,team:1.0,runway:1.0,result:"The concern was a missing feature, not price. You shipped it in 3 weeks. They renewed at full rate and expanded the contract.",good:true},{text:"Begin emergency diversification — close 10 new SMB customers in the next 30 days",impact:0.9,rev:1.05,team:0.8,runway:0.95,result:"Panic acquisition drove down average deal quality. You closed the 10 customers but two had poor fit and churned within 90 days.",good:false},{text:"Build a detailed 'what if they leave' financial model and present it to your board with a plan",impact:1.05,rev:1.0,team:1.0,runway:1.05,result:"Board appreciated the transparency. The model revealed you would survive but growth would pause for two quarters. A structured plan replaced panic.",good:true}]},
  { context:"Product Crisis", scenario:"A serious bug wiped 3 days of customer data for your enterprise client. It is 6am Friday.", dialogue:"Sam: 'Before you call them, you need two things: the truth about what happened and the truth about what you are going to do about it. In that order.'", choices:[{text:"Wait until you have a full post-mortem before communicating anything to the customer",impact:0.6,rev:0.8,team:0.85,runway:0.9,result:"4 hours of silence. The customer found out through their own monitoring. Radio silence is always interpreted as covering up.",good:false},{text:"Call the customer immediately with what you know, what you do not know, and when you will know more",impact:1.2,rev:1.05,team:1.1,runway:1.0,result:"The call was hard. But the customer respected the immediate transparency. They stayed. The bug became a case study for your incident response process.",good:true},{text:"Send an automated system notification through your status page",impact:0.7,rev:0.85,team:0.9,runway:0.95,result:"A system notification for a data loss incident at an enterprise customer is a relationship failure. They felt like a ticket, not a partner.",good:false},{text:"Offer a full refund immediately to reduce legal risk",impact:0.85,rev:0.7,team:0.9,runway:0.8,result:"The refund signaled guilt and created a legal precedent. The customer took the refund and then hired a lawyer anyway.",good:false}]},
  { context:"Hiring Decision", scenario:"You are choosing between two final candidates for Head of Marketing: a proven VP from a big company or a scrappy growth marketer from a smaller startup.", dialogue:"The Mentor: 'The question is not who has the better resume. The question is which type of problem you are about to face for the next 18 months.'", choices:[{text:"The proven VP — name recognition will help with fundraising and recruiting",impact:0.85,rev:1.1,team:0.8,runway:0.9,result:"The VP was excellent at managing agencies and brand budgets — neither of which you needed yet. They struggled in the scrappy execution phase and left after 9 months.",good:false},{text:"The growth marketer — they are designed for your current stage",impact:1.15,rev:1.05,team:1.1,runway:1.0,result:"In 6 months they had run 40 experiments, found two channels that worked, and reduced CAC by 30%. Exactly what the stage demanded.",good:true},{text:"Hire both — create a division of brand and performance",impact:0.7,rev:1.0,team:0.7,runway:0.75,result:"Two senior leaders with overlapping authority created friction immediately. Budget fights started in month 2. One left in month 4.",good:false},{text:"Hire neither — outsource marketing until you have more clarity on your channels",impact:0.95,rev:1.0,team:1.0,runway:1.05,result:"The outsourcing kept you lean but no one was owning the function with founder-level conviction. Growth slowed measurably.",good:false}]},
  { context:"Competitive Response", scenario:"A well-funded competitor drops their price by 50%, matching your entry tier for free.", dialogue:"Zara: 'Free is a price you cannot match. The question is whether your customers are buying price or buying value.'", choices:[{text:"Drop your price to match — do not lose customers to free",impact:0.6,rev:0.5,team:0.85,runway:0.65,result:"Revenue dropped 40%. Your best customers barely noticed. Your most price-sensitive customers left anyway for the free tier.",good:false},{text:"Move upmarket — raise prices and serve only customers who value premium",impact:1.1,rev:1.2,team:1.0,runway:1.05,result:"The price increase felt counterintuitive. But it filtered for serious buyers and your revenue actually grew while serving fewer customers more deeply.",good:true},{text:"Invest aggressively in differentiation — features and service levels the free competitor cannot match",impact:1.05,rev:1.0,team:0.9,runway:0.9,result:"The differentiation campaign was compelling. But it took 4 months to build and communicate. You lost some customers during the transition.",good:false},{text:"Create a free tier of your own to compete directly for the low end of the market",impact:0.75,rev:0.8,team:0.85,runway:0.7,result:"The free tier diluted your brand and attracted users who would never pay. Support costs rose. Your premium customers felt the quality drop.",good:false}]},
  { context:"Board Meeting", scenario:"Your board recommends pivoting to a new market after slower-than-expected growth in your current one.", dialogue:"The Mentor: 'Boards give you advice, not orders. The question is whether this advice comes from data or from impatience.'", choices:[{text:"Follow the board recommendation — they have seen more patterns than you have",impact:0.75,rev:0.85,team:0.75,runway:0.85,result:"The pivot was based on board impatience, not market data. The new market was not better-fit. 6 months of lost momentum and morale.",good:false},{text:"Push back with data: show specifically what would indicate your current market is or is not working",impact:1.2,rev:1.0,team:1.1,runway:1.05,result:"The data conversation revealed the board was reacting to two consecutive slow months. Your longer-term trend was healthy. They agreed to continue.",good:true},{text:"Accept the direction but negotiate a 90-day evaluation period before full pivot",impact:1.0,rev:1.0,team:1.0,runway:1.0,result:"Reasonable middle ground. The 90 days produced better data for both sides. Decision was ultimately made with more clarity.",good:true},{text:"Resign from the board if they insist on the pivot against your data",impact:0.5,rev:0.9,team:0.8,runway:0.8,result:"Nuclear option. Destroyed trust. Board found a way to remove you from CEO role 3 months later citing 'alignment issues.'",good:false}]},
  { context:"International Expansion", scenario:"You have strong product-market fit in the US. A European partner offers to be your exclusive distributor in the EU.", dialogue:"Maya: 'Exclusivity is the most expensive word in any distribution deal. Understand what you are giving up before you give it up.'", choices:[{text:"Accept — distribution partnerships accelerate growth without headcount",impact:0.85,rev:1.1,team:1.0,runway:1.05,result:"The partner performed inconsistently and the exclusivity clause blocked a better-fit partner from approaching you. EU growth was 40% below projections.",good:false},{text:"Counter with non-exclusive terms and 12-month performance benchmarks",impact:1.15,rev:1.1,team:1.0,runway:1.05,result:"They pushed back on non-exclusive but accepted performance benchmarks. You retained the right to add a partner if benchmarks were missed. They hit them.",good:true},{text:"Decline and build EU operations directly — partners dilute margin and control",impact:0.9,rev:1.0,team:0.8,runway:0.8,result:"Direct EU operations were expensive and slow to set up. You were right about control but underestimated the investment required.",good:false},{text:"Accept exclusivity for Germany only as a test market, EU-wide after 18 months of performance",impact:1.1,rev:1.05,team:1.0,runway:1.0,result:"The limited exclusivity test let you evaluate the partner without permanent commitment. Germany performance was strong. You expanded carefully.",good:true}]},
  { context:"Fundraising", scenario:"You are raising a Series B. A strategic investor (large company in your space) wants to lead at a premium valuation.", dialogue:"Zara: 'Strategic investors bring two things: money and a story. Make sure you understand the full story before you take the money.'", choices:[{text:"Accept — the valuation is premium and the strategic relationship adds credibility",impact:0.85,rev:1.15,team:1.0,runway:1.2,result:"The strategic investor's board seat became a problem when they blocked an acquisition offer from a competitor — a direct conflict of interest.",good:false},{text:"Accept but negotiate the board seat out of the deal",impact:1.1,rev:1.1,team:1.0,runway:1.15,result:"They accepted observation rights instead of a seat. The strategic relationship opened three major enterprise customers without the governance downside.",good:true},{text:"Take financial VCs at a lower valuation to preserve strategic optionality",impact:1.05,rev:1.0,team:1.0,runway:1.05,result:"Lower valuation but cleaner cap table. Financial VCs brought better networks for the next round. Acquisition optionality fully preserved.",good:true},{text:"Decline and continue with existing investors via bridge",impact:0.85,rev:1.0,team:1.0,runway:0.85,result:"The bridge bought time but signaled weakness to the market. Subsequent outreach to financial VCs led with a slightly defensive narrative.",good:false}]},
  { context:"Culture Crisis", scenario:"You discover that your VP Sales has been misrepresenting your product capabilities in demos to close deals.", dialogue:"The Mentor: 'How you respond to this in the next 48 hours will define what kind of company you are building for the next ten years.'", choices:[{text:"Warn them formally and put a monitoring plan in place — they are your top performer",impact:0.5,rev:0.9,team:0.6,runway:1.0,result:"The team found out you knew and tolerated it. Trust in leadership collapsed. Three culture-aligned employees left within 60 days.",good:false},{text:"Terminate immediately, then communicate clearly to the team why",impact:1.2,rev:0.85,team:1.2,runway:0.95,result:"Short-term revenue hit. Long-term culture signal. Team morale rose. New VP Sales hire set a higher ethical standard from day one.",good:true},{text:"Address the specific misrepresentations with the affected customers and create a correction process",impact:0.9,rev:0.9,team:0.9,runway:0.95,result:"The correction was the right thing but without holding the VP accountable, the behavior continued under a different framing.",good:false},{text:"Suspend them pending a full investigation before any decision",impact:0.85,rev:0.9,team:0.85,runway:1.0,result:"Investigation confirmed the behavior. The suspension period created ambiguity that team members found stressful. Same outcome with more damage to morale during the wait.",good:false}]},
  { context:"Platform Strategy", scenario:"Your API gets 10,000 developer signups in a week after a viral post. You were not expecting this.", dialogue:"Sam: 'This is not a gift. It is a stress test. Every one of these developers is about to form their first impression of your infrastructure, your documentation, and your character as a platform.'", choices:[{text:"Scale infrastructure immediately — prioritize uptime above all else",impact:1.1,rev:1.05,team:1.0,runway:0.9,result:"Smart prioritization. The infrastructure held. Developer experience was solid. A third of the signups built real integrations within 30 days.",good:true},{text:"Respond to every developer inquiry personally in the first week",impact:1.15,rev:1.05,team:0.9,runway:1.0,result:"Heroic but unsustainable. The personal attention created extraordinary first impressions. The developer community talked about it for months.",good:true},{text:"Gate access — add a waitlist and qualify developers before giving API keys",impact:0.75,rev:1.0,team:1.0,runway:1.05,result:"Scarcity created frustration. Developers who were excited found alternatives while waiting. Viral momentum dissipated within a week.",good:false},{text:"Announce a launch partner program with revenue sharing to convert top developers",impact:1.0,rev:1.1,team:0.95,runway:0.95,result:"Revenue share attracted serious builders. Several built products that drove customer acquisition you had not planned for.",good:false}]},
  { context:"Pricing Inflection", scenario:"Your power users say your product is worth 10x what you charge. Your casual users think it is already expensive.", dialogue:"Zara: 'This is not a pricing problem. This is a segmentation problem disguised as a pricing problem. What do you do with that insight?'", choices:[{text:"Raise prices across the board — if power users see 10x value, capture some of it",impact:0.85,rev:1.2,team:1.0,runway:1.05,result:"Revenue per customer improved. Casual users churned at 2x normal rate. Net impact was positive but churn was alarming.",good:false},{text:"Introduce a premium tier with advanced features and raise the floor for new customers",impact:1.2,rev:1.25,team:1.0,runway:1.1,result:"Power users upgraded immediately. Casual users stayed on legacy pricing. NRR improved dramatically as expansion became structured.",good:true},{text:"Keep current pricing — the casual users are the majority and market share matters more than ARPU now",impact:0.9,rev:0.95,team:1.0,runway:1.0,result:"Revenue plateau. Power users who were undercharged by 10x were not loyal — they were just subsidized. When a premium alternative arrived, they switched.",good:false},{text:"Move to usage-based pricing so high-value users naturally pay more",impact:1.0,rev:1.1,team:0.9,runway:1.0,result:"Usage-based worked for the power users but made casual users anxious about unexpected charges. Mixed results that required a hybrid model.",good:false}]},
  { context:"Acquisition Offer", scenario:"You receive an acquisition offer for $40M — 4x your last valuation. Your board wants to take it. You believe you are worth 10x more in 3 years.", dialogue:"The Mentor: 'Every founder who turns down the first offer believes they will do better. Many are right. Some are not. The question is: how certain are you, and what is at stake if you are wrong?'", choices:[{text:"Accept — $40M is life-changing and certainty beats probability",impact:1.0,rev:1.0,team:1.0,runway:1.0,result:"You took the deal. The acquirer was good. You had three great years inside a larger company. The product reached 10x more users than you would have alone.",good:true},{text:"Counter with $70M — signal ambition without walking away",impact:1.0,rev:1.0,team:1.0,runway:1.0,result:"They countered at $52M. You settled at $50M. Both sides felt good. The negotiation built mutual respect that made the post-acquisition integration smoother.",good:true},{text:"Decline firmly and continue building independently",impact:0.9,rev:1.05,team:1.0,runway:0.9,result:"18 months later you raised a Series B at a $60M valuation. Your board was right that the timing was wrong — but your conviction was right about the value.",good:false},{text:"Accept but negotiate an earnout tied to product milestones over 3 years",impact:1.05,rev:1.05,team:0.95,runway:1.05,result:"The earnout structure gave you upside if the product continued growing. The acquirer met the milestones. Total payout was $58M.",good:true}]},
];

// =============================================
// CRISIS EVENTS (25)
// =============================================
const CRISIS_EVENTS = [
  { title:"Server Meltdown at Launch", scenario:"Your launch day arrives. 50,000 people are trying to sign up. Your servers are down. Social media is exploding.", choices:[{text:"Post honest updates every 15 minutes with estimated recovery time",good:true,result:"Transparency under pressure earned goodwill. Users frustrated but forgiving. The honest timeline rebuilt trust."},{text:"Go dark on social media until everything is fixed",good:false,result:"Silence during a public failure is the worst signal. Users assumed the worst and moved on."},{text:"Blame your hosting provider publicly",good:false,result:"Blame deflection in a crisis is a character test you failed publicly."}]},
  { title:"Co-Founder Sends Resignation at 11pm", scenario:"Your technical co-founder texts you at 11pm: 'I quit. I am taking the job at Google. Nothing personal.'", choices:[{text:"Ask to meet in person tomorrow before any final decisions",good:true,result:"Morning conversation revealed the resignation was an ultimatum — they wanted equity adjusted. Resolvable."},{text:"Reply: 'Understood. Let us sort the equity and exit professionally.'",good:false,result:"Too quick to accept. The door closed. A conversation might have kept the company intact."},{text:"Forward the text to your investors immediately",good:false,result:"Investor panic before you have assessed the situation creates a bigger crisis than the resignation itself."}]},
  { title:"Your Top Competitor Just Copied Your Key Feature", scenario:"A well-funded competitor launched an exact copy of your flagship feature — and their marketing budget is 20x yours.", choices:[{text:"Ignore it publicly. Ship the next feature they cannot copy yet.",good:true,result:"Maturity under competitive pressure impressed analysts and customers. Your next release made theirs look derivative."},{text:"Tweet about it aggressively to draw attention to the copy",good:false,result:"Public complaints about competition look petty and give the copy more attention than your original work."},{text:"Reach out to their legal team to assess IP protection",good:false,result:"Unless you have a patent, there is nothing to enforce. The legal distraction slowed your response."}]},
  { title:"A Journalist Has a Damaging Story — Going Live in 2 Hours", scenario:"A journalist DMs you: 'I am publishing a story about your company's data handling practices in 2 hours. Comment?'", choices:[{text:"Respond immediately with full transparency and offer to do a call right now",good:true,result:"The journalist respected the immediate, honest engagement. The story was balanced instead of one-sided."},{text:"Say 'No comment' and wait to see what they write",good:false,result:"No comment + 2 hours = the story published without your perspective and was significantly worse."},{text:"Ask your lawyer to send a cease and desist",good:false,result:"C&D threat to a journalist killed the chance of a balanced story and became a story in itself."}]},
  { title:"Largest Customer Calls at 8am: 'We Are Canceling'", scenario:"Your $300K ARR enterprise customer calls at 8am. They are canceling today. You have 10 minutes before they file the paperwork.", choices:[{text:"'Can I come to your office this week? I want to understand what went wrong directly.'",good:true,result:"The in-person ask surprised them. They agreed. The meeting revealed a solvable integration issue. They did not cancel."},{text:"Ask them to outline their issues in writing so you can respond formally",good:false,result:"Written process felt bureaucratic. They saw it as stalling. Paperwork filed by noon."},{text:"Immediately offer a 50% discount to retain the contract",good:false,result:"The discount offer without understanding the problem signaled desperation and that you were overpriced all along."}]},
  { title:"Employee Goes Viral Complaining About Your Culture", scenario:"A current employee posts a detailed thread on Twitter describing your company culture as toxic. It gets 50,000 views in 3 hours.", choices:[{text:"Reach out to the employee privately to understand the experience and correct what is wrong",good:true,result:"Private engagement showed you cared about the person, not just the PR. Team saw the response and trusted you."},{text:"Post a public rebuttal explaining the employee misrepresented facts",good:false,result:"Fighting an employee's experience publicly is always a losing position regardless of accuracy."},{text:"Remove the employee's access to company systems immediately",good:false,result:"Retaliation narrative was born. The story went from 50K to 500K views."}]},
  { title:"You Discover Your CFO Made an Accounting Error", scenario:"Your CFO tells you the financial reports you sent investors last quarter contained a material error. Revenue was overstated by 25%.", choices:[{text:"Notify all investors immediately with the correction and a full explanation",good:true,result:"Painful but essential. Your transparency prevented a worse legal situation and maintained enough trust to continue the relationship."},{text:"Fix it going forward and hope investors do not notice the discrepancy",good:false,result:"Investors noticed at the next quarterly review. The cover-up was worse than the error."},{text:"Hire an outside accountant to review everything before telling investors",good:false,result:"The 3-week delay before notification was seen as deliberate concealment. Legal costs tripled."}]},
  { title:"Government Regulation Threatens Your Core Business Model", scenario:"A new regulatory proposal would ban the data collection practice that powers 80% of your product value.", choices:[{text:"Engage a policy advocate and submit comments to the regulatory body immediately",good:true,result:"Proactive regulatory engagement is rare from startups. Your participation shaped the final rule in a way that preserved core product value."},{text:"Wait and see — most regulatory proposals do not pass as written",good:false,result:"The regulation passed in a stricter form. Your competitors who engaged were grandfathered; you were not."},{text:"Begin pivoting the product to not rely on the affected data",good:false,result:"The pivot was expensive and premature. The final regulation was far less restrictive than proposed."}]},
];

// =============================================
// STATE
// =============================================
const DEFAULT_STATE = {
  _stateVersion: STATE_VERSION,
  completedSkills: [],
  xp: 0,
  dayStreak: 0,
  lastPlayedDay: null,
  journal: [],
  earnedBadges: [],
  totalAnswered: 0,
  totalCorrect: 0,
  maxStreak: 0,
  currentStreak: 0,
  crisisesHandled: 0,
  bestValuation: 0,
  dailyChallenges: 0,
  speedDemon: 0,
  comebackKid: false,
  _hadWrong: false,
  perfectSkills: 0,
  dictLookups: 0,
  _crisisScheduled: false,
  mentorLettersRead: [],
  stageMentorLetterPending: null,
  founderName: '',
};

let state = { ...DEFAULT_STATE };

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('founderpath_v4') || 'null');
    if (saved && saved._stateVersion === STATE_VERSION) {
      state = { ...DEFAULT_STATE, ...saved };
    } else {
      state = { ...DEFAULT_STATE };
    }
  } catch (e) {
    state = { ...DEFAULT_STATE };
  }
  updateDayStreak();
}

function saveState() {
  localStorage.setItem('founderpath_v4', JSON.stringify(state));
}

function updateDayStreak() {
  const today = new Date().toDateString();
  if (state.lastPlayedDay === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (state.lastPlayedDay === yesterday) {
    state.dayStreak = (state.dayStreak || 0) + 1;
  } else if (state.lastPlayedDay !== today) {
    state.dayStreak = 1;
  }
  state.lastPlayedDay = today;
  saveState();
}

// =============================================
// PAGE NAVIGATION
// =============================================
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) { el.classList.add('active'); el.scrollTop = 0; }
  window.scrollTo(0, 0);
}

// =============================================
// LANDING
// =============================================
function initLanding() {
  const startGame = () => {
    showPage('dashboard');
    renderDashboard();
  };
  document.getElementById('startBtn').addEventListener('click', startGame);
  document.getElementById('startBtnNav').addEventListener('click', startGame);
  document.getElementById('startBtnFinal').addEventListener('click', startGame);
  document.getElementById('dictPreviewBtn').addEventListener('click', () => {
    showPage('dashboard');
    renderDashboard();
    setTimeout(openDictionary, 300);
  });

  // About page navigation
  const goToAbout = () => showPage('about');
  const goToMission = () => {
    showPage('about');
    setTimeout(() => {
      const el = document.getElementById('mission');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };
  document.getElementById('aboutUsBtn').addEventListener('click', goToAbout);
  document.getElementById('ourMissionBtn').addEventListener('click', goToMission);
  const landingAboutFullBtn = document.getElementById('landingAboutFullBtn');
  if (landingAboutFullBtn) landingAboutFullBtn.addEventListener('click', goToAbout);
  const mobileAboutBtn = document.getElementById('mobileAboutBtn');
  if (mobileAboutBtn) mobileAboutBtn.addEventListener('click', goToAbout);
  document.getElementById('aboutBackBtn').addEventListener('click', () => showPage('landing'));
  document.getElementById('aboutStartBtn').addEventListener('click', startGame);
  document.getElementById('aboutStartBtn2').addEventListener('click', startGame);

  // Hamburger menu
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobileMenu = () => {
    hamburgerBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  };
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = hamburgerBtn.classList.contains('open');
    if (isOpen) { closeMobileMenu(); }
    else {
      hamburgerBtn.classList.add('open');
      mobileMenu.classList.add('open');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
    }
  });
  document.getElementById('mobileAboutBtn').addEventListener('click', () => { closeMobileMenu(); showPage('about'); });
  document.getElementById('mobileStartBtn').addEventListener('click', () => { closeMobileMenu(); startGame(); });
  document.querySelectorAll('.mobile-nav-link[href]').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Fade-up animation for Why section on scroll
  const whySection = document.getElementById('whySection');
  if (whySection) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); } });
    }, { threshold: 0.15 });
    obs.observe(whySection);
  }
}

// =============================================
// DASHBOARD
// =============================================
function renderDashboard() {
  const completed = state.completedSkills.length;

  // Safety check: only show completion if ALL skills are done
  if (SKILLS_DATA.length > 0 && completed >= SKILLS_DATA.length) {
    showCompletionScreen();
    return;
  }

  document.getElementById('completedCount').textContent = completed;
  document.getElementById('xpDisplay').textContent = state.xp;
  document.getElementById('streakDisplay').textContent = `${state.dayStreak || 0} 🔥`;
  document.getElementById('totalSkillsCount').textContent = SKILLS_DATA.length;
  document.getElementById('mainProgressBar').style.width = `${(completed / SKILLS_DATA.length) * 100}%`;

  // Quote
  const q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  document.getElementById('quoteText').textContent = `"${q.text}"`;
  document.getElementById('quoteAuthor').textContent = `— ${q.author}`;

  renderTicker();
  renderStagesGrid();

  // Buttons — use onclick to prevent duplicate handlers on re-render
  document.getElementById('badgesBtn').onclick = openBadges;
  document.getElementById('journalOpenBtn').onclick = openJournal;
  document.getElementById('dictOpenBtn').onclick = openDictionary;
  document.getElementById('marketSimBtn').onclick = () => { showPage('marketSim'); initMarketSim(); };
  document.getElementById('backToLanding').onclick = () => showPage('landing');

  // Check for pending mentor letter
  if (state.stageMentorLetterPending && !state.mentorLettersRead.includes(state.stageMentorLetterPending)) {
    setTimeout(() => showMentorLetter(state.stageMentorLetterPending), 800);
    state.stageMentorLetterPending = null;
    saveState();
  }

  if (!state._crisisScheduled) {
    state._crisisScheduled = true;
    scheduleCrisis();
  }
}

function renderStagesGrid() {
  const grid = document.getElementById('stagesGrid');
  grid.innerHTML = '';
  STAGES.forEach(stage => {
    const stageSkills = SKILLS_DATA.filter(s => s.stageId === stage.id);
    const completedInStage = stageSkills.filter(s => state.completedSkills.includes(s.id)).length;
    const pct = stageSkills.length ? (completedInStage / stageSkills.length) * 100 : 0;
    const isComplete = completedInStage === stageSkills.length && stageSkills.length > 0;
    const hasUnreadLetter = isComplete && !state.mentorLettersRead.includes(stage.id) && MENTOR_LETTERS[stage.id];

    const card = document.createElement('div');
    card.className = 'stage-card';
    card.innerHTML = `
      ${isComplete ? '<div class="stage-complete-badge">&#10003;</div>' : ''}
      ${hasUnreadLetter ? `<div class="stage-letter-badge" data-stageid="${stage.id}">L</div>` : ''}
      <div class="stage-num">Stage ${stage.id}</div>
      <div class="stage-icon">${stage.icon}</div>
      <div class="stage-name">${stage.name}</div>
      <div class="stage-tagline">${stage.tagline}</div>
      <div class="stage-progress-mini">
        <div class="stage-progress-bar"><div class="stage-progress-fill" style="width:${pct}%"></div></div>
        <div class="stage-progress-text">${completedInStage}/${stageSkills.length}</div>
      </div>
    `;
    card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
    card.addEventListener('click', (e) => {
      if (e.target.closest('.stage-letter-badge')) {
        showMentorLetter(stage.id); return;
      }
      openStageDetail(stage.id);
    });
    grid.appendChild(card);
    setTimeout(() => { card.style.transition = 'all 0.4s ease'; card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, stage.id * 60);
  });
}

function renderTicker() {
  const dow = new Date().getDay();
  const dayItems = TICKER_DOW[dow] || [];
  const items = [...dayItems, ...TICKER_BASE];
  const content = document.getElementById('tickerContent');
  content.textContent = [...items, ...items].join('     ·     ');
  const now = Date.now();
  if (now - lastWarningTime > 7200000) {
    const warn = TICKER_WARN_ITEMS[Math.floor(Math.random() * TICKER_WARN_ITEMS.length)];
    lastSeenWarning = warn;
    lastWarningTime = now;
    setTimeout(() => showWarningBanner(warn), 4000);
  }
}

function showWarningBanner(text) {
  const banner = document.getElementById('warningBanner');
  if (!banner) return;
  document.getElementById('warningBannerText').textContent = '⚠ MARKET ALERT: ' + text;
  banner.classList.remove('hidden');
  setTimeout(() => banner.classList.add('hidden'), 8000);
}

// =============================================
// STAGE DETAIL
// =============================================
function openStageDetail(stageId) {
  const stage = STAGES.find(s => s.id === stageId);
  const stageSkills = SKILLS_DATA.filter(s => s.stageId === stageId);
  const completedInStage = stageSkills.filter(s => state.completedSkills.includes(s.id)).length;

  document.getElementById('stageDetailTitle').textContent = stage.name;
  document.getElementById('stageDetailProgress').textContent = `${completedInStage} / ${stageSkills.length} completed`;

  const list = document.getElementById('skillsList');
  list.innerHTML = '';
  stageSkills.forEach((skill, idx) => {
    const isCompleted = state.completedSkills.includes(skill.id);
    const card = document.createElement('div');
    card.className = `skill-card ${isCompleted ? 'completed' : ''}`;
    card.innerHTML = `<div class="skill-card-num">Skill ${skill.id}</div><div class="skill-card-title">${skill.title}</div><div class="skill-card-type">${skill.type}</div>`;
    card.style.opacity = '0'; card.style.transform = 'translateY(16px)';
    card.addEventListener('click', () => openSkill(skill.id));
    list.appendChild(card);
    setTimeout(() => { card.style.transition = 'all 0.35s ease'; card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, idx * 30);
  });

  document.getElementById('backToDashboard').onclick = () => { showPage('dashboard'); renderDashboard(); };

  showPage('stageDetail');
}

// =============================================
// SKILL MODAL
// =============================================
let currentSkillSession = null;

function openSkill(skillId) {
  const skill = SKILLS_DATA.find(s => s.id === skillId);
  if (!skill) return;
  openSkillWithData(skill);
}

function openSkillWithData(skill) {
  const isCompleted = state.completedSkills.includes(skill.id);
  const stage = STAGES.find(s => s.id === skill.stageId);

  // Build question session with randomized correct answers
  const questions = skill.questions.map(q => {
    const choices = [...q.choices];
    const correct = choices[q.correctIndex];
    // Shuffle
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    const newCorrectIndex = choices.indexOf(correct);
    return { ...q, choices, correctIndex: newCorrectIndex };
  });

  currentSkillSession = {
    skill,
    questions,
    currentQ: 0,
    score: 0,
    answers: [],
    startTime: Date.now(),
    qStartTime: Date.now(),
    isDaily: skill.isDaily || false,
    stage,
  };

  // Fill header
  document.getElementById('skillStageTag').textContent = stage ? stage.name : 'Daily Challenge';
  document.getElementById('skillNum').textContent = skill.isDaily ? 'Daily Challenge' : `Skill #${skill.id}`;
  document.getElementById('skillTitle').textContent = skill.title;

  document.getElementById('cohortStat').textContent = '';

  document.getElementById('feedbackArea').classList.add('hidden');
  document.getElementById('skillCompleteArea').classList.add('hidden');
  document.getElementById('questionArea').style.display = '';

  document.getElementById('skillModal').classList.remove('hidden');
  renderQuestion();
}

function generateConceptTeaching(q, skill) {
  return (skill.concept || q.lesson || '').trim();
}


function renderQuestion() {
  const { questions, currentQ } = currentSkillSession;
  const q = questions[currentQ];
  currentSkillSession.qStartTime = Date.now();

  // Reset journal save button for each new question
  const saveBtn = document.getElementById('saveJournalBtn');
  if (saveBtn) {
    saveBtn.textContent = 'Save to Journal';
    saveBtn.disabled = false;
  }

  document.getElementById('qProgressText').textContent = `Question ${currentQ + 1} of ${questions.length}`;
  document.getElementById('qProgressFill').style.width = `${((currentQ) / questions.length) * 100}%`;

  // Concept teaching block
  document.getElementById('conceptTeaching').textContent = generateConceptTeaching(q, currentSkillSession.skill);

  const charPools = {
    mentor: { name:'The Mentor', color:'#c8922a', bg:'#8b6914', initial:'M', lines:[
      'I have watched this exact scenario play out in sixteen different companies. The outcome always depends on one thing.',
      'The obvious answer is almost never the right one. Look harder.',
      'Founders who get this right ask: what happens two years from now? Not two weeks.',
      'I have seen this destroy promising companies. I have seen it done right. The difference is subtle but real.',
      'Tell me what you are actually optimizing for — not what sounds right, but what is actually true for you.',
      'Most founders answer this from fear. The best ones answer from clarity.',
      'This is a test of whether you understand the system you are operating inside.',
      'Do not confuse urgency with importance. This decision is important. Take the time it deserves.',
      'I have seen three unicorns make the wrong call here. They recovered — but it cost them two years.',
      'The decision you make right now says more about your values than your strategy.',
      'Slow down. Founders who rush this are the ones I see again six months later, starting over.',
      'There is a second-order consequence to each choice. Most founders only see the first.',
      'What you build under pressure reveals what your company actually stands for.',
      'When I was starting out, I got this wrong three times before understanding the pattern.',
      'Consider who else this affects — beyond just you and your immediate team.',
      'The best answer is not the one that feels safe. It is the one that is honest.',
      'Ignore what other startups have done here. What does your specific situation demand?',
      'Every option has a cost that does not appear on the invoice. Find it before you choose.',
      'Ask yourself: which choice can I defend to my team at 7am tomorrow morning?',
      'This is where character shows up — not in the winning decisions, but in the hard ones.',
    ]},
    zara: { name:'Zara', color:'#3d5a7a', bg:'#1a3a5c', initial:'Z', lines:[
      'Show me the unit economics behind that intuition. Gut feelings are not a funding thesis.',
      'I have passed on fifty companies this year. Most made the wrong call on this exact type of question.',
      'Your competitors are watching this choice too. What story does each option tell the market?',
      'I need conviction backed by data — not hope dressed up as a strategy.',
      'That answer would have worked in 2018. The market has moved. Have you?',
      'Convince me. And I mean actually convince me — not pitch me.',
      'The board will ask about this. How does each option look in a quarterly review?',
      'I have seen founders pick the comfortable option here and regret it at their Series B.',
      'What is the capital efficiency story behind each of these choices?',
      'Before you answer — tell me the downside scenario for each option. Not the upside.',
      'Your investors are watching this kind of decision to understand your judgment.',
      'Three of my portfolio companies faced this. Two chose wrong. I will tell you which after you answer.',
      'The market rewards clarity and punishes ambiguity. Which option sends the clearer signal?',
      'This is a leverage question, not just an operational one. Think about what it unlocks or forecloses.',
      'I look for founders who can reason under uncertainty. This tests exactly that.',
      'Do not tell me what you think I want to hear. Tell me what you actually believe.',
      'Every term sheet I have written came after watching how a founder handles a moment like this.',
      'The wrong choice here is survivable. The pattern of wrong choices is not.',
      'If your top competitor made this decision today, what would you hope they chose?',
      'I need to see that you understand the second-order effects — not just the surface trade-off.',
    ]},
    leo: { name:'Leo', color:'#4a6b50', bg:'#2d6a4f', initial:'L', lines:[
      'I made the wrong call here three months ago. Lost $200K and eight weeks of momentum learning the lesson.',
      'My co-founder and I fought about this for two days. The right answer was not what either of us first thought.',
      'I am telling you from painful experience: the intuitive answer here is almost always wrong.',
      'When I was in this exact situation, I chose the option that looked best in a pitch. It backfired.',
      'I remember this one vividly. I still think about what would have happened if I had chosen differently.',
      'I would have given anything for someone to walk me through this before I faced it with real money.',
      'Everything looks different when it is your runway on the line. But the right answer is still right.',
      'The first time I saw this in real life, I froze. The second time, I got it wrong. The third time, finally.',
      'My investors warned me about this pattern. I thought they were being cautious. They were being right.',
      'If I could give myself one piece of advice at this exact moment — it would be about this.',
      'I have the email chain from when my team debated this. It is not pretty reading, looking back.',
      'The thing about this: you feel confident either way in the moment. One of those feelings is wrong.',
      'I asked five other founders how they handled this. Three gave me the wrong advice. Two saved me.',
      'Real talk: this question cost me a key engineer and four months of trust capital when I got it wrong.',
      'Do not be me. I learned this the most expensive way possible. You have the advantage now.',
      'After I got this wrong, I had to explain it in every investor conversation for six months.',
      'I have a scar from this type of decision. Choose carefully.',
      'My board chair said something after I got this wrong that I think about every single week.',
      'If I had taken this course before my first company, I would have answered correctly. I am certain.',
      'Three founders I deeply respect gave me the same advice on this: slow down, think laterally, then choose.',
    ]},
    maya: { name:'Maya', color:'#c4614a', bg:'#8b2e1a', initial:'Mx', lines:[
      'The brand implications of this choice will outlast whatever the immediate operational impact is.',
      'How this looks externally in twelve months will matter more than how it feels internally today.',
      'Positioning is permanent. Marketing is temporary. This decision affects which one.',
      'Your customers will remember this choice even when you have forgotten making it.',
      'Think about the story this tells — not in your deck, but in the market.',
      'Every decision is a brand signal. What does each option signal about who you are?',
      'I have rebranded companies after founders made the wrong call here. It is expensive and slow.',
      'Trust is the scarcest currency in early-stage companies. Each option either deposits or withdraws.',
      'What does your best customer think when they hear you chose this? Is that what you want them to think?',
      'The cultural narrative of your company is written in moments exactly like this one.',
      'I have worked with companies where marketing spent eighteen months fixing a decision made in this moment.',
      'Reputation compounds like interest. The right choice here pays dividends for years.',
      'What does this decision say about your values to someone who does not know you yet?',
      'Founders who build lasting brands make consistent decisions — especially under pressure.',
      'This is not just a business decision. It is a public statement about what you stand for.',
      'Every founder who chose poorly here said the same thing: it seemed right at the time.',
      'The market can smell inconsistency between what you say and what you do.',
      'Category leaders are built decision by decision. What category does this choice put you in?',
      'Think about the headline — not the one you want, but the one written if this goes wrong.',
      'The best brands are made of hundreds of small decisions made consistently. This is one of them.',
    ]},
    sam: { name:'Sam', color:'#7a5ea8', bg:'#3d2e6b', initial:'S', lines:[
      'The technical debt from the wrong choice here compounds in ways that are hard to model but easy to feel.',
      'I can build anything you decide — but one of these will haunt us in eighteen months.',
      'From a systems perspective, only one option creates the optionality you need at the next stage.',
      'The fastest path is not always the safest — and the safe path is not as slow as you think.',
      'I have built the wrong version of this twice. I know the decision tree from eighteen months out.',
      'Engineers talk. The culture signal in this decision echoes through every hiring conversation for a year.',
      'Scalability applies to every system — including the organizational one you are building.',
      'The architecture of a company is made of decisions like this one. Make the foundation sound.',
      'If I showed you the codebase that results from each choice a year from now, the answer would be obvious.',
      'Do not optimize for the demo. Optimize for the system that delivers value at scale.',
      'I have seen startups choose the elegant option and find it is brittle under load. This is that moment.',
      'Every shortcut has a cost. The question is whether the time saved is worth it. Usually it is not.',
      'The right infrastructure decision and the right business decision are often the same decision.',
      'Think about what breaks first if you scale this by 10x. That is the answer you are looking for.',
      'I am the one who builds what you decide. I am asking you to decide with the full system in mind.',
      'The technical elegance and the business elegance of the right answer align here. Find it.',
      'From engineering — we can recover from most bad decisions. But this type costs us a full quarter.',
      'Good systems are built by people who ask what fails before it fails.',
      'The founders who work well with technical co-founders understand every decision is an architecture decision.',
      'I have seen the same mistake made by three different companies at this exact point. Do not be the fourth.',
    ]},
  };

  const charKeys = Object.keys(charPools);
  const charKey = charKeys[(currentQ * 7 + currentSkillSession.skill.id * 3 + (currentSkillSession.stage?.id || 0)) % charKeys.length];
  const char = charPools[charKey];
  const lineIdx = (currentQ * 11 + currentSkillSession.skill.id * 5) % char.lines.length;
  const line = char.lines[lineIdx];

  document.getElementById('dialogueBlock').innerHTML = `
    <div class="dialogue-line" style="animation-delay:0.1s">
      <div class="dialogue-avatar" style="background:linear-gradient(135deg,${char.bg},${char.color})">${char.initial}</div>
      <div class="dialogue-bubble"><div class="dialogue-speaker">${char.name}</div>${line}</div>
    </div>
  `;

  document.getElementById('questionText').textContent = q.q;

  const grid = document.getElementById('choicesGrid');
  grid.innerHTML = '';
  q.choices.forEach((choice, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.style.animationDelay = `${idx * 0.05}s`;
    btn.innerHTML = markupGlossaryTerms(choice);
    btn.addEventListener('click', () => selectAnswer(idx));
    grid.appendChild(btn);
  });

  document.getElementById('feedbackArea').classList.add('hidden');
  document.getElementById('questionArea').style.display = '';
}

function markupGlossaryTerms(text) {
  const terms = DICTIONARY.slice(0, 80).map(d => d.term);
  let result = text;
  terms.forEach(term => {
    const regex = new RegExp(`\\b(${term})\\b`, 'gi');
    result = result.replace(regex, `<span class="glossary-term" data-term="${term}">$1</span>`);
  });
  return result;
}

function initGlossaryTooltip() {
  const tooltip = document.getElementById('glossaryTooltip');
  document.addEventListener('mouseover', (e) => {
    const el = e.target.closest('.glossary-term');
    if (!el) return;
    const term = el.getAttribute('data-term');
    const entry = DICTIONARY.find(d => d.term.toLowerCase() === term.toLowerCase());
    if (!entry) return;
    document.getElementById('gtTerm').textContent = entry.term;
    document.getElementById('gtDef').textContent = entry.def.split(' — ')[0];
    const rect = el.getBoundingClientRect();
    tooltip.style.left = `${Math.min(rect.left, window.innerWidth - 280)}px`;
    tooltip.style.top = `${rect.bottom + 8}px`;
    tooltip.classList.remove('hidden');
    state.dictLookups = (state.dictLookups || 0) + 1;
    checkBadges();
  });
  document.addEventListener('mouseout', (e) => {
    if (!e.target.closest('.glossary-term')) tooltip.classList.add('hidden');
  });
}

function selectAnswer(choiceIdx) {
  const { questions, currentQ, isDaily } = currentSkillSession;
  const q = questions[currentQ];
  const isCorrect = choiceIdx === q.correctIndex;
  const timeTaken = (Date.now() - currentSkillSession.qStartTime) / 1000;

  currentSkillSession.answers.push({ correct: isCorrect, time: timeTaken });
  if (isCorrect) currentSkillSession.score++;

  // State tracking
  state.totalAnswered++;
  if (isCorrect) {
    state.totalCorrect++;
    state.currentStreak = (state.currentStreak || 0) + 1;
    state.maxStreak = Math.max(state.maxStreak || 0, state.currentStreak);
    if (timeTaken < 8) state.speedDemon = (state.speedDemon || 0) + 1;
  } else {
    state.currentStreak = 0;
    state._hadWrong = true;
  }

  // Comeback Kid tracking
  if (isCorrect && state._hadWrong && state.currentStreak >= 5) {
    state.comebackKid = true;
  }

  saveState();

  // Disable buttons and show correct/wrong
  const btns = document.querySelectorAll('.choice-btn');
  btns.forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === q.correctIndex) btn.classList.add('correct');
    else if (i === choiceIdx && !isCorrect) btn.classList.add('wrong');
  });

  // Burst particles on correct answer
  if (isCorrect) {
    const btns2 = document.querySelectorAll('.choice-btn.correct');
    if (btns2.length) {
      const r = btns2[0].getBoundingClientRect();
      burstParticles(r.left + r.width / 2, r.top + r.height / 2, 20);
    }
  }

  // Show feedback
  document.getElementById('questionArea').style.display = 'none';
  const feedbackArea = document.getElementById('feedbackArea');
  feedbackArea.classList.remove('hidden');

  const resultEl = document.getElementById('feedbackResult');
  resultEl.className = `feedback-result ${isCorrect ? 'correct' : 'wrong'}`;
  resultEl.textContent = isCorrect ? 'Correct — well reasoned' : 'Not quite — here is what matters';

  document.getElementById('feedbackText').textContent = q.feedback;
  document.getElementById('lessonBox').textContent = q.lesson;

  // Decision Tree
  drawDecisionTree(q.choices, q.correctIndex, choiceIdx);

  document.getElementById('cohortStat').textContent = '';

  // Journal save
  document.getElementById('saveJournalBtn').onclick = () => {
    const entry = { skill: currentSkillSession.skill.title, text: q.lesson, date: new Date().toLocaleDateString() };
    state.journal.unshift(entry);
    saveState();
    document.getElementById('saveJournalBtn').textContent = 'Saved to Journal';
    document.getElementById('saveJournalBtn').disabled = true;
    checkBadges();
  };

  // Next
  document.getElementById('nextBtn').onclick = () => nextQuestion();
}

function drawDecisionTree(choices, correctIdx, chosenIdx) {
  const canvas = document.getElementById('dtreeCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : 620;
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const cx = 70, cy = H / 2;
  const branchX = W * 0.35;
  const endX = W - 30;
  const spacing = H / (choices.length + 1);

  // Root node
  ctx.fillStyle = '#c8922a';
  ctx.beginPath(); ctx.arc(cx, cy, 16, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.font = 'bold 10px Inter'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('NOW', cx, cy);

  choices.forEach((choice, i) => {
    const ty = spacing * (i + 1);
    const isCorrect = i === correctIdx;
    const isChosen = i === chosenIdx;
    const color = isCorrect ? '#6b8f71' : (isChosen ? '#c4614a' : '#d4bc8a');

    // Line from root
    ctx.strokeStyle = color; ctx.lineWidth = isChosen || isCorrect ? 2 : 1;
    ctx.setLineDash(isCorrect || isChosen ? [] : [4, 3]);
    ctx.beginPath(); ctx.moveTo(cx + 16, cy); ctx.lineTo(branchX, ty); ctx.stroke();
    ctx.setLineDash([]);

    // Branch node
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(branchX, ty, 10, 0, Math.PI * 2); ctx.fill();
    if (isCorrect) { ctx.fillStyle = '#fff'; ctx.font = 'bold 12px Inter'; ctx.fillText('✓', branchX, ty); }
    else if (isChosen) { ctx.fillStyle = '#fff'; ctx.font = 'bold 12px Inter'; ctx.fillText('✗', branchX, ty); }

    // Outcome line
    ctx.strokeStyle = color; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(branchX + 10, ty); ctx.lineTo(endX - 20, ty); ctx.stroke();

    // Choice label
    ctx.fillStyle = '#3d2e1e'; ctx.font = '10px Inter'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    const label = choice.length > 32 ? choice.substring(0, 32) + '…' : choice;
    ctx.fillText(label, branchX + 14, ty - 10);

    // Outcome tag
    ctx.fillStyle = color; ctx.font = 'bold 9px Inter'; ctx.textAlign = 'right';
    ctx.fillText(isCorrect ? 'OPTIMAL PATH' : (isChosen ? 'YOUR CHOICE' : 'WRONG ANSWER'), endX - 4, ty);
  });

  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.setLineDash([]);
}

function nextQuestion() {
  const session = currentSkillSession;
  session.currentQ++;

  if (session.currentQ >= session.questions.length) {
    completeSkill();
    return;
  }

  document.getElementById('feedbackArea').classList.add('hidden');
  document.getElementById('questionArea').style.display = '';
  renderQuestion();
}

function completeSkill() {
  const session = currentSkillSession;
  const skill = session.skill;
  const score = session.score;
  const total = session.questions.length;
  const xpEarned = session.isDaily ? (score * 30) : (score * 15);
  const isPerfect = score === total;

  if (!state.completedSkills.includes(skill.id) && skill.id !== 'daily') {
    state.completedSkills.push(skill.id);
    if (isPerfect) state.perfectSkills = (state.perfectSkills || 0) + 1;
  }

  state.xp += xpEarned;
  saveState();

  // Check stage completion for mentor letter
  const stageSkills = SKILLS_DATA.filter(s => s.stageId === skill.stageId);
  const completedInStage = stageSkills.filter(s => state.completedSkills.includes(s.id)).length;
  if (completedInStage === stageSkills.length && !state.mentorLettersRead.includes(skill.stageId)) {
    state.stageMentorLetterPending = skill.stageId;
    saveState();
  }

  const newBadges = checkBadges();

  // Show complete screen
  document.getElementById('feedbackArea').classList.add('hidden');
  document.getElementById('questionArea').style.display = 'none';
  const completeArea = document.getElementById('skillCompleteArea');
  completeArea.classList.remove('hidden');
  document.getElementById('completeXP').textContent = `+${xpEarned} XP — ${score}/${total} correct`;
  document.getElementById('completeSummary').textContent = isPerfect ? 'Perfect score. You understand this concept completely.' : score >= 3 ? 'Strong performance. One more pass will cement it.' : 'Good attempt. Every wrong answer is a lesson worth keeping.';

  // New badges display
  const badgesRow = document.getElementById('completeBadgesRow');
  badgesRow.innerHTML = '';
  newBadges.forEach(badge => {
    const pill = document.createElement('div');
    pill.className = 'new-badge-pill';
    pill.style.animationDelay = `${Math.random() * 0.3}s`;
    pill.innerHTML = `<span style="width:24px;height:24px;border-radius:50%;background:${badge.color};display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#fff;font-family:monospace">${badge.icon}</span> ${badge.name} Unlocked`;
    badgesRow.appendChild(pill);
  });

  document.getElementById('completeSkillBtn').onclick = () => {
    closeSkillModal();
    showPage('dashboard');
    renderDashboard();
    if (state.stageMentorLetterPending) {
      setTimeout(() => showMentorLetter(state.stageMentorLetterPending), 600);
      state.stageMentorLetterPending = null;
      saveState();
    }
  };
}

function closeSkillModal() {
  document.getElementById('skillModal').classList.add('hidden');
  currentSkillSession = null;
}

// =============================================
// BADGES
// =============================================
function checkBadges() {
  const newBadges = [];
  BADGES.forEach(badge => {
    if (!state.earnedBadges.includes(badge.id)) {
      try {
        if (badge.condition(state)) {
          state.earnedBadges.push(badge.id);
          newBadges.push(badge);
        }
      } catch(e) {}
    }
  });
  if (newBadges.length > 0) saveState();
  return newBadges;
}

function openBadges() {
  const earned = state.earnedBadges.length;
  const total = BADGES.length;
  document.getElementById('badgesSubtitle').textContent = `${earned} of ${total} badges earned — some are secret`;
  const grid = document.getElementById('badgesGrid');
  grid.innerHTML = '';
  BADGES.forEach(badge => {
    const isEarned = state.earnedBadges.includes(badge.id);
    const item = document.createElement('div');
    item.className = `badge-item ${isEarned ? 'earned' : 'locked'}`;
    item.innerHTML = `
      <div class="badge-icon" style="background:${badge.color}">${badge.icon}</div>
      <div class="badge-name">${badge.name}</div>
      <div class="badge-desc">${isEarned ? badge.desc : '???'}</div>
    `;
    grid.appendChild(item);
  });
  document.getElementById('badgesModal').classList.remove('hidden');
  document.getElementById('badgesClose').onclick = () => document.getElementById('badgesModal').classList.add('hidden');
}

// =============================================
// DICTIONARY
// =============================================
let dictFilter = 'All';

function openDictionary() {
  renderDictionary('', 'All');
  document.getElementById('dictionaryModal').classList.remove('hidden');
  document.getElementById('dictClose').onclick = () => document.getElementById('dictionaryModal').classList.add('hidden');
  document.getElementById('dictSearch').addEventListener('input', (e) => renderDictionary(e.target.value, dictFilter));

  const categories = ['All', ...new Set(DICTIONARY.map(d => d.cat))];
  const catContainer = document.getElementById('dictCategories');
  catContainer.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `dict-cat-btn ${cat === dictFilter ? 'active' : ''}`;
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      dictFilter = cat;
      catContainer.querySelectorAll('.dict-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderDictionary(document.getElementById('dictSearch').value, cat);
    });
    catContainer.appendChild(btn);
  });
}

function renderDictionary(query, cat) {
  let results = DICTIONARY;
  if (cat !== 'All') results = results.filter(d => d.cat === cat);
  if (query) results = results.filter(d => d.term.toLowerCase().includes(query.toLowerCase()) || d.def.toLowerCase().includes(query.toLowerCase()));

  document.getElementById('dictCount').textContent = `${results.length} terms`;
  const list = document.getElementById('dictList');
  list.innerHTML = '';
  results.forEach(entry => {
    const el = document.createElement('div');
    el.className = 'dict-entry';
    el.innerHTML = `
      <div class="dict-entry-term">${entry.term}</div>
      <div class="dict-entry-cat">${entry.cat}</div>
      <div class="dict-entry-def">${entry.def}</div>
      ${entry.example ? `<div class="dict-entry-example">${entry.example}</div>` : ''}
    `;
    list.appendChild(el);
  });
}

// =============================================
// MENTOR LETTERS
// =============================================
function showMentorLetter(stageId) {
  const letter = MENTOR_LETTERS[stageId];
  if (!letter) return;

  document.getElementById('letterStage').textContent = letter.stage;
  document.getElementById('letterBody').textContent = letter.body;
  document.getElementById('mentorLetterModal').classList.remove('hidden');

  document.getElementById('mentorLetterClose').onclick = () => {
    document.getElementById('mentorLetterModal').classList.add('hidden');
    state.mentorLettersRead.push(stageId);
    saveState();
    renderDashboard();
  };
  document.getElementById('letterContinueBtn').onclick = () => {
    document.getElementById('mentorLetterModal').classList.add('hidden');
    state.mentorLettersRead.push(stageId);
    saveState();
    renderDashboard();
  };
}

// =============================================
// JOURNAL
// =============================================
function openJournal() {
  const entries = state.journal || [];
  const emptyEl = document.getElementById('journalEmpty');
  const entriesEl = document.getElementById('journalEntries');

  if (entries.length === 0) {
    emptyEl.classList.remove('hidden');
    entriesEl.innerHTML = '';
  } else {
    emptyEl.classList.add('hidden');
    entriesEl.innerHTML = '';
    entries.forEach(entry => {
      const div = document.createElement('div');
      div.className = 'journal-entry';
      div.innerHTML = `<div class="journal-entry-skill">${entry.skill} — ${entry.date}</div><div class="journal-entry-text">${entry.text}</div>`;
      entriesEl.appendChild(div);
    });
  }

  document.getElementById('journalModal').classList.remove('hidden');
  document.getElementById('journalClose').onclick = () => document.getElementById('journalModal').classList.add('hidden');
}

// =============================================
// CRISIS EVENTS
// =============================================
let crisisTimer = null;

function scheduleCrisis() {
  const delay = (Math.random() * 120000) + 90000; // 90-210 seconds
  setTimeout(triggerCrisis, delay);
}

function triggerCrisis() {
  if (document.getElementById('skillModal') && !document.getElementById('skillModal').classList.contains('hidden')) {
    scheduleCrisis(); return;
  }
  if (!document.getElementById('dashboard').classList.contains('active')) {
    scheduleCrisis(); return;
  }

  const event = CRISIS_EVENTS[Math.floor(Math.random() * CRISIS_EVENTS.length)];
  document.getElementById('crisisTitle').textContent = event.title;
  document.getElementById('crisisScenario').textContent = event.scenario;
  document.getElementById('crisisResult').classList.add('hidden');

  const choicesEl = document.getElementById('crisisChoices');
  choicesEl.innerHTML = '';
  event.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'crisis-choice-btn';
    btn.textContent = choice.text;
    btn.addEventListener('click', () => handleCrisisChoice(choice));
    choicesEl.appendChild(btn);
  });

  document.getElementById('crisisModal').classList.remove('hidden');
  startCrisisTimer();
}

function handleCrisisChoice(choice) {
  clearInterval(crisisTimer);
  document.querySelectorAll('.crisis-choice-btn').forEach(b => b.disabled = true);
  const resultEl = document.getElementById('crisisResult');
  resultEl.textContent = choice.result;
  resultEl.classList.remove('hidden');

  state.crisisesHandled = (state.crisisesHandled || 0) + 1;
  if (choice.good) state.xp += 50;
  saveState();
  checkBadges();

  setTimeout(() => {
    document.getElementById('crisisModal').classList.add('hidden');
    scheduleCrisis();
  }, 4000);
}

function startCrisisTimer() {
  let seconds = 30;
  const circumference = 213.6;
  document.getElementById('crisisSeconds').textContent = seconds;
  document.getElementById('crisisCircle').style.strokeDashoffset = '0';

  crisisTimer = setInterval(() => {
    seconds--;
    document.getElementById('crisisSeconds').textContent = seconds;
    const offset = circumference - (seconds / 30) * circumference;
    document.getElementById('crisisCircle').style.strokeDashoffset = offset;

    if (seconds <= 0) {
      clearInterval(crisisTimer);
      document.querySelectorAll('.crisis-choice-btn').forEach(b => b.disabled = true);
      document.getElementById('crisisResult').textContent = 'Time expired. No decision is also a decision — and usually the worst one.';
      document.getElementById('crisisResult').classList.remove('hidden');
      state.crisisesHandled = (state.crisisesHandled || 0) + 1;
      saveState();
      setTimeout(() => { document.getElementById('crisisModal').classList.add('hidden'); scheduleCrisis(); }, 3000);
    }
  }, 1000);
}

// =============================================
// MARKET SIMULATION
// =============================================
let marketState = {};

function initMarketSim() {
  marketState = {
    round: 1, maxRounds: 20,
    valuation: 1.0, revenue: 0, runway: 12, employees: 3,
    sentiment: 50, confidence: 50, brand: 30, burn: 70,
    valuationHistory: [1.0],
    scenarios: shuffleArray([...MARKET_SCENARIOS]).slice(0, 20),
  };

  document.getElementById('backFromMarket').onclick = () => { showPage('dashboard'); renderDashboard(); };
  document.getElementById('logEntries').innerHTML = '';
  updateMarketUI();
  renderMarketScenario();
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function updateMarketUI() {
  const { valuation, revenue, runway, employees } = marketState;
  document.getElementById('mValuation').textContent = valuation >= 1000 ? `${(valuation/1000).toFixed(1)}B` : valuation >= 1 ? `${valuation.toFixed(1)}M` : `${(valuation * 1000).toFixed(0)}K`;
  document.getElementById('mRevenue').textContent = revenue >= 1 ? `${revenue.toFixed(0)}K` : `${(revenue * 1000).toFixed(0)}`;
  document.getElementById('mRunway').textContent = Math.max(0, Math.round(runway));
  document.getElementById('mEmployees').textContent = employees;

  const s = marketState;
  document.getElementById('sentimentBar').style.width = `${s.sentiment}%`;
  document.getElementById('confidenceBar').style.width = `${s.confidence}%`;
  document.getElementById('brandBar').style.width = `${s.brand}%`;
  document.getElementById('burnBar').style.width = `${s.burn}%`;
  document.getElementById('sentimentVal').textContent = s.sentiment > 66 ? 'Bullish' : s.sentiment > 33 ? 'Neutral' : 'Bearish';
  document.getElementById('confidenceVal').textContent = s.confidence > 66 ? 'High' : s.confidence > 33 ? 'Medium' : 'Low';
  document.getElementById('brandVal').textContent = s.brand > 66 ? 'Strong' : s.brand > 33 ? 'Building' : 'Weak';
  document.getElementById('burnVal').textContent = s.burn > 66 ? 'Healthy' : s.burn > 33 ? 'Caution' : 'Critical';

  drawValuationChart();

  if (marketState.valuation > (state.bestValuation || 0)) {
    state.bestValuation = marketState.valuation;
    checkBadges();
    saveState();
  }
}

function drawValuationChart() {
  const canvas = document.getElementById('valuationChart');
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const history = marketState.valuationHistory;
  ctx.clearRect(0, 0, W, H);

  if (history.length < 2) return;

  const maxV = Math.max(...history) * 1.2;
  const minV = Math.min(...history) * 0.8;
  const range = maxV - minV || 1;

  const pts = history.map((v, i) => ({
    x: 40 + (i / (Math.max(history.length - 1, 1))) * (W - 60),
    y: H - 30 - ((v - minV) / range) * (H - 50),
  }));

  // Grid
  ctx.strokeStyle = 'rgba(200,180,140,0.25)'; ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = 20 + (i / 4) * (H - 50);
    ctx.beginPath(); ctx.moveTo(40, y); ctx.lineTo(W - 20, y); ctx.stroke();
    const val = maxV - (i / 4) * range;
    ctx.fillStyle = '#6b4f35'; ctx.font = '10px Inter'; ctx.textAlign = 'right';
    const valLabel = val >= 1000 ? `$${(val/1000).toFixed(1)}B` : val >= 100 ? `$${val.toFixed(0)}M` : val >= 10 ? `$${val.toFixed(1)}M` : `$${val.toFixed(2)}M`;
    ctx.fillText(valLabel, 36, y + 4);
  }

  // Gradient fill
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, 'rgba(200,146,42,0.25)');
  grad.addColorStop(1, 'rgba(200,146,42,0.02)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(pts[0].x, H - 30);
  pts.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(pts[pts.length - 1].x, H - 30);
  ctx.closePath(); ctx.fill();

  // Line
  ctx.strokeStyle = '#c8922a'; ctx.lineWidth = 2.5; ctx.lineJoin = 'round';
  ctx.beginPath();
  pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
  ctx.stroke();

  // Points
  pts.forEach((p, i) => {
    ctx.fillStyle = i === pts.length - 1 ? '#c8922a' : 'rgba(200,146,42,0.5)';
    ctx.beginPath(); ctx.arc(p.x, p.y, i === pts.length - 1 ? 5 : 3, 0, Math.PI * 2); ctx.fill();
  });
}

function renderMarketScenario() {
  const { round, maxRounds, scenarios } = marketState;
  if (round > maxRounds || round > scenarios.length) {
    endMarketSim(); return;
  }

  const scenario = scenarios[round - 1];
  document.getElementById('decisionRound').textContent = round;
  document.getElementById('decisionContext').textContent = scenario.context;
  document.getElementById('decisionScenario').textContent = scenario.scenario;
  document.getElementById('marketDialogue').textContent = scenario.dialogue;
  document.getElementById('decisionResult').classList.add('hidden');

  const choicesEl = document.getElementById('decisionChoices');
  choicesEl.innerHTML = '';
  scenario.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'decision-choice-btn';
    btn.textContent = choice.text;
    btn.addEventListener('click', () => makeDecision(choice, scenario.choices));
    choicesEl.appendChild(btn);
  });
}

function makeDecision(choice, allChoices) {
  document.querySelectorAll('.decision-choice-btn').forEach((btn, i) => {
    btn.classList.add('disabled');
    if (allChoices[i].good) btn.classList.add('best-choice');
    else if (btn.textContent === choice.text && !choice.good) btn.classList.add('bad-choice');
  });

  // Apply impacts
  marketState.valuation = Math.max(0.1, marketState.valuation * choice.impact);
  marketState.revenue = Math.max(0, marketState.revenue * choice.rev);
  marketState.employees = Math.max(1, Math.round(marketState.employees * choice.team));
  marketState.runway = Math.max(0, marketState.runway * choice.runway);
  marketState.sentiment = Math.min(100, Math.max(0, marketState.sentiment + (choice.good ? 8 : -8)));
  marketState.confidence = Math.min(100, Math.max(0, marketState.confidence + (choice.good ? 10 : -12)));
  marketState.brand = Math.min(100, Math.max(0, marketState.brand + (choice.good ? 6 : -5)));
  marketState.valuationHistory.push(marketState.valuation);

  const resultEl = document.getElementById('decisionResult');
  resultEl.classList.remove('hidden');
  const impactEl = document.getElementById('resultImpact');
  impactEl.textContent = choice.good ? 'Strong decision.' : 'Costly choice.';

  const metricsEl = document.getElementById('resultMetrics');
  metricsEl.innerHTML = `
    <span class="result-metric ${choice.impact >= 1 ? 'positive' : 'negative'}">Val: ${choice.impact >= 1 ? '+' : ''}${((choice.impact - 1) * 100).toFixed(0)}%</span>
    <span class="result-metric ${choice.rev >= 1 ? 'positive' : 'negative'}">Rev: ${choice.rev >= 1 ? '+' : ''}${((choice.rev - 1) * 100).toFixed(0)}%</span>
    <span class="result-metric ${choice.runway >= 1 ? 'positive' : 'negative'}">Runway: ${choice.runway >= 1 ? '+' : ''}${((choice.runway - 1) * 100).toFixed(0)}%</span>
  `;
  let resultDetailText = choice.result;
  if (!choice.good && lastSeenWarning) {
    resultDetailText += ` — Market context to remember: "${lastSeenWarning.replace(/^[A-Z ]+:\s*/, '').substring(0, 90)}…"`;
  }
  document.getElementById('resultDetail').textContent = resultDetailText;

  updateMarketUI();
  addLogEntry(choice);

  document.getElementById('nextDecisionBtn').onclick = () => {
    marketState.round++;
    renderMarketScenario();
  };
}

function addLogEntry(choice) {
  const log = document.getElementById('logEntries');
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  const impactPct = ((choice.impact - 1) * 100).toFixed(0);
  entry.innerHTML = `
    <span class="log-round">R${marketState.round}</span>
    <span class="log-text">${choice.text.substring(0, 55)}…</span>
    <span class="log-impact ${choice.impact >= 1 ? 'pos' : 'neg'}">${choice.impact >= 1 ? '+' : ''}${impactPct}%</span>
  `;
  log.insertBefore(entry, log.firstChild);
}

function endMarketSim() {
  const { valuation } = marketState;
  document.getElementById('decisionScenario').textContent = `Simulation complete. Final valuation: $${valuation >= 1000 ? `${(valuation/1000).toFixed(1)}B` : `${valuation.toFixed(1)}M`}`;
  document.getElementById('decisionContext').textContent = 'Market Simulation — Final Results';
  document.getElementById('decisionChoices').innerHTML = `<button class="next-decision-btn" onclick="initMarketSim()">Run Again</button>`;
  document.getElementById('marketDialogue').textContent = valuation >= 50 ? 'Zara: "I would consider funding this company. The decisions you made were the right ones under pressure."' : valuation >= 10 ? 'The Mentor: "A solid journey. The decisions that went wrong each had a lesson worth keeping."' : 'Leo: "This is what learning costs in the real world. Except in the real world, you only get one shot."';
}

// =============================================
// COMPLETION SCREEN
// =============================================
function showCompletionScreen() {
  showPage('completionScreen');
  startConfetti();

  const certNameStep = document.getElementById('certNameStep');
  const certWrapper = document.getElementById('certWrapper');
  const certNameBtn = document.getElementById('certNameBtn');
  const founderNameInput = document.getElementById('founderNameInput');
  const certNameDisplay = document.getElementById('certNameDisplay');

  // If name already saved, skip name step
  if (state.founderName) {
    founderNameInput.value = state.founderName;
    certNameDisplay.textContent = state.founderName;
    certNameStep.style.display = 'none';
    certWrapper.style.display = 'flex';
  }

  const generateCert = () => {
    const name = founderNameInput.value.trim();
    if (!name) { founderNameInput.focus(); return; }
    state.founderName = name;
    saveState();
    certNameDisplay.textContent = name;
    certNameStep.style.display = 'none';
    certWrapper.style.display = 'flex';
  };

  certNameBtn.addEventListener('click', generateCert);
  founderNameInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') generateCert(); });

  document.getElementById('certDownloadBtn').addEventListener('click', () => {
    const frame = document.getElementById('certFrame');
    const btn = document.getElementById('certDownloadBtn');
    btn.textContent = 'Generating…';
    btn.disabled = true;
    html2canvas(frame, {
      scale: 2,
      backgroundColor: '#f5f2ec',
      useCORS: true,
      logging: false,
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `FounderPath-Certificate-${(state.founderName || 'Founder').replace(/\s+/g, '-')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      btn.textContent = '⬇ Download Certificate';
      btn.disabled = false;
    }).catch(() => {
      btn.textContent = '⬇ Download Certificate';
      btn.disabled = false;
    });
  });
}

// =============================================
// CONFETTI — only called on completion
// =============================================
let confettiRAF = null;
let confettiParticles = [];

function startConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.classList.remove('hidden');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  confettiParticles = Array.from({length: 120}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    w: Math.random() * 10 + 5,
    h: Math.random() * 6 + 3,
    color: ['#c8922a','#e8b44a','#f5e6c4','#6b8f71','#3d5a7a','#c4614a'][Math.floor(Math.random()*6)],
    vx: (Math.random() - 0.5) * 2,
    vy: Math.random() * 3 + 1,
    rot: Math.random() * 360,
    vrot: (Math.random() - 0.5) * 5,
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.vrot;
      if (p.y > canvas.height) { p.y = -20; p.x = Math.random() * canvas.width; }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    confettiRAF = requestAnimationFrame(animate);
  }
  animate();
}

function stopConfetti() {
  if (confettiRAF) { cancelAnimationFrame(confettiRAF); confettiRAF = null; }
  document.getElementById('confettiCanvas').classList.add('hidden');
  confettiParticles = [];
}

// =============================================
// MODAL HANDLERS
// =============================================
function initModalHandlers() {
  document.getElementById('modalClose').addEventListener('click', closeSkillModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeSkillModal();
      document.getElementById('journalModal').classList.add('hidden');
      document.getElementById('crisisModal').classList.add('hidden');
      document.getElementById('badgesModal').classList.add('hidden');
      document.getElementById('dictionaryModal').classList.add('hidden');
      document.getElementById('mentorLetterModal').classList.add('hidden');
    }
  });
}

// =============================================
// INIT
// =============================================
function init() {
  loadState();
  initLanding();
  initModalHandlers();
  initGlossaryTooltip();
  checkBadges();

  // Cursor glow effect
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
    document.documentElement.style.setProperty('--my', `${e.clientY}px`);
  });

  initCursorFX();
  initRippleEffect();
  initMagneticButtons();
  initCardTilt();

  if (state.completedSkills.length > 0) {
    showPage('dashboard');
    renderDashboard();
  }
}

document.addEventListener('DOMContentLoaded', init);

// =============================================
// CURSOR PARTICLE SYSTEM
// =============================================
function initCursorFX() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform  = `translate(${mx}px,${my}px)`;
    spawnTrailParticle(mx, my);
  });

  function lerpRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(lerpRing);
  }
  lerpRing();

  document.addEventListener('mousedown', () => ring.classList.add('cursor-ring--press'));
  document.addEventListener('mouseup',   () => ring.classList.remove('cursor-ring--press'));

  const hoverEls = 'a, button, .skill-card, .stage-card, .char-card, .feature-card, .choice-btn, .step-card';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverEls)) {
      dot.classList.add('cursor-dot--hover');
      ring.classList.add('cursor-ring--hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverEls)) {
      dot.classList.remove('cursor-dot--hover');
      ring.classList.remove('cursor-ring--hover');
    }
  });
}

const TRAIL_COLORS = ['#c8922a','#e8b44a','#f5c96a','#d4a040','#f0d080'];
let lastTrailTime = 0;
function spawnTrailParticle(x, y) {
  const now = Date.now();
  if (now - lastTrailTime < 40) return;
  lastTrailTime = now;

  const p = document.createElement('div');
  p.className = 'cursor-particle';
  const size = 4 + Math.random() * 5;
  const color = TRAIL_COLORS[Math.floor(Math.random() * TRAIL_COLORS.length)];
  const angle = Math.random() * Math.PI * 2;
  const dist  = 8 + Math.random() * 14;
  const tx = Math.cos(angle) * dist;
  const ty = Math.sin(angle) * dist;
  p.style.cssText = `
    left:${x}px; top:${y}px;
    width:${size}px; height:${size}px;
    background:${color};
    --tx:${tx}px; --ty:${ty}px;
  `;
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 700);
}

// =============================================
// RIPPLE EFFECT ON CLICK
// =============================================
function initRippleEffect() {
  document.addEventListener('click', (e) => {
    const el = e.target.closest('button, .cta-btn, .choice-btn, .skill-card, .stage-card');
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const r = document.createElement('span');
    r.className = 'ripple-fx';
    r.style.left = `${e.clientX - rect.left}px`;
    r.style.top  = `${e.clientY - rect.top}px`;
    el.style.position = 'relative';
    el.style.overflow  = 'hidden';
    el.appendChild(r);
    setTimeout(() => r.remove(), 600);
  });
}

// =============================================
// MAGNETIC BUTTONS
// =============================================
function initMagneticButtons() {
  const targets = document.querySelectorAll('.cta-btn, .cta-btn-outline, .nav-cta-btn');
  targets.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) * 0.25;
      const dy = (e.clientY - cy) * 0.25;
      el.style.transform = `translate(${dx}px,${dy}px) scale(1.04)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

// =============================================
// CARD TILT (3-D) EFFECT
// =============================================
function initCardTilt() {
  const cards = document.querySelectorAll('.char-card, .feature-card, .step-card, .stage-card, .skill-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const rx = ((e.clientY - cy) / rect.height) * -14;
      const ry = ((e.clientX - cx) / rect.width)  *  14;
      card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
      card.style.boxShadow = `${-ry * 0.5}px ${rx * 0.5}px 32px rgba(100,60,20,0.22)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
}

// =============================================
// BURST PARTICLES ON CORRECT ANSWER
// =============================================
function burstParticles(x, y, count = 16) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'burst-particle';
    const angle = (i / count) * Math.PI * 2;
    const dist  = 40 + Math.random() * 50;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;
    const colors = ['#c8922a','#e8b44a','#6b8f71','#f5e6c4','#d4811a'];
    p.style.cssText = `
      left:${x}px; top:${y}px;
      background:${colors[i % colors.length]};
      --tx:${tx}px; --ty:${ty}px;
    `;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 900);
  }
}
