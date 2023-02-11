import axios from "axios";
axios.defaults.withCredentials = true;

// Put the list as dogs in the response

const Fetch = (lstAPI, childAPI, setDogs, message = "default") => {
  let dat = [];
  let promises = [];
  const fetchData = async () =>
    await axios
      .post(lstAPI, { message })
      .then((resp) => {
        return resp.data;
      })
      .catch((err) => {
        console.log(err);
      });

  fetchData()
    .then((data) => {
      for (let token of data.dogs) {
        promises.push(
          axios
            .post(childAPI, { token })
            .then((val) => dat.push({ ...val.data, token }))
        );
      }
    })
    .then(() => Promise.all(promises))
    .then(() => {
      setDogs(dat);
    });
};

export default Fetch;
