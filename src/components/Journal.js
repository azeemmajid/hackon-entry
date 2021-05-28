export function Journal({ feeling, setFeeling }) {
    const handleChange = ({ target }) => {
        const { value } = target;
        const current = {
            ...feeling,
            activity: value,
        };
        setFeeling(current);
    };
    return (
        <div>
            <h3>What did you do today?</h3>
            <textarea onChange={handleChange}></textarea>
        </div>
    );
}
