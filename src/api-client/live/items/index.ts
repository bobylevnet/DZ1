import {
    ItemsApiClientUrlsInterface,
    ItemsApiClientInterface,
    ItemsApiClientModel
} from '@/models/api-client/items'
const urls: ItemsApiClientUrlsInterface = {
    fetchItems: `http://localhost:8080/route?rest={"model": "items", "action": "findall"}
    &datajs={"id" : "", "namec":"","selected":""}`
}
// Создаём экземпляр ItemsApiClient с url, который возвращает данные
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
// Экспортируем объект.
export default itemsApiClient