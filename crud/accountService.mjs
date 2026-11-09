import { Account } from "./account.mjs";
import { accountDAO } from "./accountDAO.mjs";

export const accountService = {
  addAccount(lastName, firstName) {
    const account = new Account(undefined, lastName, firstName);
    accountDAO.insertAccount(account);
    return account;
  },

  getAccountList() {
    return accountDAO.retrieveAccountList();
  },
  saveAccount(id, lastName, firstName) {
    const account = accountDAO.retrieveAccount(id);
  
    const updatedAccount = new Account(
      account.id,
      lastName,
      firstName,
      account.creationDate
    );
  
    accountDAO.updateAccount(updatedAccount);
  },  getAccount(id) {
    return accountDAO.retrieveAccount(id);
  },
};