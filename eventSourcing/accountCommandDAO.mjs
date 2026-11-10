import { Account } from "./account.mjs";
import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountCommandDAO = {
    updateAccountCache(account) {
        accountCache[account.id] = {
          id: account.id,
          name: `${account.lastName} ${account.firstName}`,
          creationDate: account.creationDate,
        };
      },
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("Contenu de la BDD :", ACCOUNT_LIST);
  },

  retrieveAccountForUpdate(id) {
    const account = ACCOUNT_LIST.find((item) => item.id === id);

    if (!account) {
      throw new Error("Compte introuvable");
    }

    return new Account(
      account.id,
      account.lastName,
      account.firstName,
      account.creationDate
    );
  },

  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex((item) => item.id === account.id);

    if (index === -1) {
      throw new Error("Compte introuvable");
    }

    ACCOUNT_LIST[index] = account;
    console.log("Contenu de la BDD :", ACCOUNT_LIST);
  },
  insertAccountSummary(account) {
    const { creationDate, ...summary } = account;
    accountSummaryList.push(summary);
  },
  
  updateAccountSummary(account) {
    const index = accountSummaryList.findIndex(
      (item) => item.id === account.id
    );
  
    if (index === -1) {
      throw new Error("Résumé du compte introuvable");
    }
  
    const { creationDate, ...summary } = account;
    accountSummaryList[index] = summary;
  },
};