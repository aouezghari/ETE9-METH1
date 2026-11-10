import { accountCommand } from "./accountCommand.mjs";

const account = accountCommand.addAccount("Ouezghari", "Assia");

accountCommand.saveAccount(account.id, "Ouezghari", "Assia Marie");