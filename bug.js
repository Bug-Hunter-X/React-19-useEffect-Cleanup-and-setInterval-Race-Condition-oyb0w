```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of the callback ref
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId); // This will only clear the interval once the component unmounts 
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```