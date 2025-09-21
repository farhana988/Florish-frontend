import ReturnConditions from "@/components/modules/support/returns-refunds/ReturnConditions";
import ReturnModalityTable from "@/components/modules/support/returns-refunds/ReturnModalityTable";
import ReturnStep from "@/components/modules/support/returns-refunds/ReturnStep";
import SectionHeader from "@/components/shared/SectionHeader";
import { modalityData, returnConditions, returnSteps } from "@/data/returnData";

const Returns = () => {
  return (
    <>
      <SectionHeader title=" Returns & Refunds" />
      <ReturnStep title="How to Return a Product" steps={returnSteps} />

      <ReturnModalityTable data={modalityData} />

      <ReturnConditions conditions={returnConditions} />
    </>
  );
};

export default Returns;
