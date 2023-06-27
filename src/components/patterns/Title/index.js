export default function Title({children}) {
  return (
    <>
        <h1>{children}</h1>
        <style jsx>{`
            h1 {
                color: red;
                font-family: sans-serif;
            }
        `}</style>
    </>
  )
}
