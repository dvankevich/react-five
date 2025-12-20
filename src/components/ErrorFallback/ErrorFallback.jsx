import css from './ErrorFallback.module.css';

import { useNavigate } from 'react-router-dom';

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    resetErrorBoundary(); // Очищує стан ErrorBoundary
    navigate(-1); // Переходить назад
  };

  return (
    <div className={css.wrapper} role="alert">
      <h2 className={css.title}>Щось пішло не так</h2>
      <p className={css.message}>{error.message}</p>

      <div className={css.buttonGroup}>
        {/* Кнопка "Спробувати знову" (просто рендер сторінки заново) */}
        <button onClick={resetErrorBoundary}>Оновити</button>

        {/* Нова кнопка для повернення назад */}
        <button onClick={handleGoBack}>Повернутися назад</button>
      </div>
    </div>
  );
};
