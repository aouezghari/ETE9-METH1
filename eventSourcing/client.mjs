import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";
import { eventList } from "./eventStore.mjs";

accountCommand.addAccount("Ouezghari", "Assia");

console.log("Événements :", eventList);
console.log("Liste des comptes :", accountQuery.getAccountList());