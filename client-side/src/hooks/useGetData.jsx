import { useEffect, useState } from "react";

                const useGetData = (url) => {
                    const [getdata, setGetdata] = useState([]);
                    const [loading, setLoading] = useState(true);
                    useEffect(() => {
                        fetch(url)
                            .then(res => res.json())
                            .then(data => {
                                setGetdata(data);
                                setLoading(false);
                            });
                    }, [])
                    return [getdata, loading]
                }

                export default useGetData;