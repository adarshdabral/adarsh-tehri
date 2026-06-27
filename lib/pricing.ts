export function calculateDynamicPrice(
  basePrice: number,
  checkInDate: Date,
  numberOfNights: number
) {
  let totalPrice = 0;

  const pricingBreakdown = [];

  for (let i = 0; i < numberOfNights; i++) {
    const currentDate = new Date(checkInDate);

    currentDate.setDate(checkInDate.getDate() + i);

    let nightlyPrice = basePrice;

    // -------------------------
    // Weekend Pricing
    // Friday & Saturday
    // -------------------------

    const day = currentDate.getDay();

    if (day === 5 || day === 6) {
      nightlyPrice *= 1.2;
    }

    // -------------------------
    // Peak Season Pricing
    // April-June
    // October-December
    // -------------------------

    const month = currentDate.getMonth() + 1;

    if (
      (month >= 4 && month <= 6) ||
      (month >= 10 && month <= 12)
    ) {
      nightlyPrice *= 1.3;
    }

    nightlyPrice = Math.round(nightlyPrice);

    totalPrice += nightlyPrice;

    pricingBreakdown.push({
      date: currentDate.toISOString().split("T")[0],
      nightlyPrice,
    });
  }

  return {
    totalPrice,
    pricingBreakdown,
  };
}