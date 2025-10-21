"use strict";

class AdvencedFetcher {
  static instances = 0;

  constructor(baseURL, options = {}) {
    const { defaultLimit = 5, maxRetries = 3, backoffMs = 200 } = options;
    this.baseURL = baseURL;
    AdvencedFetcher.instances += 1;

    let currentPage = 1;
    let isFetching = false;

    this.getPage = () => currentPage;
    this.setPage = (n) => {
      if (n < 0) {
        throw new Error("Page number cannot be negative");
      }
      currentPage = n;
    };
    this.nextPage = () => (currentPage += 1);
    this.prevPage = () => {
      if (currentPage === 1) {
        throw new Error("Already at the first page");
      }
      currentPage -= 1;
    };

    this.isFetching = () => isFetching;
  }
}

const fetcher = new AdvencedFetcher("https://api.example.com/data");
console.log(fetcher.instances); // 1
