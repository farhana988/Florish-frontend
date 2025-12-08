/* eslint-disable @typescript-eslint/no-explicit-any */
const ShopBreadcrumb = ({ category, name, className }: any) => {
  return (
    <div
      className={`text-xs lg:text-sm text-muted-foreground space-x-1 ${className}`}
    >
      <span>Home /</span>
      <span>{category} /</span>
      <span className="text-foreground font-medium">{name}</span>
    </div>
  );
};

export default ShopBreadcrumb;
