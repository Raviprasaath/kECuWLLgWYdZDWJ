import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

const projectId = "vflsmb93q9oc";

const baseUrl = "https://academics.newtonschool.co";
const LIMIT = 1800;
const fullProduct = `api/v1/ecommerce/clothes/products?limit=${LIMIT}`;


const METHODS = 'GET';


export function useDataContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const commonHeaders = {
    'projectId': projectId
  };

  const fetchData = async (baseUrlLink, extension, method) => {
    try {
      const response = await fetch( `${baseUrlLink}/${extension}`, {
          method: `${method}`,
          headers: {
            ...commonHeaders
          },
          redirect: 'follow'
        }
      );
      if (response.ok) {
        const jsonData = await response.json();
        
        setData(jsonData);
        setLoading(false);
        
      } else {
        console.error("Failed to fetch data.");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData(baseUrl, fullProduct, METHODS);
  }, []);

  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  
  
  const [refresher, setRefresher] = useState(false);

  const refreshNavbar = () => {
    setRefresher((prev) => !prev);
  }


  const [filterTypeSelection, setFilterTypeSelection] = useState();

  const handlerTypeOfFilterChoose = (value) => {
    setFilterTypeSelection(value)
  }


  return (
    <DataContext.Provider value={{ data, loading, isDialogOpen, openDialog, closeDialog, refresher, refreshNavbar
      , handlerTypeOfFilterChoose, filterTypeSelection }}>
      {children}
    </DataContext.Provider>
  );
}




