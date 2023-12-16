import { useEffect, useState } from "react";
import { TransactionTable } from "./TransactionContents";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const listOfTransactions = [
    { 
        id: 1, 
        username: 'Chinaza Herbert', 
        description: 'Payment received', 
        amount: 1500, 
        type: 'credit',
        dateTime: '2023-12-15T08:30:00Z' 
    },
    { 
        id: 2, 
        username: 'Obi Cubanna', 
        description: 'Purchase made', 
        amount: 1250, 
        type: 'debit',
        dateTime: '2023-12-14T12:45:00Z' 
    },
    { 
        id: 3, 
        username: 'Obi Banana', 
        description: 'Purchase made', 
        amount: 4250, 
        type: 'credit',
        dateTime: '2023-12-14T12:45:00Z' 
    },
    { 
        id: 4, 
        username: 'Obi Fanta', 
        description: 'Purchase made', 
        amount: 1640, 
        type: 'debit',
        dateTime: '2023-12-14T12:45:00Z' 
    },
    { 
        id: 5, 
        username: 'Obi Malaysia', 
        description: 'Purchase made', 
        amount: 1220, 
        type: 'credit',
        dateTime: '2023-12-14T12:45:00Z' 
    },
    { 
        id: 6, 
        username: 'Obi Wahala', 
        description: 'Purchase made', 
        amount: 2850,
        type: 'debit', 
        dateTime: '2023-12-14T12:45:00Z' 
    }
];

function TransactionHistory() {
    const [transactions, setTransactions] = useState([]);
    const [ active, setActive ] = useState(0)
    const [creditTransactions, setCreditTransactions] = useState([]);
    const [debitTransactions, setDebitTransactions] = useState([]);
  
    useEffect(() => {
      // Simulate fetching transactions from the backend
  
      setTransactions(listOfTransactions);
  
      // Filter transactions for credits and debits
      const creditRecords = listOfTransactions.filter((transaction) => transaction.type === 'credit');
      const debitRecords = listOfTransactions.filter((transaction) => transaction.type === 'debit');
  
      setCreditTransactions(creditRecords);
      setDebitTransactions(debitRecords);
    }, [ listOfTransactions ]);

    const handleClick = (key) => {
        setActive(key)
    }
    const activeStyle = {
        borderBottom: "#4A88DA solid 2px",
        cursor: "pointer"
    }
    const header = ["All Transactions", "Credits", "Debits"]
    const tabHeader = [transactions, creditTransactions, debitTransactions]
  
    return (
        <Tabs>
            <div className="border-bottom: none border-gray-200">
                <TabList className="flex" style={{
                    background: "#FFFFFF",
                    padding: "20px 20px 0 20px",
                    borderRadius: "24px 24px 0 0",
                    gap: "40px",
                    borderBottom: "#BDBDBD solid 2px"
                }}> {
                    header.map((item, key) => {
                        return <Tab 
                            key={ key }
                            onClick={() => handleClick(key)}
                            style={active === key ? activeStyle : {cursor: "pointer"}}
                            selectedClassName="text-blue-500 text-base font-bold whitespace-nowrap"
                        >{ item }</Tab>
                    })
                }
                </TabList>
            </div>
            {
                tabHeader.map((item, key) => {
                    return <TabPanel key={ key }>
                        <TransactionTable transactions={ item } />
                    </TabPanel>
                })
            }
        </Tabs>
    );
  };
  
  export default TransactionHistory;