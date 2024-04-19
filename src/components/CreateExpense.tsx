import { useState, ChangeEvent } from "react";

interface FormData {
    name: string;
    cost: string;
}

const CreateExpense: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        cost: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "http://localhost:3001/api/create-expense",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json;charset=UTF-8",
                    },
                    body: JSON.stringify(formData),
                }
            );
            console.log(response);
            return response;
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="m-4 p-2 border border-cyan-400 w-1/4 flex flex-col h-40 justify-center"
            >
                <div className="border border-slate-300 mb-4">
                    <label>Name: </label>
                    <input
                        name="name"
                        type="text"
                        onChange={handleChange}
                        value={formData.name}
                    />
                </div>
                <div className="border border-slate-300 mb-4">
                <label>Cost: </label>
                <input
                    name="cost"
                    type="number"
                    onChange={handleChange}
                    value={formData.cost}
                />
                </div>
                <button
                    type="submit"
                    className="py-1 px-2 border border-teal-400 bg-slate-300"
                >
                    Add Expense
                </button>
            </form>
        </>
    );
};
export default CreateExpense;
