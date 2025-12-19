import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <h1>Вітаємо на головній сторінці</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
        voluptatum voluptate.
      </p>
      <button onClick={() => navigate('/about')}>
        Перейти на сторінку "Про нас"
      </button>
      <button onClick={() => navigate('/products')}>
        Перейти на сторінку "Продукти"
      </button>
    </main>
  );
}
