import React from "react";
import styles from './card.css';
import { TextContent } from "./TextContent/TextContent";
import { Preview } from "./Preview/Preview";
import { Menu } from "./Menu/menu";
import { Controls } from "./Controls/controls";

export function Card() {
    return (
        <li className={styles.card}>
            <TextContent />
            <Preview />
            <Menu />
            <Controls />
        </li>
    );
}