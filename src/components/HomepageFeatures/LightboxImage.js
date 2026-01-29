import { useState } from 'react';
import styles from './styles.module.css';

function LightboxImage({ src, alt }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={styles.featureImage}
        onClick={() => setOpen(true)}
        style={{ cursor: 'zoom-in' }}
      />

      {open && (
        <div className={styles.lightboxOverlay} onClick={() => setOpen(false)}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={() => setOpen(false)}
              aria-label="Fechar imagem"
            >
              ×
            </button>

            <img src={src} alt={alt} className={styles.lightboxImage} />
          </div>
        </div>
      )}
    </>
  );
}
