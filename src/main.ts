import data from "./data/data.json"
import {Store} from "./store";

export class Main {
    public store: Store = new Store(data);

    /**
     * This method tests all store class methods
     */
    public testStore() {
        this.store.displayAllStoredValues();
        this.store.retrieveStoredValue("12");
        this.store.storeData(data[0]);
        this.store.updateUserCity(0, "Paris");
        this.store.displayDataContent(18);
        this.store.updateUserAddress(4, {
            country: "France",
            city: "Toulouse",
            street: "Rue de la mairie"

        })
        this.store.updateUserPhoto(32, "https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg");
    }
}

let main = new Main();
main.testStore();

