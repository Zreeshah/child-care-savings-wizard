
/**
 * Calculate the tax-free childcare contributions and payments
 * @param annualCostPerChild - Annual childcare cost per child in GBP
 * @param numberOfChildren - Number of children (1-5)
 * @param hasDisabledChild - Whether any child has a disability
 * @returns Object containing calculation results
 */
export const calculateChildcareContributions = (
  annualCostPerChild: number,
  numberOfChildren: number,
  hasDisabledChild: boolean
): CalculationResults => {
  // Constants from the UK Tax-Free Childcare scheme
  const ANNUAL_LIMIT_STANDARD = 2000; // £2,000 per child annually
  const ANNUAL_LIMIT_DISABLED = 4000; // £4,000 for disabled children annually
  
  // Calculate the annual limit based on whether there's a disabled child
  const annualLimit = hasDisabledChild ? ANNUAL_LIMIT_DISABLED : ANNUAL_LIMIT_STANDARD;
  
  // Calculate quarterly limit (1/4 of annual)
  const quarterlyLimit = annualLimit / 4;
  
  // Calculate total government contribution (capped at the annual limit)
  const governmentContribution = Math.min(annualCostPerChild * 0.2, annualLimit);
  
  // Calculate quarterly government contribution (capped at the quarterly limit)
  const quarterlyGovernmentContribution = Math.min(governmentContribution / 4, quarterlyLimit);
  
  // Calculate amount parents need to pay to get maximum government contribution
  // For every £2 government pays, parents pay £8
  const parentContribution = governmentContribution * 4;
  
  // Total payable to provider is the sum of parent and government contributions
  const totalPayableToProvider = annualCostPerChild;
  
  // Calculate totals for all children
  const totalAnnualGovernmentContribution = governmentContribution * numberOfChildren;
  const totalQuarterlyGovernmentContribution = quarterlyGovernmentContribution * numberOfChildren;
  const totalParentContribution = parentContribution * numberOfChildren;
  const totalPayable = totalPayableToProvider * numberOfChildren;

  return {
    perChild: {
      totalPayableToProvider,
      annualGovernmentContribution: governmentContribution,
      quarterlyGovernmentContribution,
      parentContribution,
    },
    total: {
      totalPayable,
      annualGovernmentContribution: totalAnnualGovernmentContribution,
      quarterlyGovernmentContribution: totalQuarterlyGovernmentContribution,
      parentContribution: totalParentContribution,
    }
  };
};

// Type definitions
export interface CalculationResults {
  perChild: {
    totalPayableToProvider: number;
    annualGovernmentContribution: number;
    quarterlyGovernmentContribution: number;
    parentContribution: number;
  };
  total: {
    totalPayable: number;
    annualGovernmentContribution: number;
    quarterlyGovernmentContribution: number;
    parentContribution: number;
  };
}
