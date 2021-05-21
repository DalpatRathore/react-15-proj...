import React, {
  useState,
  useReducer,
  useContext,
  useEffect,
  useCallback,
} from "react";
import sublinks from "./projects-files/stripe-submenus/data";
// import cartItems from "../cart/data";
import reducer from "./projects-files/cart/reducer";
const AppContext = React.createContext();
const url = "https://course-api.com/react-useReducer-cart-project";
const urlCocktail = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const initialState = {
  loading: false,
  // cart: cartItems,
  cart: [],
  total: 0,
  amount: 0,
};
const AppProvider = ({ children }) => {
  // cocktails
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${urlCocktail}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map(item => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log("error :>> ", error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchDrinks();
    return () => {};
  }, [searchTerm, fetchDrinks]);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "GET_TOTALS",
    });
  }, [state.cart]);

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
  const remove = id => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = id => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = id => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const toggleAmount = (id, type) => {
    dispatch({
      type: "TOGGLE_AMOUNT",
      payload: { id, type },
    });
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({
      type: "DISPLAY_ITEMS",
      payload: cart,
    });
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find(link => link.page === text);
    setPage(page);
    setIsSubmenuOpen(true);
    setLocation(coordinates);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isModalOpen,
        openModal,
        closeModal,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        page,
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,

        loading,
        cocktails,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
