const useRecipePrice = ({ recipe, count }) => {

  const sumTotal = () => {
    const prices = recipe?.detail?.map((item) => {
      const price = parseFloat(item.price);
      const discount = parseFloat(item.discount);
      if (discount === 0) {
        return price;
      } else if (discount < 1) {
        return price * discount;
      } else if (discount > 1 && price > discount) {
        return price - discount;
      }
      return 0;
    }) || [];

    const total = prices?.reduce((a, b) => a + b, 0);
    if (!count) return total;
    return total * count || 0;
  };

  const total = sumTotal();

  return { total };
}

export default useRecipePrice;