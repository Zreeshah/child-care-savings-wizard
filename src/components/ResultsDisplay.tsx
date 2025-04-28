
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
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [results]);

  const ResultField = ({ label, value }: { label: string; value: number }) => (
    <div className="mb-6">
      <h3 className="text-xl text-[#007BFF] font-semibold mb-2">{label}</h3>
      <div className="border-2 border-yellow-300 rounded-lg p-4 bg-white">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-medium">£</span>
          <span className="text-2xl font-medium">{value.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`space-y-6 ${visible ? 'animate-enter' : 'opacity-0'}`}>
      <div className="space-y-6">
        <ResultField 
          label="Total Payable to Provider (Per Child)" 
          value={results.perChild.totalPayableToProvider} 
        />
        <ResultField 
          label="Government Contribution (Current 3 Months)" 
          value={results.perChild.quarterlyGovernmentContribution} 
        />
        <ResultField 
          label="Amount to Pay into Account" 
          value={results.perChild.parentContribution} 
        />
        <ResultField 
          label="Government Contribution" 
          value={results.perChild.annualGovernmentContribution} 
        />
      </div>

      {numberOfChildren > 1 && (
        <Card className="border-t-4 border-t-secondary mt-8">
          <CardHeader className="bg-gray-50 rounded-t-lg">
            <CardTitle className="text-lg text-gray-800">
              Total for {numberOfChildren} Children
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Total Annual Cost</p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatCurrency(results.total.totalPayable)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Total Government Contribution</p>
              <p className="text-2xl font-semibold text-primary">
                {formatCurrency(results.total.annualGovernmentContribution)}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ResultsDisplay;
