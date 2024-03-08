import "./App.css";

const Header = () => {
  return <h1>Product Page</h1>;
};

const ComponentProductPage = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.image} alt="iPhone" />
      <p>
        <strong>Price:</strong> ${data.price}
      </p>
      <p>
        <strong>Color:</strong> {data.color}
      </p>
      <p>
        <strong>Description:</strong> {data.description}
      </p>
      {data.instock ? (
        <p>
          <strong>In Stock</strong>
        </p>
      ) : (
        <p>Currently Out of Stock</p>
      )}
    </div>
  );
};

const Footer = () => {
  return <p>&copy; {new Date().getFullYear()} Apple Inc.</p>;
};

export default function App() {
  const phoneData = {
    name: "iPhone 15 Pro",
    image: "https://via.placeholder.com/150",
    price: 499.99,
    color: "Midnight Green",
    description:
      "The latest flagship smartphone from the Apple with outdated features and crap design ",
    instock: true,
  };

  return (
    <div>
      <Header />
      <main>
        <ComponentProductPage data={phoneData} />
      </main>
      <Footer />
    </div>
  );
}
