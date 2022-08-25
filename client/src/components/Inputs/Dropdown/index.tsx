interface Props {
    courts: Array<string>;
    value: string;
    onChange: (ev: React.FormEvent<HTMLSelectElement>) => void;
}

const DropdownInput = ({ courts, value, onChange }: Props) => {

    return (
        <div>
            <label htmlFor="courtsDropdown"></label>
            <select
                id="courtsDropdown"
                value={value}
                onChange={onChange}
                name="courts"
                >
            {courts.map((court, index) => (
                <option key={index}>{court.toUpperCase()}</option>
                )
            )}
            </select>
        </div>
    )
}

export default DropdownInput;