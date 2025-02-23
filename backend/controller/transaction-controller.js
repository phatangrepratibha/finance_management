import Transaction from "../model/transaction-model.js";


// Add Transaction
export const addTransaction = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { amount, type, category, date, reference, description } = req.body;


    const newTransaction = new Transaction({
      userId,
      amount,
      type,
      category,
      date,
      reference,
      description,
    });

    await newTransaction.save();
    return res.status(201).json({ message: "Transaction Added Successfully" });
  } catch (error) {
    next(error);
  }
};

export const getTransaction = async (req, res, next) => {
  try {
    
    const userId = req.userId;

    const transactions = await Transaction.find({userId});

    return res.status(200).json({ transactions });
  } catch (error) {
    next(error);
  }
};




export const updateTransaction = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateData = req.body;

    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true } // This ensures that the updated document is returned
    );

    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    return res.status(200).json(updatedTransaction);
  } catch (error) {
    next(error);
  }
};


export const deleteTransaction=async(req,res)=>{
  try {
    const id = req.params.id;
    const deletedTransaction = await Transaction.findByIdAndDelete(id);
    if (!deletedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    return res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    next(error);
  }
}



export default {addTransaction,getTransaction,updateTransaction,deleteTransaction}