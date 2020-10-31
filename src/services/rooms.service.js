import http from '../components/http-common'

class RoomDataService {
    getAll() {
      return http.get("/rooms");
    }
  
    get(id) {
      return http.get(`/rooms/${id}`);
    }
  
    create(data) {
      return http.post("/rooms", data);
    }
  
    update(id, data) {
      return http.put(`/rooms/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/rooms/${id}`);
    }
  
    deleteAll() {
      return http.delete(`/rooms`);
    }
  
    findByName(name) {
      return http.get(`/rooms?name=${name}`);
    }
  }
  
  export default new RoomDataService();