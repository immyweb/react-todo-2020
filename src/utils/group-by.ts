const groupBy = <T>(items: T[], prop: string) => {
  return items.reduce((grouped, item: T) => {
    const propertyValue = item[prop];

    if (!grouped[propertyValue]) {
      grouped[propertyValue] = [];
    }
    grouped[propertyValue].push(item);
    return grouped;
  }, {});
};

export default groupBy;
