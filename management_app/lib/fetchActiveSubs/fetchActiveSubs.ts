type Subscriptions = {
  activeSubs: number;
};
export default async function fetchActiveSubsAmount() {
  let amountSubs = await fetch("http://api.example.com/account");
  let amount: Subscriptions = await amountSubs.json();
  return amount;
}
