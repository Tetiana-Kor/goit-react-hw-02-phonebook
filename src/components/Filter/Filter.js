import s from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <>
      <label className={s.filter}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}
