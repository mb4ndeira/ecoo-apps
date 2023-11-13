interface ButtonProps{
    title: string
    className?: string
    type?: "button" | "submit" | "reset";
    onClick?: () => void
}

export default function Button({ title, className, type, onClick }: ButtonProps){
    const buttonClassName = `w-full px-3 py-4 font-semibold rounded-lg ${className}`;

    return (
        <button onClick={onClick} type={type} className={buttonClassName}>{title}</button>
    )
}