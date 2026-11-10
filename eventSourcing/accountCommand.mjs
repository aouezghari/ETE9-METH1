import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { Event } from "./event.mjs";
import { addEvent } from "./eventStore.mjs";

export const accountCommand = {
  addAccount(lastName, firstName) {
    const account = new Account(undefined, lastName, firstName);
    const event = new Event("accountAdded", account.id, account);
    addEvent(event);
    accountCommandDAO.insertAccountSummary(account);
    accountCommandDAO.updateAccountCache(account);
    return account;
  },

  saveAccount(id, lastName, firstName) {
    const account = accountCommandDAO.retrieveAccountForUpdate(id);

    account.lastName = lastName;
    account.firstName = firstName;

    accountCommandDAO.updateAccount(account);
    accountCommandDAO.updateAccountSummary(account);
    accountCommandDAO.updateAccountCache(account);
  },
};