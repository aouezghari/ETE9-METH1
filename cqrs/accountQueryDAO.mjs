import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountQueryDAO = {
    retrieveAccountList() {
        return accountSummaryList.map((account) => ({ ...account }));
    },

    retrieveAccount(id) {
        const account = accountCache[id];
      
        if (!account) {
          throw new Error("Compte introuvable");
        }
      
        return { ...account };
      },
};