import { useEffect } from "react"

const useTitle = title => {
    // useEffect use to external connection
    useEffect(() => {
        document.title = `${title} - Foodie`;
    }, [title])
};

export default useTitle;