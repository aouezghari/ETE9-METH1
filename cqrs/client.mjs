import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

const account = accountCommand.addAccount("Ouezghari", "Assia");

console.log("Liste des comptes :", accountQuery.getAccountList());

accountCommand.saveAccount(account.id, "Ouezghari", "Assia Marie");

console.log("Compte récupéré :", accountQuery.getAccount(account.id));
console.log("Liste après modification :", accountQuery.getAccountList());