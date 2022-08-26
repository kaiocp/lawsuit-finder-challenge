import style from '../Inputs.module.scss';
interface Props {
    courts: Array<string>;
    value: string;
    onChange: (ev: React.FormEvent<HTMLSelectElement>) => void;
}

const DropdownInput = ({ courts, value, onChange }: Props) => {

    return (
        <div className={style.input}>
            <label htmlFor="courtsDropdown">Tribunal</label>
            <select
                id="courtsDropdown"
                value={value}
                onChange={onChange}
                name="courts"
                >
                <option disabled defaultValue={'--'}></option>
                {courts.map((court, index) => (
                    <option key={index}>{court.toUpperCase()}</option>
                    )
                )}
            </select>
        </div>
    )
}

export default DropdownInput;