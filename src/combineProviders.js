const combineProvider = (providers) => providers.reduce(
  (Combined,Provider) => ({children}) => (
    <Combined>
      <Provider>{children}</Provider>
    </Combined>
  )
)
export default combineProvider