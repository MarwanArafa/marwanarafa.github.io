// Sample structure of the Courses component
const Courses = ({ courses }) => {
    return (
        <div>
            {courses.map(c => (
                <div key={c.id} className="course">
                    <h3>{c.title}</h3>
                    {c.status === 'in-progress' && (
                        <span className="badge" style={{ border: '2px solid yellow', borderRadius: '12px', padding: '5px', color: 'yellow', backgroundColor: 'transparent' }}>Learning Now</span>
                    )}
                </div>
            ))}
        </div>
    );
};