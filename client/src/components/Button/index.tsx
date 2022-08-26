import style from './Button.module.scss';
interface Props {
    onClick: (ev: any) => void;
    disabled: boolean;
}

const Button = ({ onClick, disabled }: Props) => {
    return (
        <button
            className={style.button}
            onClick={onClick}
            disabled={disabled}
        >
            Buscar
        </button>
    )
}

export default Button;