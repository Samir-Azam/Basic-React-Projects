import { useEffect, useState } from "react"
import Freecurrencyapi from "@everapi/freecurrencyapi-js";
function useCurrency(baseCurrency, targetCurrency){
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        if (!baseCurrency || !targetCurrency) return;

        const freecurrencyapi = new Freecurrencyapi(
            import.meta.env.VITE_APP_API_KEY
        );
        setLoading(true)
        freecurrencyapi
          .latest({
            base_currency: baseCurrency,
            currencies: targetCurrency,
          })
          .then((response) => {
            console.log(response);
            setData(response.data)
            setLoading(false);
          })
          .catch((err)=>{
            console.log(err.message)
            setError(err.message)
            setLoading(false)
          })

    },[baseCurrency, targetCurrency])

    return {data, loading, error}
}

export default useCurrency