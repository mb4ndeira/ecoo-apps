interface ButtonProps{
    title: string
    className?: string
    type?: "button" | "submit" | "reset";
}

export default function Button({ title, className, type }: ButtonProps){
    const buttonClassName = `w-full px-3 py-4 font-semibold rounded-lg ${className}`;

    return (
        <button type={type} className={buttonClassName}>{title}</button>
    )
}