import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    const styles = {
        header: {
            position: 'relative',
            display: 'flex',
            zIndex: 2,
            justifyContent: 'space-between',
            flexDirection: '',
        },
        navList: {
            listStyle: 'none',
            display: 'flex',
        },
        listItem: {
            margin: '0rem 1.2rem',
            fontWeight: '600',
            fontSize: '1rem',
            color: 'inherit',
        },
        title: {
            display: 'flex',
            justifyContent: 'center',
            textDecoration: 'none',
            margin: '1rem 1rem',
        },
        titleLink: {
            textDecoration: 'none',
        },
    };

    return (
        <div style={styles.header}>
            <div className="title" style={styles.title}>
                <a href="/" style={styles.titleLink}>
                    TITLE
                </a>
            </div>
            <ul class="navList">
                <li style={styles.listItem}>
                    <Link to="/">Home</Link>
                </li>
                <li style={styles.listItem}>
                    <Link to="/activity">Activity</Link>
                </li>
                <li style={styles.listItem}>Three</li>
            </ul>
        </div>
    );
}
