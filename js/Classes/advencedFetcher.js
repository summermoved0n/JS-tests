"use strict";

export class AdvencedFetcher {
  constructor(baseUrl, options = {}) {
    const { defaultLimit = 5, maxRetries = 3, backoddMs = 200 } = options;
    this.baseUrl = baseUrl;
    this.options = options;

    let currentPage = 1;
    let isFetchingFlag = false;
    let cache = new Map();

    this.getPage = () => currentPage;
    this.setPage = (page) => {
      currentPage = page;
    };
    this.nextPage = () => (currentPage += 1);
    this.prevPage = () => (currentPage -= 1);

    this.isFetching = () => isFetchingFlag;
    this.setFetching = (flag) => {
      if (typeof flag !== "boolean") {
        throw new Error("Flag must be a boolean");
      }
      isFetchingFlag = flag;
    };

    this.getFromCache = (page, limit) => cache.get(`${page}-${limit}`) || null;
    this.setCache = (page, limit, data) => {
      cache.set(`${page}-${limit}`, { data, fetchedAt: Date.now() });
    };

    this.getStats = () => {};
  }
}

const AF = new AdvencedFetcher("https://api.example.com/data");
console.log(AF.getPage()); // 1
