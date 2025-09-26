export const Card = ({children, className = '', ...props}) => {
    return(
        <div
        className={`glassmorphism rounded-2xl shadow-lg p-6 ${className}`}
        {...props}
        >
        {children}
        </div>
    );
};
 