import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
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
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Understanding the Tax-Free Childcare Calculator UK: Save on Childcare Costs
          </h2>
          
          <div className="prose prose-slate mx-auto space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <p className="text-lg leading-relaxed text-gray-700">
                The Tax-Free Childcare Calculator UK is an essential tool for parents looking to maximize 
                their savings on childcare expenses. With rising childcare costs across the United Kingdom, 
                this government initiative offers welcome financial relief for working families.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur rounded-xl p-6 border border-primary/10">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                What is the Tax-Free Childcare Scheme?
              </h2>
              <p className="text-gray-700">
                The Tax-Free Childcare scheme is a UK government initiative designed to help working parents 
                with children under 12 (or under 17 for children with disabilities) pay for childcare.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Who is Eligible?
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Both parents must be working
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Each parent must earn at least National Minimum Wage
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Neither parent can earn over £100,000
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/5 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  How It Works
                </h2>
                <p className="text-gray-700">
                  For every £8 you deposit into your Tax-Free Childcare account, 
                  the government adds £2, effectively giving you a 20% top-up on 
                  your childcare costs.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Benefits of Using Our Calculator
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Instant calculations
                  </p>
                  <p className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Clear breakdown of costs
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Government contribution details
                  </p>
                  <p className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Multiple children calculations
                  </p>
                </div>
              </div>
            </div>

            
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-primary mb-4">How Does the Childcare Calculator UK Work?</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Our Tax-Free Childcare Calculator makes it simple to estimate your government contributions. 
                Here's how to use it:
              </p>
              <ol className="list-decimal pl-5 mt-4 space-y-2">
                <li>Enter your annual childcare costs per child</li>
                <li>Select how many children you have (between 1 and 5)</li>
                <li>Indicate if any of your children have a disability (which qualifies for higher contributions)</li>
                <li>Click "Calculate" to see your results</li>
              </ol>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                The calculator will instantly show you:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Total payable to your childcare provider</li>
                <li>Government contribution for the current 3 months</li>
                <li>Amount you need to pay into your Tax-Free Childcare account</li>
                <li>Annual government contribution</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-primary mb-4">Benefits of Using the Tax Free Childcare Calculator</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                The Tax-Free Childcare scheme can be used for various approved childcare providers, including:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Registered nurseries and preschools</li>
                <li>Registered childminders</li>
                <li>After-school clubs and playschemes</li>
                <li>Home care workers working for a registered agency</li>
                <li>Holiday camps and activity-based care providers</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                By using our Childcare Calculator UK, you can better plan your finances and ensure you're 
                maximizing the government support available to you for these services.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-primary mb-4">Maximizing Your Government Contributions</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                To make the most of the Tax-Free Childcare scheme, consider these tips:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
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
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-primary mb-4">Tax-Free Childcare vs. Other Schemes</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                It's important to understand how Tax-Free Childcare compares to other support options:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
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
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-primary mb-4">Why Use Our Tax Free Childcare Calculator?</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Understanding the financial implications of childcare costs can be complex. Our Childcare 
                Calculator UK simplifies this process by:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Providing instant calculations based on the latest scheme rules</li>
                <li>Offering clear breakdowns of government contributions and your payments</li>
                <li>Showing both quarterly and annual figures to help with budgeting</li>
                <li>Accounting for higher contribution limits for children with disabilities</li>
                <li>Calculating totals for families with multiple children</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-primary mb-4">Getting Started with Tax-Free Childcare</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                After using our Tax-Free Childcare Calculator UK to understand your potential benefits, 
                you can apply for the scheme through the government's Childcare Choices website. You'll 
                need your National Insurance number and details about your employment or self-employment 
                status.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                Once approved, you'll set up an online account where you can make deposits to receive 
                the government top-up. These funds can then be used to pay your registered childcare 
                providers directly from your Tax-Free Childcare account.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-primary mb-4">Try Our Tax Free Childcare Calculator UK Now!</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Don't leave money on the table when it comes to your childcare costs. Use our 
                Tax Free Childcare Calculator UK today to see exactly how much you could save 
                through this valuable government scheme. Every bit of financial help matters 
                when raising children, and our calculator makes it easy to understand and maximize 
                your benefits.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
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

            <div className="bg-primary text-white p-8 rounded-xl text-center mt-12">
              <h2 className="text-2xl font-bold mb-4">
                Try Our Tax Free Childcare Calculator UK Now!
              </h2>
              <p className="text-lg text-white/90">
                Don't leave money on the table. Calculate your potential savings 
                with our easy-to-use calculator today.
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="mt-6 bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
              >
                Calculate Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
