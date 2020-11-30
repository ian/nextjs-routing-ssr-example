import { getList } from "../../data/lists"

export default (req, res) => {
  const list = getList(req.query.slug)
  if (list) {
    res.statusCode = 200
    res.json(list)
  } else {
    res.statusCode = 404
    res.send("Error: Not Found")
  }
}
