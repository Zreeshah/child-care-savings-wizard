
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalculationResults } from "@/utils/calculatorUtils";
import { useEffect, useState } from "react";

interface ResultsDisplayProps {
  results: CalculationResults;
  annualCostPerChild: number;
  numberOfChildren: number;
}

// Format currency nicely
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value);
};

const ResultsDisplay = ({ results, annualCostPerChild, numberOfChildren }: ResultsDisplayProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay before showing the results for animation
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [results]);

  return (
    <div className={`space-y-6 ${visible ? 'animate-enter' : 'opacity-0'}`}>
      <h3 className="text-xl font-semibold text-center text-gray-800">Your Results</h3>
      
      {/* Per Child Results */}
      <Card className="border-t-4 border-t-primary">
        <CardHeader className="bg-gray-50 rounded-t-lg">
          <CardTitle className="text-lg text-gray-800">
            Per Child Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Total Payable to Provider (Annual)</p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatCurrency(results.perChild.totalPayableToProvider)}
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Government Contribution (Current 3 Months)</p>
              <p className="text-2xl font-semibold text-secondary">
                {formatCurrency(results.perChild.quarterlyGovernmentContribution)}
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Amount to Pay into Account (Annual)</p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatCurrency(results.perChild.parentContribution)}
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Government Contribution (Annual)</p>
              <p className="text-2xl font-semibold text-primary">
                {formatCurrency(results.perChild.annualGovernmentContribution)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Total Results for Multiple Children */}
      {numberOfChildren > 1 && (
        <Card className="border-t-4 border-t-secondary">
          <CardHeader className="bg-gray-50 rounded-t-lg">
            <CardTitle className="text-lg text-gray-800">
              Total for {numberOfChildren} Children
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Total Payable to Provider (Annual)</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {formatCurrency(results.total.totalPayable)}
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Government Contribution (Current 3 Months)</p>
                <p className="text-2xl font-semibold text-secondary">
                  {formatCurrency(results.total.quarterlyGovernmentContribution)}
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Amount to Pay into Account (Annual)</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {formatCurrency(results.total.parentContribution)}
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Government Contribution (Annual)</p>
                <p className="text-2xl font-semibold text-primary">
                  {formatCurrency(results.total.annualGovernmentContribution)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600">
        <p className="font-medium mb-1">How does this work?</p>
        <p>
          For every £8 you pay into your Tax-Free Childcare account, the government adds £2, up to 
          {results.perChild.annualGovernmentContribution === 2000 
            ? " £2,000" 
            : " £4,000"} 
          per child annually.
        </p>
      </div>
    </div>
  );
};

export default ResultsDisplay;
