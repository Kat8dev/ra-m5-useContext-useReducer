import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [hasData, setHasData] = useState(true)

  useEffect(() => {
    setLoading(true)
    setError(false)
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d)
        setLoading(false)
        if (data && data.length === 0) {
          setHasData(false)
        }
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { data, loading, error, isError: !!error, isSuccess: !!data, hasData }
}

export default useFetch
