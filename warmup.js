function choisirAuHasard(premier, second) {
    return Math.random() < 0.5 ? premier : second;
  }
  
  const a = choisirAuHasard("foo", "bar");
  const b = choisirAuHasard(0, 1);
  const c = choisirAuHasard(["foo"], ["bar"]);
