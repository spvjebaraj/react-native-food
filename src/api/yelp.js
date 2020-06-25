import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer oidhN1PPs50dzUu-JAM_iwhELm8snZgj_WOv_DbZnkd7T1WgeP-pv3qvio7NIhmWCjCIol8fEiQIrp7HO_NjWPJvPnc-q7mq4dk_PLFbmXQfsieKsLZUfDYRe8XUXnYx",
  },
});
