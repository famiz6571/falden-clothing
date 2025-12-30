import CustomerPageLayout from "@/components/CustomerPageLayout";

export default function ShippingReturnsPage() {
  return (
    <CustomerPageLayout title="Shipping & Returns">
      <div className="space-y-6">
        <p>
          We provide fast and reliable shipping. Delivery times: 3-7 business
          days.
        </p>
        <p>
          Returns accepted within 30 days. Items must be in original condition.
        </p>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Return Instructions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              Contact support:{" "}
              <a
                href="mailto:contact@faldenclothing.com"
                className="text-blue-500 hover:underline"
              >
                contact@faldenclothing.com
              </a>
            </li>
            <li>Receive return authorization</li>
            <li>Ship items using preferred method</li>
            <li>Refund processed within 5-7 business days</li>
          </ol>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:contact@faldenclothing.com"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg transition"
        >
          Contact Support
        </a>
      </div>
    </CustomerPageLayout>
  );
}
