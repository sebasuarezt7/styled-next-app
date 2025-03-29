import styles from '../../styles/StyledPage.module.css';
import styled from 'styled-components';

// Styled Component
const ColorButton = styled.button`
  background: ${props => props.color || 'palevioletred'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
`;

export default function StyledPage() {
  return (
    <div>
      {/* Inline Styles */}
      <header style={{
        backgroundColor: '#0070f3',
        color: 'white',
        fontSize: '1.5rem',
        padding: '20px',
        textAlign: 'center'
      }}>
        Meu Laboratório de Estilos
      </header>

      {/* CSS Module */}
      <div className={styles.container}>
        <button className={styles.myButton}>
          Botão com CSS Module
        </button>
      </div>

      {/* Styled Component */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <ColorButton color="#0070f3">Azul</ColorButton>
        <ColorButton color="#ff0080">Rosa</ColorButton>
      </div>
    </div>
  );
}