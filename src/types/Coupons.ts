export interface ICoupon {
    _id: string;
    code: string;
    description: string;
    discount: number;
    isActive: boolean;
    priceMinimum: number;
}