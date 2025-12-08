import CartCard from "@/components/cards/CartCard";
import SectionHeader from "@/components/shared/SectionHeader";
import CartTable from "@/components/tables/CartTable";

const CartPage = () => {
  return (
    <>
      <SectionHeader
        title="Shopping Cart"
        subtitle=" Review your items before proceeding to checkout."
      />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* cart table */}
        <CartTable />

        {/* Summary Card */}
        <CartCard />
      </section>
    </>
  );
};

export default CartPage;
