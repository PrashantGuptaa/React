export const getSampleData = (name, type, screen) => {
    switch (name) {
      case "samsung":
        return {
          name,
          description: "Samsung Company",
          screen,
          warranty: "10 years",
          type,
        };
      case "sony":
        return {
          name,
          description: "Sony Company",
          screen,
          warranty: "5 years",
          type,
        };
      default:
        return {
          name,
          description: "A Generic Brand",
          screen,
          warranty: "1 year",
          type,
        };
    }
  };