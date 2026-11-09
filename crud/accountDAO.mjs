import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
    retrieveAccountForUpdate(id) {
        const account = ACCOUNT_LIST.find((account) => account.id === id);
    
        if (!account) {
          throw new Error("Compte introuvable");
        }
    
        return new Account;
    },

  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("Contenu de la BDD :", ACCOUNT_LIST);
  },
  retrieveAccountList() {
    return ACCOUNT_LIST.map(({ creationDate, ...account }) => account);
  },
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex(
      (item) => item.id === account.id
    );
  
    if (index === -1) {
      throw new Error("Compte introuvable");
    }
  
    ACCOUNT_LIST[index] = account;
    console.log("Contenu de la BDD :", ACCOUNT_LIST);
  },
  retrieveAccount(id) {
    const account = ACCOUNT_LIST.find((account) => account.id === id);
  
    if (!account) {
      throw new Error("Compte introuvable");
    }
  
    const { lastName, firstName, ...otherProperties } = account;
  
    return {
      ...otherProperties,
      name: `${lastName} ${firstName}`,
    };
  },
};