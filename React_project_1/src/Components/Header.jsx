export const Header = () => {
   let customCode = "code"; //to change dinamically

   {/* 2__ JSX with conditional rendering */}
   const isLoggedIn = false;
   const greeting = isLoggedIn ? <p> Welcome back </p> : <p> Please login </p>;

  {/* 3__ Jsx with Lists */}
  const items = ["item1", "item2", "item3"];

  return (
    <>
    <h1 className="Heading">Ashwin</h1>
    <p>Welcome to React</p>
    
    {/* Javascript expression in JSX */}
    <p className={customCode} style={{fontSize: '25px'}}>20+45= {20+45}</p>

    {/* 2__ JSX with conditional rendering */}
    {greeting}

    {/*3__ Jsx with Lists */}
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
    </ul>

    </>
  )
}
