interface IPurchase {
  id?: number
  customerId: number
  treatmentId: number
  paymantType: string
  purchaseDate: Date
  totalInstallments: number
  totalValue: number
}

export default IPurchase
