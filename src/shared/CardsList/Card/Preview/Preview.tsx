import React from "react";
import styles from './preview.css';

export function Preview() {
    return (

        <div className={styles.preview}>
            <img
                className={styles.previewImg}
                src="https://cdn.dribbble.com/userupload/6703238/file/original-6708f8c7a48bb7135f89384d8714aa7a.jpeg?compress=1&resize=1200x900"
                alt="" />
        </div>
    );
}