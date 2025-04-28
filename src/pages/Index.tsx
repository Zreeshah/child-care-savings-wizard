
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tax-Free Childcare Calculator UK
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Calculate how much you can save on childcare costs with the UK government's 
              Tax-Free Childcare scheme.
            </p>
          </div>
        </section>
        
        {/* Calculator Section */}
        <section className="py-12 -mt-8">
          <div className="container mx-auto px-4">
            <Calculator />
          </div>
        </section>
        
        {/* SEO Content Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Understanding the Tax-Free Childcare Calculator UK: Save on Childcare Costs
            </h2>
            
            <div className="prose prose-slate mx-auto">
              <p>
                The Tax-Free Childcare Calculator UK is an essential tool for parents looking to maximize 
                their savings on childcare expenses. With rising childcare costs across the United Kingdom, 
                this government initiative offers welcome financial relief for working families. Our calculator 
                helps you quickly determine exactly how much you could save through this beneficial scheme.
              </p>
              
              <h3>What is the Tax-Free Childcare Scheme?</h3>
              <p>
                The Tax-Free Childcare scheme is a UK government initiative designed to help working parents 
                with children under 12 (or under 17 for children with disabilities) pay for childcare. The 
                scheme replaces the previous Childcare Vouchers system and is more widely accessible to 
                self-employed parents and those working for smaller companies.
              </p>
              
              <p>
                Under this scheme, for every £8 you deposit into your Tax-Free Childcare account, the government 
                contributes an additional £2. This essentially gives you a 20% top-up on your childcare costs, 
                up to £2,000 per child per year (or £4,000 for disabled children). Our Tax Free Childcare Calculator 
                helps you visualize these savings quickly and accurately.
              </p>
              
              <h3>Who is Eligible for Tax-Free Childcare?</h3>
              <p>
                To benefit from the Tax-Free Childcare scheme, you must meet certain criteria:
              </p>
              
              <ul>
                <li>Both parents must be working (or the single parent in a one-parent family)</li>
                <li>Each parent must earn at least the National Minimum Wage or Living Wage for 16 hours a week on average</li>
                <li>Neither parent can earn more than £100,000 per year</li>
                <li>Your child must be under 12 years old (or under 17 if disabled)</li>
                <li>You cannot receive other forms of childcare support, such as childcare vouchers or Universal Credit</li>
              </ul>
              
              <p>
                Using our Tax Free Childcare Calculator UK will help you understand your potential benefits if you 
                meet these eligibility requirements.
              </p>
              
              <h3>How Does the Childcare Calculator UK Work?</h3>
              <p>
                Our Tax-Free Childcare Calculator makes it simple to estimate your government contributions. 
                Here's how to use it:
              </p>
              
              <ol>
                <li>Enter your annual childcare costs per child</li>
                <li>Select how many children you have (between 1 and 5)</li>
                <li>Indicate if any of your children have a disability (which qualifies for higher contributions)</li>
                <li>Click "Calculate" to see your results</li>
              </ol>
              
              <p>
                The calculator will instantly show you:
              </p>
              
              <ul>
                <li>Total payable to your childcare provider</li>
                <li>Government contribution for the current 3 months</li>
                <li>Amount you need to pay into your Tax-Free Childcare account</li>
                <li>Annual government contribution</li>
              </ul>
              
              <h3>Benefits of Using the Tax Free Childcare Calculator</h3>
              <p>
                The Tax-Free Childcare scheme can be used for various approved childcare providers, including:
              </p>
              
              <ul>
                <li>Registered nurseries and preschools</li>
                <li>Registered childminders</li>
                <li>After-school clubs and playschemes</li>
                <li>Home care workers working for a registered agency</li>
                <li>Holiday camps and activity-based care providers</li>
              </ul>
              
              <p>
                By using our Childcare Calculator UK, you can better plan your finances and ensure you're 
                maximizing the government support available to you for these services.
              </p>
              
              <h3>Maximizing Your Government Contributions</h3>
              <p>
                To make the most of the Tax-Free Childcare scheme, consider these tips:
              </p>
              
              <ul>
                <li>
                  Make regular deposits to your Tax-Free Childcare account to ensure you receive the maximum 
                  government top-up
                </li>
                <li>
                  Plan ahead for periods of higher childcare costs, such as school holidays, by increasing 
                  your contributions beforehand
                </li>
                <li>
                  Verify that your childcare provider is registered with the scheme so you can use your 
                  Tax-Free Childcare funds to pay them
                </li>
                <li>
                  Recalculate your benefits using our Tax-Free Childcare Calculator UK if your childcare 
                  costs change throughout the year
                </li>
              </ul>
              
              <h3>Tax-Free Childcare vs. Other Schemes</h3>
              <p>
                It's important to understand how Tax-Free Childcare compares to other support options:
              </p>
              
              <ul>
                <li>
                  <strong>Universal Credit:</strong> You cannot claim both Tax-Free Childcare and the 
                  childcare element of Universal Credit simultaneously. Use our Childcare Calculator 
                  to compare which might be better for your circumstances.
                </li>
                <li>
                  <strong>15/30 Hours Free Childcare:</strong> These schemes can be used alongside 
                  Tax-Free Childcare. Our calculator can help you understand your costs after applying 
                  these free hours.
                </li>
                <li>
                  <strong>Childcare Vouchers:</strong> This scheme is closed to new applicants but those 
                  already enrolled can continue using it. Our Tax Free Childcare Calculator UK can help 
                  you determine if switching to Tax-Free Childcare would be beneficial.
                </li>
              </ul>
              
              <h3>Why Use Our Tax Free Childcare Calculator?</h3>
              <p>
                Understanding the financial implications of childcare costs can be complex. Our Childcare 
                Calculator UK simplifies this process by:
              </p>
              
              <ul>
                <li>Providing instant calculations based on the latest scheme rules</li>
                <li>Offering clear breakdowns of government contributions and your payments</li>
                <li>Showing both quarterly and annual figures to help with budgeting</li>
                <li>Accounting for higher contribution limits for children with disabilities</li>
                <li>Calculating totals for families with multiple children</li>
              </ul>
              
              <h3>Getting Started with Tax-Free Childcare</h3>
              <p>
                After using our Tax-Free Childcare Calculator UK to understand your potential benefits, 
                you can apply for the scheme through the government's Childcare Choices website. You'll 
                need your National Insurance number and details about your employment or self-employment 
                status.
              </p>
              
              <p>
                Once approved, you'll set up an online account where you can make deposits to receive 
                the government top-up. These funds can then be used to pay your registered childcare 
                providers directly from your Tax-Free Childcare account.
              </p>
              
              <h3>Try Our Tax Free Childcare Calculator UK Now!</h3>
              <p>
                Don't leave money on the table when it comes to your childcare costs. Use our 
                Tax Free Childcare Calculator UK today to see exactly how much you could save 
                through this valuable government scheme. Every bit of financial help matters 
                when raising children, and our calculator makes it easy to understand and maximize 
                your benefits.
              </p>
              
              <p>
                Remember, the results from our Childcare Calculator are estimates based on the 
                current scheme rules. For the most accurate information about your specific 
                circumstances and eligibility, always refer to the official government guidance.
              </p>
              
              <div className="bg-primary/10 p-6 rounded-lg mt-8 text-center">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Try our Tax Free Childcare Calculator UK now to see your savings!
                </h4>
                <p>
                  Scroll back up to use our calculator and find out exactly how much you could 
                  save on your childcare costs with the UK government's support.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
