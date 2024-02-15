
export type FieldErrorType = { field: string; error: string }
export type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors?: FieldErrorType[]
    data: D
}

export type ProductType = {
    amount: number
    headerText: string
    category: string
    count: number
    imgSrc: string
    id: string
    orderCount: number
    batteries?: BikeBatteriesType
    parameters?: BikeParamsType
}

export type BikeParamsType = {
    battery: string
    brake: boolean
    gas: boolean
    pas: boolean
    size: number
}

// type BikeBatteriesType = {
//     '5-2'?: number
//     '10-5'?: number
//     '13-0': number
//     '15-6': number
//     '17-5': number
//     '24-5': number
// }

export type BikeBatteriesType = {
    [p: string]: number
}

export type UpdateProductModelType = {
    amount?: number
    count?: number
    parameters: {
        battery?: string
        brake?: boolean
        gas?: boolean
        pas?: boolean
        size?: number
    }
}