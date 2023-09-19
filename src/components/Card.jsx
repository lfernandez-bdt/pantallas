//tarjeta con sombreado
export const Card = ({ children, Icon = null, title, style = {}, className = '' }) => (
    <section style={{
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
        borderRadius: '10px',
        padding: '1rem',
    }}>
        <header style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '1.5rem',
            position: 'relative'
        }}>
            {Icon && <Icon />}
            <h2 style={{
                fontSize: 'inherit',
                margin: 0
            }}>{title}</h2>
        </header>
        <main className={className} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '-webkit-fill-available',
            ...style
        }}>
            {children}
        </main>
    </section >
);