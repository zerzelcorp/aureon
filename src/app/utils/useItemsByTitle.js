export default function useItemsByTitle(title) {
    const {
      sofas, chairs, sideTables, coffeeTables, diningChairs,
      diningTables, sideBoards, beds, nightstands
    } = useCartStore();
  
    return React.useMemo(() => {
      const map = {
        'Sofas': sofas,
        'Side Tables': sideTables,
        'Coffee Tables': coffeeTables,
        'Chairs': chairs,
        'Dining Chairs': diningChairs,
        'Dining Tables': diningTables,
        'Sideboards': sideBoards,
        'Beds': beds,
        'Nightstands': nightstands,
      };
      return map[title] || [];
    }, [
      title,
      sofas, chairs, sideTables, coffeeTables, diningChairs,
      diningTables, sideBoards, beds, nightstands
    ]);
  }