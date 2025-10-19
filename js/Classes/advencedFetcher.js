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
  }
}

const AF = new AdvencedFetcher("https://api.example.com/data");
console.log(AF.getPage()); // 1
