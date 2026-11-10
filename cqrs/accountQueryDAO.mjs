import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

export const accountQueryDAO = {
    retrieveAccountList() {
        return accountSummaryList.map((account) => ({ ...account }));
    },

  retrieveAccount(id) {
    const account = ACCOUNT_LIST.find((item) => item.id === id);

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