interface Props {
    onClick: (ev: any) => void;
    disabled: boolean;
}

const Button = ({ onClick, disabled }: Props) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
        >
            Buscar
        </button>
    )
}

export default Button;