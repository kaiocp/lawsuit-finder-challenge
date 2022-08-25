import InputMask from "react-input-mask";

interface Props {
    value: string;
    onChange: (ev: React.FormEvent<HTMLInputElement>) => void;
}

const NumberInput = ({ value, onChange }: Props) => {

    return (
        <div>
            <label htmlFor="cnjInput">Número do processo</label>
            <InputMask
                id="cnjInput"
                mask='9999999-99.9999.9.99.9999'
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default NumberInput;