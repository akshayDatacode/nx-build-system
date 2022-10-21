// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Banner, Button } from '@myorg/common-ui';
import { exampleProducts } from '@myorg/products';

export function App() {
  return (
    <>
      {/* <NxWelcome title="store" /> */}
      <Banner text="Store Application" />
      <Button name="Store Button" />
      <ul>
        {exampleProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> Price: {product.price}
          </li>
        ))}
      </ul>
      <div />
    </>
  );
}

export default App;
