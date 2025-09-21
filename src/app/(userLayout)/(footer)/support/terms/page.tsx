import TermsContent from "@/components/modules/support/terms/TermsContent";
import TermsFooter from "@/components/modules/support/terms/TermsFooter";
import SectionHeader from "@/components/shared/SectionHeader";

const Terms = () => {
  return (
    <>
      <SectionHeader
        title="Terms and Conditions"
        subtitle="Welcome to our plant store! These terms and conditions outline the rules
        and regulations for the use of our website and services. By accessing or
        purchasing from our site, you agree to these terms."
      />
      <TermsContent />
      <TermsFooter />
    </>
  );
};

export default Terms;
