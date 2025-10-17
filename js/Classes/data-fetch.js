export class DataFetcher {
  static instances = 0;

  constructor() {
    this.currentPage = 1;
    this.data = [];
    DataFetcher.instances += 1;
  }

  nextPage() {
    this.currentPage += 1;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }

  async fetchPage(limit = 5) {
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${this.currentPage}&_limit=${limit}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonData = await response.json();
      this.data = jsonData;

      return this.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async showPage(limit) {
    const data = await this.fetchPage(limit);
    console.log(data);
  }

  reset() {
    this.currentPage = 1;
  }
}

const df = new DataFetcher();

await df.showPage(3);
df.nextPage();
await df.showPage(3);
df.prevPage();
await df.showPage(3);
console.log(DataFetcher.instances); // 1
