import Cart from "@/components/modules/cart/Cart";
import SectionHeader from "@/components/shared/SectionHeader";

const CartPage = () => {
  return (
    <>
      <SectionHeader
        title="Shopping Cart"
        subtitle=" Review your items before proceeding to checkout."
      />
      <Cart />
    </>
  );
};

export default CartPage;
