export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  image: string;
}

// Mock blog data - in a real app, this would come from a CMS or markdown files
const blogPosts: BlogPostData[] = [
  {
    slug: 'retirement-planning-guide-2025',
    title: 'The Complete Retirement Planning Guide for 2025',
    excerpt: 'Discover the essential strategies and updated contribution limits for building a secure retirement in 2025.',
    content: `
      <h2>Why Retirement Planning Matters More Than Ever</h2>
      <p>With increasing life expectancy and rising healthcare costs, planning for retirement has become more critical than ever. The average American will need approximately 70-90% of their pre-retirement income to maintain their lifestyle during retirement.</p>
      
      <h2>2025 Contribution Limits</h2>
      <p>The IRS has announced updated contribution limits for 2025:</p>
      <ul>
        <li><strong>401(k) Plans:</strong> $23,500 (up from $23,000 in 2024)</li>
        <li><strong>IRA Contributions:</strong> $7,000 (unchanged from 2024)</li>
        <li><strong>Catch-up Contributions (50+):</strong> Additional $7,500 for 401(k)s, $1,000 for IRAs</li>
      </ul>
      
      <h2>Key Strategies for 2025</h2>
      <p>Here are the most effective retirement planning strategies for this year:</p>
      
      <h3>1. Maximize Employer Matching</h3>
      <p>Always contribute enough to your 401(k) to receive the full employer match. This is essentially free money that can significantly boost your retirement savings.</p>
      
      <h3>2. Consider Roth Conversions</h3>
      <p>With potential tax law changes on the horizon, converting traditional IRA funds to Roth IRAs during lower-income years can provide tax-free growth and withdrawals in retirement.</p>
      
      <h3>3. Diversify Your Income Sources</h3>
      <p>Don't rely solely on Social Security and employer-sponsored plans. Consider building multiple income streams through:</p>
      <ul>
        <li>Personal savings and investments</li>
        <li>Real estate investments</li>
        <li>Part-time work or consulting</li>
        <li>Passive income opportunities</li>
      </ul>
      
      <h2>Common Retirement Planning Mistakes</h2>
      <p>Avoid these costly errors that can derail your retirement plans:</p>
      <ul>
        <li>Starting too late</li>
        <li>Underestimating healthcare costs</li>
        <li>Not accounting for inflation</li>
        <li>Withdrawing from retirement accounts early</li>
        <li>Failing to update beneficiaries</li>
      </ul>
      
      <h2>Take Action Today</h2>
      <p>The best time to start planning for retirement was yesterday; the second-best time is today. Whether you're just starting your career or approaching retirement, it's never too late to optimize your strategy.</p>
      
      <p>If you need help creating or reviewing your retirement plan, I'm here to help. Schedule a free consultation to discuss your specific situation and goals.</p>
    `,
    date: '2025-01-15',
    category: 'Retirement Planning',
    tags: ['retirement', '401k', 'IRA', 'financial planning', '2025'],
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'emergency-fund-guide',
    title: 'Building Your Emergency Fund: A Step-by-Step Guide',
    excerpt: 'Learn how to build and maintain an emergency fund that protects your financial stability during unexpected events.',
    content: `
      <h2>What Is an Emergency Fund?</h2>
      <p>An emergency fund is a dedicated savings account designed to cover unexpected expenses or financial emergencies. It serves as a financial safety net, protecting you from going into debt when life throws you a curveball.</p>
      
      <h2>How Much Should You Save?</h2>
      <p>The general rule of thumb is to save 3-6 months' worth of living expenses. However, the right amount depends on your specific situation:</p>
      
      <h3>3 Months of Expenses</h3>
      <ul>
        <li>Stable job with low risk of layoffs</li>
        <li>Dual-income household</li>
        <li>Good health insurance coverage</li>
        <li>Strong family support system</li>
      </ul>
      
      <h3>6+ Months of Expenses</h3>
      <ul>
        <li>Self-employed or commission-based income</li>
        <li>Single-income household</li>
        <li>Work in a volatile industry</li>
        <li>Have dependents or health issues</li>
      </ul>
      
      <h2>Where to Keep Your Emergency Fund</h2>
      <p>Your emergency fund should be easily accessible but separate from your everyday checking account. Consider these options:</p>
      
      <h3>High-Yield Savings Account</h3>
      <p>The most popular choice, offering:</p>
      <ul>
        <li>FDIC insurance protection</li>
        <li>Easy access to funds</li>
        <li>Competitive interest rates</li>
        <li>No investment risk</li>
      </ul>
      
      <h3>Money Market Account</h3>
      <p>Similar to savings accounts but may offer:</p>
      <ul>
        <li>Slightly higher interest rates</li>
        <li>Check-writing privileges</li>
        <li>Debit card access</li>
        <li>Higher minimum balance requirements</li>
      </ul>
      
      <h2>Building Your Emergency Fund</h2>
      <p>Here's a practical approach to building your emergency fund:</p>
      
      <h3>Step 1: Start Small</h3>
      <p>Begin with a goal of $1,000. This covers most minor emergencies and builds the savings habit.</p>
      
      <h3>Step 2: Automate Your Savings</h3>
      <p>Set up automatic transfers from your checking to your emergency fund. Even $50-100 per month adds up over time.</p>
      
      <h3>Step 3: Use Windfalls Wisely</h3>
      <p>Direct tax refunds, bonuses, or other unexpected money toward your emergency fund.</p>
      
      <h3>Step 4: Cut Unnecessary Expenses</h3>
      <p>Review your budget and redirect money from non-essential spending to your emergency fund.</p>
      
      <h2>When to Use Your Emergency Fund</h2>
      <p>Use your emergency fund for true emergencies only:</p>
      <ul>
        <li>Job loss or significant income reduction</li>
        <li>Major medical expenses</li>
        <li>Essential home or car repairs</li>
        <li>Family emergencies</li>
      </ul>
      
      <p><strong>Not for:</strong> Vacations, shopping, planned expenses, or investment opportunities.</p>
      
      <h2>Replenishing Your Emergency Fund</h2>
      <p>If you need to use your emergency fund, make replenishing it a top priority. Resume your regular contributions as soon as possible to restore your financial safety net.</p>
      
      <p>Remember, an emergency fund isn't just about money—it's about peace of mind and financial security. Start building yours today, even if it's just $25 at a time.</p>
    `,
    date: '2025-01-10',
    category: 'Financial Planning',
    tags: ['emergency fund', 'savings', 'financial security', 'budgeting'],
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'investment-basics-beginners',
    title: 'Investment Basics: A Beginner\'s Guide to Building Wealth',
    excerpt: 'New to investing? Learn the fundamental concepts and strategies to start building long-term wealth.',
    content: `
      <h2>Why Investing Matters</h2>
      <p>Investing is one of the most powerful tools for building long-term wealth. While saving money is important, investing allows your money to grow faster than inflation, helping you achieve your financial goals.</p>
      
      <h2>Key Investment Concepts</h2>
      
      <h3>Risk vs. Return</h3>
      <p>Generally, investments with higher potential returns come with higher risk. Understanding this relationship helps you make informed decisions based on your risk tolerance and time horizon.</p>
      
      <h3>Diversification</h3>
      <p>Don't put all your eggs in one basket. Spreading investments across different asset classes, industries, and geographic regions helps reduce risk.</p>
      
      <h3>Time Horizon</h3>
      <p>The length of time you plan to hold an investment significantly impacts your strategy. Longer time horizons typically allow for more aggressive growth strategies.</p>
      
      <h2>Types of Investments</h2>
      
      <h3>Stocks</h3>
      <p>Represent ownership in companies. Stocks offer high growth potential but come with higher volatility.</p>
      <ul>
        <li><strong>Individual Stocks:</strong> Direct ownership in specific companies</li>
        <li><strong>Stock Mutual Funds:</strong> Professionally managed portfolios of stocks</li>
        <li><strong>ETFs:</strong> Exchange-traded funds that track market indexes</li>
      </ul>
      
      <h3>Bonds</h3>
      <p>Loans to governments or corporations that pay regular interest. Generally less risky than stocks but offer lower returns.</p>
      
      <h3>Real Estate</h3>
      <p>Can provide both income and appreciation. Options include:</p>
      <ul>
        <li>Direct property ownership</li>
        <li>Real Estate Investment Trusts (REITs)</li>
        <li>Real estate crowdfunding platforms</li>
      </ul>
      
      <h2>Getting Started</h2>
      
      <h3>1. Define Your Goals</h3>
      <p>Are you saving for retirement, a home down payment, or your children's education? Your goals will determine your investment strategy.</p>
      
      <h3>2. Assess Your Risk Tolerance</h3>
      <p>Consider both your ability and willingness to take risk. Factors include:</p>
      <ul>
        <li>Age and time horizon</li>
        <li>Income stability</li>
        <li>Emotional comfort with volatility</li>
        <li>Other financial resources</li>
      </ul>
      
      <h3>3. Choose Your Account Type</h3>
      <p>Different account types offer various tax advantages:</p>
      <ul>
        <li><strong>401(k):</strong> Employer-sponsored retirement account</li>
        <li><strong>IRA:</strong> Individual retirement account</li>
        <li><strong>Roth IRA:</strong> After-tax contributions, tax-free growth</li>
        <li><strong>Taxable Account:</strong> No contribution limits, more flexibility</li>
      </ul>
      
      <h3>4. Start Simple</h3>
      <p>Begin with low-cost, diversified index funds or target-date funds. These provide instant diversification and professional management at low costs.</p>
      
      <h2>Common Beginner Mistakes</h2>
      <ul>
        <li>Trying to time the market</li>
        <li>Putting all money in one investment</li>
        <li>Panic selling during market downturns</li>
        <li>Chasing hot investment trends</li>
        <li>Not starting early enough</li>
      </ul>
      
      <h2>The Power of Compound Interest</h2>
      <p>Albert Einstein allegedly called compound interest "the eighth wonder of the world." Starting early, even with small amounts, can lead to significant wealth over time due to compounding returns.</p>
      
      <p>For example, investing $200 per month starting at age 25 could grow to over $500,000 by age 65, assuming a 7% annual return.</p>
      
      <h2>Next Steps</h2>
      <p>Investing doesn't have to be complicated. Start with the basics, stay consistent, and gradually increase your knowledge and contributions over time.</p>
      
      <p>If you're ready to start investing but want professional guidance, I'm here to help you create a personalized investment strategy that aligns with your goals and risk tolerance.</p>
    `,
    date: '2025-01-05',
    category: 'Investment',
    tags: ['investing', 'stocks', 'bonds', 'portfolio', 'wealth building'],
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'life-insurance-guide',
    title: 'Life Insurance: Protecting Your Family\'s Financial Future',
    excerpt: 'Understanding the different types of life insurance and how to choose the right coverage for your family.',
    content: `
      <h2>Why Life Insurance Matters</h2>
      <p>Life insurance provides financial protection for your loved ones in the event of your death. It can replace lost income, pay off debts, cover final expenses, and help your family maintain their standard of living.</p>
      
      <h2>Types of Life Insurance</h2>
      
      <h3>Term Life Insurance</h3>
      <p>Provides coverage for a specific period (term), typically 10, 20, or 30 years.</p>
      
      <h4>Pros:</h4>
      <ul>
        <li>Lower premiums</li>
        <li>Simple and straightforward</li>
        <li>Large coverage amounts available</li>
        <li>Good for temporary needs</li>
      </ul>
      
      <h4>Cons:</h4>
      <ul>
        <li>No cash value</li>
        <li>Premiums increase with age</li>
        <li>Coverage ends when term expires</li>
      </ul>
      
      <h3>Permanent Life Insurance</h3>
      <p>Provides lifelong coverage and includes a cash value component.</p>
      
      <h4>Whole Life Insurance</h4>
      <ul>
        <li>Fixed premiums</li>
        <li>Guaranteed cash value growth</li>
        <li>Dividends may be paid</li>
        <li>More expensive than term</li>
      </ul>
      
      <h4>Universal Life Insurance</h4>
      <ul>
        <li>Flexible premiums and death benefits</li>
        <li>Cash value earns market interest rates</li>
        <li>More complex than whole life</li>
        <li>Performance depends on interest rates</li>
      </ul>
      
      <h4>Variable Life Insurance</h4>
      <ul>
        <li>Cash value invested in sub-accounts</li>
        <li>Potential for higher returns</li>
        <li>Investment risk borne by policyholder</li>
        <li>Requires active management</li>
      </ul>
      
      <h2>How Much Life Insurance Do You Need?</h2>
      <p>Several methods can help determine your coverage needs:</p>
      
      <h3>Income Replacement Method</h3>
      <p>Multiply your annual income by 10-12 times. This simple rule provides a quick estimate.</p>
      
      <h3>DIME Method</h3>
      <p>Add up your:</p>
      <ul>
        <li><strong>Debt:</strong> Mortgage, credit cards, loans</li>
        <li><strong>Income:</strong> Annual income × years until retirement</li>
        <li><strong>Mortgage:</strong> Outstanding mortgage balance</li>
        <li><strong>Education:</strong> Future education costs for children</li>
      </ul>
      
      <h3>Needs Analysis</h3>
      <p>A comprehensive approach that considers:</p>
      <ul>
        <li>Final expenses</li>
        <li>Outstanding debts</li>
        <li>Income replacement needs</li>
        <li>Future financial goals</li>
        <li>Existing assets and insurance</li>
      </ul>
      
      <h2>Factors Affecting Life Insurance Premiums</h2>
      
      <h3>Age and Gender</h3>
      <p>Younger applicants pay lower premiums. Women typically pay less due to longer life expectancy.</p>
      
      <h3>Health</h3>
      <p>Medical exams and health questionnaires determine risk. Better health means lower premiums.</p>
      
      <h3>Lifestyle</h3>
      <p>Smoking, dangerous hobbies, and risky occupations increase premiums.</p>
      
      <h3>Coverage Amount and Type</h3>
      <p>More coverage and permanent insurance cost more than basic term coverage.</p>
      
      <h2>When to Buy Life Insurance</h2>
      <p>Consider life insurance when you have:</p>
      <ul>
        <li>Dependents who rely on your income</li>
        <li>A mortgage or other significant debts</li>
        <li>A business partner or key employee role</li>
        <li>Estate planning needs</li>
        <li>Charitable giving goals</li>
      </ul>
      
      <h2>Common Life Insurance Mistakes</h2>
      <ul>
        <li>Buying too little coverage</li>
        <li>Choosing the wrong type of policy</li>
        <li>Not updating beneficiaries</li>
        <li>Letting term policies lapse</li>
        <li>Buying insurance as an investment first</li>
      </ul>
      
      <h2>Life Insurance Through Work</h2>
      <p>Many employers offer group life insurance, typically 1-2 times your annual salary. While convenient and inexpensive, group coverage may not be sufficient and isn't portable if you change jobs.</p>
      
      <h2>Review and Update Regularly</h2>
      <p>Life insurance needs change over time. Review your coverage when you:</p>
      <ul>
        <li>Get married or divorced</li>
        <li>Have children</li>
        <li>Buy a home</li>
        <li>Change jobs</li>
        <li>Experience significant income changes</li>
      </ul>
      
      <h2>Making the Right Choice</h2>
      <p>Choosing the right life insurance requires careful consideration of your financial situation, goals, and family needs. While term insurance works well for most people's temporary needs, permanent insurance may be appropriate for estate planning or long-term financial strategies.</p>
      
      <p>If you're unsure about what type or amount of life insurance you need, I can help you analyze your situation and find the right coverage for your family's protection.</p>
    `,
    date: '2024-12-28',
    category: 'Insurance',
    tags: ['life insurance', 'family protection', 'term life', 'whole life', 'financial planning'],
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'debt-payoff-strategies',
    title: 'Proven Debt Payoff Strategies That Actually Work',
    excerpt: 'Discover effective methods to eliminate debt faster and regain control of your financial future.',
    content: `
      <h2>The Debt Crisis</h2>
      <p>The average American household carries over $6,000 in credit card debt, with total consumer debt reaching record highs. If you're struggling with debt, you're not alone—but there are proven strategies to help you break free.</p>
      
      <h2>Popular Debt Payoff Methods</h2>
      
      <h3>The Debt Snowball Method</h3>
      <p>Pay minimum amounts on all debts, then put extra money toward the smallest balance first.</p>
      
      <h4>How it works:</h4>
      <ol>
        <li>List all debts from smallest to largest balance</li>
        <li>Pay minimums on all debts</li>
        <li>Put extra money toward the smallest debt</li>
        <li>Once paid off, roll that payment to the next smallest debt</li>
      </ol>
      
      <h4>Pros:</h4>
      <ul>
        <li>Quick psychological wins</li>
        <li>Builds momentum and motivation</li>
        <li>Simplifies your debt situation faster</li>
      </ul>
      
      <h4>Cons:</h4>
      <ul>
        <li>May pay more interest overall</li>
        <li>Takes longer to pay off high-interest debt</li>
      </ul>
      
      <h3>The Debt Avalanche Method</h3>
      <p>Pay minimum amounts on all debts, then put extra money toward the highest interest rate first.</p>
      
      <h4>How it works:</h4>
      <ol>
        <li>List all debts from highest to lowest interest rate</li>
        <li>Pay minimums on all debts</li>
        <li>Put extra money toward the highest interest rate debt</li>
        <li>Once paid off, roll that payment to the next highest rate</li>
      </ol>
      
      <h4>Pros:</h4>
      <ul>
        <li>Saves the most money in interest</li>
        <li>Mathematically optimal approach</li>
        <li>Faster overall payoff time</li>
      </ul>
      
      <h4>Cons:</h4>
      <ul>
        <li>May take longer to see progress</li>
        <li>Requires more discipline and patience</li>
      </ul>
      
      <h2>Debt Consolidation Options</h2>
      
      <h3>Balance Transfer Credit Cards</h3>
      <p>Transfer high-interest debt to a card with a promotional 0% APR period.</p>
      
      <h4>Best for:</h4>
      <ul>
        <li>Good to excellent credit scores</li>
        <li>Ability to pay off debt within the promotional period</li>
        <li>Disciplined spenders who won't rack up new debt</li>
      </ul>
      
      <h3>Personal Loans</h3>
      <p>Use a fixed-rate personal loan to pay off variable-rate credit card debt.</p>
      
      <h4>Benefits:</h4>
      <ul>
        <li>Fixed interest rate and payment</li>
        <li>Defined payoff timeline</li>
        <li>Often lower rates than credit cards</li>
      </ul>
      
      <h3>Home Equity Loans/HELOC</h3>
      <p>Use your home's equity to pay off higher-interest debt.</p>
      
      <h4>Caution:</h4>
      <ul>
        <li>Your home becomes collateral</li>
        <li>Risk of foreclosure if you can't pay</li>
        <li>Closing costs and fees apply</li>
      </ul>
      
      <h2>Creating Your Debt Payoff Plan</h2>
      
      <h3>Step 1: List All Your Debts</h3>
      <p>Create a comprehensive list including:</p>
      <ul>
        <li>Creditor name</li>
        <li>Current balance</li>
        <li>Interest rate</li>
        <li>Minimum payment</li>
        <li>Due date</li>
      </ul>
      
      <h3>Step 2: Choose Your Strategy</h3>
      <p>Select either the snowball or avalanche method based on your personality and motivation style.</p>
      
      <h3>Step 3: Find Extra Money</h3>
      <p>Look for ways to increase your debt payments:</p>
      <ul>
        <li>Cut unnecessary expenses</li>
        <li>Take on a side hustle</li>
        <li>Sell unused items</li>
        <li>Use windfalls (tax refunds, bonuses)</li>
      </ul>
      
      <h3>Step 4: Automate Payments</h3>
      <p>Set up automatic payments to ensure you never miss a due date and avoid late fees.</p>
      
      <h2>Staying Motivated</h2>
      
      <h3>Track Your Progress</h3>
      <p>Use apps, spreadsheets, or visual aids to monitor your debt reduction progress.</p>
      
      <h3>Celebrate Milestones</h3>
      <p>Acknowledge your achievements with small, budget-friendly rewards.</p>
      
      <h3>Find Support</h3>
      <p>Join online communities, work with a financial advisor, or find an accountability partner.</p>
      
      <h2>Avoiding Future Debt</h2>
      
      <h3>Build an Emergency Fund</h3>
      <p>Start with $1,000, then work toward 3-6 months of expenses to avoid borrowing for emergencies.</p>
      
      <h3>Create a Budget</h3>
      <p>Track income and expenses to ensure you're living within your means.</p>
      
      <h3>Use Credit Responsibly</h3>
      <p>If you keep credit cards, pay the full balance each month and avoid unnecessary purchases.</p>
      
      <h2>When to Seek Professional Help</h2>
      <p>Consider professional assistance if you:</p>
      <ul>
        <li>Can't make minimum payments</li>
        <li>Are considering bankruptcy</li>
        <li>Have been contacted by debt collectors</li>
        <li>Feel overwhelmed by your debt situation</li>
      </ul>
      
      <h2>Your Debt-Free Future</h2>
      <p>Becoming debt-free isn't just about the money—it's about freedom, reduced stress, and the ability to pursue your dreams without the burden of monthly payments.</p>
      
      <p>Remember, the best debt payoff strategy is the one you'll actually stick with. Whether you choose the snowball or avalanche method, the key is to start today and stay consistent.</p>
      
      <p>If you need help creating a personalized debt payoff plan or want to explore consolidation options, I'm here to guide you toward financial freedom.</p>
    `,
    date: '2024-12-20',
    category: 'Debt Management',
    tags: ['debt payoff', 'debt snowball', 'debt avalanche', 'financial freedom', 'budgeting'],
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function getAllBlogPosts(): BlogPostData[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPostData | null {
  return blogPosts.find(post => post.slug === slug) || null;
}

export function getBlogPostsByCategory(category: string): BlogPostData[] {
  return blogPosts.filter(post => post.category === category);
}

export function getCategories(): string[] {
  const categories = blogPosts.map(post => post.category);
  return [...new Set(categories)];
}