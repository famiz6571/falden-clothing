"use client";

import CustomerPageLayout from "@/components/CustomerPageLayout";
import {
  Truck,
  Package,
  Mail,
  RefreshCw,
  CreditCard,
  ShieldCheck,
  Globe,
} from "lucide-react";

export default function ShippingReturnsPage() {
  return (
    <CustomerPageLayout title="Shipping & Returns">
      <div className="space-y-16">
        {/* ================= SHIPPING FLOW ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">
            Shipping Process
          </h2>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <FlowCard
              icon={<Package />}
              title="Order Placed"
              desc="Once your order is confirmed, we start processing it immediately."
            />

            {/* Step 2 */}
            <FlowCard
              icon={<ShieldCheck />}
              title="Quality Check"
              desc="Each product undergoes strict quality checks before packing."
            />

            {/* Step 3 */}
            <FlowCard
              icon={<Truck />}
              title="Shipped"
              desc="Your order is shipped with tracking details shared via email."
            />

            {/* Step 4 */}
            <FlowCard
              icon={<Globe />}
              title="Delivered"
              desc="Delivered safely to your doorstep within 3–7 business days."
            />
          </div>
        </section>

        {/* ================= SHIPPING PRICES ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">
            Shipping Charges
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PriceCard
              title="Standard Shipping"
              price="FREE"
              desc="On orders above $99"
            />
            <PriceCard
              title="Express Shipping"
              price="$14.99"
              desc="Delivery in 1–3 business days"
            />
            <PriceCard
              title="International"
              price="$99+"
              desc="7–14 business days (tracking included)"
            />
          </div>
        </section>

        {/* ================= RETURNS FLOW ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">
            Return & Refund Flow
          </h2>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <FlowCard
              icon={<Mail />}
              title="Request Return"
              desc="Email us within 30 days of delivery."
            />

            <FlowCard
              icon={<RefreshCw />}
              title="Pickup / Ship"
              desc="We arrange pickup or guide you to ship the item."
            />

            <FlowCard
              icon={<Package />}
              title="Item Inspection"
              desc="Our team inspects the returned product."
            />

            <FlowCard
              icon={<CreditCard />}
              title="Refund Issued"
              desc="Refund processed within 5–7 business days."
            />
          </div>
        </section>

        {/* ================= TRUST + CTA ================= */}
        <section className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <TrustItem
              icon={<ShieldCheck />}
              title="Secure Payments"
              desc="All payments are encrypted & protected."
            />
            <TrustItem
              icon={<Truck />}
              title="Reliable Delivery"
              desc="Trusted logistics partners worldwide."
            />
            <TrustItem
              icon={<RefreshCw />}
              title="Easy Returns"
              desc="Hassle-free 30-day return policy."
            />
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="mailto:contact@faldenclothing.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              <Mail />
              Contact Support
            </a>
          </div>
        </section>
      </div>
    </CustomerPageLayout>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function FlowCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition">
      <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-blue-600/20 text-blue-500">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
}

function PriceCard({
  title,
  price,
  desc,
}: {
  title: string;
  price: string;
  desc: string;
}) {
  return (
    <div className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-xl p-6 text-center shadow hover:shadow-xl transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-3xl font-bold text-blue-500 mb-2">{price}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
}

function TrustItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/20 text-blue-500">
        {icon}
      </div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
}
