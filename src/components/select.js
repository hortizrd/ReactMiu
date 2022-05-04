import {useState} from 'react'

const select = () => {
    const [selected, setSelected] = useState('Choose one option');
  return (


    <>
        <div>select</div>
    <section>
    <h2>Select</h2>
    <select onChange={(e) => setSelected(e.target.value)}>
        <option value="" disabled>
        Please select one
        </option>
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>Fullstack Developer</option>
    </select>
    <p>Selected: {selected}</p>
</section>
    
    </>
  )
}

export default select