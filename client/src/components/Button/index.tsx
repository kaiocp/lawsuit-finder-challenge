import style from './Button.module.scss';
interface Props {
    disabled: boolean;
}

const Button = ({ disabled }: Props) => {
    return (
        <button
            type="submit"
            className={style.button}
            disabled={disabled}
        >
            Buscar
        </button>
    )
}

export default Button;