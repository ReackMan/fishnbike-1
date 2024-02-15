export {}
// import wheel from "../assets/images/wheel_10-5.jpg";
// import tf520 from "../assets/images/tf520.jpg";
// import toslon730 from "../assets/images/toslon730.jpg";
// import niMhAA2850mah from "../assets/images/ni-mh-aa-2850mah.jpg";
//
//
// const INCREASE_PRODUCT_COUNT = 'INCREASE-PRODUCT-COUNT'
// const DECREASE_PRODUCT_COUNT = 'DECREASE-PRODUCT-COUNT'
// const CHANGE_PRODUCT_AMOUNT = 'CHANGE-PRODUCT-AMOUNT'
// const DELETE_PRODUCT_COUNT = 'DELETE-PRODUCT-COUNT'
// const CHANGE_BATTERY = 'CHANGE-BATTERY'
// const CHANGE_SIZE = 'CHANGE-SIZE'
// const CHANGE_PAS = 'CHANGE-PAS'
// const CHANGE_GAS = 'CHANGE-GAS'
// const CHANGE_BRAKE = 'CHANGE-BRAKE'
// const DELETE_ALL_PARAMETERS = 'DELETE-ALL-PARAMETERS'
//
// const ACC52 = 'АКБ: 5,2 Ач'
// const ACC105 = 'АКБ: 10,5 Ач'
// const ACC156 = 'АКБ: 15,6 Ач'
// const ACC175 = 'АКБ: 17,5 Ач'
// const ACC245 = 'АКБ: 24,5 Ач'
//
// const PAS = 'PAS-датчик'
// const GAS = 'Курок газа с LCD-дисплеем'
// const BRAKE = 'Ручки тормоза 2шт'
//
// // export type ProductItemType = {
// //     headerText: string
// //     amount: number
// //     imgSrc: string
// //     count: number
// //     itemDescription: string
// //     id: string
// // }
//
// export type BikesItemType = {
//     headerText: string
//     amount: number
//     imgSrc: string
//     count: number
//     parameters: {
//         battery: string
//         size: string
//         pas: string
//         gas: string
//         brake: string
//     }
//     initialAmount: number
//     id: string
// }
//
// export type SonarsItemType = {
//     headerText: string
//     amount: number
//     imgSrc: string
//     count: number
//     id: string
// }
//
// export type BoatsItemType = {
//     headerText: string
//     amount: number
//     imgSrc: string
//     count: number
//     id: string
// }
//
// export type AccessoriesItemType = {
//     headerText: string
//     amount: number
//     imgSrc: string
//     count: number
//     id: string
// }
//
// export type ProductItemType = BikesItemType | SonarsItemType | BoatsItemType | AccessoriesItemType
//
// interface ProductsStateType {
//     bikeKits: BikesItemType[]
//     sonars: SonarsItemType[]
//     boats: BoatsItemType[]
//     accessories: AccessoriesItemType[]
// }
//
// let initialState: ProductsStateType = {
//     bikeKits: [
//         // {
//         //     headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
//         //     amount: 28490,
//         //     count: 0,
//         //     imgSrc: wheel,
//         //     parameters: {
//         //         battery: 'АКБ: 5,2 Ач',
//         //         size: 'Размер: 26"',
//         //         pas: 'Без датчика',
//         //         gas: 'Без курка',
//         //         brake: 'Без ручек',
//         //     },
//         //     initialAmount: 28490,
//         //     id: 'wheel1'
//         // },
//         // {
//         //     headerText: 'Электронабор Велоракета 350Вт (заднее колесо)',
//         //     amount: 28490,
//         //     count: 0,
//         //     imgSrc: wheel,
//         //     parameters: {
//         //         battery: 'АКБ: 5,2 Ач\n',
//         //         size: 'Размер: 26\"\n',
//         //         pas: 'PAS-датчик: Без датчика\n',
//         //         gas: 'Курок газа с LCD-дисплеем: Без курка\n',
//         //         brake: 'Ручки тормоза 2шт: Без ручек\n',
//         //     },
//         //     initialAmount: 28490,
//         //     id: 'wheel2'
//         // },
//         // {
//         //     headerText: 'Электронабор Велоракета 500Вт (переднее колесо)',
//         //     amount: 42290,
//         //     count: 0,
//         //     imgSrc: wheel,
//         //     parameters: {
//         //         battery: 'АКБ: 15,6 Ач\n',
//         //         size: 'Размер: 26\"\n',
//         //         pas: 'PAS-датчик: Без датчика\n',
//         //         gas: 'Курок газа с LCD-дисплеем: Без курка\n',
//         //         brake: 'Ручки тормоза 2шт: Без ручек\n',
//         //     },
//         //     initialAmount: 42290,
//         //     id: 'wheel3'
//         // },
//         // {
//         //     headerText: 'Электронабор Велоракета 500Вт (заднее колесо)',
//         //     amount: 42290,
//         //     count: 0,
//         //     imgSrc: wheel,
//         //     parameters: {
//         //         battery: 'АКБ: 15,6 Ач\n',
//         //         size: 'Размер: 26\"\n',
//         //         pas: 'PAS-датчик: Без датчика\n',
//         //         gas: 'Курок газа с LCD-дисплеем: Без курка\n',
//         //         brake: 'Ручки тормоза 2шт: Без ручек\n',
//         //     },
//         //     initialAmount: 42290,
//         //     id: 'wheel4'
//         // },
//         // {
//         //     headerText: 'Электронабор Велоракета 500Вт Sport (переднее колесо)',
//         //     amount: 47090,
//         //     count: 0,
//         //     imgSrc: wheel,
//         //     parameters: {
//         //         battery: 'АКБ: 15,6 Ач\n',
//         //         size: 'Размер: 26\"\n',
//         //         pas: 'PAS-датчик: Без датчика\n',
//         //         gas: 'Курок газа с LCD-дисплеем: Без курка\n',
//         //         brake: 'Ручки тормоза 2шт: Без ручек\n',
//         //     },
//         //     initialAmount: 47090,
//         //     id: 'wheel5'
//         // },
//         // {
//         //     headerText: 'Электронабор Велоракета 500Вт Sport (заднее колесо)',
//         //     amount: 47090,
//         //     count: 0,
//         //     imgSrc: wheel,
//         //     parameters: {
//         //         battery: 'АКБ: 15,6 Ач\n',
//         //         size: 'Размер: 26\"\n',
//         //         pas: 'PAS-датчик: Без датчика\n',
//         //         gas: 'Курок газа с LCD-дисплеем: Без курка\n',
//         //         brake: 'Ручки тормоза 2шт: Без ручек\n',
//         //     },
//         //     initialAmount: 47090,
//         //     id: 'wheel6'
//         // },
//     ],
//     sonars: [
//         {
//             headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
//             amount: 28490,
//             count: 0,
//             imgSrc: tf520,
//             id: 'sonar1'
//         },
//         {
//             headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
//             amount: 28490,
//             count: 0,
//             imgSrc: tf520,
//             id: 'sonar2'
//         },
//         {
//             headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
//             amount: 28490,
//             count: 0,
//             imgSrc: tf520,
//             id: 'sonar3'
//         },
//         {
//             headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
//             amount: 28490,
//             count: 0,
//             imgSrc: tf520,
//             id: 'sonar4'
//         },
//         {
//             headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
//             amount: 28490,
//             count: 0,
//             imgSrc: tf520,
//             id: 'sonar5'
//         },
//         {
//             headerText: 'Беспроводной эхолот Fish finder TF520 Li-ion',
//             amount: 28490,
//             count: 0,
//             imgSrc: tf520,
//             id: 'sonar6'
//         },
//     ],
//     boats: [
//         {
//             headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
//             amount: 28490,
//             count: 0,
//             imgSrc: toslon730,
//             id: 'boat1'
//         },
//         {
//             headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
//             amount: 28490,
//             count: 0,
//             imgSrc: toslon730,
//             id: 'boat2'
//         },
//         {
//             headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
//             amount: 28490,
//             count: 0,
//             imgSrc: toslon730,
//             id: 'boat3'
//         },
//         {
//             headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
//             amount: 28490,
//             count: 0,
//             imgSrc: toslon730,
//             id: 'boat4'
//         },
//         {
//             headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
//             amount: 28490,
//             count: 0,
//             imgSrc: toslon730,
//             id: 'boat5'
//         },
//         {
//             headerText: 'Прикормочный кораблик Carpboat Toslon Xboat 730',
//             amount: 28490,
//             count: 0,
//             imgSrc: toslon730,
//             id: 'boat6'
//         },
//     ],
//     accessories: [
//         {
//             headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
//             amount: 28490,
//             count: 0,
//             imgSrc: niMhAA2850mah,
//             id: 'accessories1'
//         },
//         {
//             headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
//             amount: 28490,
//             count: 0,
//             imgSrc: niMhAA2850mah,
//             id: 'accessories2'
//         },
//         {
//             headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
//             amount: 28490,
//             count: 0,
//             imgSrc: niMhAA2850mah,
//             id: 'accessories3'
//         },
//         {
//             headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
//             amount: 28490,
//             count: 0,
//             imgSrc: niMhAA2850mah,
//             id: 'accessories4'
//         },
//         {
//             headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
//             amount: 28490,
//             count: 0,
//             imgSrc: niMhAA2850mah,
//             id: 'accessories5'
//         },
//         {
//             headerText: 'Аккумуляторы NI-MH AA 2850mah — 8шт',
//             amount: 28490,
//             count: 0,
//             imgSrc: niMhAA2850mah,
//             id: 'accessories6'
//         },
//     ],
// }
//
//
// export interface ProductsActionsType {
//     type: 'INCREASE-PRODUCT-COUNT' | 'DECREASE-PRODUCT-COUNT' | 'DELETE-PRODUCT-COUNT' | 'CHANGE-BATTERY' |
//         'CHANGE-SIZE' | 'CHANGE-PAS' | 'CHANGE-GAS' | 'CHANGE-BRAKE' | 'CHANGE-PRODUCT-AMOUNT' |
//         'DELETE-ALL-PARAMETERS' | 'GET-PRODUCTS'
//     product: ProductItemType
//     battery: string
//     size: string
//     pas: string
//     gas: string
//     brake: string
//     products: BikesItemType[]
// }
//
// const productsReducer = (state = initialState, action: ProductsActionsType):ProductsStateType => {
//
//     const indexBike = state.bikeKits.indexOf(<BikesItemType>action.product)
//     const bike = state.bikeKits[indexBike]
//
//     const indexSonar = state.sonars.indexOf(<SonarsItemType>action.product)
//     const sonar = state.sonars[indexSonar]
//
//     const indexBoat = state.boats.indexOf(<BoatsItemType>action.product)
//     const boat = state.boats[indexBoat]
//
//     const indexAccessor = state.accessories.indexOf(<AccessoriesItemType>action.product)
//     const accessor = state.accessories[indexAccessor]
//
//     switch (action.type) {
//         case 'GET-PRODUCTS': {
//
//             return {...state, bikeKits: action.products}
//         }
//         case INCREASE_PRODUCT_COUNT: {
//             if (indexBike >= 0) {
//                 bike.count += 1
//             } else if (indexSonar >= 0) {
//                 sonar.count += 1
//             } else if (indexBoat >= 0) {
//                 boat.count += 1
//             } else if (indexAccessor >= 0) {
//                 accessor.count += 1
//             }
//             return {...state}
//         }
//         case DECREASE_PRODUCT_COUNT: {
//             if (indexBoat >= 0) {
//                 boat.count -= 1
//             } else if (indexSonar >= 0) {
//                 sonar.count -= 1
//             } else if (indexBike >= 0) {
//                 bike.count -= 1
//             } else if (indexAccessor >= 0) {
//                 accessor.count -= 1
//             }
//             return {...state}
//         }
//         case CHANGE_PRODUCT_AMOUNT: {
//
//             if (bike.id === 'wheel1' || bike.id === 'wheel2') {
//                 if (bike.parameters.battery === ACC52) {
//                     bike.initialAmount = 28490
//                 } else if (bike.parameters.battery === ACC105) {
//                     bike.initialAmount = 37490
//                 } else if (bike.parameters.battery === ACC156) {
//                     bike.initialAmount = 40850
//                 } else if (bike.parameters.battery === ACC175) {
//                     bike.initialAmount = 44650
//                 } else bike.initialAmount = 61750
//             } else if (bike.id === 'wheel3' || bike.id === 'wheel4') {
//                 if (bike.parameters.battery === ACC156) {
//                     bike.initialAmount = 42290
//                 } else if (bike.parameters.battery === ACC175) {
//                     bike.initialAmount = 46550
//                 } else bike.initialAmount = 59850
//             } else {
//                 if (bike.parameters.battery === ACC156) {
//                     bike.initialAmount = 47090
//                 } else if (bike.parameters.battery === ACC175) {
//                     bike.initialAmount = 52350
//                 } else bike.initialAmount = 63650
//             }
//
//             if (bike.parameters.pas === PAS &&
//                 bike.parameters.gas === GAS &&
//                 bike.parameters.brake === BRAKE) {
//                 bike.amount = bike.initialAmount + 3700
//             } else if (bike.parameters.pas === PAS &&
//                 bike.parameters.gas === GAS) {
//                 bike.amount = bike.initialAmount + 2800
//             } else if (bike.parameters.pas === PAS &&
//                 bike.parameters.brake === BRAKE) {
//                 bike.amount = bike.initialAmount + 1200
//             } else if (bike.parameters.gas === GAS &&
//                 bike.parameters.brake === BRAKE) {
//                 bike.amount = bike.initialAmount + 3400
//             } else if (bike.parameters.pas === PAS) {
//                 bike.amount = bike.initialAmount + 300
//             } else if (bike.parameters.brake === BRAKE) {
//                 bike.amount = bike.initialAmount + 900
//             } else if (bike.parameters.gas === GAS) {
//                 bike.amount = bike.initialAmount + 2500
//             } else {
//                 bike.amount = bike.initialAmount
//             }
//             return {...state}
//         }
//         case DELETE_PRODUCT_COUNT: {
//             if (indexBike >= 0) {
//                 state.bikeKits[indexBike].count = 0
//             } else if (indexSonar >= 0) {
//                 state.sonars[indexSonar].count = 0
//             } else if (indexBoat >= 0) {
//                 state.boats[indexBoat].count = 0
//             } else if (indexAccessor >= 0) {
//                 state.accessories[indexAccessor].count = 0
//             }
//             return {...state}
//         }
//         case CHANGE_BATTERY: {
//             bike.parameters.battery = action.battery
//             //
//             // if (bike.id === 'wheel1' || bike.id === 'wheel2') {
//             //     if (bike.parameters.battery === ACC52) {
//             //         bike.initialAmount = 28490
//             //     } else if (bike.parameters.battery === ACC105) {
//             //         bike.initialAmount = 37490
//             //     } else if (bike.parameters.battery === ACC156) {
//             //         bike.initialAmount = 40850
//             //     } else if (bike.parameters.battery === ACC175) {
//             //         bike.initialAmount = 44650
//             //     } else bike.initialAmount = 61750
//             // } else if (bike.id === 'wheel3' || bike.id === 'wheel4') {
//             //     if (bike.parameters.battery === ACC156) {
//             //         bike.initialAmount = 42290
//             //     } else if (bike.parameters.battery === ACC175) {
//             //         bike.initialAmount = 46550
//             //     } else bike.initialAmount = 59850
//             // } else {
//             //     if (bike.parameters.battery === ACC156) {
//             //         bike.initialAmount = 47090
//             //     } else if (bike.parameters.battery === ACC175) {
//             //         bike.initialAmount = 52350
//             //     } else bike.initialAmount = 63650
//             // }
//             // bike.amount = bike.initialAmount
//             return {...state}
//         }
//         case CHANGE_SIZE: {
//             state.bikeKits[indexBike].parameters.size = action.size
//             return {...state}
//         }
//         case CHANGE_PAS: {
//             bike.parameters.pas = action.pas
//             return {...state}
//         }
//         case CHANGE_GAS: {
//             bike.parameters.gas = action.gas
//             return {...state}
//         }
//         case CHANGE_BRAKE: {
//             bike.parameters.brake = action.brake
//             return {...state}
//         }
//         case DELETE_ALL_PARAMETERS: {
//             return state
//         }
//         default:
//             return state
//     }
// }
//
// export const increaseProductCountCreator = (product: ProductItemType | undefined) =>
//     ({type: INCREASE_PRODUCT_COUNT, product})
//
// export const decreaseProductCountCreator = (product: ProductItemType | undefined) =>
//     ({type: DECREASE_PRODUCT_COUNT, product})
//
// export const deleteProductCountCreator = (product: ProductItemType | undefined) =>
//     ({type: DELETE_PRODUCT_COUNT, product})
//
// export const changeBatteryCreator = (battery: string, product: ProductItemType | undefined) =>
//     ({type: CHANGE_BATTERY, battery, product})
//
// export const changeSizeCreator = (size: string, product: ProductItemType | undefined) =>
//     ({type: CHANGE_SIZE, size, product})
//
// export const changePasCreator = (pas: string, product: ProductItemType | undefined) =>
//     ({type: CHANGE_PAS, pas, product})
//
// export const changeGasCreator = (gas: string, product: ProductItemType | undefined) =>
//     ({type: CHANGE_GAS, gas, product})
//
// export const changeBrakeCreator = (brake: string, product: ProductItemType | undefined) =>
//     ({type: CHANGE_BRAKE, brake, product})
//
// export const changeProductAmountCreator = (product: ProductItemType | undefined) =>
//     ({type: CHANGE_PRODUCT_AMOUNT, product})
//
// export const getProductsCreator = (products: BikesItemType[] | undefined) =>
//     ({type: 'GET-PRODUCTS', products})
//
// export default productsReducer