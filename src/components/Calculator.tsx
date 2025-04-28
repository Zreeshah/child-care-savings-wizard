
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { calculateChildcareContributions, CalculationResults } from "@/utils/calculatorUtils";
import { Calculator as CalculatorIcon, RefreshCw } from "lucide-react";
import ResultsDisplay from "./ResultsDisplay";

const Calculator = () => {
  const [annualCostPerChild, setAnnualCostPerChild] = useState<number | "">("");
  const [numberOfChildren, setNumberOfChildren] = useState<number>(1);
  const [hasDisabledChild, setHasDisabledChild] = useState<boolean>(false);
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleCalculate = () => {
    // Validate inputs
    if (!annualCostPerChild) {
      setError("Please enter the annual childcare cost");
      return;
    }

    if (annualCostPerChild <= 0) {
      setError("Annual childcare cost must be greater than 0");
      return;
    }

    setError("");
    const calculationResults = calculateChildcareContributions(
      Number(annualCostPerChild),
      numberOfChildren,
      hasDisabledChild
    );
    setResults(calculationResults);
    setShowResults(true);
  };

  const handleReset = () => {
    setAnnualCostPerChild("");
    setNumberOfChildren(1);
    setHasDisabledChild(false);
    setResults(null);
    setShowResults(false);
    setError("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-enter">
        <div className="flex items-center justify-center mb-6">
          <CalculatorIcon className="h-8 w-8 text-primary mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Tax-Free Childcare Calculator</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="annualCost" className="text-gray-700">
                Annual Childcare Cost Per Child (£)
              </Label>
              <Input
                id="annualCost"
                type="number"
                placeholder="e.g. 4000"
                value={annualCostPerChild}
                onChange={(e) => setAnnualCostPerChild(e.target.value ? Number(e.target.value) : "")}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="children" className="text-gray-700">
                Number of Children
              </Label>
              <Select 
                onValueChange={(value) => setNumberOfChildren(Number(value))} 
                defaultValue="1"
              >
                <SelectTrigger id="children" className="mt-1">
                  <SelectValue placeholder="Select number of children" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="disabled" 
                checked={hasDisabledChild} 
                onCheckedChange={(checked) => setHasDisabledChild(checked === true)}
              />
              <div className="grid gap-1.5 leading-none">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="disabled" className="text-gray-700">
                    Child with Disability
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="text-sm text-gray-500 cursor-help">ℹ️</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          If your child is disabled, you can receive up to £4,000/year in 
                          government contributions instead of the standard £2,000/year limit.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-sm text-muted-foreground">
                  Eligible for higher contribution limits
                </p>
              </div>
            </div>

            {error && (
              <div className="text-destructive text-sm mt-2">{error}</div>
            )}

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-4 md:justify-end">
              <Button onClick={handleReset} variant="outline" className="btn-hover" type="button">
                <RefreshCw className="mr-2 h-4 w-4" /> Reset
              </Button>
              <Button onClick={handleCalculate} className="bg-primary hover:bg-primary/90 btn-hover" type="button">
                <CalculatorIcon className="mr-2 h-4 w-4" /> Calculate
              </Button>
            </div>
          </div>
        </div>
      </div>

      {showResults && results && (
        <ResultsDisplay results={results} annualCostPerChild={Number(annualCostPerChild)} numberOfChildren={numberOfChildren} />
      )}

      <div className="mt-4 text-center text-sm text-gray-500">
        <p>
          This calculator provides estimates based on the UK Tax-Free Childcare scheme.
          Results are for guidance only and not financial advice.
        </p>
      </div>
    </div>
  );
};

export default Calculator;
