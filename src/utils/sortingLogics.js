export const handleSorting = (sortBy, selectedCategory) => {
  switch (sortBy) {
    case "price_low_high":
      return selectedCategory.sort(
        (a, b) => parseInt(a.price) - parseInt(b.price)
      );
    case "price_high_low":
      return selectedCategory.sort(
        (a, b) => parseInt(b.price) - parseInt(a.price)
      );
    case "rating_low_high":
      return selectedCategory.sort(
        (a, b) => parseInt(a.rating) - parseInt(b.rating)
      );
    case "rating_high_low":
      return selectedCategory.sort(
        (a, b) => parseInt(b.rating) - parseInt(a.rating)
      );
    case "a_z":
      return selectedCategory.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return selectedCategory;
  }
};
