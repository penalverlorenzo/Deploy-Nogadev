export class ApiServices {
  constructor (baseUrl, endpoint){
    this.baseUrl = baseUrl;
    this.endpoint = endpoint;
  }
  async getData () {
    try {
      const res = await fetch(`${this.baseUrl}${this.endpoint}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log({errorService: error});
      throw error;
    }
  }
  async create (payload) {
    try {
      const res = await fetch(`${this.baseUrl}${this.endpoint}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log({errorService: error});
      throw error;
    }
  }
  async update (payload) {
    try {
      const res = await fetch(`${this.baseUrl}${this.endpoint}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log({errorService: error});
      throw error;
    }
  }
}