import OutlineBtn from "@/components/buttons/OutlineBtn";

const TermsFooter = () => {
  return (
    <div className="text-center mt-12">
      <p className="text-lg text-gray-500 mb-6">
        If you have any questions or concerns about these Terms and Conditions,
        feel free to contact us at{" "}
        <a
          href="mailto:support@florish.com"
          className="text-dGreen hover:underline hover:underline-offset-4"
        >
          support@florish.com
        </a>
        .
      </p>

      <OutlineBtn text="Contact Support" href="/contact" className="bg-black" />
    </div>
  );
};

export default TermsFooter;
