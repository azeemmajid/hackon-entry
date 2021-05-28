import react from 'react';

const Header = () => {
    const styles = {
        header: {
            position: 'relative',
            display: 'flex',
            zIndex: 2,
            justifyContent: 'space-between',
            flexDirection: ''
        },
        navList: {
            listStyle: 'none',
            display: 'flex',
        },
        listItem: {
            margin: '0rem 1.2rem',
            fontWeight: '600',
            fontSize: '1rem',
        },
        title: {
            display: 'flex',
            justifyContent: 'center',
            textDecoration: 'none',
            margin: '1rem 1rem',
        },
        titleLink: {
            textDecoration: 'none'
        }
    }

    return <div style={styles.header}>
        {/* title */}
        <div className="title" style={styles.title}>
            <a href="/" style={styles.titleLink}>
                TITLE
            </a>
        </div>
        <ul style={styles.navList}>
            <li style={styles.listItem}>Home</li>
            <li style={styles.listItem}>Two</li>
            <li style={styles.listItem}>Three</li>
        </ul>
    </div>
};

export default Header;