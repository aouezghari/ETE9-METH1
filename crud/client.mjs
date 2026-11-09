import { accountService } from "./accountService.mjs";

const account = accountService.addAccount("Ouezghari", "Assia");

console.log("Liste des comptes :", accountService.getAccountList());

accountService.saveAccount(account.id, "Ouezghari", "Assia Marie");