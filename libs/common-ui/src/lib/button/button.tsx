import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  name: string
}

export function Button({ name }: ButtonProps) {
  return (
    <button className={styles['button']}>
        {name}
    </button>
  );
}

export default Button;
