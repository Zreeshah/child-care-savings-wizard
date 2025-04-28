
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">About the Tax-Free Childcare Calculator</h1>
        
        <div className="max-w-3xl mx-auto prose prose-slate">
          <p>
            Our Tax-Free Childcare Calculator helps UK parents understand and estimate their potential savings 
            through the government's Tax-Free Childcare scheme. This tool simplifies the process of calculating 
            how much the government will contribute towards your childcare costs.
          </p>
          
          <h2>How the Calculator Works</h2>
          <p>
            The calculator uses the official UK Tax-Free Childcare scheme rules to determine your potential savings:
          </p>
          <ul>
            <li>For every £8 you pay in, the government will add £2</li>
            <li>You can receive up to £2,000 per child per year (£500 every 3 months)</li>
            <li>If your child is disabled, you can receive up to £4,000 per year (£1,000 every 3 months)</li>
          </ul>
          
          <h2>About the Tax-Free Childcare Scheme</h2>
          <p>
            The Tax-Free Childcare scheme is a UK government initiative designed to help working parents with childcare costs. 
            The scheme applies to children under 12 years old, or under 17 years old if they have a disability.
          </p>
          <p>
            To be eligible, parents must:
          </p>
          <ul>
            <li>Be working (including self-employment)</li>
            <li>Each earn at least the National Minimum Wage or Living Wage for 16 hours a week on average</li>
            <li>Each earn less than £100,000 per year</li>
            <li>Not be receiving Tax Credits, Universal Credit or childcare vouchers</li>
          </ul>
          
          <p>
            For the most accurate and up-to-date information about your eligibility and the scheme details, 
            please visit the <a href="https://www.gov.uk/tax-free-childcare" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">official GOV.UK page</a>.
          </p>
          
          <h2>Using Our Calculator</h2>
          <p>
            Our calculator provides estimates based on current scheme rules. The results are for guidance 
            only and do not constitute financial advice. We recommend verifying your specific circumstances 
            with HMRC or a financial advisor.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
