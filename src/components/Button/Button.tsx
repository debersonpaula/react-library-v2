import React from 'react';

import * as styles from './styles.css';

export interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Button contents
   */
  label: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <div className={styles.classTheme}>
      <button {...props} className={styles.buttonStyle}>
        {label}
      </button>
    </div>
  );
};

export default Button;
