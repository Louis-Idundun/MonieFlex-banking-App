const TableCell = ({ text, mode = 'DEBIT', isAmount = false }) => {
    return (
        <td className="px-6 py-4 whitespace-nowrap" style={{
            color: mode === 'CREDIT' && isAmount ? "#00FA9A" 
            : mode === 'DEBIT' && isAmount ? "#DC143C"
            : null
        }}>
            {text}
        </td>
    );
};

const TableRow = ({ children, mode = 'DEBIT' }) => {
    return (
        <tr 
            className={`self-stretch  w-full items-stretch justify-between 
            gap-5 mt-2.5 pl-7 pr-4 py-3.5 rounded-md max-md:max-w-full max-md:flex-wrap max-md:pl-5`}
            style={{
                backgroundColor: `${mode === 'DEBIT' ? "#FFF7F9" : "#FFFFFF"}`,
            }}
        >
            {children}
        </tr>
    );
};


export const TransactionTable = ({ transactions = [{
    username: '', description: '', type: "", amount: 5000, dateTime: ""
}] }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-white">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6">Time</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">{
                transactions.map((transaction, key) => {
                    return <TableRow key={ key } mode={ transaction.type.toUpperCase() }>
                        <TableCell 
                            text={transaction.username}
                        />
                        <TableCell 
                            text={transaction.description}
                        />
                        <TableCell 
                            text={`₦${transaction.amount}`} 
                            isAmount={ true }
                            mode={ transaction.type.toUpperCase() }
                        />
                        <TableCell 
                            text={new Date(transaction.dateTime).toLocaleDateString()}
                        />
                        <TableCell 
                            text={new Date(transaction.dateTime).toLocaleTimeString()}
                        />
                    </TableRow>
                })
            }
            </tbody>
        </table>
    );
  };