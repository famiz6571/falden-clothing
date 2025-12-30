import CustomerPageLayout from "@/components/CustomerPageLayout";

export default function PrivacyPolicyPage() {
  return (
    <CustomerPageLayout title="Privacy Policy">
      <div className="space-y-4">
        <p>
          At FALDEN Clothing, your privacy is our priority. We collect minimal
          personal information to improve your shopping experience.
        </p>
        <p>
          We never sell or share your personal information with third parties
          without consent.
        </p>
        <p>All payments are processed securely via trusted payment gateways.</p>
        <p>
          You can request to access, update, or delete your data by contacting
          us at{" "}
          <a
            href="mailto:contact@faldenclothing.com"
            className="text-blue-500 hover:underline"
          >
            contact@faldenclothing.com
          </a>
          .
        </p>
      </div>
    </CustomerPageLayout>
  );
}
