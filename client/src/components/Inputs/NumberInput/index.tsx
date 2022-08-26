import InputMask from "react-input-mask";
import style from '../Inputs.module.scss';

interface Props {
    value: string;
    onChange: (ev: React.FormEvent<HTMLInputElement>) => void;
}

const NumberInput = ({ value, onChange }: Props) => {

    return (
        <div className={style.input}>
            <label htmlFor="cnjInput">Número do processo</label>
            <InputMask
                className={style.input__field}
                id="cnjInput"
                mask='9999999-99.9999.9.99.9999'
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default NumberInput;