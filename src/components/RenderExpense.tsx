import { useContext } from "react";
import Expense from "@/types/ExpenseType";
import { AdminContext } from "@/components/HomePage";

type ExpenseComponentProps = {
    data: Expense[];
    removeOne: (id: number) => void;
};

const MapExpense = ({ data, removeOne }: ExpenseComponentProps) => {
    const isAdmin = useContext(AdminContext);

    return (
        <>
            {data.map(({ id, name, cost }) => (
                <div key={id} className="border border-sky-500 p-2 w-44 m-2">
                    <h1>{name}</h1>
                    <div>{cost}</div>
                    {isAdmin && (
                        <button
                            type="button"
                            onClick={() => removeOne(id)}
                            className="border border-cyan-300 my-2 py-1 px-2"
                        >
                            Delete
                        </button>
                    )}
                </div>
            ))}
        </>
    );
};

export default MapExpense;
