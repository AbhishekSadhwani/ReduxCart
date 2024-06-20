import { useEffect } from "react"

export const useCustomTitle = (title) => {
    useEffect(() => {
        const setCustomTitle = () => {
            document.title = `${title} | Shopmate`;
        }
        setCustomTitle();
    },[title]);

    return (null)
}
