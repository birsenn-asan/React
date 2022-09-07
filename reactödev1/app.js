import getData from "./userinfo.js";

(async () => {
    const id = process.argv[2];
    console.log(id)
    const res = await getData(id);
    console.log(res);
})()
  