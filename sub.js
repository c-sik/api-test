import axios from "axios";

class SubmitService {
  createGuest(guest) {
    return axios.post(process.env.REACT_APP_WAITLIST_API_URL, guest)
  }
}

export default new SubmitService();