import axios from "axios";

export default {
  getBooks: function(q,res) {
    //return axios.get("/api/google", { params: { q: "title:" + q } });
     return axios.get("https://www.googleapis.com/books/v1/volumes", { params: { q: "title:" + q } 
    }).then( (res)=>{
      console.log("u got something!!  "+ res.data.items);
    }
  );
  },
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
