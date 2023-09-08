export class Store {
    private dataList: any[] = [];


    public constructor(dataList: any[]) {
        this.dataList = dataList;
    }

    /**
     * This method stores data in the dataList array
     * @param data - Data object  which represents the data to store
     */
    public storeData(data?: any) {
        if (this.checkSerializability(data)) this.dataList.push(data);
        else console.error("Please check data structure !");
    }

    /**
     * This method checks data serializability of a data
     * @param data - Data object
     */
    private checkSerializability(data? : any) : boolean {
        return data && JSON.stringify(data) !== undefined;
    }

    /**
     * This method is used to search a data in the stored values by id
     * @param id - string variable which represents the data id
     * @returns Data - Data object
     */
    public retrieveStoredValue(id: string): any {
        return this.dataList.find(e => e.id == id);
    }

    /**
     * This method is used to display all stored data
     */
    public displayAllStoredValues() {
        this.dataList.forEach(data => console.log(data));
    }


    // This is an example of reading operation
    /**
     * This method is used to display a data selected its index in the dataList array
     * @param index - string variable representing the index of the data in the dataList array
     */
    public displayDataContent(index: number) {
        if (this.dataList[index]) console.log(this.dataList[index]);
        else console.error("Data not found !");
    }


    // These are examples of writing operations
    /**
    * This method is used to update a data photo
    * @param index - number input represents the data index in the dataList array
    * @param photoUrl - string representing the new photo url to add
    */
    public updateUserPhoto(index: number, photoUrl: string) {
        if (this.dataList[index]) {
            this.dataList[index].photoUrl = photoUrl;
        } else console.error("Data not found !");
    }

    /**
     * This method is used to update a data address
     * @param index - number input represents the data index in the dataList array
     * @param address - Address object representing the new address to add
    */
    public updateUserAddress(index: number, address: any) {
        if (this.dataList[index]) {
            this.dataList[index].address = address;
        } else console.error("Data not found !");
    }

    /**
        * This method is used to update a data city
        * @param index - number input represents the data index in the dataList array
        * @param city - string representing the new city to add
    */
    public updateUserCity(index: number, city: string) {
        if (this.dataList[index]) {
            // usage of nested keys
            this.dataList[index].address.city = city;
        } else console.error("Data not found !");
    }
}

