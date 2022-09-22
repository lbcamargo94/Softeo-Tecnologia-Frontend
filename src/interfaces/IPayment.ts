interface IPayment {
  id?: number;
  purchaseId: number;
  paymentValue: number;
  paymentType: string;
  paymantDate: string;
  dueDate: string;
  paid: boolean;
}

export default IPayment;
