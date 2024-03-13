
function Hello() {
  const x = 1;
  if (x === 1) {
    return <h1>this is 1</h1>;
  } else {
    return <h1>This is as Hello</h1>;
  }
}


export default function Home() {
  const name = "P";
  return (
    <>
      <h1 className="text-[#00FF66] font-bold text-8xl italic mt-72">
        Hello it is poon.
      </h1>
      <Hello />
      {
        name==="P"?"Jelwklekw":"wejkjolerkj"
      }
      <h1>{name}</h1>
    </>
  );
}


