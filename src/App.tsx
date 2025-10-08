import Form from './components/registrationForm';

function App() {
  return (
    <div className="bg-zinc-100 min-h-screen w-full flex flex-col items-center gap-6 pt-8">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
        React Hook Form com TypeScript
      </h1>
      <Form />
    </div>
  );
};

export default App;
