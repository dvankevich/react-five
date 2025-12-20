import { useNavigate } from 'react-router-dom';
import css from './ErrorFallback.module.css';

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();

  // Функція для генерації "дружнього" повідомлення
  const getFriendlyMessage = err => {
    const message = err.message.toLowerCase();

    // Перевірка на помилку завантаження файлів (lazy loading)
    if (
      message.includes('loading chunk') ||
      message.includes('failed to fetch dynamically imported module')
    ) {
      return 'Схоже, виникли проблеми зі з’єднанням. Будь ласка, перевірте інтернет та оновіть сторінку.';
    }

    // Помилка за замовчуванням
    return err.message || 'Сталася невідома помилка в роботі додатка.';
  };

  const handleGoBack = () => {
    resetErrorBoundary();
    navigate(-1);
  };

  return (
    <div className={css.wrapper} role="alert">
      <h2 className={css.title}>Упс! Щось пішло не так</h2>

      {/* Показуємо зрозумілий текст */}
      <p className={css.userMessage}>{getFriendlyMessage(error)}</p>

      {/* Технічні деталі (можна приховати або зробити дрібними) */}
      <details className={css.details}>
        <summary>Технічна інформація</summary>
        <p className={css.technicalMessage}>{error.message}</p>
      </details>

      <div className={css.buttonGroup}>
        <button className={css.primaryBtn} onClick={resetErrorBoundary}>
          Спробувати ще раз
        </button>
        <button className={css.secondaryBtn} onClick={handleGoBack}>
          Повернутися назад
        </button>
      </div>
    </div>
  );
};
