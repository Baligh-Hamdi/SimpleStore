import {Address} from "./models/Address.model";
import {Data} from "./models/Data.model";

export class Store {
    dataList: Data[] = [];

    /*
     This method checks data serializability before storing it in the dataList array
        data : User object  which represents the data to store
     */
    public storeData(data: Data) {
        if (data && JSON.stringify(data) != undefined) this.dataList.push(data);
        else console.log("Please check data structure !");
    }

    /*
     *This method is used to search a data in the stored values by id
     *id : string variable which represents the data id
     */
    public retrieveStoredValue(id: string): Data {
        return this.dataList.find(e => e.id == id);
    }

    /*
     This method is used to display all stored data
     */
    public displayAllStoredValues() {
        this.dataList.forEach(user => console.log(user));
    }

    /*
     This method is used to display a data selected its index in the dataList array
        id : string variable representing the index of the data in the dataList array
     */
    public displayUserContent(index: number) {
        if (this.dataList[index]) console.log(this.dataList[index]);
        else console.log("Data not found !");
    }
    /*
    * This method is used to update user photo
    * index : number input represents the data index in the dataList array
    * photoPath : string representing the new photo path to add
    * */
    public updateUserPhoto(index: number, photoPath: string) {
        if (this.dataList[index]) {
            this.dataList[index].photoPath = photoPath;
        } else console.log("Data not found !");
    }

    /*
        * This method is used to update user address
        * index : number input represents the data index in the dataList array
        * address : Address object representing the new address to add
    * */
    public updateUserAddress(index: number, address: Address) {
        if (this.dataList[index]) {
            this.dataList[index].address = Address;
        } else console.log("Data not found !");
    }

    /*
        * This method is used to update user city
        * index : number input represents the data index in the dataList array
        * city : string representing the new city to add
    * */
    public updateUserCity(index: number, city: string) {
        if (this.dataList[index]) {
            this.dataList[index].address.city = city;
        } else console.log("Data not found !");
    }
}