import React from "react";
import styles from './textcontent.css';

export function TextContent() {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img className={styles.avatar}
                        src="https://img.icons8.com/?size=512&id=20563&format=png"
                        alt="avatar"
                    />
                    <a href="#user-url" className={styles.userName}>Дмитрий Гришин</a>
                </div>
                <span className={styles.createdAt}>
                    <span className={styles.publishedLabel}>опубликовано </span>
                    4 часа назад
                </span>
            </div>
            <h2 className={styles.title}>
                <a href="#post-url" className={styles.postLink}>
                    Следует отметить, что новая модель организационной. В целом, конечно, базовый вектор развития выявляет
                </a>
            </h2>
        </div>
    );
}