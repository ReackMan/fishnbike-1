import axios from 'axios'
import { ProductType } from './types'

const telegramBotAPIKey = '6792230247:AAFy_VMz4kVVcn7xewjk8AjCnIudwCrM9ik'

export const endpoint = `https://api.telegram.org/bot${telegramBotAPIKey}/`

const instance = axios.create({
    baseURL: `${endpoint}`
})

export const telegramAPI = {
    sendMessage(data: { amount: number, order: ProductType[] }) {

        const aaa = [...data.order].map((p, index) => {
            return (index + 1) + '.\n' + 'Название: ' + p.headerText + '\n' +
                'Кол-во: ' + p.orderCount + '\n' +
                'Цена: ' + p.amount + '\n' +
                'Параметры: ' + (p.parameters
                    ? (
                        'АКБ: ' + p.parameters.battery + '\n' +
                        'Размер: ' + p.parameters.size + '\n' +
                        'Курок газа: ' + p.parameters.gas + '\n' +
                        'PAS-датчик: ' + p.parameters.pas + '\n' +
                        'Ручки тормоза: ' + p.parameters.brake + '\n'
                    )
                    : '---\n')
        })
        const text = `Заказ №${Math.floor(Math.random() * (199999 - 100000) + 100000)}\n`
            + (aaa.join('')) + '\n' + 'Сумма: ' + data.amount
        debugger
        return instance.post(`sendMessage`, {
            chat_id: '6230241126',
            text: text
        })
    }
}