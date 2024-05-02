
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us"];

  let domains = [];

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        let link = pronoun[a] + adj[b] + noun[c];
        for (let d = 0; d < extensions.length; d++) {
          domains.push(link + extensions[d]);
        }
      }
    }
  }

console.log(domains);