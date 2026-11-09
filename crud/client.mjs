import { accountService } from "./accountService.mjs";

accountService.addAccount("Ouezghari", "Assia");
console.log("Liste des comptes :", accountService.getAccountList());