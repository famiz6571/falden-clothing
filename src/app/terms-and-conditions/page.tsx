import CustomerPageLayout from "@/components/CustomerPageLayout";

export default function TermsPage() {
  return (
    <CustomerPageLayout title="Terms & Conditions">
      <div className="space-y-4">
        <p>
          By using FALDEN Clothing website, you agree to our terms and
          conditions. Please read carefully before making a purchase.
        </p>
        <p>
          All prices are listed in AED and are subject to change without notice.
        </p>
        <p>
          Products are shipped according to availability and our shipping
          policies.
        </p>
        <p>Returns are accepted within 30 days under our return policy.</p>
        <p>
          We reserve the right to refuse service or cancel orders at our
          discretion.
        </p>
      </div>
    </CustomerPageLayout>
  );
}
