export interface StepProps {
  title: string;
  steps: string[];
}
export const returnSteps = [
  "Log in to your GreenLeaf account and go to 'My Orders'.",
  "Select the order containing the plant you want to return.",
  "Click on 'Request a Return' next to the relevant item.",
  "Choose your preferred refund method (store credit or original payment).",
  "Complete the Return Form with your reason for return and any photos if needed.",
  "Ensure the plant is securely packed in its original pot and packaging.",
  "Drop off the plant at a designated return point or schedule a pickup.",
];
interface ReturnModality {
  deliveryMode: string;
  returnModality: string;
}

export interface ReturnModalityTableProps {
  data: ReturnModality[];
}
export const returnConditions = [
  "The plant must be returned within 7 days of delivery.",
  "The plant must be in healthy condition — not dried, damaged, or infested.",
  "The plant should be returned in its original pot and packaging.",
  "All included accessories (e.g., care instructions, plant tags) must be intact.",
  "A return may be declined if the plant appears mishandled or repotted.",
];

export interface ReturnConditionsProps {
  conditions: string[];
}

export const modalityData = [
  {
    deliveryMode: "Home Delivery",
    returnModality: "Pickup or Drop-off Available",
  },
  { deliveryMode: "Nursery Pickup", returnModality: "Drop-off Only" },
  { deliveryMode: "Same-Day Local Delivery", returnModality: "Drop-off Only" },
  {
    deliveryMode: "Third-Party Courier",
    returnModality: "Drop-off at Courier Partner Location",
  },
  {
    deliveryMode: "Marketplace Order (via Partner Seller)",
    returnModality: "Seller-Managed Return Process",
  },
  {
    deliveryMode: "Bulk/Wholesale Order",
    returnModality: "Pickup Scheduled Upon Approval",
  },
];
