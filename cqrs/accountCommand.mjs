import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";

export const accountCommand = {
  addAccount(lastName, firstName) {
    const account = new Account(undefined, lastName, firstName);
    accountCommandDAO.insertAccount(account);
    accountCommandDAO.insertAccountSummary(account);
    return account;
  },

  saveAccount(id, lastName, firstName) {
    const account = accountCommandDAO.retrieveAccountForUpdate(id);

    account.lastName = lastName;
    account.firstName = firstName;

    accountCommandDAO.updateAccount(account);
    accountCommandDAO.updateAccountSummary(account);
  },
};