import Card from './components/Card';

function App() {
  return (
    <>
      <div className='h-screen bg-orange-500 p-8 flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold'>Hello</h1>
        <p className='mt-4'>Que merda é essa?</p>
        <Card></Card>
      </div>
    </>
  );
}

export default App;
