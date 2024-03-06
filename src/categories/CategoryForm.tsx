import { addCategory } from '../services/apiFacade'
import { useState } from 'react'

const EMPTY_CATEGORY = {
    name: '',
}

export default function CategoryForm() {
    const [formData, setFormData] = useState(EMPTY_CATEGORY)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const newCategory = await addCategory(formData)
        alert('New category added')
        console.info('New category', newCategory)
    }

    return (
        <>
            <h2>Add a category</h2>
            <form>
                <label htmlFor="name">Category name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Add</button>
            </form>
        </>
    )
}
