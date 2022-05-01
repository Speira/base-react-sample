import React from 'react'

const APIContext = React.createContext()

const fakeUser = {
  username: 'toto',
}
/**
 * APIProvider
 * @component
 * @context
 *
 */
function APIProvider(props) {
  const value = React.useMemo(
    () => ({
      sendRequest(inputs) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (inputs.username === 'toto') resolve(fakeUser)
            else reject()
          }, 3000)
        })
      },
    }),
    [],
  )

  return <APIContext.Provider {...props} value={value} />
}

/**
 * useAPI
 * @return context
 *
 */
export const useAPI = () => {
  const context = React.useContext(APIContext)
  if (!context) throw new Error('APIContext must be called in APIProvider')
  return context
}
export default APIProvider
